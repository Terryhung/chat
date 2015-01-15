$(document).ready(function() {
      var myDataRef = new Firebase('https://blistering-heat-1919.firebaseio.com/');
      <!-- this is test -->
      $('#who').keypress(function (e) {
        if (e.keyCode == 13) {
          myDataRef.on('child_added', function(snapshot) {
            var message = snapshot.val();
            if (message.name == $('#who').val()){
              displayChatMessage(message.name, message.text);
            }
          });
        }
      });

      $('#chat').keypress(function (e) {
        if (e.keyCode == 13) {
          $('#messagesDiv').html('')
          myDataRef.on('child_added', function(snapshot) {
            var message = snapshot.val();
            if (message.name == $('#who').val() && message.chat == $('#chat').val()) {
              displayChatMessage(message.name, message.text, 'my_right');
            } else if(message.chat == $('#who').val() && message.name == $('#chat').val()){
              displayChatMessage(message.name, message.text, 'my_left');
            };
          });
        }
      });

      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#who').val();
          var text = $('#messageInput').val();
          var chat = $('#chat').val();
          if(text == "fuck"){
            remove_text = text.substring(1,3);
            replace_text = "**";
            text = text.replace(remove_text, replace_text);
            alert("don't say that again!");
          };
          myDataRef.push({name: name, text: text, chat: chat});
          $('#messageInput').val('');
        }
      });

      function displayChatMessage(name, text, klass) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).addClass(klass).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };

});

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
          myDataRef.push({name: name, text: text, chat: chat});
          $('#messageInput').val('');
        }
      });

      function displayChatMessage(name, text, klass) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).addClass(klass).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };

});

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
            if ((message.name == $('#who').val() && message.chat == $('#chat').val()) || (message.chat == $('#who').val() && message.name == $('#chat').val())){
              displayChatMessage(message.name, message.text);
            }
          });
        }
      });

      $('#listall').click(function(){
        var member = "hi";
        console.log(member)
        myDataRef.on('child_added', function(snapshot) {
          var member = snapshot.val();
          member.push(member.name);
          member.push(member.chat);
        });
        member = arrayUnique(member);
        console.log(member)
        for (i = 0; i < member.length; i++) {
          displayMember(member[i])
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

      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };

});

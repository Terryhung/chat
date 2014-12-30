$(document).ready(function() {
      var myDataRef = new Firebase('https://terryuser-database.firebaseio.com/');
      $('#memberlist').click(function() {
            var member = [];
            myDataRef.on('child_added', function(snapshot) {
                  var data_info = snapshot.val();
                  member.push(data_info.name);
            });
            for (i = 0; i < member.length; i++) {
                  displayMember(member[i]);
            }
      });
      
      function displayMember(name) {
        $('<div/>').text(name).appendTo($('#memberDiv'));
        $('#memberDiv')[0].scrollTop = $('#memberDiv')[0].scrollHeight;
      };
});

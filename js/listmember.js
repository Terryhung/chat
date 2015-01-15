$(document).ready(function() {
      var my_memberlist = new Firebase('https://terryuser-database.firebaseio.com/');
      $('#listall').click(function() {
            var member = [];
            my_memberlist.on('child_added', function(snapshot) {
                  var data_info = snapshot.val();
                  member.push(data_info.name);
            });

            for (i = 0; i < member.length; i++) {
                  if (member[i] != $("#who").val()) {
                        displayMember(member[i]);
                  }
            };
      });
      
      function displayMember(name) {
        $('<div/>').text(name).addClass('sub_name').appendTo($('#memberDiv'));
        $('#memberDiv')[0].scrollTop = $('#memberDiv')[0].scrollHeight;
      };
});

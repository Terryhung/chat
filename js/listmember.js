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
                        my_memberlist.child(member[i]).once('value', function(snapshot) {
                              if(snapshot.val() !== null){
                                    displayMember(member[i]);
                              };
                        });
                  };
            };
      });
      
      $('#listall_offline').click(function() {
            var member = [];
            my_memberlist.on('child_added', function(snapshot) {
                  var data_info = snapshot.val();
                  member.push(data_info.name);
            });

            for (i = 0; i < member.length; i++) {
                  if (member[i] != $("#who").val()) {
                        my_memberlist.child(member[i]).once('value', function(snapshot) {
                              if(snapshot.val() == null){
                                    displayMember_offline(member[i]);
                              };
                        });
                  };
            };
      });
      
      function displayMember(name) {
        $('<div/>').text(name).addClass('sub_name').appendTo($('#memberDiv'));
        $('#memberDiv')[0].scrollTop = $('#memberDiv')[0].scrollHeight;
      };
      
      function displayMember_offline(name) {
        $('<div/>').text(name).addClass('sub_name').appendTo($('#memberDiv_offline'));
        $('#memberDiv_offline')[0].scrollTop = $('#memberDiv_offline')[0].scrollHeight;
      };
});

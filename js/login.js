$(document).ready(function() {
      var my_login_ref = new Firebase('https://terryuser-database.firebaseio.com/');
      $('#createaccount').click(function() {
            var member = [];
            var createable = 1;
            my_login_ref.on('child_added', function(snapshot) {
                  var data_info = snapshot.val();
                  member.push(data_info.name)
            });
            var name = $('#who').val();
            var pw = $('#passwd').val();

            for (i = 0; i < member.length; i++) {
                  if (name == member[i]){
                        alert("You have to change name");
                        createable = 0;
                        break;
                  }
            }
            if (createable == 1) {
                  my_login_ref.push({name: name, password: pw});
                  alert("Success");
            }
      });

      $('#login_123').click(function() {
            var name = $('#who').val();
            var pw = $('#passwd').val();
            var unloginable = 1;
            my_login_ref.on('child_added', function(snapshot) {
                  var member_info = snapshot.val();
                  if(name == member_info.name && pw == member_info.password){
                        $('#main_div').removeClass('youcantsee').addClass('youcansee');
                        unloginable = 0;
                  };
            });
      });

});

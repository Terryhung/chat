$(document).ready(function() {
      var myDataRef = new Firebase('https://terryuser-database.firebaseio.com/');
      $('#createaccount').click(function() {
            var member = [];
            var createable = 1;
            myDataRef.on('child_added', function(snapshot) {
                  var data_info = snapshot.val();
                  member.push(data_info.name)
            });
            var name = $('#who').val();
            var pw = $('#passwd').val();
            for (i = 0; i < member.length; i++) {
                  if (name == member[i]){
                        alert("You have to change name")
                        createable = 0;
                        break;
                  }
            }
            if (createable == 1) {
                  myDataRef.push({name: name, password: pw});
                  alert("Success");
            }
      });

      $('#login').click(function() {
            var name = $('#who').val();
            var pw = $('#passwd').val();
            var unloginable = 1;
            myDataRef.on('child_added', function(snapshot) {
                  var member_info = snapshot.val();
                  if(name == member_info.name && pw == member_info.password){
                        $('#main_div').removeClass('youcantsee').addClass('youcansee');
                        unloginable = 0;
                  }
            });
      });

});

$(document).ready(function() {
      my_data_path = 'https://terryuser-database.firebaseio.com/'
      $('#logout').click(function() {
            var name = $('#who').val();
            var pw = $('#passwd').val();
            my_data_path_user = my_data_path + name;
            var delete_user = new Firebase(my_data_path_user);
            delete_user.remove();
            location.reload(); 
      });

});

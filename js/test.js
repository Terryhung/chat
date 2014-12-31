$(function() {
      Parse.$ = jQuery;
      // Replace this line with the one on your Quickstart Guide Page
      Parse.initialize("YlFD45RbGbOalV6fEum18Vl4OyRiMfMehfFSAEOH", "gEZs8H4rYgGUmPdZQoDkjqLyjXoiuLd2oFkXVZ08");
      var UserLog = Parse.Object.extend("User_log");
      var UserLog = new Parse.Query(UserLog);

      UserLog.find({
            success: function (results) {
                  for (var i = 0; i < results.length; i++) {
                        alert(results[i].get("name"));
                  };
            },
            error: function (error) {
                  alert("Error: " + error.code + " " + error.message);
            }
      });
});

$(document).ready(function () {  			                    
    var tok = localStorage.getItem('token');
    alert(tok)
                /// dashboard creation
                     $.ajax({
            type: 'get',
            url: 'http://localhost:3100/users/this',
            beforeSend: function(xhr) {
              if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
              }
            },
            success: function(data) {
               $('#stage').append('<p> Name: ' + data.Fname  + '</p>' + "<p>Email : " + data.Lname + "<p/>");                                      
            },
            error: function() {
              alert("Sorry, you are not logged in.");
            }
          });
          
          // for logging out   
        $("#logout").click(function(){
             $.ajax({
            type: 'post',
            url: 'http://localhost:3100/users/logout',
            beforeSend: function(xhr) {
              if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
              }
            },
           /*  success: function(responsedata, textStatus, errorThrown) { */
              success: function(data) {
              console.log("test");
                 location.href="login.html";
                                         
            },
            error: function(jqXHR, textStatus, errorThrown) {
              alert("Sorry, you are not logged in.");
              console.log(errorThrown)
            }
          });
                   });                                            
               });  
$(document).ready(function () {  
            
var tok = localStorage.getItem('token');
alert(tok)
       var id;
   
        $.ajax({
     type: 'get',
     url: 'http://localhost:3100/users/this',
     beforeSend: function(xhr) {
       if (tok) {
         xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
       }
     },
     success: function(data) {
      
      $('#ID_user').val(data._id);
        $('#Fname').val(data.Fname); 
        $('#Lname').val(data.Lname);
        $('#Username').val(data.Username); 
         $('#Password').val(data.Password); 
         $('#Email').val(data.Email);  
          $('#Address').val(data.Address);
          $('#Age').val(data.Age);
          
          $('#ProfilePic').val(data.ProfilePic);  
          id = data._id;   
          alert(id);
          console.log(id); 
          console.log(data.Fname); 
          console.log(data.Lname);                                    
     },
     error: function() {
       alert("Sorry, you are not logged in.");
     }
   });
 
   $('#updatebtn').click(function (e) {  
    e.preventDefault();
                Fname = $("#Fname").val();
                Lname = $("#Lname").val();
                Email = $("#Email").val();
                Username = $("#Username").val();
                Address = $("#Address").val();
                Age = $("#Age").val();
                Password = $("#Password").val();
                ProfilePic= $("#ProfilePic").val();
                id=$("#ID_user").val();
                console.log(id);
                data1 = {
                    "_id":id,
                    'Fname': Fname,
                    'Lname': Lname,
                    'Email':Email,
                    'Username': Username,
                    'Address':Address,
                    'Age':Age,
                    'Password': Password,
                    'ProfilePic': ProfilePic                    
                }
                console.log(data1);

                $.ajax({
                    type: "PUT",
                    url: "http://localhost:3100/users/updateuser/"+id,
                    data: data1,
                    success: function (result) {
                        alert(result);
                        alert("User Updated Successfully");          
                        location.href="userdashboard.html"; 
                    },
                    beforeSend: function (xhr) {
                    if (tok) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                    }
                },
                });

            });

      

      });  
  
  



$(document).ready(function () {
 
    

  
  //RETRIEVE user        
  var tok = localStorage.getItem('token');
  alert(tok)
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");

  $.ajax({
      type: 'get',
      url: 'http://localhost:3100/users/this',
      beforeSend: function (xhr) {
          if (tok) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
          }
      },
      success: function (data) {

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
          console.log(id);
          console.log(data.Fname);
          console.log(data.Lname);
          console.log(data.Address);
          console.log(data.Email);
      },
      error: function () {
          alert("Sorry, you are not logged in.");
      }
  });

//UPDATE user
var imageFile = '';
  $("#newPic").on('change', function () {
      let formData = new FormData();
      let files = $("#newPic").get(0).files;
      if (files.length > 0) {
          formData.append("imageFile", files[0]);
      }

      $.ajax({
          type: 'POST',
          url: 'http://localhost:3100/users/uploadImg',
          contentType: false,
          cache: false,
          processData: false,
          data: formData,
          success: function (data) {
              imageFile = data.filename;

          },
          error: function () {
              alert("Image upload failed!");
          }
      });
  });
  $("#update").click(function (e) {
      e.preventDefault();
      Fname = $("#Fname").val();
      Lname = $("#Lname").val();
      Username = $("#Username").val();
      Email = $("#Email").val();
      Address = $("#Address").val();
      Password = $("#Password").val();
      Age = $("#Age").val();
      id = $("#ID_user").val();
      console.log(id);
      data1 = {
          "_id": id,
          'Fname': Fname,
          'Lname': Lname,
          'Username': Username,
          'Email': Email,
          'Address':Address,
          'Password':Password,
          'Age':Age,
          'ProfilePic': imageFile
        
          
   
  }
      console.log(data1);

      $.ajax({
          type: "PUT",
          url: "http://localhost:3100/users/updateuser/",
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
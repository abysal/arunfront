$(document).ready(function () {  
    // CREATE USER
    let imageFile = '';
$("#ProfilePic").on('change', function () {
    let formData = new FormData();
    let files = $("#ProfilePic").get(0).files;
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
    $('#submit').on("click",function (e) { 
    e.preventDefault();

    Fname = $("#Fname").val();
    Lname = $("#Lname").val();
    Email = $("#Email").val();
    Username = $("#Username").val(); 
    Password= $("#Password").val();
    Address= $("#Address").val();
    Usertype= $("#Usertype").val();
    Age= $("#Age").val();
    data = {
      "ProfilePic" : imageFile,
    "Fname" : Fname,
    "Lname" : Lname,
    "Email" : Email,
    "Username" : Username,
    "Address":Address,
    "Password":Password,
    "Usertype":Usertype,
    "Age":Age
    }
    console.log(data)
    if(Fname == "" || Lname =="" || Email =="" || Username == ""|| Password == ""||
     Address == "" || Age == "")
{
    alert("Please fill out all field");
}

                    else{
             $.ajax({  
                 url: 'http://localhost:3100/users/registeruser',
                 type: 'post',  
                 dataType: 'json',  
                 data:data,  
                 success: function (res, textStatus, xhr) {  
                         alert('User Registered Successfully');          
                location.href="login.html";            
                 },  
                 error: function (xhr, textStatus, errorThrown) {  
                     console.log('Error in Operation');  
                 }  
             });
            }  
         });
         });
    

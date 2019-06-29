$(document).ready(function () {  
		 
		 
    $('#submit').on("click",function (e) {  
    e.preventDefault();
       username = $("#Username").val();
       password = $("#Password").val();
    //    alert(password)
       data = {
       "Username" : username,
       "Password" : password
       }
      $.ajax({  
            url: 'http://localhost:3100/users/Login/',
            type: 'post',  
            dataType: 'json',  
            data:data, 
            success: function (res, textStatus, xhr) {  
                var token=""
                token=res.token;
                localStorage.setItem('token', token);
                if(token!=""){
                    alert(token);
                    var usertype=res.userType;
                    console.log(usertype)
                    if(usertype=="Admin"){
                        location.href="logout.html";
                    }
                    else if(usertype=="User"){
                        location.href="logout.html";
                    }
                }
               else{               
                       alert("Invalid Login")
               }
               
               },  
            error: function (xhr, textStatus, errorThrown) {  
                console.log('Error in Operation');  
            }  
        });  
    }); 
    
});  
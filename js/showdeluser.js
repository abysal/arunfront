$(document).ready(function () {  

  var tok = localStorage.getItem('token');

  //show book
$.ajax({
    type: 'GET',
    url: 'http://localhost:3100/users/showuser',
    beforeSend: function(xhr) {
      if (tok) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
      }
    },
    success: function(data) {
                    $.each(data,function(index){
                  console.log(data[index].ProfilePic);
                  // alert(data[index].image_file);
                  $("#book_details").append("<tbody><tr style'text-align:center'><td>" + data[index].Username+ "</td><td>" + data[index].Age +
                   "</td><td>" + data[index].Email + 
                   "</td><td>" + data[index].Address + "</td>" +
                   "<td><img src='http://localhost:3100/"+data[index].ProfilePic+"'  height='150' width='150' class='img-fluid' alt='Responsive image'</td>"+
                  //  "<td><a href='updateuser.html?id="
                  //  +data[index]._id+"' class='btn btn-primary btn-sm'></a>"+
          
                   " <button  class='btn btn-danger btn-sm clickme'  book_id='"+data[index]._id+"'>Delete</button></td></tr></tbody>");
                   

                }) // 
              
    },
    error: function() {
      alert("Sorry, you are not logged in.");
    }
  });

  //delete book
  $("#book_details").on('click','.clickme',function(){
    id=$(this).attr('book_id');
    // alert(id);
    // alert(id);
             $.ajax({
          type: 'DELETE',
          url: 'http://localhost:3100/users/deleteuser/'+id,
          beforeSend: function(xhr) {
            if (tok) {
              xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
          },
          success: function(data) {
          location.href="showuser.html";
            alert("Deleted Successfully");                           
          },
          error: function() {
            alert("Sorry, you are not logged in.");
          }
        });
           })
});
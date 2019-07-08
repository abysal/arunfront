$(document).ready(function () {
    var tok = localStorage.getItem('token');
    alert(tok)
    let userid = ''

    $.ajax({
    url: 'http://localhost:3100/buys/bookstatus',
    type: 'get',
    beforeSend: function (xhr) {
      if (tok) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
      }
    },

    success: function (res, textStatus, xhr) {
      $.each(res.orders, function (index) {
      $('#booktable').append(
      

       '<tr><th scope ="row">' +  res.orders[index].uid.Username + '</th>' + 
'<td class="w-25">'+ "<img src='http://localhost:3100/books/" + res.orders[index].bid.BookImageName + "' class='img-fluid img-thumbnail'></td><td>" +
          res.orders[index].bid.Bookname + "</td><td>" +
            res.orders[index].status + "</td><td>"+
             "<Button class='delete btn-dark' del_id='"+res.orders[index]._id+"'>Cancel</Button></th><th>"
      );
    });
      
    
      $('#booktable').on('click','.delete',function(){
          id=$(this).attr('del_id');
          $.ajax({
            url:'http://localhost:3100/buys/bookstatusdelete/'+id,
            type:'delete',
            success:function(res){
              alert('Book Bought Canceled Successfully');
                if(res.message=="success"){
                  location.href="book.html"
                }
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('Error in Operation');
    }
    
  });
    });
    }
    })
  });
$(document).ready(function () {

  var tok = localStorage.getItem('token');
  alert(tok)
  var id;
  $.ajax({
    type: 'get',
    url: 'http://localhost:3100/books/showbook',
    beforeSend: function (xhr) {
      if (tok) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
      }
    },
    success: function (res) {
      $.each(res, function (index) {
        console.log(res[index]);
        $('#bookbook').append(
          '<br>' +

          '<div class ="card">'
          +
          '<div class="card-body">' +
          '<stong></strong>'
          + '<div class="col">' + '<a href="file:///E:/t3-frontend-web-abysal/book.html">' +
          '<img class="card-img-top" src="http://localhost:3100/books/' + res[index].BookImageName + '">' + '<br/>' +

          '<strong>Book Name</strong>' + ':'
          + res[index].Bookname + '</div>' +
          '<div class ="col">' +
          '<strong>Book Type</strong>' + ':'
          + res[index].Booktype + '</div>' + '<div class ="col">' +
          '<strong>Bookauthor</strong>' + ':'
          + res[index].Bookauthor + '</div>' +
          '<div class ="col">' +
          '<strong>Bookprice</strong>' + ':'
          + res[index].Bookprice + '</div>' +
          '<div class ="col">' +
          "<button class='btn btn-success clickme'  bb_id='" + res[index]._id + "'>BUY</button>"
          + '</div>' + '</div>'

        );
      });
    },
    error: function () {
      alert("Sorry, you are not logged in");
    }
  });



  $("#bookbook").on('click', '.clickme', function () {
    alert($(this).attr('bb_id'))

    $.ajax({
      type: 'post',
      url: 'http://localhost:3100/buys/bookbook/' + $(this).attr('bb_id'),
      beforeSend: function (xhr) {
        if (tok) {
          xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
        }
      },
      success: function (res) {
        console.log(res);

      },

      error: function () {
        alert("Sorry, you are not logged in.");
      }
    });
  });

});
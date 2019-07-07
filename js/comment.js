

$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    $.ajax({
        type: 'get',
        url: 'http://localhost:3100/restaurants/showonerestaurent/'+id,
   
        success: function(res) {
   
   
       console.log(res)
        },
        error: function() {
          alert("Sorry, you are not logged in.");
        }
       });

    $('#btnsubmit').click(function () {
     
        var review = $('#comment').val();
        username = $("#Username").val();
        var data = {
            'RestaurantID': id,
            'User': localStorage.getItem("Username"),
            'Review': username,
        };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3100/users/comment/',
            data: data,
            success: function (res) {
                console.log(res)

                alert("babalbayo")
                location.href = 'reservetable.html?id=' + id
            },
            error: function () {
                alert("Sorry, you are not logged in.");
            }
        });

    });

});

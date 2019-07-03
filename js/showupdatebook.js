$(document).ready(function () {
 
    

  
    //RETRIEVE book        
    var tok = localStorage.getItem('token');
    alert(tok)
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");

    $.ajax({
        type: 'get',
        url: 'http://localhost:3100/books/showonebook/'+id,
        beforeSend: function (xhr) {
            if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
        },
        success: function (data) {

            $('#ID_book').val(data._id);
            $('#Bookname').val(data.Bookname);
            $('#Booktype').val(data.Booktype);
            $('#Bookauthor').val(data.Bookauthor);
            $('#Bookprice').val(data.Bookprice);
            $('#BookImageName').val(data.BookImageName);
            
            console.log(id);
            console.log(data.Bookname);
            console.log(data.Booktype);
            console.log(data.Bookauthor);
            console.log(data.Bookprice);
        },
        error: function () {
            alert("Sorry, you are not logged in.");
        }
    });

 //UPDATE book
 var imageFile = '';
    $("#newPic").on('change', function () {
        let formData = new FormData();
        let files = $("#newPic").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3100/books/uploadbook',
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
        Bookname = $("#Bookname").val();
        Booktype = $("#Booktype").val();
        Bookauthor = $("#Bookauthor").val();
        Bookprice = $("#Bookprice").val();
        id = $("#ID_book").val();
        console.log(id);
        data1 = {
            "_id": id,
            'Bookname': Bookname,
            'Booktype': Booktype,
            'Bookauthor': Bookauthor,
            'BookImageName': imageFile,
            'Bookprice':Bookprice
            
     
    }
        console.log(data1);

        $.ajax({
            type: "PUT",
            url: "http://localhost:3100/books/updatebook/"+id,
            data: data1,
            success: function (result) {
                alert(result);
                alert("Book Updated Successfully"); 
                // location.href="admindashboard.html"; 
            },
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            },
        });

    });
});
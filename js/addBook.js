$(document).ready(function(){

  let imageFile='';
        $("#Book").on('change',function(){
        let formData = new FormData();
        let files = $("#Book").get(0).files;
        if(files.length>0){
        formData.append("imageFile",files[0]);
    }
    $.ajax({
      url: 'http://localhost:3100/books/uploadbook/',
      type: 'POST',  
      contentType:false,
      cache:false,
      processData:false,  
      data:formData,  

      success:function(data){
        imageFile=data.filename;

        alert("Image upload successfull");
        $('#img_display').html('<img src="http://localhost:3100/books/'+imageFile+'" class="img-thumbnail" alt="Sample image" height="300px" width="300px">');

      },
      error:function(){
        alert("Image upload failed");
      }

    });
   });

    $("form.addBookForm").on("submit",function(){
       // e.preventDefault();
        var Bookname=$("#Bookname").val();
        var Booktype=$("#Booktype").val();
        var Bookauthor=$("#Bookauthor").val();  
        var Bookprice=$("#Bookprice").val();  
        var BookImageName=imageFile;
 
        var data={
          Bookname:Bookname,
          Booktype:Booktype, 
          Bookauthor:Bookauthor,
          Bookprice:Bookprice,
          BookImageName: BookImageName   
        };

        console.log(data);
 
    

        $.ajax({
            type:"POST",
            url:"http://localhost:3100/books/addbook",
            data:data,
                 success:function(responseData,textStatus,jqXHR){
                 console.log(responseData);
                 alert(responseData.message);
             },
             error:function(jqXHR,textStatus,errorThrown){
                 console.log(errorThrown)
                 alert(errorThrown)
             }
        })
        return false;
    })
 
 })
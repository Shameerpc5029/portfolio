$(document).ready(function(){
    $("#Messaging_form").validate({
        rules:{
            name:{
            required:true,
            minlength:4
          },
            Emails:{
              required:true
          },
          subject:{
            required:true,
            minlength:15
          },
          message:{
            required:true  
          } 
        
       },
       submitHandler:function(form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwmzQASG_xSbKdw5ynoCFwH2MI3vyJXeAOkac8/exec",
            data:$("#Messaging_form").serialize(),
            method:"POST",
            success:function (response){
                alert("Message submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")
            }
        })
    },
       messages:{
        name:{
        required:"*Please Enter Your Name",
        minlength:"*Enter Minimum 4 Characters"
      },
        Emails:{
          required:"*Please Enter Your Email"
      },
      subject:{
        required:"*Please Enter The Subject",    
        minlength:"*Enter at least 15 Characters"
      },
       message:{
           required:"*Please Enter any messages here."
       } 
    }
   })
})
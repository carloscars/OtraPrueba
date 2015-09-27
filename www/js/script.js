$(document).ready(function(){
    $("#btn").click(function(){
        var z = { 
                "email" : $("#email").val(), 
                  "comment" : $("#comment").val() 
                };
        jQuery.support.cors=true;
        $.ajax({
            type: "POST",
            data: z,
            //url: 'http://carloskars.nonhost.com//Test//login.php',
            url: 'http://192.168.0.19/test/save.php',
            cache: false,
            dataType: "jsonp",
            contentType: "application/json; charset=utf-8",
            success: function(){
            alert("exito");
            }
        });
    return false;
    });
});

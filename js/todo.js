$(document).ready(function(){
    function validation(tuser,tpass,callback)
    {
        if((tuser!="admin")||(tpass!="12345"))
        {
            alert("Incorrect Username or Password");
        }
        else
        {
            callback();
        }
    }
    
    $('#b1').click(function()
    {
        var user=$('#inp1').val();
        var pass=$('#inp2').val();
        validation(user,pass,()=>{
            window.location.assign('main.html');
        })
        
        
    })
});
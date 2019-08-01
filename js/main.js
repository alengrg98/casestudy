$(document).ready(function(){
var count=0;
var prom=5;

$('#nv2').click(function(){
    window.location.assign('todo.html');
})


$('#nv1').click(function(){
    window.location.assign('main.html');
})
   

        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){
                            
                var code="";
                //var j=1;
                //console.log(data[j].id);            
                for( var i in data)
                {
                    if(data[i].completed==true)
                    {
                        code+='<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="defaultUnchecked'+data[i].id+'" checked disabled><label class="custom-control-label" for="defaultUnchecked'+data[i].id+'">'+data[i].title+'</label></div>';
                    }
                    else{
                    code+='<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="defaultUnchecked'+data[i].id+'"><label class="custom-control-label" for="defaultUnchecked'+data[i].id+'">'+data[i].title+'</label></div>';
                    }
                    
                }
                //console.log(code);
                
                $(".result").html(code);  
                
                $('input[type="checkbox"]').click(function(){
                    if($(this).prop("checked") == true){
                        //alert("Checkbox is checked.");
                        count++;
                    }
                    else
                    {
                        count--;
                        //console.log(count);
                        
                    }
                    //console.log(count);
                   /* if(count==5){
                        alert("Congrats. 5 Tasks have been Successfully Completed ");
                    }*/
                    
                    var promisenum=new Promise((resolve,reject)=>{

                      
                        if(count==prom)
                        {
                            resolve();
                        }
                        else
                        {
                            reject();
                        }
                    
                    });
                    
                    promisenum.then(()=>{
                        
                        alert("Congrats. 5 Tasks have been Successfully Completed ");
                    }).catch(()=>{
                       //console.log("Less than 5 tasks completed");
                       

                    })
                    
                });
        
                
            }
        })

       
       
        
       
   
});
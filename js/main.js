$(document).ready(function(){
var count=0;
var prom=5;

$('#nv2').click(function(){
    window.location.assign('todo.html');
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
                    //console.log(data[i].id);
                    
                    code+='<br><div class="card"> <div class="card-body"><p>ID:'+data[i].id+'</p><p>Title:'+data[i].title+'</p>';
                    code+='<input type="checkbox" class="ch"  id="'+data[i].id+'">  </div></div>';
                    //j++;
                }
                //console.log(code);
                
                $(".result").html(code);  
                
                $('input[type="checkbox"]').click(function(){
                    if($(this).prop("checked") == true){
                        //alert("Checkbox is checked.");
                        count++;
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
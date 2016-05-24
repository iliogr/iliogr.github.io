dosomething("blaha", function(){
    console.log("Yay just like jQuery callbacks!");
});


function dosomething(damsg, callback){
    console.log(damsg);
    if(typeof callback == "function") 
    callback();
}
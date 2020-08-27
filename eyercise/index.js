window.onload = function showTask(index){
 var taskPara = document.getElementById("taskPara").innerHTML;
 document.getElementById("taskPara").innerHTML = taskData[Math.floor(Math.random() * this.taskData.length)].task;
 
 
setTimeout(showText,5000);
};



function showText(){
    var taskPara = document.getElementById("taskPara").innerHTML;
    taskPara = "Your time starts now!";
    document.getElementById('taskPara').innerHTML = taskPara;

    // console.log(taskData[2].task);
   var counter = document.getElementById('counter').innerHTML;
function count(){
    if(counter>=0){
         taskPara = "The clock is ticking!";
         document.getElementById('taskPara').innerHTML = taskPara;
        document.getElementById('counter').innerHTML = counter;
        counter--;
    
     if(counter>=0 && counter<4){
        audio.muted = false; 
        audio.play();
     }
    }
    else{
        window.close();
    }
    
}
setInterval(count,1000);


}


var audio = document.getElementById('myAudio');
// var today = new Date();
// // var time = today.getHours() +  today.getMinutes();
// var remindHours = today.getHours()+timeSelected[0];
// var remindMin = today.getMinutes()+timeSelected[1];
// // var dayHours = 00;
// // var dayMin = 00
// console.log(remindHours);

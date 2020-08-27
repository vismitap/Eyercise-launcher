window.onload = function(){
  var launch = document.getElementById("btnLaunch");
   launch.addEventListener('click',function(){
    
    var timeSelected = document.getElementById('time').value.split(':');
     
     var hrs = timeSelected[0];
     var mins = timeSelected[1];
        
    if(document.getElementById('time').value=== '' || timeSelected[0]=='00' && timeSelected[1]=='00'){
        alert('Select the interval before launching!');
    }
    else{
        alert("Eyercise launched successfully 🚀🚀🚀\nYou will be notified after every "+ timeSelected[0]+" hrs and "+timeSelected[1]+" mins" );
        chrome.tabs.create( {url: 'eyercise/index.html'},open);
       }


    }

     
)
}
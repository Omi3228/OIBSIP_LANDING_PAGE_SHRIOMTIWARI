$(document).ready(function() {
    
    var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
    var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
  
    $(".btn").mousedown(function() {
      audio2.load();
      audio2.play();
    });
      
    $(".btn").mouseup(function() {
      audio.load();
      audio.play();
    });
  });
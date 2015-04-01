$(document).ready(function() {
    $("#turnoff").click(function(){
    
    $('body').addClass('off');
    $('body').removeClass('on');
    
  
    
    });
    
    $("#turnon").click(function(){
        
    $('body').addClass('on');
    $('body').removeClass('off');
        
  

        
    
    });
});


$(document).ready(function(){
   
    // Show brazil, sp on logo when mouse over   
         $(".logo-pos").hover(function(){
         $(".opa").slideToggle(150);
         $("#arrow").toggleClass("fa-chevron-circle-down");
         });             
      
    // change language  
        $("#changept").click(function(){
        if ( $("#english-page").is(":visible")){
          $("#english-page").toggleClass("hidepart", true)
           $("#pt-page").toggleClass("hidepart", false)
           
        } 
        });
      
      $("#changept1").click(function(){
        if ( $("#pt-page").is(":visible")){
          $("#pt-page").toggleClass("hidepart", true)
          $("#english-page").toggleClass("hidepart", false)
           $("#english-page").toggleClass("zoomInUp", true)       
        } 
        });
      
      
      //smooth scrolling
      
      $("#scrbutton1, #scrbutton2, #scrbutton3, #scrbutton4").on('click', function(event) {
    
        event.preventDefault();
    
        var hash = this.hash;
    
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
       
          window.location.hash = hash;
        });
      });
                               
     }); 
      
    
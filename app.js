/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var templ = '<li id="val-1" class="done"> <h3>val</h3></li>';

/* <li id="0" class="hidden">
          <h3>1</h3>         
    </li> */
var a;
$(document).ready(function(){
   for(var i=0; i<10; i++){
       a = templ.replace("val-1", data[i]);
       a = a.replace("val",data[i]);
       $(".cards").append(a);
   }  
  
    $(".opt-start").click(function(){
        $(".done").addClass("hidden");
        $(".hidden").removeClass("done"); 
    });

});








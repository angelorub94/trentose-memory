/* your code should go here */


// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

var templ = '<li id="val-1" class="done"> <h3>val</h3></li>';

/* <li id="0" class="hidden">
          <h3>1</h3>         
    </li> */
var a;
var counter = 0;

$(document).ready(function(){
   for(var i=0; i<10; i++){
       a = templ.replace("val-1", data[i]);
       a = a.replace("val",data[i]);
       $(".cards").append(a);
   }  
  
    $(".opt-start").click(function(){
        $(".done").addClass("hidden");
        $(".hidden").removeClass("done"); 
        
        //ora inserisco il controllo sulle immagini cliccate
        $("#1").click(function(){
            if(counter === 0){
                $("#1").addClass("done");
                $("#1").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#2").click(function(){
            if(counter === 1){
                $("#2").addClass("done");
                $("#2").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#3").click(function(){
            if(counter === 2){
                $("#3").addClass("done");
                $("#3").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#4").click(function(){
            if(counter === 3){
                $("#4").addClass("done");
                $("#4").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#5").click(function(){
            if(counter === 4){
                $("#5").addClass("done");
                $("#5").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#6").click(function(){
            if(counter === 5){
                $("#6").addClass("done");
                $("#6").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#7").click(function(){
            if(counter === 6){
                $("#7").addClass("done");
                $("#7").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#8").click(function(){
            if(counter === 7){
                $("#8").addClass("done");
                $("#8").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
        
         $("#9").click(function(){
            if(counter === 8){
                $("#9").addClass("done");
                $("#9").removeClass("hidden");  
                counter++;
            }  else {
                alert("You Lost");
            }
        });
            
         $("#10").click(function(){
            if(counter === 9){
                $("#10").addClass("done");
                $("#10").removeClass("hidden");  
                counter++;
                alert("You Won");
            }  else {
                alert("You Lost");
            }
        });
    });
});








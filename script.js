$(document).ready(function(){
    $(".image1").on("mouseenter", function(){ 
        $(".meat1").show(500);
    }).on("mouseleave", function(){
        $(".meat1").hide(500);
    });
    $(".image2").on("mouseenter", function(){ 
        $(".meat2").show(500);
    }).on("mouseleave", function(){
        $(".meat2").hide(500);
    });
})
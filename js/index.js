$(document).ready(function(){
    $(".image1").on("mouseenter", function(){ 
        $(".meat1").show();
    }).on("mouseleave", function(){
        $(".meat1").hide();
    });
    $(".image2").on("mouseenter", function(){ 
        $(".meat2").show();
    }).on("mouseleave", function(){
        $(".meat2").hide();
    });
})
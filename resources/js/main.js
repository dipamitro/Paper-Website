$(document).ready(function(){
    //sticky-menu
    $(".js--steam-section").waypoint(function(direction){

        if(direction=="down"  )
        {
            $("nav").addClass("sticky");
        }
        else{$("nav").removeClass("sticky");
         
           }
    });

    //mixitup in protfolio
    var mixer = mixitup('.container');
});


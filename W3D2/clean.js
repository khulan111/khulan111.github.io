$(function () {
    "use strict";
    $(".circle").each(function(){
        let el = $(this);
        el.on("click", ()=>{
            $(this).remove();
        });
    });
    
    const timer = setInterval(maxCircle,  250 );

    function maxCircle() {
       
        $(".circle").each(function(){
            let el = $(this);
            let newWidth = el.width() + 10;
            el.width(newWidth);
            let newHeight = el.height() + 10;
            el.height(newHeight);
        });
    }


    //clearInterval(timer);
    setTimeout(()=>{clearInterval(timer);}, 3000);
})


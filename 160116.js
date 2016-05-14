function moveScroller() {
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $("#scroller-anchor").offset().top;
        var s = $("#scroller");
        if(st > ot) {
            s.css({		
                position: "fixed",
                top: "0px",
				border: "1px solid gray",
            })
        } else {
            if(st <= ot) {
                s.css({
                    position: "relative",
                    top: "",
					border: "",	
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}
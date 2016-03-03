var last_tab;
$(document).ready(function(){
    $(window).hashchange( function(){
        var hash = location.hash + "_hash"
        var active_link = location.hash + "_link";        
        $(active_link).addClass("active-tab");
        if (last_tab) {
            $(last_tab).removeClass("active-tab");
        };
        last_tab = active_link

        if (location.hash == "") {
            $("#content").hide();
            $("#splash").show();
            $("#aje").hide();
            $("#aje-splash").show();
            $("#enter-site").show();
        }
        else {
            $("#splash").hide();
            $("#aje-splash").hide();
            $("#aje").show();
            $("#content").fadeIn("", function(){
            });
        };

        $("#dynamic-content").children().hide();
        $(hash).fadeIn(200);
        return false;
    })
    $(window).hashchange();
});
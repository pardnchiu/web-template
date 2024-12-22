(function () {

    var hotTop = document.body.children[1].clientHeight;
    var menuTop = hotTop + document.body.children[2].clientHeight;
    var contactTop = menuTop + document.body.children[3].clientHeight;

    function scrollTo(top) {
        var timer = setInterval(() => {
            var dom = document.body;
            var to = top >= 0 ? top : 0;
            var max = (dom.scrollHeight - dom.clientHeight);
            var length = (to < max ? to : max) - dom.scrollTop;
            var isAppend = (length > 0);
            var isDone = (() => {
                if (isAppend) return (dom.scrollTop >= to || dom.scrollTop >= max);
                return (dom.scrollTop <= to || dom.scrollTop <= 0);
            })();
            if (isDone) return clearInterval(timer);
            setTimeout(() => {
                if (timer) clearInterval(timer);
            }, 500);
            dom.scrollTop += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        }, 30);
    }

    document.addEventListener("DOMContentLoaded", function () {
    });

    document.body.addEventListener('scroll', function () {
        if (this.scrollTop + 80 < hotTop) "view-tab".$._attr({ sel: "0" });
        else if (this.scrollTop + 80 < menuTop) "view-tab".$._attr({ sel: "1" });
        else if (this.scrollTop + 80 < contactTop) "view-tab".$._attr({ sel: "2" });
        else "view-tab".$._attr({ sel: "3" });
    });

    "button-tab".$._click(function () {
        "view-tab".$.$$class("show") ? "view-tab".$.class_("show") : "view-tab".$._class("show");
    })

    "view-tab".$.$child(0)._click(function () {
        scrollTo(0);
        "view-tab".$.class_("show");
    });

    "view-tab".$.$child(1)._click(function () {
        scrollTo(hotTop);
        "view-tab".$.class_("show");
    });

    "view-tab".$.$child(2)._click(function () {
        scrollTo(menuTop);
        "view-tab".$.class_("show");
    });

    "view-tab".$.$child(3)._click(function () {
        scrollTo(contactTop);
        "view-tab".$.class_("show");
    });
}());
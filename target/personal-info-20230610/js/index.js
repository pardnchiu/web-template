(function () {
    const sn = 29;

    document.addEventListener("DOMContentLoaded", function () {

        "#nav-button".$._click(function () {
            var isShow = "#nav".$.$$class("show");
            isShow ? "#nav".$.class_("show") : "#nav".$._class("show");
            this.$child(0)._class_(isShow ? "fa-solid fa-bars" : "fa-solid fa-chevron-left");
        });

        (function () {
            const body = "#body-portfolio"
            // const indicator = "#indicator-portfolio";
            const pre = "#pre-portfolio";
            const next = "#next-portfolio";
            const ary = Array.from({ length: 20 }, (v, i) => {
                return {
                    sn: i,
                    href: "",
                    src: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    tag: (Math.random() > 0.5 ? 2 : 1)
                }
            });
            ary.forEach(e => {
                body.$._child([
                    "a"._({ "tag-key": e.tag }, [
                        "img"._(e.src)
                    ])._open(e.href)
                ])
            });

            // body.$._scroll(function(){
            //     var cw = body.$.clientWidth;
            //     var sl = this.scrollLeft;
            //     var pg = Math.floor(sl / cw) ;
            //     if (sl % cw  - pg * (vw <= 414 ? 16 : 24) > cw / 3) {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         if (indicator.$.$child(pg + 1)) indicator.$.$child(pg + 1)._class("sel");
            //         else indicator.$.$child(pg)._class("sel");
            //     } else {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         indicator.$.$child(pg)._class("sel");
            //     }
            // });

            pre.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                body.$.scrollLeft -= cw + (vw <= 414 ? 16 : 24)
            });

            next.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                var pg = Math.floor(sl / cw);
                body.$.scrollLeft = (pg + 1) * cw + (pg + 1) * (vw <= 414 ? 16 : 24)
            });

            // var timer;
            // timer = setTimeout(function(){
            //     clearTimeout(timer);
            //     var cw = "#body-portfolio".$.clientWidth;
            //     var sw = "#body-portfolio".$.scrollWidth;

            //     for (let i = 0; i < Math.ceil(sw / cw); i++) {
            //         "#indicator-portfolio".$._child([
            //             `li${i === 0 ? ".sel" : ""}`.$._$(true)
            //         ]);
            //     };
            // }, 1000);

            "#tab-portfolio".$.$childAll.forEach(e => {
                e._click(function () {
                    // clearTimeout(timer);
                    if ("#tab-portfolio".$.$sel("li.sel")) "#tab-portfolio".$.$sel("li.sel").class_("sel");
                    this._class("sel");
                    let onscroll = "#body-portfolio".$.onscroll;
                    "#body-portfolio".$.onscroll = null;
                    "#body-portfolio".$.scrollLeft = 0;
                    "#body-portfolio".$._attr({
                        "tag-filter": this.$attr("tag-filter")
                    });
                    // "#indicator-portfolio".$.$_();
                    // timer = setTimeout(function(){
                    //     clearTimeout(timer);
                    //     var cw = "#body-portfolio".$.clientWidth;
                    //     var sw = "#body-portfolio".$.scrollWidth;

                    //     for (let i = 0; i < Math.ceil(sw / cw); i++) {
                    //         "#indicator-portfolio".$._child([
                    //             `li${i === 0 ? ".sel" : ""}`.$._$()
                    //         ]);
                    //     };
                    //     "#body-portfolio".$.onscroll = onscroll;
                    // }, 1000);
                })
            });
        }());

        (function () {
            const body = "#body-client"
            // const indicator = "#indicator-portfolio";
            const pre = "#pre-client";
            const next = "#next-client";

            // body.$._scroll(function(){
            //     var cw = body.$.clientWidth;
            //     var sl = this.scrollLeft;
            //     var pg = Math.floor(sl / cw) ;
            //     if (sl % cw  - pg * (vw <= 414 ? 16 : 24) > cw / 3) {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         if (indicator.$.$child(pg + 1)) indicator.$.$child(pg + 1)._class("sel");
            //         else indicator.$.$child(pg)._class("sel");
            //     } else {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         indicator.$.$child(pg)._class("sel");
            //     }
            // });

            pre.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                body.$.scrollLeft -= cw + (vw <= 414 ? 16 : 24)
            });

            next.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                var pg = Math.floor(sl / cw);
                body.$.scrollLeft = (pg + 1) * cw + (pg + 1) * (vw <= 414 ? 16 : 24)
            });

            // var timer;
            // timer = setTimeout(function(){
            //     clearTimeout(timer);
            //     var cw = "#body-portfolio".$.clientWidth;
            //     var sw = "#body-portfolio".$.scrollWidth;

            //     for (let i = 0; i < Math.ceil(sw / cw); i++) {
            //         "#indicator-portfolio".$._child([
            //             `li${i === 0 ? ".sel" : ""}`.$._$(true)
            //         ]);
            //     };
            // }, 1000);

            // "#tab-portfolio".$.$childAll.forEach(e => {
            //     e._click(function () {
            //         // clearTimeout(timer);
            //         if ("#tab-portfolio".$.$sel("li.sel")) "#tab-portfolio".$.$sel("li.sel").class_("sel");
            //         this._class("sel");
            //         let onscroll = "#body-portfolio".$.onscroll;
            //         "#body-portfolio".$.onscroll = null;
            //         "#body-portfolio".$.scrollLeft = 0;
            //         "#body-portfolio".$._attr({
            //             "tag-filter": this.$attr("tag-filter")
            //         });
            //         // "#indicator-portfolio".$.$_();
            //         // timer = setTimeout(function(){
            //         //     clearTimeout(timer);
            //         //     var cw = "#body-portfolio".$.clientWidth;
            //         //     var sw = "#body-portfolio".$.scrollWidth;

            //         //     for (let i = 0; i < Math.ceil(sw / cw); i++) {
            //         //         "#indicator-portfolio".$._child([
            //         //             `li${i === 0 ? ".sel" : ""}`.$._$()
            //         //         ]);
            //         //     };
            //         //     "#body-portfolio".$.onscroll = onscroll;
            //         // }, 1000);
            //     })
            // });
        }());

        (function () {
            const body = "#body-portfolio"
            // const indicator = "#indicator-portfolio";
            const pre = "#pre-portfolio";
            const next = "#next-portfolio";

            // body.$._scroll(function(){
            //     var cw = body.$.clientWidth;
            //     var sl = this.scrollLeft;
            //     var pg = Math.floor(sl / cw) ;
            //     if (sl % cw  - pg * (vw <= 414 ? 16 : 24) > cw / 3) {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         if (indicator.$.$child(pg + 1)) indicator.$.$child(pg + 1)._class("sel");
            //         else indicator.$.$child(pg)._class("sel");
            //     } else {
            //         if (indicator.$.$sel("li.sel")) indicator.$.$sel("li.sel").class_("sel");
            //         indicator.$.$child(pg)._class("sel");
            //     }
            // });

            pre.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                body.$.scrollLeft -= cw + (vw <= 414 ? 16 : 24)
            });

            next.$._click(function () {
                var cw = body.$.clientWidth;
                var sl = body.$.scrollLeft;
                var pg = Math.floor(sl / cw);
                body.$.scrollLeft = (pg + 1) * cw + (pg + 1) * (vw <= 414 ? 16 : 24)
            });
        }());

        (function () {
            "#tab-left".$.$childAll.forEach((e, i) => {
                e._click(function () {
                    var h0 = "#body".$.$child(0).clientHeight;
                    var h1 = "#body".$.$child(1).clientHeight;
                    var h2 = "#body".$.$child(2).clientHeight;
                    var h3 = "#body".$.$child(3).clientHeight;
                    var h4 = "#body".$.$child(4).clientHeight;
                    var h5 = "#body".$.$child(5).clientHeight;
                    var h6 = "#body".$.$child(6).clientHeight;
                    var h7 = "#body".$.$child(7).clientHeight;

                    if (i === 0) {
                        document.body.scrollTop = 0;
                    } else if (i === 1) {
                        document.body.scrollTop = h0;
                    } else if (i === 2) {
                        document.body.scrollTop = h0 + h1;
                    } else if (i === 3) {
                        document.body.scrollTop = h0 + h1 + h2;
                    } else if (i === 4) {
                        document.body.scrollTop = h0 + h1 + h2 + h3;
                    } else if (i === 5) {
                        document.body.scrollTop = h0 + h1 + h2 + h3 + h4;
                    } else if (i === 6) {
                        document.body.scrollTop = h0 + h1 + h2 + h3 + h4 + h5;
                    };
                });
            });
        }());

        (function () {
            document.body.addEventListener("scroll", function () {
                var h0 = "#body".$.$child(0).clientHeight;
                var h1 = "#body".$.$child(1).clientHeight;
                var h2 = "#body".$.$child(2).clientHeight;
                var h3 = "#body".$.$child(3).clientHeight;
                var h4 = "#body".$.$child(4).clientHeight;
                var h5 = "#body".$.$child(5).clientHeight;
                var h6 = "#body".$.$child(6).clientHeight;
                var h7 = "#body".$.$child(7).clientHeight;
                var st = this.scrollTop;
                var vh = document.body.clientHeight;

                if (st > h0 + h1 + h2 + h3 + h4 + h5 - vh / 3) {
                    "#tab-left".$._attr({ sel: 6 });
                } else if (st > h0 + h1 + h2 + h3 + h4 - vh / 3) {
                    "#tab-left".$._attr({ sel: 5 });
                } else if (st > h0 + h1 + h2 + h3 - vh / 3) {
                    "#tab-left".$._attr({ sel: 4 });
                } else if (st > h0 + h1 + h2 - vh / 3) {
                    "#tab-left".$._attr({ sel: 3 });
                } else if (st > h0 + h1 - vh / 3) {
                    "#tab-left".$._attr({ sel: 2 });
                } else if (st > h0 - vh / 3) {
                    "#tab-left".$._attr({ sel: 1 });
                } else {
                    "#tab-left".$._attr({ sel: 0 });
                }
            })
        }());
    });
}());
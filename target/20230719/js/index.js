import { viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/dist/PDMarkdownKit.module.js";
let pre;

document.addEventListener("DOMContentLoaded", async function () {

    await fetch('https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/README.md')
    .then(response => response.text())
    .then(data => {
        pre = data;
    })
    .catch(error => {
        console.error(error);
    });

    const page = location.href.$query("page") || "home";
    const app = new PD({
        id: "app",
        data: {
            page: page,
            nav: (_ => {
                if (page == "home") {
                    return {
                        index: 0,
                        subIndex: 0,
                    };
                }
                else if (page == "list-1") {
                    return {
                        index: 1,
                        subIndex: 0,
                    };
                }
                else if (page == "list-2") {
                    return {
                        index: 1,
                        subIndex: 1,
                    };
                }
                else if (page == "grid-1") {
                    return {
                        index: 1,
                        subIndex: 2,
                    };
                }
                else if (page == "grid-2") {
                    return {
                        index: 1,
                        subIndex: 3,
                    };
                }
                else if (page == "post-1") {
                    return {
                        index: 2,
                        subIndex: 0,
                    };
                }
                else if (page == "post-2") {
                    return {
                        index: 2,
                        subIndex: 1,
                    };
                }
                else if (page == "author") {
                    return {
                        index: 3,
                        subIndex: 0,
                    };
                }
                else if (page == "contact") {
                    return {
                        index: 4,
                        subIndex: 0,
                    };
                }
                else {
                    return {
                        index: 5,
                        subIndex: 0,
                    };
                }
            })(),
            item_2: Array.from({ length: 2 }, (_, i) => i),
            item_3: Array.from({ length: 3 }, (_, i) => i),
            item_4: Array.from({ length: 4 }, (_, i) => i),
            item_10: Array.from({ length: 10 }, (_, i) => i),
            item_20: Array.from({ length: 20 }, (_, i) => i)
        },
        event: {
            rightTab: _ => {
                const dom = "right-tab".$;

                if (dom == null) {
                    return;
                };

                if (dom.style.display === "none") {
                    dom._style({
                        display: "block"
                    });
                }
                else {
                    dom._class("hide");

                    setTimeout(_ => {
                        dom._style({
                            display: "none"
                        }).class_("hide");
                    }, 300)
                };
            },
            scrollTop: _ => {

                document.body.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        },
        next: _ => {
            setTimeout(function () {
                document.body.class_("ft");

                if ("section.md".$) {
                    const elm_viewer = new viewer({
                        emptyContent: pre, 
                        sync: {
                            delay: 0
                        },
                        style: {
                            fill: 0
                        },
                        hashtag: {
                            path: "?keyword=",
                            taget: "_blank"
                        }
                    });

                    "section.md".$._child([
                        elm_viewer.body
                    ]);

                    elm_viewer.init()
                };
            }, 500);

            document.body.addEventListener("scroll", function () {
                const maxY = this.scrollHeight - this.clientHeight;
                const offsetY = this.scrollTop;
                offsetY > 0 ? "top-nav".$._class("show") : "top-nav".$.class_("show");
                "top-nav".$._attr({
                    percent: Math.round(offsetY / maxY * 1000)
                });

                if ("section-right".$) {
                    const vh = document.body.clientHeight;
                    const rightH = "section-right".$.clientHeight;
                    "section-right".$._style({
                        top: (vh < rightH ? vh - rightH : "112") + "px"
                    });
                };
            });
        }
    })
});
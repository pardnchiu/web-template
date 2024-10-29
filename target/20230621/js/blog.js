import { viewer } from "https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/dist/PDMarkdownKit.module.js";
let delay_observer, pre;

(_ => {
    document.addEventListener("DOMContentLoaded", async function () {

        await fetch('https://cdn.jsdelivr.net/npm/pdmarkdownkit@1.6.0/README.md')
        .then(response => response.text())
        .then(data => {
            pre = data;
        })
        .catch(error => {
            console.error(error);
        });

        const body = new PD({
            id: "body",
            data: {
                items: [
                    { href: "./index.html", name: "HOME" },
                    { href: "./portfolio.html", name: "PORTFOLIO" },
                    { href: "./blog.html", name: "BLOG" },
                ],
                list_4: Array.from({ length: 4 }, (_, i) => i + 1),
                list_8: Array.from({ length: 8 }, (_, i) => i + 1)
            },
            event: {
                tab: _ => {
                    this.$pre().$$class("show") ? this.$pre().class_("show") : this.$pre()._class("show")
                }
            },
            next: _ => {
                (_ => {
                    updateShadow();
                    document.body.addEventListener("scroll", function () {
                        updateShadow();
                    });

                    function updateShadow() {
                        const y = document.body.$y;
                        const bottom = document.body.scrollHeight - "footer".$.clientHeight - document.body.clientHeight;

                        (function () {
                            if (!"nav".$) return;
                            if (y <= 0) return "nav".$.style_("boxShadow");
                            else if (y >= 32) return "nav".$._style({
                                boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
                            });
                            "nav".$._style({
                                boxShadow: `0 ${0.125 * y / 32}rem ${0.25 * y / 32}rem rgba(0, 0, 0, ${0.1 * y / 32})`
                            });
                        }());

                        (function () {
                            if (!"section.float-bottom".$) return;
                            const value = bottom - y;
                            if (value <= 0) {
                                return "section.float-bottom".$.style_("boxShadow");
                            }
                            else if (value >= 32) {
                                return "section.float-bottom".$._style({
                                    boxShadow: "0 -0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
                                });
                            };
                            "section.float-bottom".$._style({
                                boxShadow: `0 -${0.125 * value / 32}rem ${0.25 * value / 32}rem rgba(0, 0, 0, ${0.1 * value / 32})`
                            });
                        }());
                    };
                })();

                setTimeout(_ => {
                    const br = "blog".$.$sel("section.br");
                    if (br) {
                        const top = $vh - br.$h;
                        br._style({ top: `${(br.$h + 64 > $vh) ? top : 0}px` });

                        if ("section[name='blog-content']".$ == null) {
                            return;
                        };

                        const dom_viewer = new viewer({
                            emptyContent: pre, 
                            sync: {
                                delay: 0
                            },
                            style: {
                                fill: 0
                            }
                        });
                        "blog".$.$child([0, 0])._child(dom_viewer.body, "section.page".$);
                        dom_viewer.init();
                    };
                }, 300);
            }
        })
    });
})();

(function () {

    document.addEventListener("DOMContentLoaded", function () {

        const section = "section";
        const h1 = "h1";
        const h2 = "h2";
        const h6 = "h6";
        const p = "p";
        const ul = "ul";
        const li = "li";
        const button = "button";
        const a = "a";
        const span = "span";
        const div = "div";
        const img = "img";
        const b = "b";
        const label = "label";
        const input = "input";
        const footer = "footer";
        const albums = Array.from({ length: 20 }, (v, i) => {
            return {
                sn: i,
                href: "",
                src: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                tag: (Math.random() > 0.5 ? 2 : 1)
            }
        });

        document.body._child([
            "nav#nav"._([
                section._([
                    h6._(PDConfig.nav.title),
                    "ul#nav-list"._({ index: 0 },
                        PDConfig.nav.list._$(e => li._(e))
                    ),
                    "button#button-tab"._([
                        PDConfig.nav.icon.list._fa
                    ])
                ])
            ]),
            "button#button-scrollTop"._([
                PDConfig.icon.scrollTop._fa
            ]),
            "section#body"._([
                // header / section-0
                section._([
                    ul._(
                        PDConfig.header.left._$(e =>
                            li._([
                                a._([
                                    e.icon._fa
                                ])._open(e.href)
                            ])
                        )
                    ),
                    section._([
                        section._([
                            h1._(PDConfig.header.title),
                            h2._(PDConfig.header.subtitle),
                            p._(PDConfig.header.description),
                            a._(PDConfig.header.button.txt)._open(PDConfig.header.button.href),
                            span._([
                                "Scroll Down",
                                "fa-solid fa-arrow-down"._fa
                            ])
                        ]),
                        section._([
                            div._([
                                img._(PDConfig.header.head)
                            ])
                        ])
                    ])
                ]),
                // About / section-1
                section._([
                    h6._("About Me"),
                    p._("My introduction"),
                    section._([
                        img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample"),
                        section._([
                            ul._([
                                li._([
                                    "i.fa-solid.fa-code"._(),
                                    h6._("Full-stack Developer"),
                                    p._("5 + Years")
                                ]),
                                li._([
                                    "i.fa-brands.fa-apple"._(),
                                    h6._("iOS Developer"),
                                    p._("3 + Projects")
                                ]),
                                li._([
                                    "i.fa-solid.fa-laptop-code"._(),
                                    h6._("iOS / Web Examples"),
                                    p._("40 + Examples")
                                ])
                            ]),
                            p._("Frontend developer, I create web pages with UI / UX user interface, I have vears of experience and many clients are happy with the projects carried out."),
                            button._("Contact")
                        ])
                    ])
                ]),
                // Skills / section-2
                section._([
                    h6._("Skills"),
                    p._("My technical skill"),
                    section._([
                        section._([
                            h6._("Front-end Developer"),
                            ul._([
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("Swift"),
                                        p._("7 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("Html"),
                                        p._("56 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("CSS/SASS"),
                                        p._("6 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("JavaScript"),
                                        p._("6 years")
                                    ])
                                ])
                            ])
                        ]),
                        section._([
                            h6._("Back-end Developer"),
                            ul._([
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("Node.js"),
                                        p._("6 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("PHP"),
                                        p._("2 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("Python"),
                                        p._("1 years")
                                    ])
                                ]),
                                li._([
                                    "i.fa-solid.fa-circle-check"._(),
                                    section._([
                                        h6._("MySQL"),
                                        p._("6 years")
                                    ])
                                ])
                            ])
                        ])
                    ])
                ]),
                // Services / section-3
                section._([
                    h6._("Services"),
                    p._("What I offer"),
                    section._([
                        section._([
                            "i.fa-brands.fa-apple"._(),
                            h6._("iOS<br>Developer"),
                            button._([
                                "View More",
                                "i.fa-solid.fa-arrow-right"._()
                            ])
                        ]),
                        section._([
                            "i.fa-solid.fa-laptop-code"._(),
                            h6._("Front-end<br>Developer"),
                            button._([
                                "View More",
                                "i.fa-solid.fa-arrow-right"._()
                            ])
                        ]),
                        section._([
                            "i.fa-solid.fa-code"._(),
                            h6._("Back-end<br>Developer"),
                            button._([
                                "View More",
                                "i.fa-solid.fa-arrow-right"._()
                            ])
                        ])
                    ])
                ]),
                // Experiences / section-4
                section._([
                    h6._("Experiences"),
                    p._("My education & experience"),
                    section._({ show: 1 }, [
                        "ul#tab-experience"._([
                            li._([
                                "i.fa-solid.fa-graduation-cap"._(),
                                b._("Education")
                            ]),
                            li._([
                                "i.fa-solid.fa-briefcase"._(),
                                b._("Experience")
                            ])
                        ]),
                        ul._([
                            li._([
                                h6._("Academic Degree"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2023 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ]),
                            li._([
                                h6._("Academic Degree"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2023 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ]),
                            li._([
                                h6._("Academic Degree"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2023 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ])
                        ]),
                        ul._([
                            li._([
                                h6._("UMD你的博客"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2023/05 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ]),
                            li._([
                                h6._("JOBALL找專家"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2017/08 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ]),
                            li._([
                                h6._("Pardn Ltd 帕登國際有限公司"),
                                b._([
                                    "i.fa-solid.fa-calendar-days"._(),
                                    "2016/07 - present"
                                ]),
                                p._("Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.")
                            ])
                        ])
                    ])
                ]),
                // Portfolios / section-5
                section._([
                    h6._("Portfolios"),
                    p._("iOS Examples / Website Templates"),
                    section._([
                        "ul#tab-portfolio"._({ index: 0 }, [
                            li._("All"),
                            li._("Lorem1"),
                            li._("Lorem2")
                        ]),
                        "section#body-portfolio"._({ "tag-filter": 0 },
                            albums._$(e =>
                                a._({ "tag-key": e.tag, target: "_blank" }, [
                                    img._(e.src)
                                ])
                            )
                        )
                    ])
                ]),
                // Contact / section-6
                section._([
                    h6._("Contact Me"),
                    p._("Get in touch"),
                    section._([
                        section._([
                            h6._("Talk to me"),
                            div._([
                                "i.fa-solid.fa-envelope"._(),
                                h6._("Email"),
                                p._("dev@pardn.io"),
                                button._([
                                    "Open",
                                    "i.fa-solid.fa-arrow-right"._()
                                ])
                            ]),
                            div._([
                                "i.fa-brands.fa-linkedin"._(),
                                h6._("Linkedin"),
                                p._("pardnchiu"),
                                button._([
                                    "Open",
                                    "i.fa-solid.fa-arrow-right"._()
                                ])
                            ])
                        ]),
                        section._([
                            h6._("Send message to me"),
                            label._({ key: "Nmae" }, [
                                input._({ placeholder: "Your name" })
                            ]),
                            label._({ key: "Mail" }, [
                                input._({ placeholder: "Your email" })
                            ]),
                            label._({ key: "Message" }, [
                                input._({ placeholder: "Your message" })
                            ]),
                            button._("Contact")
                        ])
                    ])
                ])
            ]),
            footer._([
                section._([
                    h6._("Pardn ltd."),
                    ul._([
                        li._([
                            a._({ target: "_blank" }, [
                                "i.fa-brands.fa-github"._()
                            ])._go("https://github.com/pardnchiu")
                        ]),
                        li._([
                            a._({ target: "_blank" }, [
                                "i.fa-brands.fa-linkedin"._()
                            ])._go("https://linkedin.com/in/pardnchiu")
                        ]),
                        li._([
                            a._({ target: "_blank" }, [
                                "i.fa-regular.fa-envelope"._()
                            ])._go("mailto:dev@pardn.io")
                        ])
                    ]),
                    p._("© 2023 邱敬幃")
                ])
            ])
        ]);

        (function () {
            "#nav-list".$.$childAll.forEach((e, i) => {
                e._click(function () {
                    var h0 = "#body".$.$child(0).clientHeight;
                    var h1 = "#body".$.$child(1).clientHeight;
                    var h2 = "#body".$.$child(2).clientHeight;
                    var h3 = "#body".$.$child(3).clientHeight;
                    var h4 = "#body".$.$child(4).clientHeight;
                    var h5 = "#body".$.$child(5).clientHeight;
                    var st = document.body.scrollTop;
                    var vh = document.body.clientHeight;

                    "#nav-list".$.class_("show");

                    if (i === 0) {
                        document.body.scrollTop = 0;;
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

            "#tab-experience".$.$childAll.forEach((e, i) => {
                e._click(function () {
                    "tab-experience".$parent(0)._attr({ show: i })
                })
            });

            "#tab-portfolio".$.$childAll.forEach((e, i) => {
                e._click(function () {
                    "#tab-portfolio".$._attr({ index: i });
                    "#body-portfolio".$._attr({ "tag-filter": i });
                })
            });

            "#button-tab".$._click(function () {
                "#nav-list".$.$$class("show") ? "#nav-list".$.class_("show") : "#nav-list".$._class("show");
            });

            "#button-scrollTop".$._click(function () {
                document.body.scrollTop = 0;;
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
                var st = this.scrollTop;
                var vh = document.body.clientHeight;

                "#nav".$.$$_class(this.scrollTop > 0, "min")

                if (st > h0 + h1 + h2 + h3 + h4 + h5 - vh / 3) {
                    "#nav-list".$._attr({ index: 6 });
                    "#button-scrollTop".$._class("show");
                } else if (st > h0 + h1 + h2 + h3 + h4 - vh / 3) {
                    "#nav-list".$._attr({ index: 5 });
                    "#button-scrollTop".$._class("show");
                } else if (st > h0 + h1 + h2 + h3 - vh / 3) {
                    "#nav-list".$._attr({ index: 4 });
                    "#button-scrollTop".$._class("show");
                } else if (st > h0 + h1 + h2 - vh / 3) {
                    "#nav-list".$._attr({ index: 3 });
                    "#button-scrollTop".$._class("show");
                } else if (st > h0 + h1 - vh / 3) {
                    "#nav-list".$._attr({ index: 2 });
                    "#button-scrollTop".$._class("show");
                } else if (st > h0 - vh / 3) {
                    "#nav-list".$._attr({ index: 1 });
                    "#button-scrollTop".$._class("show");
                } else {
                    "#nav-list".$._attr({ index: 0 });
                    "#button-scrollTop".$.class_("show");
                }
            })
        }());
    });
}());
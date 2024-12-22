(function () {

    document.addEventListener("DOMContentLoaded", function () {
        var page = location.href.$url.$query("page") || "home";
        var $$portfolio = (page === "portfolio");
        var $$about = (page === "about");
        var $$home = !$$portfolio && !$$about;

        document.body._child([
            "nav"._([
                "button#show-nav"._([
                    "i.fa-solid.fa-bars-staggered"._()
                ])._click(function () {
                    var $$show = document.body.$$class("show");
                    $$show ? document.body.class_("show") : document.body._class("show")
                })
            ]),
            "section.left-bar"._([
                "section.user"._([
                    "section.head"._([
                        "img"._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                    ]),
                    "h6.name"._("Pardn Chiu"),
                    "section.button"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-facebook"._()
                        ])._go("https://www.facebook.com/chiuchingwei"),
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-instagram"._()
                        ])._go("https://www.instagram.com/pardnchiu"),
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-github"._()
                        ])._go("https://github.com/pardnchiu"),
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-linkedin"._()
                        ])._go("https://www.linkedin.com/in/pardnchiu")
                    ])
                ]),
                "section.tab"._([
                    `button${$$home ? ".sel" : ""}`._([
                        "i.fa-solid.fa-house"._(),
                        "p"._("Home")
                    ])._click(setHome),
                    `button${$$about ? ".sel" : ""}`._([
                        "i.fa-solid.fa-user"._(),
                        "p"._("About Me")
                    ])._click(setAbout),
                    `button${$$portfolio ? ".sel" : ""}`._([
                        "i.fa-solid.fa-briefcase"._(),
                        "p"._("Portfolio")
                    ])._click(setPortfolio),
                    // "a"._([
                    //   "i.fa-solid.fa-envelope"._(),
                    //   "p"._("Contact")
                    // ])
                ]),
                "footer"._([
                    "p"._([
                        "i.fa-regular.fa-copyright"._(),
                        "Copyright 2023",
                        "br"._(),
                        "Created By Pardn Chiu."
                    ])
                ])
            ]),
            "section.right-body"._()
        ]);

        "button.sel".$.click();
    });

    function setHome() {
        location.href.$url.__query({ "page": "home" }).__history();
        this.$parent(0).$sel("button.sel").class_("sel");
        this._class("sel");
        "section.right-body".$.__child([
            "section.home"._([
                "section"._([
                    "p.title"._(PDConfig.home.line1),
                    "h1"._([
                        PDConfig.home.line2.start,
                        "b#typing-area"._(),
                        PDConfig.home.line2.end
                    ]),
                    "p"._(function () {
                        return PDConfig.home.lines._((e, i) =>
                            `${e}${i === PDConfig.home.lines.length - 1 ? "" : "<br>"}`
                        )
                    }())
                ])
            ])
        ]);
        (function updateTitle() {
            var start = 0;
            var ary = PDConfig.home.line2.list;
            var elm = "typing-area".$;

            changeTitle();
            setInterval(() => changeTitle(), 8000);

            function changeTitle() {
                var txtL = elm.innerText.length;
                var index = txtL;
                var timerMinus = setInterval(() => {
                    elm.innerText = elm.innerText.slice(0, index);
                    index -= 1;
                }, 1000 / txtL);

                let timerNext = setTimeout(() => {
                    clearInterval(timerMinus);
                    clearTimeout(timerNext);

                    if (elm.innerText.length) elm.innerText = null;

                    var index = 0;
                    var txt = ary[start];
                    var txtL = txt.length;
                    var timerAdd = setInterval(() => {
                        elm.innerHTML += txt.charAt(index);
                        index += 1;
                    }, 3000 / txtL);

                    let timerStop = setTimeout(() => {
                        clearInterval(timerAdd);
                        clearTimeout(timerStop);
                        start += 1;
                        if (start > ary.length - 1) start = 0;
                    }, 3000 / txtL * (txtL + 1));
                }, 1000 / txtL * (txtL + 2));
            };
        }());
    };

    function setAbout() {
        location.href.$url.__query({ "page": "about" }).__history();
        this.$parent(0).$sel("button.sel").class_("sel");
        this._class("sel");
        "section.right-body".$.__child([
            "section.about"._([
                "h4"._("關於我"),
                "section.user"._([
                    "img"._(PDConfig.about.head),
                    "section"._([
                        "h6"._(PDConfig.about.heading),
                        "section"._(
                            PDConfig.about.list._$((e, i) =>
                                "p"._([
                                    "i.fa-solid.fa-angle-right"._(),
                                    "b"._(e.title),
                                    e.value
                                ])
                            )
                        )
                    ])
                ]),
                "section.item"._(
                    PDConfig.about.fact._$((e, i) =>
                        "div"._([
                            "h6"._(e.heading),
                            "p"._(e.content)
                        ])
                    )
                ),
                "h5"._("技能"),
                "section.skill"._(
                    PDConfig.about.skill._$((e, i) =>
                        "div"._({
                            skill: e.title,
                            year: e.year
                        }, [
                            "span"._()
                        ])
                    )
                ),
                "section.other"._([
                    "section"._([
                        "h6"._("專案"),
                        "section.timeline"._([
                            "h6"._("NEEDS開箱"),
                            "p.date"._("2019/12 - 2021/06")
                        ]),
                        "section.timeline"._([
                            "h6"._("Sakupin釘選你的作品"),
                            "p.date"._("2019/12 - 2021/06")
                        ]),
                        "section.timeline"._([
                            "h6"._("JOBALL找專家"),
                            "p.date"._("2018/08 - 現在")
                        ])
                    ]),
                    "section.right"._([
                        "h6"._("報價"),
                        "section.timeline"._([
                            "h6"._("iOS開發"),
                            "ul"._([
                                "li"._("原生APP: 12萬起")
                            ])
                        ]),
                        "section.timeline"._([
                            "h6"._("網站開發"),
                            "ul"._([
                                "li"._("一頁式網站: 1-3萬"),
                                "li"._("一客製化網站: 3-9萬")
                            ])
                        ])
                    ])
                ])
            ])
        ]);
    };

    function setPortfolio() {
        location.href.$url.__query({ "page": "portfolio" }).__history();
        this.$parent(0).$sel("button.sel").class_("sel");
        this._class("sel");
        "section.right-body".$.__child([
            "section.portfolio"._(
                PDConfig.portfolio._$((e, i) =>
                    "a"._([
                        "img"._(e.src),
                        "h6"._(e.title),
                        "p"._(e.description)
                    ])._open(e.href)
                )
            )
        ])
    };
}());
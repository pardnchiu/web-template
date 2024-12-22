var webConfig;
(function () {
    function $url() {
        return new URL(location.href);
    };

    function $qaram(key) {
        return $url().searchParams.get(key);
    };

    function _qaram(key, value) {
        var params = $url().searchParams;
        params.set(key, value);

        return
    };

    function copy(url) {
        document.body._child([
            "input#copy"._({ readOnly: true, value: url })
        ]);
        "copy".$.select();
        document.execCommand("copy");
        "copy".$.remove();
        alert("已拷貝至剪貼簿.")
    };

    document.addEventListener("DOMContentLoaded", function () {
        webConfig = {
            user: {
                head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                name: "邱敬幃",
                title: "帕登數位科技負責人",
                link: {
                    linkedin: "https://www.linkedin.com/in/pardnchiu",
                    instagram: "https://instagram.com/pardnio",
                    facebook: "https://www.facebook.com/chiuchingwei",
                    github: "https://github.com/pardnchiu",
                    twitter: null,
                    behance: null,
                    blog: "https://pardn.io/blog"
                },
                exp: [
                    {
                        num: (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        content: "全端開發"
                    },
                    {
                        num: "4個",
                        content: "iOS APP 製作"
                    },
                    {
                        num: "+40個",
                        content: "網站製作"
                    }
                ],
                button: {
                    text: "查看原碼",
                    icon: "fa-solid fa-code",
                    href: "https://github.com/pardnchiu/web-template"
                },
                contact: {
                    phone: null,
                    email: "chiuchingwei@icloud.com",
                    fbmessager: "https://m.me/chiuchingwei",
                    whatsapp: null,
                    line: null,
                    telegram: null
                },
                skill: {
                    iOS: {
                        Swift: (new Date("2016/12/01").$timestamp).$gone.replace(/年前/, "")
                    },
                    Frontend: {
                        Html: (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        Css: (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        JavaScript: (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        Sass: (new Date("2019/06/01").$timestamp).$gone.replace(/年前/, "")
                    },
                    Backend: {
                        "Node.js": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "TypeScript": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "Express": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "Pug / Ejs": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "Nginx": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        php: (new Date("2020/04/01").$timestamp).$gone.replace(/年前/, ""),
                        python: (new Date("2021/06/01").$timestamp).$gone.replace(/年前/, "")
                    },
                    Database: {
                        "MySQL / MariaDB": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "Redis": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                        "Elasticsearch": (new Date("2019/06/01").$timestamp).$gone.replace(/年前/, ""),
                        "MongoDB": (new Date("2019/06/01").$timestamp).$gone.replace(/年前/, ""),
                    },
                    "Google Cloud Platform": {
                        "Firebase / Firestore": (new Date("2016/12/01").$timestamp).$gone.replace(/年前/, ""),
                        "Cloud Functions": (new Date("2016/12/01").$timestamp).$gone.replace(/年前/, ""),
                        "App Engine": (new Date("2016/12/01").$timestamp).$gone.replace(/年前/, ""),
                        "Compute Engine": (new Date("2017/09/01").$timestamp).$gone.replace(/年前/, ""),
                    },
                    OS: {
                        "RedHat / CentOS / RockyLinux": (new Date("2019/06/01").$timestamp).$gone.replace(/年前/, ""),
                        "Debian": (new Date("2018/10/01").$timestamp).$gone.replace(/年前/, ""),
                    },
                    more: {
                        Git: (new Date("2017/01/01").$timestamp).$gone.replace(/年前/, ""),
                        Docker: (new Date("2019/12/01").$timestamp).$gone.replace(/年前/, ""),
                        Postman: (new Date("2019/12/01").$timestamp).$gone.replace(/年前/, ""),
                        Figma: (new Date("2019/12/01").$timestamp).$gone.replace(/年前/, ""),
                    }
                }
            },
            portfolio: Array.from({ length: 20 }, (v, i) => {
                return {
                    sn: 42,
                    href: "",
                    src: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
                    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    tag: (Math.random() > 0.5 ? 2 : 1)
                }
            })
        };
        _LazyListener();

        var page = $qaram("page") || "portfolio";

        document.body._child([
            "div#J002"._([
                "div#body-container"._([
                    setTopUser()
                ])._scroll(function () {
                    if (!"portfolio-tab".$) return;
                    (this.scrollTop >= 40) ? document.getElementById("portfolio-tab").classList.add("show") : document.getElementById("portfolio-tab").classList.remove("show");
                })
            ])
        ]);

        (page === "about") ? setAbout() : (page === "skills") ? setSkills() : setPortfolio()
    });

    function setTopUser() {
        var page = $qaram("page") || "portfolio";
        return "div.top-user"._([
            "div.head"._([
                webConfig.user.head ? "img"._(webConfig.user.head) : "p"._(webConfig.user.name.charAt(0))
            ]),
            "h1"._({ title: webConfig.user.title }, webConfig.user.name),
            "ul.link"._([
                webConfig.user.link.linkedin ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-linkedin-in"._()
                    ])._open(webConfig.user.link.linkedin)
                ]) : null,
                webConfig.user.link.instagram ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-instagram"._()
                    ])._open(webConfig.user.link.instagram)
                ]) : null,
                webConfig.user.link.facebook ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-square-facebook"._()
                    ])._open(webConfig.user.link.facebook)
                ]) : null,
                webConfig.user.link.github ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-github"._()
                    ])._open(webConfig.user.link.github)
                ]) : null,
                webConfig.user.link.twitter ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-square-twitter"._()
                    ])._open(webConfig.user.link.twitter)
                ]) : null,
                webConfig.user.link.behance ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-square-behance"._()
                    ])._open(webConfig.user.link.behance)
                ]) : null,
                webConfig.user.link.blog ? "li"._([
                    "a"._({ target: "_blank" }, [
                        "i.fa-brands.fa-blogger-b"._()
                    ])._open(webConfig.user.link.blog)
                ]) : null,
            ]),
            "ul.exp"._(
                webConfig.user.exp._$(e =>
                    "li"._({ num: e.num }, e.content)
                )
            ),
            "div.button"._([
                "a"._({ target: "_blank", num: Object.keys(webConfig.user.contact).filter(a => webConfig.user.contact[a]).length }, [
                    "p"._(webConfig.user.button.text),
                    webConfig.user.button.icon ? `i.${webConfig.user.button.icon.replace(/\s/g, ".")}`._() : null
                ])._go(webConfig.user.button.href),
                "ul.contact"._([
                    webConfig.user.contact.phone ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-solid.fa-phone"._()
                        ])._open(`tel:${webConfig.user.contact.phone}`)
                    ]) : null,
                    webConfig.user.contact.email ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-regular.fa-envelope"._()
                        ])._open(`mailto:${webConfig.user.contact.email}`)
                    ]) : null,
                    webConfig.user.contact.fbmessager ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-facebook-messenger"._()
                        ])._open(webConfig.user.contact.fbmessager)
                    ]) : null,
                    webConfig.user.contact.whatsapp ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-whatsapp"._()
                        ])._open(webConfig.user.contact.whatsapp)
                    ]) : null,
                    webConfig.user.contact.line ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-line"._()
                        ])._open(webConfig.user.contact.line)
                    ]) : null,
                    webConfig.user.contact.telegram ? "li"._([
                        "a"._({ target: "_blank" }, [
                            "i.fa-brands.fa-telegram"._()
                        ])._open(webConfig.user.contact.telegram)
                    ]) : null
                ])
            ]),
            "ul#page-tab.tab"._({ sel: page === "about" ? 2 : page === "skills" ? 1 : 0 }, [
                "li"._("Portfolio")._click(() => tabOnClick()),
                "li"._("Skills")._click(() => tabOnClick("skills")),
            ])
        ]);

        function tabOnClick(pg) {
            var page = pg || "portfolio";

            if (
                document.body.clientWidth < 640 &&
                !"page-tab".$.$$class("expand")
            ) return "page-tab".$._class("expand");

            "page-tab".$.class_("expand");

            (page === "about") ? setAbout() : (page === "skills") ? setSkills() : setPortfolio();
        };
    };

    function setPortfolio() {
        var grid_types = (function () {
            var obj = {};
            webConfig.portfolio.forEach(e => {
                obj[e.tag] = 1
            });
            return Object.keys(obj);
        }());

        "page-tab".$._attr({ sel: 0 });

        if ("body-container".$.$childAll.length > 1) "body-container".$.$childAll[1].$rm();

        "body-container".$._child([
            "div#portfolio-list"._(
                (function () {
                    var type = ($qaram("type") || "ALL");
                    var ary = [];
                    var list = (type === "ALL") ? webConfig.portfolio : webConfig.portfolio.filter(e => e.tag == type);
                    list.forEach(e => {
                        ary.push(
                            "figure"._([
                                "img"._({ src: e.src }),
                                "figcaption"._([
                                    "ul"._([
                                        "li"._([
                                            "a"._([
                                                "i.fa-solid.fa-globe"._(),
                                                "p"._("開啟")
                                            ])._go(e.href)
                                        ]),
                                        "li"._([
                                            "button"._([
                                                "i.fa-solid.fa-arrow-up-from-bracket"._(),
                                                "p"._("分享")
                                            ])._click(() => copy(e.href))
                                        ])
                                    ]),
                                    "h6"._(e.title)
                                ])
                            ])
                        )
                    });
                    return ary
                }())
            )
        ]);

        if (!"portfolio-tab".$) "J002".$._child([
            "ul#portfolio-tab"._({ sel: 0 },
                (function () {
                    function onclick(type, index) {
                        if (document.body.clientWidth < 800) {
                            if ("portfolio-tab".$.$$class("expand")) {
                                "portfolio-tab".$.class_("expand")._attr({ sel: index });
                                "portfolio-list".$.__child(
                                    (function () {
                                        var ary = [];
                                        var list = (type === "ALL") ? webConfig.portfolio : webConfig.portfolio.filter(e => e.tag == type);
                                        list.forEach(e => {
                                            ary.push(
                                                "figure"._([
                                                    "img"._({ src: e.src }),
                                                    "figcaption"._([
                                                        "ul"._([
                                                            "li"._([
                                                                "a"._({ target: "_blank" }, [
                                                                    "i.fa-solid.fa-globe"._(),
                                                                    "p"._("開啟")
                                                                ])._go(e.href)
                                                            ]),
                                                            "li"._([
                                                                "button"._([
                                                                    "i.fa-solid.fa-arrow-up-from-bracket"._(),
                                                                    "p"._("分享")
                                                                ])._click(() => copy(e.href))
                                                            ])
                                                        ]),
                                                        "h6"._(e.title)
                                                    ])
                                                ])
                                            )
                                        });
                                        return ary
                                    }())
                                )
                            } else {
                                "portfolio-tab".$._class("expand");
                            };
                        } else {
                            "portfolio-tab".$.class_("expand")._attr({ sel: index });
                            "portfolio-list".$.__child(
                                (function () {
                                    var ary = [];
                                    var list = (type === "ALL") ? webConfig.portfolio : webConfig.portfolio.filter(e => e.tag == type);
                                    list.forEach(e => {
                                        ary.push(
                                            "figure"._([
                                                "img"._({ src: e.src }),
                                                "figcaption"._([
                                                    "ul"._([
                                                        "li"._([
                                                            "a"._({ target: "_blank" }, [
                                                                "i.fa-solid.fa-globe"._(),
                                                                "p"._("開啟")
                                                            ])._go(e.href)
                                                        ]),
                                                        "li"._([
                                                            "button"._([
                                                                "i.fa-solid.fa-arrow-up-from-bracket"._(),
                                                                "p"._("分享")
                                                            ])._click(() => copy(e.href))
                                                        ])
                                                    ]),
                                                    "h6"._(e.title)
                                                ])
                                            ])
                                        )
                                    });
                                    return ary
                                }())
                            )
                        }
                    };
                    var ary = [
                        "li.sel"._("ALL")._click(() => onclick("ALL", 0))
                    ];
                    grid_types.forEach((e, i) => {
                        ary.push(
                            "li"._(e)._click(() => onclick(e, i + 1))
                        );
                    });
                    return ary;
                }())
            )
        ]);
    };

    function setSkills() {
        "page-tab".$._attr({ sel: 1 });

        if ("body-container".$.$childAll.length > 1) "body-container".$.$childAll[1].$rm();
        if ("portfolio-tab".$) "portfolio-tab".$.$rm();

        "body-container".$._child([
            "div#skill-list"._([
                "section"._(),
                "section"._()
            ])
        ]);
        //"skill-list".$
        webConfig.user.skill.$keys.forEach(key => {
            const skillObj = webConfig.user.skill[key] == null ? {} : webConfig.user.skill[key];
            const skillKeys = skillObj.$keys;
            let body = "ul"._(
                [
                    "h6"._(key)
                ]._(
                    skillKeys._$(e => {
                        const year = skillObj[e];
                        return "li"._({ year: year }, [
                            "div"._(),
                            "div"._(),
                            "div"._([
                                "b"._({ year: year }, e)
                            ])
                        ])
                    })
                )
            );
            if ("skill-list".$.$child(0).scrollHeight <= "skill-list".$.$child(1).scrollHeight) {
                "skill-list".$.$child(0)._child(body);
            }
            else {
                "skill-list".$.$child(1)._child(body);
            }
        })
    };

    function setAbout() {
        "page-tab".$._attr({ sel: 2 });

        if ("body-container".$.$childAll.length > 1) "body-container".$.$childAll[1].$rm();
        if ("portfolio-tab".$) "portfolio-tab".$.$rm();

        return ""
    };
}());
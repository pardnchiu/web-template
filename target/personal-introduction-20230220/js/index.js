
const images = [
    {
        type: "laptop",
        src: "https://picsum.photos/id/0/512.webp"
    },
    {
        type: "laptop",
        src: "https://picsum.photos/id/1/512.webp"
    },
    {
        type: "laptop",
        src: "https://picsum.photos/id/2/512.webp"
    },
    {
        type: "laptop",
        src: "https://picsum.photos/id/3/512.webp"
    },
    {
        type: "laptop",
        src: "https://picsum.photos/id/4/512.webp"
    },
    {
        type: "landscape",
        src: "https://picsum.photos/id/10/512.webp"
    },
    {
        type: "landscape",
        src: "https://picsum.photos/id/11/512.webp"
    },
    {
        type: "landscape",
        src: "https://picsum.photos/id/13/512.webp"
    },
    {
        type: "landscape",
        src: "https://picsum.photos/id/14/512.webp"
    },
    {
        type: "landscape",
        src: "https://picsum.photos/id/15/512.webp"
    },
    {
        type: "city",
        src: "https://picsum.photos/id/43/512.webp"
    },
    {
        type: "city",
        src: "https://picsum.photos/id/49/512.webp"
    },
    {
        type: "city",
        src: "https://picsum.photos/id/57/512.webp"
    },
    {
        type: "city",
        src: "https://picsum.photos/id/61/512.webp"
    },
    {
        type: "city",
        src: "https://picsum.photos/id/88/512.webp"
    }
];

const types = images.map(e => {
    return {
        title: e.type.toUpperCase(),
        href: "?page=portfolio&type=" + e.type
    }
}).filter((e, i, ary) => {
    return i === ary.findIndex(t => t.title === e.title && t.href === e.href)
})

document.addEventListener("DOMContentLoaded", _ => {
    const page = (new URL(location.href)).searchParams.get("page") || "home";
    const type = ((new URL(location.href)).searchParams.get("type") || "ALL").toUpperCase();
    const is_home = page === "home";
    const is_portfolio = page === "portfolio";
    const app = new QUI({
        id: "body",
        data: {
            is_home: is_home,
            is_portfolio: is_portfolio,
            nav: {
                title: page.toUpperCase(),
                tab: [
                    {
                        class: is_home ? "sel" : "",
                        title: "Home",
                        href: "?page=home"
                    },
                    {
                        class: is_portfolio ? "sel" : "",
                        title: "Portfolio",
                        href: "?page=portfolio"
                    }
                ]
            },
            types: types,
            type_index: types.findIndex(e => e.title === type.toUpperCase()) + 1,
            portfolio: type === "ALL" ? images : images.filter(e => e.type === type.toLowerCase())
        },
        event: {
            show: e => {
                if (!"mobile-tab".$.$$class("show")) {
                    "mobile-tab".$._class("show")
                }
            },
            expand: e => {
                const href = e.target.dataset.href;
                const dom_ul = e.target.$parent(0);
                if (document.body.clientWidth < 800 && !dom_ul.$$class("expand")) {
                    dom_ul._class("expand");
                }
                else {
                    location.href = href;
                }
            },
            copy: e => {
                e.target.dataset.href.$copy();
                e.target.__child([
                    "fa-solid fa-circle-check"._fa,
                    "已複製"
                ]);
                setTimeout(_ => {
                    e.target.__child([
                        "fa-solid fa-share-nodes"._fa,
                        "分享"
                    ]);
                }, 500);
            }
        },
        when: {

            rendered: _ => {
                (_ => {
                    if (!is_home) {
                        return;
                    };

                    let start = 0;
                    const ary = ["iOS工程師", "網站工程師", "程式設計師", "Pardn Chiu"];
                    const dom = document.getElementById("typing-area");

                    changeTitle();
                    setInterval(_ => changeTitle(), 8000);

                    function changeTitle() {
                        const now_text_len = dom.innerText.length;
                        let now_index = now_text_len;
                        let timer_delete_text = setInterval(_ => {
                            dom.innerText = dom.innerText.slice(0, now_index);
                            now_index -= 1;
                        }, 1000 / now_text_len);

                        let timer_next = setTimeout(() => {
                            clearInterval(timer_delete_text);
                            clearTimeout(timer_next);

                            if (dom.innerText.length) {
                                dom.innerText = "";
                            };

                            const txt = ary[start];
                            let index = 0;
                            let text_len = txt.length;
                            let timer_add_text = setInterval(() => {
                                dom.innerText += txt.charAt(index);
                                index += 1;
                            }, 3000 / text_len);

                            let timer_stop = setTimeout(() => {
                                clearInterval(timer_add_text);
                                clearTimeout(timer_stop);

                                start += 1;

                                if (start > ary.length - 1) {
                                    start = 0;
                                };
                            }, 3000 / text_len * (text_len + 1));
                        }, 1000 / now_text_len * (now_text_len + 2));
                    };
                })();
            }
        }
    })
});
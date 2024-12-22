
document.addEventListener("DOMContentLoaded", _ => {
    let image_l = (_ => {
        let ary = [];
        for (let i = 0; i < 30; i++) {
            ary.push("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
        }
        return ary;
    })();

    let image_m = (_ => {
        let ary = [];
        for (let i = 0; i < 30; i++) {
            ary.push("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
        }
        return ary;
    })();

    let image_s = (_ => {
        let ary = [];
        for (let i = 0; i < 30; i++) {
            ary.push("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
        }
        return ary;
    })();

    let icons = [
        'user',
        'lock',
        'home',
        'search',
        'envelope',
        'phone',
        'globe',
        'camera',
        'calendar',
        'heart',
        'star',
        'flag',
        'book',
        'car',
        'music',
        'film',
        'cloud',
        'bell',
        'map',
        'shopping-cart',
        'trash',
        'pencil-alt',
        'cog',
        'trophy',
        'umbrella',
        'wifi',
        'leaf',
        'key',
        'lightbulb',
        'coffee'
    ];

    const body = new PD({
        id: "body",
        data: {
            contact: [
                {
                    class: "fa-brands fa-github",
                    href: "https://github.com/pardnchiu"
                },
                {
                    class: "fa-brands fa-linkedin",
                    href: "https://linkedin.com/in/pardnchiu"
                }
            ],
            section_1: {
                item: (_ => {
                    let ary = [];
                    image_m = image_m.$random;
                    icons = icons.$random;
                    for (let i = 0; i < 3; i++) {
                        ary.push({
                            image: image_m[i],
                            icon1: "fa-solid fa-" + icons[i],
                            icon2: "fa-solid fa-" + icons[icons.length - 1 - i]
                        })
                    };
                    return ary;
                })()
            },
            section_2: {
                item: (_ => {
                    let ary = [];
                    icons = icons.$random;
                    for (let i = 0; i < 4; i++) {
                        ary.push({
                            icon: "fa-solid fa-" + icons[i]
                        })
                    };
                    return ary;
                })()
            },
            section_3: {
                item: (_ => {
                    let ary = [];
                    image_m = image_m.$random;
                    icons = icons.$random;
                    for (let i = 0; i < 4; i++) {
                        ary.push({
                            image: image_m[i],
                            icon: "fa-solid fa-" + icons[i]
                        })
                    };
                    return ary;
                })()
            },
            section_4: {
                item: (_ => {
                    let ary = [];
                    icons = icons.$random;
                    for (let i = 0; i < 4; i++) {
                        ary.push({
                            icon: "fa-solid fa-" + icons[i]
                        })
                    };
                    return ary;
                })()
            },
            footer: {
                image: image_s.$random.slice(0, 9)
            }
        },
        event: {
            show: e => {
                const elm_nav = e.target.$pre(0);
                const is_show = elm_nav.$$class("show");
                elm_nav.$$class_(is_show, "show");
            },
            close: (e) => {
                const elm_nav = e.target.$parent(0);
                const is_show = elm_nav.$$class("show");
                elm_nav.$$class_(is_show, "show");
            }
        },
        next: () => {
            document.body.addEventListener('scroll', e => {
                "top-nav".$.$$_class(e.target.$y >= 64, 'show');
            })
        }
    });
});
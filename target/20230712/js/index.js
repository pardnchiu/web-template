(function (_window, _document, _empty, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j) {

    const section = [_s, _e, _c, _t, _i, _o, _n].$str(_empty);
    const strong = [_s, _t, _r, _o, _n, _g].$str(_empty);
    const ul = [_u, _l].$str(_empty);
    const li = [_l, _i].$str(_empty);
    const em = [_e, _m].$str(_empty);
    const h1 = [_h, 1].$str(_empty);
    const h6 = [_h, 6].$str(_empty);
    const button = [_b, _u, _t, _t, _o, _n].$str(_empty);
    const img = [_i, _m, _g].$str(_empty);
    const label = [_l, _a, _b, _e, _l].$str(_empty);
    const input = [_i, _n, _p, _u, _t].$str(_empty);
    const article = [_a, _r, _t, _i, _c, _l, _e].$str(_empty);
    const figure = [_f, _i, _g, _u, _r, _e].$str(_empty);
    const time = [_t, _i, _m, _e].$str(_empty);
    const textarea = [_t, _e, _x, _t, _a, _r, _e, _a].$str(_empty);
    let _SECTION_LEFT, _SECTION_LIST, _SECTION_ARTICLE, _SECTION_ABOUT, _SECTION_CONTACT;

    _document.addEventListener("DOMContentLoaded", function () {

        _SECTION_LEFT = function (index) {
            return (section + "#section-left")._([
                strong._("PARDN CHIU"),
                _p._("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis tortor tellus, ac venenatis sem aliquama. Proin sed justo diam. Vestibulum ut sodales nisl, eu bibendum neque."),
                ul._({ index: index }, [
                    li._("HOME")._click(_CLICK_HOME),
                    li._("ABOUT")._click(_CLICK_ABOUT),
                    li._("CONTACT")._click(_CLICK_CONTACT),
                ]),
                section._([
                    _a._([
                        "fa-brands fa-facebook"._fa
                    ])._open("https://www.facebook.com/chiuchingwei"),
                    _a._([
                        "fa-brands fa-instagram"._fa
                    ])._open("https://www.instagram.com/pardnio"),
                    _a._([
                        "fa-brands fa-github"._fa
                    ])._open("https://github.com/pardnchiu/web-template"),
                    _a._([
                        "fa-brands fa-linkedin-in"._fa
                    ])._open("https://linkedin.com/in/pardnchiu"),
                    _a._([
                        "fa-regular fa-envelope"._fa
                    ])._open("https://linkedin.com/in/pardnchiu")
                ]),
                em._("© 2023 邱敬幃")
            ])
        };

        _SECTION_LIST = (section + ".list")._(
            Array.from({ length: 10 }, () => 1)._$((e, i) =>
                article._([
                    figure._([
                        img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                    ]),
                    section._([
                        h6._("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),
                        _p._("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, elit in porta convallis, diam sem pretium libero, a vehicula sapien lorem at ante. Proin felis turpis, accumsan sit amet pulvinar non, pellentesque eget enim. Morbi scelerisque molestie mauris, pretium malesuada dolor auctor non. Sed eleifend tempus constius. Sed rhoncus ultricies blandit."),
                        ul._([
                            li._([
                                time._({ datetime: "2023-07-11" }, "JULY 11, 2023")
                            ]),
                            li._("LOREM IPSUM")
                        ])
                    ])
                ])._click(() => _CLICK_ARTICLE(e.src))
            )._([
                (ul + ".page")._([
                    li._([
                        "fa-solid fa-angle-left"._fa
                    ]),
                    li._(1),
                    li._(2),
                    li._(3),
                    li._([
                        "fa-solid fa-angle-right"._fa
                    ])
                ])
            ])
        );

        _SECTION_ARTICLE = function (target) {
            return (section + ".article")._([
                (figure + ".fill")._([
                    img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                ]),
                h1._("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
                ul._([
                    li._([
                        time._({ datetime: "2023-07-11" }, "JULY 11, 2023")
                    ]),
                    li._("LOREM IPSUM")
                ]),
                section._(`<em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin, elit in porta convallis, diam sem pretium libero, a vehicula sapien lorem at ante. Proin felis turpis, accumsan sit amet pulvinar non, pellentesque eget enim.</em>
				<h3>Morbi scelerisque molestie mauris, pretium malesuada dolor auctor non. </h3>
				<p>Sed eleifend tempus constius. Sed rhoncus ultricies blandit. Integer in mattis nisi. Nulla nec eros quis urna lobortis dignissim quis at lectus. Nunc mollis tortor ex, sit amet vulputate ex imperdiet nec. Aliquam gravida, mi sit amet euismod faucibus, dui ante gravida tellus, non cursus est diam at lacus.</p>
				<ul>
					<li>Morbi vulputate placerat nibh</li>
					<li>Quisque mattis mi sit amet tincidunt elementum</li>
					<li>Duis in eleifend metus</li>
					<li>Quis pulvinar enim</li>
				</ul>
				<p>Aenean sit amet neque lorem. <b>Sed non augue rutrum</b>, condimentum augue ac, interdum lectus. Donec ac leo tempor, volutpat massa sit amet, suscipit magna. <a href="">Pellentesque elit neque</a>, fringilla nec volutpat sed, consequat sed arcu.</p>
				<h4>Praesent lacinia metus ac hendrerit tincidunt. Ut in lacinia orci, eu iaculis ligula.</h4>
				<p>Donec nec dictum lorem, at mollis risus. Morbi at tortor ut velit commodo venenatis. Maecenas augue leo, tempus a ex faucibus, lobortis rutrum erat. <a href="">Sed ut imperdiet ligula</a>, sed ultricies dui. Nunc facilisis risus non lorem viverra placerat.</p>
				<blockquote>
					Pellentesque quis vestibulum odio, sed congue eros. Morbi suscipit commodo mi non aliquam. Aliquam sed nulla ut risus aliquam auctor a vel velit. Suspendisse potenti. Sed dolor est, tincidunt at faucibus sit amet, dapibus a sapien.
				</blockquote>
				<p>Orci constius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam venenatis, magna blandit finibus mollis, lacus elit imperdiet quam, quis tempor ex libero vel urna.</p>
				<h5>Suspendisse nec tortor fringilla, sodales ex nec, fringilla orci. In hac habitasse platea dictumst.</h5>
				<p>Proin lobortis enim enim, sit amet maximus ante congue non. Proin euismod rutrum ante, eget volutpat enim mollis ut. Aenean aliquam imperdiet ipsum sit amet bibendum.</p>
				<p>Ut sagittis diam at gravida imperdiet. Nullam tellus quam, accumsan congue auctor vel, sollicitudin tincidunt nisi. Donec elementum luctus consectetur.</p>
				<h6>Quisque id iaculis orci. Ut ut lacinia risus, tincidunt placerat turpis.</h6>
				<p>Donec in felis quis sem faucibus mattis. Proin porttitor velit ut dui venenatis, in eleifend sapien sagittis. Mauris constius tincidunt auctor. Suspendisse eget libero et nulla molestie placerat. Vivamus ultricies mattis enim, at malesuada sem viverra ac.</p>`)
            ])
        };

        _SECTION_ABOUT = (section + ".article")._([
            (figure + ".fill")._([
                img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
            ]),
            h1._("關於我"),
            section._(`<p>我是<a href="https://linkedin.com/in/pardnchiu" target="_blank">邱敬幃 (Pardn
            Chiu)</a>。<br>一位具備iOS和網站全端開發技能的開發者，目前在<a href="https://linkedin.com/company/pardnltd"
            target="_blank">帕登數位科技有限公司 (Pardn Ltd)</a>擔任全端工程師。</p>
    <ul>
        <li>原生iOS<br>熟練運用Swift／UIKit進行純代碼開發，不使用Storyboard、SwiftUI。</li>
        <li>網站前端<br>擅長運用HTML、CSS／Sass與原生JavaScript開發SPA，不使用前端框架、架站平台。</li>
        <li>網站後端<br>懂PHP、Python，且專精於使用Node.js搭配TypeScript。</li>
    </ul>
    <p>擅於獨立開發，且對於經營自己的平台充滿熱情。<br>除了開發網站模板和iOS範例至Github供他人下載，也獨立開發和經營以下平台。</p>
    <ul>
        <li>
            <a href="https://joball.tw" target="_blank">JOBALL找專家-專業人才外包網</a>
        </li>
    </ul>
    <p>對開發技術充滿熱情，並能提供高品質的解決方案。<br>在開發iOS與網站皆具有豐富的經驗。<br>如果您對我的技能和經驗感興趣，歡迎與我聯繫。</p>
    <ul>
        <li>Email：<a href="mailto:dev@pardn.io" target="_blank">dev@pardn.io</a></li>
        <li>Website：<a href="https://pardn.io" target="_blank">pardn.ltd</a></li>
        <li>GitHub：<a href="https://github.com/pardnchiu" target="_blank">github.com/pardnchiu</a></li>
        <li>Linkedin：<a href="https://linkedin.com/in/pardnchiu"
                target="_blank">linkedin.com/in/pardnchiu</a></li>
    </ul>
    <button txt="Get in touch">Get in touch</button>`)
        ])

        _SECTION_CONTACT = (section + ".contact")._([
            h1._("Contact"),
            _p._("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque dui nunc, sit amet tincidunt nibh congue in. Maecenas interdum sed mauris ornare ornare. Maecenas viverra eros bibendum arcu sagittis venenatis vel nec urna. Mauris sit amet lacus nunc. Duis vehicula, erat non auctor maximus, augue orci dapibus felis, et bibendum turpis purus in mauris."),
            _p._("Mauris ut risus magna. In quis congue orci. Nullam rutrum accumsan nunc sed malesuada. Duis laoreet mauris quis massa dignissim, nec ornare erat volutpat. Ut quam turpis, pharetra vitae ultricies aliquam, convallis quis arcu. Vivamus at egestas lectus."),
            label._([
                "Name",
                input._({ placeholder: "Enter your name" })
            ]),
            label._([
                "Email",
                input._({ placeholder: "Enter your email address" })
            ]),
            label._([
                "Email",
                textarea._({ placeholder: "Enter your message" })
            ]),
            button._({ txt: "Get in touch" }, "Get in touch")
        ]);

        function _CLICK_HOME() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _SECTION_LEFT(0),
                (section + "#section-right")._([
                    _SECTION_LIST
                ])
            ]);
        };

        function _CLICK_ARTICLE(target) {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _SECTION_LEFT(0),
                (section + "#section-right")._([
                    _SECTION_ARTICLE(target),
                    (section + ".button")._([
                        button._([
                            "fa-solid fa-angle-left"._fa,
                            _p._("ALL POSTS")
                        ])._click(_CLICK_HOME)
                    ])
                ])
            ]);
        };

        function _CLICK_ABOUT() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _SECTION_LEFT(1),
                (section + "#section-right")._([
                    _SECTION_ABOUT
                ])
            ]);
        };

        function _CLICK_CONTACT() {
            _document.body.scrollTop = 0;
            _document.body.__child([
                _SECTION_LEFT(2),
                (section + "#section-right")._([
                    _SECTION_CONTACT
                ])
            ]);
        };

        _CLICK_HOME();
    });
}(window, document, "", _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9));


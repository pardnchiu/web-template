var title = "Lorem ipsum dolor sit amet";
var description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
Fusce pretium vestibulum velit, sed facilisis odio efficitur sed. <br>
Maecenas tristique luctus ipsum, a rhoncus justo. Praesent non felis tempor, fermentum metus
id, tristique elit. <br>
Morbi a tristique nisl. <br><br>
Cras in lacus nec leo iaculis dignissim. <br>
Ut elementum facilisis est, sed commodo libero tincidunt sed. Nam nec mi id nunc ultrices
consequat et ac ipsum.`;
var chats = [
    {
        name: "Ethan Sullivan",
        id: "ethan_sullivan",
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        title: "UI/UX設計師",
        contact: [
            "email",
            "line",
            "instagram",
            "behance"
        ] 
    },
    {
        name: "Lily Bennett",
        id: "bennett",
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        title: "iOS工程師",
        contact: [
            "email",
            "line",
            "facebook",
            "github"
        ]
    },
    {
        name: "Caleb Foster",
        id: "calebfoster",
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        title: "網站工程師",
        contact: [
            "email",
            "phone",
            "github"
        ]
    },
    {
        name: "Sophia Myers",
        id: "sophia_m",
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        title: "平面設計師",
        contact: [
            "email",
            "phone",
            "behance"
        ]
    },
    {
        name: "Jackson Cooper",
        id: "j_cooper",
        head: "https://fakeimg.pl/1024/282828/eae0d0/?text=sample",
        title: "室內設計師",
        contact: [
            "email",
            "phone",
            "facebook",
            "instagram",
            "behance"
        ]
    },
];
var albums = (function () {
    var ary = [];
    for (let i = 0; i < 10; i++) {
        var index1 = i % 5;
        ary.push({
            user: chats[index1],
            photos: (function () {
                var ary = [];
                for (let j = index1; j <= i + index1; j++) {
                    var index2 = (j + 1) % 5;
                    ary.push("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                };
                return ary;
            }()),
            watch: 123,
            date: "2023/06/01 12:12",
            dateTxt: "一週前更新",
            title: `${title} ${i}`,
            description: description
        })
    };
    return ary.sort(() => Math.random() - 0.5);
}());
var services = (function () {
    var ary = [];
    for (let i = 0; i < 10; i++) {
        var index1 = i % 5;
        ary.push({
            user: chats[index1],
            albums: albums.slice(index1, index1 * 2),
            watch: 123,
            date: "2023/06/01 12:12",
            dateTxt: "一週前更新",
            title: `${title} ${i}`,
            description: description
        });
    };
    return ary.sort(() => Math.random() - 0.5);
}());
var cases = (function () {
    var ary = [];
    for (let i = 0; i < 10; i++) {
        var index1 = i % 5;
        ary.push({
            user: chats[index1],
            albums: albums.slice(index1, index1 * 2),
            watch: 123,
            date: "2023/06/01 12:12",
            dateTxt: "一週前更新",
            title: `${title} ${i}`,
            description: description
        });
    };
    return ary;
}());
var posts = (function () {
    var ary = [];
    for (let i = 0; i < 10; i++) {
        var index1 = i % 5;
        ary.push({
            user: chats[index1],
            photos: (function () {
                var ary = [];
                for (let j = index1; j <= i + index1; j++) {
                    var index2 = (j + 1) % 5;
                    ary.push("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                };
                return ary;
            }()),
            watch: 123,
            date: "2023/06/01 12:12",
            dateTxt: "一週前更新",
            title: `${title} ${i}`,
            description: description
        })
    };
    return ary.sort(() => Math.random() - 0.5);
}());
(function (_window, _document, _empty, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _a, _b, _c, _d, _e, _f, _g, _h, _i, _j) {

    var init;
    var albumIndex;
    var albumGrid;
    var albumPop;
    var photoPop;
    var serviceIndex;
    var serviceGrid;
    var caseIndex;
    var postIndex;
    var bookmarkIndex;
    var notifyList;
    var nav = [_n, _a, _v].$str(_empty);
    var section = [_s, _e, _c, _t, _i, _o, _n].$str(_empty);
    var img = [_i, _m, _g].$str(_empty);
    var strong = [_s, _t, _r, _o, _n, _g].$str(_empty);
    var button = [_b, _u, _t, _t, _o, _n].$str(_empty);
    var h1 = [_h, 1].$str(_empty);
    var h6 = [_h, 6].$str(_empty);
    var p = _p;
    var a = _a;
    var ul = [_u, _l].$str(_empty);
    var li = [_l, _i].$str(_empty);
    var figure = [_f, _i, _g, _u, _r, _e].$str(_empty);
    var figcaption = [_f, _i, _g, _c, _a, _p, _t, _i, _o, _n].$str(_empty);
    var input = [_i, _n, _p, _u, _t].$str(_empty);
    var time = [_t, _i, _m, _e].$str(_empty);
    var label = [_l, _a, _b, _e, _l].$str(_empty);
    var article = [_a, _r, _t, _i, _c, _l, _e].$str(_empty);
    var div = [_d, _i, _v].$str(_empty);
    var svg = [_s, _v, _g].$str(_empty);
    var path = [_p, _a, _t, _h].$str(_empty);
    var b = _b;
    var textarea = [_t, _e, _x, _t, _a, _r, _e, _a].$str(_empty);
    var NAV_TITLE = "nav-title";
    var BODY_LEFT = "body-left";
    var POP_NOTIFY = "pop-notify";
    var LEFT_TAB = "left-tab";
    var INDEX_TOP = "index-top";
    var INDEX_BUTTON = "index-button";
    var INDEX_LIST = "index-list";
    var PHOTO_LIST = "photo-list";
    var originIndex = null;
    var svg_album = `<svg viewBox="0 0 393 273" xmlns="http://www.w3.org/2000/svg"><path d="M362.691 30.3114C321.496 39.0242 250.112 52.3462 196.091 52.3462C142.068 52.3462 70.6852 39.0242 29.4909 30.3114V136.636V242.961C39.4881 240.847 51.2632 238.462 64.1365 236.061L123.297 155.592C128.78 148.134 139.922 148.134 145.405 155.592L164.473 181.528L214.95 103.482C220.358 95.1232 232.584 95.1232 237.992 103.482L323.154 235.157C337.938 237.858 351.441 240.581 362.691 242.961V30.3114ZM34.2418 1.26176C16.8085 -2.44198 0.0909424 10.7697 0.0909424 28.5942V136.636V244.678C0.0909424 262.502 16.8085 275.714 34.2418 272.011C75.2479 263.3 144.891 250.329 196.091 250.329C247.29 250.329 316.935 263.3 357.94 272.011C375.374 275.714 392.091 262.502 392.091 244.678V28.5942C392.091 10.7697 375.374 -2.44198 357.94 1.26176C316.935 9.97354 247.29 22.9426 196.091 22.9426C144.891 22.9426 75.2479 9.97354 34.2418 1.26176ZM90.2509 126.835C101.076 126.835 109.851 118.059 109.851 107.233C109.851 96.4065 101.076 87.6304 90.2509 87.6304C79.4263 87.6304 70.6509 96.4065 70.6509 107.233C70.6509 118.059 79.4263 126.835 90.2509 126.835Z" /></svg>`;
    var svg_service = `<svg viewBox="0 0 343 273" xmlns="http://www.w3.org/2000/svg"><path d="M77.6773 0.636353C89.0153 0.636353 99.889 5.11401 107.906 13.0843C115.923 21.0546 120.427 31.8647 120.427 43.1363C120.427 54.4081 115.923 65.2181 107.906 73.1884C99.889 81.1587 89.0153 85.6364 77.6773 85.6364C66.3393 85.6364 55.4656 81.1587 47.4486 73.1884C39.4314 65.2181 34.9273 54.4081 34.9273 43.1363C34.9273 31.8647 39.4314 21.0546 47.4486 13.0843C55.4656 5.11401 66.3393 0.636353 77.6773 0.636353ZM274.327 0.636353C285.666 0.636353 296.539 5.11401 304.555 13.0843C312.574 21.0546 317.077 31.8647 317.077 43.1363C317.077 54.4081 312.574 65.2181 304.555 73.1884C296.539 81.1587 285.666 85.6364 274.327 85.6364C262.989 85.6364 252.116 81.1587 244.099 73.1884C236.081 65.2181 231.577 54.4081 231.577 43.1363C231.577 31.8647 236.081 21.0546 244.099 13.0843C252.116 5.11401 262.989 0.636353 274.327 0.636353ZM0.727295 159.321C0.727295 128.03 26.2705 102.636 57.7451 102.636H80.563C89.0595 102.636 97.1286 104.496 104.396 107.789C103.701 111.615 103.381 115.599 103.381 119.636C103.381 139.93 112.358 158.152 126.519 170.636H126.145H12.1095C5.85729 170.636 0.727295 165.536 0.727295 159.321ZM217.31 170.636H216.936C231.151 158.152 240.073 139.93 240.073 119.636C240.073 115.599 239.701 111.668 239.059 107.789C246.326 104.443 254.395 102.636 262.892 102.636H285.71C317.184 102.636 342.727 128.03 342.727 159.321C342.727 165.589 337.597 170.636 331.345 170.636H217.31ZM171.727 145.928C185.358 145.928 197.123 134.601 197.123 119.742C197.123 104.883 185.358 93.5556 171.727 93.5556C158.096 93.5556 146.331 104.883 146.331 119.742C146.331 134.601 158.096 145.928 171.727 145.928ZM171.727 171.27C199.78 171.27 222.519 148.2 222.519 119.742C222.519 91.2838 199.78 68.214 171.727 68.214C143.676 68.214 120.935 91.2838 120.935 119.742C120.935 148.2 143.676 171.27 171.727 171.27ZM139.858 213.506H205.291C226.165 213.506 243.668 227.907 248.367 247.295H96.78C101.48 227.907 118.984 213.506 139.858 213.506ZM70.1431 257.729C70.1431 219.309 101.355 188.164 139.858 188.164H205.291C243.793 188.164 275.005 219.309 275.005 257.729C275.005 265.963 268.317 272.636 260.065 272.636H85.0819C76.8314 272.636 70.1431 265.963 70.1431 257.729Z" /></svg>`;
    var svg_case = `<svg viewBox="0 0 310 273" xmlns="http://www.w3.org/2000/svg"><path d="M81.5512 156.065H76.5403H35.5L65.525 33.1914C66.1886 30.4752 68.6172 28.5649 71.406 28.5649H238.594C241.383 28.5649 243.811 30.4752 244.475 33.1914L274.5 156.065H233.457H228.332C219.672 156.065 211.671 160.701 207.348 168.225L193.925 191.582C193.817 191.77 193.617 191.886 193.4 191.886H155L116.609 192.488C116.387 192.491 116.182 192.373 116.073 192.18L102.622 168.378C98.3221 160.768 90.2736 156.065 81.5512 156.065ZM6.82454 156.065L2.16932 175.116C1.12968 177.712 0.437429 180.485 0.150238 183.378L0 183.993H0.0954643C0.0322228 184.795 0 185.605 0 186.422V232.565C0 254.696 17.8911 272.636 39.9609 272.636H270.039C292.109 272.636 310 254.696 310 232.565V186.422C310 185.605 309.968 184.795 309.904 183.993H310L309.85 183.378C309.563 180.485 308.87 177.712 307.831 175.116L303.175 156.065L271.526 26.5446C267.809 11.3337 254.212 0.636353 238.594 0.636353H71.406C55.7882 0.636353 42.1907 11.3338 38.4738 26.5447L6.82454 156.065ZM117.082 222.842L155.237 222.243H193.4H193.74C204.377 222.243 214.215 216.648 219.68 207.537C219.842 207.274 220 207.008 220.154 206.739L231.831 186.422H279.727V232.565C279.727 237.93 275.39 242.279 270.039 242.279H39.9609C34.6107 242.279 30.2734 237.93 30.2734 232.565V186.422H78.0231L89.7341 207.146C95.3026 217 105.79 223.018 117.082 222.842ZM219.18 89.2792H90.2148V66.2078H219.18V89.2792ZM231.895 136.636H77.5V108.708H231.895V136.636Z" /></svg>`;
    var svg_post = `<svg viewBox="0 0 273 273" xmlns="http://www.w3.org/2000/svg"><path d="M85.6364 196.145C99.7145 196.145 111.136 207.567 111.136 221.646V230.146L149.652 201.245C154.061 197.951 159.427 196.145 164.952 196.145H238.636C243.311 196.145 247.136 192.32 247.136 187.644V34.6378C247.136 29.9626 243.311 26.1375 238.636 26.1375H34.6364C29.9614 26.1375 26.1364 29.9626 26.1364 34.6378V187.644C26.1364 192.32 29.9614 196.145 34.6364 196.145H85.6364ZM111.136 262.023L111.03 262.129L108.321 264.148L99.2364 270.948C96.6864 272.861 93.2332 273.179 90.3114 271.745C87.3895 270.31 85.6364 267.388 85.6364 264.148V252.832V249.431V249.272V247.147V221.646H60.1364H34.6364C15.8832 221.646 0.636353 206.398 0.636353 187.644V34.6378C0.636353 15.8839 15.8832 0.636353 34.6364 0.636353H238.636C257.389 0.636353 272.636 15.8839 272.636 34.6378V187.644C272.636 206.398 257.389 221.646 238.636 221.646H164.952L111.136 262.023Z" /></svg>`;
    var svg_bookmark = `<svg viewBox="0 0 205 273" xmlns="http://www.w3.org/2000/svg"><path d="M0.90918 26.1388C0.90918 12.0593 12.3311 0.636353 26.4092 0.636353V26.1388V235.153L95.5248 185.795C99.9342 182.607 105.937 182.607 110.347 185.795L179.409 235.153V26.1388H26.4092V0.636353H179.409C193.487 0.636353 204.909 12.0593 204.909 26.1388V259.911C204.909 264.693 202.253 269.05 198.003 271.228C193.753 273.406 188.653 273.035 184.775 270.272L102.909 211.829L21.0436 270.272C17.1654 273.035 12.0654 273.406 7.81543 271.228C3.56543 269.05 0.90918 264.693 0.90918 259.911V26.1388Z" /></svg>`;
    var svg_notification = `<svg viewBox="0 0 238 272" xmlns="http://www.w3.org/2000/svg"><path d="M119 0C109.596 0 101.998 7.59687 101.998 17V26.5094C63.4788 32.6188 33.9915 65.9812 33.9915 106.25V123.994C33.9915 148.112 25.7563 171.541 10.7204 190.347L2.80403 200.281C-0.277532 204.106 -0.861965 209.366 1.26325 213.775C3.38846 218.184 7.8514 221 12.7394 221H225.261C230.149 221 234.612 218.184 236.737 213.775C238.862 209.366 238.278 204.106 235.196 200.281L227.28 190.4C212.244 171.541 204.008 148.112 204.008 123.994V106.25C204.008 65.9812 174.521 32.6188 136.002 26.5094V17C136.002 7.59687 128.404 0 119 0ZM119 51H123.25C153.747 51 178.506 75.7562 178.506 106.25V123.994C178.506 149.441 185.891 174.25 199.599 195.5H38.4013C52.109 174.25 59.4941 149.441 59.4941 123.994V106.25C59.4941 75.7562 84.2528 51 114.75 51H119ZM153.003 238H119H84.9966C84.9966 247.031 88.5563 255.691 94.932 262.066C101.308 268.441 109.968 272 119 272C128.032 272 136.692 268.441 143.068 262.066C149.444 255.691 153.003 247.031 153.003 238Z" /></svg>`;
    var svg_setting = `<svg viewBox="0 0 260 272" xmlns="http://www.w3.org/2000/svg"><path d="M231.917 170.277C234.356 171.685 235.194 174.806 233.784 177.245L217.629 205.215C216.219 207.655 213.099 208.49 210.66 207.082L209.902 206.645C183.829 191.598 151.241 210.411 151.236 240.513L151.235 241.386C151.235 244.205 148.952 246.486 146.135 246.488L113.831 246.493C111.013 246.493 108.728 244.21 108.728 241.39V240.55C108.734 210.44 76.1352 191.617 50.056 206.674L49.3059 207.108C46.8657 208.515 43.7453 207.679 42.3364 205.239L26.1982 177.29C24.7895 174.852 25.6256 171.731 28.0658 170.321L28.8162 169.889C54.8952 154.834 54.8922 117.195 28.8106 102.144L28.0827 101.724C25.6418 100.315 24.8054 97.1946 26.215 94.7543L42.3713 66.7847C43.7802 64.3455 46.8997 63.5096 49.3394 64.9177L50.0967 65.3546C76.1709 80.401 108.758 61.5886 108.763 31.4874L108.764 30.6128C108.764 27.796 111.048 25.5128 113.865 25.5122L146.168 25.5068C148.986 25.5063 151.271 27.7909 151.271 30.609V31.4497C151.266 61.5597 183.864 80.382 209.943 65.3268L210.694 64.8936C213.133 63.4848 216.255 64.3209 217.663 66.7609L233.802 94.7097C235.209 97.1496 234.373 100.27 231.934 101.678L231.183 102.112C205.104 117.167 205.109 154.805 231.19 169.856L231.917 170.277ZM83.2539 30.6085C83.2566 13.7081 96.9581 0.00822776 113.86 0.00539122L146.164 4.4093e-07C163.074 -0.00283863 176.785 13.7049 176.781 30.6133V31.4539C176.779 41.9269 188.117 48.4738 197.188 43.2371L197.939 42.804C212.579 34.3516 231.302 39.3676 239.756 54.0073L255.893 81.9563C264.346 96.5959 259.329 115.316 244.689 123.768L243.938 124.201C234.867 129.438 234.869 142.529 243.94 147.765L244.667 148.184C259.316 156.636 264.333 175.362 255.874 190.004L239.718 217.972C231.265 232.608 212.548 237.623 197.91 229.174L197.152 228.737C188.081 223.502 176.747 230.046 176.745 240.518V241.391C176.742 258.291 163.041 271.992 146.139 271.995L113.835 272C96.9251 272.003 83.2157 258.295 83.2185 241.386L83.2186 240.547C83.2205 230.073 71.882 223.526 62.8109 228.762L62.0608 229.196C47.4194 237.65 28.6977 232.633 20.2444 217.993L4.10629 190.043C-4.34688 175.404 0.66961 156.685 15.311 148.232L16.0613 147.799C25.1324 142.563 25.1312 129.471 16.0593 124.236L15.3315 123.816C0.685328 115.364 -4.33261 96.6389 4.125 81.9973L20.2814 54.0274C28.735 39.3926 47.4514 34.3781 62.0907 42.8261L62.8478 43.263C71.9172 48.4966 83.2518 41.9529 83.2537 31.483L83.2539 30.6085ZM158 136C158 151.464 145.464 164 130 164C114.536 164 102 151.464 102 136C102 120.536 114.536 108 130 108C145.464 108 158 120.536 158 136ZM182 136C182 164.719 158.719 188 130 188C101.281 188 78 164.719 78 136C78 107.281 101.281 84 130 84C158.719 84 182 107.281 182 136Z" /></svg>`;
    var icon_add = () => "fa-solid fa-plus".$fa;
    var icon_left = () => "fa-solid fa-caret-left".$fa;
    var icon_right = () => "fa-solid fa-caret-right".$fa;
    var icon_ungood = () => "fa-regular fa-heart".$fa;
    var icon_unlater = () => "fa-regular fa-bookmark".$fa;
    var icon_share = () => "fa-regular fa-up-right-from-square".$fa;
    var icon_tag = () => "fa-solid fa-hashtag".$fa;
    var icon_user = () => "fa-regular fa-circle-user".$fa;
    var icon_bar = () => "fa-solid fa-bars".$fa;
    var icon_grid = () => "fa-solid fa-grip-vertical".$fa;
    var icon_expand = () => "fa-solid fa-expand".$fa;
    var icon_close = () => "fa-solid fa-xmark"._fa;

    (function () {
        init = function () {
            _document.body._child([
                nav._([
                    section._([
                        section._([
                            img._("image/logo.svg"),
                            (strong + "#" + NAV_TITLE)._("作品分享")
                        ]),
                        section._([
                            (button + ".col")._([
                                icon_add(),
                                "張貼"
                            ]),
                            button._([
                                (img + ".round")._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                            ])
                        ])
                    ])
                ]),
                (section + "#body")._([
                    (section + "#" + BODY_LEFT + ".left")._([
                        (button + ".head")._([
                            img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample"),
                            section._([
                                h6._("Pardn Chiu"),
                                p._("@pardnchiu")
                            ])
                        ]),
                        (ul + "#" + LEFT_TAB + ".tab")._({ index: 0 }, [
                            li._([
                                button._([
                                    svg_album,
                                    h6._("作品分享")
                                ])._click(() => albumIndex())
                            ]),
                            li._([
                                button._([
                                    svg_service,
                                    h6._("自我介紹")
                                ])._click(() => serviceIndex())
                            ]),
                            li._([
                                button._([
                                    svg_case,
                                    h6._("案件發包")
                                ])._click(() => caseIndex())
                            ]),
                            li._([
                                button._([
                                    svg_post,
                                    h6._("社群貼文")
                                ])._click(() => postIndex())
                            ]),
                            li._([
                                button._([
                                    svg_bookmark,
                                    h6._("收藏")
                                ])._click(() => bookmarkIndex())
                            ]),
                            li._([
                                button._([
                                    svg_notification,
                                    h6._("通知")
                                ])._click(() => notifyList(true))
                            ]),
                            li._([
                                button._([
                                    svg_setting,
                                    h6._("設定")
                                ])
                            ])
                        ]),
                        (button + ".add")._([
                            icon_add(),
                            p._("張貼")
                        ])
                    ]),
                    (section + ".center")._([
                        (section + "#" + INDEX_TOP + ".top")._({ index: 0 }, [
                            section._(
                                albums._$((e, i) =>
                                    (div + ".album")._([
                                        img._(e.user.head),
                                        figure._([
                                            img._(e.photos[0]),
                                            figcaption._(e.title)
                                        ])
                                    ])._click(() => albumPop(albums, e))
                                )
                            ),
                            section._([
                                button._([
                                    icon_left()
                                ])._click(function () {
                                    var index = Number(this.$parent(1).$attr("index")) - 1;
                                    this.$parent(1)._attr({ index: index <= 0 ? 0 : index });
                                }),
                                ul._([
                                    li._(),
                                    li._(),
                                ]),
                                button._([
                                    icon_right()
                                ])._click(function () {
                                    var index = Number(this.$parent(1).$attr("index")) + 1;
                                    var max = this.$pre(0).$children().length - 1;
                                    this.$parent(1)._attr({ index: index >= max ? max : index });
                                })
                            ])
                        ]),
                        (section + "#" + INDEX_BUTTON + ".button")._([
                            section._([
                                (button + ".add")._([
                                    icon_add(),
                                    p._("張貼")
                                ]),
                                button._([
                                    icon_unlater(),
                                    p._("收藏")
                                ]),
                                button._([
                                    icon_user(),
                                    p._("已張貼")
                                ])
                            ]),
                            section._([
                                (button + ".nof")._("活躍度"),
                                (button + ".nof")._([
                                    icon_bar()
                                ])._click(() => albumGrid())
                            ]),
                            ul._([
                                button._([
                                    icon_right()
                                ]),
                                li._([
                                    icon_tag(),
                                    input._({ placeholder: "添加關鍵字" })
                                ])
                            ])
                        ]),
                        (section + "#" + INDEX_LIST + ".list")._(
                            albums._$((e, i) =>
                                (div + ".album")._([
                                    section._([
                                        img._(e.user.head),
                                        section._([
                                            h6._(e.title),
                                            p._([
                                                `共${e.photos.length}項・觀看次數${e.watch}・`,
                                                time._({ datetime: e.date }, e.dateTxt)
                                            ])
                                        ])._click(() => albumPop(albums, e)),
                                    ]),
                                    section._({ total: e.photos.length },
                                        e.photos._$((e, i) =>
                                            img._(e)
                                        )._([
                                            p._(e.description)
                                        ])
                                    )._click(() => albumPop(albums, e)),
                                    section._([
                                        button._([
                                            icon_ungood(),
                                            p._("123")
                                        ]),
                                        button._([
                                            icon_unlater()
                                        ]),
                                        button._([
                                            icon_share()
                                        ])
                                    ])
                                ])
                            )
                        )
                    ]),
                    (section + ".right")._([
                        (section + ".message")._([
                            section._([
                                h6._("收件匣"),
                                button._([
                                    img._("https://fakeimg.pl/1024/282828/eae0d0/?text=sample")
                                ])
                            ]),
                            label._([
                                input._({ placeholder: "輸入名稱" })
                            ]),
                            ul._({ index: 0 }, [
                                li._([
                                    button._("全部")
                                ]),
                                li._([
                                    button._("未讀 (1)")
                                ])
                            ]),
                            section._(
                                chats._$((e, i) =>
                                    button._([
                                        img._(e.head),
                                        section._([
                                            h6._(e.name),
                                            p._(`@${e.id}`)
                                        ])
                                    ])
                                )
                            )
                        ])
                    ])
                ])
            ]);
        };

        // 作品分享 (列表)
        albumIndex = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 頁面標題
            NAV_TITLE.__("作品分享");

            // 左側導覽列
            LEFT_TAB.$._attr({ index: 0 });

            // 列表頂部
            INDEX_TOP.$
                ._attr({ index: 0 })
                .$child(0).__child(
                    albums._$((e, i) =>
                        (div + ".album")._([
                            img._(e.user.head),
                            figure._([
                                img._(e.photos[0]),
                                figcaption._(e.title)
                            ])
                        ])._click(() => albumPop(albums, e))
                    )
                )
                .$next(0).$child(1).__child([
                    li._(),
                    li._(),
                ]);

            // 列表按鈕
            INDEX_BUTTON.$
                .$child(0).__child([
                    (button + ".add")._([
                        icon_add(),
                        p._("張貼")
                    ]),
                    button._([
                        icon_unlater(),
                        p._("收藏")
                    ]),
                    button._([
                        icon_user(),
                        p._("已張貼")
                    ])
                ])
                .$next(0).__child([
                    (button + ".nof")._("活躍度"),
                    (button + ".nof")._([
                        icon_bar()
                    ])._click(() => albumGrid())
                ]);

            // 列表內容
            INDEX_LIST.$.__child(
                albums._$((e, i) =>
                    (div + ".album")._([
                        section._([
                            img._(e.user.head),
                            section._([
                                h6._(e.title),
                                p._([
                                    `共${e.photos.length}項・觀看次數${e.watch}・`,
                                    time._({ datetime: e.date }, e.dateTxt)
                                ])
                            ])._click(() => albumPop(albums, e)),
                        ]),
                        section._({ total: e.photos.length },
                            e.photos._$((e, i) =>
                                img._(e)
                            )._([
                                p._(e.description)
                            ])
                        )._click(() => albumPop(albums, e)),
                        section._([
                            button._([
                                icon_ungood(),
                                p._("123")
                            ]),
                            button._([
                                icon_unlater()
                            ]),
                            button._([
                                icon_share()
                            ])
                        ])
                    ])
                )
            );
        };

        // 作品分享 (格狀)
        albumGrid = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 列表按鈕
            INDEX_BUTTON.$child(1).__child([
                (button + ".nof")._("活躍度"),
                (button + ".nof")._([
                    icon_grid()
                ])._click(() => albumIndex())
            ]);

            // 列表內容
            INDEX_LIST.$.__child(
                albums._$((e, i) =>
                    (div + ".album-grid")._([
                        figure._([
                            img._(e.photos[0]),
                            figcaption._(e.title),
                            section._([
                                button._([
                                    icon_ungood(),
                                    p._("123")
                                ]),
                                button._([
                                    icon_unlater()
                                ])
                            ])
                        ])._click(() => albumPop(albums, e)),
                        section._([
                            img._(e.user.head),
                            section._([
                                h6._(e.title),
                                p._([
                                    `共${e.photos.length}項・觀看次數${e.watch}・`,
                                    time._({ datetime: e.date }, e.dateTxt)
                                ])
                            ])._click(() => albumPop(albums, e))
                        ])
                    ])
                )
            );
        };

        // 作品內容 (彈出)
        albumPop = function (ary, e) {
            var id = $key(10);
            var target = e;
            var body = function (target) {
                return [
                    (section + ".left")._([
                        section._([
                            h1._(target.title),
                            p._([
                                `觀看次數${target.watch}・`,
                                time._({ datetime: target.date }, target.dateTxt),
                                `・`,
                                button._("檢舉")
                            ]),
                            section._([
                                button._([
                                    icon_ungood(),
                                    p._("123")
                                ]),
                                button._([
                                    icon_unlater()
                                ]),
                                button._([
                                    icon_share()
                                ])
                            ])
                        ]),
                        section._([
                            p._(target.description),
                            ul._([
                                li._("test")
                            ])
                        ]),
                        section._(
                            target.photos._$((e1, i) =>
                                figure._([
                                    img._(e1)
                                ])._click(function () {
                                    photoPop(target, i);
                                })
                            )
                        )
                    ]),
                    (section + ".right")._([
                        button._([
                            icon_close()
                        ])._click(function () {
                            id.$._class("hide");
                            var timer = setTimeout(function () {
                                clearTimeout(timer);
                                id.$.remove();
                            }, 400);
                        }),
                        (section + ".head")._([
                            figure._([
                                img._(target.user.head),
                                figcaption._(target.user.name)
                            ]),
                            h6._(target.user.name),
                            section._(
                                target.user.contact._$((e, i) =>
                                    button._([
                                        img._(`image/icon/contact/${e}.svg`)
                                    ])
                                )
                            )
                        ]),
                        (section + ".sub")._({ heading: "自我介紹" },
                            services.filter(a => a.user.id === target.user.id)._$((e, i) =>
                                (div + ".service")._([
                                    h6._(e.title),
                                    p._([
                                        time._({ datetime: e.date }, e.dateTxt)
                                    ])
                                ])
                            )
                        ),
                        (section + ".sub")._({ heading: "評論" }, [
                            textarea._({ placeholder: "寫下你的看法" })
                        ])
                    ])
                ]
            };
            _document.body._child([
                (section + "#" + id + ".pop")._([
                    section._([
                        section._(
                            body(target)
                        ),
                        button._([
                            icon_left()
                        ])._click(function () {
                            var i = ary.indexOf(target);
                            target = ary.$(i - 1);
                            this.$pre(0).__child(body(target));
                        }),
                        button._([
                            icon_right()
                        ])._click(function () {
                            var i = ary.indexOf(target);
                            target = ary[i + 1 === ary.length ? 0 : i + 1];
                            this.$pre(1).__child(body(target));
                        })
                    ])
                ])
            ]);
        };

        // function scrollTo(top) {
        //     var timer = setInterval(() => {
        //         var dom = document.body;
        //         var to = top >= 0 ? top : 0;
        //         var max = (dom.scrollHeight - dom.clientHeight);
        //         var length = (to < max ? to : max) - dom.scrollTop;
        //         var isAppend = (length > 0);
        //         var isDone = (() => {
        //             if (isAppend) return (dom.scrollTop >= to || dom.scrollTop >= max);
        //             return (dom.scrollTop <= to || dom.scrollTop <= 0);
        //         })();
        //         if (isDone) return clearInterval(timer);
        //         setTimeout(() => {
        //             if (timer) clearInterval(timer);
        //         }, 500);
        //         dom.scrollTop += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        //     }, 30);
        // }

        function scrollTo(dom, left) {
            var timer = setInterval(() => {
                var to = left >= 0 ? left : 0;
                var max = (dom.scrollWidth - dom.clientWidth);
                var length = (to < max ? to : max) - dom.scrollLeft;
                var isAppend = (length > 0);
                var isDone = (() => {
                    if (isAppend) return (dom.scrollLeft >= to || dom.scrollLeft >= max);
                    return (dom.scrollLeft <= to || dom.scrollLeft <= 0);
                })();
                if (isDone) return clearInterval(timer);
                // setTimeout(() => {
                //     if (timer) clearInterval(timer);
                // }, 500);
                dom.scrollLeft += Math.ceil(length / 5) + (isAppend ? 1 : -1);
            }, 30);
            return timer;
        };

        // 圖片內容 (彈出)
        photoPop = function (album, i) {
            var id = $key(10);
            var index = i;
            var photoListTimer;
            _document.body._child([
                (section + "#" + id + ".pop.no-bg")._([
                    section._([
                        section._([
                            (section + ".left.photo")._([
                                section._([
                                    img._(album.photos[i]),
                                    section._([
                                        button._([
                                            icon_expand()
                                        ]),
                                    ]),
                                    div._([
                                        button._([
                                            icon_left()
                                        ])._click(function () {
                                            index = (index - 1 < 0) ? (album.photos.length - 2) : (index - 1);
                                            target = album.photos.$(index);
                                            this.$parent(1).$child(0).src = target;
                                            this.$parent(1).$next(0)._attr({ index: index });
                                            PHOTO_LIST.$.$child(0).scrollLeft = index * 96;
                                        })
                                    ]),
                                    div._([
                                        button._([
                                            icon_right()
                                        ])._click(function () {
                                            index = (index + 1 >= album.photos.length) ? 0 : (index + 1);
                                            target = album.photos.$(index);
                                            this.$parent(1).$child(0).src = target;
                                            this.$parent(1).$next(0)._attr({ index: index });
                                            PHOTO_LIST.$.$child(0).scrollLeft = index * 96;
                                        })
                                    ])
                                ]),
                                (section + "#" + PHOTO_LIST)._({ scroll: 0, index: i }, [
                                    section._(
                                        album.photos._$((e1, i) =>
                                            figure._([
                                                img._(e1)
                                            ])
                                        )
                                    ),
                                    button._([
                                        icon_left()
                                    ])._click(function () {
                                        var cw = PHOTO_LIST.$.$child(0).clientWidth;
                                        var sl = PHOTO_LIST.$.$child(0).scrollLeft;
                                        var maxRow = Math.floor(cw / 96);
                                        var nowPage = Math.floor(sl / cw);
                                        clearInterval(photoListTimer);
                                        photoListTimer = scrollTo(PHOTO_LIST.$.$child(0), (nowPage - 1 <= 0 ? 0 : nowPage - 1) * maxRow * 96)
                                    }),
                                    button._([
                                        icon_right()
                                    ])._click(function () {
                                        var cw = PHOTO_LIST.$.$child(0).clientWidth;
                                        var sl = PHOTO_LIST.$.$child(0).scrollLeft;
                                        var maxRow = Math.floor(cw / 96);
                                        var nowPage = Math.floor(sl / cw);
                                        clearInterval(photoListTimer);
                                        photoListTimer = scrollTo(PHOTO_LIST.$.$child(0), (nowPage + 1) * maxRow * 96)
                                    })
                                ])
                            ]),
                            (section + ".right")._([
                                button._([
                                    icon_close()
                                ])._click(function () {
                                    id.$._class("hide");
                                    var timer = setTimeout(function () {
                                        clearTimeout(timer);
                                        id.$.remove();
                                    }, 400);
                                }),
                                (section + ".head")._([
                                    figure._([
                                        img._(album.user.head)
                                    ])
                                ]),
                                (section + ".heading")._([
                                    p._([
                                        `觀看次數${album.watch}・`,
                                        time._({ datetime: album.date }, album.dateTxt)
                                    ]),
                                    section._([
                                        button._([
                                            icon_ungood()
                                        ]),
                                        button._([
                                            icon_unlater()
                                        ]),
                                        button._([
                                            icon_share()
                                        ])
                                    ])
                                ]),
                                (section + ".main")._([
                                    p._("未提供描述")
                                ]),
                                (section + ".sub")._({ heading: "評論" }, [
                                    textarea._({ placeholder: "寫下你的看法" })
                                ])
                            ])
                        ]),
                        button._([
                            icon_left()
                        ])._click(function () {
                            // index = (index - 1 < 0) ? (album.photos.length - 2) : (index - 1);
                            // target = album.photos.$(index);
                            // this.$pre(0).$child([0, 0, 0]).src = target;
                            // this.$pre(0).$child([0, 1])._attr({ index: index });
                        }),
                        button._([
                            icon_right()
                        ])._click(function () {
                            // index = (index + 1 >= album.photos.length) ? 0 : (index + 1);
                            // target = album.photos.$(index);
                            // this.$pre(1).$child([0, 0, 0]).src = target;
                            // this.$pre(1).$child([0, 1])._attr({ index: index });
                        })
                    ])
                ])
            ]);
            PHOTO_LIST.$._attr({
                scroll: PHOTO_LIST.$.$child(0).scrollWidth > PHOTO_LIST.$.$child(0).clientWidth ? 1 : 0
            })
        };

        // 自我介紹 (列表)
        serviceIndex = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 頁面標題
            NAV_TITLE.__("自我介紹");

            // 左側導覽列
            LEFT_TAB.$._attr({ index: 1 });

            // 列表頂部
            INDEX_TOP.$
                ._attr({ index: 0 })
                .$child(0).__child(
                    services._$((e, i) =>
                        (div + ".service")._([
                            figure._([
                                img._(e.user.head),
                                figcaption._(e.user.name)
                            ]),
                            section._([
                                h6._(e.user.name),
                                p._(e.user.title)
                            ])
                        ])
                    )
                )
                .$next(0).$child(1).__child([
                    li._(),
                    li._(),
                ]);

            // 列表按鈕
            INDEX_BUTTON.$
                .$child(0).__child([
                    (button + ".add")._([
                        icon_add(),
                        p._("張貼")
                    ]),
                    button._([
                        icon_unlater(),
                        p._("收藏")
                    ]),
                    button._([
                        icon_user(),
                        p._("已張貼")
                    ])
                ])
                .$next(0).__child([
                    (button + ".nof")._("活躍度"),
                    (button + ".nof")._([
                        icon_bar()
                    ])._click(() => serviceGrid())
                ]);

            // 列表內容
            INDEX_LIST.$.__child(
                services._$((e, i) =>
                    (div + ".service")._([
                        section._([
                            img._(e.user.head),
                            section._([
                                strong._(e.user.name),
                                p._([
                                    `觀看次數${e.watch}・`,
                                    time._({ datetime: e.date }, e.dateTxt)
                                ])
                            ])
                        ]),
                        article._([
                            h6._(e.title),
                            p._(e.description),
                            strong._("依件報價")
                        ]),
                        section._(
                            e.albums._$((e1, i) =>
                                figure._([
                                    img._(e1.photos[0]),
                                    figcaption._(e1.title)
                                ])._click(() => albumPop(e.albums, e1))
                            )
                        ),
                        section._([
                            button._([
                                icon_ungood()
                            ]),
                            button._([
                                icon_unlater()
                            ]),
                            button._([
                                icon_share()
                            ])
                        ])
                    ])
                )
            );
        };

        // 自我介紹 (格狀)
        serviceGrid = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 列表按鈕
            INDEX_BUTTON.$.$child(1).__child([
                (button + ".nof")._("活躍度"),
                (button + ".nof")._([
                    icon_grid()
                ])._click(() => serviceIndex())
            ]);

            // 列表內容
            INDEX_LIST.$.__child(
                services._$((e, i) =>
                    (div + ".service-grid")._([
                        section._([
                            img._(e.user.head),
                            section._([
                                h6._(e.title + e.title),
                                p._([
                                    `觀看次數${e.watch}・`,
                                    time._({ datetime: e.date }, e.dateTxt)
                                ]),
                                b._("依件報價")
                            ])
                        ]),
                        section._([
                            button._([
                                icon_ungood(),
                            ]),
                            button._([
                                icon_unlater()
                            ])
                        ])
                    ])
                )
            );
        };

        // 案件發包
        caseIndex = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 頁面標題
            NAV_TITLE.__("案件發包");

            // 左側導覽列
            LEFT_TAB.$._attr({ index: 2 });

            // 列表頂部
            INDEX_TOP.$
                ._attr({ index: 0 })
                .$child(0).__child(
                    cases._$((e, i) =>
                        (div + ".case")._([
                            section._([
                                section._([
                                    h6._(e.title),
                                    p._([
                                        `觀看次數${e.watch}・`,
                                        time._({ datetime: e.date }, e.dateTxt),
                                        `・${e.user.name}`
                                    ]),
                                    b._("自行報價")
                                ])
                            ]),
                            section._([
                                button._([
                                    icon_unlater()
                                ])
                            ])
                        ])
                    )
                )
                .$next(0).$child(1).__child([
                    li._(),
                    li._(),
                    li._(),
                    li._(),
                    li._(),
                ]);

            // 列表按鈕
            INDEX_BUTTON.$
                .$child(0).__child([
                    (button + ".add")._([
                        icon_add(),
                        p._("張貼")
                    ]),
                    button._([
                        icon_unlater(),
                        p._("收藏")
                    ]),
                    button._([
                        icon_user(),
                        p._("已張貼")
                    ])
                ])
                .$next(0).__child([
                    (button + ".nof")._("活躍度")
                ]);

            // 列表內容
            INDEX_LIST.$.__child(
                [
                    strong._("本日")
                ]._(
                    cases.slice(0, 3)._$((e, i) =>
                        (div + ".case")._([
                            section._([
                                section._([
                                    h6._(e.title),
                                    p._([
                                        time._({ datetime: e.date }, e.dateTxt),
                                        `・${e.user.name}`
                                    ]),
                                    b._("自行報價")
                                ])
                            ]),
                            section._([
                                button._([
                                    icon_unlater()
                                ])
                            ])
                        ])
                    )
                )._([
                    strong._("三日內")
                ])._(
                    cases.slice(3, cases.length)._$((e, i) =>
                        (div + ".case")._([
                            section._([
                                section._([
                                    h6._(e.title),
                                    p._([
                                        `觀看次數${e.watch}・`,
                                        time._({ datetime: e.date }, e.dateTxt),
                                        `・${e.user.name}`
                                    ]),
                                    b._("自行報價")
                                ])
                            ]),
                            section._([
                                button._([
                                    icon_unlater()
                                ])
                            ])
                        ])
                    )
                )
            );
        };

        // 社群貼文
        postIndex = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 頁面標題
            NAV_TITLE.__("社群貼文");

            // 左側導覽列
            LEFT_TAB.$._attr({ index: 3 });

            // 列表頂部
            INDEX_TOP.$
                ._attr({ index: 0 })
                .$child(0).__child(
                    chats._$((e, i) =>
                        (div + ".user")._([
                            figure._([
                                img._(e.head),
                                figcaption._(e.name)
                            ])
                        ])
                    )
                )
                .$next(0).$child(1).__child([
                    li._(),
                ]);

            // 列表按鈕
            INDEX_BUTTON.$
                .$child(0).__child([
                    (button + ".add")._([
                        icon_add(),
                        p._("張貼")
                    ]),
                    button._([
                        icon_unlater(),
                        p._("收藏")
                    ]),
                    button._([
                        icon_user(),
                        p._("已張貼")
                    ])
                ])
                .$next(0).__child([
                    (button + ".nof")._("活躍度")
                ]);

            // 列表內容
            INDEX_LIST.$.__child(
                posts._$((e, i) =>
                    (div + ".post")._([
                        section._([
                            img._(e.user.head),
                            section._([
                                strong._(e.user.name),
                                p._([
                                    time._({ datetime: e.date }, e.dateTxt)
                                ])
                            ])
                        ]),
                        section._([
                            p._(e.description),
                            // button._("顯示完整內容")
                        ]),
                        section._({ num: e.photos.length }, [
                            section._([
                                img._(e.photos[0]),
                                button._([
                                    icon_expand()
                                ]),
                                div._([
                                    button._([
                                        icon_left()
                                    ])
                                ]),
                                div._([
                                    button._([
                                        icon_right()
                                    ])
                                ])
                            ]),
                            section._({ scroll: 0, index: 0 },
                                [
                                    section._(
                                        e.photos._$((e, i) =>
                                            figure._([
                                                img._(e)
                                            ])
                                        )
                                    )
                                ]._([
                                    button._([
                                        icon_left()
                                    ]),
                                    button._([
                                        icon_right()
                                    ])
                                ])
                            )
                        ]),
                        section._([
                            button._([
                                icon_ungood()
                            ]),
                            button._([
                                icon_unlater()
                            ]),
                            button._([
                                icon_share()
                            ])
                        ])
                    ])
                )

            );
        };

        // 收藏
        bookmarkIndex = function () {
            notifyList(false);
            _document.body.scrollTop = 0;

            // 頁面標題
            NAV_TITLE.__("收藏");

            // 左側導覽列
            LEFT_TAB.$._attr({ index: 4 });

            // 列表頂部
            INDEX_TOP.$
                ._attr({ index: 0 })
                .$child(0).__child(
                    chats._$((e, i) =>
                        (div + ".user")._([
                            figure._([
                                img._(e.head),
                                figcaption._(e.name)
                            ])
                        ])
                    )
                )
                .$next(0).$child(1).__child([
                    li._(),
                ]);

            // 列表按鈕
            INDEX_BUTTON.$
                .$child(0).__child([
                    ul._({ index: 0 }, [
                        li._([
                            svg_album,
                            p._("作品")
                        ]),
                        li._([
                            svg_service,
                            p._("自我介紹")
                        ]),
                        li._([
                            svg_case,
                            p._("案件")
                        ]),
                        li._([
                            svg_post,
                            p._("貼文")
                        ])
                    ])
                ])
                .$next(0).__child([
                    (button + ".nof")._([
                        icon_bar()
                    ])
                ]);

            // 列表內容
            INDEX_LIST.$.__child(
                albums._$((e, i) =>
                    (div + ".album")._([
                        section._([
                            img._(e.user.head),
                            section._([
                                h6._(e.title),
                                p._([
                                    `共${e.photos.length}項・觀看次數${e.watch}・`,
                                    time._({ datetime: e.date }, e.dateTxt)
                                ])
                            ])
                        ]),
                        section._({ total: e.photos.length },
                            e.photos._$((e, i) =>
                                img._(e)
                            )._([
                                p._(e.description)
                            ])
                        ),
                        section._([
                            button._([
                                icon_ungood()
                            ]),
                            button._([
                                icon_unlater()
                            ]),
                            button._([
                                icon_share()
                            ])
                        ])
                    ])
                )
            );
        };

        notifyList = function (show) {
            if (show) {
                if (POP_NOTIFY.$) {
                    if ($$(originIndex)) BODY_LEFT.$.$child(1)._attr({ index: originIndex });
                    POP_NOTIFY.$.class_("show");
                    BODY_LEFT.class_("notify");
                    let timer = setTimeout(function () {
                        clearTimeout(timer);
                        POP_NOTIFY.$.remove();
                    }, 400);
                } else {
                    originIndex = BODY_LEFT.$.$child(1).$attr("index");
                    BODY_LEFT.$.$child(1)._attr({ index: 5 });
                    _document.body._child([
                        (div + "#" + POP_NOTIFY)._()
                    ]);
                    let timer = setTimeout(function () {
                        clearTimeout(timer);
                        POP_NOTIFY.$._class("show");
                    }, 100)
                    BODY_LEFT.$._class("notify");
                }
            } else {
                if (POP_NOTIFY.$) {
                    if ($$(originIndex)) BODY_LEFT.$.$child(1)._attr({ index: originIndex });
                    POP_NOTIFY.$.class_("show");
                    BODY_LEFT.$.class_("notify");
                    let timer = setTimeout(function () {
                        clearTimeout(timer);
                        POP_NOTIFY.$.remove();
                    }, 400);
                }
            }
        };
    }());

    document.addEventListener("DOMContentLoaded", _ => {

        var timer = setTimeout(function () {
            setTimeout(timer);
            _document.body._attr({ ready: 1 });
        }, 50);

        init();
    })
}(window, document, "", _0_, _1_, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, __0, __1, __2, __3, __4, __5, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9));

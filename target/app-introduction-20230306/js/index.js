(function () {
  var vw = document.documentElement.clientWidth;

  // function showMultipurpose() {
  //   document.body._child([
  //     "nav#nav-001"._([
  //       "div"._([
  //         "div.left"._([
  //           "a"._([
  //             "b"._('PD Web Template')
  //           ])
  //         ]),
  //         "div.right"._([
  //           "ul"._([
  //             "li"._([
  //               "p"._('首頁')
  //             ]),
  //             "li"._([
  //               "p"._('類型導覽'),
  //               "i.fas.fa-angle-right.right"._()
  //             ]),
  //             "li"._([
  //               "p"._('頁面導覽'),
  //               "i.fas.fa-angle-right.right"._()
  //             ]),
  //             "li"._([
  //               "p"._('文件'),
  //               "i.fas.fa-angle-right.right"._()
  //             ])
  //           ]),
  //           "button"._([
  //             "b"._('我要架站'),
  //             "i.fas.fa-arrow-right.right"._()
  //           ])
  //         ]),
  //         "button"._([
  //           "i.fas.fa-bars"._()
  //         ])._click(function (e) {
  //           var isShow = this.$previous(0).isClass('show');
  //           isShow ? this.$previous(0).class_('show') : this.$previous(0)._class('show')
  //         })
  //       ])
  //     ]),
  //     "section#top-001"._([
  //       "div"._([
  //         "div"._([
  //           "div"._([
  //             "h1"._('透過 PD Web Template 快速打造自身網站'),
  //             "p"._([
  //               "歡迎使用 PD Web Template, 一個為您打造的快速架站的網站模版組合, 您可以透過此工具快速建立專業又亮眼的網站",
  //               "br"._(),
  //               "此模板由 ",
  //               "a"._('Pardn Chiu').go('https://github.com/pardnchiu'),
  //               " 所開發"
  //             ]),
  //             "ul"._([
  //               "li"._([
  //                 "button"._([
  //                   "b"._('探索頁面'),
  //                   "i.fas.fa-arrow-right.right"._()
  //                 ])
  //               ]),
  //               "li"._([
  //                 "button"._([
  //                   "b"._('查看更多')
  //                 ])
  //               ])
  //             ])
  //           ])
  //         ]),
  //         "a"._({ freepik: "Image by pikisuperstar on freepik" }, [
  //           "img"._('../image/22134124.png')
  //         ]).go('https://www.freepik.com/free-vector/programmer-working-with-css_5480318.htm#query=html&position=5&from_view=search&track=sph')
  //       ]),
  //       `<svg width="100%" height="48px">
  //         <path d="M0 0, Q${vw / 2} 96, ${vw} 0, L${vw} 48, 0 48" fill="#fff">
  //       </svg>`
  //     ]),
  //     "section#section-002"._([
  //       "div"._([
  //         "ul"._([
  //           "li"._([
  //             "i.fas.fa-terminal"._(),
  //             "h6"._('專為快速架站打造'),
  //             "p"._('可定制的、基於模塊的構建系統<br>使您可以快速創建項目')
  //           ]),
  //           "li"._([
  //             "i.fas.fa-desktop"._(),
  //             "h6"._('RWD 響應式設計'),
  //             "p"._('精心開發的響應式元件<br>讓您的項目能在任何設備上完美運行')
  //           ]),
  //           "li"._([
  //             "i.fas.fa-code"._(),
  //             "h6"._('提供說明文件'),
  //             "p"._('提供了佈局、頁面、元件<br>和實用功能等相關說明文件')
  //           ])
  //         ])
  //       ]),
  //       `<svg width="100%" height="48px">
  //         <path d="M0 0, Q${vw / 2} 96, ${vw} 0, L${vw} 48, 0 48" fill="#F2F6FC">
  //       </svg>`
  //     ]),
  //     "section#section-001"._([
  //       "div.left"._([
  //         "a"._([
  //           "img"._('../image/12341245.png')
  //         ]),
  //         "div"._([
  //           "div"._([
  //             "h6"._('組合包內容'),
  //             "p"._('下載此組合包，您可以立即擁有以下強大的模板和元件<br>幫助您快速輕鬆地構建網站頁面'),
  //             "ul"._([
  //               "li"._([
  //                 "h6"._('類型範例'),
  //                 "p"._('組合包內提供為許多業務和項目類型製作了登錄頁面示例'),
  //                 "a"._([
  //                   "查看更多",
  //                   "i.fas.fa-arrow-right"._()
  //                 ])
  //               ]),
  //               "li"._([
  //                 "h6"._('頁面範例'),
  //                 "p"._('使用組合包內預先構建的頁面範例<br>快速為您的網站創建頁面'),
  //                 "a"._([
  //                   "查看更多",
  //                   "i.fas.fa-arrow-right"._()
  //                 ])
  //               ]),
  //               "li"._([
  //                 "h6"._('版面設計'),
  //                 "p"._('基於響應式的佈局使您的網站不只精美<br>並適用於任何設備'),
  //                 "a"._([
  //                   "查看更多",
  //                   "i.fas.fa-arrow-right"._()
  //                 ])
  //               ]),
  //               "li"._([
  //                 "h6"._('模塊化組件'),
  //                 "p"._('每個元件都是模塊化的<br>您可以放入現有頁面或創建新頁面'),
  //                 "a"._([
  //                   "查看更多",
  //                   "i.fas.fa-arrow-right"._()
  //                 ])
  //               ])
  //             ])
  //           ])
  //         ])
  //       ])
  //     ]),
  //     "section#section-003"._([
  //       "div"._([
  //         "h2"._('方案介紹'),
  //         "p"._('此區塊可用於介紹各類型的方案<br>以下用 VPS 租用方案做範例'),
  //         "ul"._([
  //           "li"._([
  //             "b"._('基本方案'),
  //             "p"._('888'),
  //             "ul"._([
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('HDD: 64GB')
  //               ]),
  //               "li"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('SSD: 無')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('處理器: 單核')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('記憶體: 2GB')
  //               ]),
  //               "li"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('快照: 無')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('備份: 每週')
  //               ])
  //             ])
  //           ]),
  //           "li"._([
  //             "b.sel"._('進階方案'),
  //             "p"._('1688'),
  //             "ul"._([
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('HDD: 96GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('SSD: 32GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('處理器: 雙核')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('記憶體: 4GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('快照: 每小時')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('備份: 每日')
  //               ])
  //             ])
  //           ]),
  //           "li"._([
  //             "b.sel"._('高階方案'),
  //             "p"._('3360'),
  //             "ul"._([
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('HDD: 128GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('SSD: 64GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('處理器: 四核')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('記憶體: 8GB')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('快照: 每小時')
  //               ]),
  //               "li.checked"._([
  //                 "i.far.fa-check-circle"._(),
  //                 "i.far.fa-circle"._(),
  //                 "p"._('備份: 每日')
  //               ])
  //             ])
  //           ])
  //         ])
  //       ]),
  //       `<svg width="100%" height="144px">
  //         <path d="M0 0, Q${vw / 2} 96, ${vw} 0, L${vw} 144, 0 144" fill="#212831">
  //       </svg>`
  //     ]),
  //     "section#section-004"._([
  //       "div"._([
  //         "ul"._([
  //           "li"._([
  //             "i.fas.fa-question"._(),
  //             "p"._([
  //               "b"._('PD Web Template 是什麼？'),
  //               "PD Web Template 是由 Pardn Chiu 所開發的前端模組組合包，用於協助您快速建置網站的實用工具。"
  //             ])
  //           ]),
  //           "li"._([
  //             "i.fas.fa-question"._(),
  //             "p"._([
  //               "b"._('PD Web Template 如何使用？'),
  //               "透過使用預先製作的模組元件或直接選用範例來構建您想要的網站，迅速地讓您的項目上線。"
  //             ])
  //           ]),
  //           "li"._([
  //             "i.fas.fa-question"._(),
  //             "p"._([
  //               "b"._('組合包提供免費更新嗎？'),
  //               "如若有錯誤修復、功能更新，購買者皆會在項目更新的同時在信箱收到更新後的源碼。"
  //             ])
  //           ]),
  //           "li"._([
  //             "i.fas.fa-question"._(),
  //             "p"._([
  //               "b"._('有免費方案的組合包嗎？'),
  //               "租用 Pardn Ltd 所提供的 VPS 任一方案 (一年期)，能選擇一項網站組合包做為網站建置工具。"
  //             ])
  //           ])
  //         ]),
  //         "b"._('立即開始'),
  //         "h6"._('開始使用 PD Web Template 建構你的項目'),
  //         "p"._('下載此組合包，您可以立即擁有強大的模板和元件<br>幫助您快速輕鬆地構建網站頁面'),
  //         "a"._('立即購買')
  //       ]),
  //       `<svg width="100%" height="48px">
  //         <path d="M0 0, Q${vw / 2} 96, ${vw} 0, L${vw} 48, 0 48" fill="#fff">
  //       </svg>`
  //     ]),
  //     "section#section-005"._([
  //       "div"._([
  //         "ul"._([
  //           "li"._([
  //             "img"._('../image/Userpics/SVG/Square/Afterclap-0.svg'),
  //             "p"._([
  //               "b"._('王大明'),
  //               "平面設計師"
  //             ]),
  //             "p"._('自從用了 PD Web Template 後，建構網站變得方便、迅速，很慶幸去年的我做了這個決定。<br><br>能省下更多心力在設計網站，讓我專注時間在做好本身的項目。')
  //           ]),
  //           "li"._([
  //             "img"._('../image/Userpics/SVG/Square/Afterclap-1.svg'),
  //             "p"._([
  //               "b"._('陳老闆'),
  //               "攝影公司負責人"
  //             ]),
  //             "p"._('團隊中並無負責網站開發的人，外包了好幾次總是覺得品質不到要求，所以嘗試使用 PD Web Template。<br><br>不只是架設網站變得輕鬆便利，也透過 Pardn Ltd 所提供的主機與代管服務解決了後續維護問題。')
  //           ]),
  //           "li"._([
  //             "img"._('../image/Userpics/SVG/Square/Afterclap-2.svg'),
  //             "p"._([
  //               "b"._('吳老闆'),
  //               "日式料理店老闆"
  //             ]),
  //             "p"._('我本業是做餐飲業的，只是想要一個網站來做餐廳的推廣與介紹，對網站的領域不太清楚。<br><br>所以直接使用 Pardn Ltd 所提供的模板以及主機，讓我能更專心的推廣自身的餐廳。')
  //           ])
  //         ])
  //       ]),
  //       `<svg width="100%" height="48px">
  //         <path d="M0 0, Q${vw / 2} 96, ${vw} 0, L${vw} 48, 0 48" fill="#F2F6FC">
  //       </svg>`
  //     ]),
  //     "section#section-006"._([
  //       "div"._([
  //         "ul"._([
  //           "li"._([
  //             "i.fas.fa-signature"._(),
  //             "p"._('<b>努力很重要，但更要聰明做事</b>試著來了解 PD Web Template 如何為您省下大把的時間與精力。')
  //           ]),
  //           "li"._([
  //             "i.fas.fa-code"._(),
  //             "p"._('<b>為快速架站所開發</b>我們的初衷，就是為了提供給各位一個快速架站的工具包。')
  //           ]),
  //         ]),
  //         "div"._([
  //           "p"._('<b>準備好開始了嗎？</b>創建用戶後即可開始。'),
  //           "a"._('聯絡銷售'),
  //           "a"._('創建帳戶')
  //         ])
  //       ])
  //     ]),
  //     "footer#footer-001"._([
  //       "div"._([

  //       ])
  //     ])
  //   ])
  // }
  // showMultipurpose();

  var scrollTimer;
  document.body.onscroll = function(e){
    var top = Number(e.srcElement.scrollingElement.scrollTop);
    var dom = document.querySelector('nav');
    clearTimeout(scrollTimer);
    scrollTimer = null;
    (top > 48) ? dom.classList.add('scroll') : dom.classList.remove('scroll');
  };

  document.querySelectorAll('*[top], *[bottom], *[bg-col], *[col], *[bg-img]').forEach($1 => {
    var top     = $1.getAttribute('top');
    var bottom  = $1.getAttribute('bottom');
    var bgCol   = $1.getAttribute('bg-col');
    var col     = $1.getAttribute('col');
    var bgImg   = $1.getAttribute('bg-img');
    if (top) $1.style["padding-top"] = top;
    if (bottom) $1.style["padding-bottom"] = bottom;
    if (bgCol) {
      if (/^-{2}[\w\-]+$/.test(bgCol)) $1.style["background-color"] = `var(${bgCol})`;
      else $1.style["background-color"] = bgCol;
    }
    if (col) {
      if (/^-{2}[\w\-]+$/.test(col)) $1.style["color"] = `var(${col})`;
      else $1.style["color"] = col;
    };
    if (bgImg) $1.style["background-image"] = `url(${bgImg})`;
  });

  document.querySelectorAll('span[mask="arc"], span[mask="arc-up"], span[mask="arc-down"]').forEach($1 => {
    var parent  = $1.parentElement;
    var mask    = $1.getAttribute('mask');
    var col     = parent.style.backgroundColor ? parent.style.backgroundColor : "#fff";
    var height  = $1.getAttribute('height') ? Number($1.getAttribute('height')) : vw > 1024 ? 64 : 32;
    var isDown  = Boolean(mask === "arc-down");
    var p1 = Math.floor(vw / 2);
    parent.innerHTML += isDown ? `
    <svg width="100%" height="${height}px" style="top: -${height - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 0, Q ${p1} ${vw > 1024 ? 128 : 64}, ${vw} 0, L ${vw} ${height}, 0 ${height}" fill="${col}">
    </svg>` : `
    <svg width="100%" height="${vw > 1024 ? 128 : 64}px" style="top: -${(vw > 1024 ? 128 : 64) - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M 0 ${vw > 1024 ? 128 : 64}, Q ${p1} 0, ${vw} ${vw > 1024 ? 128 : 64}, L 0 ${vw > 1024 ? 128 : 64}" fill="${col}">
    </svg>`;
    $1.remove();
  });
  
  document.querySelectorAll('span[mask="slash-left"], span[mask="slash-right"]').forEach($1 => {
    var parent  = $1.parentElement;
    var mask    = $1.getAttribute('mask');
    var col     = parent.style.backgroundColor ? parent.style.backgroundColor : "#fff";
    var height  = $1.getAttribute('height') ? Number($1.getAttribute('height')) : vw > 1024 ? 80 : 40;
    var isLeft  = Boolean(mask === "slash-left");
    parent.innerHTML += isLeft ? `
    <svg width="100%" height="${height}px" style="top: -${height - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M ${vw} ${height}, L 0 0, L 0 ${height}" stroke="none" fill="${col}"/>
    </svg>` : `
    <svg width="100%" height="${height}px" style="top: -${height - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 ${height}, L ${vw} 0, L ${vw} ${height}" stroke="none" fill="${col}"/>
    </svg>`;
    $1.remove();
  });

  document.querySelectorAll('span[mask="wave"]').forEach($1 => {
    var parent  = $1.parentElement;
    var colBg   = $1.getAttribute('colBg');
    var col     = $1.getAttribute('col');
    var p1 = Math.floor(vw / 6);
    var p2 = Math.floor(vw / 6 * 2);
    var p3 = Math.floor(vw / 6 * 3);
    var p4 = Math.floor(vw / 6 * 4);
    var p5 = Math.floor(vw / 6 * 5);
    parent.innerHTML += `
    <svg width="100%" height="72px" style="top: -71px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M -100 36, C ${p1 - 100} 0, ${p2 - 100} 36, ${p2 - 100} 36, C ${p3 - 100} 72, ${p4 - 100} 36, ${p4 - 100} 36, C ${p5 - 100} 0, ${vw - 100} 36, ${vw - 100} 36, L ${vw - 100} 72, L0 72" stroke="none" fill="${colBg}"/>
      <path d="M 150 36, C ${p1 + 150} 0, ${p2 + 150} 36, ${p2 + 150} 36, C ${p3 + 150} 72, ${p4 + 150} 36, ${p4 + 150} 36, C ${p5 + 150} 0, ${vw + 150} 12, ${vw + 150} 12, L ${vw + 150}  72, L0 72" stroke="none" fill="${colBg}"/>
      <path d="M 0 36, C ${p1} 0, ${p2} 36, ${p2} 36, C ${p3} 72, ${p4} 36, ${p4} 36, C ${p5} 0, ${vw} 36, ${vw} 36, L ${vw} 72, L0 72" stroke="none" fill="${col}"/>
    </svg>`;
    $1.remove();
  });

  document.querySelectorAll('*[unhover="1"]').forEach($1 => {

    $1.onmouseleave = function(e){
      this.classList.add('unhover');
      var timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        this.classList.remove('unhover')
      }, 500);
    }
  });
}());
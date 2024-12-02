(function () {
    var vw = document.documentElement.clientWidth;

    document.addEventListener("DOMContentLoaded", function () {
        var scrollTimer;
        document.body.onscroll = function (e) {
            var top = Number(e.target.scrollingElement.scrollTop);
            clearTimeout(scrollTimer);
            scrollTimer = null;
            (top > 48) ? "top-nav".$._class('scroll') : "top-nav".$.class_('scroll');
        };

        "*[top], *[bottom], *[bg-col], *[col], *[bg-img]".$all.forEach(e => {
            var top = e.$attr('top');
            var bottom = e.$attr('bottom');
            var bgCol = e.$attr('bg-col');
            var col = e.$attr('col');
            var bgImg = e.$attr('bg-img');

            if (top) e._style({ "padding-top": top });
            if (bottom) e._style({ "padding-bottom": bottom });
            if (bgCol) (/^-{2}[\w\-]+$/.test(bgCol)) ? e._style({ "background-color": `var(${bgCol})` }) : e._style({ "background-color": bgCol });
            if (col) (/^-{2}[\w\-]+$/.test(col)) ? e._style({ "color": `var(${col})` }) : e._style({ "color": col });
            if (bgImg) e._style({ "background-image": `url(${bgImg})` });
        });

        "span[mask='arc'], span[mask='arc-up'], span[mask='arc-down']".$all.forEach(e => {
            var mask = e.$attr('mask');
            var col = e.$parent().$style("background-color") || "#fff";
            var height1 = Number(e.$attr('height') || vw > 1024 ? 64 : 32);
            var height2 = vw > 1024 ? 128 : 64;
            var isDown = Boolean(mask === "arc-down");
            var p1 = Math.floor(vw / 2);

            e.$parent(0).innerHTML += isDown ? `
            <svg width="100%" height="${height1}px" style="top: -${height1 - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 0, Q ${p1} ${height2}, ${vw} 0, L ${vw} ${height1}, 0 ${height1}" fill="${col}">
            </svg>` : `
            <svg width="100%" height="${height2}px" style="top: -${height2 - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 ${height2}, Q ${p1} 0, ${vw} ${height2}, L 0 ${height2}" fill="${col}">
            </svg>`

            e.remove();
        });

        "span[mask='slash-left'], span[mask='slash-right']".$all.forEach(e => {
            var mask = e.$attr("mask");
            var col = e.$parent().$style("background-color") || "#fff";
            var height = Number(e.$attr('height') || vw > 1024 ? 80 : 40);
            var isLeft = Boolean(mask === "slash-left");

            e.$parent(0).innerHTML += isLeft ? `
          <svg width="100%" height="${height}px" style="top: -${height - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M ${vw} ${height}, L 0 0, L 0 ${height}" stroke="none" fill="${col}"/>
          </svg>` : `
          <svg width="100%" height="${height}px" style="top: -${height - 1}px" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 ${height}, L ${vw} 0, L ${vw} ${height}" stroke="none" fill="${col}"/>
          </svg>`

            e.remove();
        });

        "span[mask='wave']".$all.forEach(e => {
            var colBg = e.$attr("colBg");
            var col = e.$attr("col");
            var p1 = Math.floor(vw / 6);
            var p2 = Math.floor(vw / 6 * 2);
            var p3 = Math.floor(vw / 6 * 3);
            var p4 = Math.floor(vw / 6 * 4);
            var p5 = Math.floor(vw / 6 * 5);

            e.$parent(0).innerHTML += `<svg width="100%" height="72px" style="top: -71px" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M -100 36, C ${p1 - 100} 0, ${p2 - 100} 36, ${p2 - 100} 36, C ${p3 - 100} 72, ${p4 - 100} 36, ${p4 - 100} 36, C ${p5 - 100} 0, ${vw - 100} 36, ${vw - 100} 36, L ${vw - 100} 72, L0 72" stroke="none" fill="${colBg}"/>
              <path d="M 150 36, C ${p1 + 150} 0, ${p2 + 150} 36, ${p2 + 150} 36, C ${p3 + 150} 72, ${p4 + 150} 36, ${p4 + 150} 36, C ${p5 + 150} 0, ${vw + 150} 12, ${vw + 150} 12, L ${vw + 150}  72, L0 72" stroke="none" fill="${colBg}"/>
              <path d="M 0 36, C ${p1} 0, ${p2} 36, ${p2} 36, C ${p3} 72, ${p4} 36, ${p4} 36, C ${p5} 0, ${vw} 36, ${vw} 36, L ${vw} 72, L0 72" stroke="none" fill="${col}"/>
            </svg>`

            e.remove();
        });

        "*[unhover='1']".$all.forEach(e => {
            e.onmouseleave = function () {
                this._class('unhover');
                var timer = setTimeout(() => {
                    clearTimeout(timer);
                    timer = null;
                    this.class_('unhover');
                }, 500);
            };
        });
    });
}());
(function () {
    var vw = document.documentElement.clientWidth;

    var scrollTimer;
    document.body.onscroll = function (e) {
        var top = Number(e.srcElement.scrollingElement.scrollTop);
        var dom = document.querySelector('nav');
        clearTimeout(scrollTimer);
        scrollTimer = null;
        (top > 48) ? dom.classList.add('scroll') : dom.classList.remove('scroll');
    };

    document.querySelectorAll('*[top], *[bottom], *[bg-col], *[col], *[bg-img]').forEach($1 => {
        var top = $1.getAttribute('top');
        var bottom = $1.getAttribute('bottom');
        var bgCol = $1.getAttribute('bg-col');
        var col = $1.getAttribute('col');
        var bgImg = $1.getAttribute('bg-img');
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
        var parent = $1.parentElement;
        var mask = $1.getAttribute('mask');
        var col = parent.style.backgroundColor ? parent.style.backgroundColor : "#fff";
        var height = $1.getAttribute('height') ? Number($1.getAttribute('height')) : vw > 1024 ? 64 : 32;
        var isDown = Boolean(mask === "arc-down");
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
        var parent = $1.parentElement;
        var mask = $1.getAttribute('mask');
        var col = parent.style.backgroundColor ? parent.style.backgroundColor : "#fff";
        var height = $1.getAttribute('height') ? Number($1.getAttribute('height')) : vw > 1024 ? 80 : 40;
        var isLeft = Boolean(mask === "slash-left");
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
        var parent = $1.parentElement;
        var colBg = $1.getAttribute('colBg');
        var col = $1.getAttribute('col');
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

        $1.onmouseleave = function (e) {
            this.classList.add('unhover');
            var timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                this.classList.remove('unhover')
            }, 500);
        }
    });
}());
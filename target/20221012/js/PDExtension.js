function isNull(val) {
    return typeof (val) === "undefined" || val === null;
};
let systemScrollTimer = null;
let systemScrollTargetTop = null;
let systemScrollTargetLeft = null;
/**
 * Array Extension
 */
Array.prototype.isAry = true;
Array.prototype.isObj = false;
Array.prototype.isStr = false;
Array.prototype.isNum = false;
Array.prototype.toStr = function () {
    return this.join(',');
};
Array.prototype.toNew = function (row) {
    var ary = [];
    if (this.length) this.forEach(($1, $2) => {
        if (row($1, $2)) ary.push(row($1, $2));
    });
    return ary;
};
Array.prototype.get = function (index) {
    if (index >= 0) return this[index];
    else return this[this.length + index];
};
Array.prototype.getLast = function () {
    return this[this.length - 1];
};
Array.prototype.getLastIndex = function () {
    return Number(this.length - 1);
};
Array.prototype._ = Array.prototype.toNew;
Array.prototype.$ = Array.prototype.get;
Array.prototype.$last = Array.prototype.getLast;
Array.prototype.$lastIndex = Array.prototype.getLastIndex;
/**
 * Object Extension
 */
Object.prototype.isAry = false;
Object.prototype.isObj = true;
Object.prototype.isStr = false;
Object.prototype.isNum = false;
Object.prototype.getKeys = function () {
    return Object.keys(this);
};
Object.prototype.$keys = Object.prototype.getKeys;
/**
 * Number Extension
 */
Number.prototype.isAry = false;
Number.prototype.isObj = false;
Number.prototype.isStr = false;
Number.prototype.isNum = true;
Number.prototype.array = function (unit) {
    var ary = [];
    for (let i = 0; i < this; i++) {
        if (unit) ary.push(unit);
        else ary.push(i);
    };
    return ary;
};
Number.prototype.toStr = function () {
    return String(this)
};
Number.prototype._ary = Number.prototype.array;
Number.prototype._str = Number.prototype.toStr;
/**
 * URL Extension
 */
URL.prototype.addHistory = function () {
    history.pushState(null, null, this.href);
};
URL.prototype.getParam = function (query) {
    return this.searchParams.get(query);
};
URL.prototype.getParamAll = function () {
    var ary = this.search.replace(/^\?/, '').split('&');
    ary = ary.toNew($1 => {
        var key = $1.split('=')[0];
        var val = $1.split('=')[1];
        var ary = [key, val];
        return ary;
    });
    var map = {};
    ary.forEach($1 => map[$1[0]] = $1[1]);
    return map;
};
URL.prototype.addParam = function (query) {
    var map = this.getParamAll();
    var keys = Object.keys(query);
    var url = `${this.origin}${this.pathname}?`;
    keys.forEach((key) => map[key] = query[key]);
    map.$keys().forEach(($1, i) => {
        if (map[$1]) url += `${i == 0 ? "" : "&"}${$1}=${map[$1]}`;
    });
    var newURL = new URL(query ? url : `${this.pathname}${this.search}`);
    return newURL;
};
URL.prototype.setParam = function (query) {
    var url = `${this.origin}${this.pathname}?`;
    query.$keys().forEach(($1, i) => {
        if (query[$1]) url += `${i == 0 ? "" : "&"}${$1}=${query[$1]}`;
    });
    var newURL = new URL(query ? url : this.pathname);
    return newURL;
};
URL.prototype._history = URL.prototype.addHistory;
URL.prototype.$param = URL.prototype.getParam;
URL.prototype.$paramAll = URL.prototype.getParamAll;
URL.prototype._param = URL.prototype.addParam;
URL.prototype._param_ = URL.prototype.setParam;
/**
 * String Extensionw
 */
String.prototype.isAry = false;
String.prototype.isObj = false;
String.prototype.isStr = true;
String.prototype.isNum = false;
String.prototype.toURL = function () {
    var url = new URL(String(this));
    return url;
};
String.prototype.defaultURL = function () {
    return location.href.split('?')[0];
};
String.prototype._url = String.prototype.toURL;
/**
 *
 */
String.prototype.rmTopBottom = function () {
    return String(this).replace(/^\n*|\n*$/g, '')
};
String.prototype.rm2SiteBlank = function () {
    return String(this).replace(/^\s*|\s*$/g, '')
};
String.prototype.fitHTML = function () {
    return this.replace(/ | /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;')
};
String.prototype.fitRegex = function () {
    return this.replace(/\^/g, '\\^')
        .replace(/\$/g, '\\$')
        .replace(/\*/g, '\\*')
        .replace(/\+/g, '\\+')
        .replace(/\?/g, '\\?')
        .replace(/\!/g, '\\!')
        .replace(/\./g, '\\.')
        .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(').replace(/\)/g, '\\)')
        .replace(/\{/g, '\\{').replace(/\}/g, '\\}')
        .replace(/\|/g, '\\|')
        .replace(/\=/g, '\\=')
        .replace(/\:/g, '\\:')
};
String.prototype.isEmpty = function () {
    return this.replace(/\s/g, '').length === 0;
};
/**
 * Create HTMLElements.
 */
String.prototype.new = function (param0, param1) {
    var elmVal = this.match(/^\w+(?=[\#\.]*)/)[0];
    var idVal = this.match(/\#([\w_-]+)?/) ? this.match(/\#([\w_-]+)?/)[1] : null;
    var classVal = this.match(/\.([\w_-]+)?/g) ? this.match(/\.([\w_-]+)?/g).toNew($1 => $1.replace(/^\./, '')).join(' ') : null;

    var dom = document.createElement(elmVal);

    if (idVal) dom.id = idVal;
    if (classVal) dom.className = classVal;

    var attrs = null;
    var children = null;

    switch (true) {
        /**
         * 皆為空
         */
        case (!param0 && !param1):
            return dom;
        /**
         * 參數為空
         */
        case (!param0 && param1):
            children = param1;
            break;
        /**
         * 子元件為空
         */
        case (param0 && !param1):
            attrs = param0.length ? null : param0;
            children = param0.length ? param0 : null;
            break;
        /**
         * 皆存在
         */
        default:
            attrs = param0;
            children = param1;
    };

    if (!isNull(attrs)) attrs.getKeys().forEach(attr => {
        if (attr === "contentEditable") return dom.contentEditable = attrs.contentEditable;
        if (attr === "name") return dom.setAttribute('name', attrs.name);
        if (attr === "value") return dom.value = attrs.value;
        if (attr === "id") return dom.id = attrs.id;
        if (attr === "class") return dom.className = attrs.class;
        if (attr === "innerText") return dom.innerText = attrs.innerText;
        if (attr === "innerHTML") return dom.innerHTML = attrs.innerHTML;
        if (attr === "textContent") return dom.textContent = attrs.textContent;
        if (attr === "onscroll") return dom.onscroll = attrs.onscroll;
        if (attr === "onload") return dom.onload = attrs.onload;
        if (attr === "onready") return dom.onreadystatechange = attrs.onready;
        if (attr === "onclick") return dom.onclick = attrs.onclick;
        if (attr === "onkeyup") return dom.onkeyup = attrs.onkeyup;
        if (attr === "onchange") return dom.onchange = attrs.onchange;
        if (attr === "onmouseup") return dom.onmouseup = attrs.onmouseup;
        if (attr === "ontouchend") return dom.ontouchend = attrs.ontouchend;

        if (attr === "onchange") return dom.onchange = attrs.onchange;
        if (attr === "ondragenter") return dom.ondragenter = attrs.ondragenter;
        if (attr === "ondragover") return dom.ondragover = attrs.ondragover;
        if (attr === "ondragleave") return dom.ondragleave = attrs.ondragleave;
        if (attr === "ondrop") return dom.ondrop = attrs.ondrop;

        if (attr === "onkeydown") return dom.onkeydown = attrs.onkeydown;
        if (attr === "onkeypress") return dom.onkeypress = attrs.onkeypress;
        if (attr === "oninput") return dom.oninput = attrs.oninput;
        if (attr === "onfocus") return dom.onfocus = attrs.onfocus;
        if (attr === "onblur") return dom.onblur = attrs.onblur;
        if (attr === "href") return dom.href = attrs.href;
        if (attr === "alt") return dom.alt = attrs.alt;
        if (attr === "src") return dom.src = attrs.src;
        if (attr === "file") return dom.file = attrs.file;
        if (attr === "placeholder") return dom.placeholder = attrs.placeholder;
        if (attr === "style") return Object.keys(attrs.style).forEach($1 => dom.style[$1] = attrs.style[$1]);
        if (attr === "bgcolor") return dom.style["background-color"] = attrs.bgcolor;
        if (attr === "set") return Object.keys(attrs.set).forEach($1 => dom.setAttribute($1, attrs.set[$1]));
        if (attr === "lazyload") {
            dom.classList.add('lazyload')
            dom.classList.add('loading')
            dom.setAttribute('data-src', attrs.lazyload);
            lazyloadObserver.observe(dom);
            return;
        };
        if (attr === "checked") return dom.checked = attrs.checked;
        if (attr === "selected") return dom.selected = attrs.selected;
        dom.setAttribute(attr, attrs[attr]);
    });

    if (isNull(children)) return dom;

    if (children.isStr || children.isNum) {
        switch (elmVal) {
            case "img":
                dom.src = children;
                dom.alt = children.split('/').getLast();
                break;
            case "input":
                var type = children.match(/^\w+(?=\s)/) ? children.match(/^\w+(?=\s)/)[0] : null;
                var placeholder = children.match(/\s.+/) ? children.match(/\s.+/)[0].rm2SiteBlank() : null;
                if (type) dom.type = type;
                if (placeholder) dom.placeholder = placeholder;
                break;
            case "textarea":
                // var type        = children.match(/^\d+(?=\s)/) ? children.match(/^\w+(?=\s)/)[0] : null;
                // var placeholder = children.match(/\s.+/) ? children.match(/\s.+/)[0].rm2SiteBlank() : null;
                // dom.setAttr({ rows: 1 });
                dom.placeholder = children;
                break;
            default:
                dom.innerHTML = children;
        }
    }
    else if (children.length > 0) children.forEach($1 => {
        if (isNull($1)) return;
        if ($1.isObj) return dom.appendChild($1);
        dom.innerHTML += $1;
    });

    return dom;
};
String.prototype._ = String.prototype.new;
/**
 *
 */
String.prototype.get = function () {
    var str = String(this);
    var isId = !/(\.|\=|\[|\])/g.test(str);
    return (isId) ? document.getElementById(str) : document.querySelector(str);
};
String.prototype.getAll = function () {
    var str = String(this);
    return document.querySelectorAll(str);
};
String.prototype.clear = function () {
    var dom = String(this).get();
    if (!dom) return;
    dom.innerHTML = null;
    return dom;
};
String.prototype.remove = function () {
    var dom = String(this).get();
    if (!dom) return;
    dom.remove();
};
String.prototype.$ = String.prototype.get;
String.prototype.$all = String.prototype.getAll;
String.prototype.$_ = String.prototype.clear;
String.prototype.$rm = String.prototype.remove;
/**
 *
 */
String.prototype.isClass = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return false;
    return dom.classList.contains(value);
};
String.prototype.addClass = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return;
    switch (typeof (value)) {
        case "string": dom.classList.add(value); break;
        case "object": value.forEach($1 => dom.classList.add($1));
    };
};
String.prototype.rmClass = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return;
    switch (typeof (value)) {
        case "string": dom.classList.remove(value); break;
        case "object": value.forEach($1 => dom.classList.remove($1));
    };
};
String.prototype.setClass = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return;
    dom.className = "";
    switch (typeof (value)) {
        case "string": value.split(' ').forEach($1 => dom.classList.add($1)); break;
        case "object": value.forEach($1 => dom.classList.add($1));
    };
};
String.prototype._class = String.prototype.addClass;
String.prototype.class_ = String.prototype.rmClass;
String.prototype._class_ = String.prototype.setClass;
/**
 *
 */
String.prototype.getAttr = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return;
    return dom.getAttribute(value);
};
String.prototype.addAttr = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return;
    value.getKeys().forEach($1 => dom.setAttribute($1, value[$1]));
};
String.prototype.$attr = String.prototype.getAttr;
String.prototype._attr = String.prototype.addAttr;
/**
 *
 */
String.prototype.getChild = function (children) {
    var dom = String(this).get();

    if (children === null || !dom) return;

    var type = typeof (children);

    if (type == "object") {
        children.forEach($1 => {
            var type = typeof ($1);
            if (type === "number") dom = dom.children[$1];
            if (type === "string") dom = dom.querySelector($1);
        });
    }
    else if (type === "number") {
        if (children < 0) {
            dom = dom.children[dom.children.length + children];
        } else {
            dom = dom.children[children];
        }
    }
    else if (type === "string") {
        dom = dom.querySelector(children);
    };
    return dom;
};
String.prototype.getChildAll = function (value) {
    var dom = String(this).get();
    if (!value || !dom) return [];
    return dom.querySelectorAll(value);
};
String.prototype.addChild = function (children) {
    var dom = String(this).get();
    if (!children || !children.length || !dom) return;
    children.forEach($1 => {
        if ($1) dom.appendChild($1);
    });
};
String.prototype.addChildTo = function (targetChildren, children) {
    var dom = String(this).get();
    if (targetChildren === null || !dom) return;
    if (!children || !children.length) return;

    var type = typeof (targetChildren);
    if (type == "object") targetChildren.forEach($1 => {
        var type = typeof ($1);
        if (type === "number") dom = dom.children[$1];
        if (type === "string") dom = dom.querySelector($1);
    });
    else if (type === "number") dom = dom.children[targetChildren];
    else if (type === "string") dom = dom.querySelector(targetChildren);

    children.forEach(dom => {
        if (dom !== null) dom.appendChild(dom);
    });
};
String.prototype.$child = String.prototype.getChild;
String.prototype.$childAll = String.prototype.getChildAll;
String.prototype._child = String.prototype.addChild;
String.prototype._childTo = String.prototype.addChildTo;
/**
 * 
 */
String.prototype.getParent = function (index) {
    var dom = String(this).get();
    if (!dom) return;
    var elm = dom.parentElement;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.parentElement;
    };
    return elm;
};
String.prototype.getPrevious = function (index) {
    var dom = String(this).get();
    if (!dom) return;
    var elm = dom.previousElementSibling;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.previousElementSibling;
    };
    return elm;
};
String.prototype.getNext = function (index) {
    var dom = String(this).get();
    if (!dom) return;
    var elm = dom.nextElementSibling;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.nextElementSibling;
    };
    return elm;
};
String.prototype.$parent = String.prototype.getParent;
String.prototype.$previous = String.prototype.getPrevious;
String.prototype.$next = String.prototype.getNext;
/**
 * 
 */
String.prototype.scrollTo = function (json) {
    var dom = String(this).get();
    if (!json || !dom) return;
    if (json.left !== null) {
        let timer = setInterval(() => {
            const to = json.left > 0 ? json.left : 0;
            const max = (dom.scrollWidth - dom.clientWidth);
            const length = (to < max ? to : max) - dom.scrollLeft;
            const isAppend = (length > 0);
            const isDone = (() => {
                if (isAppend) return (dom.scrollLeft >= to || dom.scrollLeft >= max);
                return (dom.scrollLeft <= to || dom.scrollLeft <= 0);
            })();
            if (isDone) return clearInterval(timer), timer = null;
            setTimeout(() => {
                if (timer) clearInterval(timer), timer = null;
            }, 500);
            dom.scrollLeft += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        }, 10);
        return timer;
    };
    if (json.top !== null) {
        let timer = setInterval(() => {
            const to = json.top > 0 ? json.top : 0;
            const max = (dom.scrollHeight - dom.clientHeight);
            const length = (to < max ? to : max) - dom.scrollTop;
            const isAppend = (length > 0);
            const isDone = (() => {
                if (isAppend) return (dom.scrollTop >= to || dom.scrollTop >= max);
                return (dom.scrollTop <= to || dom.scrollTop <= 0);
            })();
            if (isDone) return clearInterval(timer), timer = null;
            setTimeout(() => {
                if (timer) clearInterval(timer), timer = null;
            }, 500);
            dom.scrollTop += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        }, 10);
        return timer;
    };
};
/**
 * 
 */
HTMLElement.prototype.clear = function () {
    var dom = this;
    if (!dom) return;
    dom.innerHTML = null;
    return dom;
};
HTMLElement.prototype.$_ = HTMLElement.prototype.clear;
HTMLElement.prototype.$rm = HTMLElement.prototype.remove;
/**
 * 
 */
HTMLElement.prototype.isClass = function (value) {
    var target = this;
    if (!value || !target) return false;
    return target.classList.contains(value);
};
HTMLElement.prototype.addClass = function (value) {
    var target = this;
    if (!value || !target) return;
    switch (typeof (value)) {
        case "string": target.classList.add(value); break;
        case "object": value.forEach($1 => target.classList.add($1));
    };
};
HTMLElement.prototype.rmClass = function (value) {
    var target = this;
    if (!value || !target) return;
    switch (typeof (value)) {
        case "string": target.classList.remove(value); break;
        case "object": value.forEach($1 => target.classList.remove($1));
    };
};
HTMLElement.prototype.setClass = function (value) {
    var dom = this;
    if (isNull(value) || !dom) return;
    dom.className = "";
    if (value.isEmpty()) return;
    switch (typeof (value)) {
        case "string": value.split(' ').forEach($1 => dom.classList.add($1)); break;
        case "object": value.forEach($1 => dom.classList.add($1));
    };
};
HTMLElement.prototype._class = HTMLElement.prototype.addClass;
HTMLElement.prototype.class_ = HTMLElement.prototype.rmClass;
HTMLElement.prototype._class_ = HTMLElement.prototype.setClass;
/**
 * 
 */
HTMLElement.prototype.getAttr = function (value) {
    var target = this;
    if (!value || !target) return;
    return target.getAttribute(value);
};
HTMLElement.prototype.addAttr = function (value) {
    var target = this;
    if (!value || !target) return;
    Object.keys(value).forEach($1 => target.setAttribute($1, value[$1]));
    return target;
};
HTMLElement.prototype.$attr = HTMLElement.prototype.getAttr;
HTMLElement.prototype._attr = HTMLElement.prototype.addAttr;
/**
 * 
 */
HTMLElement.prototype.getChild = function (children) {
    var target = this;
    if (children === null || !target) return;
    var type = typeof (children);
    if (type == "object") {
        children.forEach($1 => {
            var type = typeof ($1);
            if (type === "number") target = target.children[$1];
            if (type === "string") target = target.querySelector($1);
        });
    }
    else if (type === "number") {
        if (children < 0) {
            target = target.children[target.children.length + children]
        } else {
            target = target.children[children]
        }
    }
    else if (type === "string") {
        target = target.querySelector(children);
    }
    return target;
};
HTMLElement.prototype.getChildAll = function (value) {
    var target = this;
    if (!value || !target) return [];
    return target.querySelectorAll(value);;
};
HTMLElement.prototype.addChild = function (children) {
    var target = this;
    if (!children || !children.length || !target) return;
    children.forEach(dom => {
        if (dom !== null) target.appendChild(dom);
    });
};
HTMLElement.prototype.addChildTo = function (targetChildren, children) {
    var target = this;
    if (targetChildren === null || !target) return;
    if (!children || !children.length) return;

    var type = typeof (targetChildren);
    if (type == "object") targetChildren.forEach($1 => {
        var type = typeof ($1);
        if (type === "number") target = target.children[$1];
        if (type === "string") target = target.querySelector($1);
    });
    else if (type === "number") {
        if (targetChildren < 0) {
            target = target.children[target.children.length + targetChildren]
        } else {
            target = target.children[targetChildren];
        }
    }
    else if (type === "string") target = target.querySelector(targetChildren);

    children.forEach(dom => {
        if (dom !== null) target.appendChild(dom);
    });
};
HTMLElement.prototype.$child = HTMLElement.prototype.getChild;
HTMLElement.prototype.$childAll = HTMLElement.prototype.getChildAll;
HTMLElement.prototype._child = HTMLElement.prototype.addChild;
HTMLElement.prototype._childTo = HTMLElement.prototype.addChildTo;
/**
 * 
 */
HTMLElement.prototype.getParent = function (index) {
    var target = this;
    if (!target) return;
    var elm = target.parentElement;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.parentElement;
    };
    return elm;
};
HTMLElement.prototype.getPrevious = function (index) {
    var target = this;
    if (!target) return;
    var elm = target.previousElementSibling;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.previousElementSibling;
    };
    return elm;
};
HTMLElement.prototype.getNext = function (index) {
    var dom = this;
    if (!dom) return;
    var elm = dom.nextElementSibling;
    if (index === null) return elm;
    for (let i = 0; i < index; i++) {
        elm = elm.nextElementSibling;
    };
    return elm;
};
HTMLElement.prototype.$parent = HTMLElement.prototype.getParent;
HTMLElement.prototype.$previous = HTMLElement.prototype.getPrevious;
HTMLElement.prototype.$next = HTMLElement.prototype.getNext;
/**
 * 
 */
var isRootCrtlScroll = false;
var rootScrollTimer;
HTMLElement.prototype.scrollTo = function (json) {
    var dom = this;
    if (!json || !dom) return;
    if (json.left !== null) {
        let timer = setInterval(() => {
            const to = json.left > 0 ? json.left : 0;
            const max = (dom.scrollWidth - dom.clientWidth);
            const length = (to < max ? to : max) - dom.scrollLeft;
            const isAppend = (length > 0);
            const isDone = (() => {
                if (isAppend) return (dom.scrollLeft >= to || dom.scrollLeft >= max);
                return (dom.scrollLeft <= to || dom.scrollLeft <= 0);
            })();
            if (isDone) return clearInterval(timer), timer = null;
            setTimeout(() => {
                if (timer) clearInterval(timer), timer = null;
            }, 500);
            dom.scrollLeft += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        }, 10);
        return timer;
    };
    if (json.top !== null) {
        let timer = setInterval(() => {
            const to = json.top > 0 ? json.top : 0;
            const max = (dom.scrollHeight - dom.clientHeight);
            const length = (to < max ? to : max) - dom.scrollTop;
            const isAppend = (length > 0);
            const isDone = (() => {
                if (isAppend) return (dom.scrollTop >= to || dom.scrollTop >= max);
                return (dom.scrollTop <= to || dom.scrollTop <= 0);
            })();
            if (isDone) return clearInterval(timer), timer = null;
            setTimeout(() => {
                if (timer) clearInterval(timer), timer = null;
            }, 500);
            dom.scrollTop += Math.ceil(length / 5) + (isAppend ? 1 : -1);
        }, 10);
        return timer;
    };
};
/**
 * 
 */
HTMLElement.prototype.go = function (page, target) {
    var dom = this;
    dom.href = page;
    if (target) dom.target = target
    return dom;
};
HTMLElement.prototype.setClick = function (action) {
    var dom = this;
    dom.onclick = action;
    return dom;
};
HTMLElement.prototype.setScroll = function (action) {
    var dom = this;
    dom.onscroll = action;
    return dom;
};
HTMLElement.prototype.setMouseup = function (action) {
    var dom = this;
    dom.onmouseup = action;
    return dom;
};
HTMLElement.prototype.setTouchend = function (action) {
    var dom = this;
    dom.ontouchend = action;
    return dom;
};
HTMLElement.prototype.setFocus = function (action) {
    var dom = this;
    dom.onfocus = action;
    return dom;
};
HTMLElement.prototype.setBlur = function (action) {
    var dom = this;
    dom.onblur = action;
    return dom;
};
HTMLElement.prototype.setInput = function (action) {
    var dom = this;
    dom.oninput = action;
    return dom;
};
HTMLElement.prototype._click = HTMLElement.prototype.setClick;
HTMLElement.prototype._scroll = HTMLElement.prototype.setScroll;
HTMLElement.prototype._mouseup = HTMLElement.prototype.setMouseup;
HTMLElement.prototype._touchend = HTMLElement.prototype.setTouchend;
HTMLElement.prototype._focus = HTMLElement.prototype.setFocus;
HTMLElement.prototype._blur = HTMLElement.prototype.setBlur;
HTMLElement.prototype._input = HTMLElement.prototype.setInput;
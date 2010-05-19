/*     * jQuery Corners 0.3     * Copyright (c) 2008 David Turnbull, Steven Wittens     * Dual licensed under the MIT (MIT-LICENSE.txt)     * and GPL (GPL-LICENSE.txt) licenses.     */
jQuery.fn.corners = function (C) {
    var N = "rounded_by_jQuery_corners";
    var V = B(C);
    var F = false;
    try {
        F = (document.body.style.WebkitBorderRadius !== undefined);
        var Y = navigator.userAgent.indexOf("Chrome");
        if (Y >= 0) {
            F = false;
        }
    } catch (E) {}
    var W = false;
    try {
        W = (document.body.style.MozBorderRadius !== undefined);
        var Y = navigator.userAgent.indexOf("Firefox");
        if (Y >= 0 && parseInt(navigator.userAgent.substring(Y + 8)) < 3) {
            W = false;
        }
    } catch (E) {}
    return this.each(function (b, h) {
        $e = jQuery(h);
        if ($e.hasClass(N)) {
            return;
        }
        $e.addClass(N);
        var a = /{(.*)}/.exec(h.className);
        var c = a ? B(a[1], V) : V;
        var j = h.nodeName.toLowerCase();
        if (j == "input") {
            h = O(h);
        }
        if (F && c.webkit) {
            K(h, c);
        } else {
            if (W && c.mozilla && (c.sizex == c.sizey)) {
                M(h, c);
            } else {
                var d = D(h.parentNode);
                var f = D(h);
                switch (j) {
                case "a":
                case "input":
                    Z(h, c, d, f);
                    break;
                default:
                    R(h, c, d, f);
                    break;
                }
            }
        }
    });

    function K(d, c) {
        var a = "" + c.sizex + "px " + c.sizey + "px";
        var b = jQuery(d);
        if (c.tl) {
            b.css("WebkitBorderTopLeftRadius", a);
        }
        if (c.tr) {
            b.css("WebkitBorderTopRightRadius", a);
        }
        if (c.bl) {
            b.css("WebkitBorderBottomLeftRadius", a);
        }
        if (c.br) {
            b.css("WebkitBorderBottomRightRadius", a);
        }
    }

    function M(d, c) {
        var a = "" + c.sizex + "px";
        var b = jQuery(d);
        if (c.tl) {
            b.css("-moz-border-radius-topleft", a);
        }
        if (c.tr) {
            b.css("-moz-border-radius-topright", a);
        }
        if (c.bl) {
            b.css("-moz-border-radius-bottomleft", a);
        }
        if (c.br) {
            b.css("-moz-border-radius-bottomright", a);
        }
    }

    function Z(k, n, l, a) {
        var m = S("table");
        var i = S("tbody");
        m.appendChild(i);
        var j = S("tr");
        var d = S("td", "top");
        j.appendChild(d);
        var h = S("tr");
        var c = T(k, n, S("td"));
        h.appendChild(c);
        var f = S("tr");
        var b = S("td", "bottom");
        f.appendChild(b);
        if (n.tl || n.tr) {
            i.appendChild(j);
            X(d, n, l, a, true);
        }
        i.appendChild(h);
        if (n.bl || n.br) {
            i.appendChild(f);
            X(b, n, l, a, false);
        }
        k.appendChild(m);
        if (jQuery.browser.msie) {
            m.onclick = Q;
        }
        k.style.overflow = "hidden";
    }

    function Q() {
        if (!this.parentNode.onclick) {
            this.parentNode.click();
        }
    }

    function O(c) {
        var b = document.createElement("a");
        b.id = c.id;
        b.className = c.className;
        if (c.onclick) {
            b.href = "javascript:";
            b.onclick = c.onclick;
        } else {
            jQuery(c).parent("form").each(function () {
                b.href = this.action;
            });
            b.onclick = I;
        }
        var a = document.createTextNode(c.value);
        b.appendChild(a);
        c.parentNode.replaceChild(b, c);
        return b;
    }

    function I() {
        jQuery(this).parent("form").each(function () {
            this.submit();
        });
        return false;
    }

    function R(d, a, b, c) {
        var f = T(d, a, document.createElement("div"));
        d.appendChild(f);
        if (a.tl || a.tr) {
            X(d, a, b, c, true);
        }
        if (a.bl || a.br) {
            X(d, a, b, c, false);
        }
    }

    function T(j, i, k) {
        var b = jQuery(j);
        var l;
        while (l = j.firstChild) {
            k.appendChild(l);
        }
        if (j.style.height) {
            var f = parseInt(b.css("height"));
            k.style.height = f + "px";
            f += parseInt(b.css("padding-top")) + parseInt(b.css("padding-bottom"));
            j.style.height = f + "px";
        }
        if (j.style.width) {
            var a = parseInt(b.css("width"));
            k.style.width = a + "px";
            a += parseInt(b.css("padding-left")) + parseInt(b.css("padding-right"));
            j.style.width = a + "px";
        }
        k.style.paddingLeft = b.css("padding-left");
        k.style.paddingRight = b.css("padding-right");
        if (i.tl || i.tr) {
            k.style.paddingTop = U(j, i, b.css("padding-top"), true);
        } else {
            k.style.paddingTop = b.css("padding-top");
        }
        if (i.bl || i.br) {
            k.style.paddingBottom = U(j, i, b.css("padding-bottom"), false);
        } else {
            k.style.paddingBottom = b.css("padding-bottom");
        }
        j.style.padding = 0;
        return k;
    }

    function U(f, a, d, c) {
        if (d.indexOf("px") < 0) {
            try {
                console.error("%s padding not in pixels", (c ? "top" : "bottom"), f);
            } catch (b) {}
            d = a.sizey + "px";
        }
        d = parseInt(d);
        if (d - a.sizey < 0) {
            try {
                console.error("%s padding is %ipx for %ipx corner:", (c ? "top" : "bottom"), d, a.sizey, f);
            } catch (b) {}
            d = a.sizey;
        }
        return d - a.sizey + "px";
    }

    function S(b, a) {
        var c = document.createElement(b);
        c.style.border = "none";
        c.style.borderCollapse = "collapse";
        c.style.borderSpacing = 0;
        c.style.padding = 0;
        c.style.margin = 0;
        if (a) {
            c.style.verticalAlign = a;
        }
        return c;
    }

    function D(b) {
        try {
            var d = jQuery.css(b, "background-color");
            if (d.match(/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/i) && b.parentNode) {
                return D(b.parentNode);
            }
            if (d == null) {
                return "#ffffff";
            }
            if (d.indexOf("rgb") > -1) {
                d = A(d);
            }
            if (d.length == 4) {
                d = L(d);
            }
            return d;
        } catch (a) {
            return "#ffffff";
        }
    }

    function L(a) {
        return "#" + a.substring(1, 2) + a.substring(1, 2) + a.substring(2, 3) + a.substring(2, 3) + a.substring(3, 4) + a.substring(3, 4);
    }

    function A(h) {
        var a = 255;
        var d = "";
        var b;
        var e = /([0-9]+)[, ]+([0-9]+)[, ]+([0-9]+)/;
        var f = e.exec(h);
        for (b = 1; b < 4; b++) {
            d += ("0" + parseInt(f[b]).toString(16)).slice(-2);
        }
        return "#" + d;
    }

    function B(b, d) {
        var b = b || "";
        var c = {
            sizex: 5,
            sizey: 5,
            tl: false,
            tr: false,
            bl: false,
            br: false,
            webkit: true,
            mozilla: true,
            transparent: false
        };
        if (d) {
            c.sizex = d.sizex;
            c.sizey = d.sizey;
            c.webkit = d.webkit;
            c.transparent = d.transparent;
            c.mozilla = d.mozilla;
        }
        var a = false;
        var e = false;
        jQuery.each(b.split(" "), function (f, j) {
            j = j.toLowerCase();
            var h = parseInt(j);
            if (h > 0 && j == h + "px") {
                c.sizey = h;
                if (!a) {
                    c.sizex = h;
                }
                a = true;
            } else {
                switch (j) {
                case "no-native":
                    c.webkit = c.mozilla = false;
                    break;
                case "webkit":
                    c.webkit = true;
                    break;
                case "no-webkit":
                    c.webkit = false;
                    break;
                case "mozilla":
                    c.mozilla = true;
                    break;
                case "no-mozilla":
                    c.mozilla = false;
                    break;
                case "anti-alias":
                    c.transparent = false;
                    break;
                case "transparent":
                    c.transparent = true;
                    break;
                case "top":
                    e = c.tl = c.tr = true;
                    break;
                case "right":
                    e = c.tr = c.br = true;
                    break;
                case "bottom":
                    e = c.bl = c.br = true;
                    break;
                case "left":
                    e = c.tl = c.bl = true;
                    break;
                case "top-left":
                    e = c.tl = true;
                    break;
                case "top-right":
                    e = c.tr = true;
                    break;
                case "bottom-left":
                    e = c.bl = true;
                    break;
                case "bottom-right":
                    e = c.br = true;
                    break;
                }
            }
        });
        if (!e) {
            if (!d) {
                c.tl = c.tr = c.bl = c.br = true;
            } else {
                c.tl = d.tl;
                c.tr = d.tr;
                c.bl = d.bl;
                c.br = d.br;
            }
        }
        return c;
    }

    function P(f, d, h) {
        var e = Array(parseInt("0x" + f.substring(1, 3)), parseInt("0x" + f.substring(3, 5)), parseInt("0x" + f.substring(5, 7)));
        var c = Array(parseInt("0x" + d.substring(1, 3)), parseInt("0x" + d.substring(3, 5)), parseInt("0x" + d.substring(5, 7)));
        r = "0" + Math.round(e[0] + (c[0] - e[0]) * h).toString(16);
        g = "0" + Math.round(e[1] + (c[1] - e[1]) * h).toString(16);
        d = "0" + Math.round(e[2] + (c[2] - e[2]) * h).toString(16);
        return "#" + r.substring(r.length - 2) + g.substring(g.length - 2) + d.substring(d.length - 2);
    }

    function X(f, a, b, d, c) {
        if (a.transparent) {
            G(f, a, b, c);
        } else {
            J(f, a, b, d, c);
        }
    }

    function J(k, z, p, a, n) {
        var h, f;
        var l = document.createElement("div");
        l.style.fontSize = "1px";
        l.style.backgroundColor = p;
        var b = 0;
        for (h = 1; h <= z.sizey; h++) {
            var u, t, q;
            arc = Math.sqrt(1 - Math.pow(1 - h / z.sizey, 2)) * z.sizex;
            var c = z.sizex - Math.ceil(arc);
            var w = Math.floor(b);
            var v = z.sizex - c - w;
            var o = document.createElement("div");
            var m = l;
            o.style.margin = "0px " + c + "px";
            o.style.height = "1px";
            o.style.overflow = "hidden";
            for (f = 1; f <= v; f++) {
                if (f == 1) {
                    if (f == v) {
                        u = ((arc + b) * 0.5) - w;
                    } else {
                        t = Math.sqrt(1 - Math.pow(1 - (c + 1) / z.sizex, 2)) * z.sizey;
                        u = (t - (z.sizey - h)) * (arc - w - v + 1) * 0.5;
                    }
                } else {
                    if (f == v) {
                        t = Math.sqrt(1 - Math.pow((z.sizex - c - f + 1) / z.sizex, 2)) * z.sizey;
                        u = 1 - (1 - (t - (z.sizey - h))) * (1 - (b - w)) * 0.5;
                    } else {
                        q = Math.sqrt(1 - Math.pow((z.sizex - c - f) / z.sizex, 2)) * z.sizey;
                        t = Math.sqrt(1 - Math.pow((z.sizex - c - f + 1) / z.sizex, 2)) * z.sizey;
                        u = ((t + q) * 0.5) - (z.sizey - h);
                    }
                }
                H(z, o, m, n, P(p, a, u));
                m = o;
                var o = m.cloneNode(false);
                o.style.margin = "0px 1px";
            }
            H(z, o, m, n, a);
            b = arc;
        }
        if (n) {
            k.insertBefore(l, k.firstChild);
        } else {
            k.appendChild(l);
        }
    }

    function H(c, a, e, d, b) {
        if (d && !c.tl) {
            a.style.marginLeft = 0;
        }
        if (d && !c.tr) {
            a.style.marginRight = 0;
        }
        if (!d && !c.bl) {
            a.style.marginLeft = 0;
        }
        if (!d && !c.br) {
            a.style.marginRight = 0;
        }
        a.style.backgroundColor = b;
        if (d) {
            e.appendChild(a);
        } else {
            e.insertBefore(a, e.firstChild);
        }
    }

    function G(c, o, l, h) {
        var f = document.createElement("div");
        f.style.fontSize = "1px";
        var a = document.createElement("div");
        a.style.overflow = "hidden";
        a.style.height = "1px";
        a.style.borderColor = l;
        a.style.borderStyle = "none solid";
        var m = o.sizex - 1;
        var j = o.sizey - 1;
        if (!j) {
            j = 1;
        }
        for (var b = 0; b < o.sizey; b++) {
            var n = m - Math.floor(Math.sqrt(1 - Math.pow(1 - b / j, 2)) * m);
            if (b == 2 && o.sizex == 6 && o.sizey == 6) {
                n = 2;
            }
            var k = a.cloneNode(false);
            k.style.borderWidth = "0 " + n + "px";
            if (h) {
                k.style.borderWidth = "0 " + (o.tr ? n : 0) + "px 0 " + (o.tl ? n : 0) + "px";
            } else {
                k.style.borderWidth = "0 " + (o.br ? n : 0) + "px 0 " + (o.bl ? n : 0) + "px";
            }
            h ? f.appendChild(k) : f.insertBefore(k, f.firstChild);
        }
        if (h) {
            c.insertBefore(f, c.firstChild);
        } else {
            c.appendChild(f);
        }
    }
};

sdata.widgets.WidgetLoader.informOnLoad("bookmarkandshare");
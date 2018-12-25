! function(i, e) {
    function t() { var e = n.getBoundingClientRect().width;
        540 < e / o && (e = 540 * o); var t = e / 10;
        n.style.fontSize = t + "px", d.rem = i.rem = t } var r, a = i.document,
        n = a.documentElement,
        m = a.querySelector('meta[name="viewport"]'),
        l = a.querySelector('meta[name="flexible"]'),
        o = 0,
        s = 0,
        d = e.flexible || (e.flexible = {}); if (m) { var c = m.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        c && (s = parseFloat(c[1]), o = parseInt(1 / s)) } else if (l) { var p = l.getAttribute("content"); if (p) { var u = p.match(/initial\-dpr=([\d\.]+)/),
                f = p.match(/maximum\-dpr=([\d\.]+)/);
            u && (o = parseFloat(u[1]), s = parseFloat((1 / o).toFixed(2))), f && (o = parseFloat(f[1]), s = parseFloat((1 / o).toFixed(2))) } } if (!o && !s) { var h = i.navigator.userAgent,
            v = (h.match(/android/gi), !!h.match(/iphone/gi)),
            x = v && !!h.match(/OS 9_3/),
            b = i.devicePixelRatio;
        s = 1 / (o = v && !x ? 3 <= b && (!o || 3 <= o) ? 3 : 2 <= b && (!o || 2 <= o) ? 2 : 1 : 1) } if (n.setAttribute("data-dpr", o), !m)
        if ((m = a.createElement("meta")).setAttribute("name", "viewport"), m.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), n.firstElementChild) n.firstElementChild.appendChild(m);
        else { var g = a.createElement("div");
            g.appendChild(m), a.write(g.innerHTML) } i.addEventListener("resize", function() { clearTimeout(r), r = setTimeout(t, 300) }, !1), i.addEventListener("pageshow", function(e) { e.persisted && (clearTimeout(r), r = setTimeout(t, 300)) }, !1), t(), d.dpr = i.dpr = o, d.refreshRem = t, d.rem2px = function(e) { var t = parseFloat(e) * this.rem; return "string" == typeof e && e.match(/rem$/) && (t += "px"), t }, d.px2rem = function(e) { var t = parseFloat(e) / this.rem; return "string" == typeof e && e.match(/px$/) && (t += "rem"), t } }(window, window.lib || (window.lib = {}));
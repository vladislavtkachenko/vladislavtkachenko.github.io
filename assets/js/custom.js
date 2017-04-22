(function($) {

    new WOW({
        mobile: false
    }).init();

    $(window).load(function () {
        window.setTimeout("$('#status').fadeOut()", 300);
        window.setTimeout("$('#preloader').delay(300).fadeOut('slow')", 300);
    });

    $('.skills').waypoint(function(){
        $('.chart').each(function(){
            $(this).easyPieChart({
                size:140,
                animate: 2000,
                lineCap:'butt',
                scaleColor: false,
                barColor: '#222', // FF5252
                trackColor: 'transparent',
                lineWidth: 10
            });
        });
    },{offset:'80%'});


    $('.header').sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 70
    });

    $('a').bind("click", function(e){

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

}(jQuery));

(function (b) {
    b.fn.quicksand = function (z, n, p) {
        var a = {
            duration: 750,
            easing: "swing",
            attribute: "data-id",
            adjustHeight: "auto",
            useScaling: !0,
            enhancement: function (a) {
            },
            selector: "> *",
            dx: 0,
            dy: 0
        };
        b.extend(a, n);
        if (b.browser.msie || "undefined" == typeof b.fn.scale) a.useScaling = !1;
        var t;
        "function" == typeof n ? t = n : typeof("function" == p) && (t = p);
        return this.each(function (k) {
            var q, l = [], m = b(z).clone(), g = b(this);
            k = b(this).css("height");
            var u, n = !1, p = b(g).offset(), v = [], r = b(this).find(a.selector);
            if (b.browser.msie && 7 > b.browser.version.substr(0,
                    1)) g.html("").append(m); else {
                var y = 0, A = function () {
                    y || (y = 1, $toDelete = g.find("> *"), g.prepend(h.find("> *")), $toDelete.remove(), n && g.css("height", u), a.enhancement(g), "function" == typeof t && t.call(this))
                }, e = g.offsetParent(), c = e.offset();
                "relative" == e.css("position") ? "body" != e.get(0).nodeName.toLowerCase() && (c.top += parseFloat(e.css("border-top-width")) || 0, c.left += parseFloat(e.css("border-left-width")) || 0) : (c.top -= parseFloat(e.css("border-top-width")) || 0, c.left -= parseFloat(e.css("border-left-width")) ||
                    0, c.top -= parseFloat(e.css("margin-top")) || 0, c.left -= parseFloat(e.css("margin-left")) || 0);
                isNaN(c.left) && (c.left = 0);
                isNaN(c.top) && (c.top = 0);
                c.left -= a.dx;
                c.top -= a.dy;
                g.css("height", b(this).height());
                r.each(function (a) {
                    v[a] = b(this).offset()
                });
                b(this).stop();
                var w = 0, x = 0;
                r.each(function (e) {
                    b(this).stop();
                    var f = b(this).get(0);
                    "absolute" == f.style.position ? (w = -a.dx, x = -a.dy) : (w = a.dx, x = a.dy);
                    f.style.position = "absolute";
                    f.style.margin = "0";
                    f.style.top = v[e].top - parseFloat(f.style.marginTop) - c.top + x + "px";
                    f.style.left =
                        v[e].left - parseFloat(f.style.marginLeft) - c.left + w + "px"
                });
                var h = b(g).clone(), e = h.get(0);
                e.innerHTML = "";
                e.setAttribute("id", "");
                e.style.height = "auto";
                e.style.width = g.width() + "px";
                h.append(m);
                h.insertBefore(g);
                h.css("opacity", 0);
                e.style.zIndex = -1;
                e.style.margin = "0";
                e.style.position = "absolute";
                e.style.top = p.top - c.top + "px";
                e.style.left = p.left - c.left + "px";
                "dynamic" === a.adjustHeight ? g.animate({height: h.height()}, a.duration, a.easing) : "auto" === a.adjustHeight && (u = h.height(), parseFloat(k) < parseFloat(u) ? g.css("height",
                        u) : n = !0);
                r.each(function (e) {
                    var f = [];
                    "function" == typeof a.attribute ? (q = a.attribute(b(this)), m.each(function () {
                        if (a.attribute(this) == q)return f = b(this), !1
                    })) : f = m.filter("[" + a.attribute + "=" + b(this).attr(a.attribute) + "]");
                    f.length ? a.useScaling ? l.push({
                        element: b(this),
                        animation: {
                            top: f.offset().top - c.top,
                            left: f.offset().left - c.left,
                            opacity: 1,
                            scale: "1.0"
                        }
                    }) : l.push({
                        element: b(this),
                        animation: {top: f.offset().top - c.top, left: f.offset().left - c.left, opacity: 1}
                    }) : a.useScaling ? l.push({
                        element: b(this), animation: {
                            opacity: "0.0",
                            scale: "0.0"
                        }
                    }) : l.push({element: b(this), animation: {opacity: "0.0"}})
                });
                m.each(function (e) {
                    var f = [], h = [];
                    "function" == typeof a.attribute ? (q = a.attribute(b(this)), r.each(function () {
                        if (a.attribute(this) == q)return f = b(this), !1
                    }), m.each(function () {
                        if (a.attribute(this) == q)return h = b(this), !1
                    })) : (f = r.filter("[" + a.attribute + "=" + b(this).attr(a.attribute) + "]"), h = m.filter("[" + a.attribute + "=" + b(this).attr(a.attribute) + "]"));
                    if (0 === f.length) {
                        e = a.useScaling ? {opacity: "1.0", scale: "1.0"} : {opacity: "1.0"};
                        d = h.clone();
                        var k =
                            d.get(0);
                        k.style.position = "absolute";
                        k.style.margin = "0";
                        k.style.top = h.offset().top - c.top + "px";
                        k.style.left = h.offset().left - c.left + "px";
                        d.css("opacity", 0);
                        a.useScaling && d.css("transform", "scale(0.0)");
                        d.appendTo(g);
                        l.push({element: b(d), animation: e})
                    }
                });
                h.remove();
                a.enhancement(g);
                for (k = 0; k < l.length; k++)l[k].element.animate(l[k].animation, a.duration, a.easing, A)
            }
        })
    }
})(jQuery);

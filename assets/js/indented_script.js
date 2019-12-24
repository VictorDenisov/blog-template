! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(_, e) {
    "use strict";
    var t = [],
        C = _.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        c = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        m = n.hasOwnProperty,
        a = m.toString,
        l = a.call(Object),
        v = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        y = function(e) {
            return null != e && e === e.window
        },
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function x(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e, t)
            for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var d = "3.4.1",
        N = function(e, t) {
            return new N.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !b(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    N.fn = N.prototype = {
        jquery: d,
        constructor: N,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = N.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return N.each(this, e)
        },
        map: function(n) {
            return this.pushStack(N.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: c,
        sort: t.sort,
        splice: t.splice
    }, N.extend = N.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (N.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || N.isPlainObject(n) ? n : {}, i = !1, a[t] = N.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, N.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof(n = m.call(t, "constructor") && t.constructor) || a.call(n) !== l))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            x(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? N.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (N.fn[Symbol.iterator] = t[Symbol.iterator]), N.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, p, x, o, i, h, d, g, w, c, l, S, _, a, C, m, s, u, v, N = "sizzle" + 1 * new Date,
            b = n.document,
            k = 0,
            r = 0,
            f = ce(),
            y = ce(),
            T = ce(),
            E = ce(),
            A = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            L = t.push,
            H = t.push,
            M = t.slice,
            q = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            D = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            O = "\\[" + D + "*(" + R + ")(?:" + D + "*([*^$|!~]?=)" + D + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + D + "*\\]",
            $ = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            U = new RegExp(D + "+", "g"),
            z = new RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
            P = new RegExp("^" + D + "*," + D + "*"),
            W = new RegExp("^" + D + "*([>+~]|" + D + ")" + D + "*"),
            F = new RegExp(D + "|>"),
            Q = new RegExp($),
            K = new RegExp("^" + R + "$"),
            Z = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + D + "?|(" + D + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                S()
            },
            ae = xe(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = M.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, M.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, r) {
            var i, o, a, s, c, l, u, d = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== _ && S(t), t = t || _, C)) {
                if (11 !== f && (c = G.exec(e)))
                    if (i = c[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (d && (a = d.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (c[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && p.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(i)), n
                    }
                if (p.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, d = t, 1 === f && F.test(e)) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(re, ie) : t.setAttribute("id", s = N), o = (l = h(e)).length; o--;) l[o] = "#" + s + " " + ye(l[o]);
                        u = l.join(","), d = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return H.apply(n, d.querySelectorAll(u)), n
                    } catch (t) {
                        E(e, !0)
                    } finally {
                        s === N && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(z, "$1"), t, n, r)
        }

        function ce() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[N] = !0, e
        }

        function ue(e) {
            var t = _.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) x.attrHandle[n[r]] = t
        }

        function fe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function me(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !V.test(t || n && n.nodeName || "HTML")
            }, S = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : b;
                return r !== _ && 9 === r.nodeType && r.documentElement && (a = (_ = r).documentElement, C = !i(_), b !== _ && (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), p.getElementsByTagName = ue(function(e) {
                    return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
                }), p.getElementsByClassName = Y.test(_.getElementsByClassName), p.getById = ue(function(e) {
                    return a.appendChild(e).id = N, !_.getElementsByName || !_.getElementsByName(N).length
                }), p.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, s = [], m = [], (p.qsa = Y.test(_.querySelectorAll)) && (ue(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + D + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + D + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + N + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = _.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + D + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (p.matchesSelector = Y.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                    p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), s.push("!=", $)
                }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), v = t || Y.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === b && v(b, e) ? -1 : t === _ || t.ownerDocument === b && v(b, t) ? 1 : c ? q(c, e) - q(c, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === _ ? -1 : t === _ ? 1 : i ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                    if (i === o) return fe(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[r] === s[r];) r++;
                    return r ? fe(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0
                }), _
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== _ && S(e), p.matchesSelector && C && !E[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                    var n = u.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    E(t, !0)
                }
                return 0 < se(t, _, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== _ && S(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== _ && S(e);
                var n = x.attrHandle[t.toLowerCase()],
                    r = n && j.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== r ? r : p.attributes || !C ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !p.detectDuplicates, c = !p.sortStable && e.slice(0), e.sort(A), l) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return c = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += o(t);
                return n
            }, (x = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: Z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = f[e + " "];
                        return t || (t = new RegExp("(^|" + D + ")" + e + "(" + D + "|$)")) && f(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(U, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, m) {
                        var v = "nth" !== h.slice(0, 3),
                            b = "last" !== h.slice(-4),
                            y = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, c, l = v !== b ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = y && e.nodeName.toLowerCase(),
                                f = !n && !y,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; l;) {
                                        for (a = e; a = a[l];)
                                            if (y ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        c = l = "only" === h && !c && "nextSibling"
                                    }
                                    return !0
                                }
                                if (c = [b ? u.firstChild : u.lastChild], b && f) {
                                    for (p = (s = (r = (i = (o = (a = u)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && u.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || c.pop();)
                                        if (1 === a.nodeType && ++p && a === e) {
                                            i[h] = [k, s, p];
                                            break
                                        }
                                } else if (f && (p = s = (r = (i = (o = (a = e)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === p)
                                    for (;
                                        (a = ++s && a && a[l] || (p = s = 0) || c.pop()) && ((y ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, p]), a !== e)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            for (var n, r = a(e, o), i = r.length; i--;) e[n = q(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = d(e.replace(z, "$1"));
                        return s[N] ? le(function(e, t, n, r) {
                            for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return K.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return X.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = pe(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = he(e);

        function be() {}

        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function xe(s, e, t) {
            var c = e.dir,
                l = e.next,
                u = l || c,
                d = t && "parentNode" === u,
                f = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[c];)
                    if (1 === e.nodeType || d) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, f];
                if (n) {
                    for (; e = e[c];)
                        if ((1 === e.nodeType || d) && s(e, t, n)) return !0
                } else
                    for (; e = e[c];)
                        if (1 === e.nodeType || d)
                            if (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[c] || e;
                            else {
                                if ((r = i[u]) && r[0] === k && r[1] === f) return a[2] = r[2];
                                if ((i[u] = a)[2] = s(e, t, n)) return !0
                            }
                return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--;)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Se(e, t, n, r, i) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function _e(p, h, g, m, v, e) {
            return m && !m[N] && (m = _e(m)), v && !v[N] && (v = _e(v, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    c = [],
                    l = t.length,
                    u = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? u : Se(u, s, p, n, r),
                    f = g ? v || (e ? p : l || m) ? [] : t : d;
                if (g && g(d, f, n, r), m)
                    for (i = Se(f, c), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[c[o]] = !(d[c[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
                            v(null, f = [], i, r)
                        }
                        for (o = f.length; o--;)(a = f[o]) && -1 < (i = v ? q(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else f = Se(f === t ? f.splice(l, f.length) : f), v ? v(null, t, f, r) : H.apply(t, f)
            })
        }

        function Ce(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = xe(function(e) {
                    return e === i
                }, a, !0), l = xe(function(e) {
                    return -1 < q(i, e)
                }, a, !0), u = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? c(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = x.relative[e[s].type]) u = [xe(we(u), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[N]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++);
                        return _e(1 < s && we(u), 1 < s && ye(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(z, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && ye(e))
                    }
                    u.push(t)
                }
            return we(u)
        }
        return be.prototype = x.filters = x.pseudos, x.setFilters = new be, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, c, l = y[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], c = x.preFilter; a;) {
                for (o in n && !(r = P.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), a = a.slice(n.length)), x.filter) !(r = Z[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : y(e, s).slice(0)
        }, d = se.compile = function(e, t) {
            var n, m, v, b, y, r, i = [],
                o = [],
                a = T[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;)(a = Ce(t[n]))[N] ? i.push(a) : o.push(a);
                (a = T(e, (m = o, b = 0 < (v = i).length, y = 0 < m.length, r = function(e, t, n, r, i) {
                    var o, a, s, c = 0,
                        l = "0",
                        u = e && [],
                        d = [],
                        f = w,
                        p = e || y && x.find.TAG("*", i),
                        h = k += null == f ? 1 : Math.random() || .1,
                        g = p.length;
                    for (i && (w = t === _ || t || i); l !== g && null != (o = p[l]); l++) {
                        if (y && o) {
                            for (a = 0, t || o.ownerDocument === _ || (S(o), n = !C); s = m[a++];)
                                if (s(o, t || _, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        b && ((o = !s && o) && c--, e && u.push(o))
                    }
                    if (c += l, b && l !== c) {
                        for (a = 0; s = v[a++];) s(u, d, t, n);
                        if (e) {
                            if (0 < c)
                                for (; l--;) u[l] || d[l] || (d[l] = I.call(r));
                            d = Se(d)
                        }
                        H.apply(r, d), i && !e && 0 < d.length && 1 < c + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = f), u
                }, b ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, c, l = "function" == typeof e && e,
                u = !r && h(e = l.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Z.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);)
                    if ((c = x.find[s]) && (r = c(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ye(o))) return H.apply(n, r), n;
                        break
                    }
            }
            return (l || d(e, u))(r, t, !C, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, p.sortStable = N.split("").sort(A).join("") === N, p.detectDuplicates = !!l, S(), p.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(_.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), p.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(B, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(_);
    N.find = h, N.expr = h.selectors, N.expr[":"] = N.expr.pseudos, N.uniqueSort = N.unique = h.uniqueSort, N.text = h.getText, N.isXMLDoc = h.isXML, N.contains = h.contains, N.escapeSelector = h.escape;
    var S = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && N(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        k = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        T = N.expr.match.needsContext;

    function E(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return b(n) ? N.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? N.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? N.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : N.filter(n, e, r)
    }
    N.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? N.find.matchesSelector(r, e) ? [r] : [] : N.find.matches(e, N.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, N.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(N(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (N.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) N.find(e, i[t], n);
            return 1 < r ? N.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && T.test(e) ? N(e) : e || [], !1).length
        }
    });
    var I, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (N.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || I, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(N) : N.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof N ? t[0] : t, N.merge(this, N.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), A.test(r[1]) && N.isPlainObject(t))
                for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = N.fn, I = N(C);
    var H = /^(?:parents|prev(?:Until|All))/,
        M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function q(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    N.fn.extend({
        has: function(e) {
            var t = N(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (N.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && N(e);
            if (!T.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && N.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? N.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(N(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(N.uniqueSort(N.merge(this.get(), N(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), N.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return S(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return S(e, "parentNode", n)
        },
        next: function(e) {
            return q(e, "nextSibling")
        },
        prev: function(e) {
            return q(e, "previousSibling")
        },
        nextAll: function(e) {
            return S(e, "nextSibling")
        },
        prevAll: function(e) {
            return S(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return S(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return S(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (E(e, "template") && (e = e.content || e), N.merge([], e.childNodes))
        }
    }, function(r, i) {
        N.fn[r] = function(e, t) {
            var n = N.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = N.filter(t, n)), 1 < this.length && (M[r] || N.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var B = /[^\x20\t\r\n\f]+/g;

    function D(e) {
        return e
    }

    function R(e) {
        throw e
    }

    function O(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    N.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, N.each(e.match(B) || [], function(e, t) {
            n[t] = !0
        }), n) : N.extend({}, r);
        var i, t, o, a, s = [],
            c = [],
            l = -1,
            u = function() {
                for (a = a || r.once, o = i = !0; c.length; l = -1)
                    for (t = c.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            d = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, c.push(t)), function n(e) {
                        N.each(e, function(e, t) {
                            b(t) ? r.unique && d.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && u()), this
                },
                remove: function() {
                    return N.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = N.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < N.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = c = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = c = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), i || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, N.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", N.Callbacks("memory"), N.Callbacks("memory"), 2],
                    ["resolve", "done", N.Callbacks("once memory"), N.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", N.Callbacks("once memory"), N.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return N.Deferred(function(r) {
                            N.each(o, function(e, t) {
                                var n = b(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var c = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < c)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, l(c, o, D, s), l(c, o, R, s)) : (c++, t.call(e, l(c, o, D, s), l(c, o, R, s), l(c, o, D, o.notifyWith))) : (a !== D && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            N.Deferred.exceptionHook && N.Deferred.exceptionHook(e, t.stackTrace), c <= i + 1 && (a !== R && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (N.Deferred.getStackHook && (t.stackTrace = N.Deferred.getStackHook()), _.setTimeout(t))
                            }
                        }
                        return N.Deferred(function(e) {
                            o[0][3].add(l(0, e, b(r) ? r : D, e.notifyWith)), o[1][3].add(l(0, e, b(t) ? t : D)), o[2][3].add(l(0, e, b(n) ? n : R))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? N.extend(e, a) : a
                    }
                },
                s = {};
            return N.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = N.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (O(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || b(i[t] && i[t].then))) return o.then();
            for (; t--;) O(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    N.Deferred.exceptionHook = function(e, t) {
        _.console && _.console.warn && e && $.test(e.name) && _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, N.readyException = function(e) {
        _.setTimeout(function() {
            throw e
        })
    };
    var U = N.Deferred();

    function z() {
        C.removeEventListener("DOMContentLoaded", z), _.removeEventListener("load", z), N.ready()
    }
    N.fn.ready = function(e) {
        return U.then(e).catch(function(e) {
            N.readyException(e)
        }), this
    }, N.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --N.readyWait : N.isReady) || (N.isReady = !0) !== e && 0 < --N.readyWait || U.resolveWith(C, [N])
        }
    }), N.ready.then = U.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? _.setTimeout(N.ready) : (C.addEventListener("DOMContentLoaded", z), _.addEventListener("load", z));
    var P = function(e, t, n, r, i, o, a) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) P(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, b(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                    return l.call(N(e), n)
                })), t))
                for (; s < c; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
        },
        W = /^-ms-/,
        F = /-([a-z])/g;

    function Q(e, t) {
        return t.toUpperCase()
    }

    function K(e) {
        return e.replace(W, "ms-").replace(F, Q)
    }
    var Z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function V() {
        this.expando = N.expando + V.uid++
    }
    V.uid = 1, V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[K(t)] = n;
            else
                for (r in t) i[K(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in r ? [t] : t.match(B) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || N.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !N.isEmptyObject(t)
        }
    };
    var X = new V,
        J = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(G, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Y.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    N.extend({
        hasData: function(e) {
            return J.hasData(e) || X.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return X.access(e, t, n)
        },
        _removeData: function(e, t) {
            X.remove(e, t)
        }
    }), N.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : P(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = J.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = K(r.slice(5)), ee(o, r, i[r]));
                X.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), N.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, N.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = N.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = N._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                N.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: N.Callbacks("once memory").add(function() {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), N.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? N.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = N.queue(this, t, n);
                N._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && N.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                N.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = N.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = C.documentElement,
        oe = function(e) {
            return N.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return N.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === N.css(e, "display")
        },
        ce = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return N.css(e, t, "")
            },
            c = s(),
            l = n && n[3] || (N.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (N.cssNumber[t] || "px" !== l && +c) && ne.exec(N.css(e, t));
        if (u && u[3] !== l) {
            for (c /= 2, l = l || u[3], u = +c || 1; a--;) N.style(e, t, u + l), (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, N.style(e, t, u + l), n = n || []
        }
        return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
    }
    var ue = {};

    function de(e, t) {
        for (var n, r, i, o, a, s, c, l = [], u = 0, d = e.length; u < d; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (l[u] = X.get(r, "display") || null, l[u] || (r.style.display = "")), "" === r.style.display && se(r) && (l[u] = (c = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (c = ue[s]) || (o = a.body.appendChild(a.createElement(s)), c = N.css(o, "display"), o.parentNode.removeChild(o), "none" === c && (c = "block"), ue[s] = c)))) : "none" !== n && (l[u] = "none", X.set(r, "display", n)));
        for (u = 0; u < d; u++) null != l[u] && (e[u].style.display = l[u]);
        return e
    }
    N.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? N(this).show() : N(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? N.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var be, ye, xe = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o)) N.merge(f, o.nodeType ? [o] : o);
                else if (xe.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), c = ge[s] || ge._default, a.innerHTML = c[1] + N.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
            N.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", p = 0; o = f[p++];)
            if (r && -1 < N.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = me(d.appendChild(o), "script"), l && ve(a), n)
            for (u = 0; o = a[u++];) he.test(o.type || "") && n.push(o);
        return d
    }
    be = C.createDocumentFragment().appendChild(C.createElement("div")), (ye = C.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), be.appendChild(ye), v.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ne() {
        return !0
    }

    function ke() {
        return !1
    }

    function Te(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return N().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = N.guid++)), e.each(function() {
            N.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (X.set(e, i, !1), N.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = X.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(N.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), X.set(this, i, r), t = o(this, i), this[i](), r !== (n = X.get(this, i)) || t ? X.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (X.set(this, i, {
                    value: N.event.trigger(N.extend(r[0], N.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === X.get(e, i) && N.event.add(e, i, Ne)
    }
    N.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, g, m = X.get(t);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && N.find.matchesSelector(ie, i), n.guid || (n.guid = N.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== N && N.event.triggered !== e.type ? N.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(B) || [""]).length; l--;) p = g = (s = Ce.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = N.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = N.event.special[p] || {}, u = N.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && N.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), N.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, c, l, u, d, f, p, h, g, m = X.hasData(e) && X.get(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(B) || [""]).length; l--;)
                    if (p = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = N.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || N.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) N.event.remove(e, p + t[l], n, r, !0);
                N.isEmptyObject(c) && X.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = N.event.fix(e),
                c = new Array(arguments.length),
                l = (X.get(this, "events") || {})[s.type] || [],
                u = N.event.special[s.type] || {};
            for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = N.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((N.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                c = t.delegateCount,
                l = e.target;
            if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < N(i, this).index(l) : N.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, c < t.length && s.push({
                elem: l,
                handlers: t.slice(c)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(N.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[N.expando] ? e : new N.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && E(t, "input") && Ae(t, "click", Ne), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && E(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && E(t, "input") && X.get(t, "click") || E(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, N.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, N.Event = function(e, t) {
        if (!(this instanceof N.Event)) return new N.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && N.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[N.expando] = !0
    }, N.Event.prototype = {
        constructor: N.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, N.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, N.event.addProp), N.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        N.event.special[e] = {
            setup: function() {
                return Ae(this, e, Te), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), N.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        N.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || N.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), N.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, N(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                N.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Me(e, t) {
        return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && N(e).children("tbody")[0] || e
    }

    function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Be(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function De(e, t) {
        var n, r, i, o, a, s, c, l;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) N.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), c = N.extend({}, s), J.set(t, c))
        }
    }

    function Re(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, c, l, u = 0,
            d = n.length,
            f = d - 1,
            p = r[0],
            h = b(p);
        if (h || 1 < d && "string" == typeof p && !v.checkClone && Le.test(p)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), Re(t, r, i, o)
        });
        if (d && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = N.map(me(e, "script"), qe)).length; u < d; u++) c = e, u !== f && (c = N.clone(c, !0, !0), s && N.merge(a, me(c, "script"))), i.call(n[u], c, u);
            if (s)
                for (l = a[a.length - 1].ownerDocument, N.map(a, Be), u = 0; u < s; u++) c = a[u], he.test(c.type || "") && !X.access(c, "globalEval") && N.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? N._evalUrl && !c.noModule && N._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : x(c.textContent.replace(He, ""), c, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? N.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || N.cleanData(me(r)), r.parentNode && (n && oe(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    N.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, c, l, u = e.cloneNode(!0),
                d = oe(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || N.isXMLDoc(e)))
                for (a = me(u), r = 0, i = (o = me(e)).length; r < i; r++) s = o[r], "input" === (l = (c = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || me(e), a = a || me(u), r = 0, i = o.length; r < i; r++) De(o[r], a[r]);
                else De(e, u);
            return 0 < (a = me(u, "script")).length && ve(a, !d && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = N.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Z(n)) {
                    if (t = n[X.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? N.event.remove(n, r) : N.removeEvent(n, r, t.handle);
                        n[X.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), N.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return P(this, function(e) {
                return void 0 === e ? N.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (N.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return N.clone(this, e, t)
            })
        },
        html: function(e) {
            return P(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = N.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (N.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                N.inArray(this, n) < 0 && (N.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), N.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        N.fn[e] = function(e) {
            for (var t, n = [], r = N(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), N(r[o])[a](t), c.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ue = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = _), t.getComputedStyle(e)
        },
        ze = new RegExp(re.join("|"), "i");

    function Pe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = N.style(e, t)), !v.pixelBoxStyles() && $e.test(a) && ze.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function We(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (c) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(c);
                var e = _.getComputedStyle(c);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), c.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), ie.removeChild(s), c = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = C.createElement("div"),
            c = C.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, N.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Fe = ["Webkit", "Moz", "ms"],
        Qe = C.createElement("div").style,
        Ke = {};

    function Ze(e) {
        return N.cssProps[e] || Ke[e] || (e in Qe ? e : Ke[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;)
                if ((e = Fe[n] + t) in Qe) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ye = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ge(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            c = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (c += N.css(e, n + re[a], !0, i)), r ? ("content" === n && (c -= N.css(e, "padding" + re[a], !0, i)), "margin" !== n && (c -= N.css(e, "border" + re[a] + "Width", !0, i))) : (c += N.css(e, "padding" + re[a], !0, i), "padding" !== n ? c += N.css(e, "border" + re[a] + "Width", !0, i) : s += N.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5)) || 0), c
    }

    function tt(e, t, n) {
        var r = Ue(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === N.css(e, "boxSizing", !1, r),
            o = i,
            a = Pe(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === N.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === N.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    N.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Pe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K(t),
                    c = Xe.test(t),
                    l = e.style;
                if (c || (t = Ze(s)), a = N.cssHooks[t] || N.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || c || (n += i && i[3] || (N.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = K(t);
            return Xe.test(t) || (t = Ze(s)), (a = N.cssHooks[t] || N.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Pe(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), N.each(["height", "width"], function(e, c) {
        N.cssHooks[c] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(N.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, c, n) : ce(e, Je, function() {
                    return tt(e, c, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Ue(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === N.css(e, "boxSizing", !1, i),
                    s = n ? et(e, c, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + c[0].toUpperCase() + c.slice(1)] - parseFloat(i[c]) - et(e, c, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[c] = t, t = N.css(e, c)), Ge(0, t, s)
            }
        }
    }), N.cssHooks.marginLeft = We(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Pe(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), N.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        N.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (N.cssHooks[i + o].set = Ge)
    }), N.fn.extend({
        css: function(e, t) {
            return P(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = N.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? N.style(e, t, n) : N.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((N.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || N.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (N.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = N.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = N.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                N.fx.step[e.prop] ? N.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !N.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : N.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, N.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, N.fx = nt.prototype.init, N.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function lt() {
        it && (!1 === C.hidden && _.requestAnimationFrame ? _.requestAnimationFrame(lt) : _.setTimeout(lt, N.fx.interval), N.fx.tick())
    }

    function ut() {
        return _.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function dt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ft(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function pt(o, e, t) {
        var n, a, r = 0,
            i = pt.prefilters.length,
            s = N.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (a) return !1;
                for (var e = rt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: N.extend({}, e),
                opts: N.extend(!0, {
                    specialEasing: {},
                    easing: N.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = N.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            u = l.props;
        for (function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = K(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = N.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(u, l.opts.specialEasing); r < i; r++)
            if (n = pt.prefilters[r].call(l, o, u, l.opts)) return b(n.stop) && (N._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return N.map(u, ft, l), b(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), N.fx.timer(N.extend(c, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    N.Animation = N.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = b(e) ? (t = e, ["*"]) : e.match(B)).length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, c, l, u, d = "width" in t || "height" in t,
                f = this,
                p = {},
                h = e.style,
                g = e.nodeType && se(e),
                m = X.get(e, "fxshow");
            for (r in n.queue || (null == (a = N._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, N.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[r]) continue;
                        g = !0
                    }
                    p[r] = m && m[r] || N.style(e, r)
                }
            if ((c = !N.isEmptyObject(t)) || !N.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = X.get(e, "display")), "none" === (u = N.css(e, "display")) && (l ? u = l : (de([e], !0), l = e.style.display || l, u = N.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === N.css(e, "float") && (c || (f.done(function() {
                        h.display = l
                    }), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), c = !1, p) c || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                    display: l
                }), o && (m.hidden = !g), g && de([e], !0), f.done(function() {
                    for (r in g || de([e]), X.remove(e, "fxshow"), p) N.style(e, r, p[r])
                })), c = ft(g ? m[r] : 0, r, f), r in m || (m[r] = c.start, g && (c.end = c.start, c.start = 0))
        }],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), N.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? N.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return N.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in N.fx.speeds ? r.duration = N.fx.speeds[r.duration] : r.duration = N.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            b(r.old) && r.old.call(this), r.queue && N.dequeue(this, r.queue)
        }, r
    }, N.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = N.isEmptyObject(t),
                o = N.speed(e, n, r),
                a = function() {
                    var e = pt(this, N.extend({}, t), o);
                    (i || X.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = N.timers,
                    r = X.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ct.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || N.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = X.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = N.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, N.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), N.each(["toggle", "show", "hide"], function(e, r) {
        var i = N.fn[r];
        N.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(r, !0), e, t, n)
        }
    }), N.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        N.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), N.timers = [], N.fx.tick = function() {
        var e, t = 0,
            n = N.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || N.fx.stop(), rt = void 0
    }, N.fx.timer = function(e) {
        N.timers.push(e), N.fx.start()
    }, N.fx.interval = 13, N.fx.start = function() {
        it || (it = !0, lt())
    }, N.fx.stop = function() {
        it = null
    }, N.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, N.fn.delay = function(r, e) {
        return r = N.fx && N.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = _.setTimeout(e, r);
            t.stop = function() {
                _.clearTimeout(n)
            }
        })
    }, ot = C.createElement("input"), at = C.createElement("select").appendChild(C.createElement("option")), ot.type = "checkbox", v.checkOn = "" !== ot.value, v.optSelected = at.selected, (ot = C.createElement("input")).value = "t", ot.type = "radio", v.radioValue = "t" === ot.value;
    var ht, gt = N.expr.attrHandle;
    N.fn.extend({
        attr: function(e, t) {
            return P(this, N.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                N.removeAttr(this, e)
            })
        }
    }), N.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? N.prop(e, t, n) : (1 === o && N.isXMLDoc(e) || (i = N.attrHooks[t.toLowerCase()] || (N.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void N.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = N.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && E(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(B);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? N.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, N.each(N.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || N.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function bt(e) {
        return (e.match(B) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(B) || []
    }
    N.fn.extend({
        prop: function(e, t) {
            return P(this, N.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[N.propFix[e] || e]
            })
        }
    }), N.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && N.isXMLDoc(e) || (t = N.propFix[t] || t, i = N.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = N.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.optSelected || (N.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), N.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        N.propFix[this.toLowerCase()] = this
    }), N.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (b(t)) return this.each(function(e) {
                N(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = xt(t)).length)
                for (; n = this[c++];)
                    if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, c = 0;
            if (b(t)) return this.each(function(e) {
                N(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xt(t)).length)
                for (; n = this[c++];)
                    if (i = yt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        i !== (s = bt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                N(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = N(this), r = xt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== o || ((e = yt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : X.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && -1 < (" " + bt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    N.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, N(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = N.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = N.valHooks[this.type] || N.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = N.valHooks[t.type] || N.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), N.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = N.find.attr(e, "value");
                    return null != t ? t : bt(N.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        c = a ? o + 1 : i.length;
                    for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                            if (t = N(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = N.makeArray(t), a = i.length; a--;)((r = i[a]).selected = -1 < N.inArray(N.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), N.each(["radio", "checkbox"], function() {
        N.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < N.inArray(N(e).val(), t)
            }
        }, v.checkOn || (N.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in _;
    var St = /^(?:focusinfocus|focusoutblur)$/,
        _t = function(e) {
            e.stopPropagation()
        };
    N.extend(N.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, c, l, u, d, f = [n || C],
                p = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !St.test(p + N.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, (e = e[N.expando] ? e : new N.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : N.makeArray(t, [e]), u = N.event.special[p] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !y(n)) {
                    for (s = u.delegateType || p, St.test(s + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || C) && f.push(a.defaultView || a.parentWindow || _)
                }
                for (i = 0;
                    (o = f[i++]) && !e.isPropagationStopped();) d = o, e.type = 1 < i ? s : u.bindType || p, (l = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && l.apply(o, t), (l = c && o[c]) && l.apply && Z(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !Z(n) || c && b(n[p]) && !y(n) && ((a = n[c]) && (n[c] = null), N.event.triggered = p, e.isPropagationStopped() && d.addEventListener(p, _t), n[p](), e.isPropagationStopped() && d.removeEventListener(p, _t), N.event.triggered = void 0, a && (n[c] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = N.extend(new N.Event, n, {
                type: e,
                isSimulated: !0
            });
            N.event.trigger(r, null, t)
        }
    }), N.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                N.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return N.event.trigger(e, t, n, !0)
        }
    }), v.focusin || N.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            N.event.simulate(r, e.target, N.event.fix(e))
        };
        N.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, r);
                t || e.addEventListener(n, i, !0), X.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = X.access(e, r) - 1;
                t ? X.access(e, r, t) : (e.removeEventListener(n, i, !0), X.remove(e, r))
            }
        }
    });
    var Ct = _.location,
        Nt = Date.now(),
        kt = /\?/;
    N.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new _.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || N.error("Invalid XML: " + e), t
    };
    var Tt = /\[\]$/,
        Et = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function It(n, e, r, i) {
        var t;
        if (Array.isArray(e)) N.each(e, function(e, t) {
            r || Tt.test(n) ? i(n, t) : It(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) It(n + "[" + t + "]", e[t], r, i)
    }
    N.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = b(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !N.isPlainObject(e)) N.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, i);
        return r.join("&")
    }, N.fn.extend({
        serialize: function() {
            return N.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = N.prop(this, "elements");
                return e ? N.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !N(this).is(":disabled") && jt.test(this.nodeName) && !At.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = N(this).val();
                return null == n ? null : Array.isArray(n) ? N.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:GET|HEAD)$/,
        Dt = /^\/\//,
        Rt = {},
        Ot = {},
        $t = "*/".concat("*"),
        Ut = C.createElement("a");

    function zt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(B) || [];
            if (b(t))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Pt(t, i, o, a) {
        var s = {},
            c = t === Ot;

        function l(e) {
            var r;
            return s[e] = !0, N.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || c || s[n] ? c ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Wt(e, t) {
        var n, r, i = N.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && N.extend(!0, e, r), e
    }
    Ut.href = Ct.href, N.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": N.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, N.ajaxSettings), t) : Wt(N.ajaxSettings, e)
        },
        ajaxPrefilter: zt(Rt),
        ajaxTransport: zt(Ot),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, f, n, p, r, h, g, i, o, m = N.ajaxSetup({}, t),
                v = m.context || m,
                b = m.context && (v.nodeType || v.jquery) ? N(v) : N.event,
                y = N.Deferred(),
                x = N.Callbacks("once memory"),
                w = m.statusCode || {},
                a = {},
                s = {},
                c = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n)
                                for (n = {}; t = qt.exec(f);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? f : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) S.always(e[S.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || c;
                        return u && u.abort(t), l(0, t), this
                    }
                };
            if (y.promise(S), m.url = ((e || m.url || Ct.href) + "").replace(Dt, Ct.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(B) || [""], null == m.crossDomain) {
                r = C.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = N.param(m.data, m.traditional)), Pt(Rt, m, t, S), h) return S;
            for (i in (g = N.event && m.global) && 0 == N.active++ && N.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Bt.test(m.type), d = m.url.replace(Ht, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Lt, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (kt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Mt, "$1"), o = (kt.test(d) ? "&" : "?") + "_=" + Nt++ + o), m.url = d + o), m.ifModified && (N.lastModified[d] && S.setRequestHeader("If-Modified-Since", N.lastModified[d]), N.etag[d] && S.setRequestHeader("If-None-Match", N.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && S.setRequestHeader("Content-Type", m.contentType), S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : m.accepts["*"]), m.headers) S.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, S, m) || h)) return S.abort();
            if (c = "abort", x.add(m.complete), S.done(m.success), S.fail(m.error), u = Pt(Ot, m, t, S)) {
                if (S.readyState = 1, g && b.trigger("ajaxSend", [S, m]), h) return S;
                m.async && 0 < m.timeout && (p = _.setTimeout(function() {
                    S.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, c, l = t;
                h || (h = !0, p && _.clearTimeout(p), u = void 0, f = r || "", S.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, c = e.dataTypes;
                        "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                c.unshift(i);
                                break
                            }
                    if (c[0] in n) o = c[0];
                    else {
                        for (i in n) {
                            if (!c[0] || e.converters[i + " " + c[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== c[0] && c.unshift(o), n[o]
                }(m, S, n)), s = function(e, t, n, r) {
                    var i, o, a, s, c, l = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                            if ("*" === o) o = c;
                            else if ("*" !== c && c !== o) {
                        if (!(a = l[c + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], u.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + c + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, S, i), i ? (m.ifModified && ((c = S.getResponseHeader("Last-Modified")) && (N.lastModified[d] = c), (c = S.getResponseHeader("etag")) && (N.etag[d] = c)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || l) + "", i ? y.resolveWith(v, [o, l, S]) : y.rejectWith(v, [S, l, a]), S.statusCode(w), w = void 0, g && b.trigger(i ? "ajaxSuccess" : "ajaxError", [S, m, i ? o : a]), x.fireWith(v, [S, l]), g && (b.trigger("ajaxComplete", [S, m]), --N.active || N.event.trigger("ajaxStop")))
            }
            return S
        },
        getJSON: function(e, t, n) {
            return N.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return N.get(e, void 0, t, "script")
        }
    }), N.each(["get", "post"], function(e, i) {
        N[i] = function(e, t, n, r) {
            return b(t) && (r = r || n, n = t, t = void 0), N.ajax(N.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, N.isPlainObject(e) && e))
        }
    }), N._evalUrl = function(e, t) {
        return N.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                N.globalEval(e, t)
            }
        })
    }, N.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = N(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                N(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = N(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                N(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                N(this).replaceWith(this.childNodes)
            }), this
        }
    }), N.expr.pseudos.hidden = function(e) {
        return !N.expr.pseudos.visible(e)
    }, N.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, N.ajaxSettings.xhr = function() {
        try {
            return new _.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Qt = N.ajaxSettings.xhr();
    v.cors = !!Qt && "withCredentials" in Qt, v.ajax = Qt = !!Qt, N.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || Qt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ft[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && _.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), N.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), N.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return N.globalEval(e), e
            }
        }
    }), N.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), N.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = N("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Kt, Zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    N.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Zt.pop() || N.expando + "_" + Nt++;
            return this[e] = !0, e
        }
    }), N.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || N.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = _[r], _[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? N(_).removeProp(r) : _[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Zt.push(r)), o && b(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Kt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Kt.childNodes.length), N.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = A.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && N(o).remove(), N.merge([], i.childNodes)));
        var r, i, o
    }, N.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = bt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && N.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? N("<div>").append(N.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, N.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        N.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), N.expr.pseudos.animated = function(t) {
        return N.grep(N.timers, function(e) {
            return t === e.elem
        }).length
    }, N.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, c, l = N.css(e, "position"),
                u = N(e),
                d = {};
            "static" === l && (e.style.position = "relative"), s = u.offset(), o = N.css(e, "top"), c = N.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + c).indexOf("auto") ? (a = (r = u.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(c) || 0), b(t) && (t = t.call(e, n, N.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, N.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                N.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === N.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === N.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = N(e).offset()).top += N.css(e, "borderTopWidth", !0), i.left += N.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - N.css(r, "marginTop", !0),
                    left: t.left - i.left - N.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === N.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), N.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        N.fn[t] = function(e) {
            return P(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), N.each(["top", "left"], function(e, n) {
        N.cssHooks[n] = We(v.pixelPosition, function(e, t) {
            if (t) return t = Pe(e, n), $e.test(t) ? N(e).position()[n] + "px" : t
        })
    }), N.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        N.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            N.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return P(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? N.css(e, t, i) : N.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), N.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        N.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), N.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), N.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), N.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || N.guid++, i
    }, N.holdReady = function(e) {
        e ? N.readyWait++ : N.ready(!0)
    }, N.isArray = Array.isArray, N.parseJSON = JSON.parse, N.nodeName = E, N.isFunction = b, N.isWindow = y, N.camelCase = K, N.type = w, N.now = Date.now, N.isNumeric = function(e) {
        var t = N.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return N
    });
    var Xt = _.jQuery,
        Jt = _.$;
    return N.noConflict = function(e) {
        return _.$ === N && (_.$ = Jt), e && _.jQuery === N && (_.jQuery = Xt), N
    }, e || (_.jQuery = _.$ = N), N
}),
function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return window.hljs
    }))
}(function(i) {
    function b(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function p(e) {
        return e.nodeName.toLowerCase()
    }

    function y(e, t) {
        var n = e && e.exec(t);
        return n && 0 == n.index
    }

    function x(e, t) {
        var n, r = {};
        for (n in e) r[n] = e[n];
        if (t)
            for (n in t) r[n] = t[n];
        return r
    }

    function h(e) {
        var i = [];
        return function e(t, n) {
            for (var r = t.firstChild; r; r = r.nextSibling) 3 == r.nodeType ? n += r.nodeValue.length : 1 == r.nodeType && (i.push({
                event: "start",
                offset: n,
                node: r
            }), n = e(r, n), p(r).match(/br|hr|img|input/) || i.push({
                event: "stop",
                offset: n,
                node: r
            }));
            return n
        }(e, 0), i
    }

    function w(e, t, s, n) {
        function c(e, t, n, r) {
            var i = '<span class="' + (r ? "" : C.classPrefix);
            return (i += e + '">') + t + (n ? "" : "</span>")
        }

        function l() {
            return void 0 !== f.sL ? function() {
                if (f.sL && !N[f.sL]) return b(h);
                var e = f.sL ? w(f.sL, h, !0, o[f.sL]) : S(h);
                return 0 < f.r && (g += e.r), "continuous" == f.subLanguageMode && (o[f.sL] = e.top), c(e.language, e.value, !1, !0)
            }() : function() {
                if (!f.k) return b(h);
                var e, t, n, r = "",
                    i = 0;
                f.lR.lastIndex = 0;
                for (var o = f.lR.exec(h); o;) {
                    r += b(h.substr(i, o.index - i));
                    var a = (e = f, t = o, n = d.cI ? t[0].toLowerCase() : t[0], e.k.hasOwnProperty(n) && e.k[n]);
                    a ? (g += a[1], r += c(a[0], b(o[0]))) : r += b(o[0]), i = f.lR.lastIndex, o = f.lR.exec(h)
                }
                return r + b(h.substr(i))
            }()
        }

        function u(e, t) {
            var n = e.cN ? c(e.cN, "", !0) : "";
            h = e.rB ? (p += n, "") : e.eB ? (p += b(t) + n, "") : (p += n, t), f = Object.create(e, {
                parent: {
                    value: f
                }
            })
        }

        function r(e, t) {
            if (h += e, void 0 === t) return p += l(), 0;
            var n = function(e, t) {
                for (var n = 0; n < t.c.length; n++)
                    if (y(t.c[n].bR, e)) return t.c[n]
            }(t, f);
            if (n) return p += l(), u(n, t), n.rB ? 0 : t.length;
            var r, i, o = function e(t, n) {
                if (y(t.eR, n)) {
                    for (; t.endsParent && t.parent;) t = t.parent;
                    return t
                }
                return t.eW ? e(t.parent, n) : void 0
            }(f, t);
            if (o) {
                var a = f;
                for (a.rE || a.eE || (h += t), p += l(); f.cN && (p += "</span>"), g += f.r, (f = f.parent) != o.parent;);
                return a.eE && (p += b(t)), h = "", o.starts && u(o.starts, ""), a.rE ? 0 : t.length
            }
            if (r = t, i = f, !s && y(i.iR, r)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (f.cN || "<unnamed>") + '"');
            return h += t, t.length || 1
        }
        var d = _(e);
        if (!d) throw new Error('Unknown language: "' + e + '"');
        ! function(s) {
            function c(e) {
                return e && e.source || e
            }

            function l(e, t) {
                return new RegExp(c(e), "m" + (s.cI ? "i" : "") + (t ? "g" : ""))
            }! function t(n, e) {
                if (!n.compiled) {
                    if (n.compiled = !0, n.k = n.k || n.bK, n.k) {
                        var r = {},
                            i = function(n, e) {
                                s.cI && (e = e.toLowerCase()), e.split(" ").forEach(function(e) {
                                    var t = e.split("|");
                                    r[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                                })
                            };
                        "string" == typeof n.k ? i("keyword", n.k) : Object.keys(n.k).forEach(function(e) {
                            i(e, n.k[e])
                        }), n.k = r
                    }
                    n.lR = l(n.l || /\b\w+\b/, !0), e && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"), n.b || (n.b = /\B|\b/), n.bR = l(n.b), n.e || n.eW || (n.e = /\B|\b/), n.e && (n.eR = l(n.e)), n.tE = c(n.e) || "", n.eW && e.tE && (n.tE += (n.e ? "|" : "") + e.tE)), n.i && (n.iR = l(n.i)), void 0 === n.r && (n.r = 1), n.c || (n.c = []);
                    var o = [];
                    n.c.forEach(function(t) {
                        t.v ? t.v.forEach(function(e) {
                            o.push(x(t, e))
                        }) : o.push("self" == t ? n : t)
                    }), n.c = o, n.c.forEach(function(e) {
                        t(e, n)
                    }), n.starts && t(n.starts, e);
                    var a = n.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([n.tE, n.i]).map(c).filter(Boolean);
                    n.t = a.length ? l(a.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }(s)
        }(d);
        var i, f = n || d,
            o = {},
            p = "";
        for (i = f; i != d; i = i.parent) i.cN && (p = c(i.cN, "", !0) + p);
        var h = "",
            g = 0;
        try {
            for (var a, m, v = 0; f.t.lastIndex = v, a = f.t.exec(t);) m = r(t.substr(v, a.index - v), a[0]), v = a.index + m;
            for (r(t.substr(v)), i = f; i.parent; i = i.parent) i.cN && (p += "</span>");
            return {
                r: g,
                value: p,
                language: e,
                top: f
            }
        } catch (e) {
            if (-1 != e.message.indexOf("Illegal")) return {
                r: 0,
                value: b(t)
            };
            throw e
        }
    }

    function S(n, e) {
        e = e || C.languages || Object.keys(N);
        var r = {
                r: 0,
                value: b(n)
            },
            i = r;
        return e.forEach(function(e) {
            if (_(e)) {
                var t = w(e, n, !1);
                t.language = e, t.r > i.r && (i = t), t.r > r.r && (i = r, r = t)
            }
        }), i.language && (r.second_best = i), r
    }

    function g(e) {
        return C.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
            return t.replace(/\t/g, C.tabReplace)
        })), C.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function t(e) {
        var t, n, r, i, o, a, s = ((t = e).className + " " + (t.parentNode ? t.parentNode.className : "")).split(/\s+/).map(function(e) {
            return e.replace(/^lang(uage)?-/, "")
        }).filter(function(e) {
            return _(e) || /no(-?)highlight|plain|text/.test(e)
        })[0];
        if (!/no(-?)highlight|plain|text/.test(s)) {
            var c;
            C.useBR ? (c = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : c = e;
            var l = c.textContent,
                u = s ? w(s, l, !0) : S(l),
                d = h(c);
            if (d.length) {
                var f = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                f.innerHTML = u.value, u.value = function(e, t, n) {
                    function r() {
                        return e.length && t.length ? e[0].offset != t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" == t[0].event ? e : t : e.length ? e : t
                    }

                    function i(e) {
                        c += "<" + p(e) + Array.prototype.map.call(e.attributes, function(e) {
                            return " " + e.nodeName + '="' + b(e.value) + '"'
                        }).join("") + ">"
                    }

                    function o(e) {
                        c += "</" + p(e) + ">"
                    }

                    function a(e) {
                        ("start" == e.event ? i : o)(e.node)
                    }
                    for (var s = 0, c = "", l = []; e.length || t.length;) {
                        var u = r();
                        if (c += b(n.substr(s, u[0].offset - s)), s = u[0].offset, u == e) {
                            for (l.reverse().forEach(o); a(u.splice(0, 1)[0]), (u = r()) == e && u.length && u[0].offset == s;);
                            l.reverse().forEach(i)
                        } else "start" == u[0].event ? l.push(u[0].node) : l.pop(), a(u.splice(0, 1)[0])
                    }
                    return c + b(n.substr(s))
                }(d, h(f), l)
            }
            u.value = g(u.value), e.innerHTML = u.value, e.className = (n = e.className, r = s, i = u.language, o = r ? m[r] : i, a = [n.trim()], n.match(/\bhljs\b/) || a.push("hljs"), -1 === n.indexOf(o) && a.push(o), a.join(" ").trim()), e.result = {
                language: u.language,
                re: u.r
            }, u.second_best && (e.second_best = {
                language: u.second_best.language,
                re: u.second_best.r
            })
        }
    }

    function n() {
        if (!n.called) {
            n.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, t)
        }
    }

    function _(e) {
        return N[e] || N[m[e]]
    }
    var C = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        N = {},
        m = {};
    return i.highlight = w, i.highlightAuto = S, i.fixMarkup = g, i.highlightBlock = t, i.configure = function(e) {
        C = x(C, e)
    }, i.initHighlighting = n, i.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", n, !1), addEventListener("load", n, !1)
    }, i.registerLanguage = function(t, e) {
        var n = N[t] = e(i);
        n.aliases && n.aliases.forEach(function(e) {
            m[e] = t
        })
    }, i.listLanguages = function() {
        return Object.keys(N)
    }, i.getLanguage = _, i.inherit = x, i.IR = "[a-zA-Z]\\w*", i.UIR = "[a-zA-Z_]\\w*", i.NR = "\\b\\d+(\\.\\d+)?", i.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", i.BNR = "\\b(0b[01]+)", i.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", i.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, i.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [i.BE]
    }, i.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [i.BE]
    }, i.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, i.C = function(e, t, n) {
        var r = i.inherit({
            cN: "comment",
            b: e,
            e: t,
            c: []
        }, n || {});
        return r.c.push(i.PWM), r
    }, i.CLCM = i.C("//", "$"), i.CBCM = i.C("/\\*", "\\*/"), i.HCM = i.C("#", "$"), i.NM = {
        cN: "number",
        b: i.NR,
        r: 0
    }, i.CNM = {
        cN: "number",
        b: i.CNR,
        r: 0
    }, i.BNM = {
        cN: "number",
        b: i.BNR,
        r: 0
    }, i.CSSNM = {
        cN: "number",
        b: i.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, i.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [i.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [i.BE]
        }]
    }, i.TM = {
        cN: "title",
        b: i.IR,
        r: 0
    }, i.UTM = {
        cN: "title",
        b: i.UIR,
        r: 0
    }, i
}), hljs.registerLanguage("apache", function(e) {
        var t = {
            cN: "number",
            b: "[\\$%]\\d+"
        };
        return {
            aliases: ["apacheconf"],
            cI: !0,
            c: [e.HCM, {
                cN: "tag",
                b: "</?",
                e: ">"
            }, {
                cN: "keyword",
                b: /\w+/,
                r: 0,
                k: {
                    common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    e: /$/,
                    r: 0,
                    k: {
                        literal: "on off all"
                    },
                    c: [{
                        cN: "sqbracket",
                        b: "\\s\\[",
                        e: "\\]$"
                    }, {
                        cN: "cbracket",
                        b: "[\\$%]\\{",
                        e: "\\}",
                        c: ["self", t]
                    }, t, e.QSM]
                }
            }],
            i: /\S/
        }
    }), hljs.registerLanguage("bash", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            n = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            };
        return {
            aliases: ["sh", "zsh"],
            l: /-?[a-z\.]+/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "shebang",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, e.NM, n, {
                cN: "string",
                b: /'/,
                e: /'/
            }, t]
        }
    }), hljs.registerLanguage("coffeescript", function(e) {
        var t = {
                keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
                literal: "true false null undefined yes no on off",
                reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
                built_in: "npm require console print module global window document"
            },
            n = "[A-Za-z$_][0-9A-Za-z$_]*",
            r = {
                cN: "subst",
                b: /#\{/,
                e: /}/,
                k: t
            },
            i = [e.BNM, e.inherit(e.CNM, {
                starts: {
                    e: "(\\s*/)?",
                    r: 0
                }
            }), {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, r]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, r]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [r, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                cN: "property",
                b: "@" + n
            }, {
                b: "`",
                e: "`",
                eB: !0,
                eE: !0,
                sL: "javascript"
            }];
        r.c = i;
        var o = e.inherit(e.TM, {
                b: n
            }),
            a = "(\\(.*\\))?\\s*\\B[-=]>",
            s = {
                cN: "params",
                b: "\\([^\\(]",
                rB: !0,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    c: ["self"].concat(i)
                }]
            };
        return {
            aliases: ["coffee", "cson", "iced"],
            k: t,
            i: /\/\*/,
            c: i.concat([e.C("###", "###"), e.HCM, {
                cN: "function",
                b: "^\\s*" + n + "\\s*=\\s*" + a,
                e: "[-=]>",
                rB: !0,
                c: [o, s]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: a,
                    e: "[-=]>",
                    rB: !0,
                    c: [s]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [o]
                }, o]
            }, {
                cN: "attribute",
                b: n + ":",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
        }
    }), hljs.registerLanguage("cpp", function(e) {
        var t = {
            keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
            built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
        };
        return {
            aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
            k: t,
            i: "</",
            c: [e.CLCM, e.CBCM, e.QSM, {
                cN: "string",
                b: "'\\\\?.",
                e: "'",
                i: "."
            }, {
                cN: "number",
                b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
            }, e.CNM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line pragma",
                c: [{
                    b: /\\\n/,
                    r: 0
                }, {
                    b: 'include\\s*[<"]',
                    e: '[>"]',
                    k: "include",
                    i: "\\n"
                }, e.CLCM]
            }, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: t,
                c: ["self"]
            }, {
                b: e.IR + "::",
                k: t
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    r: 0,
                    c: [e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), hljs.registerLanguage("cs", function(e) {
        var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
            n = e.IR + "(<" + e.IR + ">)?";
        return {
            aliases: ["csharp"],
            k: t,
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "xmlDocTag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "\x3c!--|--\x3e"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            }, e.ASM, e.QSM, e.CNM, {
                bK: "class namespace interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "new return throw await",
                r: 0
            }, {
                cN: "function",
                b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), hljs.registerLanguage("css", function(e) {
        var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
            n = {
                cN: "function",
                b: t + "\\(",
                rB: !0,
                eE: !0,
                e: "\\("
            },
            r = {
                cN: "rule",
                b: /[A-Z\_\.\-]+\s*:/,
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: /\S/,
                    e: ":",
                    eE: !0,
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            };
        return {
            cI: !0,
            i: /[=\/|']/,
            c: [e.CBCM, r, {
                cN: "id",
                b: /\#[A-Za-z0-9_-]+/
            }, {
                cN: "class",
                b: /\.[A-Za-z0-9_-]+/,
                r: 0
            }, {
                cN: "attr_selector",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                c: [{
                    cN: "keyword",
                    b: /\S+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [n, e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "tag",
                b: t,
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: /\S/,
                r: 0,
                c: [e.CBCM, r]
            }]
        }
    }), hljs.registerLanguage("diff", function(e) {
        return {
            aliases: ["patch"],
            c: [{
                cN: "chunk",
                r: 10,
                v: [{
                    b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                }, {
                    b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                cN: "header",
                v: [{
                    b: /Index: /,
                    e: /$/
                }, {
                    b: /=====/,
                    e: /=====$/
                }, {
                    b: /^\-\-\-/,
                    e: /$/
                }, {
                    b: /^\*{3} /,
                    e: /$/
                }, {
                    b: /^\+\+\+/,
                    e: /$/
                }, {
                    b: /\*{5}/,
                    e: /\*{5}$/
                }]
            }, {
                cN: "addition",
                b: "^\\+",
                e: "$"
            }, {
                cN: "deletion",
                b: "^\\-",
                e: "$"
            }, {
                cN: "change",
                b: "^\\!",
                e: "$"
            }]
        }
    }), hljs.registerLanguage("http", function(e) {
        return {
            aliases: ["https"],
            i: "\\S",
            c: [{
                cN: "status",
                b: "^HTTP/[0-9\\.]+",
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                cN: "request",
                b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    cN: "string",
                    e: "$"
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: "",
                    eW: !0
                }
            }]
        }
    }), hljs.registerLanguage("ini", function(e) {
        return {
            cI: !0,
            i: /\S/,
            c: [e.C(";", "$"), {
                cN: "title",
                b: "^\\[",
                e: "\\]"
            }, {
                cN: "setting",
                b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
                e: "$",
                c: [{
                    cN: "value",
                    eW: !0,
                    k: "on off true false yes no",
                    c: [e.QSM, e.NM],
                    r: 0
                }]
            }]
        }
    }), hljs.registerLanguage("java", function(e) {
        var t = e.UIR + "(<" + e.UIR + ">)?",
            n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            r = {
                cN: "number",
                b: "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
                r: 0
            };
        return {
            aliases: ["jsp"],
            k: n,
            i: /<\//,
            c: [{
                cN: "javadoc",
                b: "/\\*\\*",
                e: "\\*/",
                r: 0,
                c: [{
                    cN: "javadoctag",
                    b: "(^|\\s)@[A-Za-z]+"
                }]
            }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: n,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: n,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, r, {
                cN: "annotation",
                b: "@[A-Za-z]+"
            }]
        }
    }), hljs.registerLanguage("javascript", function(e) {
        return {
            aliases: ["js"],
            k: {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            c: [{
                cN: "pi",
                r: 10,
                v: [{
                    b: /^\s*('|")use strict('|")/
                }, {
                    b: /^\s*('|")use asm('|")/
                }]
            }, e.ASM, e.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, {
                    cN: "subst",
                    b: "\\$\\{",
                    e: "\\}"
                }]
            }, e.CLCM, e.CBCM, {
                cN: "number",
                b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    b: /</,
                    e: />\s*[);\]]/,
                    r: 0,
                    sL: "xml"
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    c: [e.CLCM, e.CBCM],
                    i: /["'\(]/
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + e.IR,
                r: 0
            }, {
                bK: "import",
                e: "[;$]",
                k: "import from as",
                c: [e.ASM, e.QSM]
            }, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }]
        }
    }), hljs.registerLanguage("json", function(e) {
        var t = {
                literal: "true false null"
            },
            n = [e.QSM, e.CNM],
            r = {
                cN: "value",
                e: ",",
                eW: !0,
                eE: !0,
                c: n,
                k: t
            },
            i = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attribute",
                    b: '\\s*"',
                    e: '"\\s*:\\s*',
                    eB: !0,
                    eE: !0,
                    c: [e.BE],
                    i: "\\n",
                    starts: r
                }],
                i: "\\S"
            },
            o = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(r, {
                    cN: null
                })],
                i: "\\S"
            };
        return n.splice(n.length, 0, i, o), {
            c: n,
            k: t,
            i: "\\S"
        }
    }), hljs.registerLanguage("makefile", function(e) {
        var t = {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        };
        return {
            aliases: ["mk", "mak"],
            c: [e.HCM, {
                b: /^\w+\s*\W*=/,
                rB: !0,
                r: 0,
                starts: {
                    cN: "constant",
                    e: /\s*\W*=/,
                    eE: !0,
                    starts: {
                        e: /$/,
                        r: 0,
                        c: [t]
                    }
                }
            }, {
                cN: "title",
                b: /^[\w]+:\s*$/
            }, {
                cN: "phony",
                b: /^\.PHONY:/,
                e: /$/,
                k: ".PHONY",
                l: /[\.\w]+/
            }, {
                b: /^\t+/,
                e: /$/,
                r: 0,
                c: [e.QSM, t]
            }]
        }
    }), hljs.registerLanguage("xml", function(e) {
        var t = {
                b: /<\?(php)?(?!\w)/,
                e: /\?>/,
                sL: "php",
                subLanguageMode: "continuous"
            },
            n = {
                eW: !0,
                i: /</,
                r: 0,
                c: [t, {
                    cN: "attribute",
                    b: "[A-Za-z0-9\\._:-]+",
                    r: 0
                }, {
                    b: "=",
                    r: 0,
                    c: [{
                        cN: "value",
                        c: [t],
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s\/>]+/
                        }]
                    }]
                }]
            };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "doctype",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("\x3c!--", "--\x3e", {
                r: 10
            }), {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "style"
                },
                c: [n],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "script"
                },
                c: [n],
                starts: {
                    e: "<\/script>",
                    rE: !0,
                    sL: ""
                }
            }, t, {
                cN: "pi",
                b: /<\?\w+/,
                e: /\?>/,
                r: 10
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: /[^ \/><\n\t]+/,
                    r: 0
                }, n]
            }]
        }
    }), hljs.registerLanguage("markdown", function(e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            c: [{
                cN: "header",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "blockquote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "`.+?`"
                }, {
                    b: "^( {4}|\t)",
                    e: "$",
                    r: 0
                }]
            }, {
                cN: "horizontal_rule",
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "link_label",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link_url",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link_reference",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: "^\\[.+\\]:",
                rB: !0,
                c: [{
                    cN: "link_reference",
                    b: "\\[",
                    e: "\\]:",
                    eB: !0,
                    eE: !0,
                    starts: {
                        cN: "link_url",
                        e: "$"
                    }
                }]
            }]
        }
    }), hljs.registerLanguage("nginx", function(e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$\d+/
                }, {
                    b: /\$\{/,
                    e: /}/
                }, {
                    b: "[\\$\\@]" + e.UIR
                }]
            },
            n = {
                eW: !0,
                l: "[a-z/_]+",
                k: {
                    built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                },
                r: 0,
                i: "=>",
                c: [e.HCM, {
                    cN: "string",
                    c: [e.BE, t],
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }]
                }, {
                    cN: "url",
                    b: "([a-z]+):/",
                    e: "\\s",
                    eW: !0,
                    eE: !0,
                    c: [t]
                }, {
                    cN: "regexp",
                    c: [e.BE, t],
                    v: [{
                        b: "\\s\\^",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "~\\*?\\s+",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "\\*(\\.[a-z\\-]+)+"
                    }, {
                        b: "([a-z\\-]+\\.)+\\*"
                    }]
                }, {
                    cN: "number",
                    b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                }, {
                    cN: "number",
                    b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                    r: 0
                }, t]
            };
        return {
            aliases: ["nginxconf"],
            c: [e.HCM, {
                b: e.UIR + "\\s",
                e: ";|{",
                rB: !0,
                c: [{
                    cN: "title",
                    b: e.UIR,
                    starts: n
                }],
                r: 0
            }],
            i: "[^\\s\\}]"
        }
    }), hljs.registerLanguage("objectivec", function(e) {
        var t = /[a-zA-Z@][a-zA-Z0-9_]*/,
            n = "@interface @class @protocol @implementation";
        return {
            aliases: ["m", "mm", "objc", "obj-c"],
            k: {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            l: t,
            i: "</",
            c: [{
                cN: "built_in",
                b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
            }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                c: [{
                    cN: "title",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + n.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: n,
                l: t,
                c: [e.UTM]
            }, {
                cN: "variable",
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), hljs.registerLanguage("perl", function(e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            n = {
                cN: "subst",
                b: "[$@]\\{",
                e: "\\}",
                k: t
            },
            r = {
                b: "->{",
                e: "}"
            },
            i = {
                cN: "variable",
                v: [{
                    b: /\$\d/
                }, {
                    b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                }, {
                    b: /[\$%@][^\s\w{]/,
                    r: 0
                }]
            },
            o = e.C("^(__END__|__DATA__)", "\\n$", {
                r: 5
            }),
            a = [e.BE, n, i],
            s = [i, e.HCM, o, e.C("^\\=\\w", "\\=cut", {
                eW: !0
            }), r, {
                cN: "string",
                c: a,
                v: [{
                    b: "q[qwxr]?\\s*\\(",
                    e: "\\)",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\[",
                    e: "\\]",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\{",
                    e: "\\}",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\|",
                    e: "\\|",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\<",
                    e: "\\>",
                    r: 5
                }, {
                    b: "qw\\s+q",
                    e: "q",
                    r: 5
                }, {
                    b: "'",
                    e: "'",
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, {
                    b: "{\\w+}",
                    c: [],
                    r: 0
                }, {
                    b: "-?\\w+\\s*\\=\\>",
                    c: [],
                    r: 0
                }]
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                k: "split return print reverse grep",
                r: 0,
                c: [e.HCM, o, {
                    cN: "regexp",
                    b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                    r: 10
                }, {
                    cN: "regexp",
                    b: "(m|qr)?/",
                    e: "/[a-z]*",
                    c: [e.BE],
                    r: 0
                }]
            }, {
                cN: "sub",
                bK: "sub",
                e: "(\\s*\\(.*?\\))?[;{]",
                r: 5
            }, {
                cN: "operator",
                b: "-\\w\\b",
                r: 0
            }];
        return n.c = s, {
            aliases: ["pl"],
            k: t,
            c: r.c = s
        }
    }), hljs.registerLanguage("php", function(e) {
        var t = {
                cN: "variable",
                b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"
            },
            n = {
                cN: "preprocessor",
                b: /<\?(php)?|\?>/
            },
            r = {
                cN: "string",
                c: [e.BE, n],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            i = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
                c: [{
                    cN: "phpdoc",
                    b: "\\s@[A-Za-z]+"
                }, n]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: "<<<['\"]?\\w+['\"]?$",
                e: "^\\w+;",
                c: [e.BE]
            }, n, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, r, i]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, r, i]
        }
    }), hljs.registerLanguage("python", function(e) {
        var t = {
                cN: "prompt",
                b: /^(>>>|\.\.\.) /
            },
            n = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, e.ASM, e.QSM]
            },
            r = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            },
            i = {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", t, r, n]
            };
        return {
            aliases: ["py", "gyp"],
            k: {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i: /(<\/|->|\?)/,
            c: [t, r, n, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def",
                    r: 10
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, i]
            }, {
                cN: "decorator",
                b: /@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }), hljs.registerLanguage("ruby", function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            r = {
                cN: "yardoctag",
                b: "@[A-Za-z]+"
            },
            i = {
                cN: "value",
                b: "#<",
                e: ">"
            },
            o = [e.C("#", "$", {
                c: [r]
            }), e.C("^\\=begin", "^\\=end", {
                c: [r],
                r: 10
            }), e.C("^__END__", "\\n$")],
            a = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: n
            },
            s = {
                cN: "string",
                c: [e.BE, a],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }]
            },
            c = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                k: n
            },
            l = [s, i, {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }), {
                    cN: "inheritance",
                    b: "<\\s*",
                    c: [{
                        cN: "parent",
                        b: "(" + e.IR + "::)?" + e.IR
                    }]
                }].concat(o)
            }, {
                cN: "function",
                bK: "def",
                e: " |$|;",
                r: 0,
                c: [e.inherit(e.TM, {
                    b: t
                }), c].concat(o)
            }, {
                cN: "constant",
                b: "(::)?(\\b[A-Z]\\w*(::)?)+",
                r: 0
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":",
                c: [s, {
                    b: t
                }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                cN: "variable",
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                b: "(" + e.RSR + ")\\s*",
                c: [i, {
                    cN: "regexp",
                    c: [e.BE, a],
                    i: /\n/,
                    v: [{
                        b: "/",
                        e: "/[a-z]*"
                    }, {
                        b: "%r{",
                        e: "}[a-z]*"
                    }, {
                        b: "%r\\(",
                        e: "\\)[a-z]*"
                    }, {
                        b: "%r!",
                        e: "![a-z]*"
                    }, {
                        b: "%r\\[",
                        e: "\\][a-z]*"
                    }]
                }].concat(o),
                r: 0
            }].concat(o);
        a.c = l;
        var u = [{
            b: /^\s*=>/,
            cN: "status",
            starts: {
                e: "$",
                c: c.c = l
            }
        }, {
            cN: "prompt",
            b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
            starts: {
                e: "$",
                c: l
            }
        }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: n,
            c: o.concat(u).concat(l)
        }
    }), hljs.registerLanguage("sql", function(e) {
        var t = e.C("--", "$");
        return {
            cI: !0,
            i: /[<>]/,
            c: [{
                cN: "operator",
                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
                e: /;/,
                eW: !0,
                k: {
                    keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                    literal: "true false null",
                    built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
                },
                c: [{
                    cN: "string",
                    b: "'",
                    e: "'",
                    c: [e.BE, {
                        b: "''"
                    }]
                }, {
                    cN: "string",
                    b: '"',
                    e: '"',
                    c: [e.BE, {
                        b: '""'
                    }]
                }, {
                    cN: "string",
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, e.CNM, e.CBCM, t]
            }, e.CBCM, t]
        }
    }),
    function(i) {
        "use strict";
        i.fn.fitVids = function(e) {
            var n = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var t = document.head || document.getElementsByTagName("head")[0],
                    r = document.createElement("div");
                r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', t.appendChild(r.childNodes[1])
            }
            return e && i.extend(n, e), this.each(function() {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                n.customSelector && e.push(n.customSelector);
                var r = ".fitvidsignore";
                n.ignore && (r = r + ", " + n.ignore);
                var t = i(this).find(e.join(","));
                (t = (t = t.not("object object")).not(r)).each(function() {
                    var e = i(this);
                    if (!(0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                        var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                        if (!e.attr("id")) {
                            var n = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", n)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, o, a, s = gap,
                c = t[e];
            switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                case "string":
                    return quote(c);
                case "number":
                    return isFinite(c) ? String(c) : "null";
                case "boolean":
                case "null":
                    return String(c);
                case "object":
                    if (!c) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                        for (o = c.length, n = 0; n < o; n += 1) a[n] = str(n, c) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && ((i = str(r = rep[n], c)) && a.push(quote(r) + (gap ? ": " : ":") + i));
                    else
                        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && ((i = str(r, c)) && a.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
            var r;
            if (indent = gap = "", "number" == typeof n)
                for (r = 0; r < n; r += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (!(rep = t) || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (void 0 !== (r = walk(i, n)) ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {},
            r = e.jQuery;
        if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            bind: function(e, t, n) {
                r(e).bind(t, n)
            },
            trigger: function(e, t, n) {
                r(e).trigger(t, n)
            },
            extractEventData: function(e, t, n) {
                return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0
            },
            onDomLoad: function(e) {
                r(e)
            }
        }, void 0 !== n.init && n.init()
    }(window),
    function(u, e) {
        "use strict";
        var t = u.document,
            n = u.setTimeout || n,
            r = u.clearTimeout || r,
            s = u.setInterval || s,
            d = u.History = u.History || {};
        if (void 0 !== d.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        d.initHtml4 = function() {
            if (void 0 !== d.initHtml4.initialized) return !1;
            d.initHtml4.initialized = !0, d.enabled = !0, d.savedHashes = [], d.isLastHash = function(e) {
                return e === d.getHashByIndex()
            }, d.isHashEqual = function(e, t) {
                return (e = encodeURIComponent(e).replace(/%25/g, "%")) === (t = encodeURIComponent(t).replace(/%25/g, "%"))
            }, d.saveHash = function(e) {
                return !d.isLastHash(e) && (d.savedHashes.push(e), !0)
            }, d.getHashByIndex = function(e) {
                return void 0 === e ? d.savedHashes[d.savedHashes.length - 1] : e < 0 ? d.savedHashes[d.savedHashes.length + e] : d.savedHashes[e]
            }, d.discardedHashes = {}, d.discardedStates = {}, d.discardState = function(e, t, n) {
                var r, i = d.getHashByState(e);
                return r = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, d.discardedStates[i] = r, !0
            }, d.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return d.discardedHashes[e] = r, !0
            }, d.discardedState = function(e) {
                var t = d.getHashByState(e);
                return d.discardedStates[t] || !1
            }, d.discardedHash = function(e) {
                return d.discardedHashes[e] || !1
            }, d.recycleState = function(e) {
                var t = d.getHashByState(e);
                return d.discardedState(e) && delete d.discardedStates[t], !0
            }, d.emulated.hashChange && (d.hashChangeInit = function() {
                d.checkerFunction = null;
                var n, r, i, o = "",
                    a = Boolean(d.getHash());
                return d.isInternetExplorer() ? ("historyjs-iframe", (n = t.createElement("iframe")).setAttribute("id", "historyjs-iframe"), n.setAttribute("src", "#"), n.style.display = "none", t.body.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.close(), r = "", i = !1, d.checkerFunction = function() {
                    if (i) return !1;
                    i = !0;
                    var e = d.getHash(),
                        t = d.getHash(n.contentWindow.document);
                    return e !== o ? (t !== (o = e) && (r = t = e, n.contentWindow.document.open(), n.contentWindow.document.close(), n.contentWindow.document.location.hash = d.escapeHash(e)), d.Adapter.trigger(u, "hashchange")) : t !== r && (r = t, a && "" === t ? d.back() : d.setHash(t, !1)), !(i = !1)
                }) : d.checkerFunction = function() {
                    var e = d.getHash() || "";
                    return e !== o && (o = e, d.Adapter.trigger(u, "hashchange")), !0
                }, d.intervalList.push(s(d.checkerFunction, d.options.hashChangeInterval)), !0
            }, d.Adapter.onDomLoad(d.hashChangeInit)), d.emulated.pushState && (d.onHashChange = function(e) {
                var t, n = e && e.newURL || d.getLocationHref(),
                    r = d.getHashByUrl(n),
                    i = null;
                return d.isLastHash(r) ? (d.busy(!1), !1) : (d.doubleCheckComplete(), d.saveHash(r), r && d.isTraditionalAnchor(r) ? (d.Adapter.trigger(u, "anchorchange"), d.busy(!1), !1) : (i = d.extractState(d.getFullUrl(r || d.getLocationHref()), !0), d.isLastSavedState(i) ? (d.busy(!1), !1) : (d.getHashByState(i), (t = d.discardedState(i)) ? (d.getHashByIndex(-2) === d.getHashByState(t.forwardState) ? d.back(!1) : d.forward(!1), !1) : (d.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
            }, d.Adapter.bind(u, "hashchange", d.onHashChange), d.pushState = function(e, t, n, r) {
                if (n = encodeURI(n).replace(/%25/g, "%"), d.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== r && d.busy()) return d.pushQueue({
                    scope: d,
                    callback: d.pushState,
                    args: arguments,
                    queue: r
                }), !1;
                d.busy(!0);
                var i = d.createStateObject(e, t, n),
                    o = d.getHashByState(i),
                    a = d.getState(!1),
                    s = d.getHashByState(a),
                    c = d.getHash(),
                    l = d.expectedStateId == i.id;
                return d.storeState(i), d.expectedStateId = i.id, d.recycleState(i), d.setTitle(i), o === s ? (d.busy(!1), !1) : (d.saveState(i), l || d.Adapter.trigger(u, "statechange"), !d.isHashEqual(o, c) && !d.isHashEqual(o, d.getShortUrl(d.getLocationHref())) && d.setHash(o, !1), d.busy(!1), !0)
            }, d.replaceState = function(e, t, n, r) {
                if (n = encodeURI(n).replace(/%25/g, "%"), d.getHashByUrl(n)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (!1 !== r && d.busy()) return d.pushQueue({
                    scope: d,
                    callback: d.replaceState,
                    args: arguments,
                    queue: r
                }), !1;
                d.busy(!0);
                var i = d.createStateObject(e, t, n),
                    o = d.getHashByState(i),
                    a = d.getState(!1),
                    s = d.getHashByState(a),
                    c = d.getStateByIndex(-2);
                return d.discardState(a, i, c), o === s ? (d.storeState(i), d.expectedStateId = i.id, d.recycleState(i), d.setTitle(i), d.saveState(i), d.Adapter.trigger(u, "statechange"), d.busy(!1)) : d.pushState(i.data, i.title, i.url, !1), !0
            }), d.emulated.pushState && d.getHash() && !d.emulated.hashChange && d.Adapter.onDomLoad(function() {
                d.Adapter.trigger(u, "hashchange")
            })
        }, void 0 !== d.init && d.init()
    }(window),
    function(a, n) {
        "use strict";
        var s = a.console || n,
            c = a.document,
            r = a.navigator,
            i = a.sessionStorage || !1,
            o = a.setTimeout,
            l = a.clearTimeout,
            u = a.setInterval,
            d = a.clearInterval,
            f = a.JSON,
            p = a.alert,
            h = a.History = a.History || {},
            g = a.history;
        try {
            i.setItem("TEST", "1"), i.removeItem("TEST")
        } catch (e) {
            i = !1
        }
        if (f.stringify = f.stringify || f.encode, f.parse = f.parse || f.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
        h.init = function(e) {
            return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
        }, h.initCore = function(e) {
            if (void 0 !== h.initCore.initialized) return !1;
            if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || c.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                    var e, t = h.intervalList;
                    if (null != t) {
                        for (e = 0; e < t.length; e++) d(t[e]);
                        h.intervalList = null
                    }
                }, h.debug = function() {
                    h.options.debug && h.log.apply(h, arguments)
                }, h.log = function() {
                    var e, t, n, r, i, o = void 0 !== s && void 0 !== s.log && void 0 !== s.log.apply,
                        a = c.getElementById("log");
                    for (o ? (e = (r = Array.prototype.slice.call(arguments)).shift(), void 0 !== s.debug ? s.debug.apply(s, [e, r]) : s.log.apply(s, [e, r])) : e = "\n" + arguments[0] + "\n", t = 1, n = arguments.length; t < n; ++t) {
                        if ("object" == typeof(i = arguments[t]) && void 0 !== f) try {
                            i = f.stringify(i)
                        } catch (e) {}
                        e += "\n" + i + "\n"
                    }
                    return a ? (a.value += e + "\n-----\n", a.scrollTop = a.scrollHeight - a.clientHeight) : o || p(e), !0
                }, h.getInternetExplorerMajorVersion = function() {
                    return h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                        for (var e = 3, t = c.createElement("div"), n = t.getElementsByTagName("i");
                            (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && n[0];);
                        return 4 < e && e
                    }()
                }, h.isInternetExplorer = function() {
                    return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
                }, h.options.html4Mode ? h.emulated = {
                    pushState: !0,
                    hashChange: !0
                } : h.emulated = {
                    pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                    hashChange: Boolean(!("onhashchange" in a || "onhashchange" in c) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
                }, h.enabled = !h.emulated.pushState, h.bugs = {
                    setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                    hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
                }, h.isEmptyObject = function(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t)) return !1;
                    return !0
                }, h.cloneObject = function(e) {
                    var t;
                    return e ? (t = f.stringify(e), f.parse(t)) : {}
                }, h.getRootUrl = function() {
                    var e = c.location.protocol + "//" + (c.location.hostname || c.location.host);
                    return c.location.port && (e += ":" + c.location.port), e += "/"
                }, h.getBaseHref = function() {
                    var e = c.getElementsByTagName("base"),
                        t = "";
                    return 1 === e.length && (t = e[0].href.replace(/[^\/]+$/, "")), (t = t.replace(/\/+$/, "")) && (t += "/"), t
                }, h.getBaseUrl = function() {
                    return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
                }, h.getPageUrl = function() {
                    return ((h.getState(!1, !1) || {}).url || h.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /\./.test(e) ? e : e + "/"
                    })
                }, h.getBasePageUrl = function() {
                    return h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                        return /[^\/]$/.test(e) ? "" : e
                    }).replace(/\/+$/, "") + "/"
                }, h.getFullUrl = function(e, t) {
                    var n = e,
                        r = e.substring(0, 1);
                    return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = "/" === r ? h.getRootUrl() + e.replace(/^\/+/, "") : "#" === r ? h.getPageUrl().replace(/#.*/, "") + e : "?" === r ? h.getPageUrl().replace(/[\?#].*/, "") + e : t ? h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
                }, h.getShortUrl = function(e) {
                    var t = e,
                        n = h.getBaseUrl(),
                        r = h.getRootUrl();
                    return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, h.getLocationHref = function(e) {
                    return (e = e || c).URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href
                }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                    h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
                }, h.getState = function(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = h.getLastSavedState();
                    return !n && t && (n = h.createStateObject()), e && ((n = h.cloneObject(n)).url = n.cleanUrl || n.url), n
                }, h.getIdByState = function(e) {
                    var t, n = h.extractId(e.url);
                    if (!n)
                        if (t = h.getStateString(e), void 0 !== h.stateToId[t]) n = h.stateToId[t];
                        else if (void 0 !== h.store.stateToId[t]) n = h.store.stateToId[t];
                    else {
                        for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[n] || void 0 !== h.store.idToState[n];);
                        h.stateToId[t] = n, h.idToState[n] = e
                    }
                    return n
                }, h.normalizeState = function(e) {
                    var t, n;
                    return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), (t = {
                        normalized: !0
                    }).title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && !0 !== h.options.disableSuid && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t)
                }, h.createStateObject = function(e, t, n) {
                    var r = {
                        data: e,
                        title: t,
                        url: n
                    };
                    return r = h.normalizeState(r)
                }, h.getStateById = function(e) {
                    return e = String(e), h.idToState[e] || h.store.idToState[e] || n
                }, h.getStateString = function(e) {
                    var t;
                    return t = {
                        data: h.normalizeState(e).data,
                        title: e.title,
                        url: e.url
                    }, f.stringify(t)
                }, h.getStateId = function(e) {
                    return h.normalizeState(e).id
                }, h.getHashByState = function(e) {
                    return h.normalizeState(e).hash
                }, h.extractId = function(e) {
                    var t, n;
                    return n = -1 != e.indexOf("#") ? e.split("#")[0] : e, (t = /(.*)\&_suid=([0-9]+)$/.exec(n)) && t[1] || e, (t ? String(t[2] || "") : "") || !1
                }, h.isTraditionalAnchor = function(e) {
                    return !/[\/\?\.]/.test(e)
                }, h.extractState = function(e, t) {
                    var n, r, i = null;
                    return t = t || !1, (n = h.extractId(e)) && (i = h.getStateById(n)), i || (r = h.getFullUrl(e), (n = h.getIdByUrl(r) || !1) && (i = h.getStateById(n)), !i && t && !h.isTraditionalAnchor(e) && (i = h.createStateObject(null, null, r))), i
                }, h.getIdByUrl = function(e) {
                    return h.urlToId[e] || h.store.urlToId[e] || n
                }, h.getLastSavedState = function() {
                    return h.savedStates[h.savedStates.length - 1] || n
                }, h.getLastStoredState = function() {
                    return h.storedStates[h.storedStates.length - 1] || n
                }, h.hasUrlDuplicate = function(e) {
                    var t;
                    return (t = h.extractState(e.url)) && t.id !== e.id
                }, h.storeState = function(e) {
                    return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
                }, h.isLastSavedState = function(e) {
                    var t = !1;
                    return h.savedStates.length && (t = e.id === h.getLastSavedState().id), t
                }, h.saveState = function(e) {
                    return !h.isLastSavedState(e) && (h.savedStates.push(h.cloneObject(e)), !0)
                }, h.getStateByIndex = function(e) {
                    return void 0 === e ? h.savedStates[h.savedStates.length - 1] : e < 0 ? h.savedStates[h.savedStates.length + e] : h.savedStates[e]
                }, h.getCurrentIndex = function() {
                    return h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
                }, h.getHash = function(e) {
                    var t = h.getLocationHref(e);
                    return h.getHashByUrl(t)
                }, h.unescapeHash = function(e) {
                    var t = h.normalizeHash(e);
                    return t = decodeURIComponent(t)
                }, h.normalizeHash = function(e) {
                    return e.replace(/[^#]*#/, "").replace(/#.*/, "")
                }, h.setHash = function(e, t) {
                    var n, r;
                    return !1 !== t && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.setHash,
                        args: arguments,
                        queue: t
                    }), !1) : (h.busy(!0), (n = h.extractState(e, !0)) && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (r = h.getPageUrl(), h.pushState(null, null, r + "#" + e, !1)) : c.location.hash = e), h)
                }, h.escapeHash = function(e) {
                    var t = h.normalizeHash(e);
                    return t = a.encodeURIComponent(t), h.bugs.hashEscape || (t = t.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), t
                }, h.getHashByUrl = function(e) {
                    var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return t = h.unescapeHash(t)
                }, h.setTitle = function(e) {
                    var t, n = e.title;
                    n || (t = h.getStateByIndex(0)) && t.url === e.url && (n = t.title || h.options.initialTitle);
                    try {
                        c.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (e) {}
                    return c.title = n, h
                }, h.queues = [], h.busy = function(e) {
                    if (void 0 !== e ? h.busy.flag = e : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                        l(h.busy.timeout);
                        var r = function() {
                            var e, t, n;
                            if (!h.busy.flag)
                                for (e = h.queues.length - 1; 0 <= e; --e) 0 !== (t = h.queues[e]).length && (n = t.shift(), h.fireQueueItem(n), h.busy.timeout = o(r, h.options.busyDelay))
                        };
                        h.busy.timeout = o(r, h.options.busyDelay)
                    }
                    return h.busy.flag
                }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                    return e.callback.apply(e.scope || h, e.args || [])
                }, h.pushQueue = function(e) {
                    return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
                }, h.queue = function(e, t) {
                    return "function" == typeof e && (e = {
                        callback: e
                    }), void 0 !== t && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
                }, h.clearQueue = function() {
                    return h.busy.flag = !1, h.queues = [], h
                }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                    return h.stateChanged = !0, h.doubleCheckClear(), h
                }, h.doubleCheckClear = function() {
                    return h.doubleChecker && (l(h.doubleChecker), h.doubleChecker = !1), h
                }, h.doubleCheck = function(e) {
                    return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                        return h.doubleCheckClear(), h.stateChanged || e(), !0
                    }, h.options.doubleCheckInterval)), h
                }, h.safariStatePoll = function() {
                    var e = h.extractState(h.getLocationHref());
                    if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(a, "popstate"), h
                }, h.back = function(e) {
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.back,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.back(!1)
                    }), g.go(-1), !0)
                }, h.forward = function(e) {
                    return !1 !== e && h.busy() ? (h.pushQueue({
                        scope: h,
                        callback: h.forward,
                        args: arguments,
                        queue: e
                    }), !1) : (h.busy(!0), h.doubleCheck(function() {
                        h.forward(!1)
                    }), g.go(1), !0)
                }, h.go = function(e, t) {
                    var n;
                    if (0 < e)
                        for (n = 1; n <= e; ++n) h.forward(t);
                    else {
                        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (n = -1; e <= n; --n) h.back(t)
                    }
                    return h
                }, h.emulated.pushState) {
                var t = function() {};
                h.pushState = h.pushState || t, h.replaceState = h.replaceState || t
            } else h.onPopState = function(e, t) {
                var n, r, i = !1,
                    o = !1;
                return h.doubleCheckComplete(), (n = h.getHash()) ? ((r = h.extractState(n || h.getLocationHref(), !0)) ? h.replaceState(r.data, r.title, r.url, !1) : (h.Adapter.trigger(a, "anchorchange"), h.busy(!1)), h.expectedStateId = !1) : ((o = (i = h.Adapter.extractEventData("state", e, t) || !1) ? h.getStateById(i) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref())) || (o = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(o) ? (h.busy(!1), !1) : (h.storeState(o), h.saveState(o), h.setTitle(o), h.Adapter.trigger(a, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(a, "popstate", h.onPopState), h.pushState = function(e, t, n, r) {
                if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== r && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: r
                }), !1;
                h.busy(!0);
                var i = h.createStateObject(e, t, n);
                return h.isLastSavedState(i) ? h.busy(!1) : (h.storeState(i), h.expectedStateId = i.id, g.pushState(i.id, i.title, i.url), h.Adapter.trigger(a, "popstate")), !0
            }, h.replaceState = function(e, t, n, r) {
                if (h.getHashByUrl(n) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (!1 !== r && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: r
                }), !1;
                h.busy(!0);
                var i = h.createStateObject(e, t, n);
                return h.isLastSavedState(i) ? h.busy(!1) : (h.storeState(i), h.expectedStateId = i.id, g.replaceState(i.id, i.title, i.url), h.Adapter.trigger(a, "popstate")), !0
            };
            if (i) {
                try {
                    h.store = f.parse(i.getItem("History.store")) || {}
                } catch (e) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(a, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), i && (h.onUnload = function() {
                var t, e, n;
                try {
                    t = f.parse(i.getItem("History.store")) || {}
                } catch (e) {
                    t = {}
                }
                for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
                for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
                for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
                h.store = t, h.normalizeStore(), n = f.stringify(t);
                try {
                    i.setItem("History.store", n)
                } catch (e) {
                    if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                    i.length && (i.removeItem("History.store"), i.setItem("History.store", n))
                }
            }, h.intervalList.push(u(h.onUnload, h.options.storeInterval)), h.Adapter.bind(a, "beforeunload", h.onUnload), h.Adapter.bind(a, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(u(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (h.Adapter.bind(a, "hashchange", function() {
                h.Adapter.trigger(a, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function() {
                h.Adapter.trigger(a, "hashchange")
            })))
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
    }(this, function() {
        var t, n, a = {
                version: "0.1.6"
            },
            s = a.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };

        function c(e, t, n) {
            return e < t ? t : n < e ? n : e
        }

        function l(e) {
            return 100 * (-1 + e)
        }
        a.configure = function(e) {
            var t, n;
            for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (s[t] = n);
            return this
        }, a.status = null, a.set = function(t) {
            var e = a.isStarted();
            t = c(t, s.minimum, 1), a.status = 1 === t ? null : t;
            var n = a.render(!e),
                r = n.querySelector(s.barSelector),
                i = s.speed,
                o = s.easing;
            return n.offsetWidth, u(function(e) {
                "" === s.positionUsing && (s.positionUsing = a.getPositioningCSS()), d(r, function(e, t, n) {
                    var r;
                    r = "translate3d" === s.positionUsing ? {
                        transform: "translate3d(" + l(e) + "%,0,0)"
                    } : "translate" === s.positionUsing ? {
                        transform: "translate(" + l(e) + "%,0)"
                    } : {
                        "margin-left": l(e) + "%"
                    };
                    return r.transition = "all " + t + "ms " + n, r
                }(t, i, o)), 1 === t ? (d(n, {
                    transition: "none",
                    opacity: 1
                }), n.offsetWidth, setTimeout(function() {
                    d(n, {
                        transition: "all " + i + "ms linear",
                        opacity: 0
                    }), setTimeout(function() {
                        a.remove(), e()
                    }, i)
                }, i)) : setTimeout(e, i)
            }), this
        }, a.isStarted = function() {
            return "number" == typeof a.status
        }, a.start = function() {
            a.status || a.set(0);
            var e = function() {
                setTimeout(function() {
                    a.status && (a.trickle(), e())
                }, s.trickleSpeed)
            };
            return s.trickle && e(), this
        }, a.done = function(e) {
            return e || a.status ? a.inc(.3 + .5 * Math.random()).set(1) : this
        }, a.inc = function(e) {
            var t = a.status;
            return t ? ("number" != typeof e && (e = (1 - t) * c(Math.random() * t, .1, .95)), t = c(t + e, 0, .994), a.set(t)) : a.start()
        }, a.trickle = function() {
            return a.inc(Math.random() * s.trickleRate)
        }, n = t = 0, a.promise = function(e) {
            return e && "resolved" != e.state() && (0 == n && a.start(), t++, n++, e.always(function() {
                0 == --n ? (t = 0, a.done()) : a.set((t - n) / t)
            })), this
        }, a.render = function(e) {
            if (a.isRendered()) return document.getElementById("nprogress");
            f(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            t.id = "nprogress", t.innerHTML = s.template;
            var n, r = t.querySelector(s.barSelector),
                i = e ? "-100" : l(a.status || 0),
                o = document.querySelector(s.parent);
            return d(r, {
                transition: "all 0 linear",
                transform: "translate3d(" + i + "%,0,0)"
            }), s.showSpinner || (n = t.querySelector(s.spinnerSelector)) && p(n), o != document.body && f(o, "nprogress-custom-parent"), o.appendChild(t), t
        }, a.remove = function() {
            r(document.documentElement, "nprogress-busy"), r(document.querySelector(s.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && p(e)
        }, a.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, a.getPositioningCSS = function() {
            var e = document.body.style,
                t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
            return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
        };
        var u = function() {
                var t = [];

                function n() {
                    var e = t.shift();
                    e && e(n)
                }
                return function(e) {
                    t.push(e), 1 == t.length && n()
                }
            }(),
            d = function() {
                var o = ["Webkit", "O", "Moz", "ms"],
                    t = {};

                function r(e) {
                    return e = e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                        return t.toUpperCase()
                    }), t[e] || (t[e] = function(e) {
                        var t = document.body.style;
                        if (e in t) return e;
                        for (var n, r = o.length, i = e.charAt(0).toUpperCase() + e.slice(1); r--;)
                            if ((n = o[r] + i) in t) return n;
                        return e
                    }(e))
                }

                function a(e, t, n) {
                    t = r(t), e.style[t] = n
                }
                return function(e, t) {
                    var n, r, i = arguments;
                    if (2 == i.length)
                        for (n in t) void 0 !== (r = t[n]) && t.hasOwnProperty(n) && a(e, n, r);
                    else a(e, i[1], i[2])
                }
            }();

        function i(e, t) {
            return 0 <= ("string" == typeof e ? e : o(e)).indexOf(" " + t + " ")
        }

        function f(e, t) {
            var n = o(e),
                r = n + t;
            i(n, t) || (e.className = r.substring(1))
        }

        function r(e, t) {
            var n, r = o(e);
            i(e, t) && (n = r.replace(" " + t + " ", " "), e.className = n.substring(1, n.length - 1))
        }

        function o(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
        }

        function p(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }
        return a
    }), jQuery(function(o) {
        o("body");
        var t = o("html"),
            n = o(window);

        function e() {
            t.toggleClass("menu-active")
        }
        o("#menu").on({
            click: function() {
                e()
            }
        }), o(".menu-button").on({
            click: function() {
                e()
            }
        }), o(".hidden-close").on({
            click: function() {
                e()
            }
        });
        var r = o(".cover"),
            i = 0;

        function a() {
            if (1 <= r.length) {
                var e = n.scrollTop();
                i = 0 < e ? Math.floor(.25 * e) : 0, r.css({
                    "-webkit-transform": "translate3d(0, " + i + "px, 0)",
                    transform: "translate3d(0, " + i + "px, 0)"
                }), n.scrollTop() < r.height() ? t.addClass("cover-active") : t.removeClass("cover-active")
            }
        }
        a(), n.on({
            scroll: function() {
                a()
            },
            resize: function() {
                a()
            },
            orientationchange: function() {
                a()
            }
        });
        var s = o(".post-content");

        function c() {
            if (1 <= s.length) {
                var e = s.offset().top + s.height(),
                    t = 100 - (e - (n.scrollTop() + n.height())) / (e - n.height()) * 100;
                o(".progress-bar").css("width", t + "%"), 100 < t ? o(".progress-container").addClass("ready") : o(".progress-container").removeClass("ready")
            }
        }
        c(), n.on({
            scroll: function() {
                c()
            },
            resize: function() {
                c()
            },
            orientationchange: function() {
                c()
            }
        }), document.querySelectorAll(".kg-gallery-image img").forEach(function(e) {
            var t = e.closest(".kg-gallery-image"),
                n = e.attributes.width.value / e.attributes.height.value;
            t.style.flex = n + " 1 0%"
        }), o("pre code").each(function(e, t) {
            if (hljs.highlightBlock(t), !o(this).hasClass("language-text")) {
                var n = o(this),
                    r = n.html().split(/\n/).length,
                    i = [];
                for (e = 1; e < r; e++) i += '<span class="line">' + e + "</span>";
                n.parent().append('<div class="lines">' + i + "</div>")
            }
        }), o("#wrapper").fitVids(), "undefined" == typeof disqus ? o(".post-comments").css({
            display: "none"
        }) : o("#show-disqus").on("click", function() {
            o.ajax({
                type: "GET",
                url: "//" + disqus + ".disqus.com/embed.js",
                dataType: "script",
                cache: !0
            }), o(this).parent().addClass("activated")
        })
    });
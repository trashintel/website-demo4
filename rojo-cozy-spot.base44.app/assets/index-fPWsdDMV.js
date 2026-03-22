var Zm = t => {
    throw TypeError(t)
};
var Fc = (t, e, r) => e.has(t) || Zm("Cannot " + r);
var P = (t, e, r) => (Fc(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
    ce = (t, e, r) => e.has(t) ? Zm("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r),
    X = (t, e, r, i) => (Fc(t, e, "write to private field"), i ? i.call(t, r) : e.set(t, r), r),
    be = (t, e, r) => (Fc(t, e, "access private method"), r);
var Wa = (t, e, r, i) => ({
    set _(a) {
        X(t, e, a, r)
    },
    get _() {
        return P(t, e, i)
    }
});

function WS(t, e) {
    for (var r = 0; r < e.length; r++) {
        const i = e[r];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const a in i)
                if (a !== "default" && !(a in t)) {
                    const u = Object.getOwnPropertyDescriptor(i, a);
                    u && Object.defineProperty(t, a, u.get ? u : {
                        enumerable: !0,
                        get: () => i[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(a) {
        const u = {};
        return a.integrity && (u.integrity = a.integrity), a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? u.credentials = "include" : a.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin", u
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const u = r(a);
        fetch(a.href, u)
    }
})();

function $v(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Vc = {
        exports: {}
    },
    Qi = {},
    Bc = {
        exports: {}
    },
    Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eg;

function KS() {
    if (eg) return Se;
    eg = 1;
    var t = Symbol.for("react.element"),
        e = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        h = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        g = Symbol.for("react.lazy"),
        y = Symbol.iterator;

    function w(A) {
        return A === null || typeof A != "object" ? null : (A = y && A[y] || A["@@iterator"], typeof A == "function" ? A : null)
    }
    var k = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        S = Object.assign,
        b = {};

    function x(A, z, ge) {
        this.props = A, this.context = z, this.refs = b, this.updater = ge || k
    }
    x.prototype.isReactComponent = {}, x.prototype.setState = function(A, z) {
        if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, z, "setState")
    }, x.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function R() {}
    R.prototype = x.prototype;

    function V(A, z, ge) {
        this.props = A, this.context = z, this.refs = b, this.updater = ge || k
    }
    var M = V.prototype = new R;
    M.constructor = V, S(M, x.prototype), M.isPureReactComponent = !0;
    var N = Array.isArray,
        B = Object.prototype.hasOwnProperty,
        K = {
            current: null
        },
        G = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function F(A, z, ge) {
        var ye, ue = {},
            he = null,
            Ae = null;
        if (z != null)
            for (ye in z.ref !== void 0 && (Ae = z.ref), z.key !== void 0 && (he = "" + z.key), z) B.call(z, ye) && !G.hasOwnProperty(ye) && (ue[ye] = z[ye]);
        var Pe = arguments.length - 2;
        if (Pe === 1) ue.children = ge;
        else if (1 < Pe) {
            for (var ve = Array(Pe), ft = 0; ft < Pe; ft++) ve[ft] = arguments[ft + 2];
            ue.children = ve
        }
        if (A && A.defaultProps)
            for (ye in Pe = A.defaultProps, Pe) ue[ye] === void 0 && (ue[ye] = Pe[ye]);
        return {
            $$typeof: t,
            type: A,
            key: he,
            ref: Ae,
            props: ue,
            _owner: K.current
        }
    }

    function J(A, z) {
        return {
            $$typeof: t,
            type: A.type,
            key: z,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }

    function ee(A) {
        return typeof A == "object" && A !== null && A.$$typeof === t
    }

    function Ce(A) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(ge) {
            return z[ge]
        })
    }
    var Le = /\/+/g;

    function Me(A, z) {
        return typeof A == "object" && A !== null && A.key != null ? Ce("" + A.key) : z.toString(36)
    }

    function Re(A, z, ge, ye, ue) {
        var he = typeof A;
        (he === "undefined" || he === "boolean") && (A = null);
        var Ae = !1;
        if (A === null) Ae = !0;
        else switch (he) {
            case "string":
            case "number":
                Ae = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case t:
                    case e:
                        Ae = !0
                }
        }
        if (Ae) return Ae = A, ue = ue(Ae), A = ye === "" ? "." + Me(Ae, 0) : ye, N(ue) ? (ge = "", A != null && (ge = A.replace(Le, "$&/") + "/"), Re(ue, z, ge, "", function(ft) {
            return ft
        })) : ue != null && (ee(ue) && (ue = J(ue, ge + (!ue.key || Ae && Ae.key === ue.key ? "" : ("" + ue.key).replace(Le, "$&/") + "/") + A)), z.push(ue)), 1;
        if (Ae = 0, ye = ye === "" ? "." : ye + ":", N(A))
            for (var Pe = 0; Pe < A.length; Pe++) {
                he = A[Pe];
                var ve = ye + Me(he, Pe);
                Ae += Re(he, z, ge, ve, ue)
            } else if (ve = w(A), typeof ve == "function")
                for (A = ve.call(A), Pe = 0; !(he = A.next()).done;) he = he.value, ve = ye + Me(he, Pe++), Ae += Re(he, z, ge, ve, ue);
            else if (he === "object") throw z = String(A), Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return Ae
    }

    function je(A, z, ge) {
        if (A == null) return A;
        var ye = [],
            ue = 0;
        return Re(A, ye, "", "", function(he) {
            return z.call(ge, he, ue++)
        }), ye
    }

    function we(A) {
        if (A._status === -1) {
            var z = A._result;
            z = z(), z.then(function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 1, A._result = ge)
            }, function(ge) {
                (A._status === 0 || A._status === -1) && (A._status = 2, A._result = ge)
            }), A._status === -1 && (A._status = 0, A._result = z)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var fe = {
            current: null
        },
        W = {
            transition: null
        },
        ie = {
            ReactCurrentDispatcher: fe,
            ReactCurrentBatchConfig: W,
            ReactCurrentOwner: K
        };

    function U() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: je,
        forEach: function(A, z, ge) {
            je(A, function() {
                z.apply(this, arguments)
            }, ge)
        },
        count: function(A) {
            var z = 0;
            return je(A, function() {
                z++
            }), z
        },
        toArray: function(A) {
            return je(A, function(z) {
                return z
            }) || []
        },
        only: function(A) {
            if (!ee(A)) throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    }, Se.Component = x, Se.Fragment = r, Se.Profiler = a, Se.PureComponent = V, Se.StrictMode = i, Se.Suspense = h, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, Se.act = U, Se.cloneElement = function(A, z, ge) {
        if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var ye = S({}, A.props),
            ue = A.key,
            he = A.ref,
            Ae = A._owner;
        if (z != null) {
            if (z.ref !== void 0 && (he = z.ref, Ae = K.current), z.key !== void 0 && (ue = "" + z.key), A.type && A.type.defaultProps) var Pe = A.type.defaultProps;
            for (ve in z) B.call(z, ve) && !G.hasOwnProperty(ve) && (ye[ve] = z[ve] === void 0 && Pe !== void 0 ? Pe[ve] : z[ve])
        }
        var ve = arguments.length - 2;
        if (ve === 1) ye.children = ge;
        else if (1 < ve) {
            Pe = Array(ve);
            for (var ft = 0; ft < ve; ft++) Pe[ft] = arguments[ft + 2];
            ye.children = Pe
        }
        return {
            $$typeof: t,
            type: A.type,
            key: ue,
            ref: he,
            props: ye,
            _owner: Ae
        }
    }, Se.createContext = function(A) {
        return A = {
            $$typeof: c,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, A.Provider = {
            $$typeof: u,
            _context: A
        }, A.Consumer = A
    }, Se.createElement = F, Se.createFactory = function(A) {
        var z = F.bind(null, A);
        return z.type = A, z
    }, Se.createRef = function() {
        return {
            current: null
        }
    }, Se.forwardRef = function(A) {
        return {
            $$typeof: f,
            render: A
        }
    }, Se.isValidElement = ee, Se.lazy = function(A) {
        return {
            $$typeof: g,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: we
        }
    }, Se.memo = function(A, z) {
        return {
            $$typeof: m,
            type: A,
            compare: z === void 0 ? null : z
        }
    }, Se.startTransition = function(A) {
        var z = W.transition;
        W.transition = {};
        try {
            A()
        } finally {
            W.transition = z
        }
    }, Se.unstable_act = U, Se.useCallback = function(A, z) {
        return fe.current.useCallback(A, z)
    }, Se.useContext = function(A) {
        return fe.current.useContext(A)
    }, Se.useDebugValue = function() {}, Se.useDeferredValue = function(A) {
        return fe.current.useDeferredValue(A)
    }, Se.useEffect = function(A, z) {
        return fe.current.useEffect(A, z)
    }, Se.useId = function() {
        return fe.current.useId()
    }, Se.useImperativeHandle = function(A, z, ge) {
        return fe.current.useImperativeHandle(A, z, ge)
    }, Se.useInsertionEffect = function(A, z) {
        return fe.current.useInsertionEffect(A, z)
    }, Se.useLayoutEffect = function(A, z) {
        return fe.current.useLayoutEffect(A, z)
    }, Se.useMemo = function(A, z) {
        return fe.current.useMemo(A, z)
    }, Se.useReducer = function(A, z, ge) {
        return fe.current.useReducer(A, z, ge)
    }, Se.useRef = function(A) {
        return fe.current.useRef(A)
    }, Se.useState = function(A) {
        return fe.current.useState(A)
    }, Se.useSyncExternalStore = function(A, z, ge) {
        return fe.current.useSyncExternalStore(A, z, ge)
    }, Se.useTransition = function() {
        return fe.current.useTransition()
    }, Se.version = "18.3.1", Se
}
var tg;

function af() {
    return tg || (tg = 1, Bc.exports = KS()), Bc.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng;

function QS() {
    if (ng) return Qi;
    ng = 1;
    var t = af(),
        e = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        u = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function c(f, h, m) {
        var g, y = {},
            w = null,
            k = null;
        m !== void 0 && (w = "" + m), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (k = h.ref);
        for (g in h) i.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
        if (f && f.defaultProps)
            for (g in h = f.defaultProps, h) y[g] === void 0 && (y[g] = h[g]);
        return {
            $$typeof: e,
            type: f,
            key: w,
            ref: k,
            props: y,
            _owner: a.current
        }
    }
    return Qi.Fragment = r, Qi.jsx = c, Qi.jsxs = c, Qi
}
var rg;

function GS() {
    return rg || (rg = 1, Vc.exports = QS()), Vc.exports
}
var C = GS(),
    j = af();
const YS = $v(j),
    XS = WS({
        __proto__: null,
        default: YS
    }, [j]);
var Ka = {},
    Uc = {
        exports: {}
    },
    At = {},
    zc = {
        exports: {}
    },
    $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sg;

function JS() {
    return sg || (sg = 1, (function(t) {
        function e(W, ie) {
            var U = W.length;
            W.push(ie);
            e: for (; 0 < U;) {
                var A = U - 1 >>> 1,
                    z = W[A];
                if (0 < a(z, ie)) W[A] = ie, W[U] = z, U = A;
                else break e
            }
        }

        function r(W) {
            return W.length === 0 ? null : W[0]
        }

        function i(W) {
            if (W.length === 0) return null;
            var ie = W[0],
                U = W.pop();
            if (U !== ie) {
                W[0] = U;
                e: for (var A = 0, z = W.length, ge = z >>> 1; A < ge;) {
                    var ye = 2 * (A + 1) - 1,
                        ue = W[ye],
                        he = ye + 1,
                        Ae = W[he];
                    if (0 > a(ue, U)) he < z && 0 > a(Ae, ue) ? (W[A] = Ae, W[he] = U, A = he) : (W[A] = ue, W[ye] = U, A = ye);
                    else if (he < z && 0 > a(Ae, U)) W[A] = Ae, W[he] = U, A = he;
                    else break e
                }
            }
            return ie
        }

        function a(W, ie) {
            var U = W.sortIndex - ie.sortIndex;
            return U !== 0 ? U : W.id - ie.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            t.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date,
                f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var h = [],
            m = [],
            g = 1,
            y = null,
            w = 3,
            k = !1,
            S = !1,
            b = !1,
            x = typeof setTimeout == "function" ? setTimeout : null,
            R = typeof clearTimeout == "function" ? clearTimeout : null,
            V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function M(W) {
            for (var ie = r(m); ie !== null;) {
                if (ie.callback === null) i(m);
                else if (ie.startTime <= W) i(m), ie.sortIndex = ie.expirationTime, e(h, ie);
                else break;
                ie = r(m)
            }
        }

        function N(W) {
            if (b = !1, M(W), !S)
                if (r(h) !== null) S = !0, we(B);
                else {
                    var ie = r(m);
                    ie !== null && fe(N, ie.startTime - W)
                }
        }

        function B(W, ie) {
            S = !1, b && (b = !1, R(F), F = -1), k = !0;
            var U = w;
            try {
                for (M(ie), y = r(h); y !== null && (!(y.expirationTime > ie) || W && !Ce());) {
                    var A = y.callback;
                    if (typeof A == "function") {
                        y.callback = null, w = y.priorityLevel;
                        var z = A(y.expirationTime <= ie);
                        ie = t.unstable_now(), typeof z == "function" ? y.callback = z : y === r(h) && i(h), M(ie)
                    } else i(h);
                    y = r(h)
                }
                if (y !== null) var ge = !0;
                else {
                    var ye = r(m);
                    ye !== null && fe(N, ye.startTime - ie), ge = !1
                }
                return ge
            } finally {
                y = null, w = U, k = !1
            }
        }
        var K = !1,
            G = null,
            F = -1,
            J = 5,
            ee = -1;

        function Ce() {
            return !(t.unstable_now() - ee < J)
        }

        function Le() {
            if (G !== null) {
                var W = t.unstable_now();
                ee = W;
                var ie = !0;
                try {
                    ie = G(!0, W)
                } finally {
                    ie ? Me() : (K = !1, G = null)
                }
            } else K = !1
        }
        var Me;
        if (typeof V == "function") Me = function() {
            V(Le)
        };
        else if (typeof MessageChannel < "u") {
            var Re = new MessageChannel,
                je = Re.port2;
            Re.port1.onmessage = Le, Me = function() {
                je.postMessage(null)
            }
        } else Me = function() {
            x(Le, 0)
        };

        function we(W) {
            G = W, K || (K = !0, Me())
        }

        function fe(W, ie) {
            F = x(function() {
                W(t.unstable_now())
            }, ie)
        }
        t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(W) {
            W.callback = null
        }, t.unstable_continueExecution = function() {
            S || k || (S = !0, we(B))
        }, t.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < W ? Math.floor(1e3 / W) : 5
        }, t.unstable_getCurrentPriorityLevel = function() {
            return w
        }, t.unstable_getFirstCallbackNode = function() {
            return r(h)
        }, t.unstable_next = function(W) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var ie = 3;
                    break;
                default:
                    ie = w
            }
            var U = w;
            w = ie;
            try {
                return W()
            } finally {
                w = U
            }
        }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(W, ie) {
            switch (W) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    W = 3
            }
            var U = w;
            w = W;
            try {
                return ie()
            } finally {
                w = U
            }
        }, t.unstable_scheduleCallback = function(W, ie, U) {
            var A = t.unstable_now();
            switch (typeof U == "object" && U !== null ? (U = U.delay, U = typeof U == "number" && 0 < U ? A + U : A) : U = A, W) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3
            }
            return z = U + z, W = {
                id: g++,
                callback: ie,
                priorityLevel: W,
                startTime: U,
                expirationTime: z,
                sortIndex: -1
            }, U > A ? (W.sortIndex = U, e(m, W), r(h) === null && W === r(m) && (b ? (R(F), F = -1) : b = !0, fe(N, U - A))) : (W.sortIndex = z, e(h, W), S || k || (S = !0, we(B))), W
        }, t.unstable_shouldYield = Ce, t.unstable_wrapCallback = function(W) {
            var ie = w;
            return function() {
                var U = w;
                w = ie;
                try {
                    return W.apply(this, arguments)
                } finally {
                    w = U
                }
            }
        }
    })($c)), $c
}
var ig;

function ZS() {
    return ig || (ig = 1, zc.exports = JS()), zc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var og;

function eb() {
    if (og) return At;
    og = 1;
    var t = af(),
        e = ZS();

    function r(n) {
        for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++) s += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + n + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function u(n, s) {
        c(n, s), c(n + "Capture", s)
    }

    function c(n, s) {
        for (a[n] = s, n = 0; n < s.length; n++) i.add(s[n])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        h = Object.prototype.hasOwnProperty,
        m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        g = {},
        y = {};

    function w(n) {
        return h.call(y, n) ? !0 : h.call(g, n) ? !1 : m.test(n) ? y[n] = !0 : (g[n] = !0, !1)
    }

    function k(n, s, o, l) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof s) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return l ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
            default:
                return !1
        }
    }

    function S(n, s, o, l) {
        if (s === null || typeof s > "u" || k(n, s, o, l)) return !0;
        if (l) return !1;
        if (o !== null) switch (o.type) {
            case 3:
                return !s;
            case 4:
                return s === !1;
            case 5:
                return isNaN(s);
            case 6:
                return isNaN(s) || 1 > s
        }
        return !1
    }

    function b(n, s, o, l, d, p, v) {
        this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = l, this.attributeNamespace = d, this.mustUseProperty = o, this.propertyName = n, this.type = s, this.sanitizeURL = p, this.removeEmptyString = v
    }
    var x = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
        x[n] = new b(n, 0, !1, n, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(n) {
        var s = n[0];
        x[s] = new b(s, 1, !1, n[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
        x[n] = new b(n, 2, !1, n, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
        x[n] = new b(n, 3, !1, n.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
        x[n] = new b(n, 3, !0, n, null, !1, !1)
    }), ["capture", "download"].forEach(function(n) {
        x[n] = new b(n, 4, !1, n, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(n) {
        x[n] = new b(n, 6, !1, n, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(n) {
        x[n] = new b(n, 5, !1, n.toLowerCase(), null, !1, !1)
    });
    var R = /[\-:]([a-z])/g;

    function V(n) {
        return n[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
        var s = n.replace(R, V);
        x[s] = new b(s, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !1, !1)
    }), x.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
        x[n] = new b(n, 1, !1, n.toLowerCase(), null, !0, !0)
    });

    function M(n, s, o, l) {
        var d = x.hasOwnProperty(s) ? x[s] : null;
        (d !== null ? d.type !== 0 : l || !(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (S(s, o, d, l) && (o = null), l || d === null ? w(s) && (o === null ? n.removeAttribute(s) : n.setAttribute(s, "" + o)) : d.mustUseProperty ? n[d.propertyName] = o === null ? d.type === 3 ? !1 : "" : o : (s = d.attributeName, l = d.attributeNamespace, o === null ? n.removeAttribute(s) : (d = d.type, o = d === 3 || d === 4 && o === !0 ? "" : "" + o, l ? n.setAttributeNS(l, s, o) : n.setAttribute(s, o))))
    }
    var N = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        B = Symbol.for("react.element"),
        K = Symbol.for("react.portal"),
        G = Symbol.for("react.fragment"),
        F = Symbol.for("react.strict_mode"),
        J = Symbol.for("react.profiler"),
        ee = Symbol.for("react.provider"),
        Ce = Symbol.for("react.context"),
        Le = Symbol.for("react.forward_ref"),
        Me = Symbol.for("react.suspense"),
        Re = Symbol.for("react.suspense_list"),
        je = Symbol.for("react.memo"),
        we = Symbol.for("react.lazy"),
        fe = Symbol.for("react.offscreen"),
        W = Symbol.iterator;

    function ie(n) {
        return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null)
    }
    var U = Object.assign,
        A;

    function z(n) {
        if (A === void 0) try {
            throw Error()
        } catch (o) {
            var s = o.stack.trim().match(/\n( *(at )?)/);
            A = s && s[1] || ""
        }
        return `
` + A + n
    }
    var ge = !1;

    function ye(n, s) {
        if (!n || ge) return "";
        ge = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (s)
                if (s = function() {
                        throw Error()
                    }, Object.defineProperty(s.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(s, [])
                    } catch (D) {
                        var l = D
                    }
                    Reflect.construct(n, [], s)
                } else {
                    try {
                        s.call()
                    } catch (D) {
                        l = D
                    }
                    n.call(s.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (D) {
                    l = D
                }
                n()
            }
        } catch (D) {
            if (D && l && typeof D.stack == "string") {
                for (var d = D.stack.split(`
`), p = l.stack.split(`
`), v = d.length - 1, E = p.length - 1; 1 <= v && 0 <= E && d[v] !== p[E];) E--;
                for (; 1 <= v && 0 <= E; v--, E--)
                    if (d[v] !== p[E]) {
                        if (v !== 1 || E !== 1)
                            do
                                if (v--, E--, 0 > E || d[v] !== p[E]) {
                                    var T = `
` + d[v].replace(" at new ", " at ");
                                    return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T
                                }
                        while (1 <= v && 0 <= E);
                        break
                    }
            }
        } finally {
            ge = !1, Error.prepareStackTrace = o
        }
        return (n = n ? n.displayName || n.name : "") ? z(n) : ""
    }

    function ue(n) {
        switch (n.tag) {
            case 5:
                return z(n.type);
            case 16:
                return z("Lazy");
            case 13:
                return z("Suspense");
            case 19:
                return z("SuspenseList");
            case 0:
            case 2:
            case 15:
                return n = ye(n.type, !1), n;
            case 11:
                return n = ye(n.type.render, !1), n;
            case 1:
                return n = ye(n.type, !0), n;
            default:
                return ""
        }
    }

    function he(n) {
        if (n == null) return null;
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
            case G:
                return "Fragment";
            case K:
                return "Portal";
            case J:
                return "Profiler";
            case F:
                return "StrictMode";
            case Me:
                return "Suspense";
            case Re:
                return "SuspenseList"
        }
        if (typeof n == "object") switch (n.$$typeof) {
            case Ce:
                return (n.displayName || "Context") + ".Consumer";
            case ee:
                return (n._context.displayName || "Context") + ".Provider";
            case Le:
                var s = n.render;
                return n = n.displayName, n || (n = s.displayName || s.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
            case je:
                return s = n.displayName || null, s !== null ? s : he(n.type) || "Memo";
            case we:
                s = n._payload, n = n._init;
                try {
                    return he(n(s))
                } catch {}
        }
        return null
    }

    function Ae(n) {
        var s = n.type;
        switch (n.tag) {
            case 24:
                return "Cache";
            case 9:
                return (s.displayName || "Context") + ".Consumer";
            case 10:
                return (s._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return n = s.render, n = n.displayName || n.name || "", s.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return s;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return he(s);
            case 8:
                return s === F ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof s == "function") return s.displayName || s.name || null;
                if (typeof s == "string") return s
        }
        return null
    }

    function Pe(n) {
        switch (typeof n) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return n;
            case "object":
                return n;
            default:
                return ""
        }
    }

    function ve(n) {
        var s = n.type;
        return (n = n.nodeName) && n.toLowerCase() === "input" && (s === "checkbox" || s === "radio")
    }

    function ft(n) {
        var s = ve(n) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(n.constructor.prototype, s),
            l = "" + n[s];
        if (!n.hasOwnProperty(s) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var d = o.get,
                p = o.set;
            return Object.defineProperty(n, s, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(v) {
                    l = "" + v, p.call(this, v)
                }
            }), Object.defineProperty(n, s, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(v) {
                    l = "" + v
                },
                stopTracking: function() {
                    n._valueTracker = null, delete n[s]
                }
            }
        }
    }

    function Tn(n) {
        n._valueTracker || (n._valueTracker = ft(n))
    }

    function Rr(n) {
        if (!n) return !1;
        var s = n._valueTracker;
        if (!s) return !0;
        var o = s.getValue(),
            l = "";
        return n && (l = ve(n) ? n.checked ? "true" : "false" : n.value), n = l, n !== o ? (s.setValue(n), !0) : !1
    }

    function $n(n) {
        if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
        try {
            return n.activeElement || n.body
        } catch {
            return n.body
        }
    }

    function Hn(n, s) {
        var o = s.checked;
        return U({}, s, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ? ? n._wrapperState.initialChecked
        })
    }

    function oh(n, s) {
        var o = s.defaultValue == null ? "" : s.defaultValue,
            l = s.checked != null ? s.checked : s.defaultChecked;
        o = Pe(s.value != null ? s.value : o), n._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: s.type === "checkbox" || s.type === "radio" ? s.checked != null : s.value != null
        }
    }

    function ah(n, s) {
        s = s.checked, s != null && M(n, "checked", s, !1)
    }

    function Wl(n, s) {
        ah(n, s);
        var o = Pe(s.value),
            l = s.type;
        if (o != null) l === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
        else if (l === "submit" || l === "reset") {
            n.removeAttribute("value");
            return
        }
        s.hasOwnProperty("value") ? Kl(n, s.type, o) : s.hasOwnProperty("defaultValue") && Kl(n, s.type, Pe(s.defaultValue)), s.checked == null && s.defaultChecked != null && (n.defaultChecked = !!s.defaultChecked)
    }

    function lh(n, s, o) {
        if (s.hasOwnProperty("value") || s.hasOwnProperty("defaultValue")) {
            var l = s.type;
            if (!(l !== "submit" && l !== "reset" || s.value !== void 0 && s.value !== null)) return;
            s = "" + n._wrapperState.initialValue, o || s === n.value || (n.value = s), n.defaultValue = s
        }
        o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o)
    }

    function Kl(n, s, o) {
        (s !== "number" || $n(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o))
    }
    var ui = Array.isArray;

    function ds(n, s, o, l) {
        if (n = n.options, s) {
            s = {};
            for (var d = 0; d < o.length; d++) s["$" + o[d]] = !0;
            for (o = 0; o < n.length; o++) d = s.hasOwnProperty("$" + n[o].value), n[o].selected !== d && (n[o].selected = d), d && l && (n[o].defaultSelected = !0)
        } else {
            for (o = "" + Pe(o), s = null, d = 0; d < n.length; d++) {
                if (n[d].value === o) {
                    n[d].selected = !0, l && (n[d].defaultSelected = !0);
                    return
                }
                s !== null || n[d].disabled || (s = n[d])
            }
            s !== null && (s.selected = !0)
        }
    }

    function Ql(n, s) {
        if (s.dangerouslySetInnerHTML != null) throw Error(r(91));
        return U({}, s, {
            value: void 0,
            defaultValue: void 0,
            children: "" + n._wrapperState.initialValue
        })
    }

    function uh(n, s) {
        var o = s.value;
        if (o == null) {
            if (o = s.children, s = s.defaultValue, o != null) {
                if (s != null) throw Error(r(92));
                if (ui(o)) {
                    if (1 < o.length) throw Error(r(93));
                    o = o[0]
                }
                s = o
            }
            s == null && (s = ""), o = s
        }
        n._wrapperState = {
            initialValue: Pe(o)
        }
    }

    function ch(n, s) {
        var o = Pe(s.value),
            l = Pe(s.defaultValue);
        o != null && (o = "" + o, o !== n.value && (n.value = o), s.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), l != null && (n.defaultValue = "" + l)
    }

    function dh(n) {
        var s = n.textContent;
        s === n._wrapperState.initialValue && s !== "" && s !== null && (n.value = s)
    }

    function fh(n) {
        switch (n) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Gl(n, s) {
        return n == null || n === "http://www.w3.org/1999/xhtml" ? fh(s) : n === "http://www.w3.org/2000/svg" && s === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
    }
    var Fo, hh = (function(n) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(s, o, l, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return n(s, o, l, d)
            })
        } : n
    })(function(n, s) {
        if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = s;
        else {
            for (Fo = Fo || document.createElement("div"), Fo.innerHTML = "<svg>" + s.valueOf().toString() + "</svg>", s = Fo.firstChild; n.firstChild;) n.removeChild(n.firstChild);
            for (; s.firstChild;) n.appendChild(s.firstChild)
        }
    });

    function ci(n, s) {
        if (s) {
            var o = n.firstChild;
            if (o && o === n.lastChild && o.nodeType === 3) {
                o.nodeValue = s;
                return
            }
        }
        n.textContent = s
    }
    var di = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Yx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(di).forEach(function(n) {
        Yx.forEach(function(s) {
            s = s + n.charAt(0).toUpperCase() + n.substring(1), di[s] = di[n]
        })
    });

    function ph(n, s, o) {
        return s == null || typeof s == "boolean" || s === "" ? "" : o || typeof s != "number" || s === 0 || di.hasOwnProperty(n) && di[n] ? ("" + s).trim() : s + "px"
    }

    function mh(n, s) {
        n = n.style;
        for (var o in s)
            if (s.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0,
                    d = ph(o, s[o], l);
                o === "float" && (o = "cssFloat"), l ? n.setProperty(o, d) : n[o] = d
            }
    }
    var Xx = U({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Yl(n, s) {
        if (s) {
            if (Xx[n] && (s.children != null || s.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
            if (s.dangerouslySetInnerHTML != null) {
                if (s.children != null) throw Error(r(60));
                if (typeof s.dangerouslySetInnerHTML != "object" || !("__html" in s.dangerouslySetInnerHTML)) throw Error(r(61))
            }
            if (s.style != null && typeof s.style != "object") throw Error(r(62))
        }
    }

    function Xl(n, s) {
        if (n.indexOf("-") === -1) return typeof s.is == "string";
        switch (n) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Jl = null;

    function Zl(n) {
        return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n
    }
    var eu = null,
        fs = null,
        hs = null;

    function gh(n) {
        if (n = Li(n)) {
            if (typeof eu != "function") throw Error(r(280));
            var s = n.stateNode;
            s && (s = aa(s), eu(n.stateNode, n.type, s))
        }
    }

    function yh(n) {
        fs ? hs ? hs.push(n) : hs = [n] : fs = n
    }

    function vh() {
        if (fs) {
            var n = fs,
                s = hs;
            if (hs = fs = null, gh(n), s)
                for (n = 0; n < s.length; n++) gh(s[n])
        }
    }

    function wh(n, s) {
        return n(s)
    }

    function xh() {}
    var tu = !1;

    function Sh(n, s, o) {
        if (tu) return n(s, o);
        tu = !0;
        try {
            return wh(n, s, o)
        } finally {
            tu = !1, (fs !== null || hs !== null) && (xh(), vh())
        }
    }

    function fi(n, s) {
        var o = n.stateNode;
        if (o === null) return null;
        var l = aa(o);
        if (l === null) return null;
        o = l[s];
        e: switch (s) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (n = n.type, l = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !l;
                break e;
            default:
                n = !1
        }
        if (n) return null;
        if (o && typeof o != "function") throw Error(r(231, s, typeof o));
        return o
    }
    var nu = !1;
    if (f) try {
        var hi = {};
        Object.defineProperty(hi, "passive", {
            get: function() {
                nu = !0
            }
        }), window.addEventListener("test", hi, hi), window.removeEventListener("test", hi, hi)
    } catch {
        nu = !1
    }

    function Jx(n, s, o, l, d, p, v, E, T) {
        var D = Array.prototype.slice.call(arguments, 3);
        try {
            s.apply(o, D)
        } catch (H) {
            this.onError(H)
        }
    }
    var pi = !1,
        Vo = null,
        Bo = !1,
        ru = null,
        Zx = {
            onError: function(n) {
                pi = !0, Vo = n
            }
        };

    function e1(n, s, o, l, d, p, v, E, T) {
        pi = !1, Vo = null, Jx.apply(Zx, arguments)
    }

    function t1(n, s, o, l, d, p, v, E, T) {
        if (e1.apply(this, arguments), pi) {
            if (pi) {
                var D = Vo;
                pi = !1, Vo = null
            } else throw Error(r(198));
            Bo || (Bo = !0, ru = D)
        }
    }

    function Ar(n) {
        var s = n,
            o = n;
        if (n.alternate)
            for (; s.return;) s = s.return;
        else {
            n = s;
            do s = n, (s.flags & 4098) !== 0 && (o = s.return), n = s.return; while (n)
        }
        return s.tag === 3 ? o : null
    }

    function bh(n) {
        if (n.tag === 13) {
            var s = n.memoizedState;
            if (s === null && (n = n.alternate, n !== null && (s = n.memoizedState)), s !== null) return s.dehydrated
        }
        return null
    }

    function kh(n) {
        if (Ar(n) !== n) throw Error(r(188))
    }

    function n1(n) {
        var s = n.alternate;
        if (!s) {
            if (s = Ar(n), s === null) throw Error(r(188));
            return s !== n ? null : n
        }
        for (var o = n, l = s;;) {
            var d = o.return;
            if (d === null) break;
            var p = d.alternate;
            if (p === null) {
                if (l = d.return, l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (d.child === p.child) {
                for (p = d.child; p;) {
                    if (p === o) return kh(d), n;
                    if (p === l) return kh(d), s;
                    p = p.sibling
                }
                throw Error(r(188))
            }
            if (o.return !== l.return) o = d, l = p;
            else {
                for (var v = !1, E = d.child; E;) {
                    if (E === o) {
                        v = !0, o = d, l = p;
                        break
                    }
                    if (E === l) {
                        v = !0, l = d, o = p;
                        break
                    }
                    E = E.sibling
                }
                if (!v) {
                    for (E = p.child; E;) {
                        if (E === o) {
                            v = !0, o = p, l = d;
                            break
                        }
                        if (E === l) {
                            v = !0, l = p, o = d;
                            break
                        }
                        E = E.sibling
                    }
                    if (!v) throw Error(r(189))
                }
            }
            if (o.alternate !== l) throw Error(r(190))
        }
        if (o.tag !== 3) throw Error(r(188));
        return o.stateNode.current === o ? n : s
    }

    function Eh(n) {
        return n = n1(n), n !== null ? Ch(n) : null
    }

    function Ch(n) {
        if (n.tag === 5 || n.tag === 6) return n;
        for (n = n.child; n !== null;) {
            var s = Ch(n);
            if (s !== null) return s;
            n = n.sibling
        }
        return null
    }
    var Th = e.unstable_scheduleCallback,
        Ph = e.unstable_cancelCallback,
        r1 = e.unstable_shouldYield,
        s1 = e.unstable_requestPaint,
        Qe = e.unstable_now,
        i1 = e.unstable_getCurrentPriorityLevel,
        su = e.unstable_ImmediatePriority,
        _h = e.unstable_UserBlockingPriority,
        Uo = e.unstable_NormalPriority,
        o1 = e.unstable_LowPriority,
        Rh = e.unstable_IdlePriority,
        zo = null,
        pn = null;

    function a1(n) {
        if (pn && typeof pn.onCommitFiberRoot == "function") try {
            pn.onCommitFiberRoot(zo, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
    }
    var tn = Math.clz32 ? Math.clz32 : c1,
        l1 = Math.log,
        u1 = Math.LN2;

    function c1(n) {
        return n >>>= 0, n === 0 ? 32 : 31 - (l1(n) / u1 | 0) | 0
    }
    var $o = 64,
        Ho = 4194304;

    function mi(n) {
        switch (n & -n) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return n & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return n
        }
    }

    function qo(n, s) {
        var o = n.pendingLanes;
        if (o === 0) return 0;
        var l = 0,
            d = n.suspendedLanes,
            p = n.pingedLanes,
            v = o & 268435455;
        if (v !== 0) {
            var E = v & ~d;
            E !== 0 ? l = mi(E) : (p &= v, p !== 0 && (l = mi(p)))
        } else v = o & ~d, v !== 0 ? l = mi(v) : p !== 0 && (l = mi(p));
        if (l === 0) return 0;
        if (s !== 0 && s !== l && (s & d) === 0 && (d = l & -l, p = s & -s, d >= p || d === 16 && (p & 4194240) !== 0)) return s;
        if ((l & 4) !== 0 && (l |= o & 16), s = n.entangledLanes, s !== 0)
            for (n = n.entanglements, s &= l; 0 < s;) o = 31 - tn(s), d = 1 << o, l |= n[o], s &= ~d;
        return l
    }

    function d1(n, s) {
        switch (n) {
            case 1:
            case 2:
            case 4:
                return s + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return s + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function f1(n, s) {
        for (var o = n.suspendedLanes, l = n.pingedLanes, d = n.expirationTimes, p = n.pendingLanes; 0 < p;) {
            var v = 31 - tn(p),
                E = 1 << v,
                T = d[v];
            T === -1 ? ((E & o) === 0 || (E & l) !== 0) && (d[v] = d1(E, s)) : T <= s && (n.expiredLanes |= E), p &= ~E
        }
    }

    function iu(n) {
        return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
    }

    function Ah() {
        var n = $o;
        return $o <<= 1, ($o & 4194240) === 0 && ($o = 64), n
    }

    function ou(n) {
        for (var s = [], o = 0; 31 > o; o++) s.push(n);
        return s
    }

    function gi(n, s, o) {
        n.pendingLanes |= s, s !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, s = 31 - tn(s), n[s] = o
    }

    function h1(n, s) {
        var o = n.pendingLanes & ~s;
        n.pendingLanes = s, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= s, n.mutableReadLanes &= s, n.entangledLanes &= s, s = n.entanglements;
        var l = n.eventTimes;
        for (n = n.expirationTimes; 0 < o;) {
            var d = 31 - tn(o),
                p = 1 << d;
            s[d] = 0, l[d] = -1, n[d] = -1, o &= ~p
        }
    }

    function au(n, s) {
        var o = n.entangledLanes |= s;
        for (n = n.entanglements; o;) {
            var l = 31 - tn(o),
                d = 1 << l;
            d & s | n[l] & s && (n[l] |= s), o &= ~d
        }
    }
    var Ne = 0;

    function Oh(n) {
        return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Nh, lu, Lh, Mh, Dh, uu = !1,
        Wo = [],
        qn = null,
        Wn = null,
        Kn = null,
        yi = new Map,
        vi = new Map,
        Qn = [],
        p1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function jh(n, s) {
        switch (n) {
            case "focusin":
            case "focusout":
                qn = null;
                break;
            case "dragenter":
            case "dragleave":
                Wn = null;
                break;
            case "mouseover":
            case "mouseout":
                Kn = null;
                break;
            case "pointerover":
            case "pointerout":
                yi.delete(s.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                vi.delete(s.pointerId)
        }
    }

    function wi(n, s, o, l, d, p) {
        return n === null || n.nativeEvent !== p ? (n = {
            blockedOn: s,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: p,
            targetContainers: [d]
        }, s !== null && (s = Li(s), s !== null && lu(s)), n) : (n.eventSystemFlags |= l, s = n.targetContainers, d !== null && s.indexOf(d) === -1 && s.push(d), n)
    }

    function m1(n, s, o, l, d) {
        switch (s) {
            case "focusin":
                return qn = wi(qn, n, s, o, l, d), !0;
            case "dragenter":
                return Wn = wi(Wn, n, s, o, l, d), !0;
            case "mouseover":
                return Kn = wi(Kn, n, s, o, l, d), !0;
            case "pointerover":
                var p = d.pointerId;
                return yi.set(p, wi(yi.get(p) || null, n, s, o, l, d)), !0;
            case "gotpointercapture":
                return p = d.pointerId, vi.set(p, wi(vi.get(p) || null, n, s, o, l, d)), !0
        }
        return !1
    }

    function Ih(n) {
        var s = Or(n.target);
        if (s !== null) {
            var o = Ar(s);
            if (o !== null) {
                if (s = o.tag, s === 13) {
                    if (s = bh(o), s !== null) {
                        n.blockedOn = s, Dh(n.priority, function() {
                            Lh(o)
                        });
                        return
                    }
                } else if (s === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        n.blockedOn = null
    }

    function Ko(n) {
        if (n.blockedOn !== null) return !1;
        for (var s = n.targetContainers; 0 < s.length;) {
            var o = du(n.domEventName, n.eventSystemFlags, s[0], n.nativeEvent);
            if (o === null) {
                o = n.nativeEvent;
                var l = new o.constructor(o.type, o);
                Jl = l, o.target.dispatchEvent(l), Jl = null
            } else return s = Li(o), s !== null && lu(s), n.blockedOn = o, !1;
            s.shift()
        }
        return !0
    }

    function Fh(n, s, o) {
        Ko(n) && o.delete(s)
    }

    function g1() {
        uu = !1, qn !== null && Ko(qn) && (qn = null), Wn !== null && Ko(Wn) && (Wn = null), Kn !== null && Ko(Kn) && (Kn = null), yi.forEach(Fh), vi.forEach(Fh)
    }

    function xi(n, s) {
        n.blockedOn === s && (n.blockedOn = null, uu || (uu = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, g1)))
    }

    function Si(n) {
        function s(d) {
            return xi(d, n)
        }
        if (0 < Wo.length) {
            xi(Wo[0], n);
            for (var o = 1; o < Wo.length; o++) {
                var l = Wo[o];
                l.blockedOn === n && (l.blockedOn = null)
            }
        }
        for (qn !== null && xi(qn, n), Wn !== null && xi(Wn, n), Kn !== null && xi(Kn, n), yi.forEach(s), vi.forEach(s), o = 0; o < Qn.length; o++) l = Qn[o], l.blockedOn === n && (l.blockedOn = null);
        for (; 0 < Qn.length && (o = Qn[0], o.blockedOn === null);) Ih(o), o.blockedOn === null && Qn.shift()
    }
    var ps = N.ReactCurrentBatchConfig,
        Qo = !0;

    function y1(n, s, o, l) {
        var d = Ne,
            p = ps.transition;
        ps.transition = null;
        try {
            Ne = 1, cu(n, s, o, l)
        } finally {
            Ne = d, ps.transition = p
        }
    }

    function v1(n, s, o, l) {
        var d = Ne,
            p = ps.transition;
        ps.transition = null;
        try {
            Ne = 4, cu(n, s, o, l)
        } finally {
            Ne = d, ps.transition = p
        }
    }

    function cu(n, s, o, l) {
        if (Qo) {
            var d = du(n, s, o, l);
            if (d === null) _u(n, s, l, Go, o), jh(n, l);
            else if (m1(d, n, s, o, l)) l.stopPropagation();
            else if (jh(n, l), s & 4 && -1 < p1.indexOf(n)) {
                for (; d !== null;) {
                    var p = Li(d);
                    if (p !== null && Nh(p), p = du(n, s, o, l), p === null && _u(n, s, l, Go, o), p === d) break;
                    d = p
                }
                d !== null && l.stopPropagation()
            } else _u(n, s, l, null, o)
        }
    }
    var Go = null;

    function du(n, s, o, l) {
        if (Go = null, n = Zl(l), n = Or(n), n !== null)
            if (s = Ar(n), s === null) n = null;
            else if (o = s.tag, o === 13) {
            if (n = bh(s), n !== null) return n;
            n = null
        } else if (o === 3) {
            if (s.stateNode.current.memoizedState.isDehydrated) return s.tag === 3 ? s.stateNode.containerInfo : null;
            n = null
        } else s !== n && (n = null);
        return Go = n, null
    }

    function Vh(n) {
        switch (n) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (i1()) {
                    case su:
                        return 1;
                    case _h:
                        return 4;
                    case Uo:
                    case o1:
                        return 16;
                    case Rh:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Gn = null,
        fu = null,
        Yo = null;

    function Bh() {
        if (Yo) return Yo;
        var n, s = fu,
            o = s.length,
            l, d = "value" in Gn ? Gn.value : Gn.textContent,
            p = d.length;
        for (n = 0; n < o && s[n] === d[n]; n++);
        var v = o - n;
        for (l = 1; l <= v && s[o - l] === d[p - l]; l++);
        return Yo = d.slice(n, 1 < l ? 1 - l : void 0)
    }

    function Xo(n) {
        var s = n.keyCode;
        return "charCode" in n ? (n = n.charCode, n === 0 && s === 13 && (n = 13)) : n = s, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0
    }

    function Jo() {
        return !0
    }

    function Uh() {
        return !1
    }

    function It(n) {
        function s(o, l, d, p, v) {
            this._reactName = o, this._targetInst = d, this.type = l, this.nativeEvent = p, this.target = v, this.currentTarget = null;
            for (var E in n) n.hasOwnProperty(E) && (o = n[E], this[E] = o ? o(p) : p[E]);
            return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Jo : Uh, this.isPropagationStopped = Uh, this
        }
        return U(s.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = Jo)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = Jo)
            },
            persist: function() {},
            isPersistent: Jo
        }), s
    }
    var ms = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(n) {
                return n.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        hu = It(ms),
        bi = U({}, ms, {
            view: 0,
            detail: 0
        }),
        w1 = It(bi),
        pu, mu, ki, Zo = U({}, bi, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: yu,
            button: 0,
            buttons: 0,
            relatedTarget: function(n) {
                return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
            },
            movementX: function(n) {
                return "movementX" in n ? n.movementX : (n !== ki && (ki && n.type === "mousemove" ? (pu = n.screenX - ki.screenX, mu = n.screenY - ki.screenY) : mu = pu = 0, ki = n), pu)
            },
            movementY: function(n) {
                return "movementY" in n ? n.movementY : mu
            }
        }),
        zh = It(Zo),
        x1 = U({}, Zo, {
            dataTransfer: 0
        }),
        S1 = It(x1),
        b1 = U({}, bi, {
            relatedTarget: 0
        }),
        gu = It(b1),
        k1 = U({}, ms, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        E1 = It(k1),
        C1 = U({}, ms, {
            clipboardData: function(n) {
                return "clipboardData" in n ? n.clipboardData : window.clipboardData
            }
        }),
        T1 = It(C1),
        P1 = U({}, ms, {
            data: 0
        }),
        $h = It(P1),
        _1 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        R1 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        A1 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function O1(n) {
        var s = this.nativeEvent;
        return s.getModifierState ? s.getModifierState(n) : (n = A1[n]) ? !!s[n] : !1
    }

    function yu() {
        return O1
    }
    var N1 = U({}, bi, {
            key: function(n) {
                if (n.key) {
                    var s = _1[n.key] || n.key;
                    if (s !== "Unidentified") return s
                }
                return n.type === "keypress" ? (n = Xo(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? R1[n.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: yu,
            charCode: function(n) {
                return n.type === "keypress" ? Xo(n) : 0
            },
            keyCode: function(n) {
                return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            },
            which: function(n) {
                return n.type === "keypress" ? Xo(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
            }
        }),
        L1 = It(N1),
        M1 = U({}, Zo, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Hh = It(M1),
        D1 = U({}, bi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: yu
        }),
        j1 = It(D1),
        I1 = U({}, ms, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        F1 = It(I1),
        V1 = U({}, Zo, {
            deltaX: function(n) {
                return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0
            },
            deltaY: function(n) {
                return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        B1 = It(V1),
        U1 = [9, 13, 27, 32],
        vu = f && "CompositionEvent" in window,
        Ei = null;
    f && "documentMode" in document && (Ei = document.documentMode);
    var z1 = f && "TextEvent" in window && !Ei,
        qh = f && (!vu || Ei && 8 < Ei && 11 >= Ei),
        Wh = " ",
        Kh = !1;

    function Qh(n, s) {
        switch (n) {
            case "keyup":
                return U1.indexOf(s.keyCode) !== -1;
            case "keydown":
                return s.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Gh(n) {
        return n = n.detail, typeof n == "object" && "data" in n ? n.data : null
    }
    var gs = !1;

    function $1(n, s) {
        switch (n) {
            case "compositionend":
                return Gh(s);
            case "keypress":
                return s.which !== 32 ? null : (Kh = !0, Wh);
            case "textInput":
                return n = s.data, n === Wh && Kh ? null : n;
            default:
                return null
        }
    }

    function H1(n, s) {
        if (gs) return n === "compositionend" || !vu && Qh(n, s) ? (n = Bh(), Yo = fu = Gn = null, gs = !1, n) : null;
        switch (n) {
            case "paste":
                return null;
            case "keypress":
                if (!(s.ctrlKey || s.altKey || s.metaKey) || s.ctrlKey && s.altKey) {
                    if (s.char && 1 < s.char.length) return s.char;
                    if (s.which) return String.fromCharCode(s.which)
                }
                return null;
            case "compositionend":
                return qh && s.locale !== "ko" ? null : s.data;
            default:
                return null
        }
    }
    var q1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Yh(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s === "input" ? !!q1[n.type] : s === "textarea"
    }

    function Xh(n, s, o, l) {
        yh(l), s = sa(s, "onChange"), 0 < s.length && (o = new hu("onChange", "change", null, o, l), n.push({
            event: o,
            listeners: s
        }))
    }
    var Ci = null,
        Ti = null;

    function W1(n) {
        mp(n, 0)
    }

    function ea(n) {
        var s = Ss(n);
        if (Rr(s)) return n
    }

    function K1(n, s) {
        if (n === "change") return s
    }
    var Jh = !1;
    if (f) {
        var wu;
        if (f) {
            var xu = "oninput" in document;
            if (!xu) {
                var Zh = document.createElement("div");
                Zh.setAttribute("oninput", "return;"), xu = typeof Zh.oninput == "function"
            }
            wu = xu
        } else wu = !1;
        Jh = wu && (!document.documentMode || 9 < document.documentMode)
    }

    function ep() {
        Ci && (Ci.detachEvent("onpropertychange", tp), Ti = Ci = null)
    }

    function tp(n) {
        if (n.propertyName === "value" && ea(Ti)) {
            var s = [];
            Xh(s, Ti, n, Zl(n)), Sh(W1, s)
        }
    }

    function Q1(n, s, o) {
        n === "focusin" ? (ep(), Ci = s, Ti = o, Ci.attachEvent("onpropertychange", tp)) : n === "focusout" && ep()
    }

    function G1(n) {
        if (n === "selectionchange" || n === "keyup" || n === "keydown") return ea(Ti)
    }

    function Y1(n, s) {
        if (n === "click") return ea(s)
    }

    function X1(n, s) {
        if (n === "input" || n === "change") return ea(s)
    }

    function J1(n, s) {
        return n === s && (n !== 0 || 1 / n === 1 / s) || n !== n && s !== s
    }
    var nn = typeof Object.is == "function" ? Object.is : J1;

    function Pi(n, s) {
        if (nn(n, s)) return !0;
        if (typeof n != "object" || n === null || typeof s != "object" || s === null) return !1;
        var o = Object.keys(n),
            l = Object.keys(s);
        if (o.length !== l.length) return !1;
        for (l = 0; l < o.length; l++) {
            var d = o[l];
            if (!h.call(s, d) || !nn(n[d], s[d])) return !1
        }
        return !0
    }

    function np(n) {
        for (; n && n.firstChild;) n = n.firstChild;
        return n
    }

    function rp(n, s) {
        var o = np(n);
        n = 0;
        for (var l; o;) {
            if (o.nodeType === 3) {
                if (l = n + o.textContent.length, n <= s && l >= s) return {
                    node: o,
                    offset: s - n
                };
                n = l
            }
            e: {
                for (; o;) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = np(o)
        }
    }

    function sp(n, s) {
        return n && s ? n === s ? !0 : n && n.nodeType === 3 ? !1 : s && s.nodeType === 3 ? sp(n, s.parentNode) : "contains" in n ? n.contains(s) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(s) & 16) : !1 : !1
    }

    function ip() {
        for (var n = window, s = $n(); s instanceof n.HTMLIFrameElement;) {
            try {
                var o = typeof s.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o) n = s.contentWindow;
            else break;
            s = $n(n.document)
        }
        return s
    }

    function Su(n) {
        var s = n && n.nodeName && n.nodeName.toLowerCase();
        return s && (s === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || s === "textarea" || n.contentEditable === "true")
    }

    function Z1(n) {
        var s = ip(),
            o = n.focusedElem,
            l = n.selectionRange;
        if (s !== o && o && o.ownerDocument && sp(o.ownerDocument.documentElement, o)) {
            if (l !== null && Su(o)) {
                if (s = l.start, n = l.end, n === void 0 && (n = s), "selectionStart" in o) o.selectionStart = s, o.selectionEnd = Math.min(n, o.value.length);
                else if (n = (s = o.ownerDocument || document) && s.defaultView || window, n.getSelection) {
                    n = n.getSelection();
                    var d = o.textContent.length,
                        p = Math.min(l.start, d);
                    l = l.end === void 0 ? p : Math.min(l.end, d), !n.extend && p > l && (d = l, l = p, p = d), d = rp(o, p);
                    var v = rp(o, l);
                    d && v && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== v.node || n.focusOffset !== v.offset) && (s = s.createRange(), s.setStart(d.node, d.offset), n.removeAllRanges(), p > l ? (n.addRange(s), n.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset), n.addRange(s)))
                }
            }
            for (s = [], n = o; n = n.parentNode;) n.nodeType === 1 && s.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < s.length; o++) n = s[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top
        }
    }
    var eS = f && "documentMode" in document && 11 >= document.documentMode,
        ys = null,
        bu = null,
        _i = null,
        ku = !1;

    function op(n, s, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        ku || ys == null || ys !== $n(l) || (l = ys, "selectionStart" in l && Su(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), _i && Pi(_i, l) || (_i = l, l = sa(bu, "onSelect"), 0 < l.length && (s = new hu("onSelect", "select", null, s, o), n.push({
            event: s,
            listeners: l
        }), s.target = ys)))
    }

    function ta(n, s) {
        var o = {};
        return o[n.toLowerCase()] = s.toLowerCase(), o["Webkit" + n] = "webkit" + s, o["Moz" + n] = "moz" + s, o
    }
    var vs = {
            animationend: ta("Animation", "AnimationEnd"),
            animationiteration: ta("Animation", "AnimationIteration"),
            animationstart: ta("Animation", "AnimationStart"),
            transitionend: ta("Transition", "TransitionEnd")
        },
        Eu = {},
        ap = {};
    f && (ap = document.createElement("div").style, "AnimationEvent" in window || (delete vs.animationend.animation, delete vs.animationiteration.animation, delete vs.animationstart.animation), "TransitionEvent" in window || delete vs.transitionend.transition);

    function na(n) {
        if (Eu[n]) return Eu[n];
        if (!vs[n]) return n;
        var s = vs[n],
            o;
        for (o in s)
            if (s.hasOwnProperty(o) && o in ap) return Eu[n] = s[o];
        return n
    }
    var lp = na("animationend"),
        up = na("animationiteration"),
        cp = na("animationstart"),
        dp = na("transitionend"),
        fp = new Map,
        hp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Yn(n, s) {
        fp.set(n, s), u(s, [n])
    }
    for (var Cu = 0; Cu < hp.length; Cu++) {
        var Tu = hp[Cu],
            tS = Tu.toLowerCase(),
            nS = Tu[0].toUpperCase() + Tu.slice(1);
        Yn(tS, "on" + nS)
    }
    Yn(lp, "onAnimationEnd"), Yn(up, "onAnimationIteration"), Yn(cp, "onAnimationStart"), Yn("dblclick", "onDoubleClick"), Yn("focusin", "onFocus"), Yn("focusout", "onBlur"), Yn(dp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        rS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));

    function pp(n, s, o) {
        var l = n.type || "unknown-event";
        n.currentTarget = o, t1(l, s, void 0, n), n.currentTarget = null
    }

    function mp(n, s) {
        s = (s & 4) !== 0;
        for (var o = 0; o < n.length; o++) {
            var l = n[o],
                d = l.event;
            l = l.listeners;
            e: {
                var p = void 0;
                if (s)
                    for (var v = l.length - 1; 0 <= v; v--) {
                        var E = l[v],
                            T = E.instance,
                            D = E.currentTarget;
                        if (E = E.listener, T !== p && d.isPropagationStopped()) break e;
                        pp(d, E, D), p = T
                    } else
                        for (v = 0; v < l.length; v++) {
                            if (E = l[v], T = E.instance, D = E.currentTarget, E = E.listener, T !== p && d.isPropagationStopped()) break e;
                            pp(d, E, D), p = T
                        }
            }
        }
        if (Bo) throw n = ru, Bo = !1, ru = null, n
    }

    function Fe(n, s) {
        var o = s[Mu];
        o === void 0 && (o = s[Mu] = new Set);
        var l = n + "__bubble";
        o.has(l) || (gp(s, n, 2, !1), o.add(l))
    }

    function Pu(n, s, o) {
        var l = 0;
        s && (l |= 4), gp(o, n, l, s)
    }
    var ra = "_reactListening" + Math.random().toString(36).slice(2);

    function Ai(n) {
        if (!n[ra]) {
            n[ra] = !0, i.forEach(function(o) {
                o !== "selectionchange" && (rS.has(o) || Pu(o, !1, n), Pu(o, !0, n))
            });
            var s = n.nodeType === 9 ? n : n.ownerDocument;
            s === null || s[ra] || (s[ra] = !0, Pu("selectionchange", !1, s))
        }
    }

    function gp(n, s, o, l) {
        switch (Vh(s)) {
            case 1:
                var d = y1;
                break;
            case 4:
                d = v1;
                break;
            default:
                d = cu
        }
        o = d.bind(null, s, o, n), d = void 0, !nu || s !== "touchstart" && s !== "touchmove" && s !== "wheel" || (d = !0), l ? d !== void 0 ? n.addEventListener(s, o, {
            capture: !0,
            passive: d
        }) : n.addEventListener(s, o, !0) : d !== void 0 ? n.addEventListener(s, o, {
            passive: d
        }) : n.addEventListener(s, o, !1)
    }

    function _u(n, s, o, l, d) {
        var p = l;
        if ((s & 1) === 0 && (s & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var v = l.tag;
            if (v === 3 || v === 4) {
                var E = l.stateNode.containerInfo;
                if (E === d || E.nodeType === 8 && E.parentNode === d) break;
                if (v === 4)
                    for (v = l.return; v !== null;) {
                        var T = v.tag;
                        if ((T === 3 || T === 4) && (T = v.stateNode.containerInfo, T === d || T.nodeType === 8 && T.parentNode === d)) return;
                        v = v.return
                    }
                for (; E !== null;) {
                    if (v = Or(E), v === null) return;
                    if (T = v.tag, T === 5 || T === 6) {
                        l = p = v;
                        continue e
                    }
                    E = E.parentNode
                }
            }
            l = l.return
        }
        Sh(function() {
            var D = p,
                H = Zl(o),
                q = [];
            e: {
                var $ = fp.get(n);
                if ($ !== void 0) {
                    var Y = hu,
                        te = n;
                    switch (n) {
                        case "keypress":
                            if (Xo(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Y = L1;
                            break;
                        case "focusin":
                            te = "focus", Y = gu;
                            break;
                        case "focusout":
                            te = "blur", Y = gu;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Y = gu;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Y = zh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Y = S1;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Y = j1;
                            break;
                        case lp:
                        case up:
                        case cp:
                            Y = E1;
                            break;
                        case dp:
                            Y = F1;
                            break;
                        case "scroll":
                            Y = w1;
                            break;
                        case "wheel":
                            Y = B1;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Y = T1;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Y = Hh
                    }
                    var se = (s & 4) !== 0,
                        Ge = !se && n === "scroll",
                        O = se ? $ !== null ? $ + "Capture" : null : $;
                    se = [];
                    for (var _ = D, L; _ !== null;) {
                        L = _;
                        var Q = L.stateNode;
                        if (L.tag === 5 && Q !== null && (L = Q, O !== null && (Q = fi(_, O), Q != null && se.push(Oi(_, Q, L)))), Ge) break;
                        _ = _.return
                    }
                    0 < se.length && ($ = new Y($, te, null, o, H), q.push({
                        event: $,
                        listeners: se
                    }))
                }
            }
            if ((s & 7) === 0) {
                e: {
                    if ($ = n === "mouseover" || n === "pointerover", Y = n === "mouseout" || n === "pointerout", $ && o !== Jl && (te = o.relatedTarget || o.fromElement) && (Or(te) || te[Pn])) break e;
                    if ((Y || $) && ($ = H.window === H ? H : ($ = H.ownerDocument) ? $.defaultView || $.parentWindow : window, Y ? (te = o.relatedTarget || o.toElement, Y = D, te = te ? Or(te) : null, te !== null && (Ge = Ar(te), te !== Ge || te.tag !== 5 && te.tag !== 6) && (te = null)) : (Y = null, te = D), Y !== te)) {
                        if (se = zh, Q = "onMouseLeave", O = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (se = Hh, Q = "onPointerLeave", O = "onPointerEnter", _ = "pointer"), Ge = Y == null ? $ : Ss(Y), L = te == null ? $ : Ss(te), $ = new se(Q, _ + "leave", Y, o, H), $.target = Ge, $.relatedTarget = L, Q = null, Or(H) === D && (se = new se(O, _ + "enter", te, o, H), se.target = L, se.relatedTarget = Ge, Q = se), Ge = Q, Y && te) t: {
                            for (se = Y, O = te, _ = 0, L = se; L; L = ws(L)) _++;
                            for (L = 0, Q = O; Q; Q = ws(Q)) L++;
                            for (; 0 < _ - L;) se = ws(se),
                            _--;
                            for (; 0 < L - _;) O = ws(O),
                            L--;
                            for (; _--;) {
                                if (se === O || O !== null && se === O.alternate) break t;
                                se = ws(se), O = ws(O)
                            }
                            se = null
                        }
                        else se = null;
                        Y !== null && yp(q, $, Y, se, !1), te !== null && Ge !== null && yp(q, Ge, te, se, !0)
                    }
                }
                e: {
                    if ($ = D ? Ss(D) : window, Y = $.nodeName && $.nodeName.toLowerCase(), Y === "select" || Y === "input" && $.type === "file") var oe = K1;
                    else if (Yh($))
                        if (Jh) oe = X1;
                        else {
                            oe = G1;
                            var ae = Q1
                        }
                    else(Y = $.nodeName) && Y.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (oe = Y1);
                    if (oe && (oe = oe(n, D))) {
                        Xh(q, oe, o, H);
                        break e
                    }
                    ae && ae(n, $, D),
                    n === "focusout" && (ae = $._wrapperState) && ae.controlled && $.type === "number" && Kl($, "number", $.value)
                }
                switch (ae = D ? Ss(D) : window, n) {
                    case "focusin":
                        (Yh(ae) || ae.contentEditable === "true") && (ys = ae, bu = D, _i = null);
                        break;
                    case "focusout":
                        _i = bu = ys = null;
                        break;
                    case "mousedown":
                        ku = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ku = !1, op(q, o, H);
                        break;
                    case "selectionchange":
                        if (eS) break;
                    case "keydown":
                    case "keyup":
                        op(q, o, H)
                }
                var le;
                if (vu) e: {
                    switch (n) {
                        case "compositionstart":
                            var me = "onCompositionStart";
                            break e;
                        case "compositionend":
                            me = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            me = "onCompositionUpdate";
                            break e
                    }
                    me = void 0
                }
                else gs ? Qh(n, o) && (me = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (me = "onCompositionStart");me && (qh && o.locale !== "ko" && (gs || me !== "onCompositionStart" ? me === "onCompositionEnd" && gs && (le = Bh()) : (Gn = H, fu = "value" in Gn ? Gn.value : Gn.textContent, gs = !0)), ae = sa(D, me), 0 < ae.length && (me = new $h(me, n, null, o, H), q.push({
                    event: me,
                    listeners: ae
                }), le ? me.data = le : (le = Gh(o), le !== null && (me.data = le)))),
                (le = z1 ? $1(n, o) : H1(n, o)) && (D = sa(D, "onBeforeInput"), 0 < D.length && (H = new $h("onBeforeInput", "beforeinput", null, o, H), q.push({
                    event: H,
                    listeners: D
                }), H.data = le))
            }
            mp(q, s)
        })
    }

    function Oi(n, s, o) {
        return {
            instance: n,
            listener: s,
            currentTarget: o
        }
    }

    function sa(n, s) {
        for (var o = s + "Capture", l = []; n !== null;) {
            var d = n,
                p = d.stateNode;
            d.tag === 5 && p !== null && (d = p, p = fi(n, o), p != null && l.unshift(Oi(n, p, d)), p = fi(n, s), p != null && l.push(Oi(n, p, d))), n = n.return
        }
        return l
    }

    function ws(n) {
        if (n === null) return null;
        do n = n.return; while (n && n.tag !== 5);
        return n || null
    }

    function yp(n, s, o, l, d) {
        for (var p = s._reactName, v = []; o !== null && o !== l;) {
            var E = o,
                T = E.alternate,
                D = E.stateNode;
            if (T !== null && T === l) break;
            E.tag === 5 && D !== null && (E = D, d ? (T = fi(o, p), T != null && v.unshift(Oi(o, T, E))) : d || (T = fi(o, p), T != null && v.push(Oi(o, T, E)))), o = o.return
        }
        v.length !== 0 && n.push({
            event: s,
            listeners: v
        })
    }
    var sS = /\r\n?/g,
        iS = /\u0000|\uFFFD/g;

    function vp(n) {
        return (typeof n == "string" ? n : "" + n).replace(sS, `
`).replace(iS, "")
    }

    function ia(n, s, o) {
        if (s = vp(s), vp(n) !== s && o) throw Error(r(425))
    }

    function oa() {}
    var Ru = null,
        Au = null;

    function Ou(n, s) {
        return n === "textarea" || n === "noscript" || typeof s.children == "string" || typeof s.children == "number" || typeof s.dangerouslySetInnerHTML == "object" && s.dangerouslySetInnerHTML !== null && s.dangerouslySetInnerHTML.__html != null
    }
    var Nu = typeof setTimeout == "function" ? setTimeout : void 0,
        oS = typeof clearTimeout == "function" ? clearTimeout : void 0,
        wp = typeof Promise == "function" ? Promise : void 0,
        aS = typeof queueMicrotask == "function" ? queueMicrotask : typeof wp < "u" ? function(n) {
            return wp.resolve(null).then(n).catch(lS)
        } : Nu;

    function lS(n) {
        setTimeout(function() {
            throw n
        })
    }

    function Lu(n, s) {
        var o = s,
            l = 0;
        do {
            var d = o.nextSibling;
            if (n.removeChild(o), d && d.nodeType === 8)
                if (o = d.data, o === "/$") {
                    if (l === 0) {
                        n.removeChild(d), Si(s);
                        return
                    }
                    l--
                } else o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = d
        } while (o);
        Si(s)
    }

    function Xn(n) {
        for (; n != null; n = n.nextSibling) {
            var s = n.nodeType;
            if (s === 1 || s === 3) break;
            if (s === 8) {
                if (s = n.data, s === "$" || s === "$!" || s === "$?") break;
                if (s === "/$") return null
            }
        }
        return n
    }

    function xp(n) {
        n = n.previousSibling;
        for (var s = 0; n;) {
            if (n.nodeType === 8) {
                var o = n.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (s === 0) return n;
                    s--
                } else o === "/$" && s++
            }
            n = n.previousSibling
        }
        return null
    }
    var xs = Math.random().toString(36).slice(2),
        mn = "__reactFiber$" + xs,
        Ni = "__reactProps$" + xs,
        Pn = "__reactContainer$" + xs,
        Mu = "__reactEvents$" + xs,
        uS = "__reactListeners$" + xs,
        cS = "__reactHandles$" + xs;

    function Or(n) {
        var s = n[mn];
        if (s) return s;
        for (var o = n.parentNode; o;) {
            if (s = o[Pn] || o[mn]) {
                if (o = s.alternate, s.child !== null || o !== null && o.child !== null)
                    for (n = xp(n); n !== null;) {
                        if (o = n[mn]) return o;
                        n = xp(n)
                    }
                return s
            }
            n = o, o = n.parentNode
        }
        return null
    }

    function Li(n) {
        return n = n[mn] || n[Pn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
    }

    function Ss(n) {
        if (n.tag === 5 || n.tag === 6) return n.stateNode;
        throw Error(r(33))
    }

    function aa(n) {
        return n[Ni] || null
    }
    var Du = [],
        bs = -1;

    function Jn(n) {
        return {
            current: n
        }
    }

    function Ve(n) {
        0 > bs || (n.current = Du[bs], Du[bs] = null, bs--)
    }

    function Ie(n, s) {
        bs++, Du[bs] = n.current, n.current = s
    }
    var Zn = {},
        ht = Jn(Zn),
        Ct = Jn(!1),
        Nr = Zn;

    function ks(n, s) {
        var o = n.type.contextTypes;
        if (!o) return Zn;
        var l = n.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === s) return l.__reactInternalMemoizedMaskedChildContext;
        var d = {},
            p;
        for (p in o) d[p] = s[p];
        return l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = s, n.__reactInternalMemoizedMaskedChildContext = d), d
    }

    function Tt(n) {
        return n = n.childContextTypes, n != null
    }

    function la() {
        Ve(Ct), Ve(ht)
    }

    function Sp(n, s, o) {
        if (ht.current !== Zn) throw Error(r(168));
        Ie(ht, s), Ie(Ct, o)
    }

    function bp(n, s, o) {
        var l = n.stateNode;
        if (s = s.childContextTypes, typeof l.getChildContext != "function") return o;
        l = l.getChildContext();
        for (var d in l)
            if (!(d in s)) throw Error(r(108, Ae(n) || "Unknown", d));
        return U({}, o, l)
    }

    function ua(n) {
        return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Zn, Nr = ht.current, Ie(ht, n), Ie(Ct, Ct.current), !0
    }

    function kp(n, s, o) {
        var l = n.stateNode;
        if (!l) throw Error(r(169));
        o ? (n = bp(n, s, Nr), l.__reactInternalMemoizedMergedChildContext = n, Ve(Ct), Ve(ht), Ie(ht, n)) : Ve(Ct), Ie(Ct, o)
    }
    var _n = null,
        ca = !1,
        ju = !1;

    function Ep(n) {
        _n === null ? _n = [n] : _n.push(n)
    }

    function dS(n) {
        ca = !0, Ep(n)
    }

    function er() {
        if (!ju && _n !== null) {
            ju = !0;
            var n = 0,
                s = Ne;
            try {
                var o = _n;
                for (Ne = 1; n < o.length; n++) {
                    var l = o[n];
                    do l = l(!0); while (l !== null)
                }
                _n = null, ca = !1
            } catch (d) {
                throw _n !== null && (_n = _n.slice(n + 1)), Th(su, er), d
            } finally {
                Ne = s, ju = !1
            }
        }
        return null
    }
    var Es = [],
        Cs = 0,
        da = null,
        fa = 0,
        $t = [],
        Ht = 0,
        Lr = null,
        Rn = 1,
        An = "";

    function Mr(n, s) {
        Es[Cs++] = fa, Es[Cs++] = da, da = n, fa = s
    }

    function Cp(n, s, o) {
        $t[Ht++] = Rn, $t[Ht++] = An, $t[Ht++] = Lr, Lr = n;
        var l = Rn;
        n = An;
        var d = 32 - tn(l) - 1;
        l &= ~(1 << d), o += 1;
        var p = 32 - tn(s) + d;
        if (30 < p) {
            var v = d - d % 5;
            p = (l & (1 << v) - 1).toString(32), l >>= v, d -= v, Rn = 1 << 32 - tn(s) + d | o << d | l, An = p + n
        } else Rn = 1 << p | o << d | l, An = n
    }

    function Iu(n) {
        n.return !== null && (Mr(n, 1), Cp(n, 1, 0))
    }

    function Fu(n) {
        for (; n === da;) da = Es[--Cs], Es[Cs] = null, fa = Es[--Cs], Es[Cs] = null;
        for (; n === Lr;) Lr = $t[--Ht], $t[Ht] = null, An = $t[--Ht], $t[Ht] = null, Rn = $t[--Ht], $t[Ht] = null
    }
    var Ft = null,
        Vt = null,
        Ue = !1,
        rn = null;

    function Tp(n, s) {
        var o = Qt(5, null, null, 0);
        o.elementType = "DELETED", o.stateNode = s, o.return = n, s = n.deletions, s === null ? (n.deletions = [o], n.flags |= 16) : s.push(o)
    }

    function Pp(n, s) {
        switch (n.tag) {
            case 5:
                var o = n.type;
                return s = s.nodeType !== 1 || o.toLowerCase() !== s.nodeName.toLowerCase() ? null : s, s !== null ? (n.stateNode = s, Ft = n, Vt = Xn(s.firstChild), !0) : !1;
            case 6:
                return s = n.pendingProps === "" || s.nodeType !== 3 ? null : s, s !== null ? (n.stateNode = s, Ft = n, Vt = null, !0) : !1;
            case 13:
                return s = s.nodeType !== 8 ? null : s, s !== null ? (o = Lr !== null ? {
                    id: Rn,
                    overflow: An
                } : null, n.memoizedState = {
                    dehydrated: s,
                    treeContext: o,
                    retryLane: 1073741824
                }, o = Qt(18, null, null, 0), o.stateNode = s, o.return = n, n.child = o, Ft = n, Vt = null, !0) : !1;
            default:
                return !1
        }
    }

    function Vu(n) {
        return (n.mode & 1) !== 0 && (n.flags & 128) === 0
    }

    function Bu(n) {
        if (Ue) {
            var s = Vt;
            if (s) {
                var o = s;
                if (!Pp(n, s)) {
                    if (Vu(n)) throw Error(r(418));
                    s = Xn(o.nextSibling);
                    var l = Ft;
                    s && Pp(n, s) ? Tp(l, o) : (n.flags = n.flags & -4097 | 2, Ue = !1, Ft = n)
                }
            } else {
                if (Vu(n)) throw Error(r(418));
                n.flags = n.flags & -4097 | 2, Ue = !1, Ft = n
            }
        }
    }

    function _p(n) {
        for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13;) n = n.return;
        Ft = n
    }

    function ha(n) {
        if (n !== Ft) return !1;
        if (!Ue) return _p(n), Ue = !0, !1;
        var s;
        if ((s = n.tag !== 3) && !(s = n.tag !== 5) && (s = n.type, s = s !== "head" && s !== "body" && !Ou(n.type, n.memoizedProps)), s && (s = Vt)) {
            if (Vu(n)) throw Rp(), Error(r(418));
            for (; s;) Tp(n, s), s = Xn(s.nextSibling)
        }
        if (_p(n), n.tag === 13) {
            if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
            e: {
                for (n = n.nextSibling, s = 0; n;) {
                    if (n.nodeType === 8) {
                        var o = n.data;
                        if (o === "/$") {
                            if (s === 0) {
                                Vt = Xn(n.nextSibling);
                                break e
                            }
                            s--
                        } else o !== "$" && o !== "$!" && o !== "$?" || s++
                    }
                    n = n.nextSibling
                }
                Vt = null
            }
        } else Vt = Ft ? Xn(n.stateNode.nextSibling) : null;
        return !0
    }

    function Rp() {
        for (var n = Vt; n;) n = Xn(n.nextSibling)
    }

    function Ts() {
        Vt = Ft = null, Ue = !1
    }

    function Uu(n) {
        rn === null ? rn = [n] : rn.push(n)
    }
    var fS = N.ReactCurrentBatchConfig;

    function Mi(n, s, o) {
        if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
            if (o._owner) {
                if (o = o._owner, o) {
                    if (o.tag !== 1) throw Error(r(309));
                    var l = o.stateNode
                }
                if (!l) throw Error(r(147, n));
                var d = l,
                    p = "" + n;
                return s !== null && s.ref !== null && typeof s.ref == "function" && s.ref._stringRef === p ? s.ref : (s = function(v) {
                    var E = d.refs;
                    v === null ? delete E[p] : E[p] = v
                }, s._stringRef = p, s)
            }
            if (typeof n != "string") throw Error(r(284));
            if (!o._owner) throw Error(r(290, n))
        }
        return n
    }

    function pa(n, s) {
        throw n = Object.prototype.toString.call(s), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : n))
    }

    function Ap(n) {
        var s = n._init;
        return s(n._payload)
    }

    function Op(n) {
        function s(O, _) {
            if (n) {
                var L = O.deletions;
                L === null ? (O.deletions = [_], O.flags |= 16) : L.push(_)
            }
        }

        function o(O, _) {
            if (!n) return null;
            for (; _ !== null;) s(O, _), _ = _.sibling;
            return null
        }

        function l(O, _) {
            for (O = new Map; _ !== null;) _.key !== null ? O.set(_.key, _) : O.set(_.index, _), _ = _.sibling;
            return O
        }

        function d(O, _) {
            return O = lr(O, _), O.index = 0, O.sibling = null, O
        }

        function p(O, _, L) {
            return O.index = L, n ? (L = O.alternate, L !== null ? (L = L.index, L < _ ? (O.flags |= 2, _) : L) : (O.flags |= 2, _)) : (O.flags |= 1048576, _)
        }

        function v(O) {
            return n && O.alternate === null && (O.flags |= 2), O
        }

        function E(O, _, L, Q) {
            return _ === null || _.tag !== 6 ? (_ = Nc(L, O.mode, Q), _.return = O, _) : (_ = d(_, L), _.return = O, _)
        }

        function T(O, _, L, Q) {
            var oe = L.type;
            return oe === G ? H(O, _, L.props.children, Q, L.key) : _ !== null && (_.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === we && Ap(oe) === _.type) ? (Q = d(_, L.props), Q.ref = Mi(O, _, L), Q.return = O, Q) : (Q = Fa(L.type, L.key, L.props, null, O.mode, Q), Q.ref = Mi(O, _, L), Q.return = O, Q)
        }

        function D(O, _, L, Q) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = Lc(L, O.mode, Q), _.return = O, _) : (_ = d(_, L.children || []), _.return = O, _)
        }

        function H(O, _, L, Q, oe) {
            return _ === null || _.tag !== 7 ? (_ = zr(L, O.mode, Q, oe), _.return = O, _) : (_ = d(_, L), _.return = O, _)
        }

        function q(O, _, L) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Nc("" + _, O.mode, L), _.return = O, _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                    case B:
                        return L = Fa(_.type, _.key, _.props, null, O.mode, L), L.ref = Mi(O, null, _), L.return = O, L;
                    case K:
                        return _ = Lc(_, O.mode, L), _.return = O, _;
                    case we:
                        var Q = _._init;
                        return q(O, Q(_._payload), L)
                }
                if (ui(_) || ie(_)) return _ = zr(_, O.mode, L, null), _.return = O, _;
                pa(O, _)
            }
            return null
        }

        function $(O, _, L, Q) {
            var oe = _ !== null ? _.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number") return oe !== null ? null : E(O, _, "" + L, Q);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case B:
                        return L.key === oe ? T(O, _, L, Q) : null;
                    case K:
                        return L.key === oe ? D(O, _, L, Q) : null;
                    case we:
                        return oe = L._init, $(O, _, oe(L._payload), Q)
                }
                if (ui(L) || ie(L)) return oe !== null ? null : H(O, _, L, Q, null);
                pa(O, L)
            }
            return null
        }

        function Y(O, _, L, Q, oe) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number") return O = O.get(L) || null, E(_, O, "" + Q, oe);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case B:
                        return O = O.get(Q.key === null ? L : Q.key) || null, T(_, O, Q, oe);
                    case K:
                        return O = O.get(Q.key === null ? L : Q.key) || null, D(_, O, Q, oe);
                    case we:
                        var ae = Q._init;
                        return Y(O, _, L, ae(Q._payload), oe)
                }
                if (ui(Q) || ie(Q)) return O = O.get(L) || null, H(_, O, Q, oe, null);
                pa(_, Q)
            }
            return null
        }

        function te(O, _, L, Q) {
            for (var oe = null, ae = null, le = _, me = _ = 0, it = null; le !== null && me < L.length; me++) {
                le.index > me ? (it = le, le = null) : it = le.sibling;
                var _e = $(O, le, L[me], Q);
                if (_e === null) {
                    le === null && (le = it);
                    break
                }
                n && le && _e.alternate === null && s(O, le), _ = p(_e, _, me), ae === null ? oe = _e : ae.sibling = _e, ae = _e, le = it
            }
            if (me === L.length) return o(O, le), Ue && Mr(O, me), oe;
            if (le === null) {
                for (; me < L.length; me++) le = q(O, L[me], Q), le !== null && (_ = p(le, _, me), ae === null ? oe = le : ae.sibling = le, ae = le);
                return Ue && Mr(O, me), oe
            }
            for (le = l(O, le); me < L.length; me++) it = Y(le, O, me, L[me], Q), it !== null && (n && it.alternate !== null && le.delete(it.key === null ? me : it.key), _ = p(it, _, me), ae === null ? oe = it : ae.sibling = it, ae = it);
            return n && le.forEach(function(ur) {
                return s(O, ur)
            }), Ue && Mr(O, me), oe
        }

        function se(O, _, L, Q) {
            var oe = ie(L);
            if (typeof oe != "function") throw Error(r(150));
            if (L = oe.call(L), L == null) throw Error(r(151));
            for (var ae = oe = null, le = _, me = _ = 0, it = null, _e = L.next(); le !== null && !_e.done; me++, _e = L.next()) {
                le.index > me ? (it = le, le = null) : it = le.sibling;
                var ur = $(O, le, _e.value, Q);
                if (ur === null) {
                    le === null && (le = it);
                    break
                }
                n && le && ur.alternate === null && s(O, le), _ = p(ur, _, me), ae === null ? oe = ur : ae.sibling = ur, ae = ur, le = it
            }
            if (_e.done) return o(O, le), Ue && Mr(O, me), oe;
            if (le === null) {
                for (; !_e.done; me++, _e = L.next()) _e = q(O, _e.value, Q), _e !== null && (_ = p(_e, _, me), ae === null ? oe = _e : ae.sibling = _e, ae = _e);
                return Ue && Mr(O, me), oe
            }
            for (le = l(O, le); !_e.done; me++, _e = L.next()) _e = Y(le, O, me, _e.value, Q), _e !== null && (n && _e.alternate !== null && le.delete(_e.key === null ? me : _e.key), _ = p(_e, _, me), ae === null ? oe = _e : ae.sibling = _e, ae = _e);
            return n && le.forEach(function(qS) {
                return s(O, qS)
            }), Ue && Mr(O, me), oe
        }

        function Ge(O, _, L, Q) {
            if (typeof L == "object" && L !== null && L.type === G && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case B:
                        e: {
                            for (var oe = L.key, ae = _; ae !== null;) {
                                if (ae.key === oe) {
                                    if (oe = L.type, oe === G) {
                                        if (ae.tag === 7) {
                                            o(O, ae.sibling), _ = d(ae, L.props.children), _.return = O, O = _;
                                            break e
                                        }
                                    } else if (ae.elementType === oe || typeof oe == "object" && oe !== null && oe.$$typeof === we && Ap(oe) === ae.type) {
                                        o(O, ae.sibling), _ = d(ae, L.props), _.ref = Mi(O, ae, L), _.return = O, O = _;
                                        break e
                                    }
                                    o(O, ae);
                                    break
                                } else s(O, ae);
                                ae = ae.sibling
                            }
                            L.type === G ? (_ = zr(L.props.children, O.mode, Q, L.key), _.return = O, O = _) : (Q = Fa(L.type, L.key, L.props, null, O.mode, Q), Q.ref = Mi(O, _, L), Q.return = O, O = Q)
                        }
                        return v(O);
                    case K:
                        e: {
                            for (ae = L.key; _ !== null;) {
                                if (_.key === ae)
                                    if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                                        o(O, _.sibling), _ = d(_, L.children || []), _.return = O, O = _;
                                        break e
                                    } else {
                                        o(O, _);
                                        break
                                    }
                                else s(O, _);
                                _ = _.sibling
                            }
                            _ = Lc(L, O.mode, Q),
                            _.return = O,
                            O = _
                        }
                        return v(O);
                    case we:
                        return ae = L._init, Ge(O, _, ae(L._payload), Q)
                }
                if (ui(L)) return te(O, _, L, Q);
                if (ie(L)) return se(O, _, L, Q);
                pa(O, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (o(O, _.sibling), _ = d(_, L), _.return = O, O = _) : (o(O, _), _ = Nc(L, O.mode, Q), _.return = O, O = _), v(O)) : o(O, _)
        }
        return Ge
    }
    var Ps = Op(!0),
        Np = Op(!1),
        ma = Jn(null),
        ga = null,
        _s = null,
        zu = null;

    function $u() {
        zu = _s = ga = null
    }

    function Hu(n) {
        var s = ma.current;
        Ve(ma), n._currentValue = s
    }

    function qu(n, s, o) {
        for (; n !== null;) {
            var l = n.alternate;
            if ((n.childLanes & s) !== s ? (n.childLanes |= s, l !== null && (l.childLanes |= s)) : l !== null && (l.childLanes & s) !== s && (l.childLanes |= s), n === o) break;
            n = n.return
        }
    }

    function Rs(n, s) {
        ga = n, zu = _s = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & s) !== 0 && (Pt = !0), n.firstContext = null)
    }

    function qt(n) {
        var s = n._currentValue;
        if (zu !== n)
            if (n = {
                    context: n,
                    memoizedValue: s,
                    next: null
                }, _s === null) {
                if (ga === null) throw Error(r(308));
                _s = n, ga.dependencies = {
                    lanes: 0,
                    firstContext: n
                }
            } else _s = _s.next = n;
        return s
    }
    var Dr = null;

    function Wu(n) {
        Dr === null ? Dr = [n] : Dr.push(n)
    }

    function Lp(n, s, o, l) {
        var d = s.interleaved;
        return d === null ? (o.next = o, Wu(s)) : (o.next = d.next, d.next = o), s.interleaved = o, On(n, l)
    }

    function On(n, s) {
        n.lanes |= s;
        var o = n.alternate;
        for (o !== null && (o.lanes |= s), o = n, n = n.return; n !== null;) n.childLanes |= s, o = n.alternate, o !== null && (o.childLanes |= s), o = n, n = n.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var tr = !1;

    function Ku(n) {
        n.updateQueue = {
            baseState: n.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Mp(n, s) {
        n = n.updateQueue, s.updateQueue === n && (s.updateQueue = {
            baseState: n.baseState,
            firstBaseUpdate: n.firstBaseUpdate,
            lastBaseUpdate: n.lastBaseUpdate,
            shared: n.shared,
            effects: n.effects
        })
    }

    function Nn(n, s) {
        return {
            eventTime: n,
            lane: s,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function nr(n, s, o) {
        var l = n.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Te & 2) !== 0) {
            var d = l.pending;
            return d === null ? s.next = s : (s.next = d.next, d.next = s), l.pending = s, On(n, o)
        }
        return d = l.interleaved, d === null ? (s.next = s, Wu(l)) : (s.next = d.next, d.next = s), l.interleaved = s, On(n, o)
    }

    function ya(n, s, o) {
        if (s = s.updateQueue, s !== null && (s = s.shared, (o & 4194240) !== 0)) {
            var l = s.lanes;
            l &= n.pendingLanes, o |= l, s.lanes = o, au(n, o)
        }
    }

    function Dp(n, s) {
        var o = n.updateQueue,
            l = n.alternate;
        if (l !== null && (l = l.updateQueue, o === l)) {
            var d = null,
                p = null;
            if (o = o.firstBaseUpdate, o !== null) {
                do {
                    var v = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    p === null ? d = p = v : p = p.next = v, o = o.next
                } while (o !== null);
                p === null ? d = p = s : p = p.next = s
            } else d = p = s;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: p,
                shared: l.shared,
                effects: l.effects
            }, n.updateQueue = o;
            return
        }
        n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = s : n.next = s, o.lastBaseUpdate = s
    }

    function va(n, s, o, l) {
        var d = n.updateQueue;
        tr = !1;
        var p = d.firstBaseUpdate,
            v = d.lastBaseUpdate,
            E = d.shared.pending;
        if (E !== null) {
            d.shared.pending = null;
            var T = E,
                D = T.next;
            T.next = null, v === null ? p = D : v.next = D, v = T;
            var H = n.alternate;
            H !== null && (H = H.updateQueue, E = H.lastBaseUpdate, E !== v && (E === null ? H.firstBaseUpdate = D : E.next = D, H.lastBaseUpdate = T))
        }
        if (p !== null) {
            var q = d.baseState;
            v = 0, H = D = T = null, E = p;
            do {
                var $ = E.lane,
                    Y = E.eventTime;
                if ((l & $) === $) {
                    H !== null && (H = H.next = {
                        eventTime: Y,
                        lane: 0,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null
                    });
                    e: {
                        var te = n,
                            se = E;
                        switch ($ = s, Y = o, se.tag) {
                            case 1:
                                if (te = se.payload, typeof te == "function") {
                                    q = te.call(Y, q, $);
                                    break e
                                }
                                q = te;
                                break e;
                            case 3:
                                te.flags = te.flags & -65537 | 128;
                            case 0:
                                if (te = se.payload, $ = typeof te == "function" ? te.call(Y, q, $) : te, $ == null) break e;
                                q = U({}, q, $);
                                break e;
                            case 2:
                                tr = !0
                        }
                    }
                    E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = d.effects, $ === null ? d.effects = [E] : $.push(E))
                } else Y = {
                    eventTime: Y,
                    lane: $,
                    tag: E.tag,
                    payload: E.payload,
                    callback: E.callback,
                    next: null
                }, H === null ? (D = H = Y, T = q) : H = H.next = Y, v |= $;
                if (E = E.next, E === null) {
                    if (E = d.shared.pending, E === null) break;
                    $ = E, E = $.next, $.next = null, d.lastBaseUpdate = $, d.shared.pending = null
                }
            } while (!0);
            if (H === null && (T = q), d.baseState = T, d.firstBaseUpdate = D, d.lastBaseUpdate = H, s = d.shared.interleaved, s !== null) {
                d = s;
                do v |= d.lane, d = d.next; while (d !== s)
            } else p === null && (d.shared.lanes = 0);
            Fr |= v, n.lanes = v, n.memoizedState = q
        }
    }

    function jp(n, s, o) {
        if (n = s.effects, s.effects = null, n !== null)
            for (s = 0; s < n.length; s++) {
                var l = n[s],
                    d = l.callback;
                if (d !== null) {
                    if (l.callback = null, l = o, typeof d != "function") throw Error(r(191, d));
                    d.call(l)
                }
            }
    }
    var Di = {},
        gn = Jn(Di),
        ji = Jn(Di),
        Ii = Jn(Di);

    function jr(n) {
        if (n === Di) throw Error(r(174));
        return n
    }

    function Qu(n, s) {
        switch (Ie(Ii, s), Ie(ji, n), Ie(gn, Di), n = s.nodeType, n) {
            case 9:
            case 11:
                s = (s = s.documentElement) ? s.namespaceURI : Gl(null, "");
                break;
            default:
                n = n === 8 ? s.parentNode : s, s = n.namespaceURI || null, n = n.tagName, s = Gl(s, n)
        }
        Ve(gn), Ie(gn, s)
    }

    function As() {
        Ve(gn), Ve(ji), Ve(Ii)
    }

    function Ip(n) {
        jr(Ii.current);
        var s = jr(gn.current),
            o = Gl(s, n.type);
        s !== o && (Ie(ji, n), Ie(gn, o))
    }

    function Gu(n) {
        ji.current === n && (Ve(gn), Ve(ji))
    }
    var ze = Jn(0);

    function wa(n) {
        for (var s = n; s !== null;) {
            if (s.tag === 13) {
                var o = s.memoizedState;
                if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return s
            } else if (s.tag === 19 && s.memoizedProps.revealOrder !== void 0) {
                if ((s.flags & 128) !== 0) return s
            } else if (s.child !== null) {
                s.child.return = s, s = s.child;
                continue
            }
            if (s === n) break;
            for (; s.sibling === null;) {
                if (s.return === null || s.return === n) return null;
                s = s.return
            }
            s.sibling.return = s.return, s = s.sibling
        }
        return null
    }
    var Yu = [];

    function Xu() {
        for (var n = 0; n < Yu.length; n++) Yu[n]._workInProgressVersionPrimary = null;
        Yu.length = 0
    }
    var xa = N.ReactCurrentDispatcher,
        Ju = N.ReactCurrentBatchConfig,
        Ir = 0,
        $e = null,
        et = null,
        rt = null,
        Sa = !1,
        Fi = !1,
        Vi = 0,
        hS = 0;

    function pt() {
        throw Error(r(321))
    }

    function Zu(n, s) {
        if (s === null) return !1;
        for (var o = 0; o < s.length && o < n.length; o++)
            if (!nn(n[o], s[o])) return !1;
        return !0
    }

    function ec(n, s, o, l, d, p) {
        if (Ir = p, $e = s, s.memoizedState = null, s.updateQueue = null, s.lanes = 0, xa.current = n === null || n.memoizedState === null ? yS : vS, n = o(l, d), Fi) {
            p = 0;
            do {
                if (Fi = !1, Vi = 0, 25 <= p) throw Error(r(301));
                p += 1, rt = et = null, s.updateQueue = null, xa.current = wS, n = o(l, d)
            } while (Fi)
        }
        if (xa.current = Ea, s = et !== null && et.next !== null, Ir = 0, rt = et = $e = null, Sa = !1, s) throw Error(r(300));
        return n
    }

    function tc() {
        var n = Vi !== 0;
        return Vi = 0, n
    }

    function yn() {
        var n = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return rt === null ? $e.memoizedState = rt = n : rt = rt.next = n, rt
    }

    function Wt() {
        if (et === null) {
            var n = $e.alternate;
            n = n !== null ? n.memoizedState : null
        } else n = et.next;
        var s = rt === null ? $e.memoizedState : rt.next;
        if (s !== null) rt = s, et = n;
        else {
            if (n === null) throw Error(r(310));
            et = n, n = {
                memoizedState: et.memoizedState,
                baseState: et.baseState,
                baseQueue: et.baseQueue,
                queue: et.queue,
                next: null
            }, rt === null ? $e.memoizedState = rt = n : rt = rt.next = n
        }
        return rt
    }

    function Bi(n, s) {
        return typeof s == "function" ? s(n) : s
    }

    function nc(n) {
        var s = Wt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = et,
            d = l.baseQueue,
            p = o.pending;
        if (p !== null) {
            if (d !== null) {
                var v = d.next;
                d.next = p.next, p.next = v
            }
            l.baseQueue = d = p, o.pending = null
        }
        if (d !== null) {
            p = d.next, l = l.baseState;
            var E = v = null,
                T = null,
                D = p;
            do {
                var H = D.lane;
                if ((Ir & H) === H) T !== null && (T = T.next = {
                    lane: 0,
                    action: D.action,
                    hasEagerState: D.hasEagerState,
                    eagerState: D.eagerState,
                    next: null
                }), l = D.hasEagerState ? D.eagerState : n(l, D.action);
                else {
                    var q = {
                        lane: H,
                        action: D.action,
                        hasEagerState: D.hasEagerState,
                        eagerState: D.eagerState,
                        next: null
                    };
                    T === null ? (E = T = q, v = l) : T = T.next = q, $e.lanes |= H, Fr |= H
                }
                D = D.next
            } while (D !== null && D !== p);
            T === null ? v = l : T.next = E, nn(l, s.memoizedState) || (Pt = !0), s.memoizedState = l, s.baseState = v, s.baseQueue = T, o.lastRenderedState = l
        }
        if (n = o.interleaved, n !== null) {
            d = n;
            do p = d.lane, $e.lanes |= p, Fr |= p, d = d.next; while (d !== n)
        } else d === null && (o.lanes = 0);
        return [s.memoizedState, o.dispatch]
    }

    function rc(n) {
        var s = Wt(),
            o = s.queue;
        if (o === null) throw Error(r(311));
        o.lastRenderedReducer = n;
        var l = o.dispatch,
            d = o.pending,
            p = s.memoizedState;
        if (d !== null) {
            o.pending = null;
            var v = d = d.next;
            do p = n(p, v.action), v = v.next; while (v !== d);
            nn(p, s.memoizedState) || (Pt = !0), s.memoizedState = p, s.baseQueue === null && (s.baseState = p), o.lastRenderedState = p
        }
        return [p, l]
    }

    function Fp() {}

    function Vp(n, s) {
        var o = $e,
            l = Wt(),
            d = s(),
            p = !nn(l.memoizedState, d);
        if (p && (l.memoizedState = d, Pt = !0), l = l.queue, sc(zp.bind(null, o, l, n), [n]), l.getSnapshot !== s || p || rt !== null && rt.memoizedState.tag & 1) {
            if (o.flags |= 2048, Ui(9, Up.bind(null, o, l, d, s), void 0, null), st === null) throw Error(r(349));
            (Ir & 30) !== 0 || Bp(o, s, d)
        }
        return d
    }

    function Bp(n, s, o) {
        n.flags |= 16384, n = {
            getSnapshot: s,
            value: o
        }, s = $e.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, $e.updateQueue = s, s.stores = [n]) : (o = s.stores, o === null ? s.stores = [n] : o.push(n))
    }

    function Up(n, s, o, l) {
        s.value = o, s.getSnapshot = l, $p(s) && Hp(n)
    }

    function zp(n, s, o) {
        return o(function() {
            $p(s) && Hp(n)
        })
    }

    function $p(n) {
        var s = n.getSnapshot;
        n = n.value;
        try {
            var o = s();
            return !nn(n, o)
        } catch {
            return !0
        }
    }

    function Hp(n) {
        var s = On(n, 1);
        s !== null && ln(s, n, 1, -1)
    }

    function qp(n) {
        var s = yn();
        return typeof n == "function" && (n = n()), s.memoizedState = s.baseState = n, n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Bi,
            lastRenderedState: n
        }, s.queue = n, n = n.dispatch = gS.bind(null, $e, n), [s.memoizedState, n]
    }

    function Ui(n, s, o, l) {
        return n = {
            tag: n,
            create: s,
            destroy: o,
            deps: l,
            next: null
        }, s = $e.updateQueue, s === null ? (s = {
            lastEffect: null,
            stores: null
        }, $e.updateQueue = s, s.lastEffect = n.next = n) : (o = s.lastEffect, o === null ? s.lastEffect = n.next = n : (l = o.next, o.next = n, n.next = l, s.lastEffect = n)), n
    }

    function Wp() {
        return Wt().memoizedState
    }

    function ba(n, s, o, l) {
        var d = yn();
        $e.flags |= n, d.memoizedState = Ui(1 | s, o, void 0, l === void 0 ? null : l)
    }

    function ka(n, s, o, l) {
        var d = Wt();
        l = l === void 0 ? null : l;
        var p = void 0;
        if (et !== null) {
            var v = et.memoizedState;
            if (p = v.destroy, l !== null && Zu(l, v.deps)) {
                d.memoizedState = Ui(s, o, p, l);
                return
            }
        }
        $e.flags |= n, d.memoizedState = Ui(1 | s, o, p, l)
    }

    function Kp(n, s) {
        return ba(8390656, 8, n, s)
    }

    function sc(n, s) {
        return ka(2048, 8, n, s)
    }

    function Qp(n, s) {
        return ka(4, 2, n, s)
    }

    function Gp(n, s) {
        return ka(4, 4, n, s)
    }

    function Yp(n, s) {
        if (typeof s == "function") return n = n(), s(n),
            function() {
                s(null)
            };
        if (s != null) return n = n(), s.current = n,
            function() {
                s.current = null
            }
    }

    function Xp(n, s, o) {
        return o = o != null ? o.concat([n]) : null, ka(4, 4, Yp.bind(null, s, n), o)
    }

    function ic() {}

    function Jp(n, s) {
        var o = Wt();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (o.memoizedState = [n, s], n)
    }

    function Zp(n, s) {
        var o = Wt();
        s = s === void 0 ? null : s;
        var l = o.memoizedState;
        return l !== null && s !== null && Zu(s, l[1]) ? l[0] : (n = n(), o.memoizedState = [n, s], n)
    }

    function em(n, s, o) {
        return (Ir & 21) === 0 ? (n.baseState && (n.baseState = !1, Pt = !0), n.memoizedState = o) : (nn(o, s) || (o = Ah(), $e.lanes |= o, Fr |= o, n.baseState = !0), s)
    }

    function pS(n, s) {
        var o = Ne;
        Ne = o !== 0 && 4 > o ? o : 4, n(!0);
        var l = Ju.transition;
        Ju.transition = {};
        try {
            n(!1), s()
        } finally {
            Ne = o, Ju.transition = l
        }
    }

    function tm() {
        return Wt().memoizedState
    }

    function mS(n, s, o) {
        var l = or(n);
        if (o = {
                lane: l,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, nm(n)) rm(s, o);
        else if (o = Lp(n, s, o, l), o !== null) {
            var d = kt();
            ln(o, n, l, d), sm(o, s, l)
        }
    }

    function gS(n, s, o) {
        var l = or(n),
            d = {
                lane: l,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (nm(n)) rm(s, d);
        else {
            var p = n.alternate;
            if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = s.lastRenderedReducer, p !== null)) try {
                var v = s.lastRenderedState,
                    E = p(v, o);
                if (d.hasEagerState = !0, d.eagerState = E, nn(E, v)) {
                    var T = s.interleaved;
                    T === null ? (d.next = d, Wu(s)) : (d.next = T.next, T.next = d), s.interleaved = d;
                    return
                }
            } catch {} finally {}
            o = Lp(n, s, d, l), o !== null && (d = kt(), ln(o, n, l, d), sm(o, s, l))
        }
    }

    function nm(n) {
        var s = n.alternate;
        return n === $e || s !== null && s === $e
    }

    function rm(n, s) {
        Fi = Sa = !0;
        var o = n.pending;
        o === null ? s.next = s : (s.next = o.next, o.next = s), n.pending = s
    }

    function sm(n, s, o) {
        if ((o & 4194240) !== 0) {
            var l = s.lanes;
            l &= n.pendingLanes, o |= l, s.lanes = o, au(n, o)
        }
    }
    var Ea = {
            readContext: qt,
            useCallback: pt,
            useContext: pt,
            useEffect: pt,
            useImperativeHandle: pt,
            useInsertionEffect: pt,
            useLayoutEffect: pt,
            useMemo: pt,
            useReducer: pt,
            useRef: pt,
            useState: pt,
            useDebugValue: pt,
            useDeferredValue: pt,
            useTransition: pt,
            useMutableSource: pt,
            useSyncExternalStore: pt,
            useId: pt,
            unstable_isNewReconciler: !1
        },
        yS = {
            readContext: qt,
            useCallback: function(n, s) {
                return yn().memoizedState = [n, s === void 0 ? null : s], n
            },
            useContext: qt,
            useEffect: Kp,
            useImperativeHandle: function(n, s, o) {
                return o = o != null ? o.concat([n]) : null, ba(4194308, 4, Yp.bind(null, s, n), o)
            },
            useLayoutEffect: function(n, s) {
                return ba(4194308, 4, n, s)
            },
            useInsertionEffect: function(n, s) {
                return ba(4, 2, n, s)
            },
            useMemo: function(n, s) {
                var o = yn();
                return s = s === void 0 ? null : s, n = n(), o.memoizedState = [n, s], n
            },
            useReducer: function(n, s, o) {
                var l = yn();
                return s = o !== void 0 ? o(s) : s, l.memoizedState = l.baseState = s, n = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: n,
                    lastRenderedState: s
                }, l.queue = n, n = n.dispatch = mS.bind(null, $e, n), [l.memoizedState, n]
            },
            useRef: function(n) {
                var s = yn();
                return n = {
                    current: n
                }, s.memoizedState = n
            },
            useState: qp,
            useDebugValue: ic,
            useDeferredValue: function(n) {
                return yn().memoizedState = n
            },
            useTransition: function() {
                var n = qp(!1),
                    s = n[0];
                return n = pS.bind(null, n[1]), yn().memoizedState = n, [s, n]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(n, s, o) {
                var l = $e,
                    d = yn();
                if (Ue) {
                    if (o === void 0) throw Error(r(407));
                    o = o()
                } else {
                    if (o = s(), st === null) throw Error(r(349));
                    (Ir & 30) !== 0 || Bp(l, s, o)
                }
                d.memoizedState = o;
                var p = {
                    value: o,
                    getSnapshot: s
                };
                return d.queue = p, Kp(zp.bind(null, l, p, n), [n]), l.flags |= 2048, Ui(9, Up.bind(null, l, p, o, s), void 0, null), o
            },
            useId: function() {
                var n = yn(),
                    s = st.identifierPrefix;
                if (Ue) {
                    var o = An,
                        l = Rn;
                    o = (l & ~(1 << 32 - tn(l) - 1)).toString(32) + o, s = ":" + s + "R" + o, o = Vi++, 0 < o && (s += "H" + o.toString(32)), s += ":"
                } else o = hS++, s = ":" + s + "r" + o.toString(32) + ":";
                return n.memoizedState = s
            },
            unstable_isNewReconciler: !1
        },
        vS = {
            readContext: qt,
            useCallback: Jp,
            useContext: qt,
            useEffect: sc,
            useImperativeHandle: Xp,
            useInsertionEffect: Qp,
            useLayoutEffect: Gp,
            useMemo: Zp,
            useReducer: nc,
            useRef: Wp,
            useState: function() {
                return nc(Bi)
            },
            useDebugValue: ic,
            useDeferredValue: function(n) {
                var s = Wt();
                return em(s, et.memoizedState, n)
            },
            useTransition: function() {
                var n = nc(Bi)[0],
                    s = Wt().memoizedState;
                return [n, s]
            },
            useMutableSource: Fp,
            useSyncExternalStore: Vp,
            useId: tm,
            unstable_isNewReconciler: !1
        },
        wS = {
            readContext: qt,
            useCallback: Jp,
            useContext: qt,
            useEffect: sc,
            useImperativeHandle: Xp,
            useInsertionEffect: Qp,
            useLayoutEffect: Gp,
            useMemo: Zp,
            useReducer: rc,
            useRef: Wp,
            useState: function() {
                return rc(Bi)
            },
            useDebugValue: ic,
            useDeferredValue: function(n) {
                var s = Wt();
                return et === null ? s.memoizedState = n : em(s, et.memoizedState, n)
            },
            useTransition: function() {
                var n = rc(Bi)[0],
                    s = Wt().memoizedState;
                return [n, s]
            },
            useMutableSource: Fp,
            useSyncExternalStore: Vp,
            useId: tm,
            unstable_isNewReconciler: !1
        };

    function sn(n, s) {
        if (n && n.defaultProps) {
            s = U({}, s), n = n.defaultProps;
            for (var o in n) s[o] === void 0 && (s[o] = n[o]);
            return s
        }
        return s
    }

    function oc(n, s, o, l) {
        s = n.memoizedState, o = o(l, s), o = o == null ? s : U({}, s, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o)
    }
    var Ca = {
        isMounted: function(n) {
            return (n = n._reactInternals) ? Ar(n) === n : !1
        },
        enqueueSetState: function(n, s, o) {
            n = n._reactInternals;
            var l = kt(),
                d = or(n),
                p = Nn(l, d);
            p.payload = s, o != null && (p.callback = o), s = nr(n, p, d), s !== null && (ln(s, n, d, l), ya(s, n, d))
        },
        enqueueReplaceState: function(n, s, o) {
            n = n._reactInternals;
            var l = kt(),
                d = or(n),
                p = Nn(l, d);
            p.tag = 1, p.payload = s, o != null && (p.callback = o), s = nr(n, p, d), s !== null && (ln(s, n, d, l), ya(s, n, d))
        },
        enqueueForceUpdate: function(n, s) {
            n = n._reactInternals;
            var o = kt(),
                l = or(n),
                d = Nn(o, l);
            d.tag = 2, s != null && (d.callback = s), s = nr(n, d, l), s !== null && (ln(s, n, l, o), ya(s, n, l))
        }
    };

    function im(n, s, o, l, d, p, v) {
        return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(l, p, v) : s.prototype && s.prototype.isPureReactComponent ? !Pi(o, l) || !Pi(d, p) : !0
    }

    function om(n, s, o) {
        var l = !1,
            d = Zn,
            p = s.contextType;
        return typeof p == "object" && p !== null ? p = qt(p) : (d = Tt(s) ? Nr : ht.current, l = s.contextTypes, p = (l = l != null) ? ks(n, d) : Zn), s = new s(o, p), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Ca, n.stateNode = s, s._reactInternals = n, l && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = p), s
    }

    function am(n, s, o, l) {
        n = s.state, typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps(o, l), typeof s.UNSAFE_componentWillReceiveProps == "function" && s.UNSAFE_componentWillReceiveProps(o, l), s.state !== n && Ca.enqueueReplaceState(s, s.state, null)
    }

    function ac(n, s, o, l) {
        var d = n.stateNode;
        d.props = o, d.state = n.memoizedState, d.refs = {}, Ku(n);
        var p = s.contextType;
        typeof p == "object" && p !== null ? d.context = qt(p) : (p = Tt(s) ? Nr : ht.current, d.context = ks(n, p)), d.state = n.memoizedState, p = s.getDerivedStateFromProps, typeof p == "function" && (oc(n, s, p, o), d.state = n.memoizedState), typeof s.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (s = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), s !== d.state && Ca.enqueueReplaceState(d, d.state, null), va(n, o, d, l), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308)
    }

    function Os(n, s) {
        try {
            var o = "",
                l = s;
            do o += ue(l), l = l.return; while (l);
            var d = o
        } catch (p) {
            d = `
Error generating stack: ` + p.message + `
` + p.stack
        }
        return {
            value: n,
            source: s,
            stack: d,
            digest: null
        }
    }

    function lc(n, s, o) {
        return {
            value: n,
            source: null,
            stack: o ? ? null,
            digest: s ? ? null
        }
    }

    function uc(n, s) {
        try {
            console.error(s.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var xS = typeof WeakMap == "function" ? WeakMap : Map;

    function lm(n, s, o) {
        o = Nn(-1, o), o.tag = 3, o.payload = {
            element: null
        };
        var l = s.value;
        return o.callback = function() {
            Na || (Na = !0, Ec = l), uc(n, s)
        }, o
    }

    function um(n, s, o) {
        o = Nn(-1, o), o.tag = 3;
        var l = n.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var d = s.value;
            o.payload = function() {
                return l(d)
            }, o.callback = function() {
                uc(n, s)
            }
        }
        var p = n.stateNode;
        return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
            uc(n, s), typeof l != "function" && (sr === null ? sr = new Set([this]) : sr.add(this));
            var v = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: v !== null ? v : ""
            })
        }), o
    }

    function cm(n, s, o) {
        var l = n.pingCache;
        if (l === null) {
            l = n.pingCache = new xS;
            var d = new Set;
            l.set(s, d)
        } else d = l.get(s), d === void 0 && (d = new Set, l.set(s, d));
        d.has(o) || (d.add(o), n = MS.bind(null, n, s, o), s.then(n, n))
    }

    function dm(n) {
        do {
            var s;
            if ((s = n.tag === 13) && (s = n.memoizedState, s = s !== null ? s.dehydrated !== null : !0), s) return n;
            n = n.return
        } while (n !== null);
        return null
    }

    function fm(n, s, o, l, d) {
        return (n.mode & 1) === 0 ? (n === s ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (s = Nn(-1, 1), s.tag = 2, nr(o, s, 1))), o.lanes |= 1), n) : (n.flags |= 65536, n.lanes = d, n)
    }
    var SS = N.ReactCurrentOwner,
        Pt = !1;

    function bt(n, s, o, l) {
        s.child = n === null ? Np(s, null, o, l) : Ps(s, n.child, o, l)
    }

    function hm(n, s, o, l, d) {
        o = o.render;
        var p = s.ref;
        return Rs(s, d), l = ec(n, s, o, l, p, d), o = tc(), n !== null && !Pt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~d, Ln(n, s, d)) : (Ue && o && Iu(s), s.flags |= 1, bt(n, s, l, d), s.child)
    }

    function pm(n, s, o, l, d) {
        if (n === null) {
            var p = o.type;
            return typeof p == "function" && !Oc(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (s.tag = 15, s.type = p, mm(n, s, p, l, d)) : (n = Fa(o.type, null, l, s, s.mode, d), n.ref = s.ref, n.return = s, s.child = n)
        }
        if (p = n.child, (n.lanes & d) === 0) {
            var v = p.memoizedProps;
            if (o = o.compare, o = o !== null ? o : Pi, o(v, l) && n.ref === s.ref) return Ln(n, s, d)
        }
        return s.flags |= 1, n = lr(p, l), n.ref = s.ref, n.return = s, s.child = n
    }

    function mm(n, s, o, l, d) {
        if (n !== null) {
            var p = n.memoizedProps;
            if (Pi(p, l) && n.ref === s.ref)
                if (Pt = !1, s.pendingProps = l = p, (n.lanes & d) !== 0)(n.flags & 131072) !== 0 && (Pt = !0);
                else return s.lanes = n.lanes, Ln(n, s, d)
        }
        return cc(n, s, o, l, d)
    }

    function gm(n, s, o) {
        var l = s.pendingProps,
            d = l.children,
            p = n !== null ? n.memoizedState : null;
        if (l.mode === "hidden")
            if ((s.mode & 1) === 0) s.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Ie(Ls, Bt), Bt |= o;
            else {
                if ((o & 1073741824) === 0) return n = p !== null ? p.baseLanes | o : o, s.lanes = s.childLanes = 1073741824, s.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null
                }, s.updateQueue = null, Ie(Ls, Bt), Bt |= n, null;
                s.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = p !== null ? p.baseLanes : o, Ie(Ls, Bt), Bt |= l
            }
        else p !== null ? (l = p.baseLanes | o, s.memoizedState = null) : l = o, Ie(Ls, Bt), Bt |= l;
        return bt(n, s, d, o), s.child
    }

    function ym(n, s) {
        var o = s.ref;
        (n === null && o !== null || n !== null && n.ref !== o) && (s.flags |= 512, s.flags |= 2097152)
    }

    function cc(n, s, o, l, d) {
        var p = Tt(o) ? Nr : ht.current;
        return p = ks(s, p), Rs(s, d), o = ec(n, s, o, l, p, d), l = tc(), n !== null && !Pt ? (s.updateQueue = n.updateQueue, s.flags &= -2053, n.lanes &= ~d, Ln(n, s, d)) : (Ue && l && Iu(s), s.flags |= 1, bt(n, s, o, d), s.child)
    }

    function vm(n, s, o, l, d) {
        if (Tt(o)) {
            var p = !0;
            ua(s)
        } else p = !1;
        if (Rs(s, d), s.stateNode === null) Pa(n, s), om(s, o, l), ac(s, o, l, d), l = !0;
        else if (n === null) {
            var v = s.stateNode,
                E = s.memoizedProps;
            v.props = E;
            var T = v.context,
                D = o.contextType;
            typeof D == "object" && D !== null ? D = qt(D) : (D = Tt(o) ? Nr : ht.current, D = ks(s, D));
            var H = o.getDerivedStateFromProps,
                q = typeof H == "function" || typeof v.getSnapshotBeforeUpdate == "function";
            q || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== l || T !== D) && am(s, v, l, D), tr = !1;
            var $ = s.memoizedState;
            v.state = $, va(s, l, v, d), T = s.memoizedState, E !== l || $ !== T || Ct.current || tr ? (typeof H == "function" && (oc(s, o, H, l), T = s.memoizedState), (E = tr || im(s, o, E, l, $, T, D)) ? (q || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (s.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), s.memoizedProps = l, s.memoizedState = T), v.props = l, v.state = T, v.context = D, l = E) : (typeof v.componentDidMount == "function" && (s.flags |= 4194308), l = !1)
        } else {
            v = s.stateNode, Mp(n, s), E = s.memoizedProps, D = s.type === s.elementType ? E : sn(s.type, E), v.props = D, q = s.pendingProps, $ = v.context, T = o.contextType, typeof T == "object" && T !== null ? T = qt(T) : (T = Tt(o) ? Nr : ht.current, T = ks(s, T));
            var Y = o.getDerivedStateFromProps;
            (H = typeof Y == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (E !== q || $ !== T) && am(s, v, l, T), tr = !1, $ = s.memoizedState, v.state = $, va(s, l, v, d);
            var te = s.memoizedState;
            E !== q || $ !== te || Ct.current || tr ? (typeof Y == "function" && (oc(s, o, Y, l), te = s.memoizedState), (D = tr || im(s, o, D, l, $, te, T) || !1) ? (H || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(l, te, T), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(l, te, T)), typeof v.componentDidUpdate == "function" && (s.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (s.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), s.memoizedProps = l, s.memoizedState = te), v.props = l, v.state = te, v.context = T, l = D) : (typeof v.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (s.flags |= 1024), l = !1)
        }
        return dc(n, s, o, l, p, d)
    }

    function dc(n, s, o, l, d, p) {
        ym(n, s);
        var v = (s.flags & 128) !== 0;
        if (!l && !v) return d && kp(s, o, !1), Ln(n, s, p);
        l = s.stateNode, SS.current = s;
        var E = v && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return s.flags |= 1, n !== null && v ? (s.child = Ps(s, n.child, null, p), s.child = Ps(s, null, E, p)) : bt(n, s, E, p), s.memoizedState = l.state, d && kp(s, o, !0), s.child
    }

    function wm(n) {
        var s = n.stateNode;
        s.pendingContext ? Sp(n, s.pendingContext, s.pendingContext !== s.context) : s.context && Sp(n, s.context, !1), Qu(n, s.containerInfo)
    }

    function xm(n, s, o, l, d) {
        return Ts(), Uu(d), s.flags |= 256, bt(n, s, o, l), s.child
    }
    var fc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function hc(n) {
        return {
            baseLanes: n,
            cachePool: null,
            transitions: null
        }
    }

    function Sm(n, s, o) {
        var l = s.pendingProps,
            d = ze.current,
            p = !1,
            v = (s.flags & 128) !== 0,
            E;
        if ((E = v) || (E = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), E ? (p = !0, s.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Ie(ze, d & 1), n === null) return Bu(s), n = s.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((s.mode & 1) === 0 ? s.lanes = 1 : n.data === "$!" ? s.lanes = 8 : s.lanes = 1073741824, null) : (v = l.children, n = l.fallback, p ? (l = s.mode, p = s.child, v = {
            mode: "hidden",
            children: v
        }, (l & 1) === 0 && p !== null ? (p.childLanes = 0, p.pendingProps = v) : p = Va(v, l, 0, null), n = zr(n, l, o, null), p.return = s, n.return = s, p.sibling = n, s.child = p, s.child.memoizedState = hc(o), s.memoizedState = fc, n) : pc(s, v));
        if (d = n.memoizedState, d !== null && (E = d.dehydrated, E !== null)) return bS(n, s, v, l, E, d, o);
        if (p) {
            p = l.fallback, v = s.mode, d = n.child, E = d.sibling;
            var T = {
                mode: "hidden",
                children: l.children
            };
            return (v & 1) === 0 && s.child !== d ? (l = s.child, l.childLanes = 0, l.pendingProps = T, s.deletions = null) : (l = lr(d, T), l.subtreeFlags = d.subtreeFlags & 14680064), E !== null ? p = lr(E, p) : (p = zr(p, v, o, null), p.flags |= 2), p.return = s, l.return = s, l.sibling = p, s.child = l, l = p, p = s.child, v = n.child.memoizedState, v = v === null ? hc(o) : {
                baseLanes: v.baseLanes | o,
                cachePool: null,
                transitions: v.transitions
            }, p.memoizedState = v, p.childLanes = n.childLanes & ~o, s.memoizedState = fc, l
        }
        return p = n.child, n = p.sibling, l = lr(p, {
            mode: "visible",
            children: l.children
        }), (s.mode & 1) === 0 && (l.lanes = o), l.return = s, l.sibling = null, n !== null && (o = s.deletions, o === null ? (s.deletions = [n], s.flags |= 16) : o.push(n)), s.child = l, s.memoizedState = null, l
    }

    function pc(n, s) {
        return s = Va({
            mode: "visible",
            children: s
        }, n.mode, 0, null), s.return = n, n.child = s
    }

    function Ta(n, s, o, l) {
        return l !== null && Uu(l), Ps(s, n.child, null, o), n = pc(s, s.pendingProps.children), n.flags |= 2, s.memoizedState = null, n
    }

    function bS(n, s, o, l, d, p, v) {
        if (o) return s.flags & 256 ? (s.flags &= -257, l = lc(Error(r(422))), Ta(n, s, v, l)) : s.memoizedState !== null ? (s.child = n.child, s.flags |= 128, null) : (p = l.fallback, d = s.mode, l = Va({
            mode: "visible",
            children: l.children
        }, d, 0, null), p = zr(p, d, v, null), p.flags |= 2, l.return = s, p.return = s, l.sibling = p, s.child = l, (s.mode & 1) !== 0 && Ps(s, n.child, null, v), s.child.memoizedState = hc(v), s.memoizedState = fc, p);
        if ((s.mode & 1) === 0) return Ta(n, s, v, null);
        if (d.data === "$!") {
            if (l = d.nextSibling && d.nextSibling.dataset, l) var E = l.dgst;
            return l = E, p = Error(r(419)), l = lc(p, l, void 0), Ta(n, s, v, l)
        }
        if (E = (v & n.childLanes) !== 0, Pt || E) {
            if (l = st, l !== null) {
                switch (v & -v) {
                    case 4:
                        d = 2;
                        break;
                    case 16:
                        d = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        d = 32;
                        break;
                    case 536870912:
                        d = 268435456;
                        break;
                    default:
                        d = 0
                }
                d = (d & (l.suspendedLanes | v)) !== 0 ? 0 : d, d !== 0 && d !== p.retryLane && (p.retryLane = d, On(n, d), ln(l, n, d, -1))
            }
            return Ac(), l = lc(Error(r(421))), Ta(n, s, v, l)
        }
        return d.data === "$?" ? (s.flags |= 128, s.child = n.child, s = DS.bind(null, n), d._reactRetry = s, null) : (n = p.treeContext, Vt = Xn(d.nextSibling), Ft = s, Ue = !0, rn = null, n !== null && ($t[Ht++] = Rn, $t[Ht++] = An, $t[Ht++] = Lr, Rn = n.id, An = n.overflow, Lr = s), s = pc(s, l.children), s.flags |= 4096, s)
    }

    function bm(n, s, o) {
        n.lanes |= s;
        var l = n.alternate;
        l !== null && (l.lanes |= s), qu(n.return, s, o)
    }

    function mc(n, s, o, l, d) {
        var p = n.memoizedState;
        p === null ? n.memoizedState = {
            isBackwards: s,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: d
        } : (p.isBackwards = s, p.rendering = null, p.renderingStartTime = 0, p.last = l, p.tail = o, p.tailMode = d)
    }

    function km(n, s, o) {
        var l = s.pendingProps,
            d = l.revealOrder,
            p = l.tail;
        if (bt(n, s, l.children, o), l = ze.current, (l & 2) !== 0) l = l & 1 | 2, s.flags |= 128;
        else {
            if (n !== null && (n.flags & 128) !== 0) e: for (n = s.child; n !== null;) {
                if (n.tag === 13) n.memoizedState !== null && bm(n, o, s);
                else if (n.tag === 19) bm(n, o, s);
                else if (n.child !== null) {
                    n.child.return = n, n = n.child;
                    continue
                }
                if (n === s) break e;
                for (; n.sibling === null;) {
                    if (n.return === null || n.return === s) break e;
                    n = n.return
                }
                n.sibling.return = n.return, n = n.sibling
            }
            l &= 1
        }
        if (Ie(ze, l), (s.mode & 1) === 0) s.memoizedState = null;
        else switch (d) {
            case "forwards":
                for (o = s.child, d = null; o !== null;) n = o.alternate, n !== null && wa(n) === null && (d = o), o = o.sibling;
                o = d, o === null ? (d = s.child, s.child = null) : (d = o.sibling, o.sibling = null), mc(s, !1, d, o, p);
                break;
            case "backwards":
                for (o = null, d = s.child, s.child = null; d !== null;) {
                    if (n = d.alternate, n !== null && wa(n) === null) {
                        s.child = d;
                        break
                    }
                    n = d.sibling, d.sibling = o, o = d, d = n
                }
                mc(s, !0, o, null, p);
                break;
            case "together":
                mc(s, !1, null, null, void 0);
                break;
            default:
                s.memoizedState = null
        }
        return s.child
    }

    function Pa(n, s) {
        (s.mode & 1) === 0 && n !== null && (n.alternate = null, s.alternate = null, s.flags |= 2)
    }

    function Ln(n, s, o) {
        if (n !== null && (s.dependencies = n.dependencies), Fr |= s.lanes, (o & s.childLanes) === 0) return null;
        if (n !== null && s.child !== n.child) throw Error(r(153));
        if (s.child !== null) {
            for (n = s.child, o = lr(n, n.pendingProps), s.child = o, o.return = s; n.sibling !== null;) n = n.sibling, o = o.sibling = lr(n, n.pendingProps), o.return = s;
            o.sibling = null
        }
        return s.child
    }

    function kS(n, s, o) {
        switch (s.tag) {
            case 3:
                wm(s), Ts();
                break;
            case 5:
                Ip(s);
                break;
            case 1:
                Tt(s.type) && ua(s);
                break;
            case 4:
                Qu(s, s.stateNode.containerInfo);
                break;
            case 10:
                var l = s.type._context,
                    d = s.memoizedProps.value;
                Ie(ma, l._currentValue), l._currentValue = d;
                break;
            case 13:
                if (l = s.memoizedState, l !== null) return l.dehydrated !== null ? (Ie(ze, ze.current & 1), s.flags |= 128, null) : (o & s.child.childLanes) !== 0 ? Sm(n, s, o) : (Ie(ze, ze.current & 1), n = Ln(n, s, o), n !== null ? n.sibling : null);
                Ie(ze, ze.current & 1);
                break;
            case 19:
                if (l = (o & s.childLanes) !== 0, (n.flags & 128) !== 0) {
                    if (l) return km(n, s, o);
                    s.flags |= 128
                }
                if (d = s.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ie(ze, ze.current), l) break;
                return null;
            case 22:
            case 23:
                return s.lanes = 0, gm(n, s, o)
        }
        return Ln(n, s, o)
    }
    var Em, gc, Cm, Tm;
    Em = function(n, s) {
        for (var o = s.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) n.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === s) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === s) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }, gc = function() {}, Cm = function(n, s, o, l) {
        var d = n.memoizedProps;
        if (d !== l) {
            n = s.stateNode, jr(gn.current);
            var p = null;
            switch (o) {
                case "input":
                    d = Hn(n, d), l = Hn(n, l), p = [];
                    break;
                case "select":
                    d = U({}, d, {
                        value: void 0
                    }), l = U({}, l, {
                        value: void 0
                    }), p = [];
                    break;
                case "textarea":
                    d = Ql(n, d), l = Ql(n, l), p = [];
                    break;
                default:
                    typeof d.onClick != "function" && typeof l.onClick == "function" && (n.onclick = oa)
            }
            Yl(o, l);
            var v;
            o = null;
            for (D in d)
                if (!l.hasOwnProperty(D) && d.hasOwnProperty(D) && d[D] != null)
                    if (D === "style") {
                        var E = d[D];
                        for (v in E) E.hasOwnProperty(v) && (o || (o = {}), o[v] = "")
                    } else D !== "dangerouslySetInnerHTML" && D !== "children" && D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && D !== "autoFocus" && (a.hasOwnProperty(D) ? p || (p = []) : (p = p || []).push(D, null));
            for (D in l) {
                var T = l[D];
                if (E = d != null ? d[D] : void 0, l.hasOwnProperty(D) && T !== E && (T != null || E != null))
                    if (D === "style")
                        if (E) {
                            for (v in E) !E.hasOwnProperty(v) || T && T.hasOwnProperty(v) || (o || (o = {}), o[v] = "");
                            for (v in T) T.hasOwnProperty(v) && E[v] !== T[v] && (o || (o = {}), o[v] = T[v])
                        } else o || (p || (p = []), p.push(D, o)), o = T;
                else D === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (p = p || []).push(D, T)) : D === "children" ? typeof T != "string" && typeof T != "number" || (p = p || []).push(D, "" + T) : D !== "suppressContentEditableWarning" && D !== "suppressHydrationWarning" && (a.hasOwnProperty(D) ? (T != null && D === "onScroll" && Fe("scroll", n), p || E === T || (p = [])) : (p = p || []).push(D, T))
            }
            o && (p = p || []).push("style", o);
            var D = p;
            (s.updateQueue = D) && (s.flags |= 4)
        }
    }, Tm = function(n, s, o, l) {
        o !== l && (s.flags |= 4)
    };

    function zi(n, s) {
        if (!Ue) switch (n.tailMode) {
            case "hidden":
                s = n.tail;
                for (var o = null; s !== null;) s.alternate !== null && (o = s), s = s.sibling;
                o === null ? n.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = n.tail;
                for (var l = null; o !== null;) o.alternate !== null && (l = o), o = o.sibling;
                l === null ? s || n.tail === null ? n.tail = null : n.tail.sibling = null : l.sibling = null
        }
    }

    function mt(n) {
        var s = n.alternate !== null && n.alternate.child === n.child,
            o = 0,
            l = 0;
        if (s)
            for (var d = n.child; d !== null;) o |= d.lanes | d.childLanes, l |= d.subtreeFlags & 14680064, l |= d.flags & 14680064, d.return = n, d = d.sibling;
        else
            for (d = n.child; d !== null;) o |= d.lanes | d.childLanes, l |= d.subtreeFlags, l |= d.flags, d.return = n, d = d.sibling;
        return n.subtreeFlags |= l, n.childLanes = o, s
    }

    function ES(n, s, o) {
        var l = s.pendingProps;
        switch (Fu(s), s.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return mt(s), null;
            case 1:
                return Tt(s.type) && la(), mt(s), null;
            case 3:
                return l = s.stateNode, As(), Ve(Ct), Ve(ht), Xu(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (n === null || n.child === null) && (ha(s) ? s.flags |= 4 : n === null || n.memoizedState.isDehydrated && (s.flags & 256) === 0 || (s.flags |= 1024, rn !== null && (Pc(rn), rn = null))), gc(n, s), mt(s), null;
            case 5:
                Gu(s);
                var d = jr(Ii.current);
                if (o = s.type, n !== null && s.stateNode != null) Cm(n, s, o, l, d), n.ref !== s.ref && (s.flags |= 512, s.flags |= 2097152);
                else {
                    if (!l) {
                        if (s.stateNode === null) throw Error(r(166));
                        return mt(s), null
                    }
                    if (n = jr(gn.current), ha(s)) {
                        l = s.stateNode, o = s.type;
                        var p = s.memoizedProps;
                        switch (l[mn] = s, l[Ni] = p, n = (s.mode & 1) !== 0, o) {
                            case "dialog":
                                Fe("cancel", l), Fe("close", l);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Fe("load", l);
                                break;
                            case "video":
                            case "audio":
                                for (d = 0; d < Ri.length; d++) Fe(Ri[d], l);
                                break;
                            case "source":
                                Fe("error", l);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Fe("error", l), Fe("load", l);
                                break;
                            case "details":
                                Fe("toggle", l);
                                break;
                            case "input":
                                oh(l, p), Fe("invalid", l);
                                break;
                            case "select":
                                l._wrapperState = {
                                    wasMultiple: !!p.multiple
                                }, Fe("invalid", l);
                                break;
                            case "textarea":
                                uh(l, p), Fe("invalid", l)
                        }
                        Yl(o, p), d = null;
                        for (var v in p)
                            if (p.hasOwnProperty(v)) {
                                var E = p[v];
                                v === "children" ? typeof E == "string" ? l.textContent !== E && (p.suppressHydrationWarning !== !0 && ia(l.textContent, E, n), d = ["children", E]) : typeof E == "number" && l.textContent !== "" + E && (p.suppressHydrationWarning !== !0 && ia(l.textContent, E, n), d = ["children", "" + E]) : a.hasOwnProperty(v) && E != null && v === "onScroll" && Fe("scroll", l)
                            }
                        switch (o) {
                            case "input":
                                Tn(l), lh(l, p, !0);
                                break;
                            case "textarea":
                                Tn(l), dh(l);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof p.onClick == "function" && (l.onclick = oa)
                        }
                        l = d, s.updateQueue = l, l !== null && (s.flags |= 4)
                    } else {
                        v = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fh(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = v.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof l.is == "string" ? n = v.createElement(o, {
                            is: l.is
                        }) : (n = v.createElement(o), o === "select" && (v = n, l.multiple ? v.multiple = !0 : l.size && (v.size = l.size))) : n = v.createElementNS(n, o), n[mn] = s, n[Ni] = l, Em(n, s, !1, !1), s.stateNode = n;
                        e: {
                            switch (v = Xl(o, l), o) {
                                case "dialog":
                                    Fe("cancel", n), Fe("close", n), d = l;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Fe("load", n), d = l;
                                    break;
                                case "video":
                                case "audio":
                                    for (d = 0; d < Ri.length; d++) Fe(Ri[d], n);
                                    d = l;
                                    break;
                                case "source":
                                    Fe("error", n), d = l;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Fe("error", n), Fe("load", n), d = l;
                                    break;
                                case "details":
                                    Fe("toggle", n), d = l;
                                    break;
                                case "input":
                                    oh(n, l), d = Hn(n, l), Fe("invalid", n);
                                    break;
                                case "option":
                                    d = l;
                                    break;
                                case "select":
                                    n._wrapperState = {
                                        wasMultiple: !!l.multiple
                                    }, d = U({}, l, {
                                        value: void 0
                                    }), Fe("invalid", n);
                                    break;
                                case "textarea":
                                    uh(n, l), d = Ql(n, l), Fe("invalid", n);
                                    break;
                                default:
                                    d = l
                            }
                            Yl(o, d),
                            E = d;
                            for (p in E)
                                if (E.hasOwnProperty(p)) {
                                    var T = E[p];
                                    p === "style" ? mh(n, T) : p === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && hh(n, T)) : p === "children" ? typeof T == "string" ? (o !== "textarea" || T !== "") && ci(n, T) : typeof T == "number" && ci(n, "" + T) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (a.hasOwnProperty(p) ? T != null && p === "onScroll" && Fe("scroll", n) : T != null && M(n, p, T, v))
                                }
                            switch (o) {
                                case "input":
                                    Tn(n), lh(n, l, !1);
                                    break;
                                case "textarea":
                                    Tn(n), dh(n);
                                    break;
                                case "option":
                                    l.value != null && n.setAttribute("value", "" + Pe(l.value));
                                    break;
                                case "select":
                                    n.multiple = !!l.multiple, p = l.value, p != null ? ds(n, !!l.multiple, p, !1) : l.defaultValue != null && ds(n, !!l.multiple, l.defaultValue, !0);
                                    break;
                                default:
                                    typeof d.onClick == "function" && (n.onclick = oa)
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!l.autoFocus;
                                    break e;
                                case "img":
                                    l = !0;
                                    break e;
                                default:
                                    l = !1
                            }
                        }
                        l && (s.flags |= 4)
                    }
                    s.ref !== null && (s.flags |= 512, s.flags |= 2097152)
                }
                return mt(s), null;
            case 6:
                if (n && s.stateNode != null) Tm(n, s, n.memoizedProps, l);
                else {
                    if (typeof l != "string" && s.stateNode === null) throw Error(r(166));
                    if (o = jr(Ii.current), jr(gn.current), ha(s)) {
                        if (l = s.stateNode, o = s.memoizedProps, l[mn] = s, (p = l.nodeValue !== o) && (n = Ft, n !== null)) switch (n.tag) {
                            case 3:
                                ia(l.nodeValue, o, (n.mode & 1) !== 0);
                                break;
                            case 5:
                                n.memoizedProps.suppressHydrationWarning !== !0 && ia(l.nodeValue, o, (n.mode & 1) !== 0)
                        }
                        p && (s.flags |= 4)
                    } else l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[mn] = s, s.stateNode = l
                }
                return mt(s), null;
            case 13:
                if (Ve(ze), l = s.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
                    if (Ue && Vt !== null && (s.mode & 1) !== 0 && (s.flags & 128) === 0) Rp(), Ts(), s.flags |= 98560, p = !1;
                    else if (p = ha(s), l !== null && l.dehydrated !== null) {
                        if (n === null) {
                            if (!p) throw Error(r(318));
                            if (p = s.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(r(317));
                            p[mn] = s
                        } else Ts(), (s.flags & 128) === 0 && (s.memoizedState = null), s.flags |= 4;
                        mt(s), p = !1
                    } else rn !== null && (Pc(rn), rn = null), p = !0;
                    if (!p) return s.flags & 65536 ? s : null
                }
                return (s.flags & 128) !== 0 ? (s.lanes = o, s) : (l = l !== null, l !== (n !== null && n.memoizedState !== null) && l && (s.child.flags |= 8192, (s.mode & 1) !== 0 && (n === null || (ze.current & 1) !== 0 ? tt === 0 && (tt = 3) : Ac())), s.updateQueue !== null && (s.flags |= 4), mt(s), null);
            case 4:
                return As(), gc(n, s), n === null && Ai(s.stateNode.containerInfo), mt(s), null;
            case 10:
                return Hu(s.type._context), mt(s), null;
            case 17:
                return Tt(s.type) && la(), mt(s), null;
            case 19:
                if (Ve(ze), p = s.memoizedState, p === null) return mt(s), null;
                if (l = (s.flags & 128) !== 0, v = p.rendering, v === null)
                    if (l) zi(p, !1);
                    else {
                        if (tt !== 0 || n !== null && (n.flags & 128) !== 0)
                            for (n = s.child; n !== null;) {
                                if (v = wa(n), v !== null) {
                                    for (s.flags |= 128, zi(p, !1), l = v.updateQueue, l !== null && (s.updateQueue = l, s.flags |= 4), s.subtreeFlags = 0, l = o, o = s.child; o !== null;) p = o, n = l, p.flags &= 14680066, v = p.alternate, v === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = v.childLanes, p.lanes = v.lanes, p.child = v.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = v.memoizedProps, p.memoizedState = v.memoizedState, p.updateQueue = v.updateQueue, p.type = v.type, n = v.dependencies, p.dependencies = n === null ? null : {
                                        lanes: n.lanes,
                                        firstContext: n.firstContext
                                    }), o = o.sibling;
                                    return Ie(ze, ze.current & 1 | 2), s.child
                                }
                                n = n.sibling
                            }
                        p.tail !== null && Qe() > Ms && (s.flags |= 128, l = !0, zi(p, !1), s.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (n = wa(v), n !== null) {
                            if (s.flags |= 128, l = !0, o = n.updateQueue, o !== null && (s.updateQueue = o, s.flags |= 4), zi(p, !0), p.tail === null && p.tailMode === "hidden" && !v.alternate && !Ue) return mt(s), null
                        } else 2 * Qe() - p.renderingStartTime > Ms && o !== 1073741824 && (s.flags |= 128, l = !0, zi(p, !1), s.lanes = 4194304);
                    p.isBackwards ? (v.sibling = s.child, s.child = v) : (o = p.last, o !== null ? o.sibling = v : s.child = v, p.last = v)
                }
                return p.tail !== null ? (s = p.tail, p.rendering = s, p.tail = s.sibling, p.renderingStartTime = Qe(), s.sibling = null, o = ze.current, Ie(ze, l ? o & 1 | 2 : o & 1), s) : (mt(s), null);
            case 22:
            case 23:
                return Rc(), l = s.memoizedState !== null, n !== null && n.memoizedState !== null !== l && (s.flags |= 8192), l && (s.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (mt(s), s.subtreeFlags & 6 && (s.flags |= 8192)) : mt(s), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(r(156, s.tag))
    }

    function CS(n, s) {
        switch (Fu(s), s.tag) {
            case 1:
                return Tt(s.type) && la(), n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 3:
                return As(), Ve(Ct), Ve(ht), Xu(), n = s.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (s.flags = n & -65537 | 128, s) : null;
            case 5:
                return Gu(s), null;
            case 13:
                if (Ve(ze), n = s.memoizedState, n !== null && n.dehydrated !== null) {
                    if (s.alternate === null) throw Error(r(340));
                    Ts()
                }
                return n = s.flags, n & 65536 ? (s.flags = n & -65537 | 128, s) : null;
            case 19:
                return Ve(ze), null;
            case 4:
                return As(), null;
            case 10:
                return Hu(s.type._context), null;
            case 22:
            case 23:
                return Rc(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var _a = !1,
        gt = !1,
        TS = typeof WeakSet == "function" ? WeakSet : Set,
        Z = null;

    function Ns(n, s) {
        var o = n.ref;
        if (o !== null)
            if (typeof o == "function") try {
                o(null)
            } catch (l) {
                qe(n, s, l)
            } else o.current = null
    }

    function yc(n, s, o) {
        try {
            o()
        } catch (l) {
            qe(n, s, l)
        }
    }
    var Pm = !1;

    function PS(n, s) {
        if (Ru = Qo, n = ip(), Su(n)) {
            if ("selectionStart" in n) var o = {
                start: n.selectionStart,
                end: n.selectionEnd
            };
            else e: {
                o = (o = n.ownerDocument) && o.defaultView || window;
                var l = o.getSelection && o.getSelection();
                if (l && l.rangeCount !== 0) {
                    o = l.anchorNode;
                    var d = l.anchorOffset,
                        p = l.focusNode;
                    l = l.focusOffset;
                    try {
                        o.nodeType, p.nodeType
                    } catch {
                        o = null;
                        break e
                    }
                    var v = 0,
                        E = -1,
                        T = -1,
                        D = 0,
                        H = 0,
                        q = n,
                        $ = null;
                    t: for (;;) {
                        for (var Y; q !== o || d !== 0 && q.nodeType !== 3 || (E = v + d), q !== p || l !== 0 && q.nodeType !== 3 || (T = v + l), q.nodeType === 3 && (v += q.nodeValue.length), (Y = q.firstChild) !== null;) $ = q, q = Y;
                        for (;;) {
                            if (q === n) break t;
                            if ($ === o && ++D === d && (E = v), $ === p && ++H === l && (T = v), (Y = q.nextSibling) !== null) break;
                            q = $, $ = q.parentNode
                        }
                        q = Y
                    }
                    o = E === -1 || T === -1 ? null : {
                        start: E,
                        end: T
                    }
                } else o = null
            }
            o = o || {
                start: 0,
                end: 0
            }
        } else o = null;
        for (Au = {
                focusedElem: n,
                selectionRange: o
            }, Qo = !1, Z = s; Z !== null;)
            if (s = Z, n = s.child, (s.subtreeFlags & 1028) !== 0 && n !== null) n.return = s, Z = n;
            else
                for (; Z !== null;) {
                    s = Z;
                    try {
                        var te = s.alternate;
                        if ((s.flags & 1024) !== 0) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (te !== null) {
                                    var se = te.memoizedProps,
                                        Ge = te.memoizedState,
                                        O = s.stateNode,
                                        _ = O.getSnapshotBeforeUpdate(s.elementType === s.type ? se : sn(s.type, se), Ge);
                                    O.__reactInternalSnapshotBeforeUpdate = _
                                }
                                break;
                            case 3:
                                var L = s.stateNode.containerInfo;
                                L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(r(163))
                        }
                    } catch (Q) {
                        qe(s, s.return, Q)
                    }
                    if (n = s.sibling, n !== null) {
                        n.return = s.return, Z = n;
                        break
                    }
                    Z = s.return
                }
        return te = Pm, Pm = !1, te
    }

    function $i(n, s, o) {
        var l = s.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
            var d = l = l.next;
            do {
                if ((d.tag & n) === n) {
                    var p = d.destroy;
                    d.destroy = void 0, p !== void 0 && yc(s, o, p)
                }
                d = d.next
            } while (d !== l)
        }
    }

    function Ra(n, s) {
        if (s = s.updateQueue, s = s !== null ? s.lastEffect : null, s !== null) {
            var o = s = s.next;
            do {
                if ((o.tag & n) === n) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== s)
        }
    }

    function vc(n) {
        var s = n.ref;
        if (s !== null) {
            var o = n.stateNode;
            switch (n.tag) {
                case 5:
                    n = o;
                    break;
                default:
                    n = o
            }
            typeof s == "function" ? s(n) : s.current = n
        }
    }

    function _m(n) {
        var s = n.alternate;
        s !== null && (n.alternate = null, _m(s)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (s = n.stateNode, s !== null && (delete s[mn], delete s[Ni], delete s[Mu], delete s[uS], delete s[cS])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null
    }

    function Rm(n) {
        return n.tag === 5 || n.tag === 3 || n.tag === 4
    }

    function Am(n) {
        e: for (;;) {
            for (; n.sibling === null;) {
                if (n.return === null || Rm(n.return)) return null;
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
                if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
                n.child.return = n, n = n.child
            }
            if (!(n.flags & 2)) return n.stateNode
        }
    }

    function wc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6) n = n.stateNode, s ? o.nodeType === 8 ? o.parentNode.insertBefore(n, s) : o.insertBefore(n, s) : (o.nodeType === 8 ? (s = o.parentNode, s.insertBefore(n, o)) : (s = o, s.appendChild(n)), o = o._reactRootContainer, o != null || s.onclick !== null || (s.onclick = oa));
        else if (l !== 4 && (n = n.child, n !== null))
            for (wc(n, s, o), n = n.sibling; n !== null;) wc(n, s, o), n = n.sibling
    }

    function xc(n, s, o) {
        var l = n.tag;
        if (l === 5 || l === 6) n = n.stateNode, s ? o.insertBefore(n, s) : o.appendChild(n);
        else if (l !== 4 && (n = n.child, n !== null))
            for (xc(n, s, o), n = n.sibling; n !== null;) xc(n, s, o), n = n.sibling
    }
    var at = null,
        on = !1;

    function rr(n, s, o) {
        for (o = o.child; o !== null;) Om(n, s, o), o = o.sibling
    }

    function Om(n, s, o) {
        if (pn && typeof pn.onCommitFiberUnmount == "function") try {
            pn.onCommitFiberUnmount(zo, o)
        } catch {}
        switch (o.tag) {
            case 5:
                gt || Ns(o, s);
            case 6:
                var l = at,
                    d = on;
                at = null, rr(n, s, o), at = l, on = d, at !== null && (on ? (n = at, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : at.removeChild(o.stateNode));
                break;
            case 18:
                at !== null && (on ? (n = at, o = o.stateNode, n.nodeType === 8 ? Lu(n.parentNode, o) : n.nodeType === 1 && Lu(n, o), Si(n)) : Lu(at, o.stateNode));
                break;
            case 4:
                l = at, d = on, at = o.stateNode.containerInfo, on = !0, rr(n, s, o), at = l, on = d;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!gt && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                    d = l = l.next;
                    do {
                        var p = d,
                            v = p.destroy;
                        p = p.tag, v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && yc(o, s, v), d = d.next
                    } while (d !== l)
                }
                rr(n, s, o);
                break;
            case 1:
                if (!gt && (Ns(o, s), l = o.stateNode, typeof l.componentWillUnmount == "function")) try {
                    l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount()
                } catch (E) {
                    qe(o, s, E)
                }
                rr(n, s, o);
                break;
            case 21:
                rr(n, s, o);
                break;
            case 22:
                o.mode & 1 ? (gt = (l = gt) || o.memoizedState !== null, rr(n, s, o), gt = l) : rr(n, s, o);
                break;
            default:
                rr(n, s, o)
        }
    }

    function Nm(n) {
        var s = n.updateQueue;
        if (s !== null) {
            n.updateQueue = null;
            var o = n.stateNode;
            o === null && (o = n.stateNode = new TS), s.forEach(function(l) {
                var d = jS.bind(null, n, l);
                o.has(l) || (o.add(l), l.then(d, d))
            })
        }
    }

    function an(n, s) {
        var o = s.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var d = o[l];
                try {
                    var p = n,
                        v = s,
                        E = v;
                    e: for (; E !== null;) {
                        switch (E.tag) {
                            case 5:
                                at = E.stateNode, on = !1;
                                break e;
                            case 3:
                                at = E.stateNode.containerInfo, on = !0;
                                break e;
                            case 4:
                                at = E.stateNode.containerInfo, on = !0;
                                break e
                        }
                        E = E.return
                    }
                    if (at === null) throw Error(r(160));
                    Om(p, v, d), at = null, on = !1;
                    var T = d.alternate;
                    T !== null && (T.return = null), d.return = null
                } catch (D) {
                    qe(d, s, D)
                }
            }
        if (s.subtreeFlags & 12854)
            for (s = s.child; s !== null;) Lm(s, n), s = s.sibling
    }

    function Lm(n, s) {
        var o = n.alternate,
            l = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (an(s, n), vn(n), l & 4) {
                    try {
                        $i(3, n, n.return), Ra(3, n)
                    } catch (se) {
                        qe(n, n.return, se)
                    }
                    try {
                        $i(5, n, n.return)
                    } catch (se) {
                        qe(n, n.return, se)
                    }
                }
                break;
            case 1:
                an(s, n), vn(n), l & 512 && o !== null && Ns(o, o.return);
                break;
            case 5:
                if (an(s, n), vn(n), l & 512 && o !== null && Ns(o, o.return), n.flags & 32) {
                    var d = n.stateNode;
                    try {
                        ci(d, "")
                    } catch (se) {
                        qe(n, n.return, se)
                    }
                }
                if (l & 4 && (d = n.stateNode, d != null)) {
                    var p = n.memoizedProps,
                        v = o !== null ? o.memoizedProps : p,
                        E = n.type,
                        T = n.updateQueue;
                    if (n.updateQueue = null, T !== null) try {
                        E === "input" && p.type === "radio" && p.name != null && ah(d, p), Xl(E, v);
                        var D = Xl(E, p);
                        for (v = 0; v < T.length; v += 2) {
                            var H = T[v],
                                q = T[v + 1];
                            H === "style" ? mh(d, q) : H === "dangerouslySetInnerHTML" ? hh(d, q) : H === "children" ? ci(d, q) : M(d, H, q, D)
                        }
                        switch (E) {
                            case "input":
                                Wl(d, p);
                                break;
                            case "textarea":
                                ch(d, p);
                                break;
                            case "select":
                                var $ = d._wrapperState.wasMultiple;
                                d._wrapperState.wasMultiple = !!p.multiple;
                                var Y = p.value;
                                Y != null ? ds(d, !!p.multiple, Y, !1) : $ !== !!p.multiple && (p.defaultValue != null ? ds(d, !!p.multiple, p.defaultValue, !0) : ds(d, !!p.multiple, p.multiple ? [] : "", !1))
                        }
                        d[Ni] = p
                    } catch (se) {
                        qe(n, n.return, se)
                    }
                }
                break;
            case 6:
                if (an(s, n), vn(n), l & 4) {
                    if (n.stateNode === null) throw Error(r(162));
                    d = n.stateNode, p = n.memoizedProps;
                    try {
                        d.nodeValue = p
                    } catch (se) {
                        qe(n, n.return, se)
                    }
                }
                break;
            case 3:
                if (an(s, n), vn(n), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
                    Si(s.containerInfo)
                } catch (se) {
                    qe(n, n.return, se)
                }
                break;
            case 4:
                an(s, n), vn(n);
                break;
            case 13:
                an(s, n), vn(n), d = n.child, d.flags & 8192 && (p = d.memoizedState !== null, d.stateNode.isHidden = p, !p || d.alternate !== null && d.alternate.memoizedState !== null || (kc = Qe())), l & 4 && Nm(n);
                break;
            case 22:
                if (H = o !== null && o.memoizedState !== null, n.mode & 1 ? (gt = (D = gt) || H, an(s, n), gt = D) : an(s, n), vn(n), l & 8192) {
                    if (D = n.memoizedState !== null, (n.stateNode.isHidden = D) && !H && (n.mode & 1) !== 0)
                        for (Z = n, H = n.child; H !== null;) {
                            for (q = Z = H; Z !== null;) {
                                switch ($ = Z, Y = $.child, $.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        $i(4, $, $.return);
                                        break;
                                    case 1:
                                        Ns($, $.return);
                                        var te = $.stateNode;
                                        if (typeof te.componentWillUnmount == "function") {
                                            l = $, o = $.return;
                                            try {
                                                s = l, te.props = s.memoizedProps, te.state = s.memoizedState, te.componentWillUnmount()
                                            } catch (se) {
                                                qe(l, o, se)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Ns($, $.return);
                                        break;
                                    case 22:
                                        if ($.memoizedState !== null) {
                                            jm(q);
                                            continue
                                        }
                                }
                                Y !== null ? (Y.return = $, Z = Y) : jm(q)
                            }
                            H = H.sibling
                        }
                    e: for (H = null, q = n;;) {
                        if (q.tag === 5) {
                            if (H === null) {
                                H = q;
                                try {
                                    d = q.stateNode, D ? (p = d.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (E = q.stateNode, T = q.memoizedProps.style, v = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = ph("display", v))
                                } catch (se) {
                                    qe(n, n.return, se)
                                }
                            }
                        } else if (q.tag === 6) {
                            if (H === null) try {
                                q.stateNode.nodeValue = D ? "" : q.memoizedProps
                            } catch (se) {
                                qe(n, n.return, se)
                            }
                        } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
                            q.child.return = q, q = q.child;
                            continue
                        }
                        if (q === n) break e;
                        for (; q.sibling === null;) {
                            if (q.return === null || q.return === n) break e;
                            H === q && (H = null), q = q.return
                        }
                        H === q && (H = null), q.sibling.return = q.return, q = q.sibling
                    }
                }
                break;
            case 19:
                an(s, n), vn(n), l & 4 && Nm(n);
                break;
            case 21:
                break;
            default:
                an(s, n), vn(n)
        }
    }

    function vn(n) {
        var s = n.flags;
        if (s & 2) {
            try {
                e: {
                    for (var o = n.return; o !== null;) {
                        if (Rm(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(r(160))
                }
                switch (l.tag) {
                    case 5:
                        var d = l.stateNode;
                        l.flags & 32 && (ci(d, ""), l.flags &= -33);
                        var p = Am(n);
                        xc(n, p, d);
                        break;
                    case 3:
                    case 4:
                        var v = l.stateNode.containerInfo,
                            E = Am(n);
                        wc(n, E, v);
                        break;
                    default:
                        throw Error(r(161))
                }
            }
            catch (T) {
                qe(n, n.return, T)
            }
            n.flags &= -3
        }
        s & 4096 && (n.flags &= -4097)
    }

    function _S(n, s, o) {
        Z = n, Mm(n)
    }

    function Mm(n, s, o) {
        for (var l = (n.mode & 1) !== 0; Z !== null;) {
            var d = Z,
                p = d.child;
            if (d.tag === 22 && l) {
                var v = d.memoizedState !== null || _a;
                if (!v) {
                    var E = d.alternate,
                        T = E !== null && E.memoizedState !== null || gt;
                    E = _a;
                    var D = gt;
                    if (_a = v, (gt = T) && !D)
                        for (Z = d; Z !== null;) v = Z, T = v.child, v.tag === 22 && v.memoizedState !== null ? Im(d) : T !== null ? (T.return = v, Z = T) : Im(d);
                    for (; p !== null;) Z = p, Mm(p), p = p.sibling;
                    Z = d, _a = E, gt = D
                }
                Dm(n)
            } else(d.subtreeFlags & 8772) !== 0 && p !== null ? (p.return = d, Z = p) : Dm(n)
        }
    }

    function Dm(n) {
        for (; Z !== null;) {
            var s = Z;
            if ((s.flags & 8772) !== 0) {
                var o = s.alternate;
                try {
                    if ((s.flags & 8772) !== 0) switch (s.tag) {
                        case 0:
                        case 11:
                        case 15:
                            gt || Ra(5, s);
                            break;
                        case 1:
                            var l = s.stateNode;
                            if (s.flags & 4 && !gt)
                                if (o === null) l.componentDidMount();
                                else {
                                    var d = s.elementType === s.type ? o.memoizedProps : sn(s.type, o.memoizedProps);
                                    l.componentDidUpdate(d, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var p = s.updateQueue;
                            p !== null && jp(s, p, l);
                            break;
                        case 3:
                            var v = s.updateQueue;
                            if (v !== null) {
                                if (o = null, s.child !== null) switch (s.child.tag) {
                                    case 5:
                                        o = s.child.stateNode;
                                        break;
                                    case 1:
                                        o = s.child.stateNode
                                }
                                jp(s, v, o)
                            }
                            break;
                        case 5:
                            var E = s.stateNode;
                            if (o === null && s.flags & 4) {
                                o = E;
                                var T = s.memoizedProps;
                                switch (s.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        T.autoFocus && o.focus();
                                        break;
                                    case "img":
                                        T.src && (o.src = T.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (s.memoizedState === null) {
                                var D = s.alternate;
                                if (D !== null) {
                                    var H = D.memoizedState;
                                    if (H !== null) {
                                        var q = H.dehydrated;
                                        q !== null && Si(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(r(163))
                    }
                    gt || s.flags & 512 && vc(s)
                } catch ($) {
                    qe(s, s.return, $)
                }
            }
            if (s === n) {
                Z = null;
                break
            }
            if (o = s.sibling, o !== null) {
                o.return = s.return, Z = o;
                break
            }
            Z = s.return
        }
    }

    function jm(n) {
        for (; Z !== null;) {
            var s = Z;
            if (s === n) {
                Z = null;
                break
            }
            var o = s.sibling;
            if (o !== null) {
                o.return = s.return, Z = o;
                break
            }
            Z = s.return
        }
    }

    function Im(n) {
        for (; Z !== null;) {
            var s = Z;
            try {
                switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = s.return;
                        try {
                            Ra(4, s)
                        } catch (T) {
                            qe(s, o, T)
                        }
                        break;
                    case 1:
                        var l = s.stateNode;
                        if (typeof l.componentDidMount == "function") {
                            var d = s.return;
                            try {
                                l.componentDidMount()
                            } catch (T) {
                                qe(s, d, T)
                            }
                        }
                        var p = s.return;
                        try {
                            vc(s)
                        } catch (T) {
                            qe(s, p, T)
                        }
                        break;
                    case 5:
                        var v = s.return;
                        try {
                            vc(s)
                        } catch (T) {
                            qe(s, v, T)
                        }
                }
            } catch (T) {
                qe(s, s.return, T)
            }
            if (s === n) {
                Z = null;
                break
            }
            var E = s.sibling;
            if (E !== null) {
                E.return = s.return, Z = E;
                break
            }
            Z = s.return
        }
    }
    var RS = Math.ceil,
        Aa = N.ReactCurrentDispatcher,
        Sc = N.ReactCurrentOwner,
        Kt = N.ReactCurrentBatchConfig,
        Te = 0,
        st = null,
        Je = null,
        lt = 0,
        Bt = 0,
        Ls = Jn(0),
        tt = 0,
        Hi = null,
        Fr = 0,
        Oa = 0,
        bc = 0,
        qi = null,
        _t = null,
        kc = 0,
        Ms = 1 / 0,
        Mn = null,
        Na = !1,
        Ec = null,
        sr = null,
        La = !1,
        ir = null,
        Ma = 0,
        Wi = 0,
        Cc = null,
        Da = -1,
        ja = 0;

    function kt() {
        return (Te & 6) !== 0 ? Qe() : Da !== -1 ? Da : Da = Qe()
    }

    function or(n) {
        return (n.mode & 1) === 0 ? 1 : (Te & 2) !== 0 && lt !== 0 ? lt & -lt : fS.transition !== null ? (ja === 0 && (ja = Ah()), ja) : (n = Ne, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Vh(n.type)), n)
    }

    function ln(n, s, o, l) {
        if (50 < Wi) throw Wi = 0, Cc = null, Error(r(185));
        gi(n, o, l), ((Te & 2) === 0 || n !== st) && (n === st && ((Te & 2) === 0 && (Oa |= o), tt === 4 && ar(n, lt)), Rt(n, l), o === 1 && Te === 0 && (s.mode & 1) === 0 && (Ms = Qe() + 500, ca && er()))
    }

    function Rt(n, s) {
        var o = n.callbackNode;
        f1(n, s);
        var l = qo(n, n === st ? lt : 0);
        if (l === 0) o !== null && Ph(o), n.callbackNode = null, n.callbackPriority = 0;
        else if (s = l & -l, n.callbackPriority !== s) {
            if (o != null && Ph(o), s === 1) n.tag === 0 ? dS(Vm.bind(null, n)) : Ep(Vm.bind(null, n)), aS(function() {
                (Te & 6) === 0 && er()
            }), o = null;
            else {
                switch (Oh(l)) {
                    case 1:
                        o = su;
                        break;
                    case 4:
                        o = _h;
                        break;
                    case 16:
                        o = Uo;
                        break;
                    case 536870912:
                        o = Rh;
                        break;
                    default:
                        o = Uo
                }
                o = Km(o, Fm.bind(null, n))
            }
            n.callbackPriority = s, n.callbackNode = o
        }
    }

    function Fm(n, s) {
        if (Da = -1, ja = 0, (Te & 6) !== 0) throw Error(r(327));
        var o = n.callbackNode;
        if (Ds() && n.callbackNode !== o) return null;
        var l = qo(n, n === st ? lt : 0);
        if (l === 0) return null;
        if ((l & 30) !== 0 || (l & n.expiredLanes) !== 0 || s) s = Ia(n, l);
        else {
            s = l;
            var d = Te;
            Te |= 2;
            var p = Um();
            (st !== n || lt !== s) && (Mn = null, Ms = Qe() + 500, Br(n, s));
            do try {
                NS();
                break
            } catch (E) {
                Bm(n, E)
            }
            while (!0);
            $u(), Aa.current = p, Te = d, Je !== null ? s = 0 : (st = null, lt = 0, s = tt)
        }
        if (s !== 0) {
            if (s === 2 && (d = iu(n), d !== 0 && (l = d, s = Tc(n, d))), s === 1) throw o = Hi, Br(n, 0), ar(n, l), Rt(n, Qe()), o;
            if (s === 6) ar(n, l);
            else {
                if (d = n.current.alternate, (l & 30) === 0 && !AS(d) && (s = Ia(n, l), s === 2 && (p = iu(n), p !== 0 && (l = p, s = Tc(n, p))), s === 1)) throw o = Hi, Br(n, 0), ar(n, l), Rt(n, Qe()), o;
                switch (n.finishedWork = d, n.finishedLanes = l, s) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 2:
                        Ur(n, _t, Mn);
                        break;
                    case 3:
                        if (ar(n, l), (l & 130023424) === l && (s = kc + 500 - Qe(), 10 < s)) {
                            if (qo(n, 0) !== 0) break;
                            if (d = n.suspendedLanes, (d & l) !== l) {
                                kt(), n.pingedLanes |= n.suspendedLanes & d;
                                break
                            }
                            n.timeoutHandle = Nu(Ur.bind(null, n, _t, Mn), s);
                            break
                        }
                        Ur(n, _t, Mn);
                        break;
                    case 4:
                        if (ar(n, l), (l & 4194240) === l) break;
                        for (s = n.eventTimes, d = -1; 0 < l;) {
                            var v = 31 - tn(l);
                            p = 1 << v, v = s[v], v > d && (d = v), l &= ~p
                        }
                        if (l = d, l = Qe() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * RS(l / 1960)) - l, 10 < l) {
                            n.timeoutHandle = Nu(Ur.bind(null, n, _t, Mn), l);
                            break
                        }
                        Ur(n, _t, Mn);
                        break;
                    case 5:
                        Ur(n, _t, Mn);
                        break;
                    default:
                        throw Error(r(329))
                }
            }
        }
        return Rt(n, Qe()), n.callbackNode === o ? Fm.bind(null, n) : null
    }

    function Tc(n, s) {
        var o = qi;
        return n.current.memoizedState.isDehydrated && (Br(n, s).flags |= 256), n = Ia(n, s), n !== 2 && (s = _t, _t = o, s !== null && Pc(s)), n
    }

    function Pc(n) {
        _t === null ? _t = n : _t.push.apply(_t, n)
    }

    function AS(n) {
        for (var s = n;;) {
            if (s.flags & 16384) {
                var o = s.updateQueue;
                if (o !== null && (o = o.stores, o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var d = o[l],
                            p = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!nn(p(), d)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = s.child, s.subtreeFlags & 16384 && o !== null) o.return = s, s = o;
            else {
                if (s === n) break;
                for (; s.sibling === null;) {
                    if (s.return === null || s.return === n) return !0;
                    s = s.return
                }
                s.sibling.return = s.return, s = s.sibling
            }
        }
        return !0
    }

    function ar(n, s) {
        for (s &= ~bc, s &= ~Oa, n.suspendedLanes |= s, n.pingedLanes &= ~s, n = n.expirationTimes; 0 < s;) {
            var o = 31 - tn(s),
                l = 1 << o;
            n[o] = -1, s &= ~l
        }
    }

    function Vm(n) {
        if ((Te & 6) !== 0) throw Error(r(327));
        Ds();
        var s = qo(n, 0);
        if ((s & 1) === 0) return Rt(n, Qe()), null;
        var o = Ia(n, s);
        if (n.tag !== 0 && o === 2) {
            var l = iu(n);
            l !== 0 && (s = l, o = Tc(n, l))
        }
        if (o === 1) throw o = Hi, Br(n, 0), ar(n, s), Rt(n, Qe()), o;
        if (o === 6) throw Error(r(345));
        return n.finishedWork = n.current.alternate, n.finishedLanes = s, Ur(n, _t, Mn), Rt(n, Qe()), null
    }

    function _c(n, s) {
        var o = Te;
        Te |= 1;
        try {
            return n(s)
        } finally {
            Te = o, Te === 0 && (Ms = Qe() + 500, ca && er())
        }
    }

    function Vr(n) {
        ir !== null && ir.tag === 0 && (Te & 6) === 0 && Ds();
        var s = Te;
        Te |= 1;
        var o = Kt.transition,
            l = Ne;
        try {
            if (Kt.transition = null, Ne = 1, n) return n()
        } finally {
            Ne = l, Kt.transition = o, Te = s, (Te & 6) === 0 && er()
        }
    }

    function Rc() {
        Bt = Ls.current, Ve(Ls)
    }

    function Br(n, s) {
        n.finishedWork = null, n.finishedLanes = 0;
        var o = n.timeoutHandle;
        if (o !== -1 && (n.timeoutHandle = -1, oS(o)), Je !== null)
            for (o = Je.return; o !== null;) {
                var l = o;
                switch (Fu(l), l.tag) {
                    case 1:
                        l = l.type.childContextTypes, l != null && la();
                        break;
                    case 3:
                        As(), Ve(Ct), Ve(ht), Xu();
                        break;
                    case 5:
                        Gu(l);
                        break;
                    case 4:
                        As();
                        break;
                    case 13:
                        Ve(ze);
                        break;
                    case 19:
                        Ve(ze);
                        break;
                    case 10:
                        Hu(l.type._context);
                        break;
                    case 22:
                    case 23:
                        Rc()
                }
                o = o.return
            }
        if (st = n, Je = n = lr(n.current, null), lt = Bt = s, tt = 0, Hi = null, bc = Oa = Fr = 0, _t = qi = null, Dr !== null) {
            for (s = 0; s < Dr.length; s++)
                if (o = Dr[s], l = o.interleaved, l !== null) {
                    o.interleaved = null;
                    var d = l.next,
                        p = o.pending;
                    if (p !== null) {
                        var v = p.next;
                        p.next = d, l.next = v
                    }
                    o.pending = l
                }
            Dr = null
        }
        return n
    }

    function Bm(n, s) {
        do {
            var o = Je;
            try {
                if ($u(), xa.current = Ea, Sa) {
                    for (var l = $e.memoizedState; l !== null;) {
                        var d = l.queue;
                        d !== null && (d.pending = null), l = l.next
                    }
                    Sa = !1
                }
                if (Ir = 0, rt = et = $e = null, Fi = !1, Vi = 0, Sc.current = null, o === null || o.return === null) {
                    tt = 1, Hi = s, Je = null;
                    break
                }
                e: {
                    var p = n,
                        v = o.return,
                        E = o,
                        T = s;
                    if (s = lt, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
                        var D = T,
                            H = E,
                            q = H.tag;
                        if ((H.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var $ = H.alternate;
                            $ ? (H.updateQueue = $.updateQueue, H.memoizedState = $.memoizedState, H.lanes = $.lanes) : (H.updateQueue = null, H.memoizedState = null)
                        }
                        var Y = dm(v);
                        if (Y !== null) {
                            Y.flags &= -257, fm(Y, v, E, p, s), Y.mode & 1 && cm(p, D, s), s = Y, T = D;
                            var te = s.updateQueue;
                            if (te === null) {
                                var se = new Set;
                                se.add(T), s.updateQueue = se
                            } else te.add(T);
                            break e
                        } else {
                            if ((s & 1) === 0) {
                                cm(p, D, s), Ac();
                                break e
                            }
                            T = Error(r(426))
                        }
                    } else if (Ue && E.mode & 1) {
                        var Ge = dm(v);
                        if (Ge !== null) {
                            (Ge.flags & 65536) === 0 && (Ge.flags |= 256), fm(Ge, v, E, p, s), Uu(Os(T, E));
                            break e
                        }
                    }
                    p = T = Os(T, E),
                    tt !== 4 && (tt = 2),
                    qi === null ? qi = [p] : qi.push(p),
                    p = v;do {
                        switch (p.tag) {
                            case 3:
                                p.flags |= 65536, s &= -s, p.lanes |= s;
                                var O = lm(p, T, s);
                                Dp(p, O);
                                break e;
                            case 1:
                                E = T;
                                var _ = p.type,
                                    L = p.stateNode;
                                if ((p.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (sr === null || !sr.has(L)))) {
                                    p.flags |= 65536, s &= -s, p.lanes |= s;
                                    var Q = um(p, E, s);
                                    Dp(p, Q);
                                    break e
                                }
                        }
                        p = p.return
                    } while (p !== null)
                }
                $m(o)
            } catch (oe) {
                s = oe, Je === o && o !== null && (Je = o = o.return);
                continue
            }
            break
        } while (!0)
    }

    function Um() {
        var n = Aa.current;
        return Aa.current = Ea, n === null ? Ea : n
    }

    function Ac() {
        (tt === 0 || tt === 3 || tt === 2) && (tt = 4), st === null || (Fr & 268435455) === 0 && (Oa & 268435455) === 0 || ar(st, lt)
    }

    function Ia(n, s) {
        var o = Te;
        Te |= 2;
        var l = Um();
        (st !== n || lt !== s) && (Mn = null, Br(n, s));
        do try {
            OS();
            break
        } catch (d) {
            Bm(n, d)
        }
        while (!0);
        if ($u(), Te = o, Aa.current = l, Je !== null) throw Error(r(261));
        return st = null, lt = 0, tt
    }

    function OS() {
        for (; Je !== null;) zm(Je)
    }

    function NS() {
        for (; Je !== null && !r1();) zm(Je)
    }

    function zm(n) {
        var s = Wm(n.alternate, n, Bt);
        n.memoizedProps = n.pendingProps, s === null ? $m(n) : Je = s, Sc.current = null
    }

    function $m(n) {
        var s = n;
        do {
            var o = s.alternate;
            if (n = s.return, (s.flags & 32768) === 0) {
                if (o = ES(o, s, Bt), o !== null) {
                    Je = o;
                    return
                }
            } else {
                if (o = CS(o, s), o !== null) {
                    o.flags &= 32767, Je = o;
                    return
                }
                if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
                else {
                    tt = 6, Je = null;
                    return
                }
            }
            if (s = s.sibling, s !== null) {
                Je = s;
                return
            }
            Je = s = n
        } while (s !== null);
        tt === 0 && (tt = 5)
    }

    function Ur(n, s, o) {
        var l = Ne,
            d = Kt.transition;
        try {
            Kt.transition = null, Ne = 1, LS(n, s, o, l)
        } finally {
            Kt.transition = d, Ne = l
        }
        return null
    }

    function LS(n, s, o, l) {
        do Ds(); while (ir !== null);
        if ((Te & 6) !== 0) throw Error(r(327));
        o = n.finishedWork;
        var d = n.finishedLanes;
        if (o === null) return null;
        if (n.finishedWork = null, n.finishedLanes = 0, o === n.current) throw Error(r(177));
        n.callbackNode = null, n.callbackPriority = 0;
        var p = o.lanes | o.childLanes;
        if (h1(n, p), n === st && (Je = st = null, lt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || La || (La = !0, Km(Uo, function() {
                return Ds(), null
            })), p = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || p) {
            p = Kt.transition, Kt.transition = null;
            var v = Ne;
            Ne = 1;
            var E = Te;
            Te |= 4, Sc.current = null, PS(n, o), Lm(o, n), Z1(Au), Qo = !!Ru, Au = Ru = null, n.current = o, _S(o), s1(), Te = E, Ne = v, Kt.transition = p
        } else n.current = o;
        if (La && (La = !1, ir = n, Ma = d), p = n.pendingLanes, p === 0 && (sr = null), a1(o.stateNode), Rt(n, Qe()), s !== null)
            for (l = n.onRecoverableError, o = 0; o < s.length; o++) d = s[o], l(d.value, {
                componentStack: d.stack,
                digest: d.digest
            });
        if (Na) throw Na = !1, n = Ec, Ec = null, n;
        return (Ma & 1) !== 0 && n.tag !== 0 && Ds(), p = n.pendingLanes, (p & 1) !== 0 ? n === Cc ? Wi++ : (Wi = 0, Cc = n) : Wi = 0, er(), null
    }

    function Ds() {
        if (ir !== null) {
            var n = Oh(Ma),
                s = Kt.transition,
                o = Ne;
            try {
                if (Kt.transition = null, Ne = 16 > n ? 16 : n, ir === null) var l = !1;
                else {
                    if (n = ir, ir = null, Ma = 0, (Te & 6) !== 0) throw Error(r(331));
                    var d = Te;
                    for (Te |= 4, Z = n.current; Z !== null;) {
                        var p = Z,
                            v = p.child;
                        if ((Z.flags & 16) !== 0) {
                            var E = p.deletions;
                            if (E !== null) {
                                for (var T = 0; T < E.length; T++) {
                                    var D = E[T];
                                    for (Z = D; Z !== null;) {
                                        var H = Z;
                                        switch (H.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                $i(8, H, p)
                                        }
                                        var q = H.child;
                                        if (q !== null) q.return = H, Z = q;
                                        else
                                            for (; Z !== null;) {
                                                H = Z;
                                                var $ = H.sibling,
                                                    Y = H.return;
                                                if (_m(H), H === D) {
                                                    Z = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = Y, Z = $;
                                                    break
                                                }
                                                Z = Y
                                            }
                                    }
                                }
                                var te = p.alternate;
                                if (te !== null) {
                                    var se = te.child;
                                    if (se !== null) {
                                        te.child = null;
                                        do {
                                            var Ge = se.sibling;
                                            se.sibling = null, se = Ge
                                        } while (se !== null)
                                    }
                                }
                                Z = p
                            }
                        }
                        if ((p.subtreeFlags & 2064) !== 0 && v !== null) v.return = p, Z = v;
                        else e: for (; Z !== null;) {
                            if (p = Z, (p.flags & 2048) !== 0) switch (p.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    $i(9, p, p.return)
                            }
                            var O = p.sibling;
                            if (O !== null) {
                                O.return = p.return, Z = O;
                                break e
                            }
                            Z = p.return
                        }
                    }
                    var _ = n.current;
                    for (Z = _; Z !== null;) {
                        v = Z;
                        var L = v.child;
                        if ((v.subtreeFlags & 2064) !== 0 && L !== null) L.return = v, Z = L;
                        else e: for (v = _; Z !== null;) {
                            if (E = Z, (E.flags & 2048) !== 0) try {
                                switch (E.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ra(9, E)
                                }
                            } catch (oe) {
                                qe(E, E.return, oe)
                            }
                            if (E === v) {
                                Z = null;
                                break e
                            }
                            var Q = E.sibling;
                            if (Q !== null) {
                                Q.return = E.return, Z = Q;
                                break e
                            }
                            Z = E.return
                        }
                    }
                    if (Te = d, er(), pn && typeof pn.onPostCommitFiberRoot == "function") try {
                        pn.onPostCommitFiberRoot(zo, n)
                    } catch {}
                    l = !0
                }
                return l
            } finally {
                Ne = o, Kt.transition = s
            }
        }
        return !1
    }

    function Hm(n, s, o) {
        s = Os(o, s), s = lm(n, s, 1), n = nr(n, s, 1), s = kt(), n !== null && (gi(n, 1, s), Rt(n, s))
    }

    function qe(n, s, o) {
        if (n.tag === 3) Hm(n, n, o);
        else
            for (; s !== null;) {
                if (s.tag === 3) {
                    Hm(s, n, o);
                    break
                } else if (s.tag === 1) {
                    var l = s.stateNode;
                    if (typeof s.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (sr === null || !sr.has(l))) {
                        n = Os(o, n), n = um(s, n, 1), s = nr(s, n, 1), n = kt(), s !== null && (gi(s, 1, n), Rt(s, n));
                        break
                    }
                }
                s = s.return
            }
    }

    function MS(n, s, o) {
        var l = n.pingCache;
        l !== null && l.delete(s), s = kt(), n.pingedLanes |= n.suspendedLanes & o, st === n && (lt & o) === o && (tt === 4 || tt === 3 && (lt & 130023424) === lt && 500 > Qe() - kc ? Br(n, 0) : bc |= o), Rt(n, s)
    }

    function qm(n, s) {
        s === 0 && ((n.mode & 1) === 0 ? s = 1 : (s = Ho, Ho <<= 1, (Ho & 130023424) === 0 && (Ho = 4194304)));
        var o = kt();
        n = On(n, s), n !== null && (gi(n, s, o), Rt(n, o))
    }

    function DS(n) {
        var s = n.memoizedState,
            o = 0;
        s !== null && (o = s.retryLane), qm(n, o)
    }

    function jS(n, s) {
        var o = 0;
        switch (n.tag) {
            case 13:
                var l = n.stateNode,
                    d = n.memoizedState;
                d !== null && (o = d.retryLane);
                break;
            case 19:
                l = n.stateNode;
                break;
            default:
                throw Error(r(314))
        }
        l !== null && l.delete(s), qm(n, o)
    }
    var Wm;
    Wm = function(n, s, o) {
        if (n !== null)
            if (n.memoizedProps !== s.pendingProps || Ct.current) Pt = !0;
            else {
                if ((n.lanes & o) === 0 && (s.flags & 128) === 0) return Pt = !1, kS(n, s, o);
                Pt = (n.flags & 131072) !== 0
            }
        else Pt = !1, Ue && (s.flags & 1048576) !== 0 && Cp(s, fa, s.index);
        switch (s.lanes = 0, s.tag) {
            case 2:
                var l = s.type;
                Pa(n, s), n = s.pendingProps;
                var d = ks(s, ht.current);
                Rs(s, o), d = ec(null, s, l, n, d, o);
                var p = tc();
                return s.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (s.tag = 1, s.memoizedState = null, s.updateQueue = null, Tt(l) ? (p = !0, ua(s)) : p = !1, s.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Ku(s), d.updater = Ca, s.stateNode = d, d._reactInternals = s, ac(s, l, n, o), s = dc(null, s, l, !0, p, o)) : (s.tag = 0, Ue && p && Iu(s), bt(null, s, d, o), s = s.child), s;
            case 16:
                l = s.elementType;
                e: {
                    switch (Pa(n, s), n = s.pendingProps, d = l._init, l = d(l._payload), s.type = l, d = s.tag = FS(l), n = sn(l, n), d) {
                        case 0:
                            s = cc(null, s, l, n, o);
                            break e;
                        case 1:
                            s = vm(null, s, l, n, o);
                            break e;
                        case 11:
                            s = hm(null, s, l, n, o);
                            break e;
                        case 14:
                            s = pm(null, s, l, sn(l.type, n), o);
                            break e
                    }
                    throw Error(r(306, l, ""))
                }
                return s;
            case 0:
                return l = s.type, d = s.pendingProps, d = s.elementType === l ? d : sn(l, d), cc(n, s, l, d, o);
            case 1:
                return l = s.type, d = s.pendingProps, d = s.elementType === l ? d : sn(l, d), vm(n, s, l, d, o);
            case 3:
                e: {
                    if (wm(s), n === null) throw Error(r(387));l = s.pendingProps,
                    p = s.memoizedState,
                    d = p.element,
                    Mp(n, s),
                    va(s, l, null, o);
                    var v = s.memoizedState;
                    if (l = v.element, p.isDehydrated)
                        if (p = {
                                element: l,
                                isDehydrated: !1,
                                cache: v.cache,
                                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                                transitions: v.transitions
                            }, s.updateQueue.baseState = p, s.memoizedState = p, s.flags & 256) {
                            d = Os(Error(r(423)), s), s = xm(n, s, l, o, d);
                            break e
                        } else if (l !== d) {
                        d = Os(Error(r(424)), s), s = xm(n, s, l, o, d);
                        break e
                    } else
                        for (Vt = Xn(s.stateNode.containerInfo.firstChild), Ft = s, Ue = !0, rn = null, o = Np(s, null, l, o), s.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
                    else {
                        if (Ts(), l === d) {
                            s = Ln(n, s, o);
                            break e
                        }
                        bt(n, s, l, o)
                    }
                    s = s.child
                }
                return s;
            case 5:
                return Ip(s), n === null && Bu(s), l = s.type, d = s.pendingProps, p = n !== null ? n.memoizedProps : null, v = d.children, Ou(l, d) ? v = null : p !== null && Ou(l, p) && (s.flags |= 32), ym(n, s), bt(n, s, v, o), s.child;
            case 6:
                return n === null && Bu(s), null;
            case 13:
                return Sm(n, s, o);
            case 4:
                return Qu(s, s.stateNode.containerInfo), l = s.pendingProps, n === null ? s.child = Ps(s, null, l, o) : bt(n, s, l, o), s.child;
            case 11:
                return l = s.type, d = s.pendingProps, d = s.elementType === l ? d : sn(l, d), hm(n, s, l, d, o);
            case 7:
                return bt(n, s, s.pendingProps, o), s.child;
            case 8:
                return bt(n, s, s.pendingProps.children, o), s.child;
            case 12:
                return bt(n, s, s.pendingProps.children, o), s.child;
            case 10:
                e: {
                    if (l = s.type._context, d = s.pendingProps, p = s.memoizedProps, v = d.value, Ie(ma, l._currentValue), l._currentValue = v, p !== null)
                        if (nn(p.value, v)) {
                            if (p.children === d.children && !Ct.current) {
                                s = Ln(n, s, o);
                                break e
                            }
                        } else
                            for (p = s.child, p !== null && (p.return = s); p !== null;) {
                                var E = p.dependencies;
                                if (E !== null) {
                                    v = p.child;
                                    for (var T = E.firstContext; T !== null;) {
                                        if (T.context === l) {
                                            if (p.tag === 1) {
                                                T = Nn(-1, o & -o), T.tag = 2;
                                                var D = p.updateQueue;
                                                if (D !== null) {
                                                    D = D.shared;
                                                    var H = D.pending;
                                                    H === null ? T.next = T : (T.next = H.next, H.next = T), D.pending = T
                                                }
                                            }
                                            p.lanes |= o, T = p.alternate, T !== null && (T.lanes |= o), qu(p.return, o, s), E.lanes |= o;
                                            break
                                        }
                                        T = T.next
                                    }
                                } else if (p.tag === 10) v = p.type === s.type ? null : p.child;
                                else if (p.tag === 18) {
                                    if (v = p.return, v === null) throw Error(r(341));
                                    v.lanes |= o, E = v.alternate, E !== null && (E.lanes |= o), qu(v, o, s), v = p.sibling
                                } else v = p.child;
                                if (v !== null) v.return = p;
                                else
                                    for (v = p; v !== null;) {
                                        if (v === s) {
                                            v = null;
                                            break
                                        }
                                        if (p = v.sibling, p !== null) {
                                            p.return = v.return, v = p;
                                            break
                                        }
                                        v = v.return
                                    }
                                p = v
                            }
                    bt(n, s, d.children, o),
                    s = s.child
                }
                return s;
            case 9:
                return d = s.type, l = s.pendingProps.children, Rs(s, o), d = qt(d), l = l(d), s.flags |= 1, bt(n, s, l, o), s.child;
            case 14:
                return l = s.type, d = sn(l, s.pendingProps), d = sn(l.type, d), pm(n, s, l, d, o);
            case 15:
                return mm(n, s, s.type, s.pendingProps, o);
            case 17:
                return l = s.type, d = s.pendingProps, d = s.elementType === l ? d : sn(l, d), Pa(n, s), s.tag = 1, Tt(l) ? (n = !0, ua(s)) : n = !1, Rs(s, o), om(s, l, d), ac(s, l, d, o), dc(null, s, l, !0, n, o);
            case 19:
                return km(n, s, o);
            case 22:
                return gm(n, s, o)
        }
        throw Error(r(156, s.tag))
    };

    function Km(n, s) {
        return Th(n, s)
    }

    function IS(n, s, o, l) {
        this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = s, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Qt(n, s, o, l) {
        return new IS(n, s, o, l)
    }

    function Oc(n) {
        return n = n.prototype, !(!n || !n.isReactComponent)
    }

    function FS(n) {
        if (typeof n == "function") return Oc(n) ? 1 : 0;
        if (n != null) {
            if (n = n.$$typeof, n === Le) return 11;
            if (n === je) return 14
        }
        return 2
    }

    function lr(n, s) {
        var o = n.alternate;
        return o === null ? (o = Qt(n.tag, s, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = s, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, s = n.dependencies, o.dependencies = s === null ? null : {
            lanes: s.lanes,
            firstContext: s.firstContext
        }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o
    }

    function Fa(n, s, o, l, d, p) {
        var v = 2;
        if (l = n, typeof n == "function") Oc(n) && (v = 1);
        else if (typeof n == "string") v = 5;
        else e: switch (n) {
            case G:
                return zr(o.children, d, p, s);
            case F:
                v = 8, d |= 8;
                break;
            case J:
                return n = Qt(12, o, s, d | 2), n.elementType = J, n.lanes = p, n;
            case Me:
                return n = Qt(13, o, s, d), n.elementType = Me, n.lanes = p, n;
            case Re:
                return n = Qt(19, o, s, d), n.elementType = Re, n.lanes = p, n;
            case fe:
                return Va(o, d, p, s);
            default:
                if (typeof n == "object" && n !== null) switch (n.$$typeof) {
                    case ee:
                        v = 10;
                        break e;
                    case Ce:
                        v = 9;
                        break e;
                    case Le:
                        v = 11;
                        break e;
                    case je:
                        v = 14;
                        break e;
                    case we:
                        v = 16, l = null;
                        break e
                }
                throw Error(r(130, n == null ? n : typeof n, ""))
        }
        return s = Qt(v, o, s, d), s.elementType = n, s.type = l, s.lanes = p, s
    }

    function zr(n, s, o, l) {
        return n = Qt(7, n, l, s), n.lanes = o, n
    }

    function Va(n, s, o, l) {
        return n = Qt(22, n, l, s), n.elementType = fe, n.lanes = o, n.stateNode = {
            isHidden: !1
        }, n
    }

    function Nc(n, s, o) {
        return n = Qt(6, n, null, s), n.lanes = o, n
    }

    function Lc(n, s, o) {
        return s = Qt(4, n.children !== null ? n.children : [], n.key, s), s.lanes = o, s.stateNode = {
            containerInfo: n.containerInfo,
            pendingChildren: null,
            implementation: n.implementation
        }, s
    }

    function VS(n, s, o, l, d) {
        this.tag = s, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ou(0), this.expirationTimes = ou(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ou(0), this.identifierPrefix = l, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null
    }

    function Mc(n, s, o, l, d, p, v, E, T) {
        return n = new VS(n, s, o, E, T), s === 1 ? (s = 1, p === !0 && (s |= 8)) : s = 0, p = Qt(3, null, null, s), n.current = p, p.stateNode = n, p.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Ku(p), n
    }

    function BS(n, s, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: K,
            key: l == null ? null : "" + l,
            children: n,
            containerInfo: s,
            implementation: o
        }
    }

    function Qm(n) {
        if (!n) return Zn;
        n = n._reactInternals;
        e: {
            if (Ar(n) !== n || n.tag !== 1) throw Error(r(170));
            var s = n;do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context;
                        break e;
                    case 1:
                        if (Tt(s.type)) {
                            s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                s = s.return
            } while (s !== null);
            throw Error(r(171))
        }
        if (n.tag === 1) {
            var o = n.type;
            if (Tt(o)) return bp(n, o, s)
        }
        return s
    }

    function Gm(n, s, o, l, d, p, v, E, T) {
        return n = Mc(o, l, !0, n, d, p, v, E, T), n.context = Qm(null), o = n.current, l = kt(), d = or(o), p = Nn(l, d), p.callback = s ? ? null, nr(o, p, d), n.current.lanes = d, gi(n, d, l), Rt(n, l), n
    }

    function Ba(n, s, o, l) {
        var d = s.current,
            p = kt(),
            v = or(d);
        return o = Qm(o), s.context === null ? s.context = o : s.pendingContext = o, s = Nn(p, v), s.payload = {
            element: n
        }, l = l === void 0 ? null : l, l !== null && (s.callback = l), n = nr(d, s, v), n !== null && (ln(n, d, v, p), ya(n, d, v)), v
    }

    function Ua(n) {
        if (n = n.current, !n.child) return null;
        switch (n.child.tag) {
            case 5:
                return n.child.stateNode;
            default:
                return n.child.stateNode
        }
    }

    function Ym(n, s) {
        if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
            var o = n.retryLane;
            n.retryLane = o !== 0 && o < s ? o : s
        }
    }

    function Dc(n, s) {
        Ym(n, s), (n = n.alternate) && Ym(n, s)
    }

    function US() {
        return null
    }
    var Xm = typeof reportError == "function" ? reportError : function(n) {
        console.error(n)
    };

    function jc(n) {
        this._internalRoot = n
    }
    za.prototype.render = jc.prototype.render = function(n) {
        var s = this._internalRoot;
        if (s === null) throw Error(r(409));
        Ba(n, s, null, null)
    }, za.prototype.unmount = jc.prototype.unmount = function() {
        var n = this._internalRoot;
        if (n !== null) {
            this._internalRoot = null;
            var s = n.containerInfo;
            Vr(function() {
                Ba(null, n, null, null)
            }), s[Pn] = null
        }
    };

    function za(n) {
        this._internalRoot = n
    }
    za.prototype.unstable_scheduleHydration = function(n) {
        if (n) {
            var s = Mh();
            n = {
                blockedOn: null,
                target: n,
                priority: s
            };
            for (var o = 0; o < Qn.length && s !== 0 && s < Qn[o].priority; o++);
            Qn.splice(o, 0, n), o === 0 && Ih(n)
        }
    };

    function Ic(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
    }

    function $a(n) {
        return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
    }

    function Jm() {}

    function zS(n, s, o, l, d) {
        if (d) {
            if (typeof l == "function") {
                var p = l;
                l = function() {
                    var D = Ua(v);
                    p.call(D)
                }
            }
            var v = Gm(s, l, n, 0, null, !1, !1, "", Jm);
            return n._reactRootContainer = v, n[Pn] = v.current, Ai(n.nodeType === 8 ? n.parentNode : n), Vr(), v
        }
        for (; d = n.lastChild;) n.removeChild(d);
        if (typeof l == "function") {
            var E = l;
            l = function() {
                var D = Ua(T);
                E.call(D)
            }
        }
        var T = Mc(n, 0, !1, null, null, !1, !1, "", Jm);
        return n._reactRootContainer = T, n[Pn] = T.current, Ai(n.nodeType === 8 ? n.parentNode : n), Vr(function() {
            Ba(s, T, o, l)
        }), T
    }

    function Ha(n, s, o, l, d) {
        var p = o._reactRootContainer;
        if (p) {
            var v = p;
            if (typeof d == "function") {
                var E = d;
                d = function() {
                    var T = Ua(v);
                    E.call(T)
                }
            }
            Ba(s, v, n, d)
        } else v = zS(o, s, n, d, l);
        return Ua(v)
    }
    Nh = function(n) {
        switch (n.tag) {
            case 3:
                var s = n.stateNode;
                if (s.current.memoizedState.isDehydrated) {
                    var o = mi(s.pendingLanes);
                    o !== 0 && (au(s, o | 1), Rt(s, Qe()), (Te & 6) === 0 && (Ms = Qe() + 500, er()))
                }
                break;
            case 13:
                Vr(function() {
                    var l = On(n, 1);
                    if (l !== null) {
                        var d = kt();
                        ln(l, n, 1, d)
                    }
                }), Dc(n, 1)
        }
    }, lu = function(n) {
        if (n.tag === 13) {
            var s = On(n, 134217728);
            if (s !== null) {
                var o = kt();
                ln(s, n, 134217728, o)
            }
            Dc(n, 134217728)
        }
    }, Lh = function(n) {
        if (n.tag === 13) {
            var s = or(n),
                o = On(n, s);
            if (o !== null) {
                var l = kt();
                ln(o, n, s, l)
            }
            Dc(n, s)
        }
    }, Mh = function() {
        return Ne
    }, Dh = function(n, s) {
        var o = Ne;
        try {
            return Ne = n, s()
        } finally {
            Ne = o
        }
    }, eu = function(n, s, o) {
        switch (s) {
            case "input":
                if (Wl(n, o), s = o.name, o.type === "radio" && s != null) {
                    for (o = n; o.parentNode;) o = o.parentNode;
                    for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + s) + '][type="radio"]'), s = 0; s < o.length; s++) {
                        var l = o[s];
                        if (l !== n && l.form === n.form) {
                            var d = aa(l);
                            if (!d) throw Error(r(90));
                            Rr(l), Wl(l, d)
                        }
                    }
                }
                break;
            case "textarea":
                ch(n, o);
                break;
            case "select":
                s = o.value, s != null && ds(n, !!o.multiple, s, !1)
        }
    }, wh = _c, xh = Vr;
    var $S = {
            usingClientEntryPoint: !1,
            Events: [Li, Ss, aa, yh, vh, _c]
        },
        Ki = {
            findFiberByHostInstance: Or,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        HS = {
            bundleType: Ki.bundleType,
            version: Ki.version,
            rendererPackageName: Ki.rendererPackageName,
            rendererConfig: Ki.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: N.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(n) {
                return n = Eh(n), n === null ? null : n.stateNode
            },
            findFiberByHostInstance: Ki.findFiberByHostInstance || US,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!qa.isDisabled && qa.supportsFiber) try {
            zo = qa.inject(HS), pn = qa
        } catch {}
    }
    return At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $S, At.createPortal = function(n, s) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ic(s)) throw Error(r(200));
        return BS(n, s, null, o)
    }, At.createRoot = function(n, s) {
        if (!Ic(n)) throw Error(r(299));
        var o = !1,
            l = "",
            d = Xm;
        return s != null && (s.unstable_strictMode === !0 && (o = !0), s.identifierPrefix !== void 0 && (l = s.identifierPrefix), s.onRecoverableError !== void 0 && (d = s.onRecoverableError)), s = Mc(n, 1, !1, null, null, o, !1, l, d), n[Pn] = s.current, Ai(n.nodeType === 8 ? n.parentNode : n), new jc(s)
    }, At.findDOMNode = function(n) {
        if (n == null) return null;
        if (n.nodeType === 1) return n;
        var s = n._reactInternals;
        if (s === void 0) throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
        return n = Eh(s), n = n === null ? null : n.stateNode, n
    }, At.flushSync = function(n) {
        return Vr(n)
    }, At.hydrate = function(n, s, o) {
        if (!$a(s)) throw Error(r(200));
        return Ha(null, n, s, !0, o)
    }, At.hydrateRoot = function(n, s, o) {
        if (!Ic(n)) throw Error(r(405));
        var l = o != null && o.hydratedSources || null,
            d = !1,
            p = "",
            v = Xm;
        if (o != null && (o.unstable_strictMode === !0 && (d = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (v = o.onRecoverableError)), s = Gm(s, null, n, 1, o ? ? null, d, !1, p, v), n[Pn] = s.current, Ai(n), l)
            for (n = 0; n < l.length; n++) o = l[n], d = o._getVersion, d = d(o._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [o, d] : s.mutableSourceEagerHydrationData.push(o, d);
        return new za(s)
    }, At.render = function(n, s, o) {
        if (!$a(s)) throw Error(r(200));
        return Ha(null, n, s, !1, o)
    }, At.unmountComponentAtNode = function(n) {
        if (!$a(n)) throw Error(r(40));
        return n._reactRootContainer ? (Vr(function() {
            Ha(null, null, n, !1, function() {
                n._reactRootContainer = null, n[Pn] = null
            })
        }), !0) : !1
    }, At.unstable_batchedUpdates = _c, At.unstable_renderSubtreeIntoContainer = function(n, s, o, l) {
        if (!$a(o)) throw Error(r(200));
        if (n == null || n._reactInternals === void 0) throw Error(r(38));
        return Ha(n, s, o, !1, l)
    }, At.version = "18.3.1-next-f1338f8080-20240426", At
}
var ag;

function Hv() {
    if (ag) return Uc.exports;
    ag = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (e) {
            console.error(e)
        }
    }
    return t(), Uc.exports = eb(), Uc.exports
}
var lg;

function tb() {
    if (lg) return Ka;
    lg = 1;
    var t = Hv();
    return Ka.createRoot = t.createRoot, Ka.hydrateRoot = t.hydrateRoot, Ka
}
var nb = tb();
const rb = $v(nb),
    sb = 20,
    ib = 1e6,
    Vn = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let Hc = 0;

function ob() {
    return Hc = (Hc + 1) % Number.MAX_VALUE, Hc.toString()
}
const qc = new Map,
    ug = t => {
        if (qc.has(t)) return;
        const e = setTimeout(() => {
            qc.delete(t), lo({
                type: Vn.REMOVE_TOAST,
                toastId: t
            })
        }, ib);
        qc.set(t, e)
    },
    ab = (t, e) => {
        switch (e.type) {
            case Vn.ADD_TOAST:
                return { ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, sb)
                };
            case Vn.UPDATE_TOAST:
                return { ...t,
                    toasts: t.toasts.map(r => r.id === e.toast.id ? { ...r,
                        ...e.toast
                    } : r)
                };
            case Vn.DISMISS_TOAST:
                {
                    const {
                        toastId: r
                    } = e;
                    return r ? ug(r) : t.toasts.forEach(i => {
                        ug(i.id)
                    }),
                    { ...t,
                        toasts: t.toasts.map(i => i.id === r || r === void 0 ? { ...i,
                            open: !1
                        } : i)
                    }
                }
            case Vn.REMOVE_TOAST:
                return e.toastId === void 0 ? { ...t,
                    toasts: []
                } : { ...t,
                    toasts: t.toasts.filter(r => r.id !== e.toastId)
                }
        }
    },
    sl = [];
let il = {
    toasts: []
};

function lo(t) {
    il = ab(il, t), sl.forEach(e => {
        e(il)
    })
}

function lb({ ...t
}) {
    const e = ob(),
        r = a => lo({
            type: Vn.UPDATE_TOAST,
            toast: { ...a,
                id: e
            }
        }),
        i = () => lo({
            type: Vn.DISMISS_TOAST,
            toastId: e
        });
    return lo({
        type: Vn.ADD_TOAST,
        toast: { ...t,
            id: e,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }), {
        id: e,
        dismiss: i,
        update: r
    }
}

function ub() {
    const [t, e] = j.useState(il);
    return j.useEffect(() => (sl.push(e), () => {
        const r = sl.indexOf(e);
        r > -1 && sl.splice(r, 1)
    }), [t]), { ...t,
        toast: lb,
        dismiss: r => lo({
            type: Vn.DISMISS_TOAST,
            toastId: r
        })
    }
}

function qv(t) {
    var e, r, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var a = t.length;
            for (e = 0; e < a; e++) t[e] && (r = qv(t[e])) && (i && (i += " "), i += r)
        } else
            for (r in t) t[r] && (i && (i += " "), i += r);
    return i
}

function Wv() {
    for (var t, e, r = 0, i = "", a = arguments.length; r < a; r++)(t = arguments[r]) && (e = qv(t)) && (i && (i += " "), i += e);
    return i
}
const cg = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t,
    dg = Wv,
    cb = (t, e) => r => {
        var i;
        if ((e == null ? void 0 : e.variants) == null) return dg(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
        const {
            variants: a,
            defaultVariants: u
        } = e, c = Object.keys(a).map(m => {
            const g = r == null ? void 0 : r[m],
                y = u == null ? void 0 : u[m];
            if (g === null) return null;
            const w = cg(g) || cg(y);
            return a[m][w]
        }), f = r && Object.entries(r).reduce((m, g) => {
            let [y, w] = g;
            return w === void 0 || (m[y] = w), m
        }, {}), h = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((m, g) => {
            let {
                class: y,
                className: w,
                ...k
            } = g;
            return Object.entries(k).every(S => {
                let [b, x] = S;
                return Array.isArray(x) ? x.includes({ ...u,
                    ...f
                }[b]) : { ...u,
                    ...f
                }[b] === x
            }) ? [...m, y, w] : m
        }, []);
        return dg(t, c, h, r == null ? void 0 : r.class, r == null ? void 0 : r.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Kv = (...t) => t.filter((e, r, i) => !!e && e.trim() !== "" && i.indexOf(e) === r).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var fb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = j.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: u,
    iconNode: c,
    ...f
}, h) => j.createElement("svg", {
    ref: h,
    ...fb,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(r) * 24 / Number(e) : r,
    className: Kv("lucide", a),
    ...f
}, [...c.map(([m, g]) => j.createElement(m, g)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (t, e) => {
    const r = j.forwardRef(({
        className: i,
        ...a
    }, u) => j.createElement(hb, {
        ref: u,
        iconNode: e,
        className: Kv(`lucide-${db(t)}`, i),
        ...a
    }));
    return r.displayName = `${t}`, r
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pb = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }],
        ["path", {
            d: "m9 16 2 2 4-4",
            key: "19s6y9"
        }]
    ],
    mb = St("CalendarCheck", pb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ],
    Qv = St("Clock", gb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = [
        ["path", {
            d: "M11.25 16.25h1.5L12 17z",
            key: "w7jh35"
        }],
        ["path", {
            d: "M16 14v.5",
            key: "1lajdz"
        }],
        ["path", {
            d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
            key: "u7s9ue"
        }],
        ["path", {
            d: "M8 14v.5",
            key: "1nzgdb"
        }],
        ["path", {
            d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
            key: "v8hric"
        }]
    ],
    vb = St("Dog", yb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ],
    xb = St("Globe", wb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ],
    Gv = St("Mail", Sb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    lf = St("MapPin", bb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    Eb = St("Menu", kb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = [
        ["path", {
            d: "m16 16 2 2 4-4",
            key: "gfu2re"
        }],
        ["path", {
            d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
            key: "e7tb2h"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "22",
            y2: "12",
            key: "a4e8g8"
        }]
    ],
    Tb = St("PackageCheck", Cb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]
    ],
    gl = St("Phone", Pb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = [
        ["path", {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
            key: "hou9p0"
        }],
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }]
    ],
    Rb = St("ShoppingBag", _b);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ab = [
        ["path", {
            d: "m10 20-1.25-2.5L6 18",
            key: "18frcb"
        }],
        ["path", {
            d: "M10 4 8.75 6.5 6 6",
            key: "7mghy3"
        }],
        ["path", {
            d: "m14 20 1.25-2.5L18 18",
            key: "1chtki"
        }],
        ["path", {
            d: "m14 4 1.25 2.5L18 6",
            key: "1b4wsy"
        }],
        ["path", {
            d: "m17 21-3-6h-4",
            key: "15hhxa"
        }],
        ["path", {
            d: "m17 3-3 6 1.5 3",
            key: "11697g"
        }],
        ["path", {
            d: "M2 12h6.5L10 9",
            key: "kv9z4n"
        }],
        ["path", {
            d: "m20 10-1.5 2 1.5 2",
            key: "1swlpi"
        }],
        ["path", {
            d: "M22 12h-6.5L14 15",
            key: "1mxi28"
        }],
        ["path", {
            d: "m4 10 1.5 2L4 14",
            key: "k9enpj"
        }],
        ["path", {
            d: "m7 21 3-6-1.5-3",
            key: "j8hb9u"
        }],
        ["path", {
            d: "m7 3 3 6h4",
            key: "1otusx"
        }]
    ],
    Ob = St("Snowflake", Ab);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }],
        ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }],
        ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }],
        ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }],
        ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }],
        ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }],
        ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }],
        ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }],
        ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]
    ],
    Lb = St("Sun", Nb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mb = [
        ["path", {
            d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
            key: "cpyugq"
        }],
        ["path", {
            d: "M12 22v-3",
            key: "kmzjlo"
        }]
    ],
    Db = St("TreePine", Mb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = [
        ["path", {
            d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
            key: "n7qcjb"
        }],
        ["path", {
            d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
            key: "d0u48b"
        }],
        ["path", {
            d: "m2.1 21.8 6.4-6.3",
            key: "yn04lh"
        }],
        ["path", {
            d: "m19 5-7 7",
            key: "194lzd"
        }]
    ],
    Ib = St("UtensilsCrossed", jb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = [
        ["path", {
            d: "M12 20h.01",
            key: "zekei9"
        }],
        ["path", {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }],
        ["path", {
            d: "M5 12.859a10 10 0 0 1 14 0",
            key: "1x1e6c"
        }],
        ["path", {
            d: "M8.5 16.429a5 5 0 0 1 7 0",
            key: "1bycff"
        }]
    ],
    Vb = St("Wifi", Fb);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Yv = St("X", Bb),
    Ub = (t, e) => {
        const r = new Array(t.length + e.length);
        for (let i = 0; i < t.length; i++) r[i] = t[i];
        for (let i = 0; i < e.length; i++) r[t.length + i] = e[i];
        return r
    },
    zb = (t, e) => ({
        classGroupId: t,
        validator: e
    }),
    Xv = (t = new Map, e = null, r) => ({
        nextPart: t,
        validators: e,
        classGroupId: r
    }),
    yl = "-",
    fg = [],
    $b = "arbitrary..",
    Hb = t => {
        const e = Wb(t),
            {
                conflictingClassGroups: r,
                conflictingClassGroupModifiers: i
            } = t;
        return {
            getClassGroupId: c => {
                if (c.startsWith("[") && c.endsWith("]")) return qb(c);
                const f = c.split(yl),
                    h = f[0] === "" && f.length > 1 ? 1 : 0;
                return Jv(f, h, e)
            },
            getConflictingClassGroupIds: (c, f) => {
                if (f) {
                    const h = i[c],
                        m = r[c];
                    return h ? m ? Ub(m, h) : h : m || fg
                }
                return r[c] || fg
            }
        }
    },
    Jv = (t, e, r) => {
        if (t.length - e === 0) return r.classGroupId;
        const a = t[e],
            u = r.nextPart.get(a);
        if (u) {
            const m = Jv(t, e + 1, u);
            if (m) return m
        }
        const c = r.validators;
        if (c === null) return;
        const f = e === 0 ? t.join(yl) : t.slice(e).join(yl),
            h = c.length;
        for (let m = 0; m < h; m++) {
            const g = c[m];
            if (g.validator(f)) return g.classGroupId
        }
    },
    qb = t => t.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const e = t.slice(1, -1),
            r = e.indexOf(":"),
            i = e.slice(0, r);
        return i ? $b + i : void 0
    })(),
    Wb = t => {
        const {
            theme: e,
            classGroups: r
        } = t;
        return Kb(r, e)
    },
    Kb = (t, e) => {
        const r = Xv();
        for (const i in t) {
            const a = t[i];
            uf(a, r, i, e)
        }
        return r
    },
    uf = (t, e, r, i) => {
        const a = t.length;
        for (let u = 0; u < a; u++) {
            const c = t[u];
            Qb(c, e, r, i)
        }
    },
    Qb = (t, e, r, i) => {
        if (typeof t == "string") {
            Gb(t, e, r);
            return
        }
        if (typeof t == "function") {
            Yb(t, e, r, i);
            return
        }
        Xb(t, e, r, i)
    },
    Gb = (t, e, r) => {
        const i = t === "" ? e : Zv(e, t);
        i.classGroupId = r
    },
    Yb = (t, e, r, i) => {
        if (Jb(t)) {
            uf(t(i), e, r, i);
            return
        }
        e.validators === null && (e.validators = []), e.validators.push(zb(r, t))
    },
    Xb = (t, e, r, i) => {
        const a = Object.entries(t),
            u = a.length;
        for (let c = 0; c < u; c++) {
            const [f, h] = a[c];
            uf(h, Zv(e, f), r, i)
        }
    },
    Zv = (t, e) => {
        let r = t;
        const i = e.split(yl),
            a = i.length;
        for (let u = 0; u < a; u++) {
            const c = i[u];
            let f = r.nextPart.get(c);
            f || (f = Xv(), r.nextPart.set(c, f)), r = f
        }
        return r
    },
    Jb = t => "isThemeGetter" in t && t.isThemeGetter === !0,
    Zb = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            r = Object.create(null),
            i = Object.create(null);
        const a = (u, c) => {
            r[u] = c, e++, e > t && (e = 0, i = r, r = Object.create(null))
        };
        return {
            get(u) {
                let c = r[u];
                if (c !== void 0) return c;
                if ((c = i[u]) !== void 0) return a(u, c), c
            },
            set(u, c) {
                u in r ? r[u] = c : a(u, c)
            }
        }
    },
    md = "!",
    hg = ":",
    ek = [],
    pg = (t, e, r, i, a) => ({
        modifiers: t,
        hasImportantModifier: e,
        baseClassName: r,
        maybePostfixModifierPosition: i,
        isExternal: a
    }),
    tk = t => {
        const {
            prefix: e,
            experimentalParseClassName: r
        } = t;
        let i = a => {
            const u = [];
            let c = 0,
                f = 0,
                h = 0,
                m;
            const g = a.length;
            for (let b = 0; b < g; b++) {
                const x = a[b];
                if (c === 0 && f === 0) {
                    if (x === hg) {
                        u.push(a.slice(h, b)), h = b + 1;
                        continue
                    }
                    if (x === "/") {
                        m = b;
                        continue
                    }
                }
                x === "[" ? c++ : x === "]" ? c-- : x === "(" ? f++ : x === ")" && f--
            }
            const y = u.length === 0 ? a : a.slice(h);
            let w = y,
                k = !1;
            y.endsWith(md) ? (w = y.slice(0, -1), k = !0) : y.startsWith(md) && (w = y.slice(1), k = !0);
            const S = m && m > h ? m - h : void 0;
            return pg(u, k, w, S)
        };
        if (e) {
            const a = e + hg,
                u = i;
            i = c => c.startsWith(a) ? u(c.slice(a.length)) : pg(ek, !1, c, void 0, !0)
        }
        if (r) {
            const a = i;
            i = u => r({
                className: u,
                parseClassName: a
            })
        }
        return i
    },
    nk = t => {
        const e = new Map;
        return t.orderSensitiveModifiers.forEach((r, i) => {
            e.set(r, 1e6 + i)
        }), r => {
            const i = [];
            let a = [];
            for (let u = 0; u < r.length; u++) {
                const c = r[u],
                    f = c[0] === "[",
                    h = e.has(c);
                f || h ? (a.length > 0 && (a.sort(), i.push(...a), a = []), i.push(c)) : a.push(c)
            }
            return a.length > 0 && (a.sort(), i.push(...a)), i
        }
    },
    rk = t => ({
        cache: Zb(t.cacheSize),
        parseClassName: tk(t),
        sortModifiers: nk(t),
        ...Hb(t)
    }),
    sk = /\s+/,
    ik = (t, e) => {
        const {
            parseClassName: r,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
            sortModifiers: u
        } = e, c = [], f = t.trim().split(sk);
        let h = "";
        for (let m = f.length - 1; m >= 0; m -= 1) {
            const g = f[m],
                {
                    isExternal: y,
                    modifiers: w,
                    hasImportantModifier: k,
                    baseClassName: S,
                    maybePostfixModifierPosition: b
                } = r(g);
            if (y) {
                h = g + (h.length > 0 ? " " + h : h);
                continue
            }
            let x = !!b,
                R = i(x ? S.substring(0, b) : S);
            if (!R) {
                if (!x) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                if (R = i(S), !R) {
                    h = g + (h.length > 0 ? " " + h : h);
                    continue
                }
                x = !1
            }
            const V = w.length === 0 ? "" : w.length === 1 ? w[0] : u(w).join(":"),
                M = k ? V + md : V,
                N = M + R;
            if (c.indexOf(N) > -1) continue;
            c.push(N);
            const B = a(R, x);
            for (let K = 0; K < B.length; ++K) {
                const G = B[K];
                c.push(M + G)
            }
            h = g + (h.length > 0 ? " " + h : h)
        }
        return h
    },
    ok = (...t) => {
        let e = 0,
            r, i, a = "";
        for (; e < t.length;)(r = t[e++]) && (i = e0(r)) && (a && (a += " "), a += i);
        return a
    },
    e0 = t => {
        if (typeof t == "string") return t;
        let e, r = "";
        for (let i = 0; i < t.length; i++) t[i] && (e = e0(t[i])) && (r && (r += " "), r += e);
        return r
    },
    ak = (t, ...e) => {
        let r, i, a, u;
        const c = h => {
                const m = e.reduce((g, y) => y(g), t());
                return r = rk(m), i = r.cache.get, a = r.cache.set, u = f, f(h)
            },
            f = h => {
                const m = i(h);
                if (m) return m;
                const g = ik(h, r);
                return a(h, g), g
            };
        return u = c, (...h) => u(ok(...h))
    },
    lk = [],
    nt = t => {
        const e = r => r[t] || lk;
        return e.isThemeGetter = !0, e
    },
    t0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    n0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    uk = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    ck = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    dk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    fk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    hk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    pk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    cr = t => uk.test(t),
    xe = t => !!t && !Number.isNaN(Number(t)),
    dr = t => !!t && Number.isInteger(Number(t)),
    Wc = t => t.endsWith("%") && xe(t.slice(0, -1)),
    Dn = t => ck.test(t),
    r0 = () => !0,
    mk = t => dk.test(t) && !fk.test(t),
    cf = () => !1,
    gk = t => hk.test(t),
    yk = t => pk.test(t),
    vk = t => !ne(t) && !re(t),
    wk = t => Pr(t, o0, cf),
    ne = t => t0.test(t),
    $r = t => Pr(t, a0, mk),
    mg = t => Pr(t, Pk, xe),
    xk = t => Pr(t, u0, r0),
    Sk = t => Pr(t, l0, cf),
    gg = t => Pr(t, s0, cf),
    bk = t => Pr(t, i0, yk),
    Qa = t => Pr(t, c0, gk),
    re = t => n0.test(t),
    Gi = t => us(t, a0),
    kk = t => us(t, l0),
    yg = t => us(t, s0),
    Ek = t => us(t, o0),
    Ck = t => us(t, i0),
    Ga = t => us(t, c0, !0),
    Tk = t => us(t, u0, !0),
    Pr = (t, e, r) => {
        const i = t0.exec(t);
        return i ? i[1] ? e(i[1]) : r(i[2]) : !1
    },
    us = (t, e, r = !1) => {
        const i = n0.exec(t);
        return i ? i[1] ? e(i[1]) : r : !1
    },
    s0 = t => t === "position" || t === "percentage",
    i0 = t => t === "image" || t === "url",
    o0 = t => t === "length" || t === "size" || t === "bg-size",
    a0 = t => t === "length",
    Pk = t => t === "number",
    l0 = t => t === "family-name",
    u0 = t => t === "number" || t === "weight",
    c0 = t => t === "shadow",
    _k = () => {
        const t = nt("color"),
            e = nt("font"),
            r = nt("text"),
            i = nt("font-weight"),
            a = nt("tracking"),
            u = nt("leading"),
            c = nt("breakpoint"),
            f = nt("container"),
            h = nt("spacing"),
            m = nt("radius"),
            g = nt("shadow"),
            y = nt("inset-shadow"),
            w = nt("text-shadow"),
            k = nt("drop-shadow"),
            S = nt("blur"),
            b = nt("perspective"),
            x = nt("aspect"),
            R = nt("ease"),
            V = nt("animate"),
            M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            N = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            B = () => [...N(), re, ne],
            K = () => ["auto", "hidden", "clip", "visible", "scroll"],
            G = () => ["auto", "contain", "none"],
            F = () => [re, ne, h],
            J = () => [cr, "full", "auto", ...F()],
            ee = () => [dr, "none", "subgrid", re, ne],
            Ce = () => ["auto", {
                span: ["full", dr, re, ne]
            }, dr, re, ne],
            Le = () => [dr, "auto", re, ne],
            Me = () => ["auto", "min", "max", "fr", re, ne],
            Re = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            je = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            we = () => ["auto", ...F()],
            fe = () => [cr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()],
            W = () => [cr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...F()],
            ie = () => [cr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...F()],
            U = () => [t, re, ne],
            A = () => [...N(), yg, gg, {
                position: [re, ne]
            }],
            z = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            ge = () => ["auto", "cover", "contain", Ek, wk, {
                size: [re, ne]
            }],
            ye = () => [Wc, Gi, $r],
            ue = () => ["", "none", "full", m, re, ne],
            he = () => ["", xe, Gi, $r],
            Ae = () => ["solid", "dashed", "dotted", "double"],
            Pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ve = () => [xe, Wc, yg, gg],
            ft = () => ["", "none", S, re, ne],
            Tn = () => ["none", xe, re, ne],
            Rr = () => ["none", xe, re, ne],
            $n = () => [xe, re, ne],
            Hn = () => [cr, "full", ...F()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Dn],
                breakpoint: [Dn],
                color: [r0],
                container: [Dn],
                "drop-shadow": [Dn],
                ease: ["in", "out", "in-out"],
                font: [vk],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Dn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Dn],
                shadow: [Dn],
                spacing: ["px", xe],
                text: [Dn],
                "text-shadow": [Dn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", cr, ne, re, x]
                }],
                container: ["container"],
                columns: [{
                    columns: [xe, ne, re, f]
                }],
                "break-after": [{
                    "break-after": M()
                }],
                "break-before": [{
                    "break-before": M()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: B()
                }],
                overflow: [{
                    overflow: K()
                }],
                "overflow-x": [{
                    "overflow-x": K()
                }],
                "overflow-y": [{
                    "overflow-y": K()
                }],
                overscroll: [{
                    overscroll: G()
                }],
                "overscroll-x": [{
                    "overscroll-x": G()
                }],
                "overscroll-y": [{
                    "overscroll-y": G()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: J()
                }],
                "inset-x": [{
                    "inset-x": J()
                }],
                "inset-y": [{
                    "inset-y": J()
                }],
                start: [{
                    "inset-s": J(),
                    start: J()
                }],
                end: [{
                    "inset-e": J(),
                    end: J()
                }],
                "inset-bs": [{
                    "inset-bs": J()
                }],
                "inset-be": [{
                    "inset-be": J()
                }],
                top: [{
                    top: J()
                }],
                right: [{
                    right: J()
                }],
                bottom: [{
                    bottom: J()
                }],
                left: [{
                    left: J()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [dr, "auto", re, ne]
                }],
                basis: [{
                    basis: [cr, "full", "auto", f, ...F()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [xe, cr, "auto", "initial", "none", ne]
                }],
                grow: [{
                    grow: ["", xe, re, ne]
                }],
                shrink: [{
                    shrink: ["", xe, re, ne]
                }],
                order: [{
                    order: [dr, "first", "last", "none", re, ne]
                }],
                "grid-cols": [{
                    "grid-cols": ee()
                }],
                "col-start-end": [{
                    col: Ce()
                }],
                "col-start": [{
                    "col-start": Le()
                }],
                "col-end": [{
                    "col-end": Le()
                }],
                "grid-rows": [{
                    "grid-rows": ee()
                }],
                "row-start-end": [{
                    row: Ce()
                }],
                "row-start": [{
                    "row-start": Le()
                }],
                "row-end": [{
                    "row-end": Le()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Me()
                }],
                "auto-rows": [{
                    "auto-rows": Me()
                }],
                gap: [{
                    gap: F()
                }],
                "gap-x": [{
                    "gap-x": F()
                }],
                "gap-y": [{
                    "gap-y": F()
                }],
                "justify-content": [{
                    justify: [...Re(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...je(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...je()]
                }],
                "align-content": [{
                    content: ["normal", ...Re()]
                }],
                "align-items": [{
                    items: [...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": Re()
                }],
                "place-items": [{
                    "place-items": [...je(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...je()]
                }],
                p: [{
                    p: F()
                }],
                px: [{
                    px: F()
                }],
                py: [{
                    py: F()
                }],
                ps: [{
                    ps: F()
                }],
                pe: [{
                    pe: F()
                }],
                pbs: [{
                    pbs: F()
                }],
                pbe: [{
                    pbe: F()
                }],
                pt: [{
                    pt: F()
                }],
                pr: [{
                    pr: F()
                }],
                pb: [{
                    pb: F()
                }],
                pl: [{
                    pl: F()
                }],
                m: [{
                    m: we()
                }],
                mx: [{
                    mx: we()
                }],
                my: [{
                    my: we()
                }],
                ms: [{
                    ms: we()
                }],
                me: [{
                    me: we()
                }],
                mbs: [{
                    mbs: we()
                }],
                mbe: [{
                    mbe: we()
                }],
                mt: [{
                    mt: we()
                }],
                mr: [{
                    mr: we()
                }],
                mb: [{
                    mb: we()
                }],
                ml: [{
                    ml: we()
                }],
                "space-x": [{
                    "space-x": F()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": F()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: fe()
                }],
                "inline-size": [{
                    inline: ["auto", ...W()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...W()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...W()]
                }],
                "block-size": [{
                    block: ["auto", ...ie()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...ie()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...ie()]
                }],
                w: [{
                    w: [f, "screen", ...fe()]
                }],
                "min-w": [{
                    "min-w": [f, "screen", "none", ...fe()]
                }],
                "max-w": [{
                    "max-w": [f, "screen", "none", "prose", {
                        screen: [c]
                    }, ...fe()]
                }],
                h: [{
                    h: ["screen", "lh", ...fe()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...fe()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...fe()]
                }],
                "font-size": [{
                    text: ["base", r, Gi, $r]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [i, Tk, xk]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Wc, ne]
                }],
                "font-family": [{
                    font: [kk, Sk, e]
                }],
                "font-features": [{
                    "font-features": [ne]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [a, re, ne]
                }],
                "line-clamp": [{
                    "line-clamp": [xe, "none", re, mg]
                }],
                leading: [{
                    leading: [u, ...F()]
                }],
                "list-image": [{
                    "list-image": ["none", re, ne]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", re, ne]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: U()
                }],
                "text-color": [{
                    text: U()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Ae(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [xe, "from-font", "auto", re, $r]
                }],
                "text-decoration-color": [{
                    decoration: U()
                }],
                "underline-offset": [{
                    "underline-offset": [xe, "auto", re, ne]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: F()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, ne]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", re, ne]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: A()
                }],
                "bg-repeat": [{
                    bg: z()
                }],
                "bg-size": [{
                    bg: ge()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, dr, re, ne],
                        radial: ["", re, ne],
                        conic: [dr, re, ne]
                    }, Ck, bk]
                }],
                "bg-color": [{
                    bg: U()
                }],
                "gradient-from-pos": [{
                    from: ye()
                }],
                "gradient-via-pos": [{
                    via: ye()
                }],
                "gradient-to-pos": [{
                    to: ye()
                }],
                "gradient-from": [{
                    from: U()
                }],
                "gradient-via": [{
                    via: U()
                }],
                "gradient-to": [{
                    to: U()
                }],
                rounded: [{
                    rounded: ue()
                }],
                "rounded-s": [{
                    "rounded-s": ue()
                }],
                "rounded-e": [{
                    "rounded-e": ue()
                }],
                "rounded-t": [{
                    "rounded-t": ue()
                }],
                "rounded-r": [{
                    "rounded-r": ue()
                }],
                "rounded-b": [{
                    "rounded-b": ue()
                }],
                "rounded-l": [{
                    "rounded-l": ue()
                }],
                "rounded-ss": [{
                    "rounded-ss": ue()
                }],
                "rounded-se": [{
                    "rounded-se": ue()
                }],
                "rounded-ee": [{
                    "rounded-ee": ue()
                }],
                "rounded-es": [{
                    "rounded-es": ue()
                }],
                "rounded-tl": [{
                    "rounded-tl": ue()
                }],
                "rounded-tr": [{
                    "rounded-tr": ue()
                }],
                "rounded-br": [{
                    "rounded-br": ue()
                }],
                "rounded-bl": [{
                    "rounded-bl": ue()
                }],
                "border-w": [{
                    border: he()
                }],
                "border-w-x": [{
                    "border-x": he()
                }],
                "border-w-y": [{
                    "border-y": he()
                }],
                "border-w-s": [{
                    "border-s": he()
                }],
                "border-w-e": [{
                    "border-e": he()
                }],
                "border-w-bs": [{
                    "border-bs": he()
                }],
                "border-w-be": [{
                    "border-be": he()
                }],
                "border-w-t": [{
                    "border-t": he()
                }],
                "border-w-r": [{
                    "border-r": he()
                }],
                "border-w-b": [{
                    "border-b": he()
                }],
                "border-w-l": [{
                    "border-l": he()
                }],
                "divide-x": [{
                    "divide-x": he()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": he()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Ae(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Ae(), "hidden", "none"]
                }],
                "border-color": [{
                    border: U()
                }],
                "border-color-x": [{
                    "border-x": U()
                }],
                "border-color-y": [{
                    "border-y": U()
                }],
                "border-color-s": [{
                    "border-s": U()
                }],
                "border-color-e": [{
                    "border-e": U()
                }],
                "border-color-bs": [{
                    "border-bs": U()
                }],
                "border-color-be": [{
                    "border-be": U()
                }],
                "border-color-t": [{
                    "border-t": U()
                }],
                "border-color-r": [{
                    "border-r": U()
                }],
                "border-color-b": [{
                    "border-b": U()
                }],
                "border-color-l": [{
                    "border-l": U()
                }],
                "divide-color": [{
                    divide: U()
                }],
                "outline-style": [{
                    outline: [...Ae(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [xe, re, ne]
                }],
                "outline-w": [{
                    outline: ["", xe, Gi, $r]
                }],
                "outline-color": [{
                    outline: U()
                }],
                shadow: [{
                    shadow: ["", "none", g, Ga, Qa]
                }],
                "shadow-color": [{
                    shadow: U()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", y, Ga, Qa]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": U()
                }],
                "ring-w": [{
                    ring: he()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: U()
                }],
                "ring-offset-w": [{
                    "ring-offset": [xe, $r]
                }],
                "ring-offset-color": [{
                    "ring-offset": U()
                }],
                "inset-ring-w": [{
                    "inset-ring": he()
                }],
                "inset-ring-color": [{
                    "inset-ring": U()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", w, Ga, Qa]
                }],
                "text-shadow-color": [{
                    "text-shadow": U()
                }],
                opacity: [{
                    opacity: [xe, re, ne]
                }],
                "mix-blend": [{
                    "mix-blend": [...Pe(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": Pe()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [xe]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ve()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ve()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": U()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": U()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ve()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ve()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": U()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": U()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ve()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ve()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": U()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": U()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ve()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ve()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": U()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": U()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ve()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ve()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": U()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": U()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ve()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ve()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": U()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": U()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ve()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ve()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": U()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": U()
                }],
                "mask-image-radial": [{
                    "mask-radial": [re, ne]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ve()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ve()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": U()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": U()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": N()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [xe]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ve()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ve()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": U()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": U()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: A()
                }],
                "mask-repeat": [{
                    mask: z()
                }],
                "mask-size": [{
                    mask: ge()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", re, ne]
                }],
                filter: [{
                    filter: ["", "none", re, ne]
                }],
                blur: [{
                    blur: ft()
                }],
                brightness: [{
                    brightness: [xe, re, ne]
                }],
                contrast: [{
                    contrast: [xe, re, ne]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", k, Ga, Qa]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": U()
                }],
                grayscale: [{
                    grayscale: ["", xe, re, ne]
                }],
                "hue-rotate": [{
                    "hue-rotate": [xe, re, ne]
                }],
                invert: [{
                    invert: ["", xe, re, ne]
                }],
                saturate: [{
                    saturate: [xe, re, ne]
                }],
                sepia: [{
                    sepia: ["", xe, re, ne]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", re, ne]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": ft()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [xe, re, ne]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [xe, re, ne]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", xe, re, ne]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [xe, re, ne]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", xe, re, ne]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [xe, re, ne]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [xe, re, ne]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", xe, re, ne]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": F()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": F()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": F()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, ne]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [xe, "initial", re, ne]
                }],
                ease: [{
                    ease: ["linear", "initial", R, re, ne]
                }],
                delay: [{
                    delay: [xe, re, ne]
                }],
                animate: [{
                    animate: ["none", V, re, ne]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [b, re, ne]
                }],
                "perspective-origin": [{
                    "perspective-origin": B()
                }],
                rotate: [{
                    rotate: Tn()
                }],
                "rotate-x": [{
                    "rotate-x": Tn()
                }],
                "rotate-y": [{
                    "rotate-y": Tn()
                }],
                "rotate-z": [{
                    "rotate-z": Tn()
                }],
                scale: [{
                    scale: Rr()
                }],
                "scale-x": [{
                    "scale-x": Rr()
                }],
                "scale-y": [{
                    "scale-y": Rr()
                }],
                "scale-z": [{
                    "scale-z": Rr()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: $n()
                }],
                "skew-x": [{
                    "skew-x": $n()
                }],
                "skew-y": [{
                    "skew-y": $n()
                }],
                transform: [{
                    transform: [re, ne, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: B()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Hn()
                }],
                "translate-x": [{
                    "translate-x": Hn()
                }],
                "translate-y": [{
                    "translate-y": Hn()
                }],
                "translate-z": [{
                    "translate-z": Hn()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: U()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: U()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, ne]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": F()
                }],
                "scroll-mx": [{
                    "scroll-mx": F()
                }],
                "scroll-my": [{
                    "scroll-my": F()
                }],
                "scroll-ms": [{
                    "scroll-ms": F()
                }],
                "scroll-me": [{
                    "scroll-me": F()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": F()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": F()
                }],
                "scroll-mt": [{
                    "scroll-mt": F()
                }],
                "scroll-mr": [{
                    "scroll-mr": F()
                }],
                "scroll-mb": [{
                    "scroll-mb": F()
                }],
                "scroll-ml": [{
                    "scroll-ml": F()
                }],
                "scroll-p": [{
                    "scroll-p": F()
                }],
                "scroll-px": [{
                    "scroll-px": F()
                }],
                "scroll-py": [{
                    "scroll-py": F()
                }],
                "scroll-ps": [{
                    "scroll-ps": F()
                }],
                "scroll-pe": [{
                    "scroll-pe": F()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": F()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": F()
                }],
                "scroll-pt": [{
                    "scroll-pt": F()
                }],
                "scroll-pr": [{
                    "scroll-pr": F()
                }],
                "scroll-pb": [{
                    "scroll-pb": F()
                }],
                "scroll-pl": [{
                    "scroll-pl": F()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", re, ne]
                }],
                fill: [{
                    fill: ["none", ...U()]
                }],
                "stroke-w": [{
                    stroke: [xe, Gi, $r, mg]
                }],
                stroke: [{
                    stroke: ["none", ...U()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Rk = ak(_k);

function Po(...t) {
    return Rk(Wv(t))
}
const d0 = j.forwardRef(({ ...t
}, e) => C.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
d0.displayName = "ToastProvider";
const f0 = j.forwardRef(({ ...t
}, e) => C.jsx("div", {
    ref: e,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...t
}));
f0.displayName = "ToastViewport";
const Ak = cb("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    h0 = j.forwardRef(({
        className: t,
        variant: e,
        ...r
    }, i) => C.jsx("div", {
        ref: i,
        className: Po(Ak({
            variant: e
        }), t),
        ...r
    }));
h0.displayName = "Toast";
const Ok = j.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: Po("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
Ok.displayName = "ToastAction";
const p0 = j.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("button", {
    ref: r,
    className: Po("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: C.jsx(Yv, {
        className: "h-4 w-4"
    })
}));
p0.displayName = "ToastClose";
const m0 = j.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: Po("text-sm font-semibold", t),
    ...e
}));
m0.displayName = "ToastTitle";
const g0 = j.forwardRef(({
    className: t,
    ...e
}, r) => C.jsx("div", {
    ref: r,
    className: Po("text-sm opacity-90", t),
    ...e
}));
g0.displayName = "ToastDescription";

function Nk() {
    const {
        toasts: t
    } = ub();
    return C.jsxs(d0, {
        children: [t.map(function({
            id: e,
            title: r,
            description: i,
            action: a,
            ...u
        }) {
            return C.jsxs(h0, { ...u,
                children: [C.jsxs("div", {
                    className: "grid gap-1",
                    children: [r && C.jsx(m0, {
                        children: r
                    }), i && C.jsx(g0, {
                        children: i
                    })]
                }), a, C.jsx(p0, {})]
            }, e)
        }), C.jsx(f0, {})]
    })
}
var _o = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
            return this.listeners.add(t), this.onSubscribe(), () => {
                this.listeners.delete(t), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Lk = {
        setTimeout: (t, e) => setTimeout(t, e),
        clearTimeout: t => clearTimeout(t),
        setInterval: (t, e) => setInterval(t, e),
        clearInterval: t => clearInterval(t)
    },
    pr, of , Lv, Mk = (Lv = class {
        constructor() {
            ce(this, pr, Lk);
            ce(this, of , !1)
        }
        setTimeoutProvider(t) {
            X(this, pr, t)
        }
        setTimeout(t, e) {
            return P(this, pr).setTimeout(t, e)
        }
        clearTimeout(t) {
            P(this, pr).clearTimeout(t)
        }
        setInterval(t, e) {
            return P(this, pr).setInterval(t, e)
        }
        clearInterval(t) {
            P(this, pr).clearInterval(t)
        }
    }, pr = new WeakMap, of = new WeakMap, Lv),
    Kr = new Mk;

function Dk(t) {
    setTimeout(t, 0)
}
var as = typeof window > "u" || "Deno" in globalThis;

function Nt() {}

function jk(t, e) {
    return typeof t == "function" ? t(e) : t
}

function gd(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}

function y0(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}

function kr(t, e) {
    return typeof t == "function" ? t(e) : t
}

function Zt(t, e) {
    return typeof t == "function" ? t(e) : t
}

function vg(t, e) {
    const {
        type: r = "all",
        exact: i,
        fetchStatus: a,
        predicate: u,
        queryKey: c,
        stale: f
    } = t;
    if (c) {
        if (i) {
            if (e.queryHash !== df(c, e.options)) return !1
        } else if (!go(e.queryKey, c)) return !1
    }
    if (r !== "all") {
        const h = e.isActive();
        if (r === "active" && !h || r === "inactive" && h) return !1
    }
    return !(typeof f == "boolean" && e.isStale() !== f || a && a !== e.state.fetchStatus || u && !u(e))
}

function wg(t, e) {
    const {
        exact: r,
        status: i,
        predicate: a,
        mutationKey: u
    } = t;
    if (u) {
        if (!e.options.mutationKey) return !1;
        if (r) {
            if (mo(e.options.mutationKey) !== mo(u)) return !1
        } else if (!go(e.options.mutationKey, u)) return !1
    }
    return !(i && e.state.status !== i || a && !a(e))
}

function df(t, e) {
    return ((e == null ? void 0 : e.queryKeyHashFn) || mo)(t)
}

function mo(t) {
    return JSON.stringify(t, (e, r) => vd(r) ? Object.keys(r).sort().reduce((i, a) => (i[a] = r[a], i), {}) : r)
}

function go(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? Object.keys(e).every(r => go(t[r], e[r])) : !1
}
var Ik = Object.prototype.hasOwnProperty;

function v0(t, e, r = 0) {
    if (t === e) return t;
    if (r > 500) return e;
    const i = xg(t) && xg(e);
    if (!i && !(vd(t) && vd(e))) return e;
    const u = (i ? t : Object.keys(t)).length,
        c = i ? e : Object.keys(e),
        f = c.length,
        h = i ? new Array(f) : {};
    let m = 0;
    for (let g = 0; g < f; g++) {
        const y = i ? g : c[g],
            w = t[y],
            k = e[y];
        if (w === k) {
            h[y] = w, (i ? g < u : Ik.call(t, y)) && m++;
            continue
        }
        if (w === null || k === null || typeof w != "object" || typeof k != "object") {
            h[y] = k;
            continue
        }
        const S = v0(w, k, r + 1);
        h[y] = S, S === w && m++
    }
    return u === f && m === u ? t : h
}

function yd(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
    for (const r in t)
        if (t[r] !== e[r]) return !1;
    return !0
}

function xg(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}

function vd(t) {
    if (!Sg(t)) return !1;
    const e = t.constructor;
    if (e === void 0) return !0;
    const r = e.prototype;
    return !(!Sg(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}

function Sg(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}

function Fk(t) {
    return new Promise(e => {
        Kr.setTimeout(e, t)
    })
}

function wd(t, e, r) {
    return typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? v0(t, e) : e
}

function Vk(t, e, r = 0) {
    const i = [...t, e];
    return r && i.length > r ? i.slice(1) : i
}

function Bk(t, e, r = 0) {
    const i = [e, ...t];
    return r && i.length > r ? i.slice(0, -1) : i
}
var ff = Symbol();

function w0(t, e) {
    return !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === ff ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}

function x0(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}

function Uk(t, e, r) {
    let i = !1,
        a;
    return Object.defineProperty(t, "signal", {
        enumerable: !0,
        get: () => (a ? ? (a = e()), i || (i = !0, a.aborted ? r() : a.addEventListener("abort", r, {
            once: !0
        })), a)
    }), t
}
var Yr, mr, $s, Mv, zk = (Mv = class extends _o {
        constructor() {
            super();
            ce(this, Yr);
            ce(this, mr);
            ce(this, $s);
            X(this, $s, e => {
                if (!as && window.addEventListener) {
                    const r = () => e();
                    return window.addEventListener("visibilitychange", r, !1), () => {
                        window.removeEventListener("visibilitychange", r)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, mr) || this.setEventListener(P(this, $s))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, mr)) == null || e.call(this), X(this, mr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, $s, e), (r = P(this, mr)) == null || r.call(this), X(this, mr, e(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            }))
        }
        setFocused(e) {
            P(this, Yr) !== e && (X(this, Yr, e), this.onFocus())
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach(r => {
                r(e)
            })
        }
        isFocused() {
            var e;
            return typeof P(this, Yr) == "boolean" ? P(this, Yr) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden"
        }
    }, Yr = new WeakMap, mr = new WeakMap, $s = new WeakMap, Mv),
    hf = new zk;

function xd() {
    let t, e;
    const r = new Promise((a, u) => {
        t = a, e = u
    });
    r.status = "pending", r.catch(() => {});

    function i(a) {
        Object.assign(r, a), delete r.resolve, delete r.reject
    }
    return r.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }), t(a)
    }, r.reject = a => {
        i({
            status: "rejected",
            reason: a
        }), e(a)
    }, r
}
var $k = Dk;

function Hk() {
    let t = [],
        e = 0,
        r = f => {
            f()
        },
        i = f => {
            f()
        },
        a = $k;
    const u = f => {
            e ? t.push(f) : a(() => {
                r(f)
            })
        },
        c = () => {
            const f = t;
            t = [], f.length && a(() => {
                i(() => {
                    f.forEach(h => {
                        r(h)
                    })
                })
            })
        };
    return {
        batch: f => {
            let h;
            e++;
            try {
                h = f()
            } finally {
                e--, e || c()
            }
            return h
        },
        batchCalls: f => (...h) => {
            u(() => {
                f(...h)
            })
        },
        schedule: u,
        setNotifyFunction: f => {
            r = f
        },
        setBatchNotifyFunction: f => {
            i = f
        },
        setScheduler: f => {
            a = f
        }
    }
}
var dt = Hk(),
    Hs, gr, qs, Dv, qk = (Dv = class extends _o {
        constructor() {
            super();
            ce(this, Hs, !0);
            ce(this, gr);
            ce(this, qs);
            X(this, qs, e => {
                if (!as && window.addEventListener) {
                    const r = () => e(!0),
                        i = () => e(!1);
                    return window.addEventListener("online", r, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", r), window.removeEventListener("offline", i)
                    }
                }
            })
        }
        onSubscribe() {
            P(this, gr) || this.setEventListener(P(this, qs))
        }
        onUnsubscribe() {
            var e;
            this.hasListeners() || ((e = P(this, gr)) == null || e.call(this), X(this, gr, void 0))
        }
        setEventListener(e) {
            var r;
            X(this, qs, e), (r = P(this, gr)) == null || r.call(this), X(this, gr, e(this.setOnline.bind(this)))
        }
        setOnline(e) {
            P(this, Hs) !== e && (X(this, Hs, e), this.listeners.forEach(i => {
                i(e)
            }))
        }
        isOnline() {
            return P(this, Hs)
        }
    }, Hs = new WeakMap, gr = new WeakMap, qs = new WeakMap, Dv),
    vl = new qk;

function Wk(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}

function S0(t) {
    return (t ? ? "online") === "online" ? vl.isOnline() : !0
}
var Sd = class extends Error {
    constructor(t) {
        super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent
    }
};

function b0(t) {
    let e = !1,
        r = 0,
        i;
    const a = xd(),
        u = () => a.status !== "pending",
        c = b => {
            var x;
            if (!u()) {
                const R = new Sd(b);
                w(R), (x = t.onCancel) == null || x.call(t, R)
            }
        },
        f = () => {
            e = !0
        },
        h = () => {
            e = !1
        },
        m = () => hf.isFocused() && (t.networkMode === "always" || vl.isOnline()) && t.canRun(),
        g = () => S0(t.networkMode) && t.canRun(),
        y = b => {
            u() || (i == null || i(), a.resolve(b))
        },
        w = b => {
            u() || (i == null || i(), a.reject(b))
        },
        k = () => new Promise(b => {
            var x;
            i = R => {
                (u() || m()) && b(R)
            }, (x = t.onPause) == null || x.call(t)
        }).then(() => {
            var b;
            i = void 0, u() || (b = t.onContinue) == null || b.call(t)
        }),
        S = () => {
            if (u()) return;
            let b;
            const x = r === 0 ? t.initialPromise : void 0;
            try {
                b = x ? ? t.fn()
            } catch (R) {
                b = Promise.reject(R)
            }
            Promise.resolve(b).then(y).catch(R => {
                var K;
                if (u()) return;
                const V = t.retry ? ? (as ? 0 : 3),
                    M = t.retryDelay ? ? Wk,
                    N = typeof M == "function" ? M(r, R) : M,
                    B = V === !0 || typeof V == "number" && r < V || typeof V == "function" && V(r, R);
                if (e || !B) {
                    w(R);
                    return
                }
                r++, (K = t.onFail) == null || K.call(t, r, R), Fk(N).then(() => m() ? void 0 : k()).then(() => {
                    e ? w(R) : S()
                })
            })
        };
    return {
        promise: a,
        status: () => a.status,
        cancel: c,
        continue: () => (i == null || i(), a),
        cancelRetry: f,
        continueRetry: h,
        canStart: g,
        start: () => (g() ? S() : k().then(S), a)
    }
}
var Xr, jv, k0 = (jv = class {
        constructor() {
            ce(this, Xr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), gd(this.gcTime) && X(this, Xr, Kr.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(t) {
            this.gcTime = Math.max(this.gcTime || 0, t ? ? (as ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            P(this, Xr) && (Kr.clearTimeout(P(this, Xr)), X(this, Xr, void 0))
        }
    }, Xr = new WeakMap, jv),
    Jr, Ws, Jt, Zr, ot, bo, es, cn, jn, Iv, Kk = (Iv = class extends k0 {
        constructor(e) {
            super();
            ce(this, cn);
            ce(this, Jr);
            ce(this, Ws);
            ce(this, Jt);
            ce(this, Zr);
            ce(this, ot);
            ce(this, bo);
            ce(this, es);
            X(this, es, !1), X(this, bo, e.defaultOptions), this.setOptions(e.options), this.observers = [], X(this, Zr, e.client), X(this, Jt, P(this, Zr).getQueryCache()), this.queryKey = e.queryKey, this.queryHash = e.queryHash, X(this, Jr, kg(this.options)), this.state = e.state ? ? P(this, Jr), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var e;
            return (e = P(this, ot)) == null ? void 0 : e.promise
        }
        setOptions(e) {
            if (this.options = { ...P(this, bo),
                    ...e
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const r = kg(this.options);
                r.data !== void 0 && (this.setState(bg(r.data, r.dataUpdatedAt)), X(this, Jr, r))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && P(this, Jt).remove(this)
        }
        setData(e, r) {
            const i = wd(this.state.data, e, this.options);
            return be(this, cn, jn).call(this, {
                data: i,
                type: "success",
                dataUpdatedAt: r == null ? void 0 : r.updatedAt,
                manual: r == null ? void 0 : r.manual
            }), i
        }
        setState(e, r) {
            be(this, cn, jn).call(this, {
                type: "setState",
                state: e,
                setStateOptions: r
            })
        }
        cancel(e) {
            var i, a;
            const r = (i = P(this, ot)) == null ? void 0 : i.promise;
            return (a = P(this, ot)) == null || a.cancel(e), r ? r.then(Nt).catch(Nt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(P(this, Jr))
        }
        isActive() {
            return this.observers.some(e => Zt(e.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ff || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(e => kr(e.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !y0(this.state.dataUpdatedAt, e)
        }
        onFocus() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnWindowFocus());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, ot)) == null || r.continue()
        }
        onOnline() {
            var r;
            const e = this.observers.find(i => i.shouldFetchOnReconnect());
            e == null || e.refetch({
                cancelRefetch: !1
            }), (r = P(this, ot)) == null || r.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), P(this, Jt).notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(r => r !== e), this.observers.length || (P(this, ot) && (P(this, es) ? P(this, ot).cancel({
                revert: !0
            }) : P(this, ot).cancelRetry()), this.scheduleGc()), P(this, Jt).notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || be(this, cn, jn).call(this, {
                type: "invalidate"
            })
        }
        async fetch(e, r) {
            var h, m, g, y, w, k, S, b, x, R, V, M;
            if (this.state.fetchStatus !== "idle" && ((h = P(this, ot)) == null ? void 0 : h.status()) !== "rejected") {
                if (this.state.data !== void 0 && (r != null && r.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (P(this, ot)) return P(this, ot).continueRetry(), P(this, ot).promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const N = this.observers.find(B => B.options.queryFn);
                N && this.setOptions(N.options)
            }
            const i = new AbortController,
                a = N => {
                    Object.defineProperty(N, "signal", {
                        enumerable: !0,
                        get: () => (X(this, es, !0), i.signal)
                    })
                },
                u = () => {
                    const N = w0(this.options, r),
                        K = (() => {
                            const G = {
                                client: P(this, Zr),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return a(G), G
                        })();
                    return X(this, es, !1), this.options.persister ? this.options.persister(N, K, this) : N(K)
                },
                f = (() => {
                    const N = {
                        fetchOptions: r,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: P(this, Zr),
                        state: this.state,
                        fetchFn: u
                    };
                    return a(N), N
                })();
            (m = this.options.behavior) == null || m.onFetch(f, this), X(this, Ws, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((g = f.fetchOptions) == null ? void 0 : g.meta)) && be(this, cn, jn).call(this, {
                type: "fetch",
                meta: (y = f.fetchOptions) == null ? void 0 : y.meta
            }), X(this, ot, b0({
                initialPromise: r == null ? void 0 : r.initialPromise,
                fn: f.fetchFn,
                onCancel: N => {
                    N instanceof Sd && N.revert && this.setState({ ...P(this, Ws),
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (N, B) => {
                    be(this, cn, jn).call(this, {
                        type: "failed",
                        failureCount: N,
                        error: B
                    })
                },
                onPause: () => {
                    be(this, cn, jn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    be(this, cn, jn).call(this, {
                        type: "continue"
                    })
                },
                retry: f.options.retry,
                retryDelay: f.options.retryDelay,
                networkMode: f.options.networkMode,
                canRun: () => !0
            }));
            try {
                const N = await P(this, ot).start();
                if (N === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(N), (k = (w = P(this, Jt).config).onSuccess) == null || k.call(w, N, this), (b = (S = P(this, Jt).config).onSettled) == null || b.call(S, N, this.state.error, this), N
            } catch (N) {
                if (N instanceof Sd) {
                    if (N.silent) return P(this, ot).promise;
                    if (N.revert) {
                        if (this.state.data === void 0) throw N;
                        return this.state.data
                    }
                }
                throw be(this, cn, jn).call(this, {
                    type: "error",
                    error: N
                }), (R = (x = P(this, Jt).config).onError) == null || R.call(x, N, this), (M = (V = P(this, Jt).config).onSettled) == null || M.call(V, this.state.data, N, this), N
            } finally {
                this.scheduleGc()
            }
        }
    }, Jr = new WeakMap, Ws = new WeakMap, Jt = new WeakMap, Zr = new WeakMap, ot = new WeakMap, bo = new WeakMap, es = new WeakMap, cn = new WeakSet, jn = function(e) {
        const r = i => {
            switch (e.type) {
                case "failed":
                    return { ...i,
                        fetchFailureCount: e.failureCount,
                        fetchFailureReason: e.error
                    };
                case "pause":
                    return { ...i,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...i,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...i,
                        ...E0(i.data, this.options),
                        fetchMeta: e.meta ? ? null
                    };
                case "success":
                    const a = { ...i,
                        ...bg(e.data, e.dataUpdatedAt),
                        dataUpdateCount: i.dataUpdateCount + 1,
                        ...!e.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return X(this, Ws, e.manual ? a : void 0), a;
                case "error":
                    const u = e.error;
                    return { ...i,
                        error: u,
                        errorUpdateCount: i.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: i.fetchFailureCount + 1,
                        fetchFailureReason: u,
                        fetchStatus: "idle",
                        status: "error",
                        isInvalidated: !0
                    };
                case "invalidate":
                    return { ...i,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...i,
                        ...e.state
                    }
            }
        };
        this.state = r(this.state), dt.batch(() => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }), P(this, Jt).notify({
                query: this,
                type: "updated",
                action: e
            })
        })
    }, Iv);

function E0(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: S0(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function bg(t, e) {
    return {
        data: t,
        dataUpdatedAt: e ? ? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success"
    }
}

function kg(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData,
        r = e !== void 0,
        i = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Ot, ke, ko, Et, ts, Ks, In, yr, Eo, Qs, Gs, ns, rs, vr, Ys, Oe, eo, bd, kd, Ed, Cd, Td, Pd, _d, C0, Fv, Qk = (Fv = class extends _o {
    constructor(e, r) {
        super();
        ce(this, Oe);
        ce(this, Ot);
        ce(this, ke);
        ce(this, ko);
        ce(this, Et);
        ce(this, ts);
        ce(this, Ks);
        ce(this, In);
        ce(this, yr);
        ce(this, Eo);
        ce(this, Qs);
        ce(this, Gs);
        ce(this, ns);
        ce(this, rs);
        ce(this, vr);
        ce(this, Ys, new Set);
        this.options = r, X(this, Ot, e), X(this, yr, null), X(this, In, xd()), this.bindMethods(), this.setOptions(r)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (P(this, ke).addObserver(this), Eg(P(this, ke), this.options) ? be(this, Oe, eo).call(this) : this.updateResult(), be(this, Oe, Cd).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Rd(P(this, ke), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Rd(P(this, ke), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, be(this, Oe, Td).call(this), be(this, Oe, Pd).call(this), P(this, ke).removeObserver(this)
    }
    setOptions(e) {
        const r = this.options,
            i = P(this, ke);
        if (this.options = P(this, Ot).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Zt(this.options.enabled, P(this, ke)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        be(this, Oe, _d).call(this), P(this, ke).setOptions(this.options), r._defaulted && !yd(this.options, r) && P(this, Ot).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: P(this, ke),
            observer: this
        });
        const a = this.hasListeners();
        a && Cg(P(this, ke), i, this.options, r) && be(this, Oe, eo).call(this), this.updateResult(), a && (P(this, ke) !== i || Zt(this.options.enabled, P(this, ke)) !== Zt(r.enabled, P(this, ke)) || kr(this.options.staleTime, P(this, ke)) !== kr(r.staleTime, P(this, ke))) && be(this, Oe, bd).call(this);
        const u = be(this, Oe, kd).call(this);
        a && (P(this, ke) !== i || Zt(this.options.enabled, P(this, ke)) !== Zt(r.enabled, P(this, ke)) || u !== P(this, vr)) && be(this, Oe, Ed).call(this, u)
    }
    getOptimisticResult(e) {
        const r = P(this, Ot).getQueryCache().build(P(this, Ot), e),
            i = this.createResult(r, e);
        return Yk(this, i) && (X(this, Et, i), X(this, Ks, this.options), X(this, ts, P(this, ke).state)), i
    }
    getCurrentResult() {
        return P(this, Et)
    }
    trackResult(e, r) {
        return new Proxy(e, {
            get: (i, a) => (this.trackProp(a), r == null || r(a), a === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && P(this, In).status === "pending" && P(this, In).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(i, a))
        })
    }
    trackProp(e) {
        P(this, Ys).add(e)
    }
    getCurrentQuery() {
        return P(this, ke)
    }
    refetch({ ...e
    } = {}) {
        return this.fetch({ ...e
        })
    }
    fetchOptimistic(e) {
        const r = P(this, Ot).defaultQueryOptions(e),
            i = P(this, Ot).getQueryCache().build(P(this, Ot), r);
        return i.fetch().then(() => this.createResult(i, r))
    }
    fetch(e) {
        return be(this, Oe, eo).call(this, { ...e,
            cancelRefetch: e.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), P(this, Et)))
    }
    createResult(e, r) {
        var J;
        const i = P(this, ke),
            a = this.options,
            u = P(this, Et),
            c = P(this, ts),
            f = P(this, Ks),
            m = e !== i ? e.state : P(this, ko),
            {
                state: g
            } = e;
        let y = { ...g
            },
            w = !1,
            k;
        if (r._optimisticResults) {
            const ee = this.hasListeners(),
                Ce = !ee && Eg(e, r),
                Le = ee && Cg(e, i, r, a);
            (Ce || Le) && (y = { ...y,
                ...E0(g.data, e.options)
            }), r._optimisticResults === "isRestoring" && (y.fetchStatus = "idle")
        }
        let {
            error: S,
            errorUpdatedAt: b,
            status: x
        } = y;
        k = y.data;
        let R = !1;
        if (r.placeholderData !== void 0 && k === void 0 && x === "pending") {
            let ee;
            u != null && u.isPlaceholderData && r.placeholderData === (f == null ? void 0 : f.placeholderData) ? (ee = u.data, R = !0) : ee = typeof r.placeholderData == "function" ? r.placeholderData((J = P(this, Gs)) == null ? void 0 : J.state.data, P(this, Gs)) : r.placeholderData, ee !== void 0 && (x = "success", k = wd(u == null ? void 0 : u.data, ee, r), w = !0)
        }
        if (r.select && k !== void 0 && !R)
            if (u && k === (c == null ? void 0 : c.data) && r.select === P(this, Eo)) k = P(this, Qs);
            else try {
                X(this, Eo, r.select), k = r.select(k), k = wd(u == null ? void 0 : u.data, k, r), X(this, Qs, k), X(this, yr, null)
            } catch (ee) {
                X(this, yr, ee)
            }
        P(this, yr) && (S = P(this, yr), k = P(this, Qs), b = Date.now(), x = "error");
        const V = y.fetchStatus === "fetching",
            M = x === "pending",
            N = x === "error",
            B = M && V,
            K = k !== void 0,
            F = {
                status: x,
                fetchStatus: y.fetchStatus,
                isPending: M,
                isSuccess: x === "success",
                isError: N,
                isInitialLoading: B,
                isLoading: B,
                data: k,
                dataUpdatedAt: y.dataUpdatedAt,
                error: S,
                errorUpdatedAt: b,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount: y.dataUpdateCount > m.dataUpdateCount || y.errorUpdateCount > m.errorUpdateCount,
                isFetching: V,
                isRefetching: V && !M,
                isLoadingError: N && !K,
                isPaused: y.fetchStatus === "paused",
                isPlaceholderData: w,
                isRefetchError: N && K,
                isStale: pf(e, r),
                refetch: this.refetch,
                promise: P(this, In),
                isEnabled: Zt(r.enabled, e) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const ee = F.data !== void 0,
                Ce = F.status === "error" && !ee,
                Le = je => {
                    Ce ? je.reject(F.error) : ee && je.resolve(F.data)
                },
                Me = () => {
                    const je = X(this, In, F.promise = xd());
                    Le(je)
                },
                Re = P(this, In);
            switch (Re.status) {
                case "pending":
                    e.queryHash === i.queryHash && Le(Re);
                    break;
                case "fulfilled":
                    (Ce || F.data !== Re.value) && Me();
                    break;
                case "rejected":
                    (!Ce || F.error !== Re.reason) && Me();
                    break
            }
        }
        return F
    }
    updateResult() {
        const e = P(this, Et),
            r = this.createResult(P(this, ke), this.options);
        if (X(this, ts, P(this, ke).state), X(this, Ks, this.options), P(this, ts).data !== void 0 && X(this, Gs, P(this, ke)), yd(r, e)) return;
        X(this, Et, r);
        const i = () => {
            if (!e) return !0;
            const {
                notifyOnChangeProps: a
            } = this.options, u = typeof a == "function" ? a() : a;
            if (u === "all" || !u && !P(this, Ys).size) return !0;
            const c = new Set(u ? ? P(this, Ys));
            return this.options.throwOnError && c.add("error"), Object.keys(P(this, Et)).some(f => {
                const h = f;
                return P(this, Et)[h] !== e[h] && c.has(h)
            })
        };
        be(this, Oe, C0).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && be(this, Oe, Cd).call(this)
    }
}, Ot = new WeakMap, ke = new WeakMap, ko = new WeakMap, Et = new WeakMap, ts = new WeakMap, Ks = new WeakMap, In = new WeakMap, yr = new WeakMap, Eo = new WeakMap, Qs = new WeakMap, Gs = new WeakMap, ns = new WeakMap, rs = new WeakMap, vr = new WeakMap, Ys = new WeakMap, Oe = new WeakSet, eo = function(e) {
    be(this, Oe, _d).call(this);
    let r = P(this, ke).fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(Nt)), r
}, bd = function() {
    be(this, Oe, Td).call(this);
    const e = kr(this.options.staleTime, P(this, ke));
    if (as || P(this, Et).isStale || !gd(e)) return;
    const i = y0(P(this, Et).dataUpdatedAt, e) + 1;
    X(this, ns, Kr.setTimeout(() => {
        P(this, Et).isStale || this.updateResult()
    }, i))
}, kd = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(P(this, ke)) : this.options.refetchInterval) ? ? !1
}, Ed = function(e) {
    be(this, Oe, Pd).call(this), X(this, vr, e), !(as || Zt(this.options.enabled, P(this, ke)) === !1 || !gd(P(this, vr)) || P(this, vr) === 0) && X(this, rs, Kr.setInterval(() => {
        (this.options.refetchIntervalInBackground || hf.isFocused()) && be(this, Oe, eo).call(this)
    }, P(this, vr)))
}, Cd = function() {
    be(this, Oe, bd).call(this), be(this, Oe, Ed).call(this, be(this, Oe, kd).call(this))
}, Td = function() {
    P(this, ns) && (Kr.clearTimeout(P(this, ns)), X(this, ns, void 0))
}, Pd = function() {
    P(this, rs) && (Kr.clearInterval(P(this, rs)), X(this, rs, void 0))
}, _d = function() {
    const e = P(this, Ot).getQueryCache().build(P(this, Ot), this.options);
    if (e === P(this, ke)) return;
    const r = P(this, ke);
    X(this, ke, e), X(this, ko, e.state), this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this))
}, C0 = function(e) {
    dt.batch(() => {
        e.listeners && this.listeners.forEach(r => {
            r(P(this, Et))
        }), P(this, Ot).getQueryCache().notify({
            query: P(this, ke),
            type: "observerResultsUpdated"
        })
    })
}, Fv);

function Gk(t, e) {
    return Zt(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1)
}

function Eg(t, e) {
    return Gk(t, e) || t.state.data !== void 0 && Rd(t, e, e.refetchOnMount)
}

function Rd(t, e, r) {
    if (Zt(e.enabled, t) !== !1 && kr(e.staleTime, t) !== "static") {
        const i = typeof r == "function" ? r(t) : r;
        return i === "always" || i !== !1 && pf(t, e)
    }
    return !1
}

function Cg(t, e, r, i) {
    return (t !== e || Zt(i.enabled, t) === !1) && (!r.suspense || t.state.status !== "error") && pf(t, r)
}

function pf(t, e) {
    return Zt(e.enabled, t) !== !1 && t.isStaleByTime(kr(e.staleTime, t))
}

function Yk(t, e) {
    return !yd(t.getCurrentResult(), e)
}

function Tg(t) {
    return {
        onFetch: (e, r) => {
            var g, y, w, k, S;
            const i = e.options,
                a = (w = (y = (g = e.fetchOptions) == null ? void 0 : g.meta) == null ? void 0 : y.fetchMore) == null ? void 0 : w.direction,
                u = ((k = e.state.data) == null ? void 0 : k.pages) || [],
                c = ((S = e.state.data) == null ? void 0 : S.pageParams) || [];
            let f = {
                    pages: [],
                    pageParams: []
                },
                h = 0;
            const m = async () => {
                let b = !1;
                const x = M => {
                        Uk(M, () => e.signal, () => b = !0)
                    },
                    R = w0(e.options, e.fetchOptions),
                    V = async (M, N, B) => {
                        if (b) return Promise.reject();
                        if (N == null && M.pages.length) return Promise.resolve(M);
                        const G = (() => {
                                const Ce = {
                                    client: e.client,
                                    queryKey: e.queryKey,
                                    pageParam: N,
                                    direction: B ? "backward" : "forward",
                                    meta: e.options.meta
                                };
                                return x(Ce), Ce
                            })(),
                            F = await R(G),
                            {
                                maxPages: J
                            } = e.options,
                            ee = B ? Bk : Vk;
                        return {
                            pages: ee(M.pages, F, J),
                            pageParams: ee(M.pageParams, N, J)
                        }
                    };
                if (a && u.length) {
                    const M = a === "backward",
                        N = M ? Xk : Pg,
                        B = {
                            pages: u,
                            pageParams: c
                        },
                        K = N(i, B);
                    f = await V(B, K, M)
                } else {
                    const M = t ? ? u.length;
                    do {
                        const N = h === 0 ? c[0] ? ? i.initialPageParam : Pg(i, f);
                        if (h > 0 && N == null) break;
                        f = await V(f, N), h++
                    } while (h < M)
                }
                return f
            };
            e.options.persister ? e.fetchFn = () => {
                var b, x;
                return (x = (b = e.options).persister) == null ? void 0 : x.call(b, m, {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal
                }, r)
            } : e.fetchFn = m
        }
    }
}

function Pg(t, {
    pages: e,
    pageParams: r
}) {
    const i = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[i], e, r[i], r) : void 0
}

function Xk(t, {
    pages: e,
    pageParams: r
}) {
    var i;
    return e.length > 0 ? (i = t.getPreviousPageParam) == null ? void 0 : i.call(t, e[0], e, r[0], r) : void 0
}
var Co, wn, yt, ss, xn, fr, Vv, Jk = (Vv = class extends k0 {
    constructor(e) {
        super();
        ce(this, xn);
        ce(this, Co);
        ce(this, wn);
        ce(this, yt);
        ce(this, ss);
        X(this, Co, e.client), this.mutationId = e.mutationId, X(this, yt, e.mutationCache), X(this, wn, []), this.state = e.state || Zk(), this.setOptions(e.options), this.scheduleGc()
    }
    setOptions(e) {
        this.options = e, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        P(this, wn).includes(e) || (P(this, wn).push(e), this.clearGcTimeout(), P(this, yt).notify({
            type: "observerAdded",
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        X(this, wn, P(this, wn).filter(r => r !== e)), this.scheduleGc(), P(this, yt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        P(this, wn).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, yt).remove(this))
    }
    continue () {
        var e;
        return ((e = P(this, ss)) == null ? void 0 : e.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(e) {
        var c, f, h, m, g, y, w, k, S, b, x, R, V, M, N, B, K, G;
        const r = () => {
                be(this, xn, fr).call(this, {
                    type: "continue"
                })
            },
            i = {
                client: P(this, Co),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        X(this, ss, b0({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (F, J) => {
                be(this, xn, fr).call(this, {
                    type: "failed",
                    failureCount: F,
                    error: J
                })
            },
            onPause: () => {
                be(this, xn, fr).call(this, {
                    type: "pause"
                })
            },
            onContinue: r,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, yt).canRun(this)
        }));
        const a = this.state.status === "pending",
            u = !P(this, ss).canStart();
        try {
            if (a) r();
            else {
                be(this, xn, fr).call(this, {
                    type: "pending",
                    variables: e,
                    isPaused: u
                }), P(this, yt).config.onMutate && await P(this, yt).config.onMutate(e, this, i);
                const J = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, e, i));
                J !== this.state.context && be(this, xn, fr).call(this, {
                    type: "pending",
                    context: J,
                    variables: e,
                    isPaused: u
                })
            }
            const F = await P(this, ss).start();
            return await ((m = (h = P(this, yt).config).onSuccess) == null ? void 0 : m.call(h, F, e, this.state.context, this, i)), await ((y = (g = this.options).onSuccess) == null ? void 0 : y.call(g, F, e, this.state.context, i)), await ((k = (w = P(this, yt).config).onSettled) == null ? void 0 : k.call(w, F, null, this.state.variables, this.state.context, this, i)), await ((b = (S = this.options).onSettled) == null ? void 0 : b.call(S, F, null, e, this.state.context, i)), be(this, xn, fr).call(this, {
                type: "success",
                data: F
            }), F
        } catch (F) {
            try {
                await ((R = (x = P(this, yt).config).onError) == null ? void 0 : R.call(x, F, e, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((M = (V = this.options).onError) == null ? void 0 : M.call(V, F, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((B = (N = P(this, yt).config).onSettled) == null ? void 0 : B.call(N, void 0, F, this.state.variables, this.state.context, this, i))
            } catch (J) {
                Promise.reject(J)
            }
            try {
                await ((G = (K = this.options).onSettled) == null ? void 0 : G.call(K, void 0, F, e, this.state.context, i))
            } catch (J) {
                Promise.reject(J)
            }
            throw be(this, xn, fr).call(this, {
                type: "error",
                error: F
            }), F
        } finally {
            P(this, yt).runNext(this)
        }
    }
}, Co = new WeakMap, wn = new WeakMap, yt = new WeakMap, ss = new WeakMap, xn = new WeakSet, fr = function(e) {
    const r = i => {
        switch (e.type) {
            case "failed":
                return { ...i,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case "pause":
                return { ...i,
                    isPaused: !0
                };
            case "continue":
                return { ...i,
                    isPaused: !1
                };
            case "pending":
                return { ...i,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...i,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...i,
                    data: void 0,
                    error: e.error,
                    failureCount: i.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = r(this.state), dt.batch(() => {
        P(this, wn).forEach(i => {
            i.onMutationUpdate(e)
        }), P(this, yt).notify({
            mutation: this,
            type: "updated",
            action: e
        })
    })
}, Vv);

function Zk() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Fn, dn, To, Bv, eE = (Bv = class extends _o {
    constructor(e = {}) {
        super();
        ce(this, Fn);
        ce(this, dn);
        ce(this, To);
        this.config = e, X(this, Fn, new Set), X(this, dn, new Map), X(this, To, 0)
    }
    build(e, r, i) {
        const a = new Jk({
            client: e,
            mutationCache: this,
            mutationId: ++Wa(this, To)._,
            options: e.defaultMutationOptions(r),
            state: i
        });
        return this.add(a), a
    }
    add(e) {
        P(this, Fn).add(e);
        const r = Ya(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r);
            i ? i.push(e) : P(this, dn).set(r, [e])
        }
        this.notify({
            type: "added",
            mutation: e
        })
    }
    remove(e) {
        if (P(this, Fn).delete(e)) {
            const r = Ya(e);
            if (typeof r == "string") {
                const i = P(this, dn).get(r);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(e);
                        a !== -1 && i.splice(a, 1)
                    } else i[0] === e && P(this, dn).delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: e
        })
    }
    canRun(e) {
        const r = Ya(e);
        if (typeof r == "string") {
            const i = P(this, dn).get(r),
                a = i == null ? void 0 : i.find(u => u.state.status === "pending");
            return !a || a === e
        } else return !0
    }
    runNext(e) {
        var i;
        const r = Ya(e);
        if (typeof r == "string") {
            const a = (i = P(this, dn).get(r)) == null ? void 0 : i.find(u => u !== e && u.state.isPaused);
            return (a == null ? void 0 : a.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        dt.batch(() => {
            P(this, Fn).forEach(e => {
                this.notify({
                    type: "removed",
                    mutation: e
                })
            }), P(this, Fn).clear(), P(this, dn).clear()
        })
    }
    getAll() {
        return Array.from(P(this, Fn))
    }
    find(e) {
        const r = {
            exact: !0,
            ...e
        };
        return this.getAll().find(i => wg(r, i))
    }
    findAll(e = {}) {
        return this.getAll().filter(r => wg(e, r))
    }
    notify(e) {
        dt.batch(() => {
            this.listeners.forEach(r => {
                r(e)
            })
        })
    }
    resumePausedMutations() {
        const e = this.getAll().filter(r => r.state.isPaused);
        return dt.batch(() => Promise.all(e.map(r => r.continue().catch(Nt))))
    }
}, Fn = new WeakMap, dn = new WeakMap, To = new WeakMap, Bv);

function Ya(t) {
    var e;
    return (e = t.options.scope) == null ? void 0 : e.id
}
var Sn, Uv, tE = (Uv = class extends _o {
        constructor(e = {}) {
            super();
            ce(this, Sn);
            this.config = e, X(this, Sn, new Map)
        }
        build(e, r, i) {
            const a = r.queryKey,
                u = r.queryHash ? ? df(a, r);
            let c = this.get(u);
            return c || (c = new Kk({
                client: e,
                queryKey: a,
                queryHash: u,
                options: e.defaultQueryOptions(r),
                state: i,
                defaultOptions: e.getQueryDefaults(a)
            }), this.add(c)), c
        }
        add(e) {
            P(this, Sn).has(e.queryHash) || (P(this, Sn).set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }))
        }
        remove(e) {
            const r = P(this, Sn).get(e.queryHash);
            r && (e.destroy(), r === e && P(this, Sn).delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }))
        }
        clear() {
            dt.batch(() => {
                this.getAll().forEach(e => {
                    this.remove(e)
                })
            })
        }
        get(e) {
            return P(this, Sn).get(e)
        }
        getAll() {
            return [...P(this, Sn).values()]
        }
        find(e) {
            const r = {
                exact: !0,
                ...e
            };
            return this.getAll().find(i => vg(r, i))
        }
        findAll(e = {}) {
            const r = this.getAll();
            return Object.keys(e).length > 0 ? r.filter(i => vg(e, i)) : r
        }
        notify(e) {
            dt.batch(() => {
                this.listeners.forEach(r => {
                    r(e)
                })
            })
        }
        onFocus() {
            dt.batch(() => {
                this.getAll().forEach(e => {
                    e.onFocus()
                })
            })
        }
        onOnline() {
            dt.batch(() => {
                this.getAll().forEach(e => {
                    e.onOnline()
                })
            })
        }
    }, Sn = new WeakMap, Uv),
    We, wr, xr, Xs, Js, Sr, Zs, ei, zv, nE = (zv = class {
        constructor(t = {}) {
            ce(this, We);
            ce(this, wr);
            ce(this, xr);
            ce(this, Xs);
            ce(this, Js);
            ce(this, Sr);
            ce(this, Zs);
            ce(this, ei);
            X(this, We, t.queryCache || new tE), X(this, wr, t.mutationCache || new eE), X(this, xr, t.defaultOptions || {}), X(this, Xs, new Map), X(this, Js, new Map), X(this, Sr, 0)
        }
        mount() {
            Wa(this, Sr)._++, P(this, Sr) === 1 && (X(this, Zs, hf.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, We).onFocus())
            })), X(this, ei, vl.subscribe(async t => {
                t && (await this.resumePausedMutations(), P(this, We).onOnline())
            })))
        }
        unmount() {
            var t, e;
            Wa(this, Sr)._--, P(this, Sr) === 0 && ((t = P(this, Zs)) == null || t.call(this), X(this, Zs, void 0), (e = P(this, ei)) == null || e.call(this), X(this, ei, void 0))
        }
        isFetching(t) {
            return P(this, We).findAll({ ...t,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(t) {
            return P(this, wr).findAll({ ...t,
                status: "pending"
            }).length
        }
        getQueryData(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, We).get(e.queryHash)) == null ? void 0 : r.state.data
        }
        ensureQueryData(t) {
            const e = this.defaultQueryOptions(t),
                r = P(this, We).build(this, e),
                i = r.state.data;
            return i === void 0 ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime(kr(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
        }
        getQueriesData(t) {
            return P(this, We).findAll(t).map(({
                queryKey: e,
                state: r
            }) => {
                const i = r.data;
                return [e, i]
            })
        }
        setQueryData(t, e, r) {
            const i = this.defaultQueryOptions({
                    queryKey: t
                }),
                a = P(this, We).get(i.queryHash),
                u = a == null ? void 0 : a.state.data,
                c = jk(e, u);
            if (c !== void 0) return P(this, We).build(this, i).setData(c, { ...r,
                manual: !0
            })
        }
        setQueriesData(t, e, r) {
            return dt.batch(() => P(this, We).findAll(t).map(({
                queryKey: i
            }) => [i, this.setQueryData(i, e, r)]))
        }
        getQueryState(t) {
            var r;
            const e = this.defaultQueryOptions({
                queryKey: t
            });
            return (r = P(this, We).get(e.queryHash)) == null ? void 0 : r.state
        }
        removeQueries(t) {
            const e = P(this, We);
            dt.batch(() => {
                e.findAll(t).forEach(r => {
                    e.remove(r)
                })
            })
        }
        resetQueries(t, e) {
            const r = P(this, We);
            return dt.batch(() => (r.findAll(t).forEach(i => {
                i.reset()
            }), this.refetchQueries({
                type: "active",
                ...t
            }, e)))
        }
        cancelQueries(t, e = {}) {
            const r = {
                    revert: !0,
                    ...e
                },
                i = dt.batch(() => P(this, We).findAll(t).map(a => a.cancel(r)));
            return Promise.all(i).then(Nt).catch(Nt)
        }
        invalidateQueries(t, e = {}) {
            return dt.batch(() => (P(this, We).findAll(t).forEach(r => {
                r.invalidate()
            }), (t == null ? void 0 : t.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...t,
                type: (t == null ? void 0 : t.refetchType) ? ? (t == null ? void 0 : t.type) ? ? "active"
            }, e)))
        }
        refetchQueries(t, e = {}) {
            const r = { ...e,
                    cancelRefetch: e.cancelRefetch ? ? !0
                },
                i = dt.batch(() => P(this, We).findAll(t).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                    let u = a.fetch(void 0, r);
                    return r.throwOnError || (u = u.catch(Nt)), a.state.fetchStatus === "paused" ? Promise.resolve() : u
                }));
            return Promise.all(i).then(Nt)
        }
        fetchQuery(t) {
            const e = this.defaultQueryOptions(t);
            e.retry === void 0 && (e.retry = !1);
            const r = P(this, We).build(this, e);
            return r.isStaleByTime(kr(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
        }
        prefetchQuery(t) {
            return this.fetchQuery(t).then(Nt).catch(Nt)
        }
        fetchInfiniteQuery(t) {
            return t.behavior = Tg(t.pages), this.fetchQuery(t)
        }
        prefetchInfiniteQuery(t) {
            return this.fetchInfiniteQuery(t).then(Nt).catch(Nt)
        }
        ensureInfiniteQueryData(t) {
            return t.behavior = Tg(t.pages), this.ensureQueryData(t)
        }
        resumePausedMutations() {
            return vl.isOnline() ? P(this, wr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return P(this, We)
        }
        getMutationCache() {
            return P(this, wr)
        }
        getDefaultOptions() {
            return P(this, xr)
        }
        setDefaultOptions(t) {
            X(this, xr, t)
        }
        setQueryDefaults(t, e) {
            P(this, Xs).set(mo(t), {
                queryKey: t,
                defaultOptions: e
            })
        }
        getQueryDefaults(t) {
            const e = [...P(this, Xs).values()],
                r = {};
            return e.forEach(i => {
                go(t, i.queryKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        setMutationDefaults(t, e) {
            P(this, Js).set(mo(t), {
                mutationKey: t,
                defaultOptions: e
            })
        }
        getMutationDefaults(t) {
            const e = [...P(this, Js).values()],
                r = {};
            return e.forEach(i => {
                go(t, i.mutationKey) && Object.assign(r, i.defaultOptions)
            }), r
        }
        defaultQueryOptions(t) {
            if (t._defaulted) return t;
            const e = { ...P(this, xr).queries,
                ...this.getQueryDefaults(t.queryKey),
                ...t,
                _defaulted: !0
            };
            return e.queryHash || (e.queryHash = df(e.queryKey, e)), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === ff && (e.enabled = !1), e
        }
        defaultMutationOptions(t) {
            return t != null && t._defaulted ? t : { ...P(this, xr).mutations,
                ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
                ...t,
                _defaulted: !0
            }
        }
        clear() {
            P(this, We).clear(), P(this, wr).clear()
        }
    }, We = new WeakMap, wr = new WeakMap, xr = new WeakMap, Xs = new WeakMap, Js = new WeakMap, Sr = new WeakMap, Zs = new WeakMap, ei = new WeakMap, zv),
    T0 = j.createContext(void 0),
    rE = t => {
        const e = j.useContext(T0);
        if (!e) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return e
    },
    sE = ({
        client: t,
        children: e
    }) => (j.useEffect(() => (t.mount(), () => {
        t.unmount()
    }), [t]), C.jsx(T0.Provider, {
        value: t,
        children: e
    })),
    P0 = j.createContext(!1),
    iE = () => j.useContext(P0);
P0.Provider;

function oE() {
    let t = !1;
    return {
        clearReset: () => {
            t = !1
        },
        reset: () => {
            t = !0
        },
        isReset: () => t
    }
}
var aE = j.createContext(oE()),
    lE = () => j.useContext(aE),
    uE = (t, e, r) => {
        const i = r != null && r.state.error && typeof t.throwOnError == "function" ? x0(t.throwOnError, [r.state.error, r]) : t.throwOnError;
        (t.suspense || t.experimental_prefetchInRender || i) && (e.isReset() || (t.retryOnMount = !1))
    },
    cE = t => {
        j.useEffect(() => {
            t.clearReset()
        }, [t])
    },
    dE = ({
        result: t,
        errorResetBoundary: e,
        throwOnError: r,
        query: i,
        suspense: a
    }) => t.isError && !e.isReset() && !t.isFetching && i && (a && t.data === void 0 || x0(r, [t.error, i])),
    fE = t => {
        if (t.suspense) {
            const r = a => a === "static" ? a : Math.max(a ? ? 1e3, 1e3),
                i = t.staleTime;
            t.staleTime = typeof i == "function" ? (...a) => r(i(...a)) : r(i), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3))
        }
    },
    hE = (t, e) => t.isLoading && t.isFetching && !e,
    pE = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending,
    _g = (t, e, r) => e.fetchOptimistic(t).catch(() => {
        r.clearReset()
    });

function mE(t, e, r) {
    var w, k, S, b;
    const i = iE(),
        a = lE(),
        u = rE(),
        c = u.defaultQueryOptions(t);
    (k = (w = u.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || k.call(w, c);
    const f = u.getQueryCache().get(c.queryHash);
    c._optimisticResults = i ? "isRestoring" : "optimistic", fE(c), uE(c, a, f), cE(a);
    const h = !u.getQueryCache().get(c.queryHash),
        [m] = j.useState(() => new e(u, c)),
        g = m.getOptimisticResult(c),
        y = !i && t.subscribed !== !1;
    if (j.useSyncExternalStore(j.useCallback(x => {
            const R = y ? m.subscribe(dt.batchCalls(x)) : Nt;
            return m.updateResult(), R
        }, [m, y]), () => m.getCurrentResult(), () => m.getCurrentResult()), j.useEffect(() => {
            m.setOptions(c)
        }, [c, m]), pE(c, g)) throw _g(c, m, a);
    if (dE({
            result: g,
            errorResetBoundary: a,
            throwOnError: c.throwOnError,
            query: f,
            suspense: c.suspense
        })) throw g.error;
    if ((b = (S = u.getDefaultOptions().queries) == null ? void 0 : S._experimental_afterQuery) == null || b.call(S, c, g), c.experimental_prefetchInRender && !as && hE(g, i)) {
        const x = h ? _g(c, m, a) : f == null ? void 0 : f.promise;
        x == null || x.catch(Nt).finally(() => {
            m.updateResult()
        })
    }
    return c.notifyOnChangeProps ? g : m.trackResult(g)
}

function gE(t, e) {
    return mE(t, Qk)
}
const yE = new nE({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
Hv();
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wl() {
    return wl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, wl.apply(this, arguments)
}
var br;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(br || (br = {}));
const Rg = "popstate";

function vE(t) {
    t === void 0 && (t = {});

    function e(i, a) {
        let {
            pathname: u,
            search: c,
            hash: f
        } = i.location;
        return Ad("", {
            pathname: u,
            search: c,
            hash: f
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function r(i, a) {
        return typeof a == "string" ? a : R0(a)
    }
    return xE(e, r, null, t)
}

function jt(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function _0(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function wE() {
    return Math.random().toString(36).substr(2, 8)
}

function Ag(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function Ad(t, e, r, i) {
    return r === void 0 && (r = null), wl({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? Al(e) : e, {
        state: r,
        key: e && e.key || i || wE()
    })
}

function R0(t) {
    let {
        pathname: e = "/",
        search: r = "",
        hash: i = ""
    } = t;
    return r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function Al(t) {
    let e = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (e.hash = t.substr(r), t = t.substr(0, r));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function xE(t, e, r, i) {
    i === void 0 && (i = {});
    let {
        window: a = document.defaultView,
        v5Compat: u = !1
    } = i, c = a.history, f = br.Pop, h = null, m = g();
    m == null && (m = 0, c.replaceState(wl({}, c.state, {
        idx: m
    }), ""));

    function g() {
        return (c.state || {
            idx: null
        }).idx
    }

    function y() {
        f = br.Pop;
        let x = g(),
            R = x == null ? null : x - m;
        m = x, h && h({
            action: f,
            location: b.location,
            delta: R
        })
    }

    function w(x, R) {
        f = br.Push;
        let V = Ad(b.location, x, R);
        m = g() + 1;
        let M = Ag(V, m),
            N = b.createHref(V);
        try {
            c.pushState(M, "", N)
        } catch (B) {
            if (B instanceof DOMException && B.name === "DataCloneError") throw B;
            a.location.assign(N)
        }
        u && h && h({
            action: f,
            location: b.location,
            delta: 1
        })
    }

    function k(x, R) {
        f = br.Replace;
        let V = Ad(b.location, x, R);
        m = g();
        let M = Ag(V, m),
            N = b.createHref(V);
        c.replaceState(M, "", N), u && h && h({
            action: f,
            location: b.location,
            delta: 0
        })
    }

    function S(x) {
        let R = a.location.origin !== "null" ? a.location.origin : a.location.href,
            V = typeof x == "string" ? x : R0(x);
        return V = V.replace(/ $/, "%20"), jt(R, "No window.location.(origin|href) available to create URL for href: " + V), new URL(V, R)
    }
    let b = {
        get action() {
            return f
        },
        get location() {
            return t(a, c)
        },
        listen(x) {
            if (h) throw new Error("A history only accepts one active listener");
            return a.addEventListener(Rg, y), h = x, () => {
                a.removeEventListener(Rg, y), h = null
            }
        },
        createHref(x) {
            return e(a, x)
        },
        createURL: S,
        encodeLocation(x) {
            let R = S(x);
            return {
                pathname: R.pathname,
                search: R.search,
                hash: R.hash
            }
        },
        push: w,
        replace: k,
        go(x) {
            return c.go(x)
        }
    };
    return b
}
var Og;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(Og || (Og = {}));

function SE(t, e, r) {
    return r === void 0 && (r = "/"), bE(t, e, r)
}

function bE(t, e, r, i) {
    let a = typeof e == "string" ? Al(e) : e,
        u = N0(a.pathname || "/", r);
    if (u == null) return null;
    let c = A0(t);
    kE(c);
    let f = null;
    for (let h = 0; f == null && h < c.length; ++h) {
        let m = DE(u);
        f = NE(c[h], m)
    }
    return f
}

function A0(t, e, r, i) {
    e === void 0 && (e = []), r === void 0 && (r = []), i === void 0 && (i = "");
    let a = (u, c, f) => {
        let h = {
            relativePath: f === void 0 ? u.path || "" : f,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: c,
            route: u
        };
        h.relativePath.startsWith("/") && (jt(h.relativePath.startsWith(i), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(i.length));
        let m = zs([i, h.relativePath]),
            g = r.concat(h);
        u.children && u.children.length > 0 && (jt(u.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + m + '".')), A0(u.children, e, g, m)), !(u.path == null && !u.index) && e.push({
            path: m,
            score: AE(m, u.index),
            routesMeta: g
        })
    };
    return t.forEach((u, c) => {
        var f;
        if (u.path === "" || !((f = u.path) != null && f.includes("?"))) a(u, c);
        else
            for (let h of O0(u.path)) a(u, c, h)
    }), e
}

function O0(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [r, ...i] = e, a = r.endsWith("?"), u = r.replace(/\?$/, "");
    if (i.length === 0) return a ? [u, ""] : [u];
    let c = O0(i.join("/")),
        f = [];
    return f.push(...c.map(h => h === "" ? u : [u, h].join("/"))), a && f.push(...c), f.map(h => t.startsWith("/") && h === "" ? "/" : h)
}

function kE(t) {
    t.sort((e, r) => e.score !== r.score ? r.score - e.score : OE(e.routesMeta.map(i => i.childrenIndex), r.routesMeta.map(i => i.childrenIndex)))
}
const EE = /^:[\w-]+$/,
    CE = 3,
    TE = 2,
    PE = 1,
    _E = 10,
    RE = -2,
    Ng = t => t === "*";

function AE(t, e) {
    let r = t.split("/"),
        i = r.length;
    return r.some(Ng) && (i += RE), e && (i += TE), r.filter(a => !Ng(a)).reduce((a, u) => a + (EE.test(u) ? CE : u === "" ? PE : _E), i)
}

function OE(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, a) => i === e[a]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function NE(t, e, r) {
    let {
        routesMeta: i
    } = t, a = {}, u = "/", c = [];
    for (let f = 0; f < i.length; ++f) {
        let h = i[f],
            m = f === i.length - 1,
            g = u === "/" ? e : e.slice(u.length) || "/",
            y = LE({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: m
            }, g),
            w = h.route;
        if (!y) return null;
        Object.assign(a, y.params), c.push({
            params: a,
            pathname: zs([u, y.pathname]),
            pathnameBase: jE(zs([u, y.pathnameBase])),
            route: w
        }), y.pathnameBase !== "/" && (u = zs([u, y.pathnameBase]))
    }
    return c
}

function LE(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [r, i] = ME(t.path, t.caseSensitive, t.end), a = e.match(r);
    if (!a) return null;
    let u = a[0],
        c = u.replace(/(.)\/+$/, "$1"),
        f = a.slice(1);
    return {
        params: i.reduce((m, g, y) => {
            let {
                paramName: w,
                isOptional: k
            } = g;
            if (w === "*") {
                let b = f[y] || "";
                c = u.slice(0, u.length - b.length).replace(/(.)\/+$/, "$1")
            }
            const S = f[y];
            return k && !S ? m[w] = void 0 : m[w] = (S || "").replace(/%2F/g, "/"), m
        }, {}),
        pathname: u,
        pathnameBase: c,
        pattern: t
    }
}

function ME(t, e, r) {
    e === void 0 && (e = !1), r === void 0 && (r = !0), _0(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        a = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, h) => (i.push({
            paramName: f,
            isOptional: h != null
        }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }), a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, e ? void 0 : "i"), i]
}

function DE(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return _0(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function N0(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let r = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(r);
    return i && i !== "/" ? null : t.slice(r) || "/"
}
const zs = t => t.join("/").replace(/\/\/+/g, "/"),
    jE = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function IE(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const L0 = ["post", "put", "patch", "delete"];
new Set(L0);
const FE = ["get", ...L0];
new Set(FE);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xl() {
    return xl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
        }
        return t
    }, xl.apply(this, arguments)
}
const VE = j.createContext(null),
    BE = j.createContext(null),
    M0 = j.createContext(null),
    Ol = j.createContext(null),
    Nl = j.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    D0 = j.createContext(null);

function mf() {
    return j.useContext(Ol) != null
}

function j0() {
    return mf() || jt(!1), j.useContext(Ol).location
}

function UE(t, e) {
    return zE(t, e)
}

function zE(t, e, r, i) {
    mf() || jt(!1);
    let {
        navigator: a
    } = j.useContext(M0), {
        matches: u
    } = j.useContext(Nl), c = u[u.length - 1], f = c ? c.params : {};
    c && c.pathname;
    let h = c ? c.pathnameBase : "/";
    c && c.route;
    let m = j0(),
        g;
    if (e) {
        var y;
        let x = typeof e == "string" ? Al(e) : e;
        h === "/" || (y = x.pathname) != null && y.startsWith(h) || jt(!1), g = x
    } else g = m;
    let w = g.pathname || "/",
        k = w;
    if (h !== "/") {
        let x = h.replace(/^\//, "").split("/");
        k = "/" + w.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let S = SE(t, {
            pathname: k
        }),
        b = KE(S && S.map(x => Object.assign({}, x, {
            params: Object.assign({}, f, x.params),
            pathname: zs([h, a.encodeLocation ? a.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? h : zs([h, a.encodeLocation ? a.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), u, r, i);
    return e && b ? j.createElement(Ol.Provider, {
        value: {
            location: xl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, g),
            navigationType: br.Pop
        }
    }, b) : b
}

function $E() {
    let t = XE(),
        e = IE(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        r = t instanceof Error ? t.stack : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return j.createElement(j.Fragment, null, j.createElement("h2", null, "Unexpected Application Error!"), j.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), r ? j.createElement("pre", {
        style: a
    }, r) : null, null)
}
const HE = j.createElement($E, null);
class qE extends j.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, r) {
        return r.location !== e.location || r.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : r.error,
            location: r.location,
            revalidation: e.revalidation || r.revalidation
        }
    }
    componentDidCatch(e, r) {
        console.error("React Router caught the following error during render", e, r)
    }
    render() {
        return this.state.error !== void 0 ? j.createElement(Nl.Provider, {
            value: this.props.routeContext
        }, j.createElement(D0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function WE(t) {
    let {
        routeContext: e,
        match: r,
        children: i
    } = t, a = j.useContext(VE);
    return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), j.createElement(Nl.Provider, {
        value: e
    }, i)
}

function KE(t, e, r, i) {
    var a;
    if (e === void 0 && (e = []), r === void 0 && (r = null), i === void 0 && (i = null), t == null) {
        var u;
        if (!r) return null;
        if (r.errors) t = r.matches;
        else if ((u = i) != null && u.v7_partialHydration && e.length === 0 && !r.initialized && r.matches.length > 0) t = r.matches;
        else return null
    }
    let c = t,
        f = (a = r) == null ? void 0 : a.errors;
    if (f != null) {
        let g = c.findIndex(y => y.route.id && (f == null ? void 0 : f[y.route.id]) !== void 0);
        g >= 0 || jt(!1), c = c.slice(0, Math.min(c.length, g + 1))
    }
    let h = !1,
        m = -1;
    if (r && i && i.v7_partialHydration)
        for (let g = 0; g < c.length; g++) {
            let y = c[g];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g), y.route.id) {
                let {
                    loaderData: w,
                    errors: k
                } = r, S = y.route.loader && w[y.route.id] === void 0 && (!k || k[y.route.id] === void 0);
                if (y.route.lazy || S) {
                    h = !0, m >= 0 ? c = c.slice(0, m + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight((g, y, w) => {
        let k, S = !1,
            b = null,
            x = null;
        r && (k = f && y.route.id ? f[y.route.id] : void 0, b = y.route.errorElement || HE, h && (m < 0 && w === 0 ? (JE("route-fallback"), S = !0, x = null) : m === w && (S = !0, x = y.route.hydrateFallbackElement || null)));
        let R = e.concat(c.slice(0, w + 1)),
            V = () => {
                let M;
                return k ? M = b : S ? M = x : y.route.Component ? M = j.createElement(y.route.Component, null) : y.route.element ? M = y.route.element : M = g, j.createElement(WE, {
                    match: y,
                    routeContext: {
                        outlet: g,
                        matches: R,
                        isDataRoute: r != null
                    },
                    children: M
                })
            };
        return r && (y.route.ErrorBoundary || y.route.errorElement || w === 0) ? j.createElement(qE, {
            location: r.location,
            revalidation: r.revalidation,
            component: b,
            error: k,
            children: V(),
            routeContext: {
                outlet: null,
                matches: R,
                isDataRoute: !0
            }
        }) : V()
    }, null)
}
var I0 = (function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
})(I0 || {});

function QE(t) {
    let e = j.useContext(BE);
    return e || jt(!1), e
}

function GE(t) {
    let e = j.useContext(Nl);
    return e || jt(!1), e
}

function YE(t) {
    let e = GE(),
        r = e.matches[e.matches.length - 1];
    return r.route.id || jt(!1), r.route.id
}

function XE() {
    var t;
    let e = j.useContext(D0),
        r = QE(I0.UseRouteError),
        i = YE();
    return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[i]
}
const Lg = {};

function JE(t, e, r) {
    Lg[t] || (Lg[t] = !0)
}

function ZE(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath
}

function Od(t) {
    jt(!1)
}

function eC(t) {
    let {
        basename: e = "/",
        children: r = null,
        location: i,
        navigationType: a = br.Pop,
        navigator: u,
        static: c = !1,
        future: f
    } = t;
    mf() && jt(!1);
    let h = e.replace(/^\/*/, "/"),
        m = j.useMemo(() => ({
            basename: h,
            navigator: u,
            static: c,
            future: xl({
                v7_relativeSplatPath: !1
            }, f)
        }), [h, f, u, c]);
    typeof i == "string" && (i = Al(i));
    let {
        pathname: g = "/",
        search: y = "",
        hash: w = "",
        state: k = null,
        key: S = "default"
    } = i, b = j.useMemo(() => {
        let x = N0(g, h);
        return x == null ? null : {
            location: {
                pathname: x,
                search: y,
                hash: w,
                state: k,
                key: S
            },
            navigationType: a
        }
    }, [h, g, y, w, k, S, a]);
    return b == null ? null : j.createElement(M0.Provider, {
        value: m
    }, j.createElement(Ol.Provider, {
        children: r,
        value: b
    }))
}

function tC(t) {
    let {
        children: e,
        location: r
    } = t;
    return UE(Nd(e), r)
}
new Promise(() => {});

function Nd(t, e) {
    e === void 0 && (e = []);
    let r = [];
    return j.Children.forEach(t, (i, a) => {
        if (!j.isValidElement(i)) return;
        let u = [...e, a];
        if (i.type === j.Fragment) {
            r.push.apply(r, Nd(i.props.children, u));
            return
        }
        i.type !== Od && jt(!1), !i.props.index || !i.props.children || jt(!1);
        let c = {
            id: i.props.id || u.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (c.children = Nd(i.props.children, u)), r.push(c)
    }), r
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const nC = "6";
try {
    window.__reactRouterVersion = nC
} catch {}
const rC = "startTransition",
    Mg = XS[rC];

function sC(t) {
    let {
        basename: e,
        children: r,
        future: i,
        window: a
    } = t, u = j.useRef();
    u.current == null && (u.current = vE({
        window: a,
        v5Compat: !0
    }));
    let c = u.current,
        [f, h] = j.useState({
            action: c.action,
            location: c.location
        }),
        {
            v7_startTransition: m
        } = i || {},
        g = j.useCallback(y => {
            m && Mg ? Mg(() => h(y)) : h(y)
        }, [h, m]);
    return j.useLayoutEffect(() => c.listen(g), [c, g]), j.useEffect(() => ZE(i), [i]), j.createElement(eC, {
        basename: e,
        children: r,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        future: i
    })
}
var Dg;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(Dg || (Dg = {}));
var jg;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(jg || (jg = {}));

function F0(t, e) {
    return function() {
        return t.apply(e, arguments)
    }
}
const {
    toString: iC
} = Object.prototype, {
    getPrototypeOf: gf
} = Object, {
    iterator: Ll,
    toStringTag: V0
} = Symbol, Ml = (t => e => {
    const r = iC.call(e);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), hn = t => (t = t.toLowerCase(), e => Ml(e) === t), Dl = t => e => typeof e === t, {
    isArray: ii
} = Array, ti = Dl("undefined");

function Ro(t) {
    return t !== null && !ti(t) && t.constructor !== null && !ti(t.constructor) && Lt(t.constructor.isBuffer) && t.constructor.isBuffer(t)
}
const B0 = hn("ArrayBuffer");

function oC(t) {
    let e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && B0(t.buffer), e
}
const aC = Dl("string"),
    Lt = Dl("function"),
    U0 = Dl("number"),
    Ao = t => t !== null && typeof t == "object",
    lC = t => t === !0 || t === !1,
    ol = t => {
        if (Ml(t) !== "object") return !1;
        const e = gf(t);
        return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(V0 in t) && !(Ll in t)
    },
    uC = t => {
        if (!Ao(t) || Ro(t)) return !1;
        try {
            return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype
        } catch {
            return !1
        }
    },
    cC = hn("Date"),
    dC = hn("File"),
    fC = hn("Blob"),
    hC = hn("FileList"),
    pC = t => Ao(t) && Lt(t.pipe),
    mC = t => {
        let e;
        return t && (typeof FormData == "function" && t instanceof FormData || Lt(t.append) && ((e = Ml(t)) === "formdata" || e === "object" && Lt(t.toString) && t.toString() === "[object FormData]"))
    },
    gC = hn("URLSearchParams"),
    [yC, vC, wC, xC] = ["ReadableStream", "Request", "Response", "Headers"].map(hn),
    SC = t => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Oo(t, e, {
    allOwnKeys: r = !1
} = {}) {
    if (t === null || typeof t > "u") return;
    let i, a;
    if (typeof t != "object" && (t = [t]), ii(t))
        for (i = 0, a = t.length; i < a; i++) e.call(null, t[i], i, t);
    else {
        if (Ro(t)) return;
        const u = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            c = u.length;
        let f;
        for (i = 0; i < c; i++) f = u[i], e.call(null, t[f], f, t)
    }
}

function z0(t, e) {
    if (Ro(t)) return null;
    e = e.toLowerCase();
    const r = Object.keys(t);
    let i = r.length,
        a;
    for (; i-- > 0;)
        if (a = r[i], e === a.toLowerCase()) return a;
    return null
}
const Qr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    $0 = t => !ti(t) && t !== Qr;

function Ld() {
    const {
        caseless: t,
        skipUndefined: e
    } = $0(this) && this || {}, r = {}, i = (a, u) => {
        if (u === "__proto__" || u === "constructor" || u === "prototype") return;
        const c = t && z0(r, u) || u;
        ol(r[c]) && ol(a) ? r[c] = Ld(r[c], a) : ol(a) ? r[c] = Ld({}, a) : ii(a) ? r[c] = a.slice() : (!e || !ti(a)) && (r[c] = a)
    };
    for (let a = 0, u = arguments.length; a < u; a++) arguments[a] && Oo(arguments[a], i);
    return r
}
const bC = (t, e, r, {
        allOwnKeys: i
    } = {}) => (Oo(e, (a, u) => {
        r && Lt(a) ? Object.defineProperty(t, u, {
            value: F0(a, r),
            writable: !0,
            enumerable: !0,
            configurable: !0
        }) : Object.defineProperty(t, u, {
            value: a,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }, {
        allOwnKeys: i
    }), t),
    kC = t => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    EC = (t, e, r, i) => {
        t.prototype = Object.create(e.prototype, i), Object.defineProperty(t.prototype, "constructor", {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t, "super", {
            value: e.prototype
        }), r && Object.assign(t.prototype, r)
    },
    CC = (t, e, r, i) => {
        let a, u, c;
        const f = {};
        if (e = e || {}, t == null) return e;
        do {
            for (a = Object.getOwnPropertyNames(t), u = a.length; u-- > 0;) c = a[u], (!i || i(c, t, e)) && !f[c] && (e[c] = t[c], f[c] = !0);
            t = r !== !1 && gf(t)
        } while (t && (!r || r(t, e)) && t !== Object.prototype);
        return e
    },
    TC = (t, e, r) => {
        t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
        const i = t.indexOf(e, r);
        return i !== -1 && i === r
    },
    PC = t => {
        if (!t) return null;
        if (ii(t)) return t;
        let e = t.length;
        if (!U0(e)) return null;
        const r = new Array(e);
        for (; e-- > 0;) r[e] = t[e];
        return r
    },
    _C = (t => e => t && e instanceof t)(typeof Uint8Array < "u" && gf(Uint8Array)),
    RC = (t, e) => {
        const i = (t && t[Ll]).call(t);
        let a;
        for (;
            (a = i.next()) && !a.done;) {
            const u = a.value;
            e.call(t, u[0], u[1])
        }
    },
    AC = (t, e) => {
        let r;
        const i = [];
        for (;
            (r = t.exec(e)) !== null;) i.push(r);
        return i
    },
    OC = hn("HTMLFormElement"),
    NC = t => t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, i, a) {
        return i.toUpperCase() + a
    }),
    Ig = (({
        hasOwnProperty: t
    }) => (e, r) => t.call(e, r))(Object.prototype),
    LC = hn("RegExp"),
    H0 = (t, e) => {
        const r = Object.getOwnPropertyDescriptors(t),
            i = {};
        Oo(r, (a, u) => {
            let c;
            (c = e(a, u, t)) !== !1 && (i[u] = c || a)
        }), Object.defineProperties(t, i)
    },
    MC = t => {
        H0(t, (e, r) => {
            if (Lt(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
            const i = t[r];
            if (Lt(i)) {
                if (e.enumerable = !1, "writable" in e) {
                    e.writable = !1;
                    return
                }
                e.set || (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    DC = (t, e) => {
        const r = {},
            i = a => {
                a.forEach(u => {
                    r[u] = !0
                })
            };
        return ii(t) ? i(t) : i(String(t).split(e)), r
    },
    jC = () => {},
    IC = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;

function FC(t) {
    return !!(t && Lt(t.append) && t[V0] === "FormData" && t[Ll])
}
const VC = t => {
        const e = new Array(10),
            r = (i, a) => {
                if (Ao(i)) {
                    if (e.indexOf(i) >= 0) return;
                    if (Ro(i)) return i;
                    if (!("toJSON" in i)) {
                        e[a] = i;
                        const u = ii(i) ? [] : {};
                        return Oo(i, (c, f) => {
                            const h = r(c, a + 1);
                            !ti(h) && (u[f] = h)
                        }), e[a] = void 0, u
                    }
                }
                return i
            };
        return r(t, 0)
    },
    BC = hn("AsyncFunction"),
    UC = t => t && (Ao(t) || Lt(t)) && Lt(t.then) && Lt(t.catch),
    q0 = ((t, e) => t ? setImmediate : e ? ((r, i) => (Qr.addEventListener("message", ({
        source: a,
        data: u
    }) => {
        a === Qr && u === r && i.length && i.shift()()
    }, !1), a => {
        i.push(a), Qr.postMessage(r, "*")
    }))(`axios@${Math.random()}`, []) : r => setTimeout(r))(typeof setImmediate == "function", Lt(Qr.postMessage)),
    zC = typeof queueMicrotask < "u" ? queueMicrotask.bind(Qr) : typeof process < "u" && process.nextTick || q0,
    $C = t => t != null && Lt(t[Ll]),
    I = {
        isArray: ii,
        isArrayBuffer: B0,
        isBuffer: Ro,
        isFormData: mC,
        isArrayBufferView: oC,
        isString: aC,
        isNumber: U0,
        isBoolean: lC,
        isObject: Ao,
        isPlainObject: ol,
        isEmptyObject: uC,
        isReadableStream: yC,
        isRequest: vC,
        isResponse: wC,
        isHeaders: xC,
        isUndefined: ti,
        isDate: cC,
        isFile: dC,
        isBlob: fC,
        isRegExp: LC,
        isFunction: Lt,
        isStream: pC,
        isURLSearchParams: gC,
        isTypedArray: _C,
        isFileList: hC,
        forEach: Oo,
        merge: Ld,
        extend: bC,
        trim: SC,
        stripBOM: kC,
        inherits: EC,
        toFlatObject: CC,
        kindOf: Ml,
        kindOfTest: hn,
        endsWith: TC,
        toArray: PC,
        forEachEntry: RC,
        matchAll: AC,
        isHTMLForm: OC,
        hasOwnProperty: Ig,
        hasOwnProp: Ig,
        reduceDescriptors: H0,
        freezeMethods: MC,
        toObjectSet: DC,
        toCamelCase: NC,
        noop: jC,
        toFiniteNumber: IC,
        findKey: z0,
        global: Qr,
        isContextDefined: $0,
        isSpecCompliantForm: FC,
        toJSONObject: VC,
        isAsyncFn: BC,
        isThenable: UC,
        setImmediate: q0,
        asap: zC,
        isIterable: $C
    };
let pe = class W0 extends Error {
    static from(e, r, i, a, u, c) {
        const f = new W0(e.message, r || e.code, i, a, u);
        return f.cause = e, f.name = e.name, c && Object.assign(f, c), f
    }
    constructor(e, r, i, a, u) {
        super(e), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), i && (this.config = i), a && (this.request = a), u && (this.response = u, this.status = u.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: I.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
};
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
const HC = null;

function Md(t) {
    return I.isPlainObject(t) || I.isArray(t)
}

function K0(t) {
    return I.endsWith(t, "[]") ? t.slice(0, -2) : t
}

function Fg(t, e, r) {
    return t ? t.concat(e).map(function(a, u) {
        return a = K0(a), !r && u ? "[" + a + "]" : a
    }).join(r ? "." : "") : e
}

function qC(t) {
    return I.isArray(t) && !t.some(Md)
}
const WC = I.toFlatObject(I, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});

function jl(t, e, r) {
    if (!I.isObject(t)) throw new TypeError("target must be an object");
    e = e || new FormData, r = I.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(b, x) {
        return !I.isUndefined(x[b])
    });
    const i = r.metaTokens,
        a = r.visitor || g,
        u = r.dots,
        c = r.indexes,
        h = (r.Blob || typeof Blob < "u" && Blob) && I.isSpecCompliantForm(e);
    if (!I.isFunction(a)) throw new TypeError("visitor must be a function");

    function m(S) {
        if (S === null) return "";
        if (I.isDate(S)) return S.toISOString();
        if (I.isBoolean(S)) return S.toString();
        if (!h && I.isBlob(S)) throw new pe("Blob is not supported. Use a Buffer instead.");
        return I.isArrayBuffer(S) || I.isTypedArray(S) ? h && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
    }

    function g(S, b, x) {
        let R = S;
        if (S && !x && typeof S == "object") {
            if (I.endsWith(b, "{}")) b = i ? b : b.slice(0, -2), S = JSON.stringify(S);
            else if (I.isArray(S) && qC(S) || (I.isFileList(S) || I.endsWith(b, "[]")) && (R = I.toArray(S))) return b = K0(b), R.forEach(function(M, N) {
                !(I.isUndefined(M) || M === null) && e.append(c === !0 ? Fg([b], N, u) : c === null ? b : b + "[]", m(M))
            }), !1
        }
        return Md(S) ? !0 : (e.append(Fg(x, b, u), m(S)), !1)
    }
    const y = [],
        w = Object.assign(WC, {
            defaultVisitor: g,
            convertValue: m,
            isVisitable: Md
        });

    function k(S, b) {
        if (!I.isUndefined(S)) {
            if (y.indexOf(S) !== -1) throw Error("Circular reference detected in " + b.join("."));
            y.push(S), I.forEach(S, function(R, V) {
                (!(I.isUndefined(R) || R === null) && a.call(e, R, I.isString(V) ? V.trim() : V, b, w)) === !0 && k(R, b ? b.concat(V) : [V])
            }), y.pop()
        }
    }
    if (!I.isObject(t)) throw new TypeError("data must be an object");
    return k(t), e
}

function Vg(t) {
    const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(i) {
        return e[i]
    })
}

function yf(t, e) {
    this._pairs = [], t && jl(t, this, e)
}
const Q0 = yf.prototype;
Q0.append = function(e, r) {
    this._pairs.push([e, r])
};
Q0.toString = function(e) {
    const r = e ? function(i) {
        return e.call(this, i, Vg)
    } : Vg;
    return this._pairs.map(function(a) {
        return r(a[0]) + "=" + r(a[1])
    }, "").join("&")
};

function KC(t) {
    return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function G0(t, e, r) {
    if (!e) return t;
    const i = r && r.encode || KC,
        a = I.isFunction(r) ? {
            serialize: r
        } : r,
        u = a && a.serialize;
    let c;
    if (u ? c = u(e, a) : c = I.isURLSearchParams(e) ? e.toString() : new yf(e, a).toString(i), c) {
        const f = t.indexOf("#");
        f !== -1 && (t = t.slice(0, f)), t += (t.indexOf("?") === -1 ? "?" : "&") + c
    }
    return t
}
class Bg {
    constructor() {
        this.handlers = []
    }
    use(e, r, i) {
        return this.handlers.push({
            fulfilled: e,
            rejected: r,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        I.forEach(this.handlers, function(i) {
            i !== null && e(i)
        })
    }
}
const vf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0
    },
    QC = typeof URLSearchParams < "u" ? URLSearchParams : yf,
    GC = typeof FormData < "u" ? FormData : null,
    YC = typeof Blob < "u" ? Blob : null,
    XC = {
        isBrowser: !0,
        classes: {
            URLSearchParams: QC,
            FormData: GC,
            Blob: YC
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    wf = typeof window < "u" && typeof document < "u",
    Dd = typeof navigator == "object" && navigator || void 0,
    JC = wf && (!Dd || ["ReactNative", "NativeScript", "NS"].indexOf(Dd.product) < 0),
    ZC = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    eT = wf && window.location.href || "http://localhost",
    tT = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: wf,
        hasStandardBrowserEnv: JC,
        hasStandardBrowserWebWorkerEnv: ZC,
        navigator: Dd,
        origin: eT
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wt = { ...tT,
        ...XC
    };

function nT(t, e) {
    return jl(t, new wt.classes.URLSearchParams, {
        visitor: function(r, i, a, u) {
            return wt.isNode && I.isBuffer(r) ? (this.append(i, r.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments)
        },
        ...e
    })
}

function rT(t) {
    return I.matchAll(/\w+|\[(\w*)]/g, t).map(e => e[0] === "[]" ? "" : e[1] || e[0])
}

function sT(t) {
    const e = {},
        r = Object.keys(t);
    let i;
    const a = r.length;
    let u;
    for (i = 0; i < a; i++) u = r[i], e[u] = t[u];
    return e
}

function Y0(t) {
    function e(r, i, a, u) {
        let c = r[u++];
        if (c === "__proto__") return !0;
        const f = Number.isFinite(+c),
            h = u >= r.length;
        return c = !c && I.isArray(a) ? a.length : c, h ? (I.hasOwnProp(a, c) ? a[c] = [a[c], i] : a[c] = i, !f) : ((!a[c] || !I.isObject(a[c])) && (a[c] = []), e(r, i, a[c], u) && I.isArray(a[c]) && (a[c] = sT(a[c])), !f)
    }
    if (I.isFormData(t) && I.isFunction(t.entries)) {
        const r = {};
        return I.forEachEntry(t, (i, a) => {
            e(rT(i), a, r, 0)
        }), r
    }
    return null
}

function iT(t, e, r) {
    if (I.isString(t)) try {
        return (e || JSON.parse)(t), I.trim(t)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (r || JSON.stringify)(t)
}
const No = {
    transitional: vf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(e, r) {
        const i = r.getContentType() || "",
            a = i.indexOf("application/json") > -1,
            u = I.isObject(e);
        if (u && I.isHTMLForm(e) && (e = new FormData(e)), I.isFormData(e)) return a ? JSON.stringify(Y0(e)) : e;
        if (I.isArrayBuffer(e) || I.isBuffer(e) || I.isStream(e) || I.isFile(e) || I.isBlob(e) || I.isReadableStream(e)) return e;
        if (I.isArrayBufferView(e)) return e.buffer;
        if (I.isURLSearchParams(e)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let f;
        if (u) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return nT(e, this.formSerializer).toString();
            if ((f = I.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return jl(f ? {
                    "files[]": e
                } : e, h && new h, this.formSerializer)
            }
        }
        return u || a ? (r.setContentType("application/json", !1), iT(e)) : e
    }],
    transformResponse: [function(e) {
        const r = this.transitional || No.transitional,
            i = r && r.forcedJSONParsing,
            a = this.responseType === "json";
        if (I.isResponse(e) || I.isReadableStream(e)) return e;
        if (e && I.isString(e) && (i && !this.responseType || a)) {
            const c = !(r && r.silentJSONParsing) && a;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (f) {
                if (c) throw f.name === "SyntaxError" ? pe.from(f, pe.ERR_BAD_RESPONSE, this, null, this.response) : f
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: wt.classes.FormData,
        Blob: wt.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], t => {
    No.headers[t] = {}
});
const oT = I.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    aT = t => {
        const e = {};
        let r, i, a;
        return t && t.split(`
`).forEach(function(c) {
            a = c.indexOf(":"), r = c.substring(0, a).trim().toLowerCase(), i = c.substring(a + 1).trim(), !(!r || e[r] && oT[r]) && (r === "set-cookie" ? e[r] ? e[r].push(i) : e[r] = [i] : e[r] = e[r] ? e[r] + ", " + i : i)
        }), e
    },
    Ug = Symbol("internals");

function Yi(t) {
    return t && String(t).trim().toLowerCase()
}

function al(t) {
    return t === !1 || t == null ? t : I.isArray(t) ? t.map(al) : String(t)
}

function lT(t) {
    const e = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = r.exec(t);) e[i[1]] = i[2];
    return e
}
const uT = t => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());

function Kc(t, e, r, i, a) {
    if (I.isFunction(i)) return i.call(this, e, r);
    if (a && (e = r), !!I.isString(e)) {
        if (I.isString(i)) return e.indexOf(i) !== -1;
        if (I.isRegExp(i)) return i.test(e)
    }
}

function cT(t) {
    return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, i) => r.toUpperCase() + i)
}

function dT(t, e) {
    const r = I.toCamelCase(" " + e);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(t, i + r, {
            value: function(a, u, c) {
                return this[i].call(this, e, a, u, c)
            },
            configurable: !0
        })
    })
}
let Mt = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, r, i) {
        const a = this;

        function u(f, h, m) {
            const g = Yi(h);
            if (!g) throw new Error("header name must be a non-empty string");
            const y = I.findKey(a, g);
            (!y || a[y] === void 0 || m === !0 || m === void 0 && a[y] !== !1) && (a[y || h] = al(f))
        }
        const c = (f, h) => I.forEach(f, (m, g) => u(m, g, h));
        if (I.isPlainObject(e) || e instanceof this.constructor) c(e, r);
        else if (I.isString(e) && (e = e.trim()) && !uT(e)) c(aT(e), r);
        else if (I.isObject(e) && I.isIterable(e)) {
            let f = {},
                h, m;
            for (const g of e) {
                if (!I.isArray(g)) throw TypeError("Object iterator must return a key-value pair");
                f[m = g[0]] = (h = f[m]) ? I.isArray(h) ? [...h, g[1]] : [h, g[1]] : g[1]
            }
            c(f, r)
        } else e != null && u(r, e, i);
        return this
    }
    get(e, r) {
        if (e = Yi(e), e) {
            const i = I.findKey(this, e);
            if (i) {
                const a = this[i];
                if (!r) return a;
                if (r === !0) return lT(a);
                if (I.isFunction(r)) return r.call(this, a, i);
                if (I.isRegExp(r)) return r.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, r) {
        if (e = Yi(e), e) {
            const i = I.findKey(this, e);
            return !!(i && this[i] !== void 0 && (!r || Kc(this, this[i], i, r)))
        }
        return !1
    }
    delete(e, r) {
        const i = this;
        let a = !1;

        function u(c) {
            if (c = Yi(c), c) {
                const f = I.findKey(i, c);
                f && (!r || Kc(i, i[f], f, r)) && (delete i[f], a = !0)
            }
        }
        return I.isArray(e) ? e.forEach(u) : u(e), a
    }
    clear(e) {
        const r = Object.keys(this);
        let i = r.length,
            a = !1;
        for (; i--;) {
            const u = r[i];
            (!e || Kc(this, this[u], u, e, !0)) && (delete this[u], a = !0)
        }
        return a
    }
    normalize(e) {
        const r = this,
            i = {};
        return I.forEach(this, (a, u) => {
            const c = I.findKey(i, u);
            if (c) {
                r[c] = al(a), delete r[u];
                return
            }
            const f = e ? cT(u) : String(u).trim();
            f !== u && delete r[u], r[f] = al(a), i[f] = !0
        }), this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const r = Object.create(null);
        return I.forEach(this, (i, a) => {
            i != null && i !== !1 && (r[a] = e && I.isArray(i) ? i.join(", ") : i)
        }), r
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...r) {
        const i = new this(e);
        return r.forEach(a => i.set(a)), i
    }
    static accessor(e) {
        const i = (this[Ug] = this[Ug] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function u(c) {
            const f = Yi(c);
            i[f] || (dT(a, c), i[f] = !0)
        }
        return I.isArray(e) ? e.forEach(u) : u(e), this
    }
};
Mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
I.reduceDescriptors(Mt.prototype, ({
    value: t
}, e) => {
    let r = e[0].toUpperCase() + e.slice(1);
    return {
        get: () => t,
        set(i) {
            this[r] = i
        }
    }
});
I.freezeMethods(Mt);

function Qc(t, e) {
    const r = this || No,
        i = e || r,
        a = Mt.from(i.headers);
    let u = i.data;
    return I.forEach(t, function(f) {
        u = f.call(r, u, a.normalize(), e ? e.status : void 0)
    }), a.normalize(), u
}

function X0(t) {
    return !!(t && t.__CANCEL__)
}
let Lo = class extends pe {
    constructor(e, r, i) {
        super(e ? ? "canceled", pe.ERR_CANCELED, r, i), this.name = "CanceledError", this.__CANCEL__ = !0
    }
};

function J0(t, e, r) {
    const i = r.config.validateStatus;
    !r.status || !i || i(r.status) ? t(r) : e(new pe("Request failed with status code " + r.status, [pe.ERR_BAD_REQUEST, pe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}

function fT(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return e && e[1] || ""
}

function hT(t, e) {
    t = t || 10;
    const r = new Array(t),
        i = new Array(t);
    let a = 0,
        u = 0,
        c;
    return e = e !== void 0 ? e : 1e3,
        function(h) {
            const m = Date.now(),
                g = i[u];
            c || (c = m), r[a] = h, i[a] = m;
            let y = u,
                w = 0;
            for (; y !== a;) w += r[y++], y = y % t;
            if (a = (a + 1) % t, a === u && (u = (u + 1) % t), m - c < e) return;
            const k = g && m - g;
            return k ? Math.round(w * 1e3 / k) : void 0
        }
}

function pT(t, e) {
    let r = 0,
        i = 1e3 / e,
        a, u;
    const c = (m, g = Date.now()) => {
        r = g, a = null, u && (clearTimeout(u), u = null), t(...m)
    };
    return [(...m) => {
        const g = Date.now(),
            y = g - r;
        y >= i ? c(m, g) : (a = m, u || (u = setTimeout(() => {
            u = null, c(a)
        }, i - y)))
    }, () => a && c(a)]
}
const Sl = (t, e, r = 3) => {
        let i = 0;
        const a = hT(50, 250);
        return pT(u => {
            const c = u.loaded,
                f = u.lengthComputable ? u.total : void 0,
                h = c - i,
                m = a(h),
                g = c <= f;
            i = c;
            const y = {
                loaded: c,
                total: f,
                progress: f ? c / f : void 0,
                bytes: h,
                rate: m || void 0,
                estimated: m && f && g ? (f - c) / m : void 0,
                event: u,
                lengthComputable: f != null,
                [e ? "download" : "upload"]: !0
            };
            t(y)
        }, r)
    },
    zg = (t, e) => {
        const r = t != null;
        return [i => e[0]({
            lengthComputable: r,
            total: t,
            loaded: i
        }), e[1]]
    },
    $g = t => (...e) => I.asap(() => t(...e)),
    mT = wt.hasStandardBrowserEnv ? ((t, e) => r => (r = new URL(r, wt.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(new URL(wt.origin), wt.navigator && /(msie|trident)/i.test(wt.navigator.userAgent)) : () => !0,
    gT = wt.hasStandardBrowserEnv ? {
        write(t, e, r, i, a, u, c) {
            if (typeof document > "u") return;
            const f = [`${t}=${encodeURIComponent(e)}`];
            I.isNumber(r) && f.push(`expires=${new Date(r).toUTCString()}`), I.isString(i) && f.push(`path=${i}`), I.isString(a) && f.push(`domain=${a}`), u === !0 && f.push("secure"), I.isString(c) && f.push(`SameSite=${c}`), document.cookie = f.join("; ")
        },
        read(t) {
            if (typeof document > "u") return null;
            const e = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : null
        },
        remove(t) {
            this.write(t, "", Date.now() - 864e5, "/")
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function yT(t) {
    return typeof t != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
}

function vT(t, e) {
    return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t
}

function Z0(t, e, r) {
    let i = !yT(e);
    return t && (i || r == !1) ? vT(t, e) : e
}
const Hg = t => t instanceof Mt ? { ...t
} : t;

function ls(t, e) {
    e = e || {};
    const r = {};

    function i(m, g, y, w) {
        return I.isPlainObject(m) && I.isPlainObject(g) ? I.merge.call({
            caseless: w
        }, m, g) : I.isPlainObject(g) ? I.merge({}, g) : I.isArray(g) ? g.slice() : g
    }

    function a(m, g, y, w) {
        if (I.isUndefined(g)) {
            if (!I.isUndefined(m)) return i(void 0, m, y, w)
        } else return i(m, g, y, w)
    }

    function u(m, g) {
        if (!I.isUndefined(g)) return i(void 0, g)
    }

    function c(m, g) {
        if (I.isUndefined(g)) {
            if (!I.isUndefined(m)) return i(void 0, m)
        } else return i(void 0, g)
    }

    function f(m, g, y) {
        if (y in e) return i(m, g);
        if (y in t) return i(void 0, m)
    }
    const h = {
        url: u,
        method: u,
        data: u,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: f,
        headers: (m, g, y) => a(Hg(m), Hg(g), y, !0)
    };
    return I.forEach(Object.keys({ ...t,
        ...e
    }), function(g) {
        if (g === "__proto__" || g === "constructor" || g === "prototype") return;
        const y = I.hasOwnProp(h, g) ? h[g] : a,
            w = y(t[g], e[g], g);
        I.isUndefined(w) && y !== f || (r[g] = w)
    }), r
}
const ew = t => {
        const e = ls({}, t);
        let {
            data: r,
            withXSRFToken: i,
            xsrfHeaderName: a,
            xsrfCookieName: u,
            headers: c,
            auth: f
        } = e;
        if (e.headers = c = Mt.from(c), e.url = G0(Z0(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), f && c.set("Authorization", "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))), I.isFormData(r)) {
            if (wt.hasStandardBrowserEnv || wt.hasStandardBrowserWebWorkerEnv) c.setContentType(void 0);
            else if (I.isFunction(r.getHeaders)) {
                const h = r.getHeaders(),
                    m = ["content-type", "content-length"];
                Object.entries(h).forEach(([g, y]) => {
                    m.includes(g.toLowerCase()) && c.set(g, y)
                })
            }
        }
        if (wt.hasStandardBrowserEnv && (i && I.isFunction(i) && (i = i(e)), i || i !== !1 && mT(e.url))) {
            const h = a && u && gT.read(u);
            h && c.set(a, h)
        }
        return e
    },
    wT = typeof XMLHttpRequest < "u",
    xT = wT && function(t) {
        return new Promise(function(r, i) {
            const a = ew(t);
            let u = a.data;
            const c = Mt.from(a.headers).normalize();
            let {
                responseType: f,
                onUploadProgress: h,
                onDownloadProgress: m
            } = a, g, y, w, k, S;

            function b() {
                k && k(), S && S(), a.cancelToken && a.cancelToken.unsubscribe(g), a.signal && a.signal.removeEventListener("abort", g)
            }
            let x = new XMLHttpRequest;
            x.open(a.method.toUpperCase(), a.url, !0), x.timeout = a.timeout;

            function R() {
                if (!x) return;
                const M = Mt.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()),
                    B = {
                        data: !f || f === "text" || f === "json" ? x.responseText : x.response,
                        status: x.status,
                        statusText: x.statusText,
                        headers: M,
                        config: t,
                        request: x
                    };
                J0(function(G) {
                    r(G), b()
                }, function(G) {
                    i(G), b()
                }, B), x = null
            }
            "onloadend" in x ? x.onloadend = R : x.onreadystatechange = function() {
                !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(R)
            }, x.onabort = function() {
                x && (i(new pe("Request aborted", pe.ECONNABORTED, t, x)), x = null)
            }, x.onerror = function(N) {
                const B = N && N.message ? N.message : "Network Error",
                    K = new pe(B, pe.ERR_NETWORK, t, x);
                K.event = N || null, i(K), x = null
            }, x.ontimeout = function() {
                let N = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
                const B = a.transitional || vf;
                a.timeoutErrorMessage && (N = a.timeoutErrorMessage), i(new pe(N, B.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED, t, x)), x = null
            }, u === void 0 && c.setContentType(null), "setRequestHeader" in x && I.forEach(c.toJSON(), function(N, B) {
                x.setRequestHeader(B, N)
            }), I.isUndefined(a.withCredentials) || (x.withCredentials = !!a.withCredentials), f && f !== "json" && (x.responseType = a.responseType), m && ([w, S] = Sl(m, !0), x.addEventListener("progress", w)), h && x.upload && ([y, k] = Sl(h), x.upload.addEventListener("progress", y), x.upload.addEventListener("loadend", k)), (a.cancelToken || a.signal) && (g = M => {
                x && (i(!M || M.type ? new Lo(null, t, x) : M), x.abort(), x = null)
            }, a.cancelToken && a.cancelToken.subscribe(g), a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
            const V = fT(a.url);
            if (V && wt.protocols.indexOf(V) === -1) {
                i(new pe("Unsupported protocol " + V + ":", pe.ERR_BAD_REQUEST, t));
                return
            }
            x.send(u || null)
        })
    },
    ST = (t, e) => {
        const {
            length: r
        } = t = t ? t.filter(Boolean) : [];
        if (e || r) {
            let i = new AbortController,
                a;
            const u = function(m) {
                if (!a) {
                    a = !0, f();
                    const g = m instanceof Error ? m : this.reason;
                    i.abort(g instanceof pe ? g : new Lo(g instanceof Error ? g.message : g))
                }
            };
            let c = e && setTimeout(() => {
                c = null, u(new pe(`timeout of ${e}ms exceeded`, pe.ETIMEDOUT))
            }, e);
            const f = () => {
                t && (c && clearTimeout(c), c = null, t.forEach(m => {
                    m.unsubscribe ? m.unsubscribe(u) : m.removeEventListener("abort", u)
                }), t = null)
            };
            t.forEach(m => m.addEventListener("abort", u));
            const {
                signal: h
            } = i;
            return h.unsubscribe = () => I.asap(f), h
        }
    },
    bT = function*(t, e) {
        let r = t.byteLength;
        if (r < e) {
            yield t;
            return
        }
        let i = 0,
            a;
        for (; i < r;) a = i + e, yield t.slice(i, a), i = a
    },
    kT = async function*(t, e) {
        for await (const r of ET(t)) yield* bT(r, e)
    },
    ET = async function*(t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return
        }
        const e = t.getReader();
        try {
            for (;;) {
                const {
                    done: r,
                    value: i
                } = await e.read();
                if (r) break;
                yield i
            }
        } finally {
            await e.cancel()
        }
    },
    qg = (t, e, r, i) => {
        const a = kT(t, e);
        let u = 0,
            c, f = h => {
                c || (c = !0, i && i(h))
            };
        return new ReadableStream({
            async pull(h) {
                try {
                    const {
                        done: m,
                        value: g
                    } = await a.next();
                    if (m) {
                        f(), h.close();
                        return
                    }
                    let y = g.byteLength;
                    if (r) {
                        let w = u += y;
                        r(w)
                    }
                    h.enqueue(new Uint8Array(g))
                } catch (m) {
                    throw f(m), m
                }
            },
            cancel(h) {
                return f(h), a.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    Wg = 64 * 1024,
    {
        isFunction: Xa
    } = I,
    CT = (({
        Request: t,
        Response: e
    }) => ({
        Request: t,
        Response: e
    }))(I.global),
    {
        ReadableStream: Kg,
        TextEncoder: Qg
    } = I.global,
    Gg = (t, ...e) => {
        try {
            return !!t(...e)
        } catch {
            return !1
        }
    },
    TT = t => {
        t = I.merge.call({
            skipUndefined: !0
        }, CT, t);
        const {
            fetch: e,
            Request: r,
            Response: i
        } = t, a = e ? Xa(e) : typeof fetch == "function", u = Xa(r), c = Xa(i);
        if (!a) return !1;
        const f = a && Xa(Kg),
            h = a && (typeof Qg == "function" ? (S => b => S.encode(b))(new Qg) : async S => new Uint8Array(await new r(S).arrayBuffer())),
            m = u && f && Gg(() => {
                let S = !1;
                const b = new r(wt.origin, {
                    body: new Kg,
                    method: "POST",
                    get duplex() {
                        return S = !0, "half"
                    }
                }).headers.has("Content-Type");
                return S && !b
            }),
            g = c && f && Gg(() => I.isReadableStream(new i("").body)),
            y = {
                stream: g && (S => S.body)
            };
        a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(S => {
            !y[S] && (y[S] = (b, x) => {
                let R = b && b[S];
                if (R) return R.call(b);
                throw new pe(`Response type '${S}' is not supported`, pe.ERR_NOT_SUPPORT, x)
            })
        });
        const w = async S => {
                if (S == null) return 0;
                if (I.isBlob(S)) return S.size;
                if (I.isSpecCompliantForm(S)) return (await new r(wt.origin, {
                    method: "POST",
                    body: S
                }).arrayBuffer()).byteLength;
                if (I.isArrayBufferView(S) || I.isArrayBuffer(S)) return S.byteLength;
                if (I.isURLSearchParams(S) && (S = S + ""), I.isString(S)) return (await h(S)).byteLength
            },
            k = async (S, b) => {
                const x = I.toFiniteNumber(S.getContentLength());
                return x ? ? w(b)
            };
        return async S => {
            let {
                url: b,
                method: x,
                data: R,
                signal: V,
                cancelToken: M,
                timeout: N,
                onDownloadProgress: B,
                onUploadProgress: K,
                responseType: G,
                headers: F,
                withCredentials: J = "same-origin",
                fetchOptions: ee
            } = ew(S), Ce = e || fetch;
            G = G ? (G + "").toLowerCase() : "text";
            let Le = ST([V, M && M.toAbortSignal()], N),
                Me = null;
            const Re = Le && Le.unsubscribe && (() => {
                Le.unsubscribe()
            });
            let je;
            try {
                if (K && m && x !== "get" && x !== "head" && (je = await k(F, R)) !== 0) {
                    let A = new r(b, {
                            method: "POST",
                            body: R,
                            duplex: "half"
                        }),
                        z;
                    if (I.isFormData(R) && (z = A.headers.get("content-type")) && F.setContentType(z), A.body) {
                        const [ge, ye] = zg(je, Sl($g(K)));
                        R = qg(A.body, Wg, ge, ye)
                    }
                }
                I.isString(J) || (J = J ? "include" : "omit");
                const we = u && "credentials" in r.prototype,
                    fe = { ...ee,
                        signal: Le,
                        method: x.toUpperCase(),
                        headers: F.normalize().toJSON(),
                        body: R,
                        duplex: "half",
                        credentials: we ? J : void 0
                    };
                Me = u && new r(b, fe);
                let W = await (u ? Ce(Me, ee) : Ce(b, fe));
                const ie = g && (G === "stream" || G === "response");
                if (g && (B || ie && Re)) {
                    const A = {};
                    ["status", "statusText", "headers"].forEach(ue => {
                        A[ue] = W[ue]
                    });
                    const z = I.toFiniteNumber(W.headers.get("content-length")),
                        [ge, ye] = B && zg(z, Sl($g(B), !0)) || [];
                    W = new i(qg(W.body, Wg, ge, () => {
                        ye && ye(), Re && Re()
                    }), A)
                }
                G = G || "text";
                let U = await y[I.findKey(y, G) || "text"](W, S);
                return !ie && Re && Re(), await new Promise((A, z) => {
                    J0(A, z, {
                        data: U,
                        headers: Mt.from(W.headers),
                        status: W.status,
                        statusText: W.statusText,
                        config: S,
                        request: Me
                    })
                })
            } catch (we) {
                throw Re && Re(), we && we.name === "TypeError" && /Load failed|fetch/i.test(we.message) ? Object.assign(new pe("Network Error", pe.ERR_NETWORK, S, Me, we && we.response), {
                    cause: we.cause || we
                }) : pe.from(we, we && we.code, S, Me, we && we.response)
            }
        }
    },
    PT = new Map,
    tw = t => {
        let e = t && t.env || {};
        const {
            fetch: r,
            Request: i,
            Response: a
        } = e, u = [i, a, r];
        let c = u.length,
            f = c,
            h, m, g = PT;
        for (; f--;) h = u[f], m = g.get(h), m === void 0 && g.set(h, m = f ? new Map : TT(e)), g = m;
        return m
    };
tw();
const xf = {
    http: HC,
    xhr: xT,
    fetch: {
        get: tw
    }
};
I.forEach(xf, (t, e) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", {
                value: e
            })
        } catch {}
        Object.defineProperty(t, "adapterName", {
            value: e
        })
    }
});
const Yg = t => `- ${t}`,
    _T = t => I.isFunction(t) || t === null || t === !1;

function RT(t, e) {
    t = I.isArray(t) ? t : [t];
    const {
        length: r
    } = t;
    let i, a;
    const u = {};
    for (let c = 0; c < r; c++) {
        i = t[c];
        let f;
        if (a = i, !_T(i) && (a = xf[(f = String(i)).toLowerCase()], a === void 0)) throw new pe(`Unknown adapter '${f}'`);
        if (a && (I.isFunction(a) || (a = a.get(e)))) break;
        u[f || "#" + c] = a
    }
    if (!a) {
        const c = Object.entries(u).map(([h, m]) => `adapter ${h} ` + (m === !1 ? "is not supported by the environment" : "is not available in the build"));
        let f = r ? c.length > 1 ? `since :
` + c.map(Yg).join(`
`) : " " + Yg(c[0]) : "as no adapter specified";
        throw new pe("There is no suitable adapter to dispatch the request " + f, "ERR_NOT_SUPPORT")
    }
    return a
}
const nw = {
    getAdapter: RT,
    adapters: xf
};

function Gc(t) {
    if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new Lo(null, t)
}

function Xg(t) {
    return Gc(t), t.headers = Mt.from(t.headers), t.data = Qc.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), nw.getAdapter(t.adapter || No.adapter, t)(t).then(function(i) {
        return Gc(t), i.data = Qc.call(t, t.transformResponse, i), i.headers = Mt.from(i.headers), i
    }, function(i) {
        return X0(i) || (Gc(t), i && i.response && (i.response.data = Qc.call(t, t.transformResponse, i.response), i.response.headers = Mt.from(i.response.headers))), Promise.reject(i)
    })
}
const rw = "1.13.5",
    Il = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
    Il[t] = function(i) {
        return typeof i === t || "a" + (e < 1 ? "n " : " ") + t
    }
});
const Jg = {};
Il.transitional = function(e, r, i) {
    function a(u, c) {
        return "[Axios v" + rw + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "")
    }
    return (u, c, f) => {
        if (e === !1) throw new pe(a(c, " has been removed" + (r ? " in " + r : "")), pe.ERR_DEPRECATED);
        return r && !Jg[c] && (Jg[c] = !0, console.warn(a(c, " has been deprecated since v" + r + " and will be removed in the near future"))), e ? e(u, c, f) : !0
    }
};
Il.spelling = function(e) {
    return (r, i) => (console.warn(`${i} is likely a misspelling of ${e}`), !0)
};

function AT(t, e, r) {
    if (typeof t != "object") throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(t);
    let a = i.length;
    for (; a-- > 0;) {
        const u = i[a],
            c = e[u];
        if (c) {
            const f = t[u],
                h = f === void 0 || c(f, u, t);
            if (h !== !0) throw new pe("option " + u + " must be " + h, pe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new pe("Unknown option " + u, pe.ERR_BAD_OPTION)
    }
}
const ll = {
        assertOptions: AT,
        validators: Il
    },
    Gt = ll.validators;
let is = class {
    constructor(e) {
        this.defaults = e || {}, this.interceptors = {
            request: new Bg,
            response: new Bg
        }
    }
    async request(e, r) {
        try {
            return await this._request(e, r)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? u && !String(i.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + u) : i.stack = u
                } catch {}
            }
            throw i
        }
    }
    _request(e, r) {
        typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = ls(this.defaults, r);
        const {
            transitional: i,
            paramsSerializer: a,
            headers: u
        } = r;
        i !== void 0 && ll.assertOptions(i, {
            silentJSONParsing: Gt.transitional(Gt.boolean),
            forcedJSONParsing: Gt.transitional(Gt.boolean),
            clarifyTimeoutError: Gt.transitional(Gt.boolean),
            legacyInterceptorReqResOrdering: Gt.transitional(Gt.boolean)
        }, !1), a != null && (I.isFunction(a) ? r.paramsSerializer = {
            serialize: a
        } : ll.assertOptions(a, {
            encode: Gt.function,
            serialize: Gt.function
        }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ll.assertOptions(r, {
            baseUrl: Gt.spelling("baseURL"),
            withXsrfToken: Gt.spelling("withXSRFToken")
        }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let c = u && I.merge(u.common, u[r.method]);
        u && I.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
            delete u[S]
        }), r.headers = Mt.concat(c, u);
        const f = [];
        let h = !0;
        this.interceptors.request.forEach(function(b) {
            if (typeof b.runWhen == "function" && b.runWhen(r) === !1) return;
            h = h && b.synchronous;
            const x = r.transitional || vf;
            x && x.legacyInterceptorReqResOrdering ? f.unshift(b.fulfilled, b.rejected) : f.push(b.fulfilled, b.rejected)
        });
        const m = [];
        this.interceptors.response.forEach(function(b) {
            m.push(b.fulfilled, b.rejected)
        });
        let g, y = 0,
            w;
        if (!h) {
            const S = [Xg.bind(this), void 0];
            for (S.unshift(...f), S.push(...m), w = S.length, g = Promise.resolve(r); y < w;) g = g.then(S[y++], S[y++]);
            return g
        }
        w = f.length;
        let k = r;
        for (; y < w;) {
            const S = f[y++],
                b = f[y++];
            try {
                k = S(k)
            } catch (x) {
                b.call(this, x);
                break
            }
        }
        try {
            g = Xg.call(this, k)
        } catch (S) {
            return Promise.reject(S)
        }
        for (y = 0, w = m.length; y < w;) g = g.then(m[y++], m[y++]);
        return g
    }
    getUri(e) {
        e = ls(this.defaults, e);
        const r = Z0(e.baseURL, e.url, e.allowAbsoluteUrls);
        return G0(r, e.params, e.paramsSerializer)
    }
};
I.forEach(["delete", "get", "head", "options"], function(e) {
    is.prototype[e] = function(r, i) {
        return this.request(ls(i || {}, {
            method: e,
            url: r,
            data: (i || {}).data
        }))
    }
});
I.forEach(["post", "put", "patch"], function(e) {
    function r(i) {
        return function(u, c, f) {
            return this.request(ls(f || {}, {
                method: e,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: u,
                data: c
            }))
        }
    }
    is.prototype[e] = r(), is.prototype[e + "Form"] = r(!0)
});
let OT = class sw {
    constructor(e) {
        if (typeof e != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(u) {
            r = u
        });
        const i = this;
        this.promise.then(a => {
            if (!i._listeners) return;
            let u = i._listeners.length;
            for (; u-- > 0;) i._listeners[u](a);
            i._listeners = null
        }), this.promise.then = a => {
            let u;
            const c = new Promise(f => {
                i.subscribe(f), u = f
            }).then(a);
            return c.cancel = function() {
                i.unsubscribe(u)
            }, c
        }, e(function(u, c, f) {
            i.reason || (i.reason = new Lo(u, c, f), r(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(e);
        r !== -1 && this._listeners.splice(r, 1)
    }
    toAbortSignal() {
        const e = new AbortController,
            r = i => {
                e.abort(i)
            };
        return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal
    }
    static source() {
        let e;
        return {
            token: new sw(function(a) {
                e = a
            }),
            cancel: e
        }
    }
};

function NT(t) {
    return function(r) {
        return t.apply(null, r)
    }
}

function LT(t) {
    return I.isObject(t) && t.isAxiosError === !0
}
const jd = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(jd).forEach(([t, e]) => {
    jd[e] = t
});

function iw(t) {
    const e = new is(t),
        r = F0(is.prototype.request, e);
    return I.extend(r, is.prototype, e, {
        allOwnKeys: !0
    }), I.extend(r, e, null, {
        allOwnKeys: !0
    }), r.create = function(a) {
        return iw(ls(t, a))
    }, r
}
const Xe = iw(No);
Xe.Axios = is;
Xe.CanceledError = Lo;
Xe.CancelToken = OT;
Xe.isCancel = X0;
Xe.VERSION = rw;
Xe.toFormData = jl;
Xe.AxiosError = pe;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(e) {
    return Promise.all(e)
};
Xe.spread = NT;
Xe.isAxiosError = LT;
Xe.mergeConfig = ls;
Xe.AxiosHeaders = Mt;
Xe.formToJSON = t => Y0(I.isHTMLForm(t) ? new FormData(t) : t);
Xe.getAdapter = nw.getAdapter;
Xe.HttpStatusCode = jd;
Xe.default = Xe;
const {
    Axios: pN,
    AxiosError: mN,
    CanceledError: gN,
    isCancel: yN,
    CancelToken: vN,
    VERSION: wN,
    all: xN,
    Cancel: SN,
    isAxiosError: bN,
    spread: kN,
    toFormData: EN,
    AxiosHeaders: CN,
    HttpStatusCode: TN,
    formToJSON: PN,
    getAdapter: _N,
    mergeConfig: RN
} = Xe, MT = typeof window > "u", Zg = !MT && window.self !== window.top, Yc = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), ut = [];
for (let t = 0; t < 256; ++t) ut.push((t + 256).toString(16).slice(1));

function DT(t, e = 0) {
    return (ut[t[e + 0]] + ut[t[e + 1]] + ut[t[e + 2]] + ut[t[e + 3]] + "-" + ut[t[e + 4]] + ut[t[e + 5]] + "-" + ut[t[e + 6]] + ut[t[e + 7]] + "-" + ut[t[e + 8]] + ut[t[e + 9]] + "-" + ut[t[e + 10]] + ut[t[e + 11]] + ut[t[e + 12]] + ut[t[e + 13]] + ut[t[e + 14]] + ut[t[e + 15]]).toLowerCase()
}
let Xc;
const jT = new Uint8Array(16);

function IT() {
    if (!Xc) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Xc = crypto.getRandomValues.bind(crypto)
    }
    return Xc(jT)
}
const FT = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    ey = {
        randomUUID: FT
    };

function VT(t, e, r) {
    var a;
    t = t || {};
    const i = t.random ? ? ((a = t.rng) == null ? void 0 : a.call(t)) ? ? IT();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, DT(i)
}

function BT(t, e, r) {
    return ey.randomUUID && !t ? ey.randomUUID() : VT(t)
}
class UT extends Error {
    constructor(e, r, i, a, u) {
        super(e), this.name = "Base44Error", this.status = r, this.code = i, this.data = a, this.originalError = u
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function to({
    baseURL: t,
    headers: e = {},
    token: r,
    interceptResponses: i = !0,
    onError: a
}) {
    const u = Xe.create({
        baseURL: t,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...e
        }
    });
    return r && (u.defaults.headers.common.Authorization = `Bearer ${r}`), u.interceptors.request.use(c => {
        typeof window < "u" && c.headers.set("X-Origin-URL", window.location.href);
        const f = BT();
        if (c.requestId = f, Zg) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: f,
                data: {
                    url: t + c.url,
                    method: c.method,
                    body: c.data instanceof FormData ? "[FormData object]" : c.data
                }
            }, "*")
        } catch {}
        return c
    }), i && u.interceptors.response.use(c => {
        var f;
        const h = (f = c.config) === null || f === void 0 ? void 0 : f.requestId;
        try {
            Zg && h && window.parent.postMessage({
                type: "api-request-end",
                requestId: h,
                data: {
                    statusCode: c.status,
                    response: c.data
                }
            }, "*")
        } catch {}
        return c.data
    }, c => {
        var f, h, m, g, y, w, k, S;
        const b = ((h = (f = c.response) === null || f === void 0 ? void 0 : f.data) === null || h === void 0 ? void 0 : h.message) || ((g = (m = c.response) === null || m === void 0 ? void 0 : m.data) === null || g === void 0 ? void 0 : g.detail) || c.message,
            x = new UT(b, (y = c.response) === null || y === void 0 ? void 0 : y.status, (k = (w = c.response) === null || w === void 0 ? void 0 : w.data) === null || k === void 0 ? void 0 : k.code, (S = c.response) === null || S === void 0 ? void 0 : S.data, c);
        return a == null || a(x), Promise.reject(x)
    }), u
}

function ty(t) {
    const {
        axios: e,
        appId: r,
        getSocket: i
    } = t;
    return new Proxy({}, {
        get(a, u) {
            if (!(typeof u != "string" || u === "then" || u.startsWith("_"))) return $T(e, r, u, i)
        }
    })
}

function zT(t) {
    var e;
    try {
        const r = JSON.parse(t);
        return {
            type: r.type,
            data: r.data,
            id: r.id || ((e = r.data) === null || e === void 0 ? void 0 : e.id),
            timestamp: r.timestamp || new Date().toISOString()
        }
    } catch (r) {
        return console.warn("[Base44 SDK] Failed to parse realtime message:", r), null
    }
}

function $T(t, e, r, i) {
    const a = `/apps/${e}/entities/${r}`;
    return {
        async list(u, c, f, h) {
            const m = {};
            return u && (m.sort = u), c && (m.limit = c), f && (m.skip = f), h && (m.fields = Array.isArray(h) ? h.join(",") : h), t.get(a, {
                params: m
            })
        },
        async filter(u, c, f, h, m) {
            const g = {
                q: JSON.stringify(u)
            };
            return c && (g.sort = c), f && (g.limit = f), h && (g.skip = h), m && (g.fields = Array.isArray(m) ? m.join(",") : m), t.get(a, {
                params: g
            })
        },
        async get(u) {
            return t.get(`${a}/${u}`)
        },
        async create(u) {
            return t.post(a, u)
        },
        async update(u, c) {
            return t.put(`${a}/${u}`, c)
        },
        async delete(u) {
            return t.delete(`${a}/${u}`)
        },
        async deleteMany(u) {
            return t.delete(a, {
                data: u
            })
        },
        async bulkCreate(u) {
            return t.post(`${a}/bulk`, u)
        },
        async updateMany(u, c) {
            return t.patch(`${a}/update-many`, {
                query: u,
                data: c
            })
        },
        async bulkUpdate(u) {
            return t.put(`${a}/bulk`, u)
        },
        async importEntities(u) {
            const c = new FormData;
            return c.append("file", u, u.name), t.post(`${a}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        subscribe(u) {
            const c = `entities:${e}:${r}`;
            return i().subscribeToRoom(c, {
                update_model: m => {
                    const g = zT(m.data);
                    if (g) try {
                        u(g)
                    } catch (y) {
                        console.error("[Base44 SDK] Subscription callback error:", y)
                    }
                }
            })
        }
    }
}

function HT(t, e) {
    return {
        async call(r, i, a) {
            if (!(r != null && r.trim())) throw new Error("Integration slug is required and cannot be empty");
            if (!(i != null && i.trim())) throw new Error("Operation ID is required and cannot be empty");
            const {
                pathParams: u,
                queryParams: c,
                ...f
            } = a ? ? {}, h = { ...f,
                ...u && {
                    path_params: u
                },
                ...c && {
                    query_params: c
                }
            };
            return await t.post(`/apps/${e}/integrations/custom/${r}/${i}`, h)
        }
    }
}

function ny(t, e) {
    const r = HT(t, e);
    return new Proxy({}, {
        get(i, a) {
            if (!(typeof a != "string" || a === "then" || a.startsWith("_"))) return a === "custom" ? r : new Proxy({}, {
                get(u, c) {
                    if (!(typeof c != "string" || c === "then" || c.startsWith("_"))) return async f => {
                        if (typeof f == "string") throw new Error(`Integration ${c} must receive an object with named parameters, received: ${f}`);
                        let h, m;
                        return f instanceof FormData || f && Object.values(f).some(g => g instanceof File) ? (h = new FormData, Object.keys(f).forEach(g => {
                            f[g] instanceof File ? h.append(g, f[g], f[g].name) : typeof f[g] == "object" && f[g] !== null ? h.append(g, JSON.stringify(f[g])) : h.append(g, f[g])
                        }), m = "multipart/form-data") : (h = f, m = "application/json"), a === "Core" ? t.post(`/apps/${e}/integration-endpoints/Core/${c}`, h || f, {
                            headers: {
                                "Content-Type": m
                            }
                        }) : t.post(`/apps/${e}/integration-endpoints/installable/${a}/integration-endpoints/${c}`, h || f, {
                            headers: {
                                "Content-Type": m
                            }
                        })
                    }
                }
            })
        }
    })
}

function qT(t, e, r, i) {
    return {
        async me() {
            return t.get(`/apps/${r}/entities/User/me`)
        },
        async updateMe(a) {
            return t.put(`/apps/${r}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const u = a ? new URL(a, window.location.origin).toString() : window.location.href,
                c = `${i.appBaseUrl}/login?from_url=${encodeURIComponent(u)}`;
            window.location.href = c
        },
        loginWithProvider(a, u = "/") {
            const c = new URL(u, window.location.origin).toString(),
                f = `app_id=${r}&from_url=${encodeURIComponent(c)}`;
            let h;
            a === "sso" ? h = `/apps/${r}/auth/sso/login` : h = `/apps/auth${a==="google"?"":`/${a}`}/login`;
            const m = `${i.appBaseUrl}/api${h}?${f}`;
            window.location.href = m
        },
        logout(a) {
            if (delete t.defaults.headers.common.Authorization, typeof window < "u") {
                if (window.localStorage) try {
                    window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
                } catch (f) {
                    console.error("Failed to remove token from localStorage:", f)
                }
                const u = a || window.location.href,
                    c = `${i.appBaseUrl}/api/apps/auth/logout?from_url=${encodeURIComponent(u)}`;
                window.location.href = c
            }
        },
        setToken(a, u = !0) {
            if (a && (t.defaults.headers.common.Authorization = `Bearer ${a}`, e.defaults.headers.common.Authorization = `Bearer ${a}`, u && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", a), window.localStorage.setItem("token", a)
            } catch (c) {
                console.error("Failed to save token to localStorage:", c)
            }
        },
        async loginViaEmailPassword(a, u, c) {
            var f;
            try {
                const h = await t.post(`/apps/${r}/auth/login`, {
                        email: a,
                        password: u,
                        ...c && {
                            turnstile_token: c
                        }
                    }),
                    {
                        access_token: m,
                        user: g
                    } = h;
                return m && this.setToken(m), {
                    access_token: m,
                    user: g
                }
            } catch (h) {
                throw ((f = h.response) === null || f === void 0 ? void 0 : f.status) === 401 && await this.logout(), h
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(a, u) {
            return t.post(`/apps/${r}/users/invite-user`, {
                user_email: a,
                role: u
            })
        },
        register(a) {
            return t.post(`/apps/${r}/auth/register`, a)
        },
        verifyOtp({
            email: a,
            otpCode: u
        }) {
            return t.post(`/apps/${r}/auth/verify-otp`, {
                email: a,
                otp_code: u
            })
        },
        resendOtp(a) {
            return t.post(`/apps/${r}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return t.post(`/apps/${r}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({
            resetToken: a,
            newPassword: u
        }) {
            return t.post(`/apps/${r}/auth/reset-password`, {
                reset_token: a,
                new_password: u
            })
        },
        changePassword({
            userId: a,
            currentPassword: u,
            newPassword: c
        }) {
            return t.post(`/apps/${r}/auth/change-password`, {
                user_id: a,
                current_password: u,
                new_password: c
            })
        }
    }
}

function WT(t, e, r) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${e}/auth/sso/accesstoken/${i}`,
                u = {};
            return r && (u["on-behalf-of"] = `Bearer ${r}`), t.get(a, {
                headers: u
            })
        }
    }
}

function KT(t, e) {
    return {
        async getAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            return (await t.get(`/apps/${e}/external-auth/tokens/${r}`)).access_token
        },
        async getConnection(r) {
            var i;
            if (!r || typeof r != "string") throw new Error("Integration type is required and must be a string");
            const u = await t.get(`/apps/${e}/external-auth/tokens/${r}`);
            return {
                accessToken: u.access_token,
                connectionConfig: (i = u.connection_config) !== null && i !== void 0 ? i : null
            }
        }
    }
}

function QT(t, e) {
    return {
        async getCurrentAppUserAccessToken(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.get(`/apps/${e}/app-user-auth/connectors/${r}/token`)).access_token
        },
        async connectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            return (await t.post(`/apps/${e}/app-user-auth/connectors/${r}/initiate`)).redirect_url
        },
        async disconnectAppUser(r) {
            if (!r || typeof r != "string") throw new Error("Connector ID is required and must be a string");
            await t.delete(`/apps/${e}/app-user-auth/connectors/${r}`)
        }
    }
}

function bl(t = {}) {
    const {
        storageKey: e = "base44_access_token",
        paramName: r = "access_token",
        saveToStorage: i = !0,
        removeFromUrl: a = !0
    } = t;
    let u = null;
    if (typeof window < "u" && window.location) try {
        const c = new URLSearchParams(window.location.search);
        if (u = c.get(r), u) {
            if (i && GT(u, {
                    storageKey: e
                }), a) {
                c.delete(r);
                const f = `${window.location.pathname}${c.toString()?`?${c.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, f)
            }
            return u
        }
    } catch (c) {
        console.error("Error retrieving token from URL:", c)
    }
    if (typeof window < "u" && window.localStorage) try {
        return u = window.localStorage.getItem(e), u
    } catch (c) {
        console.error("Error retrieving token from local storage:", c)
    }
    return null
}

function GT(t, e) {
    const {
        storageKey: r = "base44_access_token"
    } = e;
    if (typeof window > "u" || !window.localStorage || !t) return !1;
    try {
        return window.localStorage.setItem(r, t), window.localStorage.setItem("token", t), !0
    } catch (i) {
        return console.error("Error saving token to local storage:", i), !1
    }
}

function ry(t, e, r) {
    const i = (u, c) => u ? `${String(u).replace(/\/$/,"")}${c}` : c,
        a = u => {
            const c = new Headers;
            if (r != null && r.getAuthHeaders) {
                const f = r.getAuthHeaders();
                Object.entries(f).forEach(([h, m]) => {
                    m != null && c.set(h, String(m))
                })
            }
            return u && new Headers(u).forEach((f, h) => {
                c.set(h, f)
            }), c
        };
    return {
        async invoke(u, c) {
            if (typeof c == "string") throw new Error(`Function ${u} must receive an object with named parameters, received: ${c}`);
            let f, h;
            return c instanceof FormData || c && Object.values(c).some(m => m instanceof File) ? (f = new FormData, Object.keys(c).forEach(m => {
                c[m] instanceof File ? f.append(m, c[m], c[m].name) : typeof c[m] == "object" && c[m] !== null ? f.append(m, JSON.stringify(c[m])) : f.append(m, c[m])
            }), h = "multipart/form-data") : (f = c, h = "application/json"), t.post(`/apps/${e}/functions/${u}`, f || c, {
                headers: {
                    "Content-Type": h
                }
            })
        },
        async fetch(u, c = {}) {
            const h = `/functions${u.startsWith("/")?u:`/${u}`}`,
                m = a(c.headers),
                g = { ...c,
                    headers: m
                };
            return await fetch(i(r == null ? void 0 : r.baseURL, h), g)
        }
    }
}

function sy({
    axios: t,
    getSocket: e,
    appId: r,
    serverUrl: i,
    token: a
}) {
    const u = `/apps/${r}/agents`,
        c = {},
        f = () => t.get(`${u}/conversations`),
        h = S => t.get(`${u}/conversations/${S}`);
    return {
        getConversations: f,
        getConversation: h,
        listConversations: S => t.get(`${u}/conversations`, {
            params: S
        }),
        createConversation: S => t.post(`${u}/conversations`, S),
        addMessage: async (S, b) => t.post(`${u}/conversations/v2/${S.id}/messages`, b),
        subscribeToConversation: (S, b) => {
            const x = `/agent-conversations/${S}`,
                R = e(),
                V = h(S).then(M => (c[S] = M, M));
            return R.subscribeToRoom(x, {
                connect: () => {},
                update_model: async ({
                    data: M
                }) => {
                    const N = JSON.parse(M);
                    if (N._message) {
                        await V;
                        const B = N._message,
                            K = c[S];
                        if (K) {
                            const G = K.messages || [],
                                F = G.findIndex(ee => ee.id === B.id),
                                J = F !== -1 ? G.map((ee, Ce) => Ce === F ? B : ee) : [...G, B];
                            c[S] = { ...K,
                                messages: J
                            }, b == null || b(c[S])
                        }
                    }
                }
            })
        },
        getWhatsAppConnectURL: S => {
            const b = `${i}/api/apps/${r}/agents/${encodeURIComponent(S)}/whatsapp`,
                x = a ? ? bl();
            return x ? `${b}?token=${x}` : b
        }
    }
}

function iy(t, e) {
    const r = `/app-logs/${e}`;
    return {
        async logUserInApp(i) {
            await t.post(`${r}/log-user-in-app/${i}`)
        },
        async fetchLogs(i = {}) {
            return await t.get(r, {
                params: i
            })
        },
        async getStats(i = {}) {
            return await t.get(`${r}/stats`, {
                params: i
            })
        }
    }
}

function YT(t, e) {
    return {
        async inviteUser(r, i) {
            if (i !== "user" && i !== "admin") throw new Error(`Invalid role: "${i}". Role must be either "user" or "admin".`);
            return await t.post(`/apps/${e}/runtime/users/invite-user`, {
                user_email: r,
                role: i
            })
        }
    }
}
const Cn = Object.create(null);
Cn.open = "0";
Cn.close = "1";
Cn.ping = "2";
Cn.pong = "3";
Cn.message = "4";
Cn.upgrade = "5";
Cn.noop = "6";
const ul = Object.create(null);
Object.keys(Cn).forEach(t => {
    ul[Cn[t]] = t
});
const Id = {
        type: "error",
        data: "parser error"
    },
    ow = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    aw = typeof ArrayBuffer == "function",
    lw = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer,
    Sf = ({
        type: t,
        data: e
    }, r, i) => ow && e instanceof Blob ? r ? i(e) : oy(e, i) : aw && (e instanceof ArrayBuffer || lw(e)) ? r ? i(e) : oy(new Blob([e]), i) : i(Cn[t] + (e || "")),
    oy = (t, e) => {
        const r = new FileReader;
        return r.onload = function() {
            const i = r.result.split(",")[1];
            e("b" + (i || ""))
        }, r.readAsDataURL(t)
    };

function ay(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
}
let Jc;

function XT(t, e) {
    if (ow && t.data instanceof Blob) return t.data.arrayBuffer().then(ay).then(e);
    if (aw && (t.data instanceof ArrayBuffer || lw(t.data))) return e(ay(t.data));
    Sf(t, !1, r => {
        Jc || (Jc = new TextEncoder), e(Jc.encode(r))
    })
}
const ly = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    no = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let t = 0; t < ly.length; t++) no[ly.charCodeAt(t)] = t;
const JT = t => {
        let e = t.length * .75,
            r = t.length,
            i, a = 0,
            u, c, f, h;
        t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
        const m = new ArrayBuffer(e),
            g = new Uint8Array(m);
        for (i = 0; i < r; i += 4) u = no[t.charCodeAt(i)], c = no[t.charCodeAt(i + 1)], f = no[t.charCodeAt(i + 2)], h = no[t.charCodeAt(i + 3)], g[a++] = u << 2 | c >> 4, g[a++] = (c & 15) << 4 | f >> 2, g[a++] = (f & 3) << 6 | h & 63;
        return m
    },
    ZT = typeof ArrayBuffer == "function",
    bf = (t, e) => {
        if (typeof t != "string") return {
            type: "message",
            data: uw(t, e)
        };
        const r = t.charAt(0);
        return r === "b" ? {
            type: "message",
            data: eP(t.substring(1), e)
        } : ul[r] ? t.length > 1 ? {
            type: ul[r],
            data: t.substring(1)
        } : {
            type: ul[r]
        } : Id
    },
    eP = (t, e) => {
        if (ZT) {
            const r = JT(t);
            return uw(r, e)
        } else return {
            base64: !0,
            data: t
        }
    },
    uw = (t, e) => {
        switch (e) {
            case "blob":
                return t instanceof Blob ? t : new Blob([t]);
            case "arraybuffer":
            default:
                return t instanceof ArrayBuffer ? t : t.buffer
        }
    },
    cw = "",
    tP = (t, e) => {
        const r = t.length,
            i = new Array(r);
        let a = 0;
        t.forEach((u, c) => {
            Sf(u, !1, f => {
                i[c] = f, ++a === r && e(i.join(cw))
            })
        })
    },
    nP = (t, e) => {
        const r = t.split(cw),
            i = [];
        for (let a = 0; a < r.length; a++) {
            const u = bf(r[a], e);
            if (i.push(u), u.type === "error") break
        }
        return i
    };

function rP() {
    return new TransformStream({
        transform(t, e) {
            XT(t, r => {
                const i = r.length;
                let a;
                if (i < 126) a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 126), u.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const u = new DataView(a.buffer);
                    u.setUint8(0, 127), u.setBigUint64(1, BigInt(i))
                }
                t.data && typeof t.data != "string" && (a[0] |= 128), e.enqueue(a), e.enqueue(r)
            })
        }
    })
}
let Zc;

function Ja(t) {
    return t.reduce((e, r) => e + r.length, 0)
}

function Za(t, e) {
    if (t[0].length === e) return t.shift();
    const r = new Uint8Array(e);
    let i = 0;
    for (let a = 0; a < e; a++) r[a] = t[0][i++], i === t[0].length && (t.shift(), i = 0);
    return t.length && i < t[0].length && (t[0] = t[0].slice(i)), r
}

function sP(t, e) {
    Zc || (Zc = new TextDecoder);
    const r = [];
    let i = 0,
        a = -1,
        u = !1;
    return new TransformStream({
        transform(c, f) {
            for (r.push(c);;) {
                if (i === 0) {
                    if (Ja(r) < 1) break;
                    const h = Za(r, 1);
                    u = (h[0] & 128) === 128, a = h[0] & 127, a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (Ja(r) < 2) break;
                    const h = Za(r, 2);
                    a = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (Ja(r) < 8) break;
                    const h = Za(r, 8),
                        m = new DataView(h.buffer, h.byteOffset, h.length),
                        g = m.getUint32(0);
                    if (g > Math.pow(2, 21) - 1) {
                        f.enqueue(Id);
                        break
                    }
                    a = g * Math.pow(2, 32) + m.getUint32(4), i = 3
                } else {
                    if (Ja(r) < a) break;
                    const h = Za(r, a);
                    f.enqueue(bf(u ? h : Zc.decode(h), e)), i = 0
                }
                if (a === 0 || a > t) {
                    f.enqueue(Id);
                    break
                }
            }
        }
    })
}
const dw = 4;

function Ze(t) {
    if (t) return iP(t)
}

function iP(t) {
    for (var e in Ze.prototype) t[e] = Ze.prototype[e];
    return t
}
Ze.prototype.on = Ze.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
};
Ze.prototype.once = function(t, e) {
    function r() {
        this.off(t, r), e.apply(this, arguments)
    }
    return r.fn = e, this.on(t, r), this
};
Ze.prototype.off = Ze.prototype.removeListener = Ze.prototype.removeAllListeners = Ze.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + t], this;
    for (var i, a = 0; a < r.length; a++)
        if (i = r[a], i === e || i.fn === e) {
            r.splice(a, 1);
            break
        }
    return r.length === 0 && delete this._callbacks["$" + t], this
};
Ze.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    if (r) {
        r = r.slice(0);
        for (var i = 0, a = r.length; i < a; ++i) r[i].apply(this, e)
    }
    return this
};
Ze.prototype.emitReserved = Ze.prototype.emit;
Ze.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
};
Ze.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length
};
const Fl = typeof Promise == "function" && typeof Promise.resolve == "function" ? e => Promise.resolve().then(e) : (e, r) => r(e, 0),
    en = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    oP = "arraybuffer";

function fw(t, ...e) {
    return e.reduce((r, i) => (t.hasOwnProperty(i) && (r[i] = t[i]), r), {})
}
const aP = en.setTimeout,
    lP = en.clearTimeout;

function Vl(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = aP.bind(en), t.clearTimeoutFn = lP.bind(en)) : (t.setTimeoutFn = en.setTimeout.bind(en), t.clearTimeoutFn = en.clearTimeout.bind(en))
}
const uP = 1.33;

function cP(t) {
    return typeof t == "string" ? dP(t) : Math.ceil((t.byteLength || t.size) * uP)
}

function dP(t) {
    let e = 0,
        r = 0;
    for (let i = 0, a = t.length; i < a; i++) e = t.charCodeAt(i), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (i++, r += 4);
    return r
}

function hw() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function fP(t) {
    let e = "";
    for (let r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e
}

function hP(t) {
    let e = {},
        r = t.split("&");
    for (let i = 0, a = r.length; i < a; i++) {
        let u = r[i].split("=");
        e[decodeURIComponent(u[0])] = decodeURIComponent(u[1])
    }
    return e
}
class pP extends Error {
    constructor(e, r, i) {
        super(e), this.description = r, this.context = i, this.type = "TransportError"
    }
}
class kf extends Ze {
    constructor(e) {
        super(), this.writable = !1, Vl(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64
    }
    onError(e, r, i) {
        return super.emitReserved("error", new pP(e, r, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(e) {
        this.readyState === "open" && this.write(e)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(e) {
        const r = bf(e, this.socket.binaryType);
        this.onPacket(r)
    }
    onPacket(e) {
        super.emitReserved("packet", e)
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e)
    }
    pause(e) {}
    createUri(e, r = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r)
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(e) {
        const r = fP(e);
        return r.length ? "?" + r : ""
    }
}
class mP extends kf {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(e) {
        this.readyState = "pausing";
        const r = () => {
            this.readyState = "paused", e()
        };
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++, this.once("pollComplete", function() {
                --i || r()
            })), this.writable || (i++, this.once("drain", function() {
                --i || r()
            }))
        } else r()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(e) {
        const r = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        nP(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const e = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? e() : this.once("open", e)
    }
    write(e) {
        this.writable = !1, tP(e, r => {
            this.doWrite(r, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const e = this.opts.secure ? "https" : "http",
            r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = hw()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r)
    }
}
let pw = !1;
try {
    pw = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const gP = pw;

function yP() {}
class vP extends mP {
    constructor(e) {
        if (super(e), typeof location < "u") {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || i !== e.port
        }
    }
    doWrite(e, r) {
        const i = this.request({
            method: "POST",
            data: e
        });
        i.on("success", r), i.on("error", (a, u) => {
            this.onError("xhr post error", a, u)
        })
    }
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (r, i) => {
            this.onError("xhr poll error", r, i)
        }), this.pollXhr = e
    }
}
class bn extends Ze {
    constructor(e, r, i) {
        super(), this.createRequest = e, Vl(this, i), this._opts = i, this._method = i.method || "GET", this._uri = r, this._data = i.data !== void 0 ? i.data : null, this._create()
    }
    _create() {
        var e;
        const r = fw(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(r);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this._data)
        } catch (a) {
            this.setTimeoutFn(() => {
                this._onError(a)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = bn.requestsCount++, bn.requests[this._index] = this)
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0)
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = yP, e) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete bn.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
bn.requestsCount = 0;
bn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", uy);
    else if (typeof addEventListener == "function") {
        const t = "onpagehide" in en ? "pagehide" : "unload";
        addEventListener(t, uy, !1)
    }
}

function uy() {
    for (let t in bn.requests) bn.requests.hasOwnProperty(t) && bn.requests[t].abort()
}
const wP = (function() {
    const t = mw({
        xdomain: !1
    });
    return t && t.responseType !== null
})();
class xP extends vP {
    constructor(e) {
        super(e);
        const r = e && e.forceBase64;
        this.supportsBinary = wP && !r
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts), new bn(mw, this.uri(), e)
    }
}

function mw(t) {
    const e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || gP)) return new XMLHttpRequest
    } catch {}
    if (!e) try {
        return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const gw = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class SP extends kf {
    get name() {
        return "websocket"
    }
    doOpen() {
        const e = this.uri(),
            r = this.opts.protocols,
            i = gw ? {} : fw(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = e => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = e => this.onData(e.data), this.ws.onerror = e => this.onError("websocket error", e)
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            Sf(i, this.supportsBinary, u => {
                try {
                    this.doWrite(i, u)
                } catch {}
                a && Fl(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const e = this.opts.secure ? "wss" : "ws",
            r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = hw()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r)
    }
}
const ed = en.WebSocket || en.MozWebSocket;
class bP extends SP {
    createSocket(e, r, i) {
        return gw ? new ed(e, r, i) : r ? new ed(e, r) : new ed(e)
    }
    doWrite(e, r) {
        this.ws.send(r)
    }
}
class kP extends kf {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (e) {
            return this.emitReserved("error", e)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(e => {
            this.onError("webtransport error", e)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(e => {
                const r = sP(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = e.readable.pipeThrough(r).getReader(),
                    a = rP();
                a.readable.pipeTo(e.writable), this._writer = a.writable.getWriter();
                const u = () => {
                    i.read().then(({
                        done: f,
                        value: h
                    }) => {
                        f || (this.onPacket(h), u())
                    }).catch(f => {})
                };
                u();
                const c = {
                    type: "open"
                };
                this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`), this._writer.write(c).then(() => this.onOpen())
            })
        })
    }
    write(e) {
        this.writable = !1;
        for (let r = 0; r < e.length; r++) {
            const i = e[r],
                a = r === e.length - 1;
            this._writer.write(i).then(() => {
                a && Fl(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close()
    }
}
const EP = {
        websocket: bP,
        webtransport: kP,
        polling: xP
    },
    CP = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    TP = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function Fd(t) {
    if (t.length > 8e3) throw "URI too long";
    const e = t,
        r = t.indexOf("["),
        i = t.indexOf("]");
    r != -1 && i != -1 && (t = t.substring(0, r) + t.substring(r, i).replace(/:/g, ";") + t.substring(i, t.length));
    let a = CP.exec(t || ""),
        u = {},
        c = 14;
    for (; c--;) u[TP[c]] = a[c] || "";
    return r != -1 && i != -1 && (u.source = e, u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"), u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), u.ipv6uri = !0), u.pathNames = PP(u, u.path), u.queryKey = _P(u, u.query), u
}

function PP(t, e) {
    const r = /\/{2,9}/g,
        i = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && i.splice(0, 1), e.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function _P(t, e) {
    const r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, u) {
        a && (r[a] = u)
    }), r
}
const Vd = typeof addEventListener == "function" && typeof removeEventListener == "function",
    cl = [];
Vd && addEventListener("offline", () => {
    cl.forEach(t => t())
}, !1);
class Er extends Ze {
    constructor(e, r) {
        if (super(), this.binaryType = oP, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
            const i = Fd(e);
            r.hostname = i.host, r.secure = i.protocol === "https" || i.protocol === "wss", r.port = i.port, i.query && (r.query = i.query)
        } else r.host && (r.hostname = Fd(r.host).host);
        Vl(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a), this._transportsByName[a] = i
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = hP(this.opts.query)), Vd && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, cl.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(e) {
        const r = Object.assign({}, this.opts.query);
        r.EIO = dw, r.transport = e, this.id && (r.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const e = this.opts.rememberUpgrade && Er.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const r = this.createTransport(e);
        r.open(), this.setTransport(r)
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", r => this._onClose("transport close", r))
    }
    onOpen() {
        this.readyState = "open", Er.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const r = new Error("server error");
                r.code = e.data, this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let r = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (r += cP(a)), i > 0 && r > this._maxPayload) return this.writeBuffer.slice(0, i);
            r += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, Fl(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), e
    }
    write(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    send(e, r, i) {
        return this._sendPacket("message", e, r, i), this
    }
    _sendPacket(e, r, i, a) {
        if (typeof r == "function" && (a = r, r = void 0), typeof i == "function" && (a = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const u = {
            type: e,
            data: r,
            options: i
        };
        this.emitReserved("packetCreate", u), this.writeBuffer.push(u), a && this.once("flush", a), this.flush()
    }
    close() {
        const e = () => {
                this._onClose("forced close"), this.transport.close()
            },
            r = () => {
                this.off("upgrade", r), this.off("upgradeError", r), e()
            },
            i = () => {
                this.once("upgrade", r), this.once("upgradeError", r)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : e()
        }) : this.upgrading ? i() : e()), this
    }
    _onError(e) {
        if (Er.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e)
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Vd && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const i = cl.indexOf(this._offlineEventListener);
                i !== -1 && cl.splice(i, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
Er.protocol = dw;
class RP extends Er {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++) this._probe(this._upgrades[e])
    }
    _probe(e) {
        let r = this.createTransport(e),
            i = !1;
        Er.priorWebsocketSuccess = !1;
        const a = () => {
            i || (r.send([{
                type: "ping",
                data: "probe"
            }]), r.once("packet", y => {
                if (!i)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", r), !r) return;
                        Er.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (g(), this.setTransport(r), r.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const w = new Error("probe error");
                        w.transport = r.name, this.emitReserved("upgradeError", w)
                    }
            }))
        };

        function u() {
            i || (i = !0, g(), r.close(), r = null)
        }
        const c = y => {
            const w = new Error("probe error: " + y);
            w.transport = r.name, u(), this.emitReserved("upgradeError", w)
        };

        function f() {
            c("transport closed")
        }

        function h() {
            c("socket closed")
        }

        function m(y) {
            r && y.name !== r.name && u()
        }
        const g = () => {
            r.removeListener("open", a), r.removeListener("error", c), r.removeListener("close", f), this.off("close", h), this.off("upgrading", m)
        };
        r.once("open", a), r.once("error", c), r.once("close", f), this.once("close", h), this.once("upgrading", m), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            i || r.open()
        }, 200) : r.open()
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e)
    }
    _filterUpgrades(e) {
        const r = [];
        for (let i = 0; i < e.length; i++) ~this.transports.indexOf(e[i]) && r.push(e[i]);
        return r
    }
}
let AP = class extends RP {
    constructor(e, r = {}) {
        const i = typeof e == "object" ? e : r;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => EP[a]).filter(a => !!a)), super(e, i)
    }
};

function OP(t, e = "", r) {
    let i = t;
    r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), i = Fd(t)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + u + ":" + i.port + e, i.href = i.protocol + "://" + u + (r && r.port === i.port ? "" : ":" + i.port), i
}
const NP = typeof ArrayBuffer == "function",
    LP = t => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer,
    yw = Object.prototype.toString,
    MP = typeof Blob == "function" || typeof Blob < "u" && yw.call(Blob) === "[object BlobConstructor]",
    DP = typeof File == "function" || typeof File < "u" && yw.call(File) === "[object FileConstructor]";

function Ef(t) {
    return NP && (t instanceof ArrayBuffer || LP(t)) || MP && t instanceof Blob || DP && t instanceof File
}

function dl(t, e) {
    if (!t || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        for (let r = 0, i = t.length; r < i; r++)
            if (dl(t[r])) return !0;
        return !1
    }
    if (Ef(t)) return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1) return dl(t.toJSON(), !0);
    for (const r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && dl(t[r])) return !0;
    return !1
}

function jP(t) {
    const e = [],
        r = t.data,
        i = t;
    return i.data = Bd(r, e), i.attachments = e.length, {
        packet: i,
        buffers: e
    }
}

function Bd(t, e) {
    if (!t) return t;
    if (Ef(t)) {
        const r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t), r
    } else if (Array.isArray(t)) {
        const r = new Array(t.length);
        for (let i = 0; i < t.length; i++) r[i] = Bd(t[i], e);
        return r
    } else if (typeof t == "object" && !(t instanceof Date)) {
        const r = {};
        for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = Bd(t[i], e));
        return r
    }
    return t
}

function IP(t, e) {
    return t.data = Ud(t.data, e), delete t.attachments, t
}

function Ud(t, e) {
    if (!t) return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(t))
        for (let r = 0; r < t.length; r++) t[r] = Ud(t[r], e);
    else if (typeof t == "object")
        for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (t[r] = Ud(t[r], e));
    return t
}
const FP = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var Ee;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK"
})(Ee || (Ee = {}));
class VP {
    constructor(e) {
        this.replacer = e
    }
    encode(e) {
        return (e.type === Ee.EVENT || e.type === Ee.ACK) && dl(e) ? this.encodeAsBinary({
            type: e.type === Ee.EVENT ? Ee.BINARY_EVENT : Ee.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)]
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === Ee.BINARY_EVENT || e.type === Ee.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), r
    }
    encodeAsBinary(e) {
        const r = jP(e),
            i = this.encodeAsString(r.packet),
            a = r.buffers;
        return a.unshift(i), a
    }
}
class Cf extends Ze {
    constructor(e) {
        super(), this.reviver = e
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            const i = r.type === Ee.BINARY_EVENT;
            i || r.type === Ee.BINARY_ACK ? (r.type = i ? Ee.EVENT : Ee.ACK, this.reconstructor = new BP(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r)
        } else if (Ef(e) || e.base64)
            if (this.reconstructor) r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + e)
    }
    decodeString(e) {
        let r = 0;
        const i = {
            type: Number(e.charAt(0))
        };
        if (Ee[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === Ee.BINARY_EVENT || i.type === Ee.BINARY_ACK) {
            const u = r + 1;
            for (; e.charAt(++r) !== "-" && r != e.length;);
            const c = e.substring(u, r);
            if (c != Number(c) || e.charAt(r) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(c)
        }
        if (e.charAt(r + 1) === "/") {
            const u = r + 1;
            for (; ++r && !(e.charAt(r) === "," || r === e.length););
            i.nsp = e.substring(u, r)
        } else i.nsp = "/";
        const a = e.charAt(r + 1);
        if (a !== "" && Number(a) == a) {
            const u = r + 1;
            for (; ++r;) {
                const c = e.charAt(r);
                if (c == null || Number(c) != c) {
                    --r;
                    break
                }
                if (r === e.length) break
            }
            i.id = Number(e.substring(u, r + 1))
        }
        if (e.charAt(++r)) {
            const u = this.tryParse(e.substr(r));
            if (Cf.isPayloadValid(i.type, u)) i.data = u;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(e, r) {
        switch (e) {
            case Ee.CONNECT:
                return cy(r);
            case Ee.DISCONNECT:
                return r === void 0;
            case Ee.CONNECT_ERROR:
                return typeof r == "string" || cy(r);
            case Ee.EVENT:
            case Ee.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && FP.indexOf(r[0]) === -1);
            case Ee.ACK:
            case Ee.BINARY_ACK:
                return Array.isArray(r)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class BP {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const r = IP(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}

function cy(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
const UP = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: Cf,
    Encoder: VP,
    get PacketType() {
        return Ee
    }
}, Symbol.toStringTag, {
    value: "Module"
}));

function fn(t, e, r) {
    return t.on(e, r),
        function() {
            t.off(e, r)
        }
}
const zP = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class vw extends Ze {
    constructor(e, r, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const e = this.io;
        this.subs = [fn(e, "open", this.onopen.bind(this)), fn(e, "packet", this.onpacket.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this
    }
    emit(e, ...r) {
        var i, a, u;
        if (zP.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(r), this;
        const c = {
            type: Ee.EVENT,
            data: r
        };
        if (c.options = {}, c.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
            const g = this.ids++,
                y = r.pop();
            this._registerAckCallback(g, y), c.id = g
        }
        const f = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable,
            h = this.connected && !(!((u = this.io.engine) === null || u === void 0) && u._hasPingExpired());
        return this.flags.volatile && !f || (h ? (this.notifyOutgoingListeners(c), this.packet(c)) : this.sendBuffer.push(c)), this.flags = {}, this
    }
    _registerAckCallback(e, r) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[e] = r;
            return
        }
        const u = this.io.setTimeoutFn(() => {
                delete this.acks[e];
                for (let f = 0; f < this.sendBuffer.length; f++) this.sendBuffer[f].id === e && this.sendBuffer.splice(f, 1);
                r.call(this, new Error("operation has timed out"))
            }, a),
            c = (...f) => {
                this.io.clearTimeoutFn(u), r.apply(this, f)
            };
        c.withError = !0, this.acks[e] = c
    }
    emitWithAck(e, ...r) {
        return new Promise((i, a) => {
            const u = (c, f) => c ? a(c) : i(f);
            u.withError = !0, r.push(u), this.emit(e, ...r)
        })
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((a, ...u) => (this._queue[0], a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), r && r(a)) : (this._queue.shift(), r && r(null, ...u)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const r = this._queue[0];
        r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args))
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(e => {
            this._sendConnectPacket(e)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(e) {
        this.packet({
            type: Ee.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        })
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e)
    }
    onclose(e, r) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(e => {
            if (!this.sendBuffer.some(i => String(i.id) === e)) {
                const i = this.acks[e];
                delete this.acks[e], i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case Ee.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ee.EVENT:
            case Ee.BINARY_EVENT:
                this.onevent(e);
                break;
            case Ee.ACK:
            case Ee.BINARY_ACK:
                this.onack(e);
                break;
            case Ee.DISCONNECT:
                this.ondisconnect();
                break;
            case Ee.CONNECT_ERROR:
                this.destroy();
                const i = new Error(e.data.message);
                i.data = e.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(e) {
        const r = e.data || [];
        e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r))
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const r = this._anyListeners.slice();
            for (const i of r) i.apply(this, e)
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1])
    }
    ack(e) {
        const r = this;
        let i = !1;
        return function(...a) {
            i || (i = !0, r.packet({
                type: Ee.ACK,
                id: e,
                data: a
            }))
        }
    }
    onack(e) {
        const r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data))
    }
    onconnect(e, r) {
        this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect")
    }
    emitBuffered() {
        this.receiveBuffer.forEach(e => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach(e => {
            this.notifyOutgoingListeners(e), this.packet(e)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(e => e()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Ee.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(e) {
        return this.flags.compress = e, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(e) {
        return this.flags.timeout = e, this
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            const r = this._anyListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            const r = this._anyOutgoingListeners;
            for (let i = 0; i < r.length; i++)
                if (e === r[i]) return r.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const r = this._anyOutgoingListeners.slice();
            for (const i of r) i.apply(this, e.data)
        }
    }
}

function oi(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
}
oi.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(),
            r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r
    }
    return Math.min(t, this.max) | 0
};
oi.prototype.reset = function() {
    this.attempts = 0
};
oi.prototype.setMin = function(t) {
    this.ms = t
};
oi.prototype.setMax = function(t) {
    this.max = t
};
oi.prototype.setJitter = function(t) {
    this.jitter = t
};
class zd extends Ze {
    constructor(e, r) {
        var i;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, Vl(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((i = r.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new oi({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
        const a = r.parser || UP;
        this.encoder = new a.Encoder, this.decoder = new a.Decoder, this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this)
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this)
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this)
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new AP(this.uri, this.opts);
        const r = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const a = fn(r, "open", function() {
                i.onopen(), e && e()
            }),
            u = f => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", f), e ? e(f) : this.maybeReconnectOnOpen()
            },
            c = fn(r, "error", u);
        if (this._timeout !== !1) {
            const f = this._timeout,
                h = this.setTimeoutFn(() => {
                    a(), u(new Error("timeout")), r.close()
                }, f);
            this.opts.autoUnref && h.unref(), this.subs.push(() => {
                this.clearTimeoutFn(h)
            })
        }
        return this.subs.push(a), this.subs.push(c), this
    }
    connect(e) {
        return this.open(e)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(fn(e, "ping", this.onping.bind(this)), fn(e, "data", this.ondata.bind(this)), fn(e, "error", this.onerror.bind(this)), fn(e, "close", this.onclose.bind(this)), fn(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(e) {
        try {
            this.decoder.add(e)
        } catch (r) {
            this.onclose("parse error", r)
        }
    }
    ondecoded(e) {
        Fl(() => {
            this.emitReserved("packet", e)
        }, this.setTimeoutFn)
    }
    onerror(e) {
        this.emitReserved("error", e)
    }
    socket(e, r) {
        let i = this.nsps[e];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new vw(this, e, r), this.nsps[e] = i), i
    }
    _destroy(e) {
        const r = Object.keys(this.nsps);
        for (const i of r)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(e) {
        const r = this.encoder.encode(e);
        for (let i = 0; i < r.length; i++) this.engine.write(r[i], e.options)
    }
    cleanup() {
        this.subs.forEach(e => e()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(e, r) {
        var i;
        this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const r = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open(a => {
                    a ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", a)) : e.onreconnect()
                }))
            }, r);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
    }
}
const Xi = {};

function fl(t, e) {
    typeof t == "object" && (e = t, t = void 0), e = e || {};
    const r = OP(t, e.path || "/socket.io"),
        i = r.source,
        a = r.id,
        u = r.path,
        c = Xi[a] && u in Xi[a].nsps,
        f = e.forceNew || e["force new connection"] || e.multiplex === !1 || c;
    let h;
    return f ? h = new zd(i, e) : (Xi[a] || (Xi[a] = new zd(i, e)), h = Xi[a]), r.query && !e.query && (e.query = r.queryKey), h.socket(r.path, e)
}
Object.assign(fl, {
    Manager: zd,
    Socket: vw,
    io: fl,
    connect: fl
});

function dy(t, e) {
    var r;
    const i = fl(t.serverUrl, {
        path: t.mountPath,
        transports: t.transports,
        query: {
            app_id: t.appId,
            token: (r = t.token) !== null && r !== void 0 ? r : bl()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id), (a = e.connect) === null || a === void 0 ? void 0 : a.call(e)
    }), i.on("update_model", async a => {
        var u;
        return (u = e.update_model) === null || u === void 0 ? void 0 : u.call(e, a)
    }), i.on("error", async a => {
        var u;
        return (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }), i.on("connect_error", async a => {
        var u;
        return console.error("connect_error", a), (u = e.error) === null || u === void 0 ? void 0 : u.call(e, a)
    }), i
}

function $P({
    config: t
}) {
    let e = { ...t
    };
    const r = {},
        i = {
            connect: async () => {
                const k = [];
                Object.keys(r).forEach(S => {
                    h(S);
                    const b = y(S);
                    b == null || b.forEach(({
                        connect: x
                    }) => {
                        const R = async () => x == null ? void 0 : x();
                        k.push(R())
                    })
                }), await Promise.all(k)
            },
            update_model: async k => {
                const b = y(k.room).map(x => {
                    var R;
                    return (R = x.update_model) === null || R === void 0 ? void 0 : R.call(x, k)
                });
                await Promise.all(b)
            },
            error: async k => {
                console.error("error", k);
                const S = Object.values(r).flat().map(b => {
                    var x;
                    return (x = b.error) === null || x === void 0 ? void 0 : x.call(b, k)
                });
                await Promise.all(S)
            }
        };
    let a = dy(t, i);

    function u() {
        c()
    }

    function c() {
        a && a.disconnect()
    }

    function f(k) {
        u(), e = { ...e,
            ...k
        }, a = dy(e, i)
    }

    function h(k) {
        a.emit("join", k)
    }

    function m(k) {
        a.emit("leave", k)
    }
    async function g(k, S) {
        var b;
        const x = JSON.stringify(S);
        return (b = i.update_model) === null || b === void 0 ? void 0 : b.call(i, {
            room: k,
            data: x
        })
    }

    function y(k) {
        return r[k]
    }
    return {
        socket: a,
        subscribeToRoom: (k, S) => (r[k] || (h(k), r[k] = []), r[k].push(S), () => {
            var b, x;
            r[k] = (x = (b = r[k]) === null || b === void 0 ? void 0 : b.filter(R => R !== S)) !== null && x !== void 0 ? x : [], r[k].length === 0 && m(k)
        }),
        updateConfig: f,
        updateModel: g,
        disconnect: c
    }
}
const Ji = typeof window < "u" ? window : {
    base44SharedInstances: {}
};

function HP(t, e) {
    return Ji.base44SharedInstances || (Ji.base44SharedInstances = {}), Ji.base44SharedInstances[t] || (Ji.base44SharedInstances[t] = {
        instance: e()
    }), Ji.base44SharedInstances[t].instance
}
const qP = "__user_heartbeat_event__",
    WP = "__initialization_event__",
    KP = "__session_duration_event__",
    fy = "analytics-enable",
    hy = "base44_analytics_session_id",
    QP = {
        enabled: !0,
        maxQueueSize: 1e3,
        throttleTime: 1e3,
        batchSize: 30,
        heartBeatInterval: 60 * 1e3
    },
    GP = "analytics",
    De = HP(GP, () => ({
        requestsQueue: [],
        isProcessing: !1,
        isHeartBeatProcessing: !1,
        wasInitializationTracked: !1,
        sessionContext: null,
        sessionStartTime: null,
        config: { ...QP,
            ...r_()
        }
    })),
    YP = ({
        axiosClient: t,
        serverUrl: e,
        appId: r,
        userAuthModule: i
    }) => {
        var a;
        const {
            maxQueueSize: u,
            throttleTime: c,
            batchSize: f
        } = De.config;
        if (!(!((a = De.config) === null || a === void 0) && a.enabled)) return {
            track: () => {},
            cleanup: () => {}
        };
        let h;
        const m = `${e}/api/apps/${r}/analytics/track/batch`,
            g = async M => {
                await t.request({
                    method: "POST",
                    url: `/apps/${r}/analytics/track/batch`,
                    data: {
                        events: M
                    }
                })
            },
            y = M => {
                try {
                    const N = JSON.stringify({
                            events: M
                        }),
                        B = new Blob([N], {
                            type: "application/json"
                        });
                    return typeof navigator > "u" || N.length > 6e4 || !navigator.sendBeacon(m, B)
                } catch {
                    return !1
                }
            },
            w = async (M, N = {}) => {
                if (M.length === 0) return;
                const B = await n_(i),
                    K = M.map(t_(B));
                try {
                    (!N.isBeacon || !y(K)) && await g(K)
                } catch {}
            },
            k = () => {
                my(w, {
                    throttleTime: c,
                    batchSize: f
                })
            },
            S = M => {
                if (De.requestsQueue.length >= u) return;
                const N = e_();
                De.requestsQueue.push({ ...M,
                    ...N
                }), k()
            },
            b = () => {
                my(w, {
                    throttleTime: c,
                    batchSize: f
                }), h = gy(S), JP()
            },
            x = () => {
                py(), h == null || h(), ZP(S);
                const M = De.requestsQueue.splice(0);
                w(M, {
                    isBeacon: !0
                })
            },
            R = () => {
                typeof window > "u" || (document.visibilityState === "hidden" ? x() : document.visibilityState === "visible" && b())
            },
            V = () => {
                py(), h == null || h(), typeof window < "u" && window.removeEventListener("visibilitychange", R)
            };
        return k(), h = gy(S), XP(S), typeof window < "u" && window.addEventListener("visibilitychange", R), {
            track: S,
            cleanup: V
        }
    };

function py() {
    De.isProcessing = !1
}
async function my(t, e) {
    if (De.isProcessing) return;
    De.isProcessing = !0;
    const {
        throttleTime: r = 1e3,
        batchSize: i = 30
    } = e ? ? {};
    for (; De.isProcessing && De.requestsQueue.length > 0;) {
        const a = De.requestsQueue.splice(0, i);
        a.length && await t(a), await new Promise(u => setTimeout(u, r))
    }
    De.isProcessing = !1
}

function gy(t) {
    var e;
    if (De.isHeartBeatProcessing || ((e = De.config.heartBeatInterval) !== null && e !== void 0 ? e : 0) < 10) return () => {};
    De.isHeartBeatProcessing = !0;
    const r = setInterval(() => {
        t({
            eventName: qP
        })
    }, De.config.heartBeatInterval);
    return () => {
        clearInterval(r), De.isHeartBeatProcessing = !1
    }
}

function XP(t) {
    typeof window > "u" || De.wasInitializationTracked || (De.wasInitializationTracked = !0, t({
        eventName: WP,
        properties: {
            referrer: document == null ? void 0 : document.referrer
        }
    }))
}

function JP() {
    typeof window > "u" || De.sessionStartTime !== null || (De.sessionStartTime = new Date().toISOString())
}

function ZP(t) {
    if (typeof window > "u" || De.sessionStartTime === null) return;
    const e = new Date().getTime() - new Date(De.sessionStartTime).getTime();
    De.sessionStartTime = null, t({
        eventName: KP,
        properties: {
            sessionDuration: e
        }
    })
}

function e_() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window < "u" ? window.location.pathname : null
    }
}

function t_(t) {
    return e => ({
        event_name: e.eventName,
        properties: e.properties,
        timestamp: e.timestamp,
        page_url: e.pageUrl,
        ...t
    })
}
let td = null;
async function n_(t) {
    if (!De.sessionContext) {
        if (!td) {
            const e = s_();
            td = t.me().then(r => ({
                user_id: r.id,
                session_id: e
            })).catch(() => ({
                user_id: null,
                session_id: e
            }))
        }
        De.sessionContext = await td
    }
    return De.sessionContext
}

function r_() {
    if (typeof window > "u") return;
    const e = new URLSearchParams(window.location.search).get(fy);
    if (e == null || !e.length) return;
    const r = new URLSearchParams(window.location.search);
    r.delete(fy);
    const i = window.location.pathname + (r.toString() ? "?" + r.toString() : "");
    return window.history.replaceState({}, "", i), {
        enabled: e === "true"
    }
}

function s_() {
    if (typeof window > "u") return Yc();
    try {
        const t = localStorage.getItem(hy);
        if (!t) {
            const e = Yc();
            return localStorage.setItem(hy, e), e
        }
        return t
    } catch {
        return Yc()
    }
}

function i_(t) {
    var e, r;
    const {
        serverUrl: i = "https://base44.app",
        appId: a,
        token: u,
        serviceToken: c,
        requiresAuth: f = !1,
        appBaseUrl: h,
        options: m,
        functionsVersion: g,
        headers: y
    } = t, w = typeof h == "string" ? h : "", k = {
        serverUrl: i,
        mountPath: "/ws-user-apps/socket.io/",
        transports: ["websocket"],
        appId: a,
        token: u
    };
    let S = null;
    const b = () => (S || (S = $P({
            config: k
        })), S),
        x = { ...y,
            "X-App-Id": String(a)
        },
        R = g ? { ...x,
            "Base44-Functions-Version": g
        } : x,
        V = to({
            baseURL: `${i}/api`,
            headers: x,
            token: u,
            onError: m == null ? void 0 : m.onError
        }),
        M = to({
            baseURL: `${i}/api`,
            headers: R,
            token: u,
            interceptResponses: !1,
            onError: m == null ? void 0 : m.onError
        }),
        N = to({
            baseURL: `${i}/api`,
            headers: x,
            token: c,
            onError: m == null ? void 0 : m.onError
        }),
        B = to({
            baseURL: `${i}/api`,
            headers: R,
            token: c,
            interceptResponses: !1
        }),
        K = qT(V, M, a, {
            appBaseUrl: w
        }),
        G = {
            entities: ty({
                axios: V,
                appId: a,
                getSocket: b
            }),
            integrations: ny(V, a),
            connectors: QT(V, a),
            auth: K,
            functions: ry(M, a, {
                getAuthHeaders: () => {
                    const ee = {},
                        Ce = u || bl();
                    return Ce && (ee.Authorization = `Bearer ${Ce}`), ee
                },
                baseURL: (e = M.defaults) === null || e === void 0 ? void 0 : e.baseURL
            }),
            agents: sy({
                axios: V,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: u
            }),
            appLogs: iy(V, a),
            users: YT(V, a),
            analytics: YP({
                axiosClient: V,
                serverUrl: i,
                appId: a,
                userAuthModule: K
            }),
            cleanup: () => {
                G.analytics.cleanup(), S && S.disconnect()
            }
        },
        F = {
            entities: ty({
                axios: N,
                appId: a,
                getSocket: b
            }),
            integrations: ny(N, a),
            sso: WT(N, a, u),
            connectors: KT(N, a),
            functions: ry(B, a, {
                getAuthHeaders: () => {
                    const ee = {};
                    return c && (ee.Authorization = `Bearer ${c}`), ee
                },
                baseURL: (r = B.defaults) === null || r === void 0 ? void 0 : r.baseURL
            }),
            agents: sy({
                axios: N,
                getSocket: b,
                appId: a,
                serverUrl: i,
                token: u
            }),
            appLogs: iy(N, a),
            cleanup: () => {
                S && S.disconnect()
            }
        };
    if (typeof window < "u") {
        const ee = u || bl();
        ee && G.auth.setToken(ee)
    }
    return f && typeof window < "u" && setTimeout(async () => {
        try {
            await G.auth.isAuthenticated() || G.auth.redirectToLogin(window.location.href)
        } catch (ee) {
            console.error("Authentication check failed:", ee), G.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...G,
        setToken(ee) {
            G.auth.setToken(ee), S && S.updateConfig({
                token: ee
            }), k.token = ee
        },
        getConfig() {
            return {
                serverUrl: i,
                appId: a,
                requiresAuth: f
            }
        },
        get asServiceRole() {
            if (!c) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return F
        }
    }
}
const ww = typeof window > "u",
    o_ = ww ? {
        localStorage: new Map
    } : window,
    uo = o_.localStorage,
    a_ = t => t.replace(/([A-Z])/g, "_$1").toLowerCase(),
    js = (t, {
        defaultValue: e = void 0,
        removeFromUrl: r = !1
    } = {}) => {
        if (ww) return e;
        const i = `base44_${a_(t)}`,
            a = new URLSearchParams(window.location.search),
            u = a.get(t);
        if (r) {
            a.delete(t);
            const f = `${window.location.pathname}${a.toString()?`?${a.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, f)
        }
        if (u) return uo.setItem(i, u), u;
        if (e) return uo.setItem(i, e), e;
        const c = uo.getItem(i);
        return c || null
    },
    l_ = () => (js("clear_access_token") === "true" && (uo.removeItem("base44_access_token"), uo.removeItem("token")), {
        appId: js("app_id", {
            defaultValue: "69bf67b4dc57553637e61cc1"
        }),
        token: js("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: js("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: js("functions_version", {
            defaultValue: "prod"
        }),
        appBaseUrl: js("app_base_url", {
            defaultValue: void 0
        })
    }),
    ro = { ...l_()
    },
    {
        appId: u_,
        token: c_,
        functionsVersion: d_,
        appBaseUrl: f_
    } = ro,
    so = i_({
        appId: u_,
        token: c_,
        functionsVersion: d_,
        serverUrl: "",
        requiresAuth: !1,
        appBaseUrl: f_
    });

function h_({}) {
    var a;
    const e = j0().pathname.substring(1),
        {
            data: r,
            isFetched: i
        } = gE({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await so.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return C.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: C.jsx("div", {
            className: "max-w-md w-full",
            children: C.jsxs("div", {
                className: "text-center space-y-6",
                children: [C.jsxs("div", {
                    className: "space-y-2",
                    children: [C.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), C.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), C.jsxs("div", {
                    className: "space-y-3",
                    children: [C.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), C.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", C.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', e, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && r.isAuthenticated && ((a = r.user) == null ? void 0 : a.role) === "admin" && C.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: C.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [C.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: C.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), C.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [C.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), C.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), C.jsx("div", {
                    className: "pt-6",
                    children: C.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [C.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: C.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const xw = j.createContext(),
    p_ = ({
        children: t
    }) => {
        const [e, r] = j.useState(null), [i, a] = j.useState(!1), [u, c] = j.useState(!0), [f, h] = j.useState(!0), [m, g] = j.useState(null), [y, w] = j.useState(null);
        j.useEffect(() => {
            k()
        }, []);
        const k = async () => {
                var R, V;
                try {
                    h(!0), g(null);
                    const M = to({
                        baseURL: "/api/apps/public",
                        headers: {
                            "X-App-Id": ro.appId
                        },
                        token: ro.token,
                        interceptResponses: !0
                    });
                    try {
                        const N = await M.get(`/prod/public-settings/by-id/${ro.appId}`);
                        w(N), ro.token ? await S() : (c(!1), a(!1)), h(!1)
                    } catch (N) {
                        if (console.error("App state check failed:", N), N.status === 403 && ((V = (R = N.data) == null ? void 0 : R.extra_data) != null && V.reason)) {
                            const B = N.data.extra_data.reason;
                            g(B === "auth_required" ? {
                                type: "auth_required",
                                message: "Authentication required"
                            } : B === "user_not_registered" ? {
                                type: "user_not_registered",
                                message: "User not registered for this app"
                            } : {
                                type: B,
                                message: N.message
                            })
                        } else g({
                            type: "unknown",
                            message: N.message || "Failed to load app"
                        });
                        h(!1), c(!1)
                    }
                } catch (M) {
                    console.error("Unexpected error:", M), g({
                        type: "unknown",
                        message: M.message || "An unexpected error occurred"
                    }), h(!1), c(!1)
                }
            },
            S = async () => {
                try {
                    c(!0);
                    const R = await so.auth.me();
                    r(R), a(!0), c(!1)
                } catch (R) {
                    console.error("User auth check failed:", R), c(!1), a(!1), (R.status === 401 || R.status === 403) && g({
                        type: "auth_required",
                        message: "Authentication required"
                    })
                }
            },
            b = (R = !0) => {
                r(null), a(!1), R ? so.auth.logout(window.location.href) : so.auth.logout()
            },
            x = () => {
                so.auth.redirectToLogin(window.location.href)
            };
        return C.jsx(xw.Provider, {
            value: {
                user: e,
                isAuthenticated: i,
                isLoadingAuth: u,
                isLoadingPublicSettings: f,
                authError: m,
                appPublicSettings: y,
                logout: b,
                navigateToLogin: x,
                checkAppState: k
            },
            children: t
        })
    },
    m_ = () => {
        const t = j.useContext(xw);
        if (!t) throw new Error("useAuth must be used within an AuthProvider");
        return t
    },
    g_ = () => C.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: C.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: C.jsxs("div", {
                className: "text-center",
                children: [C.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: C.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: C.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), C.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), C.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), C.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [C.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), C.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [C.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), C.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), C.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    Tf = j.createContext({});

function Pf(t) {
    const e = j.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const Bl = j.createContext(null),
    _f = j.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
class y_ extends j.Component {
    getSnapshotBeforeUpdate(e) {
        const r = this.props.childRef.current;
        if (r && e.isPresent && !this.props.isPresent) {
            const i = this.props.sizeRef.current;
            i.height = r.offsetHeight || 0, i.width = r.offsetWidth || 0, i.top = r.offsetTop, i.left = r.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function v_({
    children: t,
    isPresent: e
}) {
    const r = j.useId(),
        i = j.useRef(null),
        a = j.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: u
        } = j.useContext(_f);
    return j.useInsertionEffect(() => {
        const {
            width: c,
            height: f,
            top: h,
            left: m
        } = a.current;
        if (e || !i.current || !c || !f) return;
        i.current.dataset.motionPopId = r;
        const g = document.createElement("style");
        return u && (g.nonce = u), document.head.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `), () => {
            document.head.removeChild(g)
        }
    }, [e]), C.jsx(y_, {
        isPresent: e,
        childRef: i,
        sizeRef: a,
        children: j.cloneElement(t, {
            ref: i
        })
    })
}
const w_ = ({
    children: t,
    initial: e,
    isPresent: r,
    onExitComplete: i,
    custom: a,
    presenceAffectsLayout: u,
    mode: c
}) => {
    const f = Pf(x_),
        h = j.useId(),
        m = j.useCallback(y => {
            f.set(y, !0);
            for (const w of f.values())
                if (!w) return;
            i && i()
        }, [f, i]),
        g = j.useMemo(() => ({
            id: h,
            initial: e,
            isPresent: r,
            custom: a,
            onExitComplete: m,
            register: y => (f.set(y, !1), () => f.delete(y))
        }), u ? [Math.random(), m] : [r, m]);
    return j.useMemo(() => {
        f.forEach((y, w) => f.set(w, !1))
    }, [r]), j.useEffect(() => {
        !r && !f.size && i && i()
    }, [r]), c === "popLayout" && (t = C.jsx(v_, {
        isPresent: r,
        children: t
    })), C.jsx(Bl.Provider, {
        value: g,
        children: t
    })
};

function x_() {
    return new Map
}

function Sw(t = !0) {
    const e = j.useContext(Bl);
    if (e === null) return [!0, null];
    const {
        isPresent: r,
        onExitComplete: i,
        register: a
    } = e, u = j.useId();
    j.useEffect(() => {
        t && a(u)
    }, [t]);
    const c = j.useCallback(() => t && i && i(u), [u, i, t]);
    return !r && i ? [!1, c] : [!0]
}
const el = t => t.key || "";

function yy(t) {
    const e = [];
    return j.Children.forEach(t, r => {
        j.isValidElement(r) && e.push(r)
    }), e
}
const Rf = typeof window < "u",
    bw = Rf ? j.useLayoutEffect : j.useEffect,
    S_ = ({
        children: t,
        custom: e,
        initial: r = !0,
        onExitComplete: i,
        presenceAffectsLayout: a = !0,
        mode: u = "sync",
        propagate: c = !1
    }) => {
        const [f, h] = Sw(c), m = j.useMemo(() => yy(t), [t]), g = c && !f ? [] : m.map(el), y = j.useRef(!0), w = j.useRef(m), k = Pf(() => new Map), [S, b] = j.useState(m), [x, R] = j.useState(m);
        bw(() => {
            y.current = !1, w.current = m;
            for (let N = 0; N < x.length; N++) {
                const B = el(x[N]);
                g.includes(B) ? k.delete(B) : k.get(B) !== !0 && k.set(B, !1)
            }
        }, [x, g.length, g.join("-")]);
        const V = [];
        if (m !== S) {
            let N = [...m];
            for (let B = 0; B < x.length; B++) {
                const K = x[B],
                    G = el(K);
                g.includes(G) || (N.splice(B, 0, K), V.push(K))
            }
            u === "wait" && V.length && (N = V), R(yy(N)), b(m);
            return
        }
        const {
            forceRender: M
        } = j.useContext(Tf);
        return C.jsx(C.Fragment, {
            children: x.map(N => {
                const B = el(N),
                    K = c && !f ? !1 : m === x || g.includes(B),
                    G = () => {
                        if (k.has(B)) k.set(B, !0);
                        else return;
                        let F = !0;
                        k.forEach(J => {
                            J || (F = !1)
                        }), F && (M == null || M(), R(w.current), c && (h == null || h()), i && i())
                    };
                return C.jsx(w_, {
                    isPresent: K,
                    initial: !y.current || r ? void 0 : !1,
                    custom: K ? void 0 : e,
                    presenceAffectsLayout: a,
                    mode: u,
                    onExitComplete: K ? void 0 : G,
                    children: N
                }, B)
            })
        })
    },
    Ut = t => t;
let kw = Ut;

function Af(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const ni = (t, e, r) => {
        const i = e - t;
        return i === 0 ? 1 : (r - t) / i
    },
    Bn = t => t * 1e3,
    Un = t => t / 1e3,
    b_ = {
        useManualTiming: !1
    };

function k_(t) {
    let e = new Set,
        r = new Set,
        i = !1,
        a = !1;
    const u = new WeakSet;
    let c = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function f(m) {
        u.has(m) && (h.schedule(m), t()), m(c)
    }
    const h = {
        schedule: (m, g = !1, y = !1) => {
            const k = y && i ? e : r;
            return g && u.add(m), k.has(m) || k.add(m), m
        },
        cancel: m => {
            r.delete(m), u.delete(m)
        },
        process: m => {
            if (c = m, i) {
                a = !0;
                return
            }
            i = !0, [e, r] = [r, e], e.forEach(f), e.clear(), i = !1, a && (a = !1, h.process(m))
        }
    };
    return h
}
const tl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    E_ = 40;

function Ew(t, e) {
    let r = !1,
        i = !0;
    const a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        u = () => r = !0,
        c = tl.reduce((R, V) => (R[V] = k_(u), R), {}),
        {
            read: f,
            resolveKeyframes: h,
            update: m,
            preRender: g,
            render: y,
            postRender: w
        } = c,
        k = () => {
            const R = performance.now();
            r = !1, a.delta = i ? 1e3 / 60 : Math.max(Math.min(R - a.timestamp, E_), 1), a.timestamp = R, a.isProcessing = !0, f.process(a), h.process(a), m.process(a), g.process(a), y.process(a), w.process(a), a.isProcessing = !1, r && e && (i = !1, t(k))
        },
        S = () => {
            r = !0, i = !0, a.isProcessing || t(k)
        };
    return {
        schedule: tl.reduce((R, V) => {
            const M = c[V];
            return R[V] = (N, B = !1, K = !1) => (r || S(), M.schedule(N, B, K)), R
        }, {}),
        cancel: R => {
            for (let V = 0; V < tl.length; V++) c[tl[V]].cancel(R)
        },
        state: a,
        steps: c
    }
}
const {
    schedule: Be,
    cancel: Cr,
    state: ct,
    steps: nd
} = Ew(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ut, !0), Cw = j.createContext({
    strict: !1
}), vy = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, ri = {};
for (const t in vy) ri[t] = {
    isEnabled: e => vy[t].some(r => !!e[r])
};

function C_(t) {
    for (const e in t) ri[e] = { ...ri[e],
        ...t[e]
    }
}
const T_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function kl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || T_.has(t)
}
let Tw = t => !kl(t);

function P_(t) {
    t && (Tw = e => e.startsWith("on") ? !kl(e) : t(e))
}
try {
    P_(require("@emotion/is-prop-valid").default)
} catch {}

function __(t, e, r) {
    const i = {};
    for (const a in t) a === "values" && typeof t.values == "object" || (Tw(a) || r === !0 && kl(a) || !e && !kl(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}

function R_(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        r = (...i) => t(...i);
    return new Proxy(r, {
        get: (i, a) => a === "create" ? t : (e.has(a) || e.set(a, t(a)), e.get(a))
    })
}
const Ul = j.createContext({});

function yo(t) {
    return typeof t == "string" || Array.isArray(t)
}

function zl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Of = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Nf = ["initial", ...Of];

function $l(t) {
    return zl(t.animate) || Nf.some(e => yo(t[e]))
}

function Pw(t) {
    return !!($l(t) || t.variants)
}

function A_(t, e) {
    if ($l(t)) {
        const {
            initial: r,
            animate: i
        } = t;
        return {
            initial: r === !1 || yo(r) ? r : void 0,
            animate: yo(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function O_(t) {
    const {
        initial: e,
        animate: r
    } = A_(t, j.useContext(Ul));
    return j.useMemo(() => ({
        initial: e,
        animate: r
    }), [wy(e), wy(r)])
}

function wy(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const N_ = Symbol.for("motionComponentSymbol");

function Is(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function L_(t, e, r) {
    return j.useCallback(i => {
        i && t.onMount && t.onMount(i), e && (i ? e.mount(i) : e.unmount()), r && (typeof r == "function" ? r(i) : Is(r) && (r.current = i))
    }, [e])
}
const Lf = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    M_ = "framerAppearId",
    _w = "data-" + Lf(M_),
    {
        schedule: Mf
    } = Ew(queueMicrotask, !1),
    Rw = j.createContext({});

function D_(t, e, r, i, a) {
    var u, c;
    const {
        visualElement: f
    } = j.useContext(Ul), h = j.useContext(Cw), m = j.useContext(Bl), g = j.useContext(_f).reducedMotion, y = j.useRef(null);
    i = i || h.renderer, !y.current && i && (y.current = i(t, {
        visualState: e,
        parent: f,
        props: r,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: g
    }));
    const w = y.current,
        k = j.useContext(Rw);
    w && !w.projection && a && (w.type === "html" || w.type === "svg") && j_(y.current, r, a, k);
    const S = j.useRef(!1);
    j.useInsertionEffect(() => {
        w && S.current && w.update(r, m)
    });
    const b = r[_w],
        x = j.useRef(!!b && !(!((u = window.MotionHandoffIsComplete) === null || u === void 0) && u.call(window, b)) && ((c = window.MotionHasOptimisedAnimation) === null || c === void 0 ? void 0 : c.call(window, b)));
    return bw(() => {
        w && (S.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), Mf.render(w.render), x.current && w.animationState && w.animationState.animateChanges())
    }), j.useEffect(() => {
        w && (!x.current && w.animationState && w.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var R;
            (R = window.MotionHandoffMarkAsComplete) === null || R === void 0 || R.call(window, b)
        }), x.current = !1))
    }), w
}

function j_(t, e, r, i) {
    const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: m
    } = e;
    t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : Aw(t.parent)), t.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || f && Is(f),
        visualElement: t,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
    })
}

function Aw(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Aw(t.parent)
}

function I_({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: r,
    useVisualState: i,
    Component: a
}) {
    var u, c;
    t && C_(t);

    function f(m, g) {
        let y;
        const w = { ...j.useContext(_f),
                ...m,
                layoutId: F_(m)
            },
            {
                isStatic: k
            } = w,
            S = O_(m),
            b = i(m, k);
        if (!k && Rf) {
            V_();
            const x = B_(w);
            y = x.MeasureLayout, S.visualElement = D_(a, b, w, e, x.ProjectionNode)
        }
        return C.jsxs(Ul.Provider, {
            value: S,
            children: [y && S.visualElement ? C.jsx(y, {
                visualElement: S.visualElement,
                ...w
            }) : null, r(a, m, L_(b, S.visualElement, g), b, k, S.visualElement)]
        })
    }
    f.displayName = `motion.${typeof a=="string"?a:`create(${(c=(u=a.displayName)!==null&&u!==void 0?u:a.name)!==null&&c!==void 0?c:""})`}`;
    const h = j.forwardRef(f);
    return h[N_] = a, h
}

function F_({
    layoutId: t
}) {
    const e = j.useContext(Tf).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function V_(t, e) {
    j.useContext(Cw).strict
}

function B_(t) {
    const {
        drag: e,
        layout: r
    } = ri;
    if (!e && !r) return {};
    const i = { ...e,
        ...r
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || r != null && r.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const U_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Df(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(U_.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function xy(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((r, i) => {
        e[0][i] = r.get(), e[1][i] = r.getVelocity()
    }), e
}

function jf(t, e, r, i) {
    if (typeof e == "function") {
        const [a, u] = xy(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [a, u] = xy(i);
        e = e(r !== void 0 ? r : t.custom, a, u)
    }
    return e
}
const $d = t => Array.isArray(t),
    z_ = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    $_ = t => $d(t) ? t[t.length - 1] || 0 : t,
    xt = t => !!(t && t.getVelocity);

function hl(t) {
    const e = xt(t) ? t.get() : t;
    return z_(e) ? e.toValue() : e
}

function H_({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onUpdate: r
}, i, a, u) {
    const c = {
        latestValues: q_(i, a, u, t),
        renderState: e()
    };
    return r && (c.onMount = f => r({
        props: i,
        current: f,
        ...c
    }), c.onUpdate = f => r(f)), c
}
const Ow = t => (e, r) => {
    const i = j.useContext(Ul),
        a = j.useContext(Bl),
        u = () => H_(t, e, i, a);
    return r ? u() : Pf(u)
};

function q_(t, e, r, i) {
    const a = {},
        u = i(t, {});
    for (const w in u) a[w] = hl(u[w]);
    let {
        initial: c,
        animate: f
    } = t;
    const h = $l(t),
        m = Pw(t);
    e && m && !h && t.inherit !== !1 && (c === void 0 && (c = e.initial), f === void 0 && (f = e.animate));
    let g = r ? r.initial === !1 : !1;
    g = g || c === !1;
    const y = g ? f : c;
    if (y && typeof y != "boolean" && !zl(y)) {
        const w = Array.isArray(y) ? y : [y];
        for (let k = 0; k < w.length; k++) {
            const S = jf(t, w[k]);
            if (S) {
                const {
                    transitionEnd: b,
                    transition: x,
                    ...R
                } = S;
                for (const V in R) {
                    let M = R[V];
                    if (Array.isArray(M)) {
                        const N = g ? M.length - 1 : 0;
                        M = M[N]
                    }
                    M !== null && (a[V] = M)
                }
                for (const V in b) a[V] = b[V]
            }
        }
    }
    return a
}
const ai = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    cs = new Set(ai),
    Nw = t => e => typeof e == "string" && e.startsWith(t),
    Lw = Nw("--"),
    W_ = Nw("var(--"),
    If = t => W_(t) ? K_.test(t.split("/*")[0].trim()) : !1,
    K_ = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Mw = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    zn = (t, e, r) => r > e ? e : r < t ? t : r,
    li = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    vo = { ...li,
        transform: t => zn(0, 1, t)
    },
    nl = { ...li,
        default: 1
    },
    Mo = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    hr = Mo("deg"),
    kn = Mo("%"),
    de = Mo("px"),
    Q_ = Mo("vh"),
    G_ = Mo("vw"),
    Sy = { ...kn,
        parse: t => kn.parse(t) / 100,
        transform: t => kn.transform(t * 100)
    },
    Y_ = {
        borderWidth: de,
        borderTopWidth: de,
        borderRightWidth: de,
        borderBottomWidth: de,
        borderLeftWidth: de,
        borderRadius: de,
        radius: de,
        borderTopLeftRadius: de,
        borderTopRightRadius: de,
        borderBottomRightRadius: de,
        borderBottomLeftRadius: de,
        width: de,
        maxWidth: de,
        height: de,
        maxHeight: de,
        top: de,
        right: de,
        bottom: de,
        left: de,
        padding: de,
        paddingTop: de,
        paddingRight: de,
        paddingBottom: de,
        paddingLeft: de,
        margin: de,
        marginTop: de,
        marginRight: de,
        marginBottom: de,
        marginLeft: de,
        backgroundPositionX: de,
        backgroundPositionY: de
    },
    X_ = {
        rotate: hr,
        rotateX: hr,
        rotateY: hr,
        rotateZ: hr,
        scale: nl,
        scaleX: nl,
        scaleY: nl,
        scaleZ: nl,
        skew: hr,
        skewX: hr,
        skewY: hr,
        distance: de,
        translateX: de,
        translateY: de,
        translateZ: de,
        x: de,
        y: de,
        z: de,
        perspective: de,
        transformPerspective: de,
        opacity: vo,
        originX: Sy,
        originY: Sy,
        originZ: de
    },
    by = { ...li,
        transform: Math.round
    },
    Ff = { ...Y_,
        ...X_,
        zIndex: by,
        size: de,
        fillOpacity: vo,
        strokeOpacity: vo,
        numOctaves: by
    },
    J_ = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Z_ = ai.length;

function eR(t, e, r) {
    let i = "",
        a = !0;
    for (let u = 0; u < Z_; u++) {
        const c = ai[u],
            f = t[c];
        if (f === void 0) continue;
        let h = !0;
        if (typeof f == "number" ? h = f === (c.startsWith("scale") ? 1 : 0) : h = parseFloat(f) === 0, !h || r) {
            const m = Mw(f, Ff[c]);
            if (!h) {
                a = !1;
                const g = J_[c] || c;
                i += `${g}(${m}) `
            }
            r && (e[c] = m)
        }
    }
    return i = i.trim(), r ? i = r(e, a ? "" : i) : a && (i = "none"), i
}

function Vf(t, e, r) {
    const {
        style: i,
        vars: a,
        transformOrigin: u
    } = t;
    let c = !1,
        f = !1;
    for (const h in e) {
        const m = e[h];
        if (cs.has(h)) {
            c = !0;
            continue
        } else if (Lw(h)) {
            a[h] = m;
            continue
        } else {
            const g = Mw(m, Ff[h]);
            h.startsWith("origin") ? (f = !0, u[h] = g) : i[h] = g
        }
    }
    if (e.transform || (c || r ? i.transform = eR(e, t.transform, r) : i.transform && (i.transform = "none")), f) {
        const {
            originX: h = "50%",
            originY: m = "50%",
            originZ: g = 0
        } = u;
        i.transformOrigin = `${h} ${m} ${g}`
    }
}
const tR = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    nR = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function rR(t, e, r = 1, i = 0, a = !0) {
    t.pathLength = 1;
    const u = a ? tR : nR;
    t[u.offset] = de.transform(-i);
    const c = de.transform(e),
        f = de.transform(r);
    t[u.array] = `${c} ${f}`
}

function ky(t, e, r) {
    return typeof t == "string" ? t : de.transform(e + r * t)
}

function sR(t, e, r) {
    const i = ky(e, t.x, t.width),
        a = ky(r, t.y, t.height);
    return `${i} ${a}`
}

function Bf(t, {
    attrX: e,
    attrY: r,
    attrScale: i,
    originX: a,
    originY: u,
    pathLength: c,
    pathSpacing: f = 1,
    pathOffset: h = 0,
    ...m
}, g, y) {
    if (Vf(t, m, y), g) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: w,
        style: k,
        dimensions: S
    } = t;
    w.transform && (S && (k.transform = w.transform), delete w.transform), S && (a !== void 0 || u !== void 0 || k.transform) && (k.transformOrigin = sR(S, a !== void 0 ? a : .5, u !== void 0 ? u : .5)), e !== void 0 && (w.x = e), r !== void 0 && (w.y = r), i !== void 0 && (w.scale = i), c !== void 0 && rR(w, c, f, h, !1)
}
const Uf = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Dw = () => ({ ...Uf(),
        attrs: {}
    }),
    zf = t => typeof t == "string" && t.toLowerCase() === "svg";

function jw(t, {
    style: e,
    vars: r
}, i, a) {
    Object.assign(t.style, e, a && a.getProjectionStyles(i));
    for (const u in r) t.style.setProperty(u, r[u])
}
const Iw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Fw(t, e, r, i) {
    jw(t, e, void 0, i);
    for (const a in e.attrs) t.setAttribute(Iw.has(a) ? a : Lf(a), e.attrs[a])
}
const El = {};

function iR(t) {
    Object.assign(El, t)
}

function Vw(t, {
    layout: e,
    layoutId: r
}) {
    return cs.has(t) || t.startsWith("origin") || (e || r !== void 0) && (!!El[t] || t === "opacity")
}

function $f(t, e, r) {
    var i;
    const {
        style: a
    } = t, u = {};
    for (const c in a)(xt(a[c]) || e.style && xt(e.style[c]) || Vw(c, t) || ((i = r == null ? void 0 : r.getValue(c)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (u[c] = a[c]);
    return u
}

function Bw(t, e, r) {
    const i = $f(t, e, r);
    for (const a in t)
        if (xt(t[a]) || xt(e[a])) {
            const u = ai.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[u] = t[a]
        }
    return i
}

function oR(t, e) {
    try {
        e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
    } catch {
        e.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Ey = ["x", "y", "width", "height", "cx", "cy", "r"],
    aR = {
        useVisualState: Ow({
            scrapeMotionValuesFromProps: Bw,
            createRenderState: Dw,
            onUpdate: ({
                props: t,
                prevProps: e,
                current: r,
                renderState: i,
                latestValues: a
            }) => {
                if (!r) return;
                let u = !!t.drag;
                if (!u) {
                    for (const f in a)
                        if (cs.has(f)) {
                            u = !0;
                            break
                        }
                }
                if (!u) return;
                let c = !e;
                if (e)
                    for (let f = 0; f < Ey.length; f++) {
                        const h = Ey[f];
                        t[h] !== e[h] && (c = !0)
                    }
                c && Be.read(() => {
                    oR(r, i), Be.render(() => {
                        Bf(i, a, zf(r.tagName), t.transformTemplate), Fw(r, i)
                    })
                })
            }
        })
    },
    lR = {
        useVisualState: Ow({
            scrapeMotionValuesFromProps: $f,
            createRenderState: Uf
        })
    };

function Uw(t, e, r) {
    for (const i in e) !xt(e[i]) && !Vw(i, r) && (t[i] = e[i])
}

function uR({
    transformTemplate: t
}, e) {
    return j.useMemo(() => {
        const r = Uf();
        return Vf(r, e, t), Object.assign({}, r.vars, r.style)
    }, [e])
}

function cR(t, e) {
    const r = t.style || {},
        i = {};
    return Uw(i, r, t), Object.assign(i, uR(t, e)), i
}

function dR(t, e) {
    const r = {},
        i = cR(t, e);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = i, r
}

function fR(t, e, r, i) {
    const a = j.useMemo(() => {
        const u = Dw();
        return Bf(u, e, zf(i), t.transformTemplate), { ...u.attrs,
            style: { ...u.style
            }
        }
    }, [e]);
    if (t.style) {
        const u = {};
        Uw(u, t.style, t), a.style = { ...u,
            ...a.style
        }
    }
    return a
}

function hR(t = !1) {
    return (r, i, a, {
        latestValues: u
    }, c) => {
        const h = (Df(r) ? fR : dR)(i, u, c, r),
            m = __(i, typeof r == "string", t),
            g = r !== j.Fragment ? { ...m,
                ...h,
                ref: a
            } : {},
            {
                children: y
            } = i,
            w = j.useMemo(() => xt(y) ? y.get() : y, [y]);
        return j.createElement(r, { ...g,
            children: w
        })
    }
}

function pR(t, e) {
    return function(i, {
        forwardMotionProps: a
    } = {
        forwardMotionProps: !1
    }) {
        const c = { ...Df(i) ? aR : lR,
            preloadedFeatures: t,
            useRender: hR(a),
            createVisualElement: e,
            Component: i
        };
        return I_(c)
    }
}

function zw(t, e) {
    if (!Array.isArray(e)) return !1;
    const r = e.length;
    if (r !== t.length) return !1;
    for (let i = 0; i < r; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Hl(t, e, r) {
    const i = t.getProps();
    return jf(i, e, r !== void 0 ? r : i.custom, t)
}
const mR = Af(() => window.ScrollTimeline !== void 0);
class gR {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(e => "finished" in e ? e.finished : e))
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, r) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = r
    }
    attachTimeline(e, r) {
        const i = this.animations.map(a => {
            if (mR() && a.attachTimeline) return a.attachTimeline(e);
            if (typeof r == "function") return r(a)
        });
        return () => {
            i.forEach((a, u) => {
                a && a(), this.animations[u].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let r = 0; r < this.animations.length; r++) e = Math.max(e, this.animations[r].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(r => r[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class yR extends gR {
    then(e, r) {
        return Promise.all(this.animations).then(e).catch(r)
    }
}

function Hf(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Hd = 2e4;

function $w(t) {
    let e = 0;
    const r = 50;
    let i = t.next(e);
    for (; !i.done && e < Hd;) e += r, i = t.next(e);
    return e >= Hd ? 1 / 0 : e
}

function qf(t) {
    return typeof t == "function"
}

function Cy(t, e) {
    t.timeline = e, t.onfinish = null
}
const Wf = t => Array.isArray(t) && typeof t[0] == "number",
    vR = {
        linearEasing: void 0
    };

function wR(t, e) {
    const r = Af(t);
    return () => {
        var i;
        return (i = vR[e]) !== null && i !== void 0 ? i : r()
    }
}
const Cl = wR(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Hw = (t, e, r = 10) => {
        let i = "";
        const a = Math.max(Math.round(e / r), 2);
        for (let u = 0; u < a; u++) i += t(ni(0, a - 1, u)) + ", ";
        return `linear(${i.substring(0,i.length-2)})`
    };

function qw(t) {
    return !!(typeof t == "function" && Cl() || !t || typeof t == "string" && (t in qd || Cl()) || Wf(t) || Array.isArray(t) && t.every(qw))
}
const io = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
    qd = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: io([0, .65, .55, 1]),
        circOut: io([.55, 0, 1, .45]),
        backIn: io([.31, .01, .66, -.59]),
        backOut: io([.33, 1.53, .69, .99])
    };

function Ww(t, e) {
    if (t) return typeof t == "function" && Cl() ? Hw(t, e) : Wf(t) ? io(t) : Array.isArray(t) ? t.map(r => Ww(r, e) || qd.easeOut) : qd[t]
}
const un = {
    x: !1,
    y: !1
};

function Kw() {
    return un.x || un.y
}

function xR(t, e, r) {
    var i;
    if (t instanceof Element) return [t];
    if (typeof t == "string") {
        let a = document;
        const u = (i = void 0) !== null && i !== void 0 ? i : a.querySelectorAll(t);
        return u ? Array.from(u) : []
    }
    return Array.from(t)
}

function Qw(t, e) {
    const r = xR(t),
        i = new AbortController,
        a = {
            passive: !0,
            ...e,
            signal: i.signal
        };
    return [r, a, () => i.abort()]
}

function Ty(t) {
    return e => {
        e.pointerType === "touch" || Kw() || t(e)
    }
}

function SR(t, e, r = {}) {
    const [i, a, u] = Qw(t, r), c = Ty(f => {
        const {
            target: h
        } = f, m = e(f);
        if (typeof m != "function" || !h) return;
        const g = Ty(y => {
            m(y), h.removeEventListener("pointerleave", g)
        });
        h.addEventListener("pointerleave", g, a)
    });
    return i.forEach(f => {
        f.addEventListener("pointerenter", c, a)
    }), u
}
const Gw = (t, e) => e ? t === e ? !0 : Gw(t, e.parentElement) : !1,
    Kf = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    bR = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function kR(t) {
    return bR.has(t.tagName) || t.tabIndex !== -1
}
const oo = new WeakSet;

function Py(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function rd(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const ER = (t, e) => {
    const r = t.currentTarget;
    if (!r) return;
    const i = Py(() => {
        if (oo.has(r)) return;
        rd(r, "down");
        const a = Py(() => {
                rd(r, "up")
            }),
            u = () => rd(r, "cancel");
        r.addEventListener("keyup", a, e), r.addEventListener("blur", u, e)
    });
    r.addEventListener("keydown", i, e), r.addEventListener("blur", () => r.removeEventListener("keydown", i), e)
};

function _y(t) {
    return Kf(t) && !Kw()
}

function CR(t, e, r = {}) {
    const [i, a, u] = Qw(t, r), c = f => {
        const h = f.currentTarget;
        if (!_y(f) || oo.has(h)) return;
        oo.add(h);
        const m = e(f),
            g = (k, S) => {
                window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", w), !(!_y(k) || !oo.has(h)) && (oo.delete(h), typeof m == "function" && m(k, {
                    success: S
                }))
            },
            y = k => {
                g(k, r.useGlobalTarget || Gw(h, k.target))
            },
            w = k => {
                g(k, !1)
            };
        window.addEventListener("pointerup", y, a), window.addEventListener("pointercancel", w, a)
    };
    return i.forEach(f => {
        !kR(f) && f.getAttribute("tabindex") === null && (f.tabIndex = 0), (r.useGlobalTarget ? window : f).addEventListener("pointerdown", c, a), f.addEventListener("focus", m => ER(m, a), a)
    }), u
}

function TR(t) {
    return t === "x" || t === "y" ? un[t] ? null : (un[t] = !0, () => {
        un[t] = !1
    }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
        un.x = un.y = !1
    })
}
const Yw = new Set(["width", "height", "top", "left", "right", "bottom", ...ai]);
let pl;

function PR() {
    pl = void 0
}
const En = {
    now: () => (pl === void 0 && En.set(ct.isProcessing || b_.useManualTiming ? ct.timestamp : performance.now()), pl),
    set: t => {
        pl = t, queueMicrotask(PR)
    }
};

function Qf(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function Gf(t, e) {
    const r = t.indexOf(e);
    r > -1 && t.splice(r, 1)
}
class Yf {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Qf(this.subscriptions, e), () => Gf(this.subscriptions, e)
    }
    notify(e, r, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1) this.subscriptions[0](e, r, i);
            else
                for (let u = 0; u < a; u++) {
                    const c = this.subscriptions[u];
                    c && c(e, r, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Xw(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ry = 30,
    _R = t => !isNaN(parseFloat(t));
class RR {
    constructor(e, r = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, a = !0) => {
            const u = En.now();
            this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), a && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = r.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = En.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = _R(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, r) {
        this.events[e] || (this.events[e] = new Yf);
        const i = this.events[e].add(r);
        return e === "change" ? () => {
            i(), Be.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, r) {
        this.passiveEffect = e, this.stopPassiveEffect = r
    }
    set(e, r = !0) {
        !r || !this.passiveEffect ? this.updateAndNotify(e, r) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, r, i) {
        this.set(r), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, r = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = En.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ry) return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ry);
        return Xw(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(e) {
        return this.stop(), new Promise(r => {
            this.hasAnimated = !0, this.animation = e(r), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function wo(t, e) {
    return new RR(t, e)
}

function AR(t, e, r) {
    t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, wo(r))
}

function OR(t, e) {
    const r = Hl(t, e);
    let {
        transitionEnd: i = {},
        transition: a = {},
        ...u
    } = r || {};
    u = { ...u,
        ...i
    };
    for (const c in u) {
        const f = $_(u[c]);
        AR(t, c, f)
    }
}

function NR(t) {
    return !!(xt(t) && t.add)
}

function Wd(t, e) {
    const r = t.getValue("willChange");
    if (NR(r)) return r.add(e)
}

function Jw(t) {
    return t.props[_w]
}
const Zw = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t,
    LR = 1e-7,
    MR = 12;

function DR(t, e, r, i, a) {
    let u, c, f = 0;
    do c = e + (r - e) / 2, u = Zw(c, i, a) - t, u > 0 ? r = c : e = c; while (Math.abs(u) > LR && ++f < MR);
    return c
}

function Do(t, e, r, i) {
    if (t === e && r === i) return Ut;
    const a = u => DR(u, 0, 1, t, r);
    return u => u === 0 || u === 1 ? u : Zw(a(u), e, i)
}
const ex = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    tx = t => e => 1 - t(1 - e),
    nx = Do(.33, 1.53, .69, .99),
    Xf = tx(nx),
    rx = ex(Xf),
    sx = t => (t *= 2) < 1 ? .5 * Xf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Jf = t => 1 - Math.sin(Math.acos(t)),
    ix = tx(Jf),
    ox = ex(Jf),
    ax = t => /^0[^.\s]+$/u.test(t);

function jR(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ax(t) : !0
}
const co = t => Math.round(t * 1e5) / 1e5,
    Zf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function IR(t) {
    return t == null
}
const FR = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    eh = (t, e) => r => !!(typeof r == "string" && FR.test(r) && r.startsWith(t) || e && !IR(r) && Object.prototype.hasOwnProperty.call(r, e)),
    lx = (t, e, r) => i => {
        if (typeof i != "string") return i;
        const [a, u, c, f] = i.match(Zf);
        return {
            [t]: parseFloat(a),
            [e]: parseFloat(u),
            [r]: parseFloat(c),
            alpha: f !== void 0 ? parseFloat(f) : 1
        }
    },
    VR = t => zn(0, 255, t),
    sd = { ...li,
        transform: t => Math.round(VR(t))
    },
    Gr = {
        test: eh("rgb", "red"),
        parse: lx("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: r,
            alpha: i = 1
        }) => "rgba(" + sd.transform(t) + ", " + sd.transform(e) + ", " + sd.transform(r) + ", " + co(vo.transform(i)) + ")"
    };

function BR(t) {
    let e = "",
        r = "",
        i = "",
        a = "";
    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), i = t.substring(5, 7), a = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), i = t.substring(3, 4), a = t.substring(4, 5), e += e, r += r, i += i, a += a), {
        red: parseInt(e, 16),
        green: parseInt(r, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Kd = {
        test: eh("#"),
        parse: BR,
        transform: Gr.transform
    },
    Fs = {
        test: eh("hsl", "hue"),
        parse: lx("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + kn.transform(co(e)) + ", " + kn.transform(co(r)) + ", " + co(vo.transform(i)) + ")"
    },
    vt = {
        test: t => Gr.test(t) || Kd.test(t) || Fs.test(t),
        parse: t => Gr.test(t) ? Gr.parse(t) : Fs.test(t) ? Fs.parse(t) : Kd.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Gr.transform(t) : Fs.transform(t)
    },
    UR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function zR(t) {
    var e, r;
    return isNaN(t) && typeof t == "string" && (((e = t.match(Zf)) === null || e === void 0 ? void 0 : e.length) || 0) + (((r = t.match(UR)) === null || r === void 0 ? void 0 : r.length) || 0) > 0
}
const ux = "number",
    cx = "color",
    $R = "var",
    HR = "var(",
    Ay = "${}",
    qR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function xo(t) {
    const e = t.toString(),
        r = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        a = [];
    let u = 0;
    const f = e.replace(qR, h => (vt.test(h) ? (i.color.push(u), a.push(cx), r.push(vt.parse(h))) : h.startsWith(HR) ? (i.var.push(u), a.push($R), r.push(h)) : (i.number.push(u), a.push(ux), r.push(parseFloat(h))), ++u, Ay)).split(Ay);
    return {
        values: r,
        split: f,
        indexes: i,
        types: a
    }
}

function dx(t) {
    return xo(t).values
}

function fx(t) {
    const {
        split: e,
        types: r
    } = xo(t), i = e.length;
    return a => {
        let u = "";
        for (let c = 0; c < i; c++)
            if (u += e[c], a[c] !== void 0) {
                const f = r[c];
                f === ux ? u += co(a[c]) : f === cx ? u += vt.transform(a[c]) : u += a[c]
            }
        return u
    }
}
const WR = t => typeof t == "number" ? 0 : t;

function KR(t) {
    const e = dx(t);
    return fx(t)(e.map(WR))
}
const Tr = {
        test: zR,
        parse: dx,
        createTransformer: fx,
        getAnimatableNone: KR
    },
    QR = new Set(["brightness", "contrast", "saturate", "opacity"]);

function GR(t) {
    const [e, r] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = r.match(Zf) || [];
    if (!i) return t;
    const a = r.replace(i, "");
    let u = QR.has(e) ? 1 : 0;
    return i !== r && (u *= 100), e + "(" + u + a + ")"
}
const YR = /\b([a-z-]*)\(.*?\)/gu,
    Qd = { ...Tr,
        getAnimatableNone: t => {
            const e = t.match(YR);
            return e ? e.map(GR).join(" ") : t
        }
    },
    XR = { ...Ff,
        color: vt,
        backgroundColor: vt,
        outlineColor: vt,
        fill: vt,
        stroke: vt,
        borderColor: vt,
        borderTopColor: vt,
        borderRightColor: vt,
        borderBottomColor: vt,
        borderLeftColor: vt,
        filter: Qd,
        WebkitFilter: Qd
    },
    th = t => XR[t];

function hx(t, e) {
    let r = th(t);
    return r !== Qd && (r = Tr), r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
}
const JR = new Set(["auto", "none", "0"]);

function ZR(t, e, r) {
    let i = 0,
        a;
    for (; i < t.length && !a;) {
        const u = t[i];
        typeof u == "string" && !JR.has(u) && xo(u).values.length && (a = t[i]), i++
    }
    if (a && r)
        for (const u of e) t[u] = hx(r, a)
}
const Oy = t => t === li || t === de,
    Ny = (t, e) => parseFloat(t.split(", ")[e]),
    Ly = (t, e) => (r, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const a = i.match(/^matrix3d\((.+)\)$/u);
        if (a) return Ny(a[1], e); {
            const u = i.match(/^matrix\((.+)\)$/u);
            return u ? Ny(u[1], t) : 0
        }
    },
    eA = new Set(["x", "y", "z"]),
    tA = ai.filter(t => !eA.has(t));

function nA(t) {
    const e = [];
    return tA.forEach(r => {
        const i = t.getValue(r);
        i !== void 0 && (e.push([r, i.get()]), i.set(r.startsWith("scale") ? 1 : 0))
    }), e
}
const si = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: r = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: Ly(4, 13),
    y: Ly(5, 14)
};
si.translateX = si.x;
si.translateY = si.y;
const os = new Set;
let Gd = !1,
    Yd = !1;

function px() {
    if (Yd) {
        const t = Array.from(os).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            r = new Map;
        e.forEach(i => {
            const a = nA(i);
            a.length && (r.set(i, a), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const a = r.get(i);
            a && a.forEach(([u, c]) => {
                var f;
                (f = i.getValue(u)) === null || f === void 0 || f.set(c)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    Yd = !1, Gd = !1, os.forEach(t => t.complete()), os.clear()
}

function mx() {
    os.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (Yd = !0)
    })
}

function rA() {
    mx(), px()
}
class nh {
    constructor(e, r, i, a, u, c = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = r, this.name = i, this.motionValue = a, this.element = u, this.isAsync = c
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (os.add(this), Gd || (Gd = !0, Be.read(mx), Be.resolveKeyframes(px))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r,
            element: i,
            motionValue: a
        } = this;
        for (let u = 0; u < e.length; u++)
            if (e[u] === null)
                if (u === 0) {
                    const c = a == null ? void 0 : a.get(),
                        f = e[e.length - 1];
                    if (c !== void 0) e[0] = c;
                    else if (i && r) {
                        const h = i.readValue(r, f);
                        h != null && (e[0] = h)
                    }
                    e[0] === void 0 && (e[0] = f), a && c === void 0 && a.set(e[0])
                } else e[u] = e[u - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), os.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, os.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const gx = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    sA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function iA(t) {
    const e = sA.exec(t);
    if (!e) return [, ];
    const [, r, i, a] = e;
    return [`--${r??i}`, a]
}

function yx(t, e, r = 1) {
    const [i, a] = iA(t);
    if (!i) return;
    const u = window.getComputedStyle(e).getPropertyValue(i);
    if (u) {
        const c = u.trim();
        return gx(c) ? parseFloat(c) : c
    }
    return If(a) ? yx(a, e, r + 1) : a
}
const vx = t => e => e.test(t),
    oA = {
        test: t => t === "auto",
        parse: t => t
    },
    wx = [li, de, kn, hr, G_, Q_, oA],
    My = t => wx.find(vx(t));
class xx extends nh {
    constructor(e, r, i, a, u) {
        super(e, r, i, a, u, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: r,
            name: i
        } = this;
        if (!r || !r.current) return;
        super.readKeyframes();
        for (let h = 0; h < e.length; h++) {
            let m = e[h];
            if (typeof m == "string" && (m = m.trim(), If(m))) {
                const g = yx(m, r.current);
                g !== void 0 && (e[h] = g), h === e.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(), !Yw.has(i) || e.length !== 2) return;
        const [a, u] = e, c = My(a), f = My(u);
        if (c !== f)
            if (Oy(c) && Oy(f))
                for (let h = 0; h < e.length; h++) {
                    const m = e[h];
                    typeof m == "string" && (e[h] = parseFloat(m))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: r
        } = this, i = [];
        for (let a = 0; a < e.length; a++) jR(e[a]) && i.push(a);
        i.length && ZR(e, i, r)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: r,
            name: i
        } = this;
        if (!e || !e.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = si[i](e.measureViewportBox(), window.getComputedStyle(e.current)), r[0] = this.measuredOrigin;
        const a = r[r.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var e;
        const {
            element: r,
            name: i,
            unresolvedKeyframes: a
        } = this;
        if (!r || !r.current) return;
        const u = r.getValue(i);
        u && u.jump(this.measuredOrigin, !1);
        const c = a.length - 1,
            f = a[c];
        a[c] = si[i](r.measureViewportBox(), window.getComputedStyle(r.current)), f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([h, m]) => {
            r.getValue(h).set(m)
        }), this.resolveNoneKeyframes()
    }
}
const Dy = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Tr.test(t) || t === "0") && !t.startsWith("url("));

function aA(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== e) return !0
}

function lA(t, e, r, i) {
    const a = t[0];
    if (a === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const u = t[t.length - 1],
        c = Dy(a, e),
        f = Dy(u, e);
    return !c || !f ? !1 : aA(t) || (r === "spring" || qf(r)) && i
}
const uA = t => t !== null;

function ql(t, {
    repeat: e,
    repeatType: r = "loop"
}, i) {
    const a = t.filter(uA),
        u = e && r !== "loop" && e % 2 === 1 ? 0 : a.length - 1;
    return !u || i === void 0 ? a[u] : i
}
const cA = 40;
class Sx {
    constructor({
        autoplay: e = !0,
        delay: r = 0,
        type: i = "keyframes",
        repeat: a = 0,
        repeatDelay: u = 0,
        repeatType: c = "loop",
        ...f
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = En.now(), this.options = {
            autoplay: e,
            delay: r,
            type: i,
            repeat: a,
            repeatDelay: u,
            repeatType: c,
            ...f
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > cA ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && rA(), this._resolved
    }
    onKeyframesResolved(e, r) {
        this.resolvedAt = En.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: a,
            velocity: u,
            delay: c,
            onComplete: f,
            onUpdate: h,
            isGenerator: m
        } = this.options;
        if (!m && !lA(e, i, a, u))
            if (c) this.options.duration = 0;
            else {
                h && h(ql(e, this.options, r)), f && f(), this.resolveFinishedPromise();
                return
            }
        const g = this.initPlayback(e, r);
        g !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: r,
            ...g
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, r) {
        return this.currentFinishedPromise.then(e, r)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}
const He = (t, e, r) => t + (e - t) * r;

function id(t, e, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
}

function dA({
    hue: t,
    saturation: e,
    lightness: r,
    alpha: i
}) {
    t /= 360, e /= 100, r /= 100;
    let a = 0,
        u = 0,
        c = 0;
    if (!e) a = u = c = r;
    else {
        const f = r < .5 ? r * (1 + e) : r + e - r * e,
            h = 2 * r - f;
        a = id(h, f, t + 1 / 3), u = id(h, f, t), c = id(h, f, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: i
    }
}

function Tl(t, e) {
    return r => r > 0 ? e : t
}
const od = (t, e, r) => {
        const i = t * t,
            a = r * (e * e - i) + i;
        return a < 0 ? 0 : Math.sqrt(a)
    },
    fA = [Kd, Gr, Fs],
    hA = t => fA.find(e => e.test(t));

function jy(t) {
    const e = hA(t);
    if (!e) return !1;
    let r = e.parse(t);
    return e === Fs && (r = dA(r)), r
}
const Iy = (t, e) => {
        const r = jy(t),
            i = jy(e);
        if (!r || !i) return Tl(t, e);
        const a = { ...r
        };
        return u => (a.red = od(r.red, i.red, u), a.green = od(r.green, i.green, u), a.blue = od(r.blue, i.blue, u), a.alpha = He(r.alpha, i.alpha, u), Gr.transform(a))
    },
    pA = (t, e) => r => e(t(r)),
    jo = (...t) => t.reduce(pA),
    Xd = new Set(["none", "hidden"]);

function mA(t, e) {
    return Xd.has(t) ? r => r <= 0 ? t : e : r => r >= 1 ? e : t
}

function gA(t, e) {
    return r => He(t, e, r)
}

function rh(t) {
    return typeof t == "number" ? gA : typeof t == "string" ? If(t) ? Tl : vt.test(t) ? Iy : wA : Array.isArray(t) ? bx : typeof t == "object" ? vt.test(t) ? Iy : yA : Tl
}

function bx(t, e) {
    const r = [...t],
        i = r.length,
        a = t.map((u, c) => rh(u)(u, e[c]));
    return u => {
        for (let c = 0; c < i; c++) r[c] = a[c](u);
        return r
    }
}

function yA(t, e) {
    const r = { ...t,
            ...e
        },
        i = {};
    for (const a in r) t[a] !== void 0 && e[a] !== void 0 && (i[a] = rh(t[a])(t[a], e[a]));
    return a => {
        for (const u in i) r[u] = i[u](a);
        return r
    }
}

function vA(t, e) {
    var r;
    const i = [],
        a = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let u = 0; u < e.values.length; u++) {
        const c = e.types[u],
            f = t.indexes[c][a[c]],
            h = (r = t.values[f]) !== null && r !== void 0 ? r : 0;
        i[u] = h, a[c]++
    }
    return i
}
const wA = (t, e) => {
    const r = Tr.createTransformer(e),
        i = xo(t),
        a = xo(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Xd.has(t) && !a.values.length || Xd.has(e) && !i.values.length ? mA(t, e) : jo(bx(vA(i, a), a.values), r) : Tl(t, e)
};

function kx(t, e, r) {
    return typeof t == "number" && typeof e == "number" && typeof r == "number" ? He(t, e, r) : rh(t)(t, e)
}
const xA = 5;

function Ex(t, e, r) {
    const i = Math.max(e - xA, 0);
    return Xw(r - t(i), e - i)
}
const Ke = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    ad = .001;

function SA({
    duration: t = Ke.duration,
    bounce: e = Ke.bounce,
    velocity: r = Ke.velocity,
    mass: i = Ke.mass
}) {
    let a, u, c = 1 - e;
    c = zn(Ke.minDamping, Ke.maxDamping, c), t = zn(Ke.minDuration, Ke.maxDuration, Un(t)), c < 1 ? (a = m => {
        const g = m * c,
            y = g * t,
            w = g - r,
            k = Jd(m, c),
            S = Math.exp(-y);
        return ad - w / k * S
    }, u = m => {
        const y = m * c * t,
            w = y * r + r,
            k = Math.pow(c, 2) * Math.pow(m, 2) * t,
            S = Math.exp(-y),
            b = Jd(Math.pow(m, 2), c);
        return (-a(m) + ad > 0 ? -1 : 1) * ((w - k) * S) / b
    }) : (a = m => {
        const g = Math.exp(-m * t),
            y = (m - r) * t + 1;
        return -ad + g * y
    }, u = m => {
        const g = Math.exp(-m * t),
            y = (r - m) * (t * t);
        return g * y
    });
    const f = 5 / t,
        h = kA(a, u, f);
    if (t = Bn(t), isNaN(h)) return {
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        duration: t
    }; {
        const m = Math.pow(h, 2) * i;
        return {
            stiffness: m,
            damping: c * 2 * Math.sqrt(i * m),
            duration: t
        }
    }
}
const bA = 12;

function kA(t, e, r) {
    let i = r;
    for (let a = 1; a < bA; a++) i = i - t(i) / e(i);
    return i
}

function Jd(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const EA = ["duration", "bounce"],
    CA = ["stiffness", "damping", "mass"];

function Fy(t, e) {
    return e.some(r => t[r] !== void 0)
}

function TA(t) {
    let e = {
        velocity: Ke.velocity,
        stiffness: Ke.stiffness,
        damping: Ke.damping,
        mass: Ke.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!Fy(t, CA) && Fy(t, EA))
        if (t.visualDuration) {
            const r = t.visualDuration,
                i = 2 * Math.PI / (r * 1.2),
                a = i * i,
                u = 2 * zn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = { ...e,
                mass: Ke.mass,
                stiffness: a,
                damping: u
            }
        } else {
            const r = SA(t);
            e = { ...e,
                ...r,
                mass: Ke.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function Cx(t = Ke.visualDuration, e = Ke.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: i,
        restDelta: a
    } = r;
    const u = r.keyframes[0],
        c = r.keyframes[r.keyframes.length - 1],
        f = {
            done: !1,
            value: u
        },
        {
            stiffness: h,
            damping: m,
            mass: g,
            duration: y,
            velocity: w,
            isResolvedFromDuration: k
        } = TA({ ...r,
            velocity: -Un(r.velocity || 0)
        }),
        S = w || 0,
        b = m / (2 * Math.sqrt(h * g)),
        x = c - u,
        R = Un(Math.sqrt(h / g)),
        V = Math.abs(x) < 5;
    i || (i = V ? Ke.restSpeed.granular : Ke.restSpeed.default), a || (a = V ? Ke.restDelta.granular : Ke.restDelta.default);
    let M;
    if (b < 1) {
        const B = Jd(R, b);
        M = K => {
            const G = Math.exp(-b * R * K);
            return c - G * ((S + b * R * x) / B * Math.sin(B * K) + x * Math.cos(B * K))
        }
    } else if (b === 1) M = B => c - Math.exp(-R * B) * (x + (S + R * x) * B);
    else {
        const B = R * Math.sqrt(b * b - 1);
        M = K => {
            const G = Math.exp(-b * R * K),
                F = Math.min(B * K, 300);
            return c - G * ((S + b * R * x) * Math.sinh(F) + B * x * Math.cosh(F)) / B
        }
    }
    const N = {
        calculatedDuration: k && y || null,
        next: B => {
            const K = M(B);
            if (k) f.done = B >= y;
            else {
                let G = 0;
                b < 1 && (G = B === 0 ? Bn(S) : Ex(M, B, K));
                const F = Math.abs(G) <= i,
                    J = Math.abs(c - K) <= a;
                f.done = F && J
            }
            return f.value = f.done ? c : K, f
        },
        toString: () => {
            const B = Math.min($w(N), Hd),
                K = Hw(G => N.next(B * G).value, B, 30);
            return B + "ms " + K
        }
    };
    return N
}

function Vy({
    keyframes: t,
    velocity: e = 0,
    power: r = .8,
    timeConstant: i = 325,
    bounceDamping: a = 10,
    bounceStiffness: u = 500,
    modifyTarget: c,
    min: f,
    max: h,
    restDelta: m = .5,
    restSpeed: g
}) {
    const y = t[0],
        w = {
            done: !1,
            value: y
        },
        k = F => f !== void 0 && F < f || h !== void 0 && F > h,
        S = F => f === void 0 ? h : h === void 0 || Math.abs(f - F) < Math.abs(h - F) ? f : h;
    let b = r * e;
    const x = y + b,
        R = c === void 0 ? x : c(x);
    R !== x && (b = R - y);
    const V = F => -b * Math.exp(-F / i),
        M = F => R + V(F),
        N = F => {
            const J = V(F),
                ee = M(F);
            w.done = Math.abs(J) <= m, w.value = w.done ? R : ee
        };
    let B, K;
    const G = F => {
        k(w.value) && (B = F, K = Cx({
            keyframes: [w.value, S(w.value)],
            velocity: Ex(M, F, w.value),
            damping: a,
            stiffness: u,
            restDelta: m,
            restSpeed: g
        }))
    };
    return G(0), {
        calculatedDuration: null,
        next: F => {
            let J = !1;
            return !K && B === void 0 && (J = !0, N(F), G(F)), B !== void 0 && F >= B ? K.next(F - B) : (!J && N(F), w)
        }
    }
}
const PA = Do(.42, 0, 1, 1),
    _A = Do(0, 0, .58, 1),
    Tx = Do(.42, 0, .58, 1),
    RA = t => Array.isArray(t) && typeof t[0] != "number",
    AA = {
        linear: Ut,
        easeIn: PA,
        easeInOut: Tx,
        easeOut: _A,
        circIn: Jf,
        circInOut: ox,
        circOut: ix,
        backIn: Xf,
        backInOut: rx,
        backOut: nx,
        anticipate: sx
    },
    By = t => {
        if (Wf(t)) {
            kw(t.length === 4);
            const [e, r, i, a] = t;
            return Do(e, r, i, a)
        } else if (typeof t == "string") return AA[t];
        return t
    };

function OA(t, e, r) {
    const i = [],
        a = r || kx,
        u = t.length - 1;
    for (let c = 0; c < u; c++) {
        let f = a(t[c], t[c + 1]);
        if (e) {
            const h = Array.isArray(e) ? e[c] || Ut : e;
            f = jo(h, f)
        }
        i.push(f)
    }
    return i
}

function NA(t, e, {
    clamp: r = !0,
    ease: i,
    mixer: a
} = {}) {
    const u = t.length;
    if (kw(u === e.length), u === 1) return () => e[0];
    if (u === 2 && e[0] === e[1]) return () => e[1];
    const c = t[0] === t[1];
    t[0] > t[u - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const f = OA(e, i, a),
        h = f.length,
        m = g => {
            if (c && g < t[0]) return e[0];
            let y = 0;
            if (h > 1)
                for (; y < t.length - 2 && !(g < t[y + 1]); y++);
            const w = ni(t[y], t[y + 1], g);
            return f[y](w)
        };
    return r ? g => m(zn(t[0], t[u - 1], g)) : m
}

function LA(t, e) {
    const r = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ni(0, e, i);
        t.push(He(r, 1, a))
    }
}

function MA(t) {
    const e = [0];
    return LA(e, t.length - 1), e
}

function DA(t, e) {
    return t.map(r => r * e)
}

function jA(t, e) {
    return t.map(() => e || Tx).splice(0, t.length - 1)
}

function Pl({
    duration: t = 300,
    keyframes: e,
    times: r,
    ease: i = "easeInOut"
}) {
    const a = RA(i) ? i.map(By) : By(i),
        u = {
            done: !1,
            value: e[0]
        },
        c = DA(r && r.length === e.length ? r : MA(e), t),
        f = NA(c, e, {
            ease: Array.isArray(a) ? a : jA(e, a)
        });
    return {
        calculatedDuration: t,
        next: h => (u.value = f(h), u.done = h >= t, u)
    }
}
const IA = t => {
        const e = ({
            timestamp: r
        }) => t(r);
        return {
            start: () => Be.update(e, !0),
            stop: () => Cr(e),
            now: () => ct.isProcessing ? ct.timestamp : En.now()
        }
    },
    FA = {
        decay: Vy,
        inertia: Vy,
        tween: Pl,
        keyframes: Pl,
        spring: Cx
    },
    VA = t => t / 100;
class sh extends Sx {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: h
            } = this.options;
            h && h()
        };
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: u
        } = this.options, c = (a == null ? void 0 : a.KeyframeResolver) || nh, f = (h, m) => this.onKeyframesResolved(h, m);
        this.resolver = new c(u, f, r, i, a), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: r = "keyframes",
            repeat: i = 0,
            repeatDelay: a = 0,
            repeatType: u,
            velocity: c = 0
        } = this.options, f = qf(r) ? r : FA[r] || Pl;
        let h, m;
        f !== Pl && typeof e[0] != "number" && (h = jo(VA, kx(e[0], e[1])), e = [0, 100]);
        const g = f({ ...this.options,
            keyframes: e
        });
        u === "mirror" && (m = f({ ...this.options,
            keyframes: [...e].reverse(),
            velocity: -c
        })), g.calculatedDuration === null && (g.calculatedDuration = $w(g));
        const {
            calculatedDuration: y
        } = g, w = y + a, k = w * (i + 1) - a;
        return {
            generator: g,
            mirroredGenerator: m,
            mapPercentToKeyframes: h,
            calculatedDuration: y,
            resolvedDuration: w,
            totalDuration: k
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, r = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: F
            } = this.options;
            return {
                done: !0,
                value: F[F.length - 1]
            }
        }
        const {
            finalKeyframe: a,
            generator: u,
            mirroredGenerator: c,
            mapPercentToKeyframes: f,
            keyframes: h,
            calculatedDuration: m,
            totalDuration: g,
            resolvedDuration: y
        } = i;
        if (this.startTime === null) return u.next(0);
        const {
            delay: w,
            repeat: k,
            repeatType: S,
            repeatDelay: b,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - g / this.speed, this.startTime)), r ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const R = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            V = this.speed >= 0 ? R < 0 : R > g;
        this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = g);
        let M = this.currentTime,
            N = u;
        if (k) {
            const F = Math.min(this.currentTime, g) / y;
            let J = Math.floor(F),
                ee = F % 1;
            !ee && F >= 1 && (ee = 1), ee === 1 && J--, J = Math.min(J, k + 1), !!(J % 2) && (S === "reverse" ? (ee = 1 - ee, b && (ee -= b / y)) : S === "mirror" && (N = c)), M = zn(0, 1, ee) * y
        }
        const B = V ? {
            done: !1,
            value: h[0]
        } : N.next(M);
        f && (B.value = f(B.value));
        let {
            done: K
        } = B;
        !V && m !== null && (K = this.speed >= 0 ? this.currentTime >= g : this.currentTime <= 0);
        const G = this.holdTime === null && (this.state === "finished" || this.state === "running" && K);
        return G && a !== void 0 && (B.value = ql(h, this.options, a)), x && x(B.value), G && this.finish(), B
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? Un(e.calculatedDuration) : 0
    }
    get time() {
        return Un(this.currentTime)
    }
    set time(e) {
        e = Bn(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const r = this.playbackSpeed !== e;
        this.playbackSpeed = e, r && (this.time = Un(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = IA,
            onPlay: r,
            startTime: i
        } = this.options;
        this.driver || (this.driver = e(u => this.tick(u))), r && r();
        const a = this.driver.now();
        this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = a) : this.startTime = i ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const BA = new Set(["opacity", "clipPath", "filter", "transform"]);

function UA(t, e, r, {
    delay: i = 0,
    duration: a = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: f = "easeInOut",
    times: h
} = {}) {
    const m = {
        [e]: r
    };
    h && (m.offset = h);
    const g = Ww(f, a);
    return Array.isArray(g) && (m.easing = g), t.animate(m, {
        delay: i,
        duration: a,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    })
}
const zA = Af(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    _l = 10,
    $A = 2e4;

function HA(t) {
    return qf(t.type) || t.type === "spring" || !qw(t.ease)
}

function qA(t, e) {
    const r = new sh({ ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const a = [];
    let u = 0;
    for (; !i.done && u < $A;) i = r.sample(u), a.push(i.value), u += _l;
    return {
        times: void 0,
        keyframes: a,
        duration: u - _l,
        ease: "linear"
    }
}
const Px = {
    anticipate: sx,
    backInOut: rx,
    circInOut: ox
};

function WA(t) {
    return t in Px
}
class Uy extends Sx {
    constructor(e) {
        super(e);
        const {
            name: r,
            motionValue: i,
            element: a,
            keyframes: u
        } = this.options;
        this.resolver = new xx(u, (c, f) => this.onKeyframesResolved(c, f), r, i, a), this.resolver.scheduleResolve()
    }
    initPlayback(e, r) {
        let {
            duration: i = 300,
            times: a,
            ease: u,
            type: c,
            motionValue: f,
            name: h,
            startTime: m
        } = this.options;
        if (!f.owner || !f.owner.current) return !1;
        if (typeof u == "string" && Cl() && WA(u) && (u = Px[u]), HA(this.options)) {
            const {
                onComplete: y,
                onUpdate: w,
                motionValue: k,
                element: S,
                ...b
            } = this.options, x = qA(e, b);
            e = x.keyframes, e.length === 1 && (e[1] = e[0]), i = x.duration, a = x.times, u = x.ease, c = "keyframes"
        }
        const g = UA(f.owner.current, h, e, { ...this.options,
            duration: i,
            times: a,
            ease: u
        });
        return g.startTime = m ? ? this.calcStartTime(), this.pendingTimeline ? (Cy(g, this.pendingTimeline), this.pendingTimeline = void 0) : g.onfinish = () => {
            const {
                onComplete: y
            } = this.options;
            f.set(ql(e, this.options, r)), y && y(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: g,
            duration: i,
            times: a,
            type: c,
            ease: u,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: r
        } = e;
        return Un(r)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: r
        } = e;
        return Un(r.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.currentTime = Bn(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: r
        } = e;
        return r.playbackRate
    }
    set speed(e) {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: i
        } = r;
        i.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: r
        } = e;
        return r.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: r
        } = e;
        return r.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: r
            } = this;
            if (!r) return Ut;
            const {
                animation: i
            } = r;
            Cy(i, e)
        }
        return Ut
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.playState === "finished" && this.updateFinishedPromise(), r.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r
        } = e;
        r.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: r,
            keyframes: i,
            duration: a,
            type: u,
            ease: c,
            times: f
        } = e;
        if (r.playState === "idle" || r.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: m,
                onUpdate: g,
                onComplete: y,
                element: w,
                ...k
            } = this.options, S = new sh({ ...k,
                keyframes: i,
                duration: a,
                type: u,
                ease: c,
                times: f,
                isGenerator: !0
            }), b = Bn(this.time);
            m.setWithVelocity(S.sample(b - _l).value, S.sample(b).value, _l)
        }
        const {
            onStop: h
        } = this.options;
        h && h(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: r,
            name: i,
            repeatDelay: a,
            repeatType: u,
            damping: c,
            type: f
        } = e;
        if (!r || !r.owner || !(r.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: h,
            transformTemplate: m
        } = r.owner.getProps();
        return zA() && i && BA.has(i) && !h && !m && !a && u !== "mirror" && c !== 0 && f !== "inertia"
    }
}
const KA = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    QA = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    GA = {
        type: "keyframes",
        duration: .8
    },
    YA = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    XA = (t, {
        keyframes: e
    }) => e.length > 2 ? GA : cs.has(t) ? t.startsWith("scale") ? QA(e[1]) : KA : YA;

function JA({
    when: t,
    delay: e,
    delayChildren: r,
    staggerChildren: i,
    staggerDirection: a,
    repeat: u,
    repeatType: c,
    repeatDelay: f,
    from: h,
    elapsed: m,
    ...g
}) {
    return !!Object.keys(g).length
}
const ih = (t, e, r, i = {}, a, u) => c => {
    const f = Hf(i, t) || {},
        h = f.delay || i.delay || 0;
    let {
        elapsed: m = 0
    } = i;
    m = m - Bn(h);
    let g = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...f,
        delay: -m,
        onUpdate: w => {
            e.set(w), f.onUpdate && f.onUpdate(w)
        },
        onComplete: () => {
            c(), f.onComplete && f.onComplete()
        },
        name: t,
        motionValue: e,
        element: u ? void 0 : a
    };
    JA(f) || (g = { ...g,
        ...XA(t, g)
    }), g.duration && (g.duration = Bn(g.duration)), g.repeatDelay && (g.repeatDelay = Bn(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
    let y = !1;
    if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (g.duration = 0, g.delay === 0 && (y = !0)), y && !u && e.get() !== void 0) {
        const w = ql(g.keyframes, f);
        if (w !== void 0) return Be.update(() => {
            g.onUpdate(w), g.onComplete()
        }), new yR([])
    }
    return !u && Uy.supports(g) ? new Uy(g) : new sh(g)
};

function ZA({
    protectedKeys: t,
    needsAnimating: e
}, r) {
    const i = t.hasOwnProperty(r) && e[r] !== !0;
    return e[r] = !1, i
}

function _x(t, e, {
    delay: r = 0,
    transitionOverride: i,
    type: a
} = {}) {
    var u;
    let {
        transition: c = t.getDefaultTransition(),
        transitionEnd: f,
        ...h
    } = e;
    i && (c = i);
    const m = [],
        g = a && t.animationState && t.animationState.getState()[a];
    for (const y in h) {
        const w = t.getValue(y, (u = t.latestValues[y]) !== null && u !== void 0 ? u : null),
            k = h[y];
        if (k === void 0 || g && ZA(g, y)) continue;
        const S = {
            delay: r,
            ...Hf(c || {}, y)
        };
        let b = !1;
        if (window.MotionHandoffAnimation) {
            const R = Jw(t);
            if (R) {
                const V = window.MotionHandoffAnimation(R, y, Be);
                V !== null && (S.startTime = V, b = !0)
            }
        }
        Wd(t, y), w.start(ih(y, w, k, t.shouldReduceMotion && Yw.has(y) ? {
            type: !1
        } : S, t, b));
        const x = w.animation;
        x && m.push(x)
    }
    return f && Promise.all(m).then(() => {
        Be.update(() => {
            f && OR(t, f)
        })
    }), m
}

function Zd(t, e, r = {}) {
    var i;
    const a = Hl(t, e, r.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: u = t.getDefaultTransition() || {}
    } = a || {};
    r.transitionOverride && (u = r.transitionOverride);
    const c = a ? () => Promise.all(_x(t, a, r)) : () => Promise.resolve(),
        f = t.variantChildren && t.variantChildren.size ? (m = 0) => {
            const {
                delayChildren: g = 0,
                staggerChildren: y,
                staggerDirection: w
            } = u;
            return e2(t, e, g + m, y, w, r)
        } : () => Promise.resolve(),
        {
            when: h
        } = u;
    if (h) {
        const [m, g] = h === "beforeChildren" ? [c, f] : [f, c];
        return m().then(() => g())
    } else return Promise.all([c(), f(r.delay)])
}

function e2(t, e, r = 0, i = 0, a = 1, u) {
    const c = [],
        f = (t.variantChildren.size - 1) * i,
        h = a === 1 ? (m = 0) => m * i : (m = 0) => f - m * i;
    return Array.from(t.variantChildren).sort(t2).forEach((m, g) => {
        m.notify("AnimationStart", e), c.push(Zd(m, e, { ...u,
            delay: r + h(g)
        }).then(() => m.notify("AnimationComplete", e)))
    }), Promise.all(c)
}

function t2(t, e) {
    return t.sortNodePosition(e)
}

function n2(t, e, r = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(u => Zd(t, u, r));
        i = Promise.all(a)
    } else if (typeof e == "string") i = Zd(t, e, r);
    else {
        const a = typeof e == "function" ? Hl(t, e, r.custom) : e;
        i = Promise.all(_x(t, a, r))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const r2 = Nf.length;

function Rx(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const r = t.parent ? Rx(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial), r
    }
    const e = {};
    for (let r = 0; r < r2; r++) {
        const i = Nf[r],
            a = t.props[i];
        (yo(a) || a === !1) && (e[i] = a)
    }
    return e
}
const s2 = [...Of].reverse(),
    i2 = Of.length;

function o2(t) {
    return e => Promise.all(e.map(({
        animation: r,
        options: i
    }) => n2(t, r, i)))
}

function a2(t) {
    let e = o2(t),
        r = zy(),
        i = !0;
    const a = h => (m, g) => {
        var y;
        const w = Hl(t, g, h === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (w) {
            const {
                transition: k,
                transitionEnd: S,
                ...b
            } = w;
            m = { ...m,
                ...b,
                ...S
            }
        }
        return m
    };

    function u(h) {
        e = h(t)
    }

    function c(h) {
        const {
            props: m
        } = t, g = Rx(t.parent) || {}, y = [], w = new Set;
        let k = {},
            S = 1 / 0;
        for (let x = 0; x < i2; x++) {
            const R = s2[x],
                V = r[R],
                M = m[R] !== void 0 ? m[R] : g[R],
                N = yo(M),
                B = R === h ? V.isActive : null;
            B === !1 && (S = x);
            let K = M === g[R] && M !== m[R] && N;
            if (K && i && t.manuallyAnimateOnMount && (K = !1), V.protectedKeys = { ...k
                }, !V.isActive && B === null || !M && !V.prevProp || zl(M) || typeof M == "boolean") continue;
            const G = l2(V.prevProp, M);
            let F = G || R === h && V.isActive && !K && N || x > S && N,
                J = !1;
            const ee = Array.isArray(M) ? M : [M];
            let Ce = ee.reduce(a(R), {});
            B === !1 && (Ce = {});
            const {
                prevResolvedValues: Le = {}
            } = V, Me = { ...Le,
                ...Ce
            }, Re = fe => {
                F = !0, w.has(fe) && (J = !0, w.delete(fe)), V.needsAnimating[fe] = !0;
                const W = t.getValue(fe);
                W && (W.liveStyle = !1)
            };
            for (const fe in Me) {
                const W = Ce[fe],
                    ie = Le[fe];
                if (k.hasOwnProperty(fe)) continue;
                let U = !1;
                $d(W) && $d(ie) ? U = !zw(W, ie) : U = W !== ie, U ? W != null ? Re(fe) : w.add(fe) : W !== void 0 && w.has(fe) ? Re(fe) : V.protectedKeys[fe] = !0
            }
            V.prevProp = M, V.prevResolvedValues = Ce, V.isActive && (k = { ...k,
                ...Ce
            }), i && t.blockInitialAnimation && (F = !1), F && (!(K && G) || J) && y.push(...ee.map(fe => ({
                animation: fe,
                options: {
                    type: R
                }
            })))
        }
        if (w.size) {
            const x = {};
            w.forEach(R => {
                const V = t.getBaseTarget(R),
                    M = t.getValue(R);
                M && (M.liveStyle = !0), x[R] = V ? ? null
            }), y.push({
                animation: x
            })
        }
        let b = !!y.length;
        return i && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(y) : Promise.resolve()
    }

    function f(h, m) {
        var g;
        if (r[h].isActive === m) return Promise.resolve();
        (g = t.variantChildren) === null || g === void 0 || g.forEach(w => {
            var k;
            return (k = w.animationState) === null || k === void 0 ? void 0 : k.setActive(h, m)
        }), r[h].isActive = m;
        const y = c(h);
        for (const w in r) r[w].protectedKeys = {};
        return y
    }
    return {
        animateChanges: c,
        setActive: f,
        setAnimateFunction: u,
        getState: () => r,
        reset: () => {
            r = zy(), i = !0
        }
    }
}

function l2(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !zw(e, t) : !1
}

function Hr(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function zy() {
    return {
        animate: Hr(!0),
        whileInView: Hr(),
        whileHover: Hr(),
        whileTap: Hr(),
        whileDrag: Hr(),
        whileFocus: Hr(),
        exit: Hr()
    }
}
class _r {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class u2 extends _r {
    constructor(e) {
        super(e), e.animationState || (e.animationState = a2(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        zl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: r
        } = this.node.prevProps || {};
        e !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let c2 = 0;
class d2 extends _r {
    constructor() {
        super(...arguments), this.id = c2++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const a = this.node.animationState.setActive("exit", !e);
        r && !e && a.then(() => r(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const f2 = {
    animation: {
        Feature: u2
    },
    exit: {
        Feature: d2
    }
};

function So(t, e, r, i = {
    passive: !0
}) {
    return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
}

function Io(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const h2 = t => e => Kf(e) && t(e, Io(e));

function fo(t, e, r, i) {
    return So(t, e, h2(r), i)
}
const $y = (t, e) => Math.abs(t - e);

function p2(t, e) {
    const r = $y(t.x, e.x),
        i = $y(t.y, e.y);
    return Math.sqrt(r ** 2 + i ** 2)
}
class Ax {
    constructor(e, r, {
        transformPagePoint: i,
        contextWindow: a,
        dragSnapToOrigin: u = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = ud(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    k = p2(y.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !k) return;
                const {
                    point: S
                } = y, {
                    timestamp: b
                } = ct;
                this.history.push({ ...S,
                    timestamp: b
                });
                const {
                    onStart: x,
                    onMove: R
                } = this.handlers;
                w || (x && x(this.lastMoveEvent, y), this.startEvent = this.lastMoveEvent), R && R(this.lastMoveEvent, y)
            }, this.handlePointerMove = (y, w) => {
                this.lastMoveEvent = y, this.lastMoveEventInfo = ld(w, this.transformPagePoint), Be.update(this.updatePoint, !0)
            }, this.handlePointerUp = (y, w) => {
                this.end();
                const {
                    onEnd: k,
                    onSessionEnd: S,
                    resumeAnimation: b
                } = this.handlers;
                if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = ud(y.type === "pointercancel" ? this.lastMoveEventInfo : ld(w, this.transformPagePoint), this.history);
                this.startEvent && k && k(y, x), S && S(y, x)
            }, !Kf(e)) return;
        this.dragSnapToOrigin = u, this.handlers = r, this.transformPagePoint = i, this.contextWindow = a || window;
        const c = Io(e),
            f = ld(c, this.transformPagePoint),
            {
                point: h
            } = f,
            {
                timestamp: m
            } = ct;
        this.history = [{ ...h,
            timestamp: m
        }];
        const {
            onSessionStart: g
        } = r;
        g && g(e, ud(f, this.history)), this.removeListeners = jo(fo(this.contextWindow, "pointermove", this.handlePointerMove), fo(this.contextWindow, "pointerup", this.handlePointerUp), fo(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), Cr(this.updatePoint)
    }
}

function ld(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Hy(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function ud({
    point: t
}, e) {
    return {
        point: t,
        delta: Hy(t, Ox(e)),
        offset: Hy(t, m2(e)),
        velocity: g2(e, .1)
    }
}

function m2(t) {
    return t[0]
}

function Ox(t) {
    return t[t.length - 1]
}

function g2(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let r = t.length - 1,
        i = null;
    const a = Ox(t);
    for (; r >= 0 && (i = t[r], !(a.timestamp - i.timestamp > Bn(e)));) r--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const u = Un(a.timestamp - i.timestamp);
    if (u === 0) return {
        x: 0,
        y: 0
    };
    const c = {
        x: (a.x - i.x) / u,
        y: (a.y - i.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c
}
const Nx = 1e-4,
    y2 = 1 - Nx,
    v2 = 1 + Nx,
    Lx = .01,
    w2 = 0 - Lx,
    x2 = 0 + Lx;

function zt(t) {
    return t.max - t.min
}

function S2(t, e, r) {
    return Math.abs(t - e) <= r
}

function qy(t, e, r, i = .5) {
    t.origin = i, t.originPoint = He(e.min, e.max, t.origin), t.scale = zt(r) / zt(e), t.translate = He(r.min, r.max, t.origin) - t.originPoint, (t.scale >= y2 && t.scale <= v2 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= w2 && t.translate <= x2 || isNaN(t.translate)) && (t.translate = 0)
}

function ho(t, e, r, i) {
    qy(t.x, e.x, r.x, i ? i.originX : void 0), qy(t.y, e.y, r.y, i ? i.originY : void 0)
}

function Wy(t, e, r) {
    t.min = r.min + e.min, t.max = t.min + zt(e)
}

function b2(t, e, r) {
    Wy(t.x, e.x, r.x), Wy(t.y, e.y, r.y)
}

function Ky(t, e, r) {
    t.min = e.min - r.min, t.max = t.min + zt(e)
}

function po(t, e, r) {
    Ky(t.x, e.x, r.x), Ky(t.y, e.y, r.y)
}

function k2(t, {
    min: e,
    max: r
}, i) {
    return e !== void 0 && t < e ? t = i ? He(e, t, i.min) : Math.max(t, e) : r !== void 0 && t > r && (t = i ? He(r, t, i.max) : Math.min(t, r)), t
}

function Qy(t, e, r) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}

function E2(t, {
    top: e,
    left: r,
    bottom: i,
    right: a
}) {
    return {
        x: Qy(t.x, r, a),
        y: Qy(t.y, e, i)
    }
}

function Gy(t, e) {
    let r = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([r, i] = [i, r]), {
        min: r,
        max: i
    }
}

function C2(t, e) {
    return {
        x: Gy(t.x, e.x),
        y: Gy(t.y, e.y)
    }
}

function T2(t, e) {
    let r = .5;
    const i = zt(t),
        a = zt(e);
    return a > i ? r = ni(e.min, e.max - i, t.min) : i > a && (r = ni(t.min, t.max - a, e.min)), zn(0, 1, r)
}

function P2(t, e) {
    const r = {};
    return e.min !== void 0 && (r.min = e.min - t.min), e.max !== void 0 && (r.max = e.max - t.min), r
}
const ef = .35;

function _2(t = ef) {
    return t === !1 ? t = 0 : t === !0 && (t = ef), {
        x: Yy(t, "left", "right"),
        y: Yy(t, "top", "bottom")
    }
}

function Yy(t, e, r) {
    return {
        min: Xy(t, e),
        max: Xy(t, r)
    }
}

function Xy(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Jy = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Vs = () => ({
        x: Jy(),
        y: Jy()
    }),
    Zy = () => ({
        min: 0,
        max: 0
    }),
    Ye = () => ({
        x: Zy(),
        y: Zy()
    });

function Xt(t) {
    return [t("x"), t("y")]
}

function Mx({
    top: t,
    left: e,
    right: r,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: r
        },
        y: {
            min: t,
            max: i
        }
    }
}

function R2({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function A2(t, e) {
    if (!e) return t;
    const r = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: r.y,
        left: r.x,
        bottom: i.y,
        right: i.x
    }
}

function cd(t) {
    return t === void 0 || t === 1
}

function tf({
    scale: t,
    scaleX: e,
    scaleY: r
}) {
    return !cd(t) || !cd(e) || !cd(r)
}

function qr(t) {
    return tf(t) || Dx(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Dx(t) {
    return ev(t.x) || ev(t.y)
}

function ev(t) {
    return t && t !== "0%"
}

function Rl(t, e, r) {
    const i = t - r,
        a = e * i;
    return r + a
}

function tv(t, e, r, i, a) {
    return a !== void 0 && (t = Rl(t, a, i)), Rl(t, r, i) + e
}

function nf(t, e = 0, r = 1, i, a) {
    t.min = tv(t.min, e, r, i, a), t.max = tv(t.max, e, r, i, a)
}

function jx(t, {
    x: e,
    y: r
}) {
    nf(t.x, e.translate, e.scale, e.originPoint), nf(t.y, r.translate, r.scale, r.originPoint)
}
const nv = .999999999999,
    rv = 1.0000000000001;

function O2(t, e, r, i = !1) {
    const a = r.length;
    if (!a) return;
    e.x = e.y = 1;
    let u, c;
    for (let f = 0; f < a; f++) {
        u = r[f], c = u.projectionDelta;
        const {
            visualElement: h
        } = u.options;
        h && h.props.style && h.props.style.display === "contents" || (i && u.options.layoutScroll && u.scroll && u !== u.root && Us(t, {
            x: -u.scroll.offset.x,
            y: -u.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, jx(t, c)), i && qr(u.latestValues) && Us(t, u.latestValues))
    }
    e.x < rv && e.x > nv && (e.x = 1), e.y < rv && e.y > nv && (e.y = 1)
}

function Bs(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function sv(t, e, r, i, a = .5) {
    const u = He(t.min, t.max, a);
    nf(t, e, r, u, i)
}

function Us(t, e) {
    sv(t.x, e.x, e.scaleX, e.scale, e.originX), sv(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Ix(t, e) {
    return Mx(A2(t.getBoundingClientRect(), e))
}

function N2(t, e, r) {
    const i = Ix(t, r),
        {
            scroll: a
        } = e;
    return a && (Bs(i.x, a.offset.x), Bs(i.y, a.offset.y)), i
}
const Fx = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    L2 = new WeakMap;
class M2 {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ye(), this.visualElement = e
    }
    start(e, {
        snapToCursor: r = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const a = g => {
                const {
                    dragSnapToOrigin: y
                } = this.getProps();
                y ? this.pauseAnimation() : this.stopAnimation(), r && this.snapToCursor(Io(g).point)
            },
            u = (g, y) => {
                const {
                    drag: w,
                    dragPropagation: k,
                    onDragStart: S
                } = this.getProps();
                if (w && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = TR(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xt(x => {
                    let R = this.getAxisMotionValue(x).get() || 0;
                    if (kn.test(R)) {
                        const {
                            projection: V
                        } = this.visualElement;
                        if (V && V.layout) {
                            const M = V.layout.layoutBox[x];
                            M && (R = zt(M) * (parseFloat(R) / 100))
                        }
                    }
                    this.originPoint[x] = R
                }), S && Be.postRender(() => S(g, y)), Wd(this.visualElement, "transform");
                const {
                    animationState: b
                } = this.visualElement;
                b && b.setActive("whileDrag", !0)
            },
            c = (g, y) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: k,
                    onDirectionLock: S,
                    onDrag: b
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: x
                } = y;
                if (k && this.currentDirection === null) {
                    this.currentDirection = D2(x), this.currentDirection !== null && S && S(this.currentDirection);
                    return
                }
                this.updateAxis("x", y.point, x), this.updateAxis("y", y.point, x), this.visualElement.render(), b && b(g, y)
            },
            f = (g, y) => this.stop(g, y),
            h = () => Xt(g => {
                var y;
                return this.getAnimationState(g) === "paused" && ((y = this.getAxisMotionValue(g).animation) === null || y === void 0 ? void 0 : y.play())
            }),
            {
                dragSnapToOrigin: m
            } = this.getProps();
        this.panSession = new Ax(e, {
            onSessionStart: a,
            onStart: u,
            onMove: c,
            onSessionEnd: f,
            resumeAnimation: h
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: m,
            contextWindow: Fx(this.visualElement)
        })
    }
    stop(e, r) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: a
        } = r;
        this.startAnimation(a);
        const {
            onDragEnd: u
        } = this.getProps();
        u && Be.postRender(() => u(e, r))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: r
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", !1)
    }
    updateAxis(e, r, i) {
        const {
            drag: a
        } = this.getProps();
        if (!i || !rl(e, a, this.currentDirection)) return;
        const u = this.getAxisMotionValue(e);
        let c = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (c = k2(c, this.constraints[e], this.elastic[e])), u.set(c)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: r,
            dragElastic: i
        } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, u = this.constraints;
        r && Is(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = E2(a.layoutBox, r) : this.constraints = !1, this.elastic = _2(i), u !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && Xt(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = P2(a.layoutBox[c], this.constraints[c]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: r
        } = this.getProps();
        if (!e || !Is(e)) return !1;
        const i = e.current,
            {
                projection: a
            } = this.visualElement;
        if (!a || !a.layout) return !1;
        const u = N2(i, a.root, this.visualElement.getTransformPagePoint());
        let c = C2(a.layout.layoutBox, u);
        if (r) {
            const f = r(R2(c));
            this.hasMutatedConstraints = !!f, f && (c = Mx(f))
        }
        return c
    }
    startAnimation(e) {
        const {
            drag: r,
            dragMomentum: i,
            dragElastic: a,
            dragTransition: u,
            dragSnapToOrigin: c,
            onDragTransitionEnd: f
        } = this.getProps(), h = this.constraints || {}, m = Xt(g => {
            if (!rl(g, r, this.currentDirection)) return;
            let y = h && h[g] || {};
            c && (y = {
                min: 0,
                max: 0
            });
            const w = a ? 200 : 1e6,
                k = a ? 40 : 1e7,
                S = {
                    type: "inertia",
                    velocity: i ? e[g] : 0,
                    bounceStiffness: w,
                    bounceDamping: k,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...u,
                    ...y
                };
            return this.startAxisValueAnimation(g, S)
        });
        return Promise.all(m).then(f)
    }
    startAxisValueAnimation(e, r) {
        const i = this.getAxisMotionValue(e);
        return Wd(this.visualElement, e), i.start(ih(e, i, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Xt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        Xt(e => {
            var r;
            return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.pause()
        })
    }
    getAnimationState(e) {
        var r;
        return (r = this.getAxisMotionValue(e).animation) === null || r === void 0 ? void 0 : r.state
    }
    getAxisMotionValue(e) {
        const r = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            a = i[r];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Xt(r => {
            const {
                drag: i
            } = this.getProps();
            if (!rl(r, i, this.currentDirection)) return;
            const {
                projection: a
            } = this.visualElement, u = this.getAxisMotionValue(r);
            if (a && a.layout) {
                const {
                    min: c,
                    max: f
                } = a.layout.layoutBox[r];
                u.set(e[r] - He(c, f, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: r
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!Is(r) || !i || !this.constraints) return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Xt(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const h = f.get();
                a[c] = T2({
                    min: h,
                    max: h
                }, this.constraints[c])
            }
        });
        const {
            transformTemplate: u
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), Xt(c => {
            if (!rl(c, e, null)) return;
            const f = this.getAxisMotionValue(c),
                {
                    min: h,
                    max: m
                } = this.constraints[c];
            f.set(He(h, m, a[c]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        L2.set(this.visualElement, this);
        const e = this.visualElement.current,
            r = fo(e, "pointerdown", h => {
                const {
                    drag: m,
                    dragListener: g = !0
                } = this.getProps();
                m && g && this.start(h)
            }),
            i = () => {
                const {
                    dragConstraints: h
                } = this.getProps();
                Is(h) && h.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: a
            } = this.visualElement,
            u = a.addEventListener("measure", i);
        a && !a.layout && (a.root && a.root.updateScroll(), a.updateLayout()), Be.read(i);
        const c = So(window, "resize", () => this.scalePositionWithinConstraints()),
            f = a.addEventListener("didUpdate", (({
                delta: h,
                hasLayoutChanged: m
            }) => {
                this.isDragging && m && (Xt(g => {
                    const y = this.getAxisMotionValue(g);
                    y && (this.originPoint[g] += h[g].translate, y.set(y.get() + h[g].translate))
                }), this.visualElement.render())
            }));
        return () => {
            c(), r(), u(), f && f()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: r = !1,
                dragDirectionLock: i = !1,
                dragPropagation: a = !1,
                dragConstraints: u = !1,
                dragElastic: c = ef,
                dragMomentum: f = !0
            } = e;
        return { ...e,
            drag: r,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: f
        }
    }
}

function rl(t, e, r) {
    return (e === !0 || e === t) && (r === null || r === t)
}

function D2(t, e = 10) {
    let r = null;
    return Math.abs(t.y) > e ? r = "y" : Math.abs(t.x) > e && (r = "x"), r
}
class j2 extends _r {
    constructor(e) {
        super(e), this.removeGroupControls = Ut, this.removeListeners = Ut, this.controls = new M2(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ut
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const iv = t => (e, r) => {
    t && Be.postRender(() => t(e, r))
};
class I2 extends _r {
    constructor() {
        super(...arguments), this.removePointerDownListener = Ut
    }
    onPointerDown(e) {
        this.session = new Ax(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Fx(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: r,
            onPan: i,
            onPanEnd: a
        } = this.node.getProps();
        return {
            onSessionStart: iv(e),
            onStart: iv(r),
            onMove: i,
            onEnd: (u, c) => {
                delete this.session, a && Be.postRender(() => a(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = fo(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ml = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function ov(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Zi = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (de.test(t)) t = parseFloat(t);
                else return t;
            const r = ov(t, e.target.x),
                i = ov(t, e.target.y);
            return `${r}% ${i}%`
        }
    },
    F2 = {
        correct: (t, {
            treeScale: e,
            projectionDelta: r
        }) => {
            const i = t,
                a = Tr.parse(t);
            if (a.length > 5) return i;
            const u = Tr.createTransformer(t),
                c = typeof a[0] != "number" ? 1 : 0,
                f = r.x.scale * e.x,
                h = r.y.scale * e.y;
            a[0 + c] /= f, a[1 + c] /= h;
            const m = He(f, h, .5);
            return typeof a[2 + c] == "number" && (a[2 + c] /= m), typeof a[3 + c] == "number" && (a[3 + c] /= m), u(a)
        }
    };
class V2 extends j.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i,
            layoutId: a
        } = this.props, {
            projection: u
        } = e;
        iR(B2), u && (r.group && r.group.add(u), i && i.register && a && i.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), u.setOptions({ ...u.options,
            onExitComplete: () => this.safeToRemove()
        })), ml.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: r,
            visualElement: i,
            drag: a,
            isPresent: u
        } = this.props, c = i.projection;
        return c && (c.isPresent = u, a || e.layoutDependency !== r || r === void 0 ? c.willUpdate() : this.safeToRemove(), e.isPresent !== u && (u ? c.promote() : c.relegate() || Be.postRender(() => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), Mf.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: r,
            switchLayoutGroup: i
        } = this.props, {
            projection: a
        } = e;
        a && (a.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(a), i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function Vx(t) {
    const [e, r] = Sw(), i = j.useContext(Tf);
    return C.jsx(V2, { ...t,
        layoutGroup: i,
        switchLayoutGroup: j.useContext(Rw),
        isPresent: e,
        safeToRemove: r
    })
}
const B2 = {
    borderRadius: { ...Zi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Zi,
    borderTopRightRadius: Zi,
    borderBottomLeftRadius: Zi,
    borderBottomRightRadius: Zi,
    boxShadow: F2
};

function U2(t, e, r) {
    const i = xt(t) ? t : wo(t);
    return i.start(ih("", i, e, r)), i.animation
}

function z2(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
const $2 = (t, e) => t.depth - e.depth;
class H2 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        Qf(this.children, e), this.isDirty = !0
    }
    remove(e) {
        Gf(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort($2), this.isDirty = !1, this.children.forEach(e)
    }
}

function q2(t, e) {
    const r = En.now(),
        i = ({
            timestamp: a
        }) => {
            const u = a - r;
            u >= e && (Cr(i), t(u - e))
        };
    return Be.read(i, !0), () => Cr(i)
}
const Bx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    W2 = Bx.length,
    av = t => typeof t == "string" ? parseFloat(t) : t,
    lv = t => typeof t == "number" || de.test(t);

function K2(t, e, r, i, a, u) {
    a ? (t.opacity = He(0, r.opacity !== void 0 ? r.opacity : 1, Q2(i)), t.opacityExit = He(e.opacity !== void 0 ? e.opacity : 1, 0, G2(i))) : u && (t.opacity = He(e.opacity !== void 0 ? e.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, i));
    for (let c = 0; c < W2; c++) {
        const f = `border${Bx[c]}Radius`;
        let h = uv(e, f),
            m = uv(r, f);
        if (h === void 0 && m === void 0) continue;
        h || (h = 0), m || (m = 0), h === 0 || m === 0 || lv(h) === lv(m) ? (t[f] = Math.max(He(av(h), av(m), i), 0), (kn.test(m) || kn.test(h)) && (t[f] += "%")) : t[f] = m
    }(e.rotate || r.rotate) && (t.rotate = He(e.rotate || 0, r.rotate || 0, i))
}

function uv(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Q2 = Ux(0, .5, ix),
    G2 = Ux(.5, .95, Ut);

function Ux(t, e, r) {
    return i => i < t ? 0 : i > e ? 1 : r(ni(t, e, i))
}

function cv(t, e) {
    t.min = e.min, t.max = e.max
}

function Yt(t, e) {
    cv(t.x, e.x), cv(t.y, e.y)
}

function dv(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function fv(t, e, r, i, a) {
    return t -= e, t = Rl(t, 1 / r, i), a !== void 0 && (t = Rl(t, 1 / a, i)), t
}

function Y2(t, e = 0, r = 1, i = .5, a, u = t, c = t) {
    if (kn.test(e) && (e = parseFloat(e), e = He(c.min, c.max, e / 100) - c.min), typeof e != "number") return;
    let f = He(u.min, u.max, i);
    t === u && (f -= e), t.min = fv(t.min, e, r, f, a), t.max = fv(t.max, e, r, f, a)
}

function hv(t, e, [r, i, a], u, c) {
    Y2(t, e[r], e[i], e[a], e.scale, u, c)
}
const X2 = ["x", "scaleX", "originX"],
    J2 = ["y", "scaleY", "originY"];

function pv(t, e, r, i) {
    hv(t.x, e, X2, r ? r.x : void 0, i ? i.x : void 0), hv(t.y, e, J2, r ? r.y : void 0, i ? i.y : void 0)
}

function mv(t) {
    return t.translate === 0 && t.scale === 1
}

function zx(t) {
    return mv(t.x) && mv(t.y)
}

function gv(t, e) {
    return t.min === e.min && t.max === e.max
}

function Z2(t, e) {
    return gv(t.x, e.x) && gv(t.y, e.y)
}

function yv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function $x(t, e) {
    return yv(t.x, e.x) && yv(t.y, e.y)
}

function vv(t) {
    return zt(t.x) / zt(t.y)
}

function wv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class eO {
    constructor() {
        this.members = []
    }
    add(e) {
        Qf(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (Gf(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(e) {
        const r = this.members.findIndex(a => e === a);
        if (r === 0) return !1;
        let i;
        for (let a = r; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1) {
                i = u;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(e, r) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, r && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: a
            } = e.options;
            a === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: r,
                resumingFrom: i
            } = e;
            r.onExitComplete && r.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function tO(t, e, r) {
    let i = "";
    const a = t.x.translate / e.x,
        u = t.y.translate / e.y,
        c = (r == null ? void 0 : r.z) || 0;
    if ((a || u || c) && (i = `translate3d(${a}px, ${u}px, ${c}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), r) {
        const {
            transformPerspective: m,
            rotate: g,
            rotateX: y,
            rotateY: w,
            skewX: k,
            skewY: S
        } = r;
        m && (i = `perspective(${m}px) ${i}`), g && (i += `rotate(${g}deg) `), y && (i += `rotateX(${y}deg) `), w && (i += `rotateY(${w}deg) `), k && (i += `skewX(${k}deg) `), S && (i += `skewY(${S}deg) `)
    }
    const f = t.x.scale * e.x,
        h = t.y.scale * e.y;
    return (f !== 1 || h !== 1) && (i += `scale(${f}, ${h})`), i || "none"
}
const Wr = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    ao = typeof window < "u" && window.MotionDebug !== void 0,
    dd = ["", "X", "Y", "Z"],
    nO = {
        visibility: "hidden"
    },
    xv = 1e3;
let rO = 0;

function fd(t, e, r, i) {
    const {
        latestValues: a
    } = e;
    a[t] && (r[t] = a[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function Hx(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const r = Jw(e);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {
            layout: a,
            layoutId: u
        } = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Be, !(a || u))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && Hx(i)
}

function qx({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: r,
    checkIsScrollRoot: i,
    resetTransform: a
}) {
    return class {
        constructor(c = {}, f = e == null ? void 0 : e()) {
            this.id = rO++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, ao && (Wr.totalNodes = Wr.resolvedTargetDeltas = Wr.recalculatedProjection = 0), this.nodes.forEach(oO), this.nodes.forEach(dO), this.nodes.forEach(fO), this.nodes.forEach(aO), ao && window.MotionDebug.record(Wr)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = c, this.root = f ? f.root || f : this, this.path = f ? [...f.path, f] : [], this.parent = f, this.depth = f ? f.depth + 1 : 0;
            for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new H2)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new Yf), this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const h = this.eventHandlers.get(c);
            h && h.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c, f = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = z2(c), this.instance = c;
            const {
                layoutId: h,
                layout: m,
                visualElement: g
            } = this.options;
            if (g && !g.current && g.mount(c), this.root.nodes.add(this), this.parent && this.parent.children.add(this), f && (m || h) && (this.isLayoutDirty = !0), t) {
                let y;
                const w = () => this.root.updateBlockedByResize = !1;
                t(c, () => {
                    this.root.updateBlockedByResize = !0, y && y(), y = q2(w, 250), ml.hasAnimatedSinceResize && (ml.hasAnimatedSinceResize = !1, this.nodes.forEach(bv))
                })
            }
            h && this.root.registerSharedNode(h, this), this.options.animate !== !1 && g && (h || m) && this.addEventListener("didUpdate", ({
                delta: y,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: k,
                layout: S
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || g.getDefaultTransition() || yO,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: R
                    } = g.getProps(),
                    V = !this.targetLayout || !$x(this.targetLayout, S) || k,
                    M = !w && k;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || M || w && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(y, M);
                    const N = { ...Hf(b, "layout"),
                        onPlay: x,
                        onComplete: R
                    };
                    (g.shouldReduceMotion || this.options.layoutRoot) && (N.delay = 0, N.type = !1), this.startAnimation(N)
                } else w || bv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = S
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Cr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hO), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: c
            } = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Hx(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let g = 0; g < this.path.length; g++) {
                const y = this.path[g];
                y.shouldResetTransform = !0, y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1)
            }
            const {
                layoutId: f,
                layout: h
            } = this.options;
            if (f === void 0 && !h) return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0, this.updateSnapshot(), c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sv);
                return
            }
            this.isUpdating || this.nodes.forEach(uO), this.isUpdating = !1, this.nodes.forEach(cO), this.nodes.forEach(sO), this.nodes.forEach(iO), this.clearAllSnapshots();
            const f = En.now();
            ct.delta = zn(0, 1e3 / 60, f - ct.timestamp), ct.timestamp = f, ct.isProcessing = !0, nd.update.process(ct), nd.preRender.process(ct), nd.render.process(ct), ct.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Mf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(lO), this.sharedNodes.forEach(pO)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Be.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Be.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: f
            } = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c = "measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1), f) {
                const h = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: h,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : h
                }
            }
        }
        resetTransform() {
            if (!a) return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                f = this.projectionDelta && !zx(this.projectionDelta),
                h = this.getTransformTemplate(),
                m = h ? h(this.latestValues, "") : void 0,
                g = m !== this.prevTransformTemplateValue;
            c && (f || qr(this.latestValues) || g) && (a(this.instance, m), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(c = !0) {
            const f = this.measurePageBox();
            let h = this.removeElementScroll(f);
            return c && (h = this.removeTransform(h)), vO(h), {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: h,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {
                visualElement: f
            } = this.options;
            if (!f) return Ye();
            const h = f.measureViewportBox();
            if (!(((c = this.scroll) === null || c === void 0 ? void 0 : c.wasRoot) || this.path.some(wO))) {
                const {
                    scroll: g
                } = this.root;
                g && (Bs(h.x, g.offset.x), Bs(h.y, g.offset.y))
            }
            return h
        }
        removeElementScroll(c) {
            var f;
            const h = Ye();
            if (Yt(h, c), !((f = this.scroll) === null || f === void 0) && f.wasRoot) return h;
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m],
                    {
                        scroll: y,
                        options: w
                    } = g;
                g !== this.root && y && w.layoutScroll && (y.wasRoot && Yt(h, c), Bs(h.x, y.offset.x), Bs(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(c, f = !1) {
            const h = Ye();
            Yt(h, c);
            for (let m = 0; m < this.path.length; m++) {
                const g = this.path[m];
                !f && g.options.layoutScroll && g.scroll && g !== g.root && Us(h, {
                    x: -g.scroll.offset.x,
                    y: -g.scroll.offset.y
                }), qr(g.latestValues) && Us(h, g.latestValues)
            }
            return qr(this.latestValues) && Us(h, this.latestValues), h
        }
        removeTransform(c) {
            const f = Ye();
            Yt(f, c);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                if (!m.instance || !qr(m.latestValues)) continue;
                tf(m.latestValues) && m.updateSnapshot();
                const g = Ye(),
                    y = m.measurePageBox();
                Yt(g, y), pv(f, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g)
            }
            return qr(this.latestValues) && pv(f, this.latestValues), f
        }
        setTargetDelta(c) {
            this.targetDelta = c, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = { ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ct.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c = !1) {
            var f;
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== h;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || !((f = this.parent) === null || f === void 0) && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: y,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(y || w))) {
                if (this.resolvedRelativeTargetAt = ct.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const k = this.getClosestProjectingParent();
                    k && k.layout && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), po(this.relativeTargetOrigin, this.layout.layoutBox, k.layout.layoutBox), Yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ye(), this.targetWithTransforms = Ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), b2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Yt(this.target, this.layout.layoutBox), jx(this.target, this.targetDelta)) : Yt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const k = this.getClosestProjectingParent();
                        k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? (this.relativeParent = k, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), po(this.relativeTargetOrigin, this.target, k.target), Yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ao && Wr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || tf(this.parent.latestValues) || Dx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var c;
            const f = this.getLead(),
                h = !!this.resumingFrom || this !== f;
            let m = !0;
            if ((this.isProjectionDirty || !((c = this.parent) === null || c === void 0) && c.isProjectionDirty) && (m = !1), h && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1), this.resolvedRelativeTargetAt === ct.timestamp && (m = !1), m) return;
            const {
                layout: g,
                layoutId: y
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || y)) return;
            Yt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                k = this.treeScale.y;
            O2(this.layoutCorrected, this.treeScale, this.path, h), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = Ye());
            const {
                target: S
            } = f;
            if (!S) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (dv(this.prevProjectionDelta.x, this.projectionDelta.x), dv(this.prevProjectionDelta.y, this.projectionDelta.y)), ho(this.projectionDelta, this.layoutCorrected, S, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== k || !wv(this.projectionDelta.x, this.prevProjectionDelta.x) || !wv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", S)), ao && Wr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c = !0) {
            var f;
            if ((f = this.options.visualElement) === null || f === void 0 || f.scheduleRender(), c) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vs(), this.projectionDelta = Vs(), this.projectionDeltaWithTransform = Vs()
        }
        setAnimationOrigin(c, f = !1) {
            const h = this.snapshot,
                m = h ? h.latestValues : {},
                g = { ...this.latestValues
                },
                y = Vs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !f;
            const w = Ye(),
                k = h ? h.source : void 0,
                S = this.layout ? this.layout.source : void 0,
                b = k !== S,
                x = this.getStack(),
                R = !x || x.members.length <= 1,
                V = !!(b && !R && this.options.crossfade === !0 && !this.path.some(gO));
            this.animationProgress = 0;
            let M;
            this.mixTargetDelta = N => {
                const B = N / 1e3;
                kv(y.x, c.x, B), kv(y.y, c.y, B), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (po(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mO(this.relativeTarget, this.relativeTargetOrigin, w, B), M && Z2(this.relativeTarget, M) && (this.isProjectionDirty = !1), M || (M = Ye()), Yt(M, this.relativeTarget)), b && (this.animationValues = g, K2(g, m, this.latestValues, B, V, R)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = B
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Cr(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Be.update(() => {
                ml.hasAnimatedSinceResize = !0, this.currentAnimation = U2(0, xv, { ...c,
                    onUpdate: f => {
                        this.mixTargetDelta(f), c.onUpdate && c.onUpdate(f)
                    },
                    onComplete: () => {
                        c.onComplete && c.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xv), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {
                targetWithTransforms: f,
                target: h,
                layout: m,
                latestValues: g
            } = c;
            if (!(!f || !h || !m)) {
                if (this !== c && this.layout && m && Wx(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    h = this.target || Ye();
                    const y = zt(this.layout.layoutBox.x);
                    h.x.min = c.target.x.min, h.x.max = h.x.min + y;
                    const w = zt(this.layout.layoutBox.y);
                    h.y.min = c.target.y.min, h.y.max = h.y.min + w
                }
                Yt(f, h), Us(f, g), ho(this.projectionDeltaWithTransform, this.layoutCorrected, f, g)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new eO), this.sharedNodes.get(c).add(f);
            const m = f.options.initialPromotionConfig;
            f.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? ((c = this.getStack()) === null || c === void 0 ? void 0 : c.lead) || this : this
        }
        getPrevLead() {
            var c;
            const {
                layoutId: f
            } = this.options;
            return f ? (c = this.getStack()) === null || c === void 0 ? void 0 : c.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: c
            } = this.options;
            if (c) return this.root.sharedNodes.get(c)
        }
        promote({
            needsReset: c,
            transition: f,
            preserveFollowOpacity: h
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, h), c && (this.projectionDelta = void 0, this.needsReset = !0), f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: c
            } = this.options;
            if (!c) return;
            let f = !1;
            const {
                latestValues: h
            } = c;
            if ((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (f = !0), !f) return;
            const m = {};
            h.z && fd("z", c, m, this.animationValues);
            for (let g = 0; g < dd.length; g++) fd(`rotate${dd[g]}`, c, m, this.animationValues), fd(`skew${dd[g]}`, c, m, this.animationValues);
            c.render();
            for (const g in m) c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]);
            c.scheduleRender()
        }
        getProjectionStyles(c) {
            var f, h;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nO;
            const m = {
                    visibility: ""
                },
                g = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, m.opacity = "", m.pointerEvents = hl(c == null ? void 0 : c.pointerEvents) || "", m.transform = g ? g(this.latestValues, "") : "none", m;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const b = {};
                return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = hl(c == null ? void 0 : c.pointerEvents) || ""), this.hasProjected && !qr(this.latestValues) && (b.transform = g ? g({}, "") : "none", this.hasProjected = !1), b
            }
            const w = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(), m.transform = tO(this.projectionDeltaWithTransform, this.treeScale, w), g && (m.transform = g(w, m.transform));
            const {
                x: k,
                y: S
            } = this.projectionDelta;
            m.transformOrigin = `${k.origin*100}% ${S.origin*100}% 0`, y.animationValues ? m.opacity = y === this ? (h = (f = w.opacity) !== null && f !== void 0 ? f : this.latestValues.opacity) !== null && h !== void 0 ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : m.opacity = y === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const b in El) {
                if (w[b] === void 0) continue;
                const {
                    correct: x,
                    applyTo: R
                } = El[b], V = m.transform === "none" ? w[b] : x(w[b], y);
                if (R) {
                    const M = R.length;
                    for (let N = 0; N < M; N++) m[R[N]] = V
                } else m[b] = V
            }
            return this.options.layoutId && (m.pointerEvents = y === this ? hl(c == null ? void 0 : c.pointerEvents) || "" : "none"), m
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) === null || f === void 0 ? void 0 : f.stop()
            }), this.root.nodes.forEach(Sv), this.root.sharedNodes.clear()
        }
    }
}

function sO(t) {
    t.updateLayout()
}

function iO(t) {
    var e;
    const r = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: a
        } = t.layout, {
            animationType: u
        } = t.options, c = r.source !== t.layout.source;
        u === "size" ? Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                k = zt(w);
            w.min = i[y].min, w.max = w.min + k
        }) : Wx(u, r.layoutBox, i) && Xt(y => {
            const w = c ? r.measuredBox[y] : r.layoutBox[y],
                k = zt(i[y]);
            w.max = w.min + k, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[y].max = t.relativeTarget[y].min + k)
        });
        const f = Vs();
        ho(f, i, r.layoutBox);
        const h = Vs();
        c ? ho(h, t.applyTransform(a, !0), r.measuredBox) : ho(h, i, r.layoutBox);
        const m = !zx(f);
        let g = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {
                    snapshot: w,
                    layout: k
                } = y;
                if (w && k) {
                    const S = Ye();
                    po(S, r.layoutBox, w.layoutBox);
                    const b = Ye();
                    po(b, i, k.layoutBox), $x(S, b) || (g = !0), y.options.layoutRoot && (t.relativeTarget = b, t.relativeTargetOrigin = S, t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: r,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: m,
            hasRelativeTargetChanged: g
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: i
        } = t.options;
        i && i()
    }
    t.options.transition = void 0
}

function oO(t) {
    ao && Wr.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function aO(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function lO(t) {
    t.clearSnapshot()
}

function Sv(t) {
    t.clearMeasurements()
}

function uO(t) {
    t.isLayoutDirty = !1
}

function cO(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function bv(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function dO(t) {
    t.resolveTargetDelta()
}

function fO(t) {
    t.calcProjection()
}

function hO(t) {
    t.resetSkewAndRotation()
}

function pO(t) {
    t.removeLeadSnapshot()
}

function kv(t, e, r) {
    t.translate = He(e.translate, 0, r), t.scale = He(e.scale, 1, r), t.origin = e.origin, t.originPoint = e.originPoint
}

function Ev(t, e, r, i) {
    t.min = He(e.min, r.min, i), t.max = He(e.max, r.max, i)
}

function mO(t, e, r, i) {
    Ev(t.x, e.x, r.x, i), Ev(t.y, e.y, r.y, i)
}

function gO(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const yO = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Cv = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Tv = Cv("applewebkit/") && !Cv("chrome/") ? Math.round : Ut;

function Pv(t) {
    t.min = Tv(t.min), t.max = Tv(t.max)
}

function vO(t) {
    Pv(t.x), Pv(t.y)
}

function Wx(t, e, r) {
    return t === "position" || t === "preserve-aspect" && !S2(vv(e), vv(r), .2)
}

function wO(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const xO = qx({
        attachResizeListener: (t, e) => So(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    hd = {
        current: void 0
    },
    Kx = qx({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!hd.current) {
                const t = new xO({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), hd.current = t
            }
            return hd.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    SO = {
        pan: {
            Feature: I2
        },
        drag: {
            Feature: j2,
            ProjectionNode: Kx,
            MeasureLayout: Vx
        }
    };

function _v(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const a = "onHover" + r,
        u = i[a];
    u && Be.postRender(() => u(e, Io(e)))
}
class bO extends _r {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = SR(e, r => (_v(this.node, r, "Start"), i => _v(this.node, i, "End"))))
    }
    unmount() {}
}
class kO extends _r {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = jo(So(this.node.current, "focus", () => this.onFocus()), So(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Rv(t, e, r) {
    const {
        props: i
    } = t;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const a = "onTap" + (r === "End" ? "" : r),
        u = i[a];
    u && Be.postRender(() => u(e, Io(e)))
}
class EO extends _r {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = CR(e, r => (Rv(this.node, r, "Start"), (i, {
            success: a
        }) => Rv(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const rf = new WeakMap,
    pd = new WeakMap,
    CO = t => {
        const e = rf.get(t.target);
        e && e(t)
    },
    TO = t => {
        t.forEach(CO)
    };

function PO({
    root: t,
    ...e
}) {
    const r = t || document;
    pd.has(r) || pd.set(r, {});
    const i = pd.get(r),
        a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(TO, {
        root: t,
        ...e
    })), i[a]
}

function _O(t, e, r) {
    const i = PO(e);
    return rf.set(t, r), i.observe(t), () => {
        rf.delete(t), i.unobserve(t)
    }
}
const RO = {
    some: 0,
    all: 1
};
class AO extends _r {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: r,
            margin: i,
            amount: a = "some",
            once: u
        } = e, c = {
            root: r ? r.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : RO[a]
        }, f = h => {
            const {
                isIntersecting: m
            } = h;
            if (this.isInView === m || (this.isInView = m, u && !m && this.hasEnteredView)) return;
            m && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {
                onViewportEnter: g,
                onViewportLeave: y
            } = this.node.getProps(), w = m ? g : y;
            w && w(h)
        };
        return _O(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: r
        } = this.node;
        ["amount", "margin", "root"].some(OO(e, r)) && this.startObserver()
    }
    unmount() {}
}

function OO({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return r => t[r] !== e[r]
}
const NO = {
        inView: {
            Feature: AO
        },
        tap: {
            Feature: EO
        },
        focus: {
            Feature: kO
        },
        hover: {
            Feature: bO
        }
    },
    LO = {
        layout: {
            ProjectionNode: Kx,
            MeasureLayout: Vx
        }
    },
    sf = {
        current: null
    },
    Qx = {
        current: !1
    };

function MO() {
    if (Qx.current = !0, !!Rf)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => sf.current = t.matches;
            t.addListener(e), e()
        } else sf.current = !1
}
const DO = [...wx, vt, Tr],
    jO = t => DO.find(vx(t)),
    Av = new WeakMap;

function IO(t, e, r) {
    for (const i in e) {
        const a = e[i],
            u = r[i];
        if (xt(a)) t.addValue(i, a);
        else if (xt(u)) t.addValue(i, wo(a, {
            owner: t
        }));
        else if (u !== a)
            if (t.hasValue(i)) {
                const c = t.getValue(i);
                c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a)
            } else {
                const c = t.getStaticValue(i);
                t.addValue(i, wo(c !== void 0 ? c : a, {
                    owner: t
                }))
            }
    }
    for (const i in r) e[i] === void 0 && t.removeValue(i);
    return e
}
const Ov = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class FO {
    scrapeMotionValuesFromProps(e, r, i) {
        return {}
    }
    constructor({
        parent: e,
        props: r,
        presenceContext: i,
        reducedMotionConfig: a,
        blockInitialAnimation: u,
        visualState: c
    }, f = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = nh, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const k = En.now();
            this.renderScheduledAt < k && (this.renderScheduledAt = k, Be.render(this.render, !1, !0))
        };
        const {
            latestValues: h,
            renderState: m,
            onUpdate: g
        } = c;
        this.onUpdate = g, this.latestValues = h, this.baseTarget = { ...h
        }, this.initialValues = r.initial ? { ...h
        } : {}, this.renderState = m, this.parent = e, this.props = r, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = a, this.options = f, this.blockInitialAnimation = !!u, this.isControllingVariants = $l(r), this.isVariantNode = Pw(r), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: y,
            ...w
        } = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const k in w) {
            const S = w[k];
            h[k] !== void 0 && xt(S) && S.set(h[k], !1)
        }
    }
    mount(e) {
        this.current = e, Av.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), Qx.current || MO(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : sf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Av.delete(this.current), this.projection && this.projection.unmount(), Cr(this.notifyUpdate), Cr(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const r = this.features[e];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, r) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = cs.has(e),
            a = r.on("change", f => {
                this.latestValues[e] = f, this.props.onUpdate && Be.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            u = r.on("renderRequest", this.scheduleRender);
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, e, r)), this.valueSubscriptions.set(e, () => {
            a(), u(), c && c(), r.owner && r.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ri) {
            const r = ri[e];
            if (!r) continue;
            const {
                isEnabled: i,
                Feature: a
            } = r;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)), this.features[e]) {
                const u = this.features[e];
                u.isMounted ? u.update() : (u.mount(), u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, r) {
        this.latestValues[e] = r
    }
    update(e, r) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
        for (let i = 0; i < Ov.length; i++) {
            const a = Ov[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
            const u = "on" + a,
                c = e[u];
            c && (this.propEventSubscriptions[a] = this.on(a, c))
        }
        this.prevMotionValues = IO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const r = this.getClosestVariantNode();
        if (r) return r.variantChildren && r.variantChildren.add(e), () => r.variantChildren.delete(e)
    }
    addValue(e, r) {
        const i = this.values.get(e);
        r !== i && (i && this.removeValue(e), this.bindToMotionValue(e, r), this.values.set(e, r), this.latestValues[e] = r.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const r = this.valueSubscriptions.get(e);
        r && (r(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, r) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && r !== void 0 && (i = wo(r === null ? void 0 : r, {
            owner: this
        }), this.addValue(e, i)), i
    }
    readValue(e, r) {
        var i;
        let a = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return a != null && (typeof a == "string" && (gx(a) || ax(a)) ? a = parseFloat(a) : !jO(a) && Tr.test(r) && (a = hx(e, r)), this.setBaseTarget(e, xt(a) ? a.get() : a)), xt(a) ? a.get() : a
    }
    setBaseTarget(e, r) {
        this.baseTarget[e] = r
    }
    getBaseTarget(e) {
        var r;
        const {
            initial: i
        } = this.props;
        let a;
        if (typeof i == "string" || typeof i == "object") {
            const c = jf(this.props, i, (r = this.presenceContext) === null || r === void 0 ? void 0 : r.custom);
            c && (a = c[e])
        }
        if (i && a !== void 0) return a;
        const u = this.getBaseTargetFromProps(this.props, e);
        return u !== void 0 && !xt(u) ? u : this.initialValues[e] !== void 0 && a === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, r) {
        return this.events[e] || (this.events[e] = new Yf), this.events[e].add(r)
    }
    notify(e, ...r) {
        this.events[e] && this.events[e].notify(...r)
    }
}
class Gx extends FO {
    constructor() {
        super(...arguments), this.KeyframeResolver = xx
    }
    sortInstanceNodePosition(e, r) {
        return e.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, r) {
        return e.style ? e.style[r] : void 0
    }
    removeValueFromRenderState(e, {
        vars: r,
        style: i
    }) {
        delete r[e], delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        xt(e) && (this.childSubscription = e.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }))
    }
}

function VO(t) {
    return window.getComputedStyle(t)
}
class BO extends Gx {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = jw
    }
    readValueFromInstance(e, r) {
        if (cs.has(r)) {
            const i = th(r);
            return i && i.default || 0
        } else {
            const i = VO(e),
                a = (Lw(r) ? i.getPropertyValue(r) : i[r]) || 0;
            return typeof a == "string" ? a.trim() : a
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: r
    }) {
        return Ix(e, r)
    }
    build(e, r, i) {
        Vf(e, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return $f(e, r, i)
    }
}
class UO extends Gx {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ye
    }
    getBaseTargetFromProps(e, r) {
        return e[r]
    }
    readValueFromInstance(e, r) {
        if (cs.has(r)) {
            const i = th(r);
            return i && i.default || 0
        }
        return r = Iw.has(r) ? r : Lf(r), e.getAttribute(r)
    }
    scrapeMotionValuesFromProps(e, r, i) {
        return Bw(e, r, i)
    }
    build(e, r, i) {
        Bf(e, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, r, i, a) {
        Fw(e, r, i, a)
    }
    mount(e) {
        this.isSVGTag = zf(e.tagName), super.mount(e)
    }
}
const zO = (t, e) => Df(t) ? new UO(e) : new BO(e, {
        allowProjection: t !== j.Fragment
    }),
    $O = pR({ ...f2,
        ...NO,
        ...SO,
        ...LO
    }, zO),
    Dt = R_($O);

function HO() {
    const [t, e] = j.useState(!1), [r, i] = j.useState(!1);
    j.useEffect(() => {
        const c = () => i(window.scrollY > 50);
        return window.addEventListener("scroll", c), () => window.removeEventListener("scroll", c)
    }, []);
    const a = [{
            label: "Home",
            href: "#home"
        }, {
            label: "About",
            href: "#about"
        }, {
            label: "Menu",
            href: "#menu"
        }, {
            label: "Services",
            href: "#services"
        }, {
            label: "Contact",
            href: "#contact"
        }],
        u = c => {
            e(!1);
            const f = document.querySelector(c);
            f && f.scrollIntoView({
                behavior: "smooth"
            })
        };
    return C.jsxs("nav", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${r?"bg-background/95 backdrop-blur-md shadow-sm":"bg-transparent"}`,
        children: [C.jsx("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: C.jsxs("div", {
                className: "flex items-center justify-between h-20",
                children: [C.jsxs("button", {
                    onClick: () => u("#home"),
                    className: "flex items-center gap-2",
                    children: [C.jsx("span", {
                        className: "font-display text-2xl font-bold text-primary tracking-tight",
                        children: "Rojo"
                    }), C.jsx("span", {
                        className: "font-display text-lg text-foreground/70 font-light",
                        children: "Cafe & Restaurant"
                    })]
                }), C.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [a.map(c => C.jsx("button", {
                        onClick: () => u(c.href),
                        className: "font-body text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300",
                        children: c.label
                    }, c.href)), C.jsxs("a", {
                        href: "tel:09165614913",
                        className: "flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body text-sm font-medium hover:opacity-90 transition-opacity",
                        children: [C.jsx(gl, {
                            className: "w-3.5 h-3.5"
                        }), "Reserve Now"]
                    })]
                }), C.jsx("button", {
                    onClick: () => e(!t),
                    className: "md:hidden text-foreground p-2",
                    children: t ? C.jsx(Yv, {
                        className: "w-6 h-6"
                    }) : C.jsx(Eb, {
                        className: "w-6 h-6"
                    })
                })]
            })
        }), C.jsx(S_, {
            children: t && C.jsx(Dt.div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0,
                    height: 0
                },
                className: "md:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden",
                children: C.jsxs("div", {
                    className: "px-6 py-6 flex flex-col gap-4",
                    children: [a.map(c => C.jsx("button", {
                        onClick: () => u(c.href),
                        className: "font-body text-base text-foreground/80 hover:text-primary transition-colors text-left",
                        children: c.label
                    }, c.href)), C.jsxs("a", {
                        href: "tel:09165614913",
                        className: "flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-body text-sm font-medium mt-2",
                        children: [C.jsx(gl, {
                            className: "w-4 h-4"
                        }), "Reserve Now"]
                    })]
                })
            })
        })]
    })
}
const qO = "https://media.base44.com/images/public/69bf67b4dc57553637e61cc1/fed107173_generated_a4403b80.png";

function WO() {
    const t = e => {
        const r = document.querySelector(e);
        r && r.scrollIntoView({
            behavior: "smooth"
        })
    };
    return C.jsxs("section", {
        id: "home",
        className: "relative min-h-screen flex items-center overflow-hidden",
        children: [C.jsxs("div", {
            className: "absolute inset-0",
            children: [C.jsx("img", {
                src: qO,
                alt: "Rojo Cafe cozy interior with warm lighting",
                className: "w-full h-full object-cover"
            }), C.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
            })]
        }), C.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32",
            children: C.jsxs(Dt.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    ease: "easeOut"
                },
                className: "max-w-2xl",
                children: [C.jsxs(Dt.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .3
                    },
                    className: "flex items-center gap-2 mb-6",
                    children: [C.jsx("span", {
                        className: "w-12 h-px bg-white/60"
                    }), C.jsx("span", {
                        className: "font-body text-sm tracking-[0.2em] text-white/80 uppercase",
                        children: "Cafe & Restaurant"
                    })]
                }), C.jsxs("h1", {
                    className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6",
                    children: ["Rojo Cafe", C.jsx("span", {
                        className: "block text-white/60 font-light text-3xl sm:text-4xl lg:text-5xl mt-2",
                        children: "Where comfort meets flavor"
                    })]
                }), C.jsx("p", {
                    className: "font-body text-lg text-white/70 max-w-lg mb-8 leading-relaxed",
                    children: "A cozy space for great food, good coffee, and warm company. Dine in, dine out, or take it to go — we've got you covered."
                }), C.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 mb-10",
                    children: [C.jsx("button", {
                        onClick: () => t("#menu"),
                        className: "bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300",
                        children: "Explore Our Menu"
                    }), C.jsx("button", {
                        onClick: () => t("#contact"),
                        className: "border border-white/30 text-white px-8 py-3.5 rounded-full font-body text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300",
                        children: "Find Us"
                    })]
                }), C.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-6 text-white/60 font-body text-sm",
                    children: [C.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [C.jsx(Qv, {
                            className: "w-4 h-4"
                        }), C.jsx("span", {
                            className: "text-green-400 font-medium",
                            children: "Open now"
                        })]
                    }), C.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [C.jsx(lf, {
                            className: "w-4 h-4"
                        }), C.jsx("span", {
                            children: "Imus, Cavite, Philippines"
                        })]
                    })]
                })]
            })
        }), C.jsx(Dt.div, {
            animate: {
                y: [0, 8, 0]
            },
            transition: {
                repeat: 1 / 0,
                duration: 2
            },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10",
            children: C.jsx("div", {
                className: "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2",
                children: C.jsx("div", {
                    className: "w-1 h-2 bg-white/60 rounded-full"
                })
            })
        })]
    })
}
const KO = [{
    icon: Vb,
    title: "Free Wi-Fi",
    description: "Stay connected while you enjoy your meal or get some work done."
}, {
    icon: Ob,
    title: "Air Conditioned",
    description: "Cool and comfortable indoor dining, perfect for the tropical heat."
}, {
    icon: Db,
    title: "Alfresco Dining",
    description: "Enjoy the fresh air and natural ambiance in our outdoor seating area."
}, {
    icon: vb,
    title: "Pet Friendly",
    description: "Bring your furry friends along — they're part of the family too."
}];

function QO() {
    return C.jsx("section", {
        className: "py-24 bg-background",
        children: C.jsx("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: C.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
                children: KO.map((t, e) => C.jsxs(Dt.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: e * .1
                    },
                    className: "text-center group",
                    children: [C.jsx("div", {
                        className: "w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300",
                        children: C.jsx(t.icon, {
                            className: "w-7 h-7 text-primary"
                        })
                    }), C.jsx("h3", {
                        className: "font-display text-lg font-semibold text-foreground mb-2",
                        children: t.title
                    }), C.jsx("p", {
                        className: "font-body text-sm text-muted-foreground leading-relaxed",
                        children: t.description
                    })]
                }, t.title))
            })
        })
    })
}
const GO = "https://media.base44.com/images/public/69bf67b4dc57553637e61cc1/29b51e542_generated_9ae373e3.png";

function YO() {
    return C.jsx("section", {
        id: "about",
        className: "py-24 bg-secondary/40",
        children: C.jsx("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: C.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                children: [C.jsx(Dt.div, {
                    initial: {
                        opacity: 0,
                        x: -40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .7
                    },
                    children: C.jsxs("div", {
                        className: "relative",
                        children: [C.jsx("img", {
                            src: GO,
                            alt: "Rojo Cafe outdoor alfresco dining area with string lights and plants",
                            className: "w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
                        }), C.jsxs("div", {
                            className: "absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden sm:block",
                            children: [C.jsx("p", {
                                className: "font-display text-2xl font-bold",
                                children: "100%"
                            }), C.jsx("p", {
                                className: "font-body text-xs tracking-wide opacity-80",
                                children: "Cozy Vibes"
                            })]
                        })]
                    })
                }), C.jsxs(Dt.div, {
                    initial: {
                        opacity: 0,
                        x: 40
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .7
                    },
                    children: [C.jsx("span", {
                        className: "font-body text-sm tracking-[0.2em] text-primary uppercase font-medium",
                        children: "Our Story"
                    }), C.jsxs("h2", {
                        className: "font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight",
                        children: ["It's cozy, comforting,", C.jsx("br", {}), C.jsx("span", {
                            className: "text-primary",
                            children: "and it's nice."
                        })]
                    }), C.jsx("p", {
                        className: "font-body text-muted-foreground leading-relaxed mb-6",
                        children: "Rojo Cafe & Restaurant is your go-to spot in Imus, Cavite for delicious meals and a welcoming atmosphere. Whether you're looking for a quiet place to work with free Wi-Fi, a refreshing air-conditioned space to unwind, or a breezy alfresco area to enjoy with friends and pets — we have it all."
                    }), C.jsx("p", {
                        className: "font-body text-muted-foreground leading-relaxed mb-8",
                        children: "From our carefully crafted dishes to our warm, friendly service, every visit to Rojo is designed to make you feel right at home. Come for the food, stay for the vibes."
                    }), C.jsxs("div", {
                        className: "flex gap-12",
                        children: [C.jsxs("div", {
                            children: [C.jsx("p", {
                                className: "font-display text-3xl font-bold text-primary",
                                children: "★"
                            }), C.jsx("p", {
                                className: "font-body text-sm text-muted-foreground mt-1",
                                children: "Highly Rated"
                            })]
                        }), C.jsxs("div", {
                            children: [C.jsx("p", {
                                className: "font-display text-3xl font-bold text-primary",
                                children: "♡"
                            }), C.jsx("p", {
                                className: "font-body text-sm text-muted-foreground mt-1",
                                children: "Community Favorite"
                            })]
                        }), C.jsxs("div", {
                            children: [C.jsx("p", {
                                className: "font-display text-3xl font-bold text-primary",
                                children: "✦"
                            }), C.jsx("p", {
                                className: "font-body text-sm text-muted-foreground mt-1",
                                children: "Fresh Daily"
                            })]
                        })]
                    })]
                })]
            })
        })
    })
}
const XO = "https://media.base44.com/images/public/69bf67b4dc57553637e61cc1/1c2c14f85_generated_7146d2a8.png",
    JO = "https://media.base44.com/images/public/69bf67b4dc57553637e61cc1/c11094bfb_generated_897f7a6b.png",
    ZO = "https://media.base44.com/images/public/69bf67b4dc57553637e61cc1/c1d689e53_generated_b47e5161.png",
    eN = [{
        image: XO,
        name: "Brunch Specials",
        description: "Start your morning right with our freshly prepared brunch favorites.",
        alt: "Beautifully plated brunch dish with poached eggs and avocado toast"
    }, {
        image: JO,
        name: "Coffee & Pastries",
        description: "Handcrafted coffee and baked-fresh-daily pastries to brighten your day.",
        alt: "Latte with beautiful latte art and fresh croissant pastry"
    }, {
        image: ZO,
        name: "Pasta & Mains",
        description: "Hearty, flavorful dishes made from the finest ingredients.",
        alt: "Delicious pasta with rich tomato sauce, basil and parmesan"
    }];

function tN() {
    return C.jsx("section", {
        id: "menu",
        className: "py-24 bg-background",
        children: C.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [C.jsxs(Dt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [C.jsx("span", {
                    className: "font-body text-sm tracking-[0.2em] text-primary uppercase font-medium",
                    children: "What We Serve"
                }), C.jsx("h2", {
                    className: "font-display text-3xl sm:text-4xl font-bold text-foreground mt-3",
                    children: "Menu Highlights"
                }), C.jsx("p", {
                    className: "font-body text-muted-foreground mt-4 max-w-md mx-auto",
                    children: "From morning coffee to evening dinners, every dish is made with love."
                })]
            }), C.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: eN.map((t, e) => C.jsxs(Dt.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: e * .15
                    },
                    className: "group",
                    children: [C.jsxs("div", {
                        className: "relative overflow-hidden rounded-2xl mb-5",
                        children: [C.jsx("img", {
                            src: t.image,
                            alt: t.alt,
                            className: "w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        }), C.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        })]
                    }), C.jsx("h3", {
                        className: "font-display text-xl font-semibold text-foreground mb-2",
                        children: t.name
                    }), C.jsx("p", {
                        className: "font-body text-sm text-muted-foreground leading-relaxed",
                        children: t.description
                    })]
                }, t.name))
            })]
        })
    })
}
const nN = [{
    icon: Ib,
    label: "Dine-in"
}, {
    icon: Rb,
    label: "In-store Pickup"
}, {
    icon: Lb,
    label: "Outdoor Seating"
}, {
    icon: Tb,
    label: "Takeout"
}, {
    icon: mb,
    label: "Reservations"
}, {
    icon: xb,
    label: "Online Booking"
}];

function rN() {
    return C.jsx("section", {
        id: "services",
        className: "py-24 bg-primary text-primary-foreground",
        children: C.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [C.jsxs(Dt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [C.jsx("span", {
                    className: "font-body text-sm tracking-[0.2em] uppercase opacity-70",
                    children: "How We Serve You"
                }), C.jsx("h2", {
                    className: "font-display text-3xl sm:text-4xl font-bold mt-3",
                    children: "Our Services"
                }), C.jsx("p", {
                    className: "font-body mt-4 max-w-md mx-auto opacity-80",
                    children: "Multiple ways to enjoy Rojo — your way, your time."
                })]
            }), C.jsx("div", {
                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6",
                children: nN.map((t, e) => C.jsxs(Dt.div, {
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .4,
                        delay: e * .08
                    },
                    className: "flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300",
                    children: [C.jsx(t.icon, {
                        className: "w-7 h-7"
                    }), C.jsx("span", {
                        className: "font-body text-sm font-medium text-center",
                        children: t.label
                    })]
                }, t.label))
            })]
        })
    })
}
const sN = [{
    icon: lf,
    label: "Visit Us",
    value: `26, Gen. Castañeda St.
Poblacion IV B, Imus, Cavite
Philippines 4103`,
    href: "https://maps.google.com/?q=26+Gen+Castañeda+st+Poblacion+IV+B+Imus+Philippines+4103"
}, {
    icon: gl,
    label: "Call Us",
    value: "0916 561 4913",
    href: "tel:09165614913"
}, {
    icon: Gv,
    label: "Email Us",
    value: "jessacrisologo10@gmail.com",
    href: "mailto:jessacrisologo10@gmail.com"
}, {
    icon: Qv,
    label: "Hours",
    value: "Open Daily",
    href: null
}];

function iN() {
    return C.jsx("section", {
        id: "contact",
        className: "py-24 bg-secondary/40",
        children: C.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8",
            children: [C.jsxs(Dt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [C.jsx("span", {
                    className: "font-body text-sm tracking-[0.2em] text-primary uppercase font-medium",
                    children: "Get In Touch"
                }), C.jsx("h2", {
                    className: "font-display text-3xl sm:text-4xl font-bold text-foreground mt-3",
                    children: "Visit Us Today"
                }), C.jsx("p", {
                    className: "font-body text-muted-foreground mt-4 max-w-md mx-auto",
                    children: "We'd love to see you. Drop by, give us a call, or send us a message."
                })]
            }), C.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                children: [C.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: sN.map((t, e) => C.jsx(Dt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: e * .1
                        },
                        children: t.href ? C.jsx("a", {
                            href: t.href,
                            target: t.href.startsWith("http") ? "_blank" : void 0,
                            rel: t.href.startsWith("http") ? "noopener noreferrer" : void 0,
                            className: "block p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300 h-full",
                            children: C.jsx(Nv, {
                                info: t
                            })
                        }) : C.jsx("div", {
                            className: "p-6 rounded-2xl bg-card h-full",
                            children: C.jsx(Nv, {
                                info: t
                            })
                        })
                    }, t.label))
                }), C.jsx(Dt.div, {
                    initial: {
                        opacity: 0,
                        x: 30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "rounded-2xl overflow-hidden shadow-lg min-h-[350px]",
                    children: C.jsx("iframe", {
                        title: "Rojo Cafe Location",
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.5!2d120.936!3d14.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzAwLjAiTiAxMjDCsDU2JzEwLjAiRQ!5e0!3m2!1sen!2sph!4v1",
                        width: "100%",
                        height: "100%",
                        style: {
                            border: 0,
                            minHeight: "350px"
                        },
                        allowFullScreen: "",
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    })
                })]
            })]
        })
    })
}

function Nv({
    info: t
}) {
    return C.jsxs(C.Fragment, {
        children: [C.jsx("div", {
            className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4",
            children: C.jsx(t.icon, {
                className: "w-5 h-5 text-primary"
            })
        }), C.jsx("p", {
            className: "font-body text-xs text-muted-foreground uppercase tracking-wider mb-1",
            children: t.label
        }), C.jsx("p", {
            className: "font-body text-sm text-foreground whitespace-pre-line leading-relaxed",
            children: t.value
        })]
    })
}

function oN() {
    const t = e => {
        const r = document.querySelector(e);
        r && r.scrollIntoView({
            behavior: "smooth"
        })
    };
    return C.jsx("footer", {
        className: "bg-foreground text-background/80",
        children: C.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 lg:px-8 py-16",
            children: [C.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                children: [C.jsxs("div", {
                    children: [C.jsxs("h3", {
                        className: "font-display text-2xl font-bold text-background mb-4",
                        children: ["Rojo ", C.jsx("span", {
                            className: "font-light text-background/60",
                            children: "Cafe"
                        })]
                    }), C.jsx("p", {
                        className: "font-body text-sm leading-relaxed text-background/50 max-w-xs",
                        children: "It's cozy, comforting, and it's nice. Your favorite spot in Imus, Cavite."
                    })]
                }), C.jsxs("div", {
                    children: [C.jsx("h4", {
                        className: "font-body text-xs uppercase tracking-[0.2em] text-background/40 mb-5",
                        children: "Quick Links"
                    }), C.jsx("div", {
                        className: "flex flex-col gap-3",
                        children: ["Home", "About", "Menu", "Services", "Contact"].map(e => C.jsx("button", {
                            onClick: () => t(`#${e.toLowerCase()}`),
                            className: "font-body text-sm text-background/60 hover:text-background transition-colors text-left",
                            children: e
                        }, e))
                    })]
                }), C.jsxs("div", {
                    children: [C.jsx("h4", {
                        className: "font-body text-xs uppercase tracking-[0.2em] text-background/40 mb-5",
                        children: "Contact Info"
                    }), C.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [C.jsxs("a", {
                            href: "tel:09165614913",
                            className: "flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors",
                            children: [C.jsx(gl, {
                                className: "w-4 h-4 shrink-0"
                            }), "0916 561 4913"]
                        }), C.jsxs("a", {
                            href: "mailto:jessacrisologo10@gmail.com",
                            className: "flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors",
                            children: [C.jsx(Gv, {
                                className: "w-4 h-4 shrink-0"
                            }), "jessacrisologo10@gmail.com"]
                        }), C.jsxs("div", {
                            className: "flex items-start gap-3 font-body text-sm text-background/60",
                            children: [C.jsx(lf, {
                                className: "w-4 h-4 shrink-0 mt-0.5"
                            }), C.jsx("span", {
                                children: "26, Gen. Castañeda St., Poblacion IV B, Imus, Philippines 4103"
                            })]
                        })]
                    })]
                })]
            }), C.jsx("div", {
                className: "border-t border-background/10 mt-12 pt-8 text-center",
                children: C.jsxs("p", {
                    className: "font-body text-xs text-background/30",
                    children: ["© ", new Date().getFullYear(), " Rojo Cafe & Restaurant. All rights reserved."]
                })
            })]
        })
    })
}

function aN() {
    return C.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [C.jsx(HO, {}), C.jsx(WO, {}), C.jsx(QO, {}), C.jsx(YO, {}), C.jsx(tN, {}), C.jsx(rN, {}), C.jsx(iN, {}), C.jsx(oN, {})]
    })
}
const lN = () => {
    const {
        isLoadingAuth: t,
        isLoadingPublicSettings: e,
        authError: r,
        navigateToLogin: i
    } = m_();
    if (e || t) return C.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center",
        children: C.jsx("div", {
            className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
        })
    });
    if (r) {
        if (r.type === "user_not_registered") return C.jsx(g_, {});
        if (r.type === "auth_required") return i(), null
    }
    return C.jsxs(tC, {
        children: [C.jsx(Od, {
            path: "/",
            element: C.jsx(aN, {})
        }), C.jsx(Od, {
            path: "*",
            element: C.jsx(h_, {})
        })]
    })
};

function uN() {
    return C.jsx(p_, {
        children: C.jsxs(sE, {
            client: yE,
            children: [C.jsx(sC, {
                children: C.jsx(lN, {})
            }), C.jsx(Nk, {})]
        })
    })
}
rb.createRoot(document.getElementById("root")).render(C.jsx(uN, {}));
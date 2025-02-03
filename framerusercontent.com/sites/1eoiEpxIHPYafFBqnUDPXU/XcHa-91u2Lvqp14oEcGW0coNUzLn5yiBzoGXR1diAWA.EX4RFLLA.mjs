import {
  c as sr,
  d as lr,
  e as cr,
  f as mr,
  g as fr,
  h as dr,
  i as pr,
} from "./chunk-J7ROIFYC.mjs";
import {
  a as hr,
  b as jt,
  c as ur,
  d as yr,
  e as et,
  f as wr,
  g as ge,
} from "./chunk-MIIBT7LN.mjs";
import { a as br } from "./chunk-ZQ32ZAXT.mjs";
import "./chunk-FNS24ZOT.mjs";
import { a as Xt } from "./chunk-ZGCOBBVW.mjs";
import {
  a as gr,
  b as mt,
  c as ha,
  d as ua,
  e as ya,
  f as Tt,
  g as Mt,
  h as Ft,
  i as At,
  j as Pt,
  k as Ot,
  l as Dt,
  m as Rt,
  n as qt,
  o as ga,
  p as va,
  q as xa,
  r as wa,
  s as ba,
  t as Va,
  u as ka,
  v as Ca,
  w as za,
} from "./chunk-DWV2M2OI.mjs";
import { a as Et, b as Bt, c as Ut } from "./chunk-RLVDOXHI.mjs";
import { a as Ae } from "./chunk-YURMHTDO.mjs";
import { a as xr, b as tt } from "./chunk-ZAJ3GA3C.mjs";
import {
  a as Ge,
  b as fa,
  c as da,
  d as pa,
  i as vr,
  k as _a,
  l as Sa,
  m as Ia,
  n as Na,
} from "./chunk-SGZXRRGF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as H,
  B as Nt,
  Ba as ca,
  C as Qr,
  D as Jr,
  E as Zr,
  F as Kr,
  G as $r,
  Ga as Ne,
  Ha as ma,
  I as Lt,
  J as ea,
  Ja as $e,
  N as ta,
  O as ra,
  Oa as ce,
  Pa as ct,
  R as ae,
  Ra as Xe,
  Sa as ee,
  Ua as X,
  Va as We,
  Wa as ie,
  X as ue,
  Xa as O,
  Ya as de,
  Z as l,
  Za as or,
  a as Gr,
  aa as q,
  b as Me,
  ba as aa,
  c as A,
  ca as na,
  d as Be,
  da as $,
  ea as ir,
  f as rr,
  fa as ia,
  g as te,
  ga as le,
  h as Yr,
  ha as y,
  j as Ke,
  ja as k,
  k as se,
  l as he,
  la as ne,
  m as re,
  ma as oa,
  n as Hr,
  na as sa,
  o as J,
  p as P,
  q as Ue,
  t as e,
  ta as la,
  u as w,
  v as ar,
  va as xe,
  w as nr,
  x as U,
  xa as F,
  y as f,
  ya as Fe,
} from "./chunk-WBV7SVYU.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as I } from "./chunk-RIUMFBNJ.mjs";
var Le = {};
Object.defineProperty(Le, "__esModule", { value: !0 });
var ft,
  Ve = Gr,
  _e = (ft = Ve) && typeof ft == "object" && "default" in ft ? ft.default : ft;
function La(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var n = 0, a = new Array(r); n < r; n++) a[n] = t[n];
  return a;
}
var ja = function (t) {
    return _e.createElement("div", null, t.children);
  },
  Ta = function (t) {
    return _e.createElement(
      "span",
      { style: { whiteSpace: "pre" } },
      t.children
    );
  },
  Ma = function (t) {
    return _e.createElement("span", null, t.children);
  },
  Vn = Ve.memo(ja),
  kn = Ve.memo(Ta),
  Cn = Ve.memo(Ma),
  zn = Ve.forwardRef(function (t, r) {
    var n = t.className,
      a = t.style,
      s = t.LineWrapper,
      m = s === void 0 ? Vn : s,
      c = t.WordWrapper,
      u = c === void 0 ? kn : c,
      v = t.LetterWrapper,
      i = v === void 0 ? Cn : v,
      d = t.extraProps,
      h = "";
    _e.Children.map(t.children, function (z) {
      if (typeof z != "string" && typeof z != "number")
        throw new Error("SplitText expect a text as children");
      h += String(z);
    });
    var p = Ve.useRef(null),
      V = Ve.useState([]),
      x = V[0],
      C = V[1],
      g = Ve.useRef(0);
    Ve.useLayoutEffect(
      function () {
        return (function () {
          var z = p.current;
          if (z) {
            if (x.length > 0)
              return (function (B, Z) {
                for (
                  var oe,
                    me =
                      g.current ||
                      B.map(function (K) {
                        return K.length;
                      }).sort(function (K, we) {
                        return we - K;
                      })[0],
                    fe = [],
                    W = "",
                    pe = 0,
                    ve = (function (K, we) {
                      var ke;
                      if (typeof Symbol > "u" || K[Symbol.iterator] == null) {
                        if (
                          Array.isArray(K) ||
                          (ke = (function (E, Ce) {
                            if (E) {
                              if (typeof E == "string") return La(E, void 0);
                              var Ie = Object.prototype.toString
                                .call(E)
                                .slice(8, -1);
                              return (
                                Ie === "Object" &&
                                  E.constructor &&
                                  (Ie = E.constructor.name),
                                Ie === "Map" || Ie === "Set"
                                  ? Array.from(E)
                                  : Ie === "Arguments" ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      Ie
                                    )
                                  ? La(E, void 0)
                                  : void 0
                              );
                            }
                          })(K))
                        ) {
                          ke && (K = ke);
                          var Je = 0;
                          return function () {
                            return Je >= K.length
                              ? { done: !0 }
                              : { done: !1, value: K[Je++] };
                          };
                        }
                        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      }
                      return (ke = K[Symbol.iterator]()).next.bind(ke);
                    })(Z.split(" ").entries());
                  !(oe = ve()).done;

                ) {
                  var Q = oe.value[1];
                  (pe += Q.length + 1) > me + 1 &&
                    (fe.push(W), (W = ""), (pe = 0)),
                    (W += Q.trim() + " ");
                }
                fe.push(W),
                  C(
                    fe.map(function (K) {
                      return K.trim();
                    })
                  ),
                  me > g.current && (g.current = me);
              })(x, h);
            for (
              var S, N = [], j = [], o = 0, b = Array.from(z.children);
              o < b.length;
              o++
            ) {
              var L = b[o],
                M = L.getBoundingClientRect().top;
              S == null && (S = M),
                M !== S && (N.push(j.join(" ")), (j = [])),
                (S = M),
                j.push((L.textContent || "").trim());
            }
            N.push(j.join(" ")), C(N);
          }
        })();
      },
      [h]
    );
    var _ = 0,
      T = 0;
    return x.length
      ? _e.createElement(
          "div",
          {
            className: n,
            ref: function (z) {
              (p.current = z),
                typeof r == "function" ? r(z) : r && (r.current = z);
            },
            style: a,
          },
          x.map(function (z, S) {
            var N = z.split(" ");
            return (
              (N = N.map(function (j, o) {
                return o === N.length - 1 ? j : j + " ";
              })),
              _e.createElement(
                m,
                { key: S, lineIndex: S, extraProps: d },
                N.map(function (j, o) {
                  var b = j.split("");
                  return _e.createElement(
                    u,
                    {
                      key: o,
                      lineIndex: S,
                      wordIndex: o,
                      countIndex: _++,
                      extraProps: d,
                    },
                    b.map(function (L, M) {
                      return _e.createElement(
                        i,
                        {
                          key: M,
                          lineIndex: S,
                          wordIndex: o,
                          letterIndex: M,
                          countIndex: T++,
                          extraProps: d,
                        },
                        L
                      );
                    })
                  );
                })
              )
            );
          })
        )
      : _e.createElement(
          "div",
          { className: n, ref: p, style: a },
          h.split(" ").map(function (z, S) {
            return _e.createElement("span", { key: S }, z, " ");
          })
        );
  }),
  _n = Ve.forwardRef(function (t, r) {
    var n,
      a,
      s,
      m = t.children,
      c = (function (h, p) {
        if (h == null) return {};
        var V,
          x,
          C = {},
          g = Object.keys(h);
        for (x = 0; x < g.length; x++)
          p.indexOf((V = g[x])) >= 0 || (C[V] = h[V]);
        return C;
      })(t, ["children"]),
      u = Ve.useState(0),
      v = u[0],
      i = u[1],
      d =
        ((n = function () {
          return i(function (h) {
            return h + 1;
          });
        }),
        a === void 0 && (a = !1),
        function () {
          for (
            var h = this, p = arguments.length, V = new Array(p), x = 0;
            x < p;
            x++
          )
            V[x] = arguments[x];
          var C = a && !s,
            g = function () {
              return n.apply(h, V);
            };
          clearTimeout(s), (s = setTimeout(g, 300)), C && g();
        });
    return (
      Ve.useEffect(function () {
        return (
          I.addEventListener("resize", d),
          function () {
            return I.removeEventListener("resize", d);
          }
        );
      }, []),
      _e.createElement(zn, Object.assign({ key: v }, c, { ref: r }), m)
    );
  });
(Le.LetterWrapper = Ma),
  (Le.LineWrapper = ja),
  (Le.SplitText = _n),
  (Le.WordWrapper = Ta);
var Sl = Le.__esModule,
  Il = Le.LetterWrapper,
  Nl = Le.LineWrapper,
  Fa = Le.SplitText,
  Ll = Le.WordWrapper;
var Sn = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
};
function Ye(t) {
  let {
      opacity: r,
      x: n,
      y: a,
      scale: s,
      rotate: m,
      rotateX: c,
      rotateY: u,
    } = t.effectOptions,
    [v, i] = Ue(!1),
    d = ue.current() === ue.canvas,
    h = Nt(d ? 1 : 0),
    p = t.transitionOptions.type === "spring",
    V = {
      type: t.transitionOptions.type,
      stiffness: t.transitionOptions.stiffness,
      damping: t.transitionOptions.damping,
      mass: t.transitionOptions.mass,
    },
    x = {
      type: t.transitionOptions.type,
      duration: t.transitionOptions.duration,
      ease: t.transitionOptions.ease,
    },
    C = {
      hidden: {
        opacity: r,
        x: n,
        y: a,
        scale: s,
        rotate: m,
        rotateX: c,
        rotateY: u,
      },
      visible: Sn,
    },
    g = p ? V : x,
    _ = t.transitionOptions.delay,
    T = t.type === "letter",
    z = t.type === "word",
    S = t.type === "line",
    N = { display: "contents" };
  function j({ isLetter: L, isWord: M, isLine: B }) {
    let Z = { type: t.type, variants: C, perWord: t.perWord };
    return L
      ? { LetterWrapper: (oe) => e(Vr, { ...oe, ...Z }) }
      : B
      ? { LineWrapper: (oe) => e(Vr, { ...oe, ...Z }) }
      : { WordWrapper: (oe) => e(Vr, { ...oe, ...Z }) };
  }
  let [o, b] = $r();
  return (
    he(() => {
      if (d) return;
      let L,
        M = requestAnimationFrame(() => {
          o.current &&
            (h.set(1),
            (L = b(".motion-text-segment", t.variant ? C.visible : C.hidden, {
              ...g,
              delay: ea(t.stagger, { startDelay: _ }),
            })),
            L.then(() => i(!0)));
        });
      return () => {
        L?.stop(), cancelAnimationFrame(M);
      };
    }, [t.variant]),
    e(f.div, {
      ref: o,
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: t.overflow ? "visible" : "hidden",
        fontSize: t.font.fontSize,
        fontFamily: t.font.font,
        fontWeight: t.font.fontWeight,
        letterSpacing: t.font.letterSpacing,
        lineHeight: t.font.lineHeightType
          ? t.font.lineHeight
          : `${t.font.lineHeightPixels}px`,
        textAlign: t.font.textAlign,
        whiteSpace: t.font.whiteSpace,
        color: t.color,
        left: `${t.font.offset}%`,
        margin: 0,
        padding: 0,
        opacity: h,
      },
      initial: d || v ? "visible" : "hidden",
      children: d
        ? t.text
        : e(Fa, {
            style: N,
            ...j({ isLetter: T, isWord: z, isLine: S }),
            children: t.text,
          }),
    })
  );
}
var In = (t, r, n, a = 0, s = 0, m = 0, c = 0, u) =>
    t ? (u ? s : a) : r ? a : c,
  Vr = ({
    type: t,
    countIndex: r = 0,
    letterIndex: n = 0,
    wordIndex: a = 0,
    lineIndex: s = 0,
    variants: m,
    isCanvas: c,
    children: u,
    perWord: v,
    ...i
  }) => {
    let V = In(t === "letter", t === "word", t === "line", r, n, a, s, v);
    return e(f.span, {
      ...i,
      style: {
        perspective: 1200,
        display: "inline-block",
        whiteSpace: "pre",
        margin: 0,
        padding: 0,
        willChange: "transform",
      },
      variants: m,
      className: "motion-text-segment",
      children: u,
    });
  };
Ye.displayName = "Motion Text";
Ye.defaultProps = {
  text: "Hello World",
  stagger: 0.05,
  variant: !0,
  newTab: !0,
  tag: "heading1",
  effectOptions: { x: 0, y: 100, rotate: 0, rotateX: 0, rotateY: 0 },
  transitionOptions: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1,
    delay: 0.05,
  },
  overflow: !1,
  font: {
    font: "Inter",
    fontSize: 32,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 1.2,
    lineHeightType: !0,
    lineHeightPixels: 100,
    letterSpacing: 0,
    offset: 0,
    whiteSpace: "nowrap",
  },
};
q(Ye, {
  text: {
    type: l.String,
    title: "Text",
    defaultValue: "Hello World",
    displayTextArea: !0,
  },
  type: {
    title: "Type",
    type: l.Enum,
    options: ["letter", "word", "line"],
    optionTitles: ["Letter", "Word", "Line"],
    defaultValue: "letter",
  },
  perWord: {
    type: l.Boolean,
    title: "Per Word",
    defaultValue: !1,
    hidden: (t) => t.type !== "letter",
  },
  variant: {
    title: "Animate",
    type: l.Boolean,
    defaultValue: !0,
    enabledTitle: "In",
    disabledTitle: "Out",
  },
  overflow: {
    title: "Overflow",
    type: l.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: !1,
  },
  stagger: {
    title: "Stagger",
    type: l.Number,
    step: 0.01,
    defaultValue: 0.05,
    displayStepper: !0,
  },
  effectOptions: {
    title: "From",
    type: l.Object,
    controls: {
      opacity: {
        title: "Opacity",
        type: l.Number,
        min: 0,
        max: 1,
        step: 0.01,
        defaultValue: 0,
      },
      x: {
        title: "X",
        type: l.Number,
        min: -200,
        max: 200,
        unit: "%",
        step: 1,
        defaultValue: 0,
        displayStepper: !0,
      },
      y: {
        title: "Y",
        type: l.Number,
        min: -200,
        max: 200,
        unit: "%",
        step: 1,
        defaultValue: 100,
        displayStepper: !0,
      },
      scale: {
        title: "Scale",
        type: l.Number,
        min: 0,
        max: 5,
        step: 0.01,
        defaultValue: 1,
        displayStepper: !0,
      },
      rotate: {
        title: "Rotate",
        type: l.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
      rotateX: {
        title: "Rotate X",
        type: l.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
      rotateY: {
        title: "Rotate Y",
        type: l.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
    },
  },
  transitionOptions: {
    type: l.Transition,
    title: "Transition",
    defaultValue: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 1,
      delay: 0.05,
    },
  },
  color: { type: l.Color, defaultValue: "#888" },
  font: {
    type: l.Object,
    controls: {
      font: { type: l.String, placeholder: "Inter", defaultValue: "Inter" },
      fontSize: {
        title: "Size",
        type: l.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: 32,
      },
      fontWeight: {
        type: l.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: 400,
        title: "Weight",
      },
      textAlign: {
        type: l.Enum,
        displaySegmentedControl: !0,
        title: "Align",
        options: ["left", "center", "right"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "center",
      },
      letterSpacing: {
        title: "Letter",
        type: l.Number,
        defaultValue: 0,
        step: 0.1,
        displayStepper: !0,
      },
      offset: {
        type: l.Number,
        title: "Offset",
        min: -100,
        max: 100,
        displayStepper: !0,
        step: 0.25,
        defaultValue: 0,
        unit: "%",
      },
      whiteSpace: {
        type: l.Enum,
        title: "Space",
        options: [
          "normal",
          "nowrap",
          "pre",
          "pre-wrap",
          "preline",
          "break-spaces",
        ],
        optionTitles: [
          "Normal",
          "No Wrap",
          "Pre",
          "Pre Wrap",
          "Preline",
          "Break Spaces",
        ],
        defaultValue: "center",
      },
      lineHeight: {
        type: l.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: !0,
        step: 0.1,
        defaultValue: 1.2,
        hidden: (t) => !t.lineHeightType,
      },
      lineHeightPixels: {
        type: l.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: !0,
        step: 0.1,
        defaultValue: 100,
        hidden: (t) => t.lineHeightType,
      },
      lineHeightType: {
        type: l.Boolean,
        title: " ",
        enabledTitle: "em",
        disabledTitle: "px",
        defaultValue: !0,
      },
    },
  },
});
function Aa(t) {
  return (r) => {
    let { children: n } = r,
      a = Me.map(n, (s, m) =>
        Be(s, {
          ...s.props,
          initial: { opacity: 0, y: 80 },
          whileInView: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.15 * m,
              ease: [0.67, 0, 0.35, 1],
              duration: 1,
            },
          },
          viewport: { once: !0 },
        })
      );
    return e(t, { ...r, children: a });
  };
}
var dt = (t) => t;
var Wt = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function kr(t, r) {
  return r ? t * (1e3 / r) : 0;
}
var Pa = (t, r, n) =>
    (((1 - 3 * n + 3 * r) * t + (3 * n - 6 * r)) * t + 3 * r) * t,
  Nn = 1e-7,
  Ln = 12;
function jn(t, r, n, a, s) {
  let m,
    c,
    u = 0;
  do (c = r + (n - r) / 2), (m = Pa(c, a, s) - t), m > 0 ? (n = c) : (r = c);
  while (Math.abs(m) > Nn && ++u < Ln);
  return c;
}
function pt(t, r, n, a) {
  if (t === r && n === a) return dt;
  let s = (m) => jn(m, 0, 1, t, n);
  return (m) => (m === 0 || m === 1 ? m : Pa(s(m), r, a));
}
var tc = {
  ease: pt(0.25, 0.1, 0.25, 1),
  "ease-in": pt(0.42, 0, 1, 1),
  "ease-in-out": pt(0.42, 0, 0.58, 1),
  "ease-out": pt(0, 0, 0.58, 1),
};
function Oa(t, r) {
  var n = {};
  for (var a in t)
    Object.prototype.hasOwnProperty.call(t, a) &&
      r.indexOf(a) < 0 &&
      (n[a] = t[a]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (a = Object.getOwnPropertySymbols(t); s < a.length; s++)
      r.indexOf(a[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, a[s]) &&
        (n[a[s]] = t[a[s]]);
  }
  return n;
}
var rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.warning = function () {};
rt.invariant = function () {};
var oc = rt.__esModule,
  sc = rt.warning,
  Pn = rt.invariant;
var On = 5;
function Gt(t, r, n) {
  let a = Math.max(r - On, 0);
  return kr(n - t(a), r - a);
}
var at = { stiffness: 100, damping: 10, mass: 1 },
  Dn = (t = at.stiffness, r = at.damping, n = at.mass) =>
    r / (2 * Math.sqrt(t * n));
function Rn(t, r, n) {
  return (t < r && n >= r) || (t > r && n <= r);
}
var zr = ({
    stiffness: t = at.stiffness,
    damping: r = at.damping,
    mass: n = at.mass,
    from: a = 0,
    to: s = 1,
    velocity: m = 0,
    restSpeed: c = 2,
    restDistance: u = 0.5,
  } = {}) => {
    m = m ? Wt.s(m) : 0;
    let v = { done: !1, hasReachedTarget: !1, current: a, target: s },
      i = s - a,
      d = Math.sqrt(t / n) / 1e3,
      h = Dn(t, r, n),
      p;
    if (h < 1) {
      let V = d * Math.sqrt(1 - h * h);
      p = (x) =>
        s -
        Math.exp(-h * d * x) *
          (((h * d * i - m) / V) * Math.sin(V * x) + i * Math.cos(V * x));
    } else p = (V) => s - Math.exp(-d * V) * (i + (d * i - m) * V);
    return (V) => {
      v.current = p(V);
      let x = V === 0 ? m : Gt(p, V, v.current),
        C = Math.abs(x) <= c,
        g = Math.abs(s - v.current) <= u;
      return (v.done = C && g), (v.hasReachedTarget = Rn(a, s, v.current)), v;
    };
  },
  Da = ({
    from: t = 0,
    velocity: r = 0,
    power: n = 0.8,
    decay: a = 0.325,
    bounceDamping: s,
    bounceStiffness: m,
    changeTarget: c,
    min: u,
    max: v,
    restDistance: i = 0.5,
    restSpeed: d,
  }) => {
    a = Wt.ms(a);
    let h = { hasReachedTarget: !1, done: !1, current: t, target: t },
      p = (o) => (u !== void 0 && o < u) || (v !== void 0 && o > v),
      V = (o) =>
        u === void 0
          ? v
          : v === void 0 || Math.abs(u - o) < Math.abs(v - o)
          ? u
          : v,
      x = n * r,
      C = t + x,
      g = c === void 0 ? C : c(C);
    (h.target = g), g !== C && (x = g - t);
    let _ = (o) => -x * Math.exp(-o / a),
      T = (o) => g + _(o),
      z = (o) => {
        let b = _(o),
          L = T(o);
        (h.done = Math.abs(b) <= i), (h.current = h.done ? g : L);
      },
      S,
      N,
      j = (o) => {
        p(h.current) &&
          ((S = o),
          (N = zr({
            from: h.current,
            to: V(h.current),
            velocity: Gt(T, o, h.current),
            damping: s,
            stiffness: m,
            restDistance: i,
            restSpeed: d,
          })));
      };
    return (
      j(0),
      (o) => {
        let b = !1;
        return (
          !N && S === void 0 && ((b = !0), z(o), j(o)),
          S !== void 0 && o > S
            ? ((h.hasReachedTarget = !0), N(o - S))
            : ((h.hasReachedTarget = !1), !b && z(o), h)
        );
      }
    );
  },
  Cr = 10,
  qn = 1e4;
function Ra(t) {
  let r,
    n = Cr,
    a = t(0),
    s = [a.current];
  for (; !a.done && n < qn; )
    (a = t(n)),
      s.push(a.done ? a.target : a.current),
      r === void 0 && a.hasReachedTarget && (r = n),
      (n += Cr);
  let m = n - Cr;
  return (
    s.length === 1 && s.push(a.current),
    { keyframes: s, duration: m / 1e3, overshootDuration: (r ?? m) / 1e3 }
  );
}
var En = ["", "X", "Y", "Z"],
  Bn = ["translate", "scale", "rotate", "skew"];
var qa = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  Un = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: qa,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: dt },
    skew: qa,
  },
  Xn = new Map(),
  Wn = (t) => `--motion-${t}`,
  Wa = ["x", "y", "z"];
Bn.forEach((t) => {
  En.forEach((r) => {
    Wa.push(t + r), Xn.set(Wn(t + r), Un[t]);
  });
});
var Mc = new Set(Wa);
var Ea = (t) => document.createElement("div").animate(t, { duration: 0.001 }),
  Ba = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Ea({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Ea({ opacity: [0, 1] }).finished,
  },
  _r = {},
  Gn = {};
for (let t in Ba) Gn[t] = () => (_r[t] === void 0 && (_r[t] = Ba[t]()), _r[t]);
function Ga(t, r) {
  var n;
  return (
    typeof t == "string"
      ? r
        ? (((n = r[t]) !== null && n !== void 0) ||
            (r[t] = document.querySelectorAll(t)),
          (t = r[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
function Ya(t) {
  let r = new WeakMap();
  return (n = {}) => {
    let a = new Map(),
      s = (c = 0, u = 100, v = 0, i = !1) => {
        let d = `${c}-${u}-${v}-${i}`;
        return (
          a.has(d) ||
            a.set(
              d,
              t(
                Object.assign(
                  {
                    from: c,
                    to: u,
                    velocity: v,
                    restSpeed: i ? 0.05 : 2,
                    restDistance: i ? 0.01 : 0.5,
                  },
                  n
                )
              )
            ),
          a.get(d)
        );
      },
      m = (c) => (r.has(c) || r.set(c, Ra(c)), r.get(c));
    return {
      createAnimation: (c, u, v, i, d) => {
        var h, p;
        let V,
          x = c.length;
        if (v && x <= 2 && c.every(Yn)) {
          let g = c[x - 1],
            _ = x === 1 ? null : c[0],
            T = 0,
            z = 0,
            S = d?.generator;
          if (S) {
            let { animation: o, generatorStartTime: b } = d,
              L = o?.startTime || b || 0,
              M = o?.currentTime || performance.now() - L,
              B = S(M).current;
            (z = (h = _) !== null && h !== void 0 ? h : B),
              (x === 1 || (x === 2 && c[0] === null)) &&
                (T = Gt((Z) => S(Z).current, M, B));
          } else z = (p = _) !== null && p !== void 0 ? p : parseFloat(u());
          let N = s(z, g, T, i?.includes("scale")),
            j = m(N);
          (V = Object.assign(Object.assign({}, j), { easing: "linear" })),
            d &&
              ((d.generator = N), (d.generatorStartTime = performance.now()));
        } else V = { easing: "ease", duration: m(s(0, 100)).overshootDuration };
        return V;
      },
    };
  };
}
var Yn = (t) => typeof t != "string",
  Fc = Ya(zr),
  Ac = Ya(Da),
  Hn = { any: 0, all: 1 };
function Qn(t, r, { root: n, margin: a, amount: s = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let m = Ga(t),
    c = new WeakMap(),
    u = (i) => {
      i.forEach((d) => {
        let h = c.get(d.target);
        if (d.isIntersecting !== !!h)
          if (d.isIntersecting) {
            let p = r(d);
            typeof p == "function" ? c.set(d.target, p) : v.unobserve(d.target);
          } else h && (h(d), c.delete(d.target));
      });
    },
    v = new IntersectionObserver(u, {
      root: n,
      rootMargin: a,
      threshold: typeof s == "number" ? s : Hn[s],
    });
  return m.forEach((i) => v.observe(i)), () => v.disconnect();
}
var Yt = new WeakMap(),
  Pe;
function Jn(t, r) {
  if (r) {
    let { inlineSize: n, blockSize: a } = r[0];
    return { width: n, height: a };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function Zn({ target: t, contentRect: r, borderBoxSize: n }) {
  var a;
  (a = Yt.get(t)) === null ||
    a === void 0 ||
    a.forEach((s) => {
      s({
        target: t,
        contentSize: r,
        get size() {
          return Jn(t, n);
        },
      });
    });
}
function Kn(t) {
  t.forEach(Zn);
}
function $n() {
  typeof ResizeObserver < "u" && (Pe = new ResizeObserver(Kn));
}
function ei(t, r) {
  Pe || $n();
  let n = Ga(t);
  return (
    n.forEach((a) => {
      let s = Yt.get(a);
      s || ((s = new Set()), Yt.set(a, s)), s.add(r), Pe?.observe(a);
    }),
    () => {
      n.forEach((a) => {
        let s = Yt.get(a);
        s?.delete(r), s?.size || Pe?.unobserve(a);
      });
    }
  );
}
var Ht = new Set(),
  ht;
function ti() {
  (ht = () => {
    let t = { width: I.innerWidth, height: I.innerHeight },
      r = { target: I, size: t, contentSize: t };
    Ht.forEach((n) => n(r));
  }),
    I.addEventListener("resize", ht);
}
function ri(t) {
  return (
    Ht.add(t),
    ht || ti(),
    () => {
      Ht.delete(t), !Ht.size && ht && (ht = void 0);
    }
  );
}
function Ha(t, r) {
  return typeof t == "function" ? ri(t) : ei(t, r);
}
function Sr(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEvent: n } }));
}
function Ua(t, r, n) {
  t.dispatchEvent(new CustomEvent(r, { detail: { originalEntry: n } }));
}
var ai = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: r, disable: n }, { inViewOptions: a = {} }) => {
      let { once: s } = a,
        m = Oa(a, ["once"]);
      return Qn(
        t,
        (c) => {
          if ((r(), Ua(t, "viewenter", c), !s))
            return (u) => {
              n(), Ua(t, "viewleave", u);
            };
        },
        m
      );
    },
  },
  Xa = (t, r, n) => (a) => {
    (!a.pointerType || a.pointerType === "mouse") && (n(), Sr(t, r, a));
  },
  ni = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: r, disable: n }) => {
      let a = Xa(t, "hoverstart", r),
        s = Xa(t, "hoverend", n);
      return (
        t.addEventListener("pointerenter", a),
        t.addEventListener("pointerleave", s),
        () => {
          t.removeEventListener("pointerenter", a),
            t.removeEventListener("pointerleave", s);
        }
      );
    },
  },
  ii = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: r, disable: n }) => {
      let a = (m) => {
          n(), Sr(t, "pressend", m), I.removeEventListener("pointerup", a);
        },
        s = (m) => {
          r(), Sr(t, "pressstart", m), I.addEventListener("pointerup", a);
        };
      return (
        t.addEventListener("pointerdown", s),
        () => {
          t.removeEventListener("pointerdown", s),
            I.removeEventListener("pointerup", a);
        }
      );
    },
  },
  oi = { inView: ai, hover: ni, press: ii },
  Pc = ["initial", "animate", ...Object.keys(oi), "exit"];
var si = 100,
  li = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  Ir =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function nt(t) {
  let {
      slots: r,
      gap: n,
      padding: a,
      paddingPerSide: s,
      paddingTop: m,
      paddingRight: c,
      paddingBottom: u,
      paddingLeft: v,
      speed: i,
      hoverFactor: d,
      direction: h,
      alignment: p,
      sizingOptions: V,
      fadeOptions: x,
      style: C,
    } = t,
    {
      fadeContent: g,
      overflow: _,
      fadeWidth: T,
      fadeInset: z,
      fadeAlpha: S,
    } = x,
    { widthType: N, heightType: j } = V,
    o = s ? `${m}px ${c}px ${u}px ${v}px` : `${a}px`,
    b = ue.current() === ue.canvas,
    L = Me.count(r),
    M = L > 0;
  h === !0 && (h = "left");
  let B = h === "left" || h === "right",
    Z = Nt(0),
    oe = li[h],
    me = Qr(Z, oe),
    fe = P(null),
    W = J(() => [rr(), rr()], []),
    [pe, ve] = Ue({ parent: null, children: null }),
    Q = [],
    K = [],
    we = 0,
    ke = 0;
  b && ((we = L ? Math.floor(10 / L) : 0), (ke = 1)),
    !b &&
      M &&
      pe.parent &&
      ((we = Math.round((pe.parent / pe.children) * 2) + 1),
      (we = Math.min(we, si)),
      (ke = 1));
  let Je = Ke(() => {
      if (M && fe.current) {
        let G = B ? fe.current.offsetWidth : fe.current.offsetHeight,
          Y = W[0].current
            ? B
              ? W[0].current.offsetLeft
              : W[0].current.offsetTop
            : 0,
          be =
            (W[1].current
              ? B
                ? W[1].current.offsetLeft + W[1].current.offsetWidth
                : W[1].current.offsetTop + W[1].current.offsetHeight
              : 0) -
            Y +
            n;
        ve({ parent: G, children: be });
      }
    }, []),
    E = b ? { contentVisibility: "auto" } : {};
  if (M) {
    if (!b) {
      let G = P(!0);
      he(
        () => (
          ar.read(Je),
          Ha(fe.current, ({ contentSize: Y }) => {
            !G.current && (Y.width || Y.height) && ar.read(Je),
              (G.current = !1);
          })
        ),
        []
      );
    }
    Q = Me.map(r, (G, Y) => {
      var je, be, Re, qe;
      let Ee;
      Y === 0 && (Ee = W[0]), Y === r.length - 1 && (Ee = W[1]);
      let Ze = {
        width: N
          ? (je = G.props) === null || je === void 0
            ? void 0
            : je.width
          : "100%",
        height: j
          ? (be = G.props) === null || be === void 0
            ? void 0
            : be.height
          : "100%",
      };
      return e(H, {
        inherit: "id",
        children: e("li", {
          ref: Ee,
          style: Ze,
          children: Be(
            G,
            {
              style: {
                ...((Re = G.props) === null || Re === void 0
                  ? void 0
                  : Re.style),
                ...Ze,
                flexShrink: 0,
                ...E,
              },
              layoutId: G.props.layoutId
                ? G.props.layoutId + "-original-" + Y
                : void 0,
            },
            (qe = G.props) === null || qe === void 0 ? void 0 : qe.children
          ),
        }),
      });
    });
  }
  if (!b)
    for (let G = 0; G < we; G++)
      K = [
        ...K,
        ...Me.map(r, (Y, je) => {
          var be, Re, qe, Ee, Ze, tr;
          let bn = {
            width: N
              ? (be = Y.props) === null || be === void 0
                ? void 0
                : be.width
              : "100%",
            height: j
              ? (Re = Y.props) === null || Re === void 0
                ? void 0
                : Re.height
              : "100%",
            willChange: "transform",
          };
          return e(
            H,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: bn,
                  "aria-hidden": !0,
                  children: Be(
                    Y,
                    {
                      key: G + " " + je,
                      style: {
                        ...((qe = Y.props) === null || qe === void 0
                          ? void 0
                          : qe.style),
                        width: N
                          ? (Ee = Y.props) === null || Ee === void 0
                            ? void 0
                            : Ee.width
                          : "100%",
                        height: j
                          ? (Ze = Y.props) === null || Ze === void 0
                            ? void 0
                            : Ze.height
                          : "100%",
                        flexShrink: 0,
                        ...E,
                      },
                      layoutId: Y.props.layoutId
                        ? Y.props.layoutId + "-dupe-" + G
                        : void 0,
                    },
                    (tr = Y.props) === null || tr === void 0
                      ? void 0
                      : tr.children
                  ),
                },
                G + "li" + je
              ),
            },
            G + "lg" + je
          );
        }),
      ];
  let Ce = pe.children + pe.children * Math.round(pe.parent / pe.children),
    Ie = P(null),
    Kt = P(null),
    It = P(0),
    $t = P(!1),
    Ur = Zr(),
    Xr = P(null),
    ze = P(null);
  if (!b) {
    let G = Lt(fe);
    Ir
      ? (he(() => {
          if (!(Ur || !Ce || !i))
            return (
              (ze.current = Xr.current.animate(
                { transform: [oe(0), oe(Ce)] },
                {
                  duration: (Math.abs(Ce) / i) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => ze.current.cancel()
            );
        }, [d, Ce, i]),
        he(() => {
          ze.current &&
            (G && ze.current.playState === "paused"
              ? ze.current.play()
              : !G && ze.current.playState === "running" && ze.current.pause());
        }, [G]))
      : Jr((Y) => {
          if (!Ce || Ur || Ir) return;
          Ie.current === null && (Ie.current = Y), (Y = Y - Ie.current);
          let be = (Kt.current === null ? 0 : Y - Kt.current) * (i / 1e3);
          $t.current && (be *= d),
            (It.current += be),
            (It.current = Kr(0, Ce, It.current)),
            (Kt.current = Y),
            G && Z.set(It.current);
        });
  }
  let gn = B ? "to right" : "to bottom",
    Wr = T / 2,
    vn = 100 - T / 2,
    xn = pi(z, 0, Wr),
    wn = 100 - z,
    er = `linear-gradient(${gn}, rgba(0, 0, 0, ${S}) ${xn}%, rgba(0, 0, 0, 1) ${Wr}%, rgba(0, 0, 0, 1) ${vn}%, rgba(0, 0, 0, ${S}) ${wn}%)`;
  return M
    ? e("section", {
        style: {
          ...Qa,
          opacity: ke,
          WebkitMaskImage: g ? er : void 0,
          MozMaskImage: g ? er : void 0,
          maskImage: g ? er : void 0,
          overflow: _ ? "visible" : "hidden",
          padding: o,
        },
        ref: fe,
        children: w(f.ul, {
          ref: Xr,
          style: {
            ...Qa,
            gap: n,
            top: h === "bottom" && Ja(Ce) ? -Ce : void 0,
            left: h === "right" && Ja(Ce) ? -Ce : void 0,
            placeItems: p,
            position: "relative",
            flexDirection: B ? "row" : "column",
            ...C,
            transform: Ir ? void 0 : me,
            willChange: b ? "auto" : "transform",
          },
          onMouseEnter: () => {
            ($t.current = !0), ze.current && (ze.current.playbackRate = d);
          },
          onMouseLeave: () => {
            ($t.current = !1), ze.current && (ze.current.playbackRate = 1);
          },
          children: [Q, K],
        }),
      })
    : w("section", {
        style: ci,
        children: [
          e("div", { style: mi, children: "\u2728" }),
          e("p", { style: fi, children: "Connect to Content" }),
          e("p", {
            style: di,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
nt.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
q(nt, {
  slots: {
    type: l.Array,
    title: "Children",
    control: { type: l.ComponentInstance },
  },
  speed: {
    type: l.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: l.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: l.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: l.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: l.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: l.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: l.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: l.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: l.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: l.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: l.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: l.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: l.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: l.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: l.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Qa = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  ci = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  mi = { fontSize: 32, marginBottom: 10 },
  fi = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  di = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  pi = (t, r, n) => Math.min(Math.max(t, r), n),
  Ja = (t) => typeof t == "number" && !isNaN(t);
var Za;
(function (t) {
  (t.Fill = "fill"),
    (t.Contain = "contain"),
    (t.Cover = "cover"),
    (t.None = "none"),
    (t.ScaleDown = "scale-down");
})(Za || (Za = {}));
var Ka;
(function (t) {
  (t.Video = "Upload"), (t.Url = "URL");
})(Ka || (Ka = {}));
function hi(t) {
  let {
    width: r,
    height: n,
    topLeft: a,
    topRight: s,
    bottomRight: m,
    bottomLeft: c,
    id: u,
    children: v,
    ...i
  } = t;
  return i;
}
function He(t) {
  let r = hi(t);
  return e(gi, { ...r });
}
function ui(t) {
  let r = na(),
    n = P(!1),
    a = Ke((c) => {
      if (!t.current) return;
      let u = (c === 1 ? 0.999 : c) * t.current.duration,
        v = Math.abs(t.current.currentTime - u) < 0.1;
      t.current.duration > 0 && !v && (t.current.currentTime = u);
    }, []),
    s = Ke(() => {
      !(
        t.current.currentTime > 0 &&
        t.current.onplaying &&
        !t.current.paused &&
        !t.current.ended &&
        t.current.readyState > t.current.HAVE_CURRENT_DATA
      ) &&
        t.current &&
        !n.current &&
        r &&
        ((n.current = !0),
        t.current
          .play()
          .catch((u) => {})
          .finally(() => (n.current = !1)));
    }, []),
    m = Ke(() => {
      !t.current || n.current || t.current.pause();
    }, []);
  return { play: s, pause: m, setProgress: a };
}
function yi({
  playingProp: t,
  muted: r,
  loop: n,
  playsinline: a,
  controls: s,
}) {
  let [m] = Ue(() => t),
    [c, u] = Ue(!1);
  t !== m && !c && u(!0);
  let v = m && r && n && a && !s && !c,
    i;
  return (
    v ? (i = "on-viewport") : m ? (i = "on-mount") : (i = "no-autoplay"), i
  );
}
var $a = !1,
  gi = Yr(function (r) {
    let {
        srcType: n,
        srcFile: a,
        srcUrl: s,
        playing: m,
        muted: c,
        playsinline: u,
        controls: v,
        progress: i,
        objectFit: d,
        backgroundColor: h,
        onSeeked: p,
        onPause: V,
        onPlay: x,
        onEnd: C,
        onClick: g,
        onMouseEnter: _,
        onMouseLeave: T,
        onMouseDown: z,
        onMouseUp: S,
        poster: N,
        posterEnabled: j,
        startTime: o,
        volume: b,
        loop: L,
      } = r,
      M = P(),
      B = mr(),
      Z = P(null),
      oe = P(null),
      me = fr(),
      fe = dr(r),
      W = me
        ? "no-autoplay"
        : yi({
            playingProp: m,
            muted: c,
            loop: L,
            playsinline: u,
            controls: v,
          }),
      pe = me ? !0 : Lt(M),
      ve = o === 100 ? 99.9 : o,
      { play: Q, pause: K, setProgress: we } = ui(M);
    he(() => {
      me || (m ? Q() : K());
    }, [m]),
      he(() => {
        me || (W === "on-viewport" && (pe ? Q() : K()));
      }, [W, pe]),
      he(() => {
        if (!$a) {
          $a = !0;
          return;
        }
        let E = nr(i) ? i.get() : (i ?? 0) * 0.01;
        we((E ?? 0) || (ve ?? 0) / 100);
      }, [ve, a, s, i]),
      he(() => {
        if (nr(i)) return i.on("change", (E) => we(E));
      }, [i]),
      lr(() => {
        Z.current !== null && M.current && ((!oe && L) || !Z.current) && Q();
      }),
      cr(() => {
        M.current &&
          ((oe.current = M.current.ended), (Z.current = M.current.paused), K());
      });
    let ke = J(() => {
      let E = "";
      if (n === "URL") return s + E;
      if (n === "Upload") return a + E;
    }, [n, a, s, ve]);
    return (
      he(() => {
        B && M.current && W === "on-mount" && setTimeout(() => Q(), 50);
      }, []),
      he(() => {
        M.current && !c && (M.current.volume = (b ?? 0) / 100);
      }, [b]),
      e("video", {
        onClick: g,
        onMouseEnter: _,
        onMouseLeave: T,
        onMouseDown: z,
        onMouseUp: S,
        src: ke,
        loop: L,
        ref: M,
        onSeeked: (E) => p?.(E),
        onPause: (E) => V?.(E),
        onPlay: (E) => x?.(E),
        onEnded: (E) => C?.(E),
        autoPlay: W === "on-mount",
        poster: j ? N : void 0,
        onLoadedData: () => {
          M.current &&
            (M.current.currentTime < 0.3 && we((ve ?? 0) * 0.01),
            W === "on-mount" && Q());
        },
        controls: v,
        muted: me ? !0 : c,
        playsInline: u,
        style: {
          cursor: g ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: fe,
          display: "block",
          objectFit: d,
          backgroundColor: h,
          objectPosition: "50% 50%",
        },
      })
    );
  });
He.displayName = "Video";
He.defaultProps = {
  srcType: "URL",
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: "cover",
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var vi = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function xi(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function wi(t) {
  return (t.match(vi) || []).map(xi).join(" ");
}
var en = ["cover", "fill", "contain", "scale-down", "none"];
q(He, {
  srcType: {
    type: l.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: l.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(t) {
      return t.srcType === "Upload";
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: l.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(t) {
      return t.srcType === "URL";
    },
  },
  playing: {
    type: l.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: l.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: l.Image, title: " ", hidden: ({ posterEnabled: t }) => !t },
  backgroundColor: { type: l.Color, title: "Background" },
  ...pr,
  startTime: {
    title: "Start Time",
    type: l.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: l.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: l.Enum,
    title: "Fit",
    options: en,
    optionTitles: en.map(wi),
  },
  controls: {
    type: l.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: l.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: l.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: t }) => t,
  },
  onEnd: { type: l.EventHandler },
  onSeeked: { type: l.EventHandler },
  onPause: { type: l.EventHandler },
  onPlay: { type: l.EventHandler },
  ...sr,
});
function tn(t) {
  return (r) => {
    let { children: n } = r,
      a = Me.map(n, (s, m) =>
        Be(s, {
          ...s.props,
          initial: { opacity: 0, y: 60, skewX: 0 },
          whileInView: {
            opacity: 1,
            y: 0,
            skewX: 0,
            transition: {
              delay: 0.1 * m,
              ease: "easeInOut",
              type: "spring",
              duration: 0.5,
              bounce: 0,
              damping: 20,
            },
          },
        })
      );
    return e(t, { ...r, children: a });
  };
}
var Vi = O(hr),
  ki = O(jt),
  Ci = ["Ly8_edRTr", "rLl3ib_qp", "YBa0Gk27U", "nLgcamXpy"],
  zi = "framer-KbCRp",
  _i = {
    Ly8_edRTr: "framer-v-hhzohf",
    nLgcamXpy: "framer-v-rple33",
    rLl3ib_qp: "framer-v-167w8fy",
    YBa0Gk27U: "framer-v-11ttscu",
  };
function it(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Si = { damping: 60, delay: 0.2, mass: 1, stiffness: 500, type: "spring" },
  rn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ii = { damping: 60, delay: 1, mass: 1, stiffness: 500, type: "spring" },
  Ni = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  Li = f(A),
  ji = {
    "Blink Bottom": "nLgcamXpy",
    "Blink Top": "YBa0Gk27U",
    Off: "Ly8_edRTr",
    On: "rLl3ib_qp",
  },
  Ti = ({ height: t, id: r, width: n, ...a }) => {
    var s, m;
    return {
      ...a,
      variant:
        (m = (s = ji[a.variant]) !== null && s !== void 0 ? s : a.variant) !==
          null && m !== void 0
          ? m
          : "Ly8_edRTr",
    };
  },
  Mi = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Fi = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = Ti(t),
      {
        baseVariant: i,
        classNames: d,
        gestureHandlers: h,
        gestureVariant: p,
        setGestureState: V,
        setVariant: x,
        variants: C,
      } = ce({
        cycleOrder: Ci,
        defaultVariant: "Ly8_edRTr",
        variant: u,
        variantClassNames: _i,
      }),
      g = Mi(t, C),
      { activeVariantCallback: _, delay: T } = Ne(i),
      z = _(async (...B) => {
        await T(() => x("YBa0Gk27U"), 3e3);
      }),
      S = _(async (...B) => {
        await T(() => x("nLgcamXpy"), 100);
      });
    $e(i, { rLl3ib_qp: z, YBa0Gk27U: S });
    let N = P(null),
      j = () => !!["YBa0Gk27U", "nLgcamXpy"].includes(i),
      o = () => i === "nLgcamXpy",
      b = re(),
      L = [],
      M = le();
    return e(H, {
      id: c ?? b,
      children: e(Li, {
        animate: C,
        initial: !1,
        children: e(Ni, {
          value: Si,
          ...it(
            {
              nLgcamXpy: { value: Ii },
              rLl3ib_qp: { value: rn },
              YBa0Gk27U: { value: rn },
            },
            i,
            p
          ),
          children: w(f.div, {
            ...v,
            ...h,
            className: $(zi, ...L, "framer-hhzohf", m, d),
            "data-framer-name": "Off",
            layoutDependency: g,
            layoutId: "Ly8_edRTr",
            ref: r ?? N,
            style: { ...s },
            ...it(
              {
                nLgcamXpy: { "data-framer-name": "Blink Bottom" },
                rLl3ib_qp: { "data-framer-name": "On", "data-highlight": !0 },
                YBa0Gk27U: {
                  "data-framer-name": "Blink Top",
                  "data-highlight": !0,
                },
              },
              i,
              p
            ),
            children: [
              e(y, {
                children: e(f.div, {
                  className: "framer-6smwiy-container",
                  layoutDependency: g,
                  layoutId: "HQnJPwbMf-container",
                  style: { opacity: 0 },
                  variants: {
                    nLgcamXpy: { opacity: 1 },
                    rLl3ib_qp: { opacity: 1 },
                    YBa0Gk27U: { opacity: 1 },
                  },
                  children: e(hr, {
                    animate: !1,
                    endCircle: !0,
                    from: 0,
                    height: "100%",
                    id: "HQnJPwbMf",
                    layoutId: "HQnJPwbMf",
                    loopOptions: "reverse",
                    pathAnimation: { duration: 2, type: "tween" },
                    shouldLoop: !1,
                    slots: [
                      e(X, {
                        className: "framer-1l1awrw",
                        "data-framer-name": "line",
                        layout: "position",
                        layoutDependency: g,
                        layoutId: "wFiBr_hkk",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 731 162"><path d="M 1 1 L 116.795 151.627 C 121.338 157.537 128.368 161 135.822 161 L 731 161" fill="transparent" stroke="var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, rgb(51, 51, 51)) /* {&quot;name&quot;:&quot;Border&quot;} */"></path></svg>',
                        svgContentId: 11788988688,
                        withExternalLayout: !0,
                      }),
                    ],
                    style: { height: "100%", width: "100%" },
                    to: 100,
                    width: "100%",
                    ...it(
                      {
                        nLgcamXpy: {
                          animate: !0,
                          endCircle: !1,
                          pathAnimation: {
                            damping: 60,
                            delay: 1,
                            duration: 1,
                            ease: [0.85, 0, 0.15, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "tween",
                          },
                        },
                        rLl3ib_qp: {
                          animate: !0,
                          endCircle: !1,
                          pathAnimation: {
                            damping: 60,
                            delay: 0,
                            duration: 1,
                            ease: [0.85, 0, 0.15, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "tween",
                          },
                        },
                        YBa0Gk27U: {
                          animate: !0,
                          endCircle: !1,
                          pathAnimation: {
                            damping: 60,
                            delay: 1,
                            duration: 1,
                            ease: [0.85, 0, 0.15, 1],
                            mass: 1,
                            stiffness: 500,
                            type: "tween",
                          },
                        },
                      },
                      i,
                      p
                    ),
                  }),
                }),
              }),
              j() &&
                e(y, {
                  ...it(
                    {
                      nLgcamXpy: { width: "108px" },
                      YBa0Gk27U: { width: "108px" },
                    },
                    i,
                    p
                  ),
                  children: e(f.div, {
                    className: "framer-141l8u3-container",
                    "data-framer-name": "Blinker Top",
                    layoutDependency: g,
                    layoutId: "VL0xMgKvB-container",
                    name: "Blinker Top",
                    children: e(jt, {
                      height: "100%",
                      id: "VL0xMgKvB",
                      layoutId: "VL0xMgKvB",
                      name: "Blinker Top",
                      style: { height: "100%", width: "100%" },
                      variant: "WvF9vManm",
                      width: "100%",
                      ...it(
                        {
                          nLgcamXpy: { variant: "i7WX0QpGL" },
                          YBa0Gk27U: { variant: "i7WX0QpGL" },
                        },
                        i,
                        p
                      ),
                    }),
                  }),
                }),
              o() &&
                e(y, {
                  ...it({ nLgcamXpy: { width: "108px" } }, i, p),
                  children: e(f.div, {
                    className: "framer-1wwrqls-container",
                    layoutDependency: g,
                    layoutId: "nYKII5uwo-container",
                    style: { rotate: 180 },
                    children: e(jt, {
                      height: "100%",
                      id: "nYKII5uwo",
                      layoutId: "nYKII5uwo",
                      style: { height: "100%", width: "100%" },
                      variant: "i7WX0QpGL",
                      width: "100%",
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Ai = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-KbCRp.framer-qwbx7z, .framer-KbCRp .framer-qwbx7z { display: block; }",
    ".framer-KbCRp.framer-hhzohf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-KbCRp .framer-6smwiy-container { flex: none; height: 162px; position: relative; width: 731px; }",
    ".framer-KbCRp .framer-1l1awrw { height: 162px; position: relative; width: 731px; }",
    ".framer-KbCRp .framer-141l8u3-container { bottom: 2px; flex: none; height: 6px; position: absolute; right: 0px; width: 108px; z-index: 1; }",
    ".framer-KbCRp .framer-1wwrqls-container { bottom: -6px; flex: none; height: 6px; left: 143px; position: absolute; width: 108px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KbCRp.framer-hhzohf { gap: 0px; } .framer-KbCRp.framer-hhzohf > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-KbCRp.framer-hhzohf > :first-child { margin-left: 0px; } .framer-KbCRp.framer-hhzohf > :last-child { margin-right: 0px; } }",
  ],
  ut = ne(Fi, Ai, "framer-KbCRp"),
  Nr = ut;
ut.displayName = "Animated/Line Top";
ut.defaultProps = { height: 162, width: 731 };
q(ut, {
  variant: {
    options: ["Ly8_edRTr", "rLl3ib_qp", "YBa0Gk27U", "nLgcamXpy"],
    optionTitles: ["Off", "On", "Blink Top", "Blink Bottom"],
    title: "Variant",
    type: l.Enum,
  },
});
ie(ut, [{ explicitInter: !0, fonts: [] }, ...Vi, ...ki], {
  supportsExplicitInterCodegen: !0,
});
var Oi = ["LySGNrAK7", "t41M6sYlf"],
  Di = "framer-pCXIT",
  Ri = { LySGNrAK7: "framer-v-1300q0y", t41M6sYlf: "framer-v-weekkd" };
function Lr(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var qi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ei = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  Bi = f(A),
  Ui = { Black: "LySGNrAK7", White: "t41M6sYlf" },
  Xi = ({ height: t, id: r, link: n, newTab: a, title: s, width: m, ...c }) => {
    var u, v, i;
    return {
      ...c,
      BCYRhfv2g:
        (u = s ?? c.BCYRhfv2g) !== null && u !== void 0 ? u : "Research",
      eTD_SfQYo: n ?? c.eTD_SfQYo,
      variant:
        (i = (v = Ui[c.variant]) !== null && v !== void 0 ? v : c.variant) !==
          null && i !== void 0
          ? i
          : "LySGNrAK7",
      ywahooFGt: a ?? c.ywahooFGt,
    };
  },
  Wi = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Gi = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      {
        style: s,
        className: m,
        layoutId: c,
        variant: u,
        BCYRhfv2g: v,
        eTD_SfQYo: i,
        ywahooFGt: d,
        ...h
      } = Xi(t),
      {
        baseVariant: p,
        classNames: V,
        gestureHandlers: x,
        gestureVariant: C,
        setGestureState: g,
        setVariant: _,
        variants: T,
      } = ce({
        cycleOrder: Oi,
        defaultVariant: "LySGNrAK7",
        variant: u,
        variantClassNames: Ri,
      }),
      z = Wi(t, T),
      S = P(null),
      N = re(),
      j = [],
      o = le();
    return e(H, {
      id: c ?? N,
      children: e(Bi, {
        animate: T,
        initial: !1,
        children: e(Ei, {
          value: qi,
          children: e(xe, {
            href: i,
            openInNewTab: d,
            children: w(f.a, {
              ...h,
              ...x,
              className: `${$(Di, ...j, "framer-1300q0y", m, V)} framer-pqx67z`,
              "data-framer-name": "Black",
              layoutDependency: z,
              layoutId: "LySGNrAK7",
              ref: r ?? S,
              style: { ...s },
              ...Lr({ t41M6sYlf: { "data-framer-name": "White" } }, p, C),
              children: [
                e(ee, {
                  __fromCanvasComponent: !0,
                  children: e(A, {
                    children: e(f.p, {
                      style: {
                        "--font-selector": "R0Y7U3BhY2UgR3JvdGVzay01MDA=",
                        "--framer-font-family":
                          '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-font-weight": "500",
                        "--framer-line-height": "160%",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(9, 9, 15)))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "Research",
                    }),
                  }),
                  className: "framer-5cf1xr",
                  fonts: ["GF;Space Grotesk-500"],
                  layoutDependency: z,
                  layoutId: "bQGItBcjq",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(9, 9, 15))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: v,
                  variants: {
                    t41M6sYlf: {
                      "--extracted-r6o4lv":
                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Lr(
                    {
                      t41M6sYlf: {
                        children: e(A, {
                          children: e(f.p, {
                            style: {
                              "--font-selector": "R0Y7U3BhY2UgR3JvdGVzay01MDA=",
                              "--framer-font-family":
                                '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-line-height": "160%",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "Research",
                          }),
                        }),
                      },
                    },
                    p,
                    C
                  ),
                }),
                e(f.div, {
                  className: "framer-x4onx0",
                  layoutDependency: z,
                  layoutId: "V7yTBuTuD",
                  children: e(X, {
                    className: "framer-m63upi",
                    "data-framer-name": "graphic",
                    layout: "position",
                    layoutDependency: z,
                    layoutId: "Q2a2VhrOV",
                    opacity: 1,
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 17"><g transform="translate(1.679 0.613)" id="ss12547886796_1"><path d="M 73.208 2.887 L 70.321 5.774 L 67.434 2.887 L 70.321 0 Z M 70.321 3.387 L 19.264 3.387 L 19.264 2.387 L 70.321 2.387 Z M 9.308 7.007 L 0.642 14.27 L 0 13.504 L 8.666 6.241 Z M 19.264 3.387 C 15.623 3.387 12.099 4.668 9.308 7.007 L 8.666 6.241 C 11.636 3.752 15.388 2.387 19.264 2.387 Z" fill="rgb(9,9,15)"></path></g></svg>',
                    svgContentId: 12547886796,
                    withExternalLayout: !0,
                    ...Lr(
                      {
                        t41M6sYlf: {
                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 17"><g transform="translate(1.679 0.613)" id="ss8852750944_1"><path d="M 73.208 2.887 L 70.321 5.774 L 67.434 2.887 L 70.321 0 Z M 70.321 3.387 L 19.264 3.387 L 19.264 2.387 L 70.321 2.387 Z M 9.308 7.007 L 0.642 14.27 L 0 13.504 L 8.666 6.241 Z M 19.264 3.387 C 15.623 3.387 12.099 4.668 9.308 7.007 L 8.666 6.241 C 11.636 3.752 15.388 2.387 19.264 2.387 Z" fill="var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White/White&quot;} */"></path></g></svg>',
                          svgContentId: 8852750944,
                        },
                      },
                      p,
                      C
                    ),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Yi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-pCXIT.framer-pqx67z, .framer-pCXIT .framer-pqx67z { display: block; }",
    ".framer-pCXIT.framer-1300q0y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 20px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-pCXIT .framer-5cf1xr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-pCXIT .framer-x4onx0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 1px; width: min-content; z-index: 1; }",
    ".framer-pCXIT .framer-m63upi { flex: none; height: 17px; position: relative; width: 76px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-pCXIT.framer-1300q0y, .framer-pCXIT .framer-x4onx0 { gap: 0px; } .framer-pCXIT.framer-1300q0y > *, .framer-pCXIT .framer-x4onx0 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-pCXIT.framer-1300q0y > :first-child, .framer-pCXIT .framer-x4onx0 > :first-child { margin-left: 0px; } .framer-pCXIT.framer-1300q0y > :last-child, .framer-pCXIT .framer-x4onx0 > :last-child { margin-right: 0px; } }",
  ],
  yt = ne(Gi, Yi, "framer-pCXIT"),
  ot = yt;
yt.displayName = "Line Button";
yt.defaultProps = { height: 42.5, width: 99 };
q(yt, {
  variant: {
    options: ["LySGNrAK7", "t41M6sYlf"],
    optionTitles: ["Black", "White"],
    title: "Variant",
    type: l.Enum,
  },
  BCYRhfv2g: {
    defaultValue: "Research",
    displayTextArea: !1,
    title: "Title",
    type: l.String,
  },
  eTD_SfQYo: { title: "Link", type: l.Link },
  ywahooFGt: { defaultValue: !1, title: "New Tab", type: l.Boolean },
});
ie(
  yt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Space Grotesk",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsmNsFjTDJK.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Qi = ["G4ev6h3T5", "AEbJ5jRla"],
  Ji = "framer-oCcya",
  Zi = { AEbJ5jRla: "framer-v-1bj10ch", G4ev6h3T5: "framer-v-y4lqsv" };
function an(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Ki = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  $i = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  eo = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  to = f(A),
  ro = { On: "AEbJ5jRla", Static: "G4ev6h3T5" },
  ao = ({
    height: t,
    id: r,
    image: n,
    imageGrayscale: a,
    link: s,
    newTab: m,
    number: c,
    tap: u,
    title: v,
    width: i,
    ...d
  }) => {
    var h, p, V, x, C, g;
    return {
      ...d,
      CbaR8ocV5:
        (h = c ?? d.CbaR8ocV5) !== null && h !== void 0 ? h : "001_USE_CASE",
      F8kQ019Nq: (p = a ?? d.F8kQ019Nq) !== null && p !== void 0 ? p : 100,
      gZtmUk9sQ:
        (V = v ?? d.gZtmUk9sQ) !== null && V !== void 0
          ? V
          : "Artificial Intelligence",
      Su8OQjhue: u ?? d.Su8OQjhue,
      V4u7vOEL5:
        (x = n ?? d.V4u7vOEL5) !== null && x !== void 0
          ? x
          : {
              src: "https://framerusercontent.com/images/hQPc4j71ujaRFNL0zi7ZBN3KwLs.png?scale-down-to=512",
              srcSet:
                "https://framerusercontent.com/images/hQPc4j71ujaRFNL0zi7ZBN3KwLs.png?scale-down-to=1024 707w,https://framerusercontent.com/images/hQPc4j71ujaRFNL0zi7ZBN3KwLs.png 730w",
            },
      variant:
        (g = (C = ro[d.variant]) !== null && C !== void 0 ? C : d.variant) !==
          null && g !== void 0
          ? g
          : "G4ev6h3T5",
      XnSPIY6vt: m ?? d.XnSPIY6vt,
      yNodA127Q: s ?? d.yNodA127Q,
    };
  },
  no = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  io = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      {
        style: s,
        className: m,
        layoutId: c,
        variant: u,
        CbaR8ocV5: v,
        gZtmUk9sQ: i,
        V4u7vOEL5: d,
        F8kQ019Nq: h,
        Su8OQjhue: p,
        yNodA127Q: V,
        XnSPIY6vt: x,
        ...C
      } = ao(t),
      {
        baseVariant: g,
        classNames: _,
        gestureHandlers: T,
        gestureVariant: z,
        setGestureState: S,
        setVariant: N,
        variants: j,
      } = ce({
        cycleOrder: Qi,
        defaultVariant: "G4ev6h3T5",
        variant: u,
        variantClassNames: Zi,
      }),
      o = no(t, j),
      { activeVariantCallback: b, delay: L } = Ne(g),
      M = b(async (...fe) => {
        if ((S({ isPressed: !1 }), p && (await p(...fe)) === !1)) return !1;
      }),
      B = P(null),
      Z = re(),
      oe = [],
      me = le();
    return e(H, {
      id: c ?? Z,
      children: e(to, {
        animate: j,
        initial: !1,
        children: e(eo, {
          value: Ki,
          children: e(xe, {
            ...an({ AEbJ5jRla: { href: V, openInNewTab: x } }, g, z),
            children: w(f.a, {
              ...C,
              ...T,
              className: `${$(Ji, ...oe, "framer-y4lqsv", m, _)} framer-xx0cok`,
              "data-framer-name": "Static",
              "data-highlight": !0,
              layoutDependency: o,
              layoutId: "G4ev6h3T5",
              onTap: M,
              ref: r ?? B,
              style: { opacity: 0.5, ...s },
              variants: { AEbJ5jRla: { opacity: 1 } },
              ...an({ AEbJ5jRla: { "data-framer-name": "On" } }, g, z),
              children: [
                w(f.div, {
                  className: "framer-uz3ek5",
                  "data-framer-name": "Top Title",
                  layoutDependency: o,
                  layoutId: "nOLz8CKhr",
                  children: [
                    e(f.div, {
                      className: "framer-rc4oah",
                      "data-framer-name": "Text",
                      layoutDependency: o,
                      layoutId: "ZsdfPaTnv",
                      style: {
                        backgroundColor:
                          "var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(242, 244, 253))",
                      },
                      children: e(ee, {
                        __fromCanvasComponent: !0,
                        children: e(A, {
                          children: e(f.p, {
                            style: {
                              "--font-selector":
                                "R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy",
                              "--framer-font-family":
                                '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                              "--framer-font-size": "12px",
                              "--framer-line-height": "160%",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212)))",
                            },
                            children: "001_USE_CASE",
                          }),
                        }),
                        className: "framer-3ku784",
                        fonts: ["GF;Space Grotesk-regular"],
                        layoutDependency: o,
                        layoutId: "MM9_hVLSI",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: v,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(f.div, {
                      className: "framer-ixascc",
                      layoutDependency: o,
                      layoutId: "x_XxWHqDw",
                      children: e(X, {
                        className: "framer-1010pp8",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: o,
                        layoutId: "OGreclr3l",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35 35"><path d="M 7.732 31.058 L 21.768 8.826 C 23.139 6.655 25.885 5.291 28.883 5.291 L 34.5 5.291 L 34.5 0 L 0 0 L 0 34.593 L 0.617 34.593 C 3.615 34.593 6.361 33.228 7.732 31.058 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path></svg>',
                        svgContentId: 8910344592,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(f.div, {
                      className: "framer-1ehvcsh",
                      "data-framer-name": "Top",
                      layoutDependency: o,
                      layoutId: "Wh4BumLkP",
                      children: e(X, {
                        className: "framer-o2uqfp",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: o,
                        layoutId: "QF9m1v0j1",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10 C 0 3.096 3.096 0 10 0 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path></svg>',
                        svgContentId: 12189802268,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                w(f.div, {
                  className: "framer-ih0cf0",
                  "data-framer-name": "Bottom Title",
                  layoutDependency: o,
                  layoutId: "n8L16LrLL",
                  children: [
                    e(f.div, {
                      className: "framer-1j4nv2p",
                      "data-framer-name": "Text",
                      layoutDependency: o,
                      layoutId: "z5PH0TZFo",
                      style: {
                        backgroundColor:
                          "var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(242, 244, 253))",
                      },
                      children: e(ee, {
                        __fromCanvasComponent: !0,
                        children: e(A, {
                          children: e(f.h6, {
                            style: {
                              "--font-selector": "R0Y7Q2hha3JhIFBldGNoLTYwMA==",
                              "--framer-font-family":
                                '"Chakra Petch", "Chakra Petch Placeholder", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-font-weight": "600",
                              "--framer-line-height": "160%",
                              "--framer-text-color":
                                "var(--extracted-1w1cjl5, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "Artificial Intelligence",
                          }),
                        }),
                        className: "framer-wj6t4",
                        fonts: ["GF;Chakra Petch-600"],
                        layoutDependency: o,
                        layoutId: "WarzoD9hV",
                        style: {
                          "--extracted-1w1cjl5":
                            "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: i,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e(f.div, {
                      className: "framer-1dwhgho",
                      "data-framer-name": "Right",
                      layoutDependency: o,
                      layoutId: "QfzwXLIU7",
                      style: { rotate: 180 },
                      children: e(X, {
                        className: "framer-1msuwxc",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: o,
                        layoutId: "hn6XBVV03",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 53"><path d="M 39.77 47.031 L 18.916 13.365 C 16.88 10.078 12.8 8.012 8.345 8.012 L 0 8.012 L 0 0 L 51.257 0 L 51.257 52.384 L 50.34 52.384 C 45.886 52.384 41.806 50.317 39.77 47.031 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path></svg>',
                        svgContentId: 11030423326,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(f.div, {
                      className: "framer-1ejzz5o",
                      "data-framer-name": "Top",
                      layoutDependency: o,
                      layoutId: "DfwPeF_Xa",
                      style: { rotate: -90 },
                      children: e(X, {
                        className: "framer-1czlv5n",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: o,
                        layoutId: "OkELyWrlK",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 10"><path d="M 10 0 L 0 0 L 0 10 C 0 3.096 3.096 0 10 0 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path></svg>',
                        svgContentId: 12189802268,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
                e(f.div, {
                  className: "framer-34ayo3",
                  "data-border": !0,
                  layoutDependency: o,
                  layoutId: "rCbMgabZd",
                  style: {
                    "--border-bottom-width": "4px",
                    "--border-color":
                      "var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(242, 244, 253))",
                    "--border-left-width": "4px",
                    "--border-right-width": "0px",
                    "--border-style": "solid",
                    "--border-top-width": "4px",
                  },
                }),
                e(Xe, {
                  background: {
                    alt: "",
                    fit: "fill",
                    sizes: me?.width || "100vw",
                    ...$i(d),
                  },
                  className: "framer-lof3zh",
                  "data-framer-name": "Image",
                  layoutDependency: o,
                  layoutId: "xjeP05tjs",
                  style: {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    filter: `grayscale(${parseFloat(h) / 100})`,
                    WebkitFilter: `grayscale(${parseFloat(h) / 100})`,
                  },
                  variants: {
                    AEbJ5jRla: {
                      filter: "grayscale(0)",
                      WebkitFilter: "grayscale(0)",
                    },
                  },
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  oo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-oCcya.framer-xx0cok, .framer-oCcya .framer-xx0cok { display: block; }",
    ".framer-oCcya.framer-y4lqsv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 365px; }",
    ".framer-oCcya .framer-uz3ek5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 2; }",
    ".framer-oCcya .framer-rc4oah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 6px 8px 6px; position: relative; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-3ku784, .framer-oCcya .framer-wj6t4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-oCcya .framer-ixascc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: -34px; top: -5px; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-1010pp8 { flex: none; height: 35px; position: relative; width: 35px; }",
    ".framer-oCcya .framer-1ehvcsh { align-content: center; align-items: center; bottom: -10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-o2uqfp, .framer-oCcya .framer-1czlv5n { flex: none; height: 10px; position: relative; width: 10px; }",
    ".framer-oCcya .framer-ih0cf0 { align-content: flex-start; align-items: flex-start; bottom: -50px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 2; }",
    ".framer-oCcya .framer-1j4nv2p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 6px 2px 6px; position: relative; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-1dwhgho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: -51px; top: -1px; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-1msuwxc { flex: none; height: 53px; position: relative; width: 52px; }",
    ".framer-oCcya .framer-1ejzz5o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: -10px; width: min-content; z-index: 1; }",
    ".framer-oCcya .framer-34ayo3 { bottom: -52px; flex: none; left: -4px; overflow: visible; position: absolute; top: 0px; width: 119px; z-index: 1; }",
    ".framer-oCcya .framer-lof3zh { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-oCcya.framer-y4lqsv, .framer-oCcya .framer-uz3ek5, .framer-oCcya .framer-rc4oah, .framer-oCcya .framer-ixascc, .framer-oCcya .framer-1ehvcsh, .framer-oCcya .framer-ih0cf0, .framer-oCcya .framer-1j4nv2p, .framer-oCcya .framer-1dwhgho, .framer-oCcya .framer-1ejzz5o { gap: 0px; } .framer-oCcya.framer-y4lqsv > *, .framer-oCcya .framer-ixascc > *, .framer-oCcya .framer-1dwhgho > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-oCcya.framer-y4lqsv > :first-child, .framer-oCcya .framer-ixascc > :first-child, .framer-oCcya .framer-1dwhgho > :first-child { margin-top: 0px; } .framer-oCcya.framer-y4lqsv > :last-child, .framer-oCcya .framer-ixascc > :last-child, .framer-oCcya .framer-1dwhgho > :last-child { margin-bottom: 0px; } .framer-oCcya .framer-uz3ek5 > *, .framer-oCcya .framer-ih0cf0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-oCcya .framer-uz3ek5 > :first-child, .framer-oCcya .framer-rc4oah > :first-child, .framer-oCcya .framer-1ehvcsh > :first-child, .framer-oCcya .framer-ih0cf0 > :first-child, .framer-oCcya .framer-1j4nv2p > :first-child, .framer-oCcya .framer-1ejzz5o > :first-child { margin-left: 0px; } .framer-oCcya .framer-uz3ek5 > :last-child, .framer-oCcya .framer-rc4oah > :last-child, .framer-oCcya .framer-1ehvcsh > :last-child, .framer-oCcya .framer-ih0cf0 > :last-child, .framer-oCcya .framer-1j4nv2p > :last-child, .framer-oCcya .framer-1ejzz5o > :last-child { margin-right: 0px; } .framer-oCcya .framer-rc4oah > *, .framer-oCcya .framer-1ehvcsh > *, .framer-oCcya .framer-1j4nv2p > *, .framer-oCcya .framer-1ejzz5o > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".framer-oCcya.framer-v-1bj10ch.framer-y4lqsv { height: 500px; text-decoration: none; }",
    ".framer-oCcya.framer-v-1bj10ch .framer-ih0cf0 { bottom: 0px; }",
    ".framer-oCcya.framer-v-1bj10ch .framer-34ayo3 { bottom: -2px; left: -3px; top: -2px; width: 124px; }",
    '.framer-oCcya[data-border="true"]::after, .framer-oCcya [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  gt = ne(io, oo, "framer-oCcya"),
  Oe = gt;
gt.displayName = "Use Case Card";
gt.defaultProps = { height: 400, width: 365 };
q(gt, {
  variant: {
    options: ["G4ev6h3T5", "AEbJ5jRla"],
    optionTitles: ["Static", "On"],
    title: "Variant",
    type: l.Enum,
  },
  CbaR8ocV5: {
    defaultValue: "001_USE_CASE",
    displayTextArea: !1,
    title: "Number",
    type: l.String,
  },
  gZtmUk9sQ: {
    defaultValue: "Artificial Intelligence",
    displayTextArea: !1,
    title: "Title",
    type: l.String,
  },
  V4u7vOEL5: {
    __defaultAssetReference:
      "data:framer/asset-reference,hQPc4j71ujaRFNL0zi7ZBN3KwLs.png?originalFilename=image.png&preferredSize=auto",
    title: "Image",
    type: l.ResponsiveImage,
  },
  F8kQ019Nq: { defaultValue: 100, title: "Image Grayscale", type: l.Number },
  Su8OQjhue: { title: "Tap", type: l.EventHandler },
  yNodA127Q: { title: "Link", type: l.Link },
  XnSPIY6vt: { defaultValue: !1, title: "New Tab", type: l.Boolean },
});
ie(
  gt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Space Grotesk",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsmNsFjTDJK.woff2",
          weight: "400",
        },
        {
          family: "Chakra Petch",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/chakrapetch/v11/cIflMapbsEk7TDLdtEz1BwkeQI5FRZXE3AY00g.woff2",
          weight: "600",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var lo = O(Oe),
  co = [
    "tMatCB9OQ",
    "uDrPgcOiT",
    "lFjF_xP3r",
    "D62E6RzMc",
    "s1K3idkXC",
    "hfgoAJPA7",
    "ff5qtLO28",
  ],
  mo = "framer-wsXJ2",
  fo = {
    D62E6RzMc: "framer-v-bgc2en",
    ff5qtLO28: "framer-v-m3qnjb",
    hfgoAJPA7: "framer-v-1aemoia",
    lFjF_xP3r: "framer-v-um18ai",
    s1K3idkXC: "framer-v-1h3k9aa",
    tMatCB9OQ: "framer-v-gaj283",
    uDrPgcOiT: "framer-v-17oyyfk",
  };
function ye(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var po = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ho = (t, r) => `translateY(-50%) ${r}`,
  vt = (t, r) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: r };
  },
  uo = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  yo = f(A),
  go = {
    Auto: "lFjF_xP3r",
    Finance: "s1K3idkXC",
    First: "tMatCB9OQ",
    Mobile: "ff5qtLO28",
    Pharma: "uDrPgcOiT",
    Research: "hfgoAJPA7",
    Telecom: "D62E6RzMc",
  },
  vo = ({ height: t, id: r, width: n, ...a }) => {
    var s, m;
    return {
      ...a,
      variant:
        (m = (s = go[a.variant]) !== null && s !== void 0 ? s : a.variant) !==
          null && m !== void 0
          ? m
          : "tMatCB9OQ",
    };
  },
  xo = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  wo = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = vo(t),
      {
        baseVariant: i,
        classNames: d,
        gestureHandlers: h,
        gestureVariant: p,
        setGestureState: V,
        setVariant: x,
        variants: C,
      } = ce({
        cycleOrder: co,
        defaultVariant: "tMatCB9OQ",
        variant: u,
        variantClassNames: fo,
      }),
      g = xo(t, C),
      { activeVariantCallback: _, delay: T } = Ne(i),
      z = _(async (...Q) => {
        x("uDrPgcOiT");
      }),
      S = _(async (...Q) => {
        x("lFjF_xP3r");
      }),
      N = _(async (...Q) => {
        x("s1K3idkXC");
      }),
      j = _(async (...Q) => {
        x("D62E6RzMc");
      }),
      o = _(async (...Q) => {
        x("hfgoAJPA7");
      }),
      b = _(async (...Q) => {
        x("tMatCB9OQ");
      }),
      L = _(async (...Q) => {
        x("uDrPgcOiT");
      }),
      M = _(async (...Q) => {
        x("s1K3idkXC");
      }),
      B = _(async (...Q) => {
        x("lFjF_xP3r");
      }),
      Z = _(async (...Q) => {
        x("D62E6RzMc");
      }),
      oe = _(async (...Q) => {
        x("hfgoAJPA7");
      }),
      me = P(null),
      fe = () => i !== "ff5qtLO28",
      W = re(),
      pe = [],
      ve = le();
    return e(H, {
      id: c ?? W,
      children: e(yo, {
        animate: C,
        initial: !1,
        children: e(uo, {
          value: po,
          children: w(f.div, {
            ...v,
            ...h,
            className: $(mo, ...pe, "framer-gaj283", m, d),
            "data-framer-name": "First",
            layoutDependency: g,
            layoutId: "tMatCB9OQ",
            ref: r ?? me,
            style: { ...s },
            ...ye(
              {
                D62E6RzMc: { "data-framer-name": "Telecom" },
                ff5qtLO28: { "data-framer-name": "Mobile" },
                hfgoAJPA7: { "data-framer-name": "Research" },
                lFjF_xP3r: { "data-framer-name": "Auto" },
                s1K3idkXC: { "data-framer-name": "Finance" },
                uDrPgcOiT: { "data-framer-name": "Pharma" },
              },
              i,
              p
            ),
            children: [
              w(f.div, {
                className: "framer-7cysk3",
                "data-framer-name": "Slider",
                layoutDependency: g,
                layoutId: "hh8uizTzF",
                transformTemplate: ho,
                children: [
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-1sok1a2-container",
                      "data-framer-name": "Card AI",
                      layoutDependency: g,
                      layoutId: "Pg0KLUDOz-container",
                      name: "Card AI",
                      children: e(Oe, {
                        CbaR8ocV5: "001_USE_CASE",
                        F8kQ019Nq: 0,
                        gZtmUk9sQ: "Artificial Intelligence",
                        height: "100%",
                        id: "Pg0KLUDOz",
                        layoutId: "Pg0KLUDOz",
                        name: "Card AI",
                        style: { height: "100%", width: "100%" },
                        variant: "AEbJ5jRla",
                        width: "100%",
                        XnSPIY6vt: !0,

                        ...ye(
                          {
                            D62E6RzMc: { variant: "G4ev6h3T5" },
                            hfgoAJPA7: { variant: "G4ev6h3T5" },
                            lFjF_xP3r: { variant: "G4ev6h3T5" },
                            s1K3idkXC: { variant: "G4ev6h3T5" },
                            uDrPgcOiT: { variant: "G4ev6h3T5" },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-wtv76f-container",
                      layoutDependency: g,
                      layoutId: "nrg54ay9Q-container",
                      children: e(Oe, {
                        CbaR8ocV5: "002_USE_CASE",
                        F8kQ019Nq: 100,
                        gZtmUk9sQ: "Pharmaceuticals",
                        height: "100%",
                        id: "nrg54ay9Q",
                        layoutId: "nrg54ay9Q",
                        style: { width: "100%" },
                        Su8OQjhue: z,
                        V4u7vOEL5: vt(
                          {
                            src: "https://framerusercontent.com/images/d5xcGnLb5fQQlZ22AmKkbRbqJU.png",
                            srcSet:
                              "https://framerusercontent.com/images/d5xcGnLb5fQQlZ22AmKkbRbqJU.png?scale-down-to=1024 707w,https://framerusercontent.com/images/d5xcGnLb5fQQlZ22AmKkbRbqJU.png 730w",
                          },
                          ""
                        ),
                        variant: "G4ev6h3T5",
                        width: "100%",
                        XnSPIY6vt: !0,
                   
                        ...ye(
                          {
                            D62E6RzMc: {
                              style: { height: "100%", width: "100%" },
                            },
                            hfgoAJPA7: {
                              style: { height: "100%", width: "100%" },
                            },
                            lFjF_xP3r: {
                              style: { height: "100%", width: "100%" },
                            },
                            s1K3idkXC: {
                              style: { height: "100%", width: "100%" },
                            },
                            uDrPgcOiT: {
                              style: { height: "100%", width: "100%" },
                              variant: "AEbJ5jRla",
                            },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-beseg4-container",
                      layoutDependency: g,
                      layoutId: "dTdrWL7lG-container",
                      children: e(Oe, {
                        CbaR8ocV5: "003_USE_CASE",
                        F8kQ019Nq: 100,
                        gZtmUk9sQ: "Automotive & Aerospace",
                        height: "100%",
                        id: "dTdrWL7lG",
                        layoutId: "dTdrWL7lG",
                        style: { width: "100%" },
                        Su8OQjhue: S,
                        V4u7vOEL5: vt(
                          {
                            src: "https://framerusercontent.com/images/Au5G781NRFmdL2Dn62jUwmvZ8.png",
                            srcSet:
                              "https://framerusercontent.com/images/Au5G781NRFmdL2Dn62jUwmvZ8.png?scale-down-to=1024 707w,https://framerusercontent.com/images/Au5G781NRFmdL2Dn62jUwmvZ8.png 730w",
                          },
                          ""
                        ),
                        variant: "G4ev6h3T5",
                        width: "100%",
                        XnSPIY6vt: !0,

                        ...ye(
                          {
                            D62E6RzMc: {
                              style: { height: "100%", width: "100%" },
                            },
                            hfgoAJPA7: {
                              style: { height: "100%", width: "100%" },
                            },
                            lFjF_xP3r: {
                              style: { height: "100%", width: "100%" },
                              variant: "AEbJ5jRla",
                            },
                            s1K3idkXC: {
                              style: { height: "100%", width: "100%" },
                            },
                            uDrPgcOiT: {
                              style: { height: "100%", width: "100%" },
                            },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-1unqxgr-container",
                      layoutDependency: g,
                      layoutId: "CvYDIbgBY-container",
                      children: e(Oe, {
                        CbaR8ocV5: "004_USE_CASE",
                        F8kQ019Nq: 100,
                        gZtmUk9sQ: "Financial Services",
                        height: "100%",
                        id: "CvYDIbgBY",
                        layoutId: "CvYDIbgBY",
                        style: { width: "100%" },
                        Su8OQjhue: N,
                        V4u7vOEL5: vt(
                          {
                            src: "https://framerusercontent.com/images/wbrhyCoOcIClOJ9ezK6EQIs8Q.png",
                            srcSet:
                              "https://framerusercontent.com/images/wbrhyCoOcIClOJ9ezK6EQIs8Q.png?scale-down-to=1024 707w,https://framerusercontent.com/images/wbrhyCoOcIClOJ9ezK6EQIs8Q.png 730w",
                          },
                          ""
                        ),
                        variant: "G4ev6h3T5",
                        width: "100%",
                        XnSPIY6vt: !0,

                        ...ye(
                          {
                            D62E6RzMc: {
                              style: { height: "100%", width: "100%" },
                            },
                            hfgoAJPA7: {
                              style: { height: "100%", width: "100%" },
                            },
                            lFjF_xP3r: {
                              style: { height: "100%", width: "100%" },
                            },
                            s1K3idkXC: {
                              style: { height: "100%", width: "100%" },
                              variant: "AEbJ5jRla",
                            },
                            uDrPgcOiT: {
                              style: { height: "100%", width: "100%" },
                            },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-8baxei-container",
                      layoutDependency: g,
                      layoutId: "wTA0paSJQ-container",
                      children: e(Oe, {
                        CbaR8ocV5: "005_USE_CASE",
                        F8kQ019Nq: 100,
                        gZtmUk9sQ: "Telecommunications",
                        height: "100%",
                        id: "wTA0paSJQ",
                        layoutId: "wTA0paSJQ",
                        style: { width: "100%" },
                        Su8OQjhue: j,
                        V4u7vOEL5: vt(
                          {
                            src: "https://framerusercontent.com/images/1BK725zHEr5MhwD7Obvnsgv5Hxs.png",
                            srcSet:
                              "https://framerusercontent.com/images/1BK725zHEr5MhwD7Obvnsgv5Hxs.png?scale-down-to=1024 707w,https://framerusercontent.com/images/1BK725zHEr5MhwD7Obvnsgv5Hxs.png 730w",
                          },
                          ""
                        ),
                        variant: "G4ev6h3T5",
                        width: "100%",
                        XnSPIY6vt: !0,

                        ...ye(
                          {
                            D62E6RzMc: {
                              style: { height: "100%", width: "100%" },
                              variant: "AEbJ5jRla",
                            },
                            hfgoAJPA7: {
                              style: { height: "100%", width: "100%" },
                            },
                            lFjF_xP3r: {
                              style: { height: "100%", width: "100%" },
                            },
                            s1K3idkXC: {
                              style: { height: "100%", width: "100%" },
                            },
                            uDrPgcOiT: {
                              style: { height: "100%", width: "100%" },
                            },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                  e(y, {
                    width: "365px",
                    ...ye({ ff5qtLO28: { width: "325px" } }, i, p),
                    children: e(f.div, {
                      className: "framer-cwq8b7-container",
                      layoutDependency: g,
                      layoutId: "KcMUlFTR7-container",
                      children: e(Oe, {
                        CbaR8ocV5: "006_USE_CASE",
                        F8kQ019Nq: 100,
                        gZtmUk9sQ: "Research",
                        height: "100%",
                        id: "KcMUlFTR7",
                        layoutId: "KcMUlFTR7",
                        style: { width: "100%" },
                        Su8OQjhue: o,
                        V4u7vOEL5: vt(
                          {
                            src: "https://framerusercontent.com/images/O3jsIn5po6ko8jJaa6haY5c5COQ.png",
                            srcSet:
                              "https://framerusercontent.com/images/O3jsIn5po6ko8jJaa6haY5c5COQ.png?scale-down-to=1024 707w,https://framerusercontent.com/images/O3jsIn5po6ko8jJaa6haY5c5COQ.png 730w",
                          },
                          ""
                        ),
                        variant: "G4ev6h3T5",
                        width: "100%",
                        XnSPIY6vt: !0,
                        ...ye(
                          {
                            D62E6RzMc: {
                              style: { height: "100%", width: "100%" },
                            },
                            hfgoAJPA7: {
                              style: { height: "100%", width: "100%" },
                              variant: "AEbJ5jRla",
                            },
                            lFjF_xP3r: {
                              style: { height: "100%", width: "100%" },
                            },
                            s1K3idkXC: {
                              style: { height: "100%", width: "100%" },
                            },
                            uDrPgcOiT: {
                              style: { height: "100%", width: "100%" },
                            },
                          },
                          i,
                          p
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              fe() &&
                w(f.div, {
                  className: "framer-tgh0x8",
                  "data-framer-name": "Arrows",
                  layoutDependency: g,
                  layoutId: "VQE8yNVoI",
                  children: [
                    e(f.div, {
                      className: "framer-1l6hyql",
                      "data-framer-name": "arrow",
                      layoutDependency: g,
                      layoutId: "UZsLFqLJa",
                      style: { opacity: 0.5, rotate: 180 },
                      variants: {
                        D62E6RzMc: { opacity: 1 },
                        hfgoAJPA7: { opacity: 1 },
                        lFjF_xP3r: { opacity: 1 },
                        s1K3idkXC: { opacity: 1 },
                        uDrPgcOiT: { opacity: 1 },
                      },
                      ...ye(
                        {
                          D62E6RzMc: { "data-highlight": !0, onTap: M },
                          hfgoAJPA7: { "data-highlight": !0, onTap: Z },
                          lFjF_xP3r: { "data-highlight": !0, onTap: L },
                          s1K3idkXC: { "data-highlight": !0, onTap: B },
                          uDrPgcOiT: { "data-highlight": !0, onTap: b },
                        },
                        i,
                        p
                      ),
                      children: e(X, {
                        className: "framer-a8xj7h",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: g,
                        layoutId: "JU_BxCqcA",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 25"><path d="M 1 12.484 L 45.61 12.484 M 45.61 12.484 L 34.124 23.97 M 45.608 12.485 L 34.125 1" fill="transparent" stroke-width="2" stroke="var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White/White&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10033283568,
                        withExternalLayout: !0,
                      }),
                    }),
                    e(f.div, {
                      className: "framer-17qod9l",
                      "data-framer-name": "arrow",
                      "data-highlight": !0,
                      layoutDependency: g,
                      layoutId: "O9uVfSKra",
                      onTap: L,
                      style: { opacity: 1 },
                      variants: { hfgoAJPA7: { opacity: 0.3 } },
                      ...ye(
                        {
                          D62E6RzMc: { onTap: oe },
                          hfgoAJPA7: {
                            "data-highlight": void 0,
                            onTap: void 0,
                          },
                          lFjF_xP3r: { onTap: M },
                          s1K3idkXC: { onTap: Z },
                          uDrPgcOiT: { onTap: B },
                        },
                        i,
                        p
                      ),
                      children: e(X, {
                        className: "framer-1h7ygb4",
                        "data-framer-name": "graphic",
                        layout: "position",
                        layoutDependency: g,
                        layoutId: "RV9tSnScu",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 25"><path d="M 1 12.484 L 45.61 12.484 M 45.61 12.484 L 34.124 23.97 M 45.608 12.485 L 34.125 1" fill="transparent" stroke-width="2" stroke="var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White/White&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
                        svgContentId: 10033283568,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  bo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-wsXJ2.framer-jb7pg3, .framer-wsXJ2 .framer-jb7pg3 { display: block; }",
    ".framer-wsXJ2.framer-gaj283 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 510px; overflow: hidden; padding: 0px; position: relative; width: 3000px; }",
    ".framer-wsXJ2 .framer-7cysk3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 50%; width: 100%; z-index: 1; }",
    ".framer-wsXJ2 .framer-1sok1a2-container { flex: none; height: 500px; position: relative; width: 365px; }",
    ".framer-wsXJ2 .framer-wtv76f-container, .framer-wsXJ2 .framer-beseg4-container, .framer-wsXJ2 .framer-1unqxgr-container, .framer-wsXJ2 .framer-8baxei-container, .framer-wsXJ2 .framer-cwq8b7-container { flex: none; height: auto; position: relative; width: 365px; }",
    ".framer-wsXJ2 .framer-tgh0x8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 413px; overflow: hidden; padding: 0px; position: absolute; top: 31px; width: min-content; }",
    ".framer-wsXJ2 .framer-1l6hyql { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }",
    ".framer-wsXJ2 .framer-a8xj7h, .framer-wsXJ2 .framer-1h7ygb4 { flex: none; height: 25px; position: relative; width: 47px; }",
    ".framer-wsXJ2 .framer-17qod9l { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wsXJ2.framer-gaj283, .framer-wsXJ2 .framer-7cysk3, .framer-wsXJ2 .framer-tgh0x8, .framer-wsXJ2 .framer-1l6hyql, .framer-wsXJ2 .framer-17qod9l { gap: 0px; } .framer-wsXJ2.framer-gaj283 > *, .framer-wsXJ2 .framer-tgh0x8 > *, .framer-wsXJ2 .framer-1l6hyql > *, .framer-wsXJ2 .framer-17qod9l > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-wsXJ2.framer-gaj283 > :first-child, .framer-wsXJ2 .framer-7cysk3 > :first-child, .framer-wsXJ2 .framer-tgh0x8 > :first-child, .framer-wsXJ2 .framer-1l6hyql > :first-child, .framer-wsXJ2 .framer-17qod9l > :first-child { margin-left: 0px; } .framer-wsXJ2.framer-gaj283 > :last-child, .framer-wsXJ2 .framer-7cysk3 > :last-child, .framer-wsXJ2 .framer-tgh0x8 > :last-child, .framer-wsXJ2 .framer-1l6hyql > :last-child, .framer-wsXJ2 .framer-17qod9l > :last-child { margin-right: 0px; } .framer-wsXJ2 .framer-7cysk3 > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } }",
    ".framer-wsXJ2.framer-v-17oyyfk .framer-7cysk3 { left: -413px; }",
    ".framer-wsXJ2.framer-v-17oyyfk .framer-1sok1a2-container, .framer-wsXJ2.framer-v-17oyyfk .framer-beseg4-container, .framer-wsXJ2.framer-v-17oyyfk .framer-1unqxgr-container, .framer-wsXJ2.framer-v-17oyyfk .framer-8baxei-container, .framer-wsXJ2.framer-v-17oyyfk .framer-cwq8b7-container, .framer-wsXJ2.framer-v-um18ai .framer-1sok1a2-container, .framer-wsXJ2.framer-v-um18ai .framer-wtv76f-container, .framer-wsXJ2.framer-v-um18ai .framer-1unqxgr-container, .framer-wsXJ2.framer-v-um18ai .framer-8baxei-container, .framer-wsXJ2.framer-v-um18ai .framer-cwq8b7-container, .framer-wsXJ2.framer-v-bgc2en .framer-1sok1a2-container, .framer-wsXJ2.framer-v-bgc2en .framer-wtv76f-container, .framer-wsXJ2.framer-v-bgc2en .framer-beseg4-container, .framer-wsXJ2.framer-v-bgc2en .framer-1unqxgr-container, .framer-wsXJ2.framer-v-bgc2en .framer-cwq8b7-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-1sok1a2-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-wtv76f-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-beseg4-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-8baxei-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-cwq8b7-container { height: 400px; }",
    ".framer-wsXJ2.framer-v-17oyyfk .framer-wtv76f-container, .framer-wsXJ2.framer-v-um18ai .framer-beseg4-container, .framer-wsXJ2.framer-v-bgc2en .framer-8baxei-container, .framer-wsXJ2.framer-v-1h3k9aa .framer-1unqxgr-container { height: 500px; }",
    ".framer-wsXJ2.framer-v-17oyyfk .framer-1l6hyql, .framer-wsXJ2.framer-v-um18ai .framer-1l6hyql, .framer-wsXJ2.framer-v-bgc2en .framer-1l6hyql, .framer-wsXJ2.framer-v-1h3k9aa .framer-1l6hyql, .framer-wsXJ2.framer-v-1aemoia .framer-1l6hyql { cursor: pointer; }",
    ".framer-wsXJ2.framer-v-um18ai .framer-7cysk3 { left: -825px; }",
    ".framer-wsXJ2.framer-v-bgc2en .framer-7cysk3 { left: -1653px; }",
    ".framer-wsXJ2.framer-v-1h3k9aa .framer-7cysk3 { left: -1240px; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-7cysk3 { left: -2066px; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-1sok1a2-container { height: 400px; order: 0; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-wtv76f-container { height: 400px; order: 1; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-beseg4-container { height: 400px; order: 2; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-1unqxgr-container { height: 400px; order: 3; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-8baxei-container { height: 400px; order: 4; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-cwq8b7-container { height: 500px; order: 5; }",
    ".framer-wsXJ2.framer-v-1aemoia .framer-17qod9l { cursor: unset; }",
    ".framer-wsXJ2.framer-v-m3qnjb .framer-7cysk3 { gap: 12px; }",
    ".framer-wsXJ2.framer-v-m3qnjb .framer-1sok1a2-container, .framer-wsXJ2.framer-v-m3qnjb .framer-wtv76f-container, .framer-wsXJ2.framer-v-m3qnjb .framer-beseg4-container, .framer-wsXJ2.framer-v-m3qnjb .framer-1unqxgr-container, .framer-wsXJ2.framer-v-m3qnjb .framer-8baxei-container, .framer-wsXJ2.framer-v-m3qnjb .framer-cwq8b7-container { width: 325px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wsXJ2.framer-v-m3qnjb .framer-7cysk3 { gap: 0px; } .framer-wsXJ2.framer-v-m3qnjb .framer-7cysk3 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-wsXJ2.framer-v-m3qnjb .framer-7cysk3 > :first-child { margin-left: 0px; } .framer-wsXJ2.framer-v-m3qnjb .framer-7cysk3 > :last-child { margin-right: 0px; } }",
  ],
  xt = ne(wo, bo, "framer-wsXJ2"),
  jr = xt;
xt.displayName = "Use Case Slider";
xt.defaultProps = { height: 510, width: 3e3 };
q(xt, {
  variant: {
    options: [
      "tMatCB9OQ",
      "uDrPgcOiT",
      "lFjF_xP3r",
      "D62E6RzMc",
      "s1K3idkXC",
      "hfgoAJPA7",
      "ff5qtLO28",
    ],
    optionTitles: [
      "First",
      "Pharma",
      "Auto",
      "Telecom",
      "Finance",
      "Research",
      "Mobile",
    ],
    title: "Variant",
    type: l.Enum,
  },
});
ie(xt, [{ explicitInter: !0, fonts: [] }, ...lo], {
  supportsExplicitInterCodegen: !0,
});
var Tr,
  Mr,
  Fr,
  Ar,
  So = O(Ge),
  De = aa(Ge),
  Io = ["PpzC4ylSr"],
  No = "framer-POWIA",
  Lo = { PpzC4ylSr: "framer-v-tqm1is" };
var jo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  To = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  Mo = f(A),
  Fo = {
    Bold: "bold",
    Duotone: "duotone",
    Fill: "fill",
    Light: "light",
    Regular: "regular",
    Thin: "thin",
  },
  Ao = ({
    featureContent: t,
    height: r,
    icon: n,
    iconColor: a,
    iconWeight: s,
    id: m,
    title: c,
    titleColor: u,
    width: v,
    ...i
  }) => {
    var d, h, p, V, x, C, g, _;
    return {
      ...i,
      De81Dd2tF:
        (d = t ?? i.De81Dd2tF) !== null && d !== void 0
          ? d
          : e(A, {
              children: e(f.p, {
                children: e(f.br, { className: "trailing-break" }),
              }),
            }),
      FXMLloUXk:
        (h = u ?? i.FXMLloUXk) !== null && h !== void 0
          ? h
          : "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
      HMV4Yoe7M:
        (p = a ?? i.HMV4Yoe7M) !== null && p !== void 0
          ? p
          : "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
      KXaYyhqTQ:
        (C =
          (x = (V = Fo[s]) !== null && V !== void 0 ? V : s) !== null &&
          x !== void 0
            ? x
            : i.KXaYyhqTQ) !== null && C !== void 0
          ? C
          : "thin",
      lFSXA88cV:
        (g = c ?? i.lFSXA88cV) !== null && g !== void 0 ? g : "No Premine",
      tXM8rNFsJ:
        (_ = n ?? i.tXM8rNFsJ) !== null && _ !== void 0 ? _ : "HardDrives",
    };
  },
  Po = (t, r) => r.join("-") + t.layoutDependency,
  Oo = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      {
        style: s,
        className: m,
        layoutId: c,
        variant: u,
        tXM8rNFsJ: v,
        HMV4Yoe7M: i,
        KXaYyhqTQ: d,
        lFSXA88cV: h,
        FXMLloUXk: p,
        De81Dd2tF: V,
        ...x
      } = Ao(t),
      {
        baseVariant: C,
        classNames: g,
        gestureVariant: _,
        setGestureState: T,
        setVariant: z,
        variants: S,
      } = ce({
        cycleOrder: Io,
        defaultVariant: "PpzC4ylSr",
        variant: u,
        variantClassNames: Lo,
      }),
      N = Po(t, S),
      j = P(null),
      o = re(),
      b = [Ot, Ut, Ft, ya, Va, qt, pa, za, xa],
      L = le();
    return e(H, {
      id: c ?? o,
      children: e(Mo, {
        animate: S,
        initial: !1,
        children: e(To, {
          value: jo,
          children: w(f.div, {
            ...x,
            className: $(No, ...b, "framer-tqm1is", m, g),
            "data-framer-name": "Variant 1",
            layoutDependency: N,
            layoutId: "PpzC4ylSr",
            onHoverEnd: () => T({ isHovered: !1 }),
            onHoverStart: () => T({ isHovered: !0 }),
            onTap: () => T({ isPressed: !1 }),
            onTapCancel: () => T({ isPressed: !1 }),
            onTapStart: () => T({ isPressed: !0 }),
            ref: r ?? j,
            style: { ...s },
            children: [
              e(y, {
                children: e(f.div, {
                  className: "framer-d238ad-container",
                  layoutDependency: N,
                  layoutId: "E53sQdYAR-container",
                  children: e(Ge, {
                    color: i,
                    height: "100%",
                    iconSearch: "HardDrives",
                    iconSelection: v,
                    id: "E53sQdYAR",
                    layoutId: "E53sQdYAR",
                    mirrored: !1,
                    selectByList: !0,
                    style: { height: "100%", width: "100%" },
                    weight: d,
                    width: "100%",
                  }),
                }),
              }),
              w(f.div, {
                className: "framer-1d3qt7w",
                "data-framer-name": "Content",
                layoutDependency: N,
                layoutId: "TwYf6ZKCj",
                children: [
                  e(ee, {
                    __fromCanvasComponent: !0,
                    children: e(A, {
                      children: e(f.h6, {
                        className: "framer-styles-preset-14n5412",
                        "data-styles-preset": "H9bHClO9b",
                        style: {
                          "--framer-text-color":
                            "var(--extracted-1w1cjl5, var(--variable-reference-FXMLloUXk-h2tazHqwv))",
                        },
                        children: "No Premine",
                      }),
                    }),
                    className: "framer-1l8vor9",
                    fonts: ["Inter"],
                    layoutDependency: N,
                    layoutId: "w0MlhAnxM",
                    style: {
                      "--extracted-1w1cjl5":
                        "var(--variable-reference-FXMLloUXk-h2tazHqwv)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--variable-reference-FXMLloUXk-h2tazHqwv": p,
                    },
                    text: h,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(ia, {
                    presets: {
                      "module:NEd4VmDdsxM3StIUbddO/bZxrMUxBPAhoXlARkK9C/YouTube.js:Youtube":
                        gr.T_j0y6EwI,
                      "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                        gr.io8WtmkA6,
                    },
                    children: e(ee, {
                      __fromCanvasComponent: !0,
                      children: V,
                      className: "framer-zzebyc",
                      fonts: ["Inter"],
                      layoutDependency: N,
                      layoutId: "lv0QFtbRy",
                      style: {
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      stylesPresetsClassNames: {
                        a: "framer-styles-preset-fsrzda",
                        code: "framer-styles-preset-14p4v3h",
                        h1: "framer-styles-preset-3nqyhf",
                        h2: "framer-styles-preset-1wml6uu",
                        h3: "framer-styles-preset-bcjq8k",
                        h4: "framer-styles-preset-11ezvfj",
                        h5: "framer-styles-preset-13oo16j",
                        h6: "framer-styles-preset-14n5412",
                        img: "framer-styles-preset-ruux4e",
                        p: "framer-styles-preset-11ut0g7",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Do = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-POWIA.framer-9ks1ko, .framer-POWIA .framer-9ks1ko { display: block; }",
    ".framer-POWIA.framer-tqm1is { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 200px; }",
    ".framer-POWIA .framer-d238ad-container { flex: none; height: 50px; position: relative; width: 50px; }",
    ".framer-POWIA .framer-1d3qt7w { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-POWIA .framer-1l8vor9, .framer-POWIA .framer-zzebyc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-POWIA.framer-tqm1is, .framer-POWIA .framer-1d3qt7w { gap: 0px; } .framer-POWIA.framer-tqm1is > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-POWIA.framer-tqm1is > :first-child { margin-left: 0px; } .framer-POWIA.framer-tqm1is > :last-child { margin-right: 0px; } .framer-POWIA .framer-1d3qt7w > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-POWIA .framer-1d3qt7w > :first-child { margin-top: 0px; } .framer-POWIA .framer-1d3qt7w > :last-child { margin-bottom: 0px; } }",
    ...Pt,
    ...Bt,
    ...Mt,
    ...ua,
    ...ba,
    ...Rt,
    ...da,
    ...Ca,
    ...va,
  ],
  wt = ne(Oo, Do, "framer-POWIA"),
  bt = wt;
wt.displayName = "Utils/Feature";
wt.defaultProps = { height: 208, width: 200 };
q(wt, {
  tXM8rNFsJ: De?.iconSelection && {
    ...De.iconSelection,
    defaultValue: "HardDrives",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  HMV4Yoe7M: {
    defaultValue:
      'var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White"} */',
    title: "Icon Color",
    type: l.Color,
  },
  KXaYyhqTQ: De?.weight && {
    ...De.weight,
    defaultValue: "thin",
    description: void 0,
    hidden: void 0,
    title: "Icon Weight",
  },
  lFSXA88cV: {
    defaultValue: "No Premine",
    displayTextArea: !1,
    title: "Title",
    type: l.String,
  },
  FXMLloUXk: {
    defaultValue:
      'var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)) /* {"name":"White/White"} */',
    title: "Title Color",
    type: l.Color,
  },
  De81Dd2tF: {
    defaultValue: '<p><br class="trailing-break"></p>',
    title: "Feature Content",
    type: l.RichText,
  },
});
ie(
  wt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...So,
    ...de(At),
    ...de(Et),
    ...de(Tt),
    ...de(ha),
    ...de(wa),
    ...de(Dt),
    ...de(fa),
    ...de(ka),
    ...de(ga),
    ...(!((Tr = mt) === null || Tr === void 0) && Tr.io8WtmkA6
      ? or((Mr = mt) === null || Mr === void 0 ? void 0 : Mr.io8WtmkA6)
      : []),
    ...(!((Fr = mt) === null || Fr === void 0) && Fr.T_j0y6EwI
      ? or((Ar = mt) === null || Ar === void 0 ? void 0 : Ar.T_j0y6EwI)
      : []),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ro = ["liy1wfekT", "pCrCNsMhJ"],
  qo = "framer-Fl5Pi",
  Eo = { liy1wfekT: "framer-v-rfldnq", pCrCNsMhJ: "framer-v-1ilpf52" };
function nn(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Bo = {
    default: {
      damping: 120,
      delay: 0,
      mass: 1,
      stiffness: 500,
      type: "spring",
    },
  },
  Uo = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  Xo = { Default: "liy1wfekT", Hovered: "pCrCNsMhJ" },
  Wo = ({ height: t, id: r, width: n, ...a }) => {
    var s, m;
    return {
      ...a,
      variant:
        (m = (s = Xo[a.variant]) !== null && s !== void 0 ? s : a.variant) !==
          null && m !== void 0
          ? m
          : "liy1wfekT",
    };
  },
  Go = (t, r) => r.join("-") + t.layoutDependency,
  Yo = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = Wo(t),
      {
        baseVariant: i,
        classNames: d,
        gestureVariant: h,
        setGestureState: p,
        setVariant: V,
        transition: x,
        variants: C,
      } = ce({
        cycleOrder: Ro,
        defaultVariant: "liy1wfekT",
        transitions: Bo,
        variant: u,
        variantClassNames: Eo,
      }),
      g = Go(t, C),
      _ = P(null),
      T = re(),
      z = [];
    return e(H, {
      id: c ?? T,
      children: e(Uo, {
        value: x,
        children: w(f.div, {
          ...v,
          animate: C,
          className: $(qo, ...z, "framer-rfldnq", m, d),
          "data-framer-name": "Default",
          initial: u,
          layoutDependency: g,
          layoutId: "liy1wfekT",
          onHoverEnd: () => p({ isHovered: !1 }),
          onHoverStart: () => p({ isHovered: !0 }),
          onTap: () => p({ isPressed: !1 }),
          onTapCancel: () => p({ isPressed: !1 }),
          onTapStart: () => p({ isPressed: !0 }),
          ref: r ?? _,
          style: { ...s },
          ...nn({ pCrCNsMhJ: { "data-framer-name": "Hovered" } }, i, h),
          children: [
            e(X, {
              className: "framer-2fjba6",
              "data-framer-name": "graphic",
              layout: "position",
              layoutDependency: g,
              layoutId: "cdu6t0jPG",
              opacity: 1,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 13"><path d="M 11 6 L 8 1 L 2 2 M 8 1 L 1 12" fill="transparent" stroke="var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240)) /* {&quot;name&quot;:&quot;Contrast&quot;} */" stroke-linejoin="round" stroke-dasharray=""></path></svg>',
              svgContentId: 1611147126,
              withExternalLayout: !0,
              ...nn({ pCrCNsMhJ: { svgContentId: 772067624 } }, i, h),
            }),
            e(f.div, {
              className: "framer-bxj80h",
              "data-framer-name": "Line",
              layoutDependency: g,
              layoutId: "ireXVjr6E",
              style: {
                backgroundColor:
                  "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
              },
            }),
          ],
        }),
      }),
    });
  }),
  Ho = [
    '.framer-Fl5Pi[data-border="true"]::after, .framer-Fl5Pi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Fl5Pi.framer-15ecoqk, .framer-Fl5Pi .framer-15ecoqk { display: block; }",
    ".framer-Fl5Pi.framer-rfldnq { height: 24px; overflow: hidden; position: relative; width: 72px; }",
    ".framer-Fl5Pi .framer-2fjba6 { flex: none; height: 13px; position: absolute; right: 20px; top: 4px; width: 12px; }",
    ".framer-Fl5Pi .framer-bxj80h { bottom: 7px; flex: none; height: 1px; overflow: visible; position: absolute; right: 31px; width: 14px; }",
    ".framer-Fl5Pi.framer-v-1ilpf52 .framer-2fjba6 { right: 0px; }",
    ".framer-Fl5Pi.framer-v-1ilpf52 .framer-bxj80h { right: 11px; width: 61px; }",
  ],
  Vt = ne(Yo, Ho, "framer-Fl5Pi"),
  Pr = Vt;
Vt.displayName = "Arrow Button/Arrow";
Vt.defaultProps = { height: 24, width: 72 };
q(Vt, {
  variant: {
    options: ["liy1wfekT", "pCrCNsMhJ"],
    optionTitles: ["Default", "Hovered"],
    title: "Variant",
    type: l.Enum,
  },
});
ie(Vt, []);
var Jo = O(ur),
  Zo = O(Pr),
  Ko = { egaOG97UN: { hover: !0 }, tfWkClnfm: { hover: !0 } },
  $o = ["tfWkClnfm", "egaOG97UN"],
  es = "framer-K293f",
  ts = { egaOG97UN: "framer-v-1gdxuwc", tfWkClnfm: "framer-v-1wbzz5a" };
function on(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var rs = { damping: 100, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  as = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  ns = f(A),
  is = { "Plain Text": "egaOG97UN", Scrambled: "tfWkClnfm" },
  os = ({
    content: t,
    height: r,
    id: n,
    link: a,
    newTab: s,
    textColor: m,
    width: c,
    ...u
  }) => {
    var v, i, d, h, p;
    return {
      ...u,
      BbUKZRWNn: a ?? u.BbUKZRWNn,
      gAzMgvtIt: (v = s ?? u.gAzMgvtIt) !== null && v !== void 0 ? v : !0,
      gHTqYbO4m:
        (i = t ?? u.gHTqYbO4m) !== null && i !== void 0
          ? i
          : "Technical Whitepaper",
      MuIfADmMF:
        (d = m ?? u.MuIfADmMF) !== null && d !== void 0
          ? d
          : "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
      variant:
        (p = (h = is[u.variant]) !== null && h !== void 0 ? h : u.variant) !==
          null && p !== void 0
          ? p
          : "tfWkClnfm",
    };
  },
  ss = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ls = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      {
        style: s,
        className: m,
        layoutId: c,
        variant: u,
        gHTqYbO4m: v,
        MuIfADmMF: i,
        BbUKZRWNn: d,
        gAzMgvtIt: h,
        ...p
      } = os(t),
      {
        baseVariant: V,
        classNames: x,
        gestureHandlers: C,
        gestureVariant: g,
        setGestureState: _,
        setVariant: T,
        variants: z,
      } = ce({
        cycleOrder: $o,
        defaultVariant: "tfWkClnfm",
        enabledGestures: Ko,
        variant: u,
        variantClassNames: ts,
      }),
      S = ss(t, z),
      N = P(null),
      j = re(),
      o = [],
      b = le();
    return e(H, {
      id: c ?? j,
      children: e(ns, {
        animate: z,
        initial: !1,
        children: e(as, {
          value: rs,
          children: e(xe, {
            href: d,
            openInNewTab: h,
            children: w(f.a, {
              ...p,
              ...C,
              className: `${$(es, ...o, "framer-1wbzz5a", m, x)} framer-v5mia5`,
              "data-framer-name": "Scrambled",
              layoutDependency: S,
              layoutId: "tfWkClnfm",
              ref: r ?? N,
              style: { ...s },
              ...on(
                {
                  "egaOG97UN-hover": { "data-framer-name": void 0 },
                  "tfWkClnfm-hover": { "data-framer-name": void 0 },
                  egaOG97UN: { "data-framer-name": "Plain Text" },
                },
                V,
                g
              ),
              children: [
                e(y, {
                  children: e(f.div, {
                    className: "framer-j0in9a-container",
                    layoutDependency: S,
                    layoutId: "oXU5O3Oa8-container",
                    children: e(ur, {
                      content: v,
                      fontFamily: '"KH Interference Regular", sans-serif',
                      fontSize:
                        "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                      height: "100%",
                      id: "oXU5O3Oa8",
                      layoutId: "oXU5O3Oa8",
                      letterSpacing: 0,
                      lineHeight: 1.5,
                      options: {
                        animSpeed: 1,
                        overdrive: !1,
                        overflow: !0,
                        playOnHover: !0,
                        playOnMount: !0,
                        scramble: 4,
                        steps: 4,
                      },
                      style: { maxWidth: "100%" },
                      tag: "div",
                      textColor: i,
                      textTransform: "uppercase",
                      width: "100%",
                    }),
                  }),
                }),
                e(y, {
                  children: e(f.div, {
                    className: "framer-ipvw9a-container",
                    layoutDependency: S,
                    layoutId: "mzMcxdlpr-container",
                    children: e(Pr, {
                      height: "100%",
                      id: "mzMcxdlpr",
                      layoutId: "mzMcxdlpr",
                      style: { height: "100%", width: "100%" },
                      variant: "liy1wfekT",
                      width: "100%",
                      ...on(
                        { "tfWkClnfm-hover": { variant: "pCrCNsMhJ" } },
                        V,
                        g
                      ),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  cs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-K293f.framer-v5mia5, .framer-K293f .framer-v5mia5 { display: block; }",
    ".framer-K293f.framer-1wbzz5a { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 220px; }",
    ".framer-K293f .framer-j0in9a-container { flex: none; height: auto; max-width: 120px; position: relative; width: auto; }",
    ".framer-K293f .framer-ipvw9a-container { flex: none; height: 24px; position: relative; width: 72px; }",
    ".framer-K293f.framer-v-1gdxuwc.framer-1wbzz5a { gap: 16px; justify-content: flex-start; width: 240px; }",
    ".framer-K293f.framer-v-1gdxuwc .framer-j0in9a-container { order: 0; }",
    ".framer-K293f.framer-v-1gdxuwc .framer-ipvw9a-container { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K293f.framer-v-1gdxuwc.framer-1wbzz5a { gap: 0px; } .framer-K293f.framer-v-1gdxuwc.framer-1wbzz5a > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-K293f.framer-v-1gdxuwc.framer-1wbzz5a > :first-child { margin-left: 0px; } .framer-K293f.framer-v-1gdxuwc.framer-1wbzz5a > :last-child { margin-right: 0px; } }",
  ],
  kt = ne(ls, cs, "framer-K293f"),
  Ct = kt;
kt.displayName = "Arrow Button/Main Copy";
kt.defaultProps = { height: 55, width: 220 };
q(kt, {
  variant: {
    options: ["tfWkClnfm", "egaOG97UN"],
    optionTitles: ["Scrambled", "Plain Text"],
    title: "Variant",
    type: l.Enum,
  },
  gHTqYbO4m: {
    defaultValue: "Technical Whitepaper",
    displayTextArea: !0,
    placeholder: "Scrambled text goes here",
    title: "Content",
    type: l.String,
  },
  MuIfADmMF: {
    defaultValue:
      'var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240)) /* {"name":"Contrast"} */',
    title: "Text Color",
    type: l.Color,
  },
  BbUKZRWNn: { title: "Link", type: l.Link },
  gAzMgvtIt: { defaultValue: !0, title: "New Tab", type: l.Boolean },
});
ie(kt, [{ explicitInter: !0, fonts: [] }, ...Jo, ...Zo], {
  supportsExplicitInterCodegen: !0,
});
var fs = [
    "qWHqe9DNA",
    "HG9nxcAQZ",
    "wnhgyNZSn",
    "qL_75vhEL",
    "ii7YQuEKs",
    "a5lmV8vcV",
  ],
  ds = "framer-q9ZXy",
  ps = {
    a5lmV8vcV: "framer-v-15s5btz",
    HG9nxcAQZ: "framer-v-13szk7s",
    ii7YQuEKs: "framer-v-1sh5xgy",
    qL_75vhEL: "framer-v-uxidwh",
    qWHqe9DNA: "framer-v-bvygqm",
    wnhgyNZSn: "framer-v-jrg22d",
  };
function sn(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var hs = { duration: 0, type: "tween" },
  ln = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  us = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  ys = f(A),
  gs = {
    Step0: "qWHqe9DNA",
    Step1: "HG9nxcAQZ",
    Step2: "wnhgyNZSn",
    Step3: "qL_75vhEL",
    Step4: "ii7YQuEKs",
    Step5: "a5lmV8vcV",
  },
  vs = ({ height: t, id: r, width: n, ...a }) => {
    var s, m;
    return {
      ...a,
      variant:
        (m = (s = gs[a.variant]) !== null && s !== void 0 ? s : a.variant) !==
          null && m !== void 0
          ? m
          : "qWHqe9DNA",
    };
  },
  xs = (t, r) => r.join("-") + t.layoutDependency,
  ws = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = vs(t),
      {
        baseVariant: i,
        classNames: d,
        gestureVariant: h,
        setGestureState: p,
        setVariant: V,
        variants: x,
      } = ce({
        cycleOrder: fs,
        defaultVariant: "qWHqe9DNA",
        variant: u,
        variantClassNames: ps,
      }),
      C = xs(t, x),
      { activeVariantCallback: g, delay: _ } = Ne(i),
      T = g(async (...B) => {
        await _(() => V("HG9nxcAQZ"), 50);
      }),
      z = g(async (...B) => {
        await _(() => V("wnhgyNZSn"), 50);
      }),
      S = g(async (...B) => {
        await _(() => V("qL_75vhEL"), 50);
      }),
      N = g(async (...B) => {
        await _(() => V("ii7YQuEKs"), 50);
      }),
      j = g(async (...B) => {
        await _(() => V("a5lmV8vcV"), 50);
      });
    $e(i, {
      a5lmV8vcV: void 0,
      default: T,
      HG9nxcAQZ: z,
      ii7YQuEKs: j,
      qL_75vhEL: N,
      wnhgyNZSn: S,
    });
    let o = P(null),
      b = re(),
      L = [],
      M = le();
    return e(H, {
      id: c ?? b,
      children: e(ys, {
        animate: x,
        initial: !1,
        children: e(us, {
          value: hs,
          ...sn({ a5lmV8vcV: { value: ln }, ii7YQuEKs: { value: ln } }, i, h),
          children: e(f.div, {
            ...v,
            className: $(ds, ...L, "framer-bvygqm", m, d),
            "data-border": !0,
            "data-framer-name": "Step0",
            "data-highlight": !0,
            layoutDependency: C,
            layoutId: "qWHqe9DNA",
            onHoverEnd: () => p({ isHovered: !1 }),
            onHoverStart: () => p({ isHovered: !0 }),
            onTap: () => p({ isPressed: !1 }),
            onTapCancel: () => p({ isPressed: !1 }),
            onTapStart: () => p({ isPressed: !0 }),
            ref: r ?? o,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              opacity: 0,
              ...s,
            },
            variants: {
              a5lmV8vcV: {
                "--border-color":
                  "var(--token-d1c6bc49-a4d7-460d-8ec2-97f80b7b859d, rgba(9, 9, 15, 0.5))",
                opacity: 1,
              },
              HG9nxcAQZ: { opacity: 1 },
              qL_75vhEL: { opacity: 1 },
            },
            ...sn(
              {
                a5lmV8vcV: {
                  "data-framer-name": "Step5",
                  "data-highlight": void 0,
                },
                HG9nxcAQZ: { "data-framer-name": "Step1" },
                ii7YQuEKs: { "data-framer-name": "Step4" },
                qL_75vhEL: { "data-framer-name": "Step3" },
                wnhgyNZSn: { "data-framer-name": "Step2" },
              },
              i,
              h
            ),
          }),
        }),
      }),
    });
  }),
  bs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-q9ZXy.framer-12b64li, .framer-q9ZXy .framer-12b64li { display: block; }",
    ".framer-q9ZXy.framer-bvygqm { height: 12px; overflow: hidden; position: relative; width: 42px; }",
    '.framer-q9ZXy[data-border="true"]::after, .framer-q9ZXy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  zt = ne(ws, bs, "framer-q9ZXy"),
  _t = zt;
zt.displayName = "LineFlicker";
zt.defaultProps = { height: 12, width: 42 };
q(zt, {
  variant: {
    options: [
      "qWHqe9DNA",
      "HG9nxcAQZ",
      "wnhgyNZSn",
      "qL_75vhEL",
      "ii7YQuEKs",
      "a5lmV8vcV",
    ],
    optionTitles: ["Step0", "Step1", "Step2", "Step3", "Step4", "Step5"],
    title: "Variant",
    type: l.Enum,
  },
});
ie(zt, [{ explicitInter: !0, fonts: [] }], {
  supportsExplicitInterCodegen: !0,
});
var ks = O(_t),
  Cs = ["na3YdsK4h", "f7lkCP8rv", "UmAc85ho2", "oSNsuWs5n"],
  zs = "framer-6cUPl",
  _s = {
    f7lkCP8rv: "framer-v-1pj9fw8",
    na3YdsK4h: "framer-v-y30d3y",
    oSNsuWs5n: "framer-v-pt0432",
    UmAc85ho2: "framer-v-bcwj4a",
  };
function Qt(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Ss = { duration: 0, type: "tween" },
  Is = ({ value: t, children: r }) => {
    let n = se(U),
      a = t ?? n.transition,
      s = J(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(U.Provider, { value: s, children: r });
  },
  Ns = f(A),
  Ls = {
    "Variant 2": "f7lkCP8rv",
    "Variant 3": "UmAc85ho2",
    "Variant 4": "oSNsuWs5n",
    Step0: "na3YdsK4h",
  },
  js = ({ height: t, id: r, width: n, ...a }) => {
    var s, m;
    return {
      ...a,
      variant:
        (m = (s = Ls[a.variant]) !== null && s !== void 0 ? s : a.variant) !==
          null && m !== void 0
          ? m
          : "na3YdsK4h",
    };
  },
  Ts = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Ms = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = js(t),
      {
        baseVariant: i,
        classNames: d,
        gestureHandlers: h,
        gestureVariant: p,
        setGestureState: V,
        setVariant: x,
        variants: C,
      } = ce({
        cycleOrder: Cs,
        defaultVariant: "na3YdsK4h",
        variant: u,
        variantClassNames: _s,
      }),
      g = Ts(t, C),
      { activeVariantCallback: _, delay: T } = Ne(i),
      z = _(async (...Z) => {
        await T(() => x("UmAc85ho2"), 200);
      }),
      S = _(async (...Z) => {
        await T(() => x("oSNsuWs5n"), 200);
      });
    $e(i, { f7lkCP8rv: z, UmAc85ho2: S });
    let N = P(null),
      j = () => !!["f7lkCP8rv", "UmAc85ho2", "oSNsuWs5n"].includes(i),
      o = () => !!["UmAc85ho2", "oSNsuWs5n"].includes(i),
      b = () => i === "oSNsuWs5n",
      L = re(),
      M = [],
      B = le();
    return e(H, {
      id: c ?? L,
      children: e(Ns, {
        animate: C,
        initial: !1,
        children: e(Is, {
          value: Ss,
          children: w(f.div, {
            ...v,
            ...h,
            className: $(zs, ...M, "framer-y30d3y", m, d),
            "data-border": !0,
            "data-framer-name": "Step0",
            layoutDependency: g,
            layoutId: "na3YdsK4h",
            ref: r ?? N,
            style: {
              "--border-bottom-width": "0px",
              "--border-color":
                "var(--token-4acb8bf0-ed98-46be-917a-9b6296c54a85, rgba(255, 255, 255, 0.05))",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              ...s,
            },
            variants: {
              f7lkCP8rv: { "--border-color": "rgba(255, 255, 255, 0)" },
              UmAc85ho2: { "--border-color": "rgba(255, 255, 255, 0)" },
            },
            ...Qt(
              {
                f7lkCP8rv: {
                  "data-framer-name": "Variant 2",
                  "data-highlight": !0,
                },
                oSNsuWs5n: { "data-framer-name": "Variant 4" },
                UmAc85ho2: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": !0,
                },
              },
              i,
              p
            ),
            children: [
              j() &&
                e(y, {
                  ...Qt(
                    {
                      f7lkCP8rv: { width: "42px" },
                      oSNsuWs5n: { width: "42px" },
                      UmAc85ho2: { width: "42px" },
                    },
                    i,
                    p
                  ),
                  children: e(f.div, {
                    className: "framer-6k4tpw-container",
                    layoutDependency: g,
                    layoutId: "gMhiWB6mW-container",
                    children: e(_t, {
                      height: "100%",
                      id: "gMhiWB6mW",
                      layoutId: "gMhiWB6mW",
                      style: { height: "100%", width: "100%" },
                      variant: "qWHqe9DNA",
                      width: "100%",
                    }),
                  }),
                }),
              o() &&
                e(y, {
                  ...Qt(
                    {
                      oSNsuWs5n: { width: "42px" },
                      UmAc85ho2: { width: "42px" },
                    },
                    i,
                    p
                  ),
                  children: e(f.div, {
                    className: "framer-c89304-container",
                    layoutDependency: g,
                    layoutId: "VZMMprjbZ-container",
                    children: e(_t, {
                      height: "100%",
                      id: "VZMMprjbZ",
                      layoutId: "VZMMprjbZ",
                      style: { height: "100%", width: "100%" },
                      variant: "qWHqe9DNA",
                      width: "100%",
                    }),
                  }),
                }),
              b() &&
                e(y, {
                  ...Qt({ oSNsuWs5n: { width: "42px" } }, i, p),
                  children: e(f.div, {
                    className: "framer-5v8sl-container",
                    layoutDependency: g,
                    layoutId: "MQLrcBUgv-container",
                    children: e(_t, {
                      height: "100%",
                      id: "MQLrcBUgv",
                      layoutId: "MQLrcBUgv",
                      style: { height: "100%", width: "100%" },
                      variant: "qWHqe9DNA",
                      width: "100%",
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Fs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-6cUPl.framer-1192bc7, .framer-6cUPl .framer-1192bc7 { display: block; }",
    ".framer-6cUPl.framer-y30d3y { height: 123px; overflow: visible; position: relative; width: 536px; }",
    ".framer-6cUPl .framer-6k4tpw-container { flex: none; height: 12px; left: 0px; position: absolute; top: 0px; width: 42px; z-index: 2; }",
    ".framer-6cUPl .framer-c89304-container { flex: none; height: 12px; left: calc(50.00000000000002% - 42px / 2); position: absolute; top: 0px; width: 42px; z-index: 2; }",
    ".framer-6cUPl .framer-5v8sl-container { flex: none; height: 12px; position: absolute; right: 0px; top: 0px; width: 42px; z-index: 2; }",
    '.framer-6cUPl[data-border="true"]::after, .framer-6cUPl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  St = ne(Ms, Fs, "framer-6cUPl"),
  Or = St;
St.displayName = "Line Divider Copy";
St.defaultProps = { height: 123, width: 536 };
q(St, {
  variant: {
    options: ["na3YdsK4h", "f7lkCP8rv", "UmAc85ho2", "oSNsuWs5n"],
    optionTitles: ["Step0", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: l.Enum,
  },
});
ie(St, [{ explicitInter: !0, fonts: [] }, ...ks], {
  supportsExplicitInterCodegen: !0,
});
function st(t) {
  let r = ue.current() === ue.canvas;
  return e(
    ({ text: a }) => {
      let s = a.split(" "),
        m = (d) => d * d,
        c = [0.65, 0, 1, 1],
        u = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              repeatType: "mirror",
              repeat: t.animRepeat,
              ease: c,
              duration: t.animDuration,
            },
          },
        },
        v = {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05, delayChildren: t.animDelay },
          },
        },
        i = {
          display: "inline-flex",
          fontFamily: "inherit",
          color: t.textColor,
          margin: "0 2px",
          fontSize: t.fontSize,
          lineHeight: 1.6,
        };
      return e(f.div, {
        initial: r ? "visible" : "hidden",
        whileInView: "visible",
        variants: v,
        viewport: { once: !0 },
        children: s.map((d, h) =>
          e(f.span, { variants: u, style: i, children: d }, h)
        ),
      });
    },
    { text: t.content }
  );
}
st.defaultProps = {
  content: "Blinker text goes here",
  textColor: "#aaa",
  letterSpace: 0,
  animDelay: 0,
  animDuration: 0.4,
  animStagger: 0.05,
  animRepeat: 4,
  repeatType: "reverse",
  fontSize: "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
};
q(st, {
  content: {
    type: l.String,
    title: "Content",
    placeholder: "Blinker content",
    displayTextArea: !0,
  },
  fontSize: {
    type: l.Enum,
    title: "Font Size",
    defaultValue: "S",
    options: [
      "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
      "clamp(2.625rem,calc(2.625rem + ((1vw - .48rem)*8.4135)),3.25rem)",
      "clamp(2.5rem,2.5rem + ((1vw - .2rem)*3.11),5rem)",
    ],
    optionTitles: ["S", "XL", "XXL"],
  },
  letterSpace: { type: l.Number, title: "Letter", min: -10, max: 20, step: 1 },
  animDelay: { type: l.Number, title: "Delay", min: 0, max: 20, step: 0.05 },
  animDuration: {
    type: l.Number,
    title: "Duration",
    min: 0,
    max: 20,
    step: 0.05,
  },
  animStagger: {
    type: l.Number,
    title: "Stagger",
    min: 0,
    max: 20,
    step: 0.05,
  },
  animRepeat: { type: l.Number, title: "Repeat", min: 0, max: 40, step: 1 },
  repeatType: {
    type: l.Enum,
    title: "Direction",
    defaultValue: "reverse",
    options: ["reverse", "mirror", "loop"],
    optionTitles: ["Revers", "Mirror", "Loop"],
  },
  textColor: { type: l.Color, title: "Text color" },
});
function Se(t) {
  let r = ue.current() === ue.canvas;
  return e(
    ({ text: a }) => {
      let s = a.split(" "),
        m = (d) => d * d,
        c = [0.65, 0, 1, 1],
        u = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              repeatType: "mirror",
              repeat: t.animRepeat,
              ease: c,
              duration: t.animDuration,
            },
          },
        },
        v = {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05, delayChildren: t.animDelay },
          },
        },
        i = {
          display: "inline-flex",
          fontFamily: "inherit",
          color: t.textColor,
          margin: "0 2px",
          fontSize: t.fontSize,
          lineHeight: 1.6,
        };
      return e(f.div, {
        initial: r ? "visible" : "hidden",
        whileInView: "visible",
        variants: v,
        viewport: { once: !0 },
        children: s.map((d, h) =>
          e(f.span, { variants: u, style: i, children: d }, h)
        ),
      });
    },
    { text: t.content }
  );
}
Se.defaultProps = {
  content: "Blinker text goes here",
  textColor: "#aaa",
  letterSpace: 0,
  animDelay: 0,
  animDuration: 0.4,
  animStagger: 0.05,
  animRepeat: 4,
  repeatType: "reverse",
  fontSize: "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
};
q(Se, {
  content: {
    type: l.String,
    title: "Content",
    placeholder: "Blinker content",
    displayTextArea: !0,
  },
  fontSize: {
    type: l.Enum,
    title: "Font Size",
    defaultValue: "S",
    options: [
      "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
      "clamp(2.625rem,calc(2.625rem + ((1vw - .48rem)*8.4135)),3.25rem)",
      "clamp(2.5rem,2.5rem + ((1vw - .2rem)*3.11),5rem)",
    ],
    optionTitles: ["S", "XL", "XXL"],
  },
  letterSpace: { type: l.Number, title: "Letter", min: -10, max: 20, step: 1 },
  animDelay: { type: l.Number, title: "Delay", min: 0, max: 20, step: 0.05 },
  animDuration: {
    type: l.Number,
    title: "Duration",
    min: 0,
    max: 20,
    step: 0.05,
  },
  animStagger: {
    type: l.Number,
    title: "Stagger",
    min: 0,
    max: 20,
    step: 0.05,
  },
  animRepeat: { type: l.Number, title: "Repeat", min: 0, max: 40, step: 1 },
  repeatType: {
    type: l.Enum,
    title: "Direction",
    defaultValue: "reverse",
    options: ["reverse", "mirror", "loop"],
    optionTitles: ["Revers", "Mirror", "Loop"],
  },
  textColor: { type: l.Color, title: "Text color" },
});
function lt(t) {
  let r = ue.current() === ue.canvas;
  return e(f.div, {
    ...t,
    className: "dandikko",
    initial: {
      width: t.baseWidth,
      backgroundImage: r
        ? "none"
        : "linear-gradient(90deg, #070713 50%, rgba(7, 17, 19, 0) 100%)",
    },
    whileInView: {
      backgroundImage: r
        ? "none"
        : "linear-gradient(45deg, #070713 10%, rgba(7, 17, 19, 0) 50%)",
      width: "50%",
      x: "-90%",
    },
    transition: { duration: t.duration, delay: t.delay },
    transitionEnd: { zIndex: -1 },
    exit: "hidden",
    viewport: { once: !0 },
  });
}
q(lt, {
  baseWidth: { title: "Initial Width", type: l.String },
  duration: { title: "Duration", type: l.Number },
  delay: { title: "Delay", type: l.Number },
});
lt.defaultProps = { delay: 0, duration: 1, baseWidth: "1000px" };
var As = O(tt),
  Ps = O(xr),
  Os = O(et),
  Ds = O(Nr),
  Rs = ct(Nr),
  qs = O(wr),
  Es = ct(wr),
  Bs = O(yr),
  Qe = ct(yr),
  Us = O(ge),
  Xs = O(Ye),
  Ws = O(Ae),
  Gs = O(ot),
  Ys = O(nt),
  cn = ir(f.div),
  Hs = O(Xt),
  Qs = O(Se),
  Dr = _a(f.div),
  Js = Aa(f.div),
  Zs = O(He),
  Ks = O(Or),
  $s = ct(Or),
  el = O(jr),
  tl = tn(f.div),
  rl = O(lt),
  al = O(bt),
  Rr = ir(k),
  nl = O(st),
  il = O(Ct),
  ol = O(Ge),
  sl = O(vr),
  ll = ca(f.div),
  cl = {
    gBDphNyak: "(min-width: 810px) and (max-width: 1159px)",
    n7hTsqoJF: "(min-width: 1160px)",
    OQjYGxmh9: "(max-width: 809px)",
  },
  Jt = () => typeof document < "u",
  ml = "framer-zV8vy",
  fl = {
    gBDphNyak: "framer-v-39p896",
    n7hTsqoJF: "framer-v-t0i8jj",
    OQjYGxmh9: "framer-v-uakywc",
  },
  dn = { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 10 },
  pn = { bounce: 0, delay: 0.075, duration: 1.2, type: "spring" },
  dl = {
    effect: dn,
    tokenization: "word",
    transition: pn,
    trigger: "onMount",
    type: "appear",
  },
  pl = {
    effect: dn,
    repeat: !1,
    startDelay: 0,
    tokenization: "word",
    transition: pn,
    trigger: "onMount",
    type: "appear",
  },
  mn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 50,
  },
  Br = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: "tween" },
  fn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Br,
    x: 0,
    y: 50,
  },
  qr = (t, r) => `translate(-50%, -50%) ${r}`,
  hl = (t, r) => `translateY(-50%) ${r}`,
  Er = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 30,
  },
  hn = { damping: 90, delay: 0.1, mass: 0.5, stiffness: 600, type: "spring" },
  ul = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: hn,
    x: 0,
    y: 30,
  },
  un = { damping: 90, delay: 0.2, mass: 0.5, stiffness: 600, type: "spring" },
  yl = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: un,
    x: 0,
    y: 30,
  },
  yn = { damping: 90, delay: 0.3, mass: 0.5, stiffness: 600, type: "spring" },
  gl = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: yn,
    x: 0,
    y: 30,
  },
  vl = { delay: 2, duration: 0.75, ease: [0.44, 0, 0.56, 1], type: "tween" },
  xl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: vl,
    x: 0,
    y: 0,
  },
  wl = {
    opacity: 0.001,
    rotate: 0,
    rotateX: -45,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  bl = ({ value: t }) =>
    la() ? null : e("style", { dangerouslySetInnerHTML: { __html: t } }),
  Vl = { Desktop: "n7hTsqoJF", Phone: "OQjYGxmh9", Tablet: "gBDphNyak" },
  kl = ({ height: t, id: r, width: n, ...a }) => ({
    ...a,
    variant: Vl[a.variant] ?? a.variant ?? "n7hTsqoJF",
  }),
  Cl = te(function (t, r) {
    let { activeLocale: n, setLocale: a } = ae(),
      { style: s, className: m, layoutId: c, variant: u, ...v } = kl(t);
    he(() => {
      let b = br(void 0, n);
      if (b.robots) {
        let L = document.querySelector('meta[name="robots"]');
        L
          ? L.setAttribute("content", b.robots)
          : ((L = document.createElement("meta")),
            L.setAttribute("name", "robots"),
            L.setAttribute("content", b.robots),
            document.head.appendChild(L));
      }
    }, [void 0, n]),
      Hr(() => {
        let b = br(void 0, n);
        (document.title = b.title || ""),
          b.viewport &&
            document
              .querySelector('meta[name="viewport"]')
              ?.setAttribute("content", b.viewport);
      }, [void 0, n]);
    let [i, d] = ma(u, cl, !1),
      h = void 0,
      V = $(ml, ...[Ut, qt, Ft, Na, Ot]),
      x = P(null),
      C = () => (Jt() ? i !== "OQjYGxmh9" : !0),
      g = () => (Jt() ? i !== "gBDphNyak" : !0),
      _ = ta(),
      T = () => !Jt() || i === "OQjYGxmh9",
      z = () => (Jt() ? !["OQjYGxmh9", "gBDphNyak"].includes(i) : !0),
      S = ra("uMvA56Q6I"),
      N = P(null),
      j = re();
    oa({});
    let o = le();
    return e(sa.Provider, {
      value: { primaryVariantId: "n7hTsqoJF", variantClassNames: fl },
      children: w(H, {
        id: c ?? j,
        children: [
          w(f.div, {
            ...v,
            className: $(V, "framer-t0i8jj", m),
            ref: r ?? x,
            style: { ...s },
            children: [
              w("div", {
                className: "framer-1y2gw06",
                "data-framer-name": "Site Mask",
                children: [
                  e(f.div, {
                    className: "framer-u47l4",
                    "data-border": !0,
                    "data-framer-name": "Site Line",
                    style: { rotate: 180 },
                  }),
                  e(y, {
                    height: 36,
                    width: "36px",
                    y: 964,
                    children: e(k, {
                      className: "framer-ik6mia-container",
                      style: { rotate: 180 },
                      children: e(tt, {
                        height: "100%",
                        id: "yQ8pxN1f8",
                        layoutId: "yQ8pxN1f8",
                        style: { height: "100%", width: "100%" },
                        variant: "NqmVZdr1V",
                        width: "100%",
                      }),
                    }),
                  }),
                  e(y, {
                    height: 36,
                    width: "36px",
                    y: 0,
                    children: e(k, {
                      className: "framer-hm6fa1-container",
                      style: { rotate: 90 },
                      children: e(tt, {
                        height: "100%",
                        id: "YENgA1gBL",
                        layoutId: "YENgA1gBL",
                        style: { height: "100%", width: "100%" },
                        variant: "NqmVZdr1V",
                        width: "100%",
                      }),
                    }),
                  }),
                  e(y, {
                    height: 36,
                    width: "36px",
                    y: 964,
                    children: e(k, {
                      className: "framer-38hq93-container",
                      style: { rotate: -90 },
                      children: e(tt, {
                        height: "100%",
                        id: "apkPuELkL",
                        layoutId: "apkPuELkL",
                        style: { height: "100%", width: "100%" },
                        variant: "NqmVZdr1V",
                        width: "100%",
                      }),
                    }),
                  }),
                  e("div", {
                    className: "framer-192mf81",
                    "data-border": !0,
                    "data-framer-name": "Site Line",
                  }),
                  e(y, {
                    height: 36,
                    width: "36px",
                    y: 0,
                    children: e(k, {
                      className: "framer-mf8anu-container",
                      children: e(tt, {
                        height: "100%",
                        id: "hHIo9TSQ6",
                        layoutId: "hHIo9TSQ6",
                        style: { height: "100%", width: "100%" },
                        variant: "NqmVZdr1V",
                        width: "100%",
                      }),
                    }),
                  }),
                  e("div", { className: "framer-1aaxrfx", "data-border": !0 }),
                  e("div", { className: "framer-um19jf", "data-border": !0 }),
                ],
              }),
              e(F, {
                breakpoint: i,
                overrides: {
                  gBDphNyak: {
                    width: `calc(${o?.width || "100vw"} - 356px)`,
                    y: (o?.y || 0) + 36,
                  },
                  OQjYGxmh9: {
                    width: `calc(${o?.width || "100vw"} - 48px)`,
                    y: (o?.y || 0) + 36,
                  },
                },
                children: e(y, {
                  height: 37,
                  width: "740px",
                  y: (o?.y || 0) + 54,
                  children: e(k, {
                    className: "framer-v9kp3w-container",
                    children: e(F, {
                      breakpoint: i,
                      overrides: {
                        gBDphNyak: {
                          style: { width: "100%" },
                          variant: "nmHb2oefw",
                        },
                        OQjYGxmh9: {
                          style: { width: "100%" },
                          variant: "nmHb2oefw",
                        },
                      },
                      children: e(xr, {
                        height: "100%",
                        id: "guLbDurqB",
                        layoutId: "guLbDurqB",
                        style: { height: "100%", width: "100%" },
                        variant: "lTeZvmy7i",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              }),
              C() &&
                e(xe, {
                  href: "https://app.dynexai.pro/",
                  nodeId: "HJFjQyFJR",
                  children: e(Xe, {
                    as: "a",
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 176,
                      intrinsicWidth: 439,
                      loading: We(23),
                      pixelHeight: 352,
                      pixelWidth: 878,
                      sizes: "325px",
                      src: "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512",
                      srcSet:
                        "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png 652w",
                    },
                    className: "framer-1d1aoep hidden-uakywc framer-yttz9e",
                    "data-framer-name": "PrimeLink",
                  }),
                }),
              w("div", {
                className: "framer-823ko4",
                "data-framer-name": "Main Container",
                children: [
                  w("div", {
                    className: "framer-15aba18",
                    "data-framer-name": "Center Container",
                    children: [
                      w("div", {
                        className: "framer-2bu7dt",
                        "data-framer-name": "Hero",
                        children: [
                          e(F, {
                            breakpoint: i,
                            overrides: {
                              gBDphNyak: {
                                width: `calc(min(max(${
                                  o?.width || "100vw"
                                }, 1px), 1680px) - 128px)`,
                              },
                              OQjYGxmh9: {
                                width: `calc(min(${
                                  o?.width || "100vw"
                                }, 1680px) - 88px)`,
                                y: void 0,
                              },
                            },
                            children: e(y, {
                              height: 120,
                              width: `calc(min(max(${
                                o?.width || "100vw"
                              }, 1px), 1680px) - 256px)`,
                              y: (o?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                              children: e(k, {
                                className: "framer-1mgotue-container",
                                children: e(et, {
                                  height: "100%",
                                  id: "WTAnhV2Xq",
                                  layoutId: "WTAnhV2Xq",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1jq6fq8",
                            "data-framer-name": "Hero Text",
                            children: w("div", {
                              className: "framer-108y5t3",
                              "data-framer-name": "Main Title",
                              children: [
                                C() &&
                                  e(y, {
                                    height: 162,
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      184 +
                                      0 +
                                      0 +
                                      970 -
                                      236,
                                    children: e(k, {
                                      className:
                                        "framer-lmhikq-container hidden-uakywc",
                                      "data-framer-name": "Top Anim Line",
                                      name: "Top Anim Line",
                                      children: e(Rs, {
                                        __framer__animateOnce: !0,
                                        __framer__obscuredVariantId:
                                          "Ly8_edRTr",
                                        __framer__threshold: 0,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "rLl3ib_qp",
                                        height: "100%",
                                        id: "Yp7TC1iA1",
                                        layoutId: "Yp7TC1iA1",
                                        name: "Top Anim Line",
                                        variant: "rLl3ib_qp",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                C() &&
                                  e(y, {
                                    height: 162,
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      184 +
                                      0 +
                                      0 +
                                      970 -
                                      -29,
                                    children: e(k, {
                                      className:
                                        "framer-9f4vx8-container hidden-uakywc",
                                      children: e(Es, {
                                        __framer__animateOnce: !0,
                                        __framer__obscuredVariantId:
                                          "AttdsrPJ4",
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "KLjtiYO1h",
                                        height: "100%",
                                        id: "ArTcWtgh1",
                                        layoutId: "ArTcWtgh1",
                                        variant: "KLjtiYO1h",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                C() &&
                                  w("div", {
                                    className: "framer-1xa1i95 hidden-uakywc",
                                    "data-framer-name": "Title",
                                    children: [
                                      g() &&
                                        e(y, {
                                          height: 28,
                                          width: "32px",
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            184 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            16,
                                          children: e(k, {
                                            className:
                                              "framer-1j84cch-container hidden-39p896",
                                            children: e(Qe, {
                                              __framer__animateOnce: !1,
                                              __framer__obscuredVariantId:
                                                "VW28iYURk",
                                              __framer__threshold: 0,
                                              __framer__variantAppearEffectEnabled:
                                                !0,
                                              __framer__visibleVariantId:
                                                "XFISgv28f",
                                              height: "100%",
                                              id: "SRpRc_iqm",
                                              layoutId: "SRpRc_iqm",
                                              SJurDrY8F: " 001",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                              },
                                              variant: "ABRDpYIdI",
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      e(y, {
                                        children: e(k, {
                                          className: "framer-3i14w3-container",
                                          children: e(ge, {
                                            animDelay: 0,
                                            animDuration: 0.3,
                                            animRepeat: 3,
                                            animStagger: 0.05,
                                            content: "The quantum",
                                            fontSize:
                                              "clamp(2.4rem,2.4rem + ((1vw - .2rem)*3.11),5rem)",
                                            fontWeight: 600,
                                            height: "100%",
                                            id: "oU4JiXiVa",
                                            layoutId: "oU4JiXiVa",
                                            letterSpace: -2,
                                            repeatType: "loop",
                                            textBorder: "1px",
                                            textColor:
                                              "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(y, {
                                        children: e(k, {
                                          className: "framer-1cvri-container",
                                          children: e(ge, {
                                            animDelay: 0.3,
                                            animDuration: 0.1,
                                            animRepeat: 8,
                                            animStagger: 0.05,
                                            content: "currency is",
                                            fontSize:
                                              "clamp(2.4rem,2.4rem + ((1vw - .2rem)*3.11),5rem)",
                                            fontWeight: 600,
                                            height: "100%",
                                            id: "BrIPL5nrd",
                                            layoutId: "BrIPL5nrd",
                                            letterSpace: -2,
                                            repeatType: "mirror",
                                            style: { width: "100%" },
                                            textBorder: "1px",
                                            textColor:
                                              "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                      e(y, {
                                        children: e(k, {
                                          className: "framer-17mv17k-container",
                                          children: e(ge, {
                                            animDelay: 0.6,
                                            animDuration: 0.05,
                                            animRepeat: 4,
                                            animStagger: 0.05,
                                            content: "Dynex (DNX)",
                                            fontSize:
                                              "clamp(2.4rem,2.4rem + ((1vw - .2rem)*3.11),5rem)",
                                            fontWeight: 600,
                                            height: "100%",
                                            id: "LDeCBcEn8",
                                            layoutId: "LDeCBcEn8",
                                            letterSpace: -2,
                                            repeatType: "mirror",
                                            textBorder: "1px",
                                            textColor:
                                              "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                e(y, {
                                  children: e(k, {
                                    className: "framer-1a3zth7-container",
                                    children: e(Ye, {
                                      color:
                                        "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                      effectOptions: {
                                        opacity: 0,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        x: 0,
                                        y: 20,
                                      },
                                      font: {
                                        font: '"KH Teka Regular", sans-serif',
                                        fontSize: 18,
                                        fontWeight: 400,
                                        letterSpacing: 0,
                                        lineHeight: 1.6,
                                        lineHeightPixels: 100,
                                        lineHeightType: !0,
                                        offset: 0,
                                        textAlign: "left",
                                        whiteSpace: "normal",
                                      },
                                      height: "100%",
                                      id: "VVV0u2fhH",
                                      layoutId: "VVV0u2fhH",
                                      overflow: !1,
                                      perWord: !1,
                                      stagger: 0.015,
                                      style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                      },
                                      text: "The Dynex decentralized network is constructed on a distinctive, adaptable blockchain system that harnesses the parallel processing power of multiple GPUs. This distinguishes Dynex as a leader in Quantum-as-a-Service technology solving real-world problems at scale.",
                                      transitionOptions: {
                                        delay: 0.5,
                                        duration: 0.5,
                                        ease: [0.12, 0.23, 0.5, 1],
                                        type: "tween",
                                      },
                                      type: "word",
                                      variant: !0,
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                w("div", {
                                  className: "framer-17khacz",
                                  children: [
                                    e(Fe, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: {
                                              pNMeoxCGX: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                            },
                                            unresolvedPathSlugs: {
                                              pNMeoxCGX: {
                                                collectionId: "Ky33JdLXg",
                                                collectionItemId: "w3GZycm83",
                                              },
                                            },
                                            webPageId: "F8eGhiphC",
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                       
                                      ],
                                      children: (b) =>
                                        e(F, {
                                          breakpoint: i,
                                          overrides: {
                                            OQjYGxmh9: { y: void 0 },
                                          },
                                          children: e(y, {
                                            height: 42,
                                            y:
                                              (o?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              184 +
                                              0 +
                                              0 +
                                              0 +
                                              928 +
                                              0,
                                            children: e(k, {
                                              className:
                                                "framer-66rai2-container",         
                                              children: e(F, {
                                                breakpoint: i,
                                                overrides: {
                                                  gBDphNyak: {
                                                    PWiTIKmkB: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                                  },
                                                  OQjYGxmh9: {
                                                    PWiTIKmkB: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                                  },
                                                },
                                                children: e(Ae, {
                                                  height: "100%",
                                                  id: "Zr4PaXiAr",
                                                  layoutId: "Zr4PaXiAr",
                                                  OxvVnM9Vj: !0,
                                                  PWiTIKmkB: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon",
                                                  QVxRnsVaA: "BUY NOW",
                                                  SLOdxAGFe: "ArrowRight",
                                                  width: "100%",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    
                                    
                                    
                                  ],
                                }),
                                T() &&
                                  w("div", {
                                    className:
                                      "framer-xcicge hidden-t0i8jj hidden-39p896",
                                    "data-framer-name": "Title Mobile",
                                    children: [
                                      e(ee, {
                                        __fromCanvasComponent: !0,
                                        children: e(A, {
                                          children: e("h1", {
                                            className:
                                              "framer-styles-preset-3nqyhf",
                                            "data-styles-preset": "YAP816Y5n",
                                            style: {
                                              "--framer-text-color":
                                                "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                            },
                                            children: "Dynex (DNX)",
                                          }),
                                        }),
                                        className: "framer-c473q7",
                                        effect: dl,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(ee, {
                                        __fromCanvasComponent: !0,
                                        children: e(A, {
                                          children: e("h1", {
                                            className:
                                              "framer-styles-preset-3nqyhf",
                                            "data-styles-preset": "YAP816Y5n",
                                            children: "The Quantum currency is",
                                          }),
                                        }),
                                        className: "framer-mc2vo0",
                                        effect: pl,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      e(cn, {
                        __framer__animate: { transition: Br },
                        __framer__animateOnce: !0,
                        __framer__enter: mn,
                        __framer__exit: fn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-ucrytk",
                        "data-framer-name": "As SeenOn",
                        style: { transformPerspective: 1200 },
                        children: e("div", {
                          className: "framer-1j1s0nw",
                          children: w("div", {
                            className: "framer-1ws0381",
                            children: [
                              w("div", {
                                className: "framer-1un7ak7",
                                "data-framer-name": "As Seen On",
                                children: [
                                  e(ee, {
                                    __fromCanvasComponent: !0,
                                    children: e(A, {
                                      children: e("h5", {
                                        className:
                                          "framer-styles-preset-13oo16j",
                                        "data-styles-preset": "HEBrRXCOO",
                                        children: "As Seen On",
                                      }),
                                    }),
                                    className: "framer-ez85uc",
                                    fonts: ["Inter"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  e("div", {
                                    className: "framer-11p8t5y",
                                    "data-framer-name": "Left",
                                    children: e(X, {
                                      className: "framer-p982my",
                                      "data-framer-name": "Left",
                                      layout: "position",
                                      opacity: 1,
                                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 173 27"><path d="M 173 1 L 40 1 C 26.653 1 23.994 4.045 22.5 5.5 L 1 26" fill="transparent" stroke="var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(58, 62, 79)) /* {&quot;name&quot;:&quot;Border&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 173 1 L 136.672 1" fill="transparent" stroke="var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250)) /* {&quot;name&quot;:&quot;Dynex Blue&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                      svgContentId: 10823869896,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-2detj7",
                                    "data-framer-name": "Right",
                                    children: e(X, {
                                      className: "framer-18b1b8o",
                                      "data-framer-name": "Right",
                                      layout: "position",
                                      opacity: 1,
                                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 173 27"><path d="M 1 1 L 136 1 C 145.606 1 150.006 4.045 151.5 5.5 L 173 26" fill="transparent" stroke="var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(61, 63, 71)) /* {&quot;name&quot;:&quot;Border&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 36 1 L -0.328 1" fill="transparent" stroke="var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250)) /* {&quot;name&quot;:&quot;Dynex Blue&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                      svgContentId: 10384646714,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              e(y, {
                                children: e(k, {
                                  className: "framer-jneabt-container",
                                  children: e(nt, {
                                    alignment: "center",
                                    direction: "left",
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !0,
                                      fadeInset: 0,
                                      fadeWidth: 25,
                                      overflow: !1,
                                    },
                                    gap: 60,
                                    height: "100%",
                                    hoverFactor: 1,
                                    id: "LyhSBWcCK",
                                    layoutId: "LyhSBWcCK",
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    sizingOptions: {
                                      heightType: !0,
                                      widthType: !0,
                                    },
                                    slots: [
                                      e(xe, {
                                        href: "https://www.youtube.com/watch?v=kYrYImqwj4I",
                                        nodeId: "Zj4ZGuswU",
                                        children: e(f.a, {
                                          className:
                                            "framer-3wwmq7 framer-yttz9e",
                                          "data-framer-name": "Bloomberg",
                                          children: e(X, {
                                            className: "framer-vm1z4t",
                                            "data-framer-name": "graphic",
                                            layout: "position",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 216.5 40"><path d="M 0 0 L 15.872 0 C 18.895 0 21.163 0.758 22.842 2.021 C 24.69 3.537 25.699 5.726 25.699 8.421 C 25.699 11.537 24.438 13.473 21.918 14.652 L 21.918 14.82 C 25.278 15.915 27.209 18.947 27.209 22.568 C 27.209 26.02 25.866 28.714 23.683 30.398 C 21.834 31.746 19.483 32.335 16.292 32.335 L 0 32.335 Z M 14.277 12.631 C 15.956 12.631 17.216 11.705 17.216 9.768 C 17.216 7.915 15.956 6.989 14.193 6.989 L 8.734 6.989 L 8.734 12.548 L 14.277 12.548 Z M 15.033 25.178 C 16.964 25.178 18.392 23.998 18.392 21.894 C 18.392 19.62 16.88 18.609 15.033 18.609 L 8.818 18.609 L 8.818 25.262 L 15.033 25.262 L 15.033 25.178 Z M 28.637 0 L 36.952 0 L 36.952 32.419 L 28.636 32.419 L 28.636 0 Z M 38.631 20.883 C 38.631 13.557 43.333 8.673 50.64 8.673 C 57.946 8.673 62.564 13.642 62.564 20.883 C 62.564 28.208 57.946 33.093 50.64 33.093 C 43.333 33.093 38.631 28.209 38.631 20.883 Z M 54.251 20.883 C 54.251 16.842 52.992 14.315 50.472 14.315 C 47.952 14.315 46.776 16.841 46.776 20.883 C 46.776 24.925 47.952 27.535 50.472 27.535 C 52.992 27.452 54.251 24.925 54.251 20.883 Z M 63.489 20.883 C 63.489 13.557 68.192 8.673 75.498 8.673 C 82.804 8.673 87.339 13.557 87.339 20.883 C 87.339 28.208 82.72 33.093 75.414 33.093 C 68.192 33.093 63.489 28.209 63.489 20.883 Z M 79.109 20.883 C 79.109 16.842 77.849 14.315 75.33 14.315 C 72.811 14.315 71.635 16.841 71.635 20.883 C 71.635 24.925 72.811 27.535 75.33 27.535 C 77.849 27.452 79.109 24.925 79.109 20.883 Z M 89.019 9.262 L 96.745 9.262 L 96.745 12.715 L 96.913 12.715 C 98.424 10.021 100.523 8.589 103.883 8.589 C 106.823 8.589 109.006 10.021 110.098 12.547 L 110.265 12.547 C 112.113 9.515 114.548 8.589 117.404 8.589 C 122.779 8.589 125.046 12.547 125.046 17.852 L 125.046 32.335 L 116.984 32.335 L 116.984 19.283 C 116.984 16.925 116.228 15.41 114.213 15.41 C 112.197 15.41 111.189 17.262 111.189 19.788 L 111.189 32.335 L 103.127 32.335 L 103.127 19.283 C 103.127 16.925 102.371 15.41 100.356 15.41 C 98.34 15.41 97.333 17.262 97.333 19.788 L 97.333 32.335 L 89.019 32.335 Z M 135.208 29.303 L 135.123 29.303 L 135.123 32.335 L 127.398 32.335 L 127.398 0 L 135.459 0 L 135.459 11.621 L 135.627 11.621 C 137.139 9.599 139.239 8.504 142.178 8.504 C 147.973 8.504 151.332 13.726 151.332 20.715 C 151.332 28.546 147.72 33.093 141.674 33.093 C 139.155 33.093 136.552 31.914 135.208 29.303 Z M 143.017 20.631 C 143.017 16.925 141.674 14.483 139.239 14.483 C 136.719 14.483 135.208 16.925 135.208 20.631 C 135.208 24.336 136.803 26.778 139.239 26.778 C 141.674 26.778 143.017 24.419 143.017 20.631 Z M 152.255 20.799 C 152.255 13.557 157.042 8.589 163.929 8.589 C 167.372 8.589 169.975 9.683 171.991 11.621 C 174.678 14.231 175.854 18.272 175.77 22.988 L 160.317 22.988 C 160.654 25.852 161.997 27.367 164.433 27.367 C 165.86 27.367 167.12 26.693 167.623 25.177 L 175.434 25.177 C 174.09 30.482 169.975 33.093 164.18 33.093 C 157.042 33.009 152.255 28.125 152.255 20.799 Z M 160.317 18.358 L 167.708 18.358 C 167.54 15.578 166.028 14.147 164.097 14.147 C 161.829 14.063 160.57 15.663 160.317 18.357 Z M 184.923 13.22 L 185.092 13.22 C 186.771 10.02 188.955 8.757 191.726 8.757 C 192.398 8.757 192.817 8.842 193.07 9.01 L 193.07 16.083 L 192.901 16.083 C 188.115 15.242 185.343 17.515 185.343 22.736 L 185.343 32.419 L 177.198 32.419 L 177.198 9.262 L 184.923 9.262 L 184.923 13.221 Z M 193.909 32.419 L 201.72 32.419 C 202.055 33.43 203.063 34.356 204.995 34.356 C 207.599 34.356 208.522 32.756 208.522 30.314 L 208.522 28.631 L 208.354 28.631 C 207.094 30.146 205.331 31.241 202.811 31.241 C 197.857 31.241 193.489 27.535 193.489 20.293 C 193.489 13.642 197.017 8.505 202.392 8.505 C 205.498 8.505 207.346 9.768 208.606 11.705 L 208.774 11.705 L 208.774 9.178 L 216.5 9.178 L 216.5 29.22 C 216.5 32.925 215.24 35.788 213.309 37.472 C 211.293 39.24 208.438 39.998 205.163 39.998 C 198.949 40.082 194.665 37.557 193.909 32.419 Z M 208.858 19.957 C 208.858 17.094 207.514 14.736 205.163 14.736 C 202.895 14.736 201.467 16.757 201.467 19.957 C 201.467 23.072 202.895 25.262 205.163 25.262 C 207.43 25.262 208.858 22.988 208.858 19.957 Z" fill="rgb(255,255,255)"></path></svg>',
                                            svgContentId: 9156053710,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      e(xe, {
                                        href: "https://www.newtothestreet.com/decentralized-supercomputing-dynexs-crypto-dnx-dnx-interview-with-clifford-mapp-an-independent-technology-expert-and-blockchain-pioneer/",
                                        nodeId: "LCHX8eb75",
                                        children: e(f.a, {
                                          className:
                                            "framer-994m81 framer-yttz9e",
                                          "data-framer-name": "Fox",
                                          children: e(X, {
                                            className: "framer-1uzooh8",
                                            "data-framer-name": "Fox",
                                            fill: "black",
                                            intrinsicHeight: 50,
                                            intrinsicWidth: 100,
                                            svg: '<svg width="100" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="32"><path d="M1.401 1.344v30.973h9.167v-9.71h10.016v-8.722h-9.897V9.74h11.569l-.123-8.395H1.4Z" fill="#fff"/></mask><g mask="url(#a)"><mask id="b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-9" y="-6" width="42" height="46"><path d="M32.207 28.693 19.813-5.36-8.557 4.966 3.837 39.018l28.37-10.325Z" fill="#fff"/></mask><g mask="url(#b)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="c" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="50" y="1" width="33" height="32"><path d="m70.243 1.179-3.548 6.599-4.036-6.6H51.62l9.485 14.774-10.134 16.36v.005h10.958l4.532-6.867 4.562 6.867h11.204v-.005l-10.402-16.25L81.451 1.18H70.243Z" fill="#fff"/></mask><g mask="url(#c)"><mask id="d" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="40" y="-9" width="53" height="52"><path d="M92.236 28.673 78.572-8.868 40.964 4.82l13.664 37.541 37.608-13.688Z" fill="#fff"/></mask><g mask="url(#d)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="e" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="21" y="1" width="36" height="32"><path d="M21.959 16.78c0 8.67 7.686 15.698 17.158 15.698 9.486 0 17.15-7.028 17.15-15.699 0-8.674-7.665-15.71-17.15-15.71-9.472 0-17.158 7.036-17.158 15.71Zm14.366 7.341V9.751s-.12-2.223 2.92-2.223c3.047 0 2.856 2.223 2.856 2.223v13.203c0 1.498-.174 2.733-2.984 2.733-2.792 0-2.792-1.566-2.792-1.566Z" fill="#fff"/></mask><g mask="url(#e)"><mask id="f" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="-10" width="56" height="54"><path d="M66.363 28.803 52.255-9.96l-40.39 14.7 14.108 38.762 40.39-14.7Z" fill="#fff"/></mask><g mask="url(#f)"><path d="M-1947.09 849.883V-2511.34H650.214l.001 3361.223H-1947.09Z" fill="#fff"/></g></g><mask id="g" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="83" y="1" width="16" height="36"><path d="M83.751 1.178 94.03 36.191h4.193l.008-.004-4.638-35.009H83.75Z" fill="#fff"/></mask><g mask="url(#g)"><mask id="h" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="72" y="-4" width="38" height="45"><path d="M109.485 32.095 96.538-3.478 72.495 5.273l12.947 35.573 24.043-8.751Z" fill="#fff"/></mask><g mask="url(#h)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="i" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="74" y="5" width="19" height="32"><path d="m74.52 15.858 12.711 20.333h5.318L81.409 5.465 74.52 15.858Z" fill="#fff"/></mask><g mask="url(#i)"><mask id="j" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="64" y="-1" width="39" height="43"><path d="M102.425 32.596 90.441-.33 64.646 9.058 76.63 41.984l25.795-9.388Z" fill="#fff"/></mask><g mask="url(#j)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="k" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="34" width="84" height="3"><path d="M1.363 34.205V36.2h83.16l-1.252-1.995H1.363Z" fill="#fff"/></mask><g mask="url(#k)"><mask id="l" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="7" width="86" height="56"><path d="M85.165 35.965 74.796 7.477.723 34.437l10.369 28.489 74.073-26.96Z" fill="#fff"/></mask><g mask="url(#l)"><path d="M-1947.09 849.884V-2511.34H650.215V849.884H-1947.09Z" fill="#fff"/></g></g><mask id="m" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="37" width="14" height="12"><path d="M25.928 37.922v7.169c0 .526-.157.785-.497.785h-6.837c-.34 0-.514-.259-.514-.785v-7.169h-2.428v7.169c0 .878.272 1.63.82 2.262.538.628 1.243.947 2.122.947h6.837c.866 0 1.562-.319 2.118-.947.552-.632.82-1.384.82-2.262v-7.165l-2.441-.004Z" fill="#fff"/></mask><g mask="url(#m)"><mask id="n" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="12" y="33" width="20" height="20"><path d="m31.703 47.085-4.822-13.25-14.563 5.3 4.823 13.25 14.562-5.3Z" fill="#fff"/></mask><g mask="url(#n)"><path d="M-1947.09 849.883V-2511.34H650.214l.001 3361.223H-1947.09Z" fill="#fff"/></g></g><mask id="o" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="29" y="37" width="14" height="12"><path d="M32.862 37.922c-.857 0-1.57.314-2.11.943a3.366 3.366 0 0 0-.827 2.262c0 .878.267 1.621.81 2.232.556.637 1.27.96 2.127.96h6.498c.331 0 .51.263.51.776 0 .522-.179.781-.51.781h-8.93V48.3h8.93c.862 0 1.575-.323 2.13-.968.531-.615.786-1.363.786-2.237 0-.861-.255-1.617-.786-2.228-.556-.65-1.268-.968-2.13-.968h-6.498c-.331 0-.51-.259-.51-.772 0-.518.179-.781.51-.781h8.926v-2.424h-8.926Z" fill="#fff"/></mask><g mask="url(#o)"><mask id="p" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="26" y="33" width="20" height="20"><path d="m45.61 47.085-4.779-13.132-14.24 5.183 4.78 13.132 14.24-5.183Z" fill="#fff"/></mask><g mask="url(#p)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="q" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="43" y="37" width="3" height="12"><path d="M43.556 37.922 43.552 48.3h2.415l.009-.005V37.922h-2.42Z" fill="#fff"/></mask><g mask="url(#q)"><mask id="r" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="40" y="37" width="10" height="13"><path d="m49.312 47.085-3.619-9.942-5.475 1.993 3.618 9.942 5.476-1.993Z" fill="#fff"/></mask><g mask="url(#r)"><path d="M-1947.09 849.884V-2511.34H650.215V849.884H-1947.09Z" fill="#fff"/></g></g><mask id="s" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="47" y="37" width="12" height="12"><path d="M56.153 37.922v6.944l-6.218-6.944h-2.423V48.3h2.423v-6.99l6.218 6.99h2.411V37.922h-2.41Z" fill="#fff"/></mask><g mask="url(#s)"><mask id="t" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="44" y="34" width="18" height="18"><path d="M61.899 47.085 57.271 34.37l-13.093 4.766 4.628 12.714 13.093-4.765Z" fill="#fff"/></mask><g mask="url(#t)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="u" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="60" y="37" width="12" height="12"><path d="M60.112 37.922 60.108 48.3h11.031v-2.424h-8.612V44.32h8.064V41.9h-8.064v-1.553h8.629v-2.424H60.112Z" fill="#fff"/></mask><g mask="url(#u)"><mask id="v" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="56" y="34" width="19" height="18"><path d="M74.49 47.085 69.865 34.37l-13.09 4.765L61.4 51.849l13.09-4.764Z" fill="#fff"/></mask><g mask="url(#v)"><path d="M-1947.09 849.884V-2511.34H650.215V849.884H-1947.09Z" fill="#fff"/></g></g><mask id="w" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="72" y="37" width="14" height="12"><path d="M75.641 37.922c-.857 0-1.553.314-2.11.943-.551.636-.827 1.392-.827 2.262 0 .878.267 1.621.81 2.232.56.637 1.27.96 2.127.96h6.498c.331 0 .505.263.505.776 0 .522-.174.781-.505.781h-8.93V48.3h8.939c.853 0 1.574-.323 2.139-.968.513-.615.776-1.363.776-2.237 0-.861-.263-1.617-.776-2.228-.569-.65-1.286-.968-2.14-.968h-6.506c-.34 0-.51-.259-.51-.772 0-.518.17-.781.51-.781h8.934v-2.424h-8.934Z" fill="#fff"/></mask><g mask="url(#w)"><mask id="x" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="69" y="33" width="20" height="20"><path d="m88.398 47.085-4.78-13.135-14.248 5.186 4.78 13.135 14.248-5.186Z" fill="#fff"/></mask><g mask="url(#x)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="y" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="86" y="37" width="13" height="12"><path d="M89.264 37.922c-.849 0-1.54.314-2.105.943a3.408 3.408 0 0 0-.828 2.262c0 .878.276 1.621.794 2.232.582.637 1.29.96 2.14.96h6.51c.33 0 .51.263.51.776 0 .522-.18.781-.51.781h-8.93V48.3h8.93c.853 0 1.566-.323 2.13-.968.531-.615.786-1.363.786-2.237 0-.861-.255-1.617-.785-2.228-.565-.65-1.278-.968-2.131-.968h-6.51c-.328 0-.498-.259-.498-.772 0-.518.17-.781.497-.781h8.939v-2.424h-8.939Z" fill="#fff"/></mask><g mask="url(#y)"><mask id="z" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="82" y="33" width="21" height="20"><path d="m102.026 47.085-4.78-13.135-14.249 5.186 4.78 13.134 14.249-5.185Z" fill="#fff"/></mask><g mask="url(#z)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g><mask id="A" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="37" width="14" height="12"><path d="M1.414 37.923h-.005V48.3h10.045c.913 0 1.635-.289 2.174-.887.496-.527.747-1.189.747-1.974 0-1.07-.433-1.876-1.278-2.398.722-.539 1.078-1.294 1.078-2.258 0-.78-.246-1.438-.738-1.973-.53-.59-1.26-.887-2.16-.887H1.414Zm2.419 2.423h7.444c.348 0 .518.268.518.79 0 .526-.17.793-.518.793H3.833v-1.583Zm0 3.973h7.622c.348 0 .53.263.53.776 0 .522-.182.781-.53.781H3.833V44.32Z" fill="#fff"/></mask><g mask="url(#A)"><mask id="B" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-2" y="33" width="20" height="20"><path d="m17.71 47.085-4.85-13.33-14.785 5.381 4.852 13.33 14.784-5.381Z" fill="#fff"/></mask><g mask="url(#B)"><path d="M-1947.09 849.883V-2511.34H650.215V849.883H-1947.09Z" fill="#fff"/></g></g></svg>',
                                            transformTemplate: qr,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      e(f.div, {
                                        className: "framer-1wl76ox",
                                        "data-framer-name": "CNBC",
                                        children: e(X, {
                                          className: "framer-1c51cfg",
                                          "data-framer-name": "Graphic",
                                          fill: "black",
                                          intrinsicHeight: 40,
                                          intrinsicWidth: 51,
                                          svg: '<svg width="51" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".6" fill="#fff"><path opacity=".8" d="M6.593 8.754c-2 1.81-2.728 5.913.878 8.31l14.382 9.868-6.973-15.976c-1.462-3.77-5.46-4.593-8.287-2.202Z"/><path d="M18.975.986c-2.338.048-5.849 2.832-4.287 7.083l7.213 17.01 2.535-17.891C25.022 2.742 21.658.69 18.975.986Zm6.585 5.52h1.363s.729 0 .828.343c-.537.438-1.998.493-1.804 2.834l2.293 15.394 7.163-17.055c1.466-3.808-1.61-6.988-4.338-7.086a5.372 5.372 0 0 0-.388-.016c-2.448 0-5.255 1.78-5.117 5.586Z"/><path opacity=".8" d="M35.115 11.1 28.34 26.886l14.378-9.92c3.315-2.351 2.78-6.11.925-7.967-.778-.875-2.206-1.55-3.719-1.55-1.787 0-3.7.947-4.809 3.651Z"/><path opacity=".4" d="m41.109 19.212-13.504 9.432h16.627c3.41 0 5.603-3.517 4.628-6.745-.652-2.028-2.583-3.62-4.825-3.623-.943 0-1.943.284-2.926.936ZM6.206 28.644h16.381L9.081 19.212c-3.12-2.005-6.63-.832-7.896 2.495-1.073 3.809 1.607 6.937 5.021 6.937Z"/><path d="M.055 35.47c0 1.606 1.313 4.53 6.327 4.53 4.623 0 6.083-2.121 6.083-3.094h-3.58s-.17 1.285-2.188 1.285c-2.02 0-2.567-1.686-2.567-2.661 0-.971.547-2.567 2.567-2.567 2.019 0 2.189 1.12 2.189 1.12h3.579c0-.975-1.072-3.066-6.083-3.066-5.014 0-6.327 3.114-6.327 4.453Zm37.535 0c0 1.606 1.314 4.53 6.327 4.53C48.539 40 50 37.88 50 36.906h-3.576s-.171 1.285-2.19 1.285c-2.02 0-2.568-1.686-2.568-2.661 0-.971.547-2.567 2.568-2.567 2.019 0 2.19 1.12 2.19 1.12H50c0-.975-1.07-3.066-6.083-3.066s-6.327 3.114-6.327 4.453Zm-15.345-4.303v5.438l-4.165-5.438h-4.685v8.613h3.212v-5.5l4.092 5.5h4.758v-8.613h-3.212Zm10.293 6.555v.012h-2.676v-1.582h2.676v.005c.572 0 1.033.352 1.033.784 0 .431-.461.781-1.033.781Zm-2.652-4.88h2.58v.004c.436 0 .79.287.79.641 0 .355-.354.64-.79.64v.004h-2.58v-1.289Zm5.28 2.359c.586 0 1.808-.679 1.808-1.994 0-1.873-3.487-2.04-4.022-2.04h-6.425v8.613h6.425c3.09 0 4.331-.976 4.331-2.606S35.167 35.2 35.167 35.2Z"/></g></svg>',
                                          transformTemplate: qr,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      e(xe, {
                                        href: "https://finance.yahoo.com/news/global-tech-startup-offers-neuromorphic-130000592.html",
                                        nodeId: "pDf_BHIOe",
                                        children: e(f.a, {
                                          className:
                                            "framer-1qcq3v2 framer-yttz9e",
                                          "data-framer-name": "Yahoo",
                                          children: e(X, {
                                            className: "framer-1s44xwn",
                                            "data-framer-name": "yahoo",
                                            layout: "position",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 145 40"><path d="M 0 9.738 L 8.581 9.738 L 13.578 22.521 L 18.639 9.738 L 26.994 9.738 L 14.413 40 L 6.005 40 L 9.449 31.981 Z M 35.698 9.228 C 29.251 9.228 25.175 15.011 25.175 20.769 C 25.175 27.249 29.643 32.386 35.575 32.386 C 40.001 32.386 41.669 29.69 41.669 29.69 L 41.669 31.79 L 49.154 31.79 L 49.154 9.738 L 41.669 9.738 L 41.669 11.743 C 41.669 11.743 39.808 9.228 35.698 9.228 Z M 37.29 16.315 C 40.265 16.315 41.8 18.669 41.8 20.793 C 41.8 23.08 40.155 25.325 37.29 25.325 C 34.915 25.325 32.769 23.384 32.769 20.891 C 32.769 18.362 34.496 16.316 37.29 16.316 Z M 51.732 31.79 L 51.732 0 L 59.56 0 L 59.56 11.818 C 59.56 11.818 61.418 9.232 65.313 9.232 C 70.077 9.232 72.867 12.78 72.867 17.852 L 72.867 31.79 L 65.097 31.79 L 65.097 19.762 C 65.097 18.045 64.279 16.387 62.427 16.387 C 60.542 16.387 59.56 18.07 59.56 19.762 L 59.56 31.79 Z M 86.214 9.231 C 78.831 9.231 74.434 14.846 74.434 20.861 C 74.434 27.707 79.757 32.386 86.242 32.386 C 92.527 32.386 98.027 27.919 98.027 20.976 C 98.027 13.379 92.269 9.231 86.214 9.231 Z M 86.285 16.381 C 88.893 16.381 90.698 18.553 90.698 20.869 C 90.698 22.844 89.016 25.282 86.285 25.282 C 83.783 25.282 81.904 23.274 81.904 20.848 C 81.904 18.509 83.466 16.381 86.285 16.381 Z M 111.068 9.231 C 103.685 9.231 99.288 14.846 99.288 20.861 C 99.288 27.707 104.612 32.386 111.097 32.386 C 117.382 32.386 122.882 27.919 122.882 20.976 C 122.882 13.379 117.123 9.231 111.068 9.231 Z M 111.139 16.381 C 113.748 16.381 115.552 18.553 115.552 20.869 C 115.552 22.844 113.87 25.282 111.139 25.282 C 108.637 25.282 106.758 23.274 106.758 20.848 C 106.758 18.509 108.32 16.381 111.139 16.381 Z M 129.058 32.258 C 131.929 32.258 134.257 29.931 134.257 27.06 C 134.257 24.189 131.929 21.862 129.058 21.862 C 127.68 21.862 126.358 22.409 125.383 23.384 C 124.408 24.359 123.861 25.681 123.861 27.06 C 123.861 28.439 124.408 29.761 125.383 30.736 C 126.358 31.711 127.68 32.258 129.058 32.258 Z M 135.965 19.952 L 126.607 19.952 L 134.912 0 L 144.236 0 Z" fill="rgb(255,255,255)"></path></svg>',
                                            svgContentId: 10443684553,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      e(f.div, {
                                        className: "framer-q46itv",
                                        "data-framer-name": "Nasdaq",
                                        children: e(X, {
                                          className: "framer-1afzfi8",
                                          "data-framer-name": "graphic",
                                          fill: "black",
                                          intrinsicHeight: 44,
                                          intrinsicWidth: 155,
                                          svg: '<svg width="155" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M114.297 33.328c-5.293 0-8.582-3.066-8.582-8.008 0-5.129 3.035-8.32 7.922-8.32h.41c.613 0 1.457.02 2.61.164v-6.191h3.452V32.77s-3.28.558-5.812.558Zm-.031-13.61c-3.344 0-4.97 1.805-4.97 5.516 0 3.332 1.962 5.403 5.114 5.403.606 0 1.3-.04 2.246-.121V19.94c-.945-.152-1.707-.222-2.39-.222Zm-47.254 13.11-9.325-16.273-.003 16.273h-3.25V12.227h4.55l9.325 16.128-.004-16.128h3.293v20.601h-4.586Zm29.703.317c-1.57 0-3.207-.176-5.156-.551l-.21-.04v-2.878l.307.066c1.72.367 3.203.68 4.688.68 1.2 0 3.992-.188 3.992-1.953 0-1.48-1.93-1.852-3.48-2.149l-.098-.02c-.29-.054-.563-.109-.793-.167-2.274-.59-4.7-1.477-4.7-4.524 0-2.972 2.352-4.675 6.454-4.675 1.97 0 3.398.21 4.547.382l.558.082v2.793l-.297-.054c-1.3-.239-2.824-.485-4.289-.485-1.629 0-3.562.305-3.562 1.754 0 1.203 1.582 1.547 3.414 1.946 2.562.554 5.738 1.25 5.738 4.746 0 3.207-2.59 5.047-7.113 5.047Zm33.085 0c-3.573 0-6.882-.63-6.882-5.192 0-4.965 5.117-4.965 8.176-4.965.304 0 1.742.067 2.183.086-.004-2.785-.039-3.449-4.078-3.449-1.601 0-3.379.316-4.949.598l-.3.054v-2.75l.202-.043c1.82-.37 3.575-.55 5.364-.55 3.914 0 7.23.394 7.23 5.25v10.59l-.238.027c-2.711.304-4.864.344-6.708.344Zm1.208-7.7c-2.95 0-4.778.434-4.778 2.594 0 2.5 2.332 2.707 4.52 2.707.816 0 2.285-.105 2.734-.137v-5.078c-.632-.027-2.277-.086-2.476-.086Zm-49.645 7.7c-3.578 0-6.886-.63-6.886-5.192 0-4.965 5.117-4.965 8.175-4.965.305 0 1.746.067 2.188.086-.004-2.785-.043-3.449-4.082-3.449-1.602 0-3.38.316-4.95.598l-.3.054v-2.75l.207-.043a26.552 26.552 0 0 1 5.36-.55c3.913 0 7.23.394 7.23 5.25v10.59l-.239.027c-2.71.304-4.863.344-6.703.344Zm1.203-7.7c-2.949 0-4.773.434-4.773 2.594 0 2.5 2.328 2.707 4.516 2.707.82 0 2.29-.105 2.738-.137v-5.078c-.637-.027-2.282-.086-2.48-.086Zm67.926 14.383V33.07c-1.347.188-2.062.188-2.64.188-1.368 0-2.887-.297-4.063-.793-2.633-1.095-4.203-3.875-4.203-7.442 0-1.78.434-5.035 3.336-6.79 1.457-.87 3.176-1.241 5.762-1.241.925 0 2.175.07 3.382.14l1.961.102v21.028l-3.535 1.566Zm-2.066-20.117c-3.508-.001-5.286 1.789-5.286 5.312 0 4.536 2.652 5.489 4.882 5.489.543 0 1.153 0 2.504-.172V19.809c-1.058-.07-1.546-.098-2.1-.098ZM39.012.016l-11.418 31.37a2.19 2.19 0 0 1-1.836 1.427v.015h12.07c.945 0 1.754-.601 2.055-1.441L51.305.016H39.012Z" fill="#fff"/><path d="M24.773 32.352c.7 0 1.313-.348 1.688-.875.04-.055.176-.247.273-.508l4.188-11.512-2.45-6.723a2.07 2.07 0 0 0-3.597-.398c-.04.055-.203.3-.273.508l-4.188 11.508 2.461 6.75a2.067 2.067 0 0 0 1.898 1.25Z" fill="#fff"/><path d="M25.668 10.984H13.465c-.945 0-1.754.598-2.059 1.442L-.012 43.796h12.293L23.7 12.427a2.188 2.188 0 0 1 1.968-1.439v-.004Z" fill="#fff"/></svg>',
                                          transformTemplate: qr,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                    speed: 50,
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      w("div", {
                        className: "framer-11yqqr1",
                        "data-framer-name": "Leading the way",
                        children: [
                          e(F, {
                            breakpoint: i,
                            overrides: {
                              gBDphNyak: {
                                width: `calc(min(max(${
                                  o?.width || "100vw"
                                }, 1px), 1680px) - 128px)`,
                              },
                              OQjYGxmh9: {
                                height: 100,
                                width: `calc(min(${
                                  o?.width || "100vw"
                                }, 1680px) - 88px)`,
                                y: void 0,
                              },
                            },
                            children: e(y, {
                              height: 120,
                              width: `calc(min(max(${
                                o?.width || "100vw"
                              }, 1px), 1680px) - 256px)`,
                              y: (o?.y || 0) + 0 + 0 + 0 + 0 + 1252 + 0 + 0,
                              children: e(k, {
                                className: "framer-eqd83y-container",
                                children: e(et, {
                                  height: "100%",
                                  id: "kLmjqn4k6",
                                  layoutId: "kLmjqn4k6",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          w("div", {
                            className: "framer-1ptnged",
                            "data-framer-name": "Content",
                            children: [
                              w("div", {
                                className: "framer-k68ne1",
                                "data-framer-name": "Title",
                                children: [
                                  z() &&
                                    e(y, {
                                      height: 28,
                                      width: "32px",
                                      y:
                                        (o?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        1252 +
                                        0 +
                                        120 +
                                        0 +
                                        0 +
                                        11,
                                      children: e(k, {
                                        className:
                                          "framer-1207ayy-container hidden-uakywc hidden-39p896",
                                        children: e(Qe, {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId:
                                            "VW28iYURk",
                                          __framer__threshold: 0,
                                          __framer__variantAppearEffectEnabled:
                                            !0,
                                          __framer__visibleVariantId:
                                            "XFISgv28f",
                                          height: "100%",
                                          id: "TElg4EG9v",
                                          layoutId: "TElg4EG9v",
                                          SJurDrY8F: " 002",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          variant: "ABRDpYIdI",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-1a1cylg-container",
                                      children: e(ge, {
                                        animDelay: 0,
                                        animDuration: 0.1,
                                        animRepeat: 8,
                                        animStagger: 0.05,
                                        content: "Fast Company \u2014\xA02024",
                                        fontSize:
                                          "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                        fontWeight: 600,
                                        height: "100%",
                                        id: "U7XVv1E7w",
                                        layoutId: "U7XVv1E7w",
                                        letterSpace: -1,
                                        repeatType: "mirror",
                                        style: { width: "100%" },
                                        textBorder: "1px",
                                        textColor:
                                          "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-358hsh-container",
                                      children: e(ge, {
                                        animDelay: 0,
                                        animDuration: 0.1,
                                        animRepeat: 8,
                                        animStagger: 0.05,
                                        content: "Technologist of The Year",
                                        fontSize:
                                          "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                        fontWeight: 600,
                                        height: "100%",
                                        id: "JexzA80Fh",
                                        layoutId: "JexzA80Fh",
                                        letterSpace: -1,
                                        repeatType: "mirror",
                                        style: { width: "100%" },
                                        textBorder: "1px",
                                        textColor:
                                          "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w(Dr, {
                                className: "framer-1s5c8fv",
                                "data-framer-name": "Text",
                                children: [
                                  e(xe, {
                                    
                                    nodeId: "gDkxKklfJ",
                                    children: w(f.a, {
                                      className: "framer-kw1jsg framer-yttz9e",
                                      children: [
                                        e(y, {
                                          children: e(k, {
                                            className:
                                              "framer-1t1cvba-container",
                                            children: e(Xt, {
                                              height: "100%",
                                              id: "gDkxKklfJaMJ3YnWVI",
                                              layoutId: "gDkxKklfJaMJ3YnWVI",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                              },
                                              variant: "Dl5vZx6Jj",
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                        e(F, {
                                          breakpoint: i,
                                          overrides: {
                                            gBDphNyak: {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 3754,
                                                intrinsicWidth: 2876,
                                                loading: We(
                                                  (o?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1252 +
                                                    0 +
                                                    120 +
                                                    0 +
                                                    458 +
                                                    0 +
                                                    12 +
                                                    0
                                                ),
                                                pixelHeight: 7508,
                                                pixelWidth: 5752,
                                                sizes: `calc(max(min(max((min(max(${
                                                  o?.width || "100vw"
                                                }, 1px), 1680px) - 160px) / 3, 1px), 400px), 200px) - 24px)`,
                                                src: "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png",
                                                srcSet:
                                                  "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png?scale-down-to=1024 668w,https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png 920w",
                                              },
                                            },
                                            OQjYGxmh9: {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 3754,
                                                intrinsicWidth: 2876,
                                                pixelHeight: 7508,
                                                pixelWidth: 5752,
                                                sizes: `calc(max(min(min(${
                                                  o?.width || "100vw"
                                                }, 1680px) - 88px, 400px), 200px) - 24px)`,
                                                src: "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png",
                                                srcSet:
                                                  "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png?scale-down-to=1024 668w,https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png 920w",
                                              },
                                            },
                                          },
                                          children: e(Xe, {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 3754,
                                              intrinsicWidth: 2876,
                                              loading: We(
                                                (o?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1252 +
                                                  0 +
                                                  120 +
                                                  0 +
                                                  458 +
                                                  0 +
                                                  12 +
                                                  0
                                              ),
                                              pixelHeight: 7508,
                                              pixelWidth: 5752,
                                              sizes: `calc(max(min(max((min(max(${
                                                o?.width || "100vw"
                                              }, 1px), 1680px) - 320px) / 3, 1px), 400px), 200px) - 24px)`,
                                              src: "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png",
                                              srcSet:
                                                "https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png?scale-down-to=1024 668w,https://framerusercontent.com/images/VNC0jQRzgYYmLQGe8zAgqGqsII.png 920w",
                                            },
                                            className: "framer-ig5fw1",
                                            "data-framer-name":
                                              "279032 Dynex - 2024 Fast Company- NextBigThingsInTech Custom Logo",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  w(f.div, {
                                    className: "framer-43jza1",
                                    children: [
                                      w(f.div, {
                                        className: "framer-gsffbn",
                                        children: [
                                          e(y, {
                                            children: e(k, {
                                              className:
                                                "framer-kdcdz3-container",
                                              children: e(Se, {
                                                animDelay: 0,
                                                animDuration: 0.2,
                                                animRepeat: 0,
                                                animStagger: 0,
                                                content:
                                                  "Dynex is honored to be recognized as one of 4 Technologists of the year receiving the Fast Company\u2019s Next Big Things in Tech 2024 award. The award is spotlighting transformative technologies making meaningful impact in today\u2019s most demanding industries. This accolade underscores Dynex\u2019s role as a leader in Quantum-as-a-Service (QaaS) technology, with Dynex playing a key role in the next megacycle of computing making it affordable, accessible and scalable.",
                                                fontSize:
                                                  "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                                height: "100%",
                                                id: "KmBCh5nfE",
                                                layoutId: "KmBCh5nfE",
                                                letterSpace: 0,
                                                repeatType: "loop",
                                                textColor:
                                                  "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          e(y, {
                                            children: e(k, {
                                              className:
                                                "framer-ky81hi-container",
                                              children: e(Se, {
                                                animDelay: 0.7,
                                                animDuration: 0.2,
                                                animRepeat: 0,
                                                animStagger: 0,
                                                content:
                                                  "Dynex joins an esteemed group of innovators recognized by Fast Company, including industry leaders such as Qualcomm, Amazon, Adobe, Abbott, and Filecoin. This acknowledgment places Dynex among the forefront of technological advancement, highlighting its role in shaping the future of computing.",
                                                fontSize:
                                                  "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                                height: "100%",
                                                id: "GAY4TFNKJ",
                                                layoutId: "GAY4TFNKJ",
                                                letterSpace: 0,
                                                repeatType: "loop",
                                                textColor:
                                                  "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      e(F, {
                                        breakpoint: i,
                                        overrides: { OQjYGxmh9: { y: void 0 } },
                                        children: e(y, {
                                          height: 42,
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            1252 +
                                            0 +
                                            120 +
                                            0 +
                                            458 +
                                            0 +
                                            0 +
                                            472,
                                          children: e(k, {
                                            className:
                                              "framer-1hz602j-container",
                                            
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      w("div", {
                        className: "framer-14pn7ha",
                        "data-framer-name": "Leading the way",
                        children: [
                          e(F, {
                            breakpoint: i,
                            overrides: {
                              gBDphNyak: {
                                width: `calc(min(max(${
                                  o?.width || "100vw"
                                }, 1px), 1680px) - 128px)`,
                              },
                              OQjYGxmh9: {
                                height: 100,
                                width: `calc(min(${
                                  o?.width || "100vw"
                                }, 1680px) - 88px)`,
                                y: void 0,
                              },
                            },
                            children: e(y, {
                              height: 120,
                              width: `calc(min(max(${
                                o?.width || "100vw"
                              }, 1px), 1680px) - 256px)`,
                              y: (o?.y || 0) + 0 + 0 + 0 + 0 + 2354 + 0 + 0,
                              children: e(k, {
                                className: "framer-emu1a4-container",
                                children: e(et, {
                                  height: "100%",
                                  id: "m8CiLfbNl",
                                  layoutId: "m8CiLfbNl",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          w("div", {
                            className: "framer-8z1hbs",
                            "data-framer-name": "Content",
                            children: [
                              w("div", {
                                className: "framer-1nm2foo",
                                "data-framer-name": "Title",
                                children: [
                                  z() &&
                                    e(y, {
                                      height: 28,
                                      width: "32px",
                                      y:
                                        (o?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        2354 +
                                        0 +
                                        120 +
                                        0 +
                                        0 +
                                        11,
                                      children: e(k, {
                                        className:
                                          "framer-pfu822-container hidden-uakywc hidden-39p896",
                                        children: e(Qe, {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId:
                                            "VW28iYURk",
                                          __framer__threshold: 0,
                                          __framer__variantAppearEffectEnabled:
                                            !0,
                                          __framer__visibleVariantId:
                                            "XFISgv28f",
                                          height: "100%",
                                          id: "BH98tBfFt",
                                          layoutId: "BH98tBfFt",
                                          SJurDrY8F: " 002",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          variant: "ABRDpYIdI",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-13nhdcm-container",
                                      children: e(ge, {
                                        animDelay: 0,
                                        animDuration: 0.1,
                                        animRepeat: 8,
                                        animStagger: 0.05,
                                        content: "2025 BIG Innovation Awards",
                                        fontSize:
                                          "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                        fontWeight: 600,
                                        height: "100%",
                                        id: "gazBkxo8C",
                                        layoutId: "gazBkxo8C",
                                        letterSpace: -1,
                                        repeatType: "mirror",
                                        style: { width: "100%" },
                                        textBorder: "1px",
                                        textColor:
                                          "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w(Dr, {
                                className: "framer-sq6n55",
                                "data-framer-name": "Text",
                                children: [
                                  e(xe, {
                                   
                                    nodeId: "YtAAdXHce",
                                    children: w(f.a, {
                                      className: "framer-obkman framer-yttz9e",
                                      children: [
                                        e(y, {
                                          children: e(k, {
                                            className:
                                              "framer-u4k4f7-container",
                                            children: e(Xt, {
                                              height: "100%",
                                              id: "iyjjEhjHy",
                                              layoutId: "iyjjEhjHy",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                              },
                                              variant: "Dl5vZx6Jj",
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                        e(F, {
                                          breakpoint: i,
                                          overrides: {
                                            gBDphNyak: {
                                              background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 3754,
                                                intrinsicWidth: 2876,
                                                loading: We(
                                                  (o?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2354 +
                                                    0 +
                                                    120 +
                                                    0 +
                                                    248 +
                                                    0 +
                                                    12 +
                                                    0
                                                ),
                                                pixelHeight: 1121,
                                                pixelWidth: 825,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: `calc(max(min(max((min(max(${
                                                  o?.width || "100vw"
                                                }, 1px), 1680px) - 160px) / 3, 1px), 400px), 200px) - 24px)`,
                                                src: "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png",
                                                srcSet:
                                                  "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png?scale-down-to=1024 753w,https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png 825w",
                                              },
                                            },
                                            OQjYGxmh9: {
                                              background: {
                                                alt: "",
                                                fit: "fit",
                                                intrinsicHeight: 3754,
                                                intrinsicWidth: 2876,
                                                pixelHeight: 1121,
                                                pixelWidth: 825,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: `calc(max(min(min(${
                                                  o?.width || "100vw"
                                                }, 1680px) - 88px, 400px), 200px) - 24px)`,
                                                src: "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png",
                                                srcSet:
                                                  "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png?scale-down-to=1024 753w,https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png 825w",
                                              },
                                            },
                                          },
                                          children: e(Xe, {
                                            background: {
                                              alt: "",
                                              fit: "fit",
                                              intrinsicHeight: 3754,
                                              intrinsicWidth: 2876,
                                              loading: We(
                                                (o?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2354 +
                                                  0 +
                                                  120 +
                                                  0 +
                                                  248 +
                                                  0 +
                                                  12 +
                                                  0
                                              ),
                                              pixelHeight: 1121,
                                              pixelWidth: 825,
                                              positionX: "center",
                                              positionY: "center",
                                              sizes: `calc(max(min(max((min(max(${
                                                o?.width || "100vw"
                                              }, 1px), 1680px) - 320px) / 3, 1px), 400px), 200px) - 24px)`,
                                              src: "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png",
                                              srcSet:
                                                "https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png?scale-down-to=1024 753w,https://framerusercontent.com/images/wppIsGWffsidjP0qFjRe3up9H4.png 825w",
                                            },
                                            className: "framer-1vo7rt6",
                                            "data-framer-name":
                                              "279032 Dynex - 2024 Fast Company- NextBigThingsInTech Custom Logo",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  w(f.div, {
                                    className: "framer-1mfs98l",
                                    children: [
                                      w(f.div, {
                                        className: "framer-2vfkmk",
                                        children: [
                                          e(y, {
                                            children: e(k, {
                                              className:
                                                "framer-4r73gt-container",
                                              children: e(Se, {
                                                animDelay: 0,
                                                animDuration: 0.2,
                                                animRepeat: 0,
                                                animStagger: 0,
                                                content: `The prestigious 2025 BIG Innovation Awards, presented by the Business Intelligence Group, recognizes Dynex, a global leader in Quantum-as-a-Service (QaaS) technology as a trailblazing company.

As Quantum, the next megacycle in computing, unfolds, Dynex is already leading the way with its accessible Quantum-as-a-Service solutions, recognized globally for solving real-world problems at scale.`,
                                                fontSize:
                                                  "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                                height: "100%",
                                                id: "jxaaucHjI",
                                                layoutId: "jxaaucHjI",
                                                letterSpace: 0,
                                                repeatType: "loop",
                                                textColor:
                                                  "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                          e(y, {
                                            children: e(k, {
                                              className:
                                                "framer-1rgk5fl-container",
                                              children: e(Se, {
                                                animDelay: 0.7,
                                                animDuration: 0.2,
                                                animRepeat: 0,
                                                animStagger: 0,
                                                content:
                                                  "The 2025 BIG Innovation Awards celebrate organizations and individuals pushing boundaries and advancing their industries. Winners are evaluated by a panel of seasoned business leaders and executives who consider creativity, measurable results, and overall impact in their selections.",
                                                fontSize:
                                                  "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                                height: "100%",
                                                id: "uJPib2FAQ",
                                                layoutId: "uJPib2FAQ",
                                                letterSpace: 0,
                                                repeatType: "loop",
                                                textColor:
                                                  "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      e(F, {
                                        breakpoint: i,
                                        overrides: { OQjYGxmh9: { y: void 0 } },
                                        children: e(y, {
                                          height: 42,
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            2354 +
                                            0 +
                                            120 +
                                            0 +
                                            248 +
                                            0 +
                                            0 +
                                            472,
                                          children: e(k, {
                                            className:
                                              "framer-1k00yzf-container",
                                            
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      w("div", {
                        className: "framer-1x3lhd6",
                        "data-framer-name": "Leading the way",
                        children: [
                          e(F, {
                            breakpoint: i,
                            overrides: {
                              gBDphNyak: {
                                width: `calc(min(max(${
                                  o?.width || "100vw"
                                }, 1px), 1680px) - 128px)`,
                              },
                              OQjYGxmh9: {
                                height: 100,
                                width: `calc(min(${
                                  o?.width || "100vw"
                                }, 1680px) - 88px)`,
                                y: void 0,
                              },
                            },
                            children: e(y, {
                              height: 200,
                              width: `calc(min(max(${
                                o?.width || "100vw"
                              }, 1px), 1680px) - 256px)`,
                              y: (o?.y || 0) + 0 + 0 + 0 + 0 + 3246 + 0 + 0,
                              children: e(k, {
                                className: "framer-1mg6fza-container",
                                children: e(et, {
                                  height: "100%",
                                  id: "fdt5v3jy4",
                                  layoutId: "fdt5v3jy4",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                          w("div", {
                            className: "framer-1eh6r9a",
                            "data-framer-name": "Content",
                            children: [
                              w("div", {
                                className: "framer-93dt6s",
                                "data-framer-name": "Title",
                                children: [
                                  z() &&
                                    e(y, {
                                      height: 28,
                                      width: "32px",
                                      y:
                                        (o?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        3246 +
                                        0 +
                                        200 +
                                        0 +
                                        0 +
                                        11,
                                      children: e(k, {
                                        className:
                                          "framer-1t7eor5-container hidden-uakywc hidden-39p896",
                                        children: e(Qe, {
                                          __framer__animateOnce: !1,
                                          __framer__obscuredVariantId:
                                            "VW28iYURk",
                                          __framer__threshold: 0,
                                          __framer__variantAppearEffectEnabled:
                                            !0,
                                          __framer__visibleVariantId:
                                            "XFISgv28f",
                                          height: "100%",
                                          id: "v4yuCfkk1",
                                          layoutId: "v4yuCfkk1",
                                          SJurDrY8F: " 003",
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          variant: "ABRDpYIdI",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-1gzhw39-container",
                                      children: e(ge, {
                                        animDelay: 0,
                                        animDuration: 0.1,
                                        animRepeat: 8,
                                        animStagger: 0.05,
                                        content: "native Layer 1",
                                        fontSize:
                                          "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                        fontWeight: 600,
                                        height: "100%",
                                        id: "bwjMzCqYc",
                                        layoutId: "bwjMzCqYc",
                                        letterSpace: -1,
                                        repeatType: "mirror",
                                        style: { width: "100%" },
                                        textBorder: "1px",
                                        textColor:
                                          "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-3lzfe5-container",
                                      children: e(ge, {
                                        animDelay: 0,
                                        animDuration: 0.1,
                                        animRepeat: 8,
                                        animStagger: 0.05,
                                        content: "blockchain",
                                        fontSize:
                                          "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                        fontWeight: 600,
                                        height: "100%",
                                        id: "yz93ujWs3",
                                        layoutId: "yz93ujWs3",
                                        letterSpace: -1,
                                        repeatType: "mirror",
                                        style: { width: "100%" },
                                        textBorder: "1px",
                                        textColor:
                                          "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w(Js, {
                                className: "framer-1joof58",
                                "data-framer-name": "Text",
                                children: [
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-wfni3p-container",
                                      children: e(Se, {
                                        animDelay: 0,
                                        animDuration: 0.2,
                                        animRepeat: 0,
                                        animStagger: 0.05,
                                        content:
                                          "At the core of the Dynex ecosystem is our proof-of-useful-work (PoUW) blockchain algorithm, supported by thousands of miners who contribute GPU resources in a decentralized manner. This innovative approach ensures that computational power is efficiently utilized for solving practical problems, while also maintaining the security and integrity of the blockchain.",
                                        fontSize:
                                          "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                        height: "100%",
                                        id: "hTdBa1fJN",
                                        layoutId: "hTdBa1fJN",
                                        letterSpace: 0,
                                        repeatType: "reverse",
                                        style: { width: "100%" },
                                        textColor:
                                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(y, {
                                    children: e(k, {
                                      className: "framer-1dbob5z-container",
                                      children: e(Se, {
                                        animDelay: 0,
                                        animDuration: 0.2,
                                        animRepeat: 0,
                                        animStagger: 0.05,
                                        content:
                                          "By leveraging the collective power of decentralized mining, Dynex applies a digital twin of a neuromorpic quantum computer and offers customers an affordable, accessible and scalable solution for high-performance computing underpinned by a robust commitment to ethical integrity.",
                                        fontSize:
                                          "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                        height: "100%",
                                        id: "Hj8MSALy_",
                                        layoutId: "Hj8MSALy_",
                                        letterSpace: 0,
                                        repeatType: "reverse",
                                        style: { width: "100%" },
                                        textColor:
                                          "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              w("div", {
                                className: "framer-27dhyc",
                                children: [
                                 
                                ],
                              }),
                            ],
                          }),
                          e(y, {
                            children: e(k, {
                              className: "framer-mja1sd-container",
                              children: e(He, {
                                backgroundColor: "rgba(0, 0, 0, 0)",
                                borderRadius: 0,
                                bottomLeftRadius: 0,
                                bottomRightRadius: 0,
                                controls: !1,
                                height: "100%",
                                id: "qIl99RRku",
                                isMixedBorderRadius: !1,
                                layoutId: "qIl99RRku",
                                loop: !0,
                                muted: !0,
                                objectFit: "cover",
                                playing: !0,
                                posterEnabled: !1,
                                srcFile:
                                  "https://framerusercontent.com/assets/dRtqhBxl20NuncY9zRHuhIdU7ew.mp4",
                                srcType: "Upload",
                                srcUrl:
                                  "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                startTime: 0,
                                style: { height: "100%", width: "100%" },
                                topLeftRadius: 0,
                                topRightRadius: 0,
                                volume: 25,
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-7gm4ps",
                        "data-framer-name": "Industries",
                        id: S,
                        ref: N,
                        children: w("div", {
                          className: "framer-1b7f9zn",
                          children: [
                            w("div", {
                              className: "framer-1pxwdg1",
                              "data-framer-name": "Title",
                              children: [
                                e(F, {
                                  breakpoint: i,
                                  overrides: { OQjYGxmh9: { y: void 0 } },
                                  children: e(y, {
                                    height: 28,
                                    width: "32px",
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      4914 +
                                      0 +
                                      0 +
                                      0 +
                                      11,
                                    children: e(k, {
                                      className: "framer-97k29e-container",
                                      children: e(Qe, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId:
                                          "WUkI6RCNj",
                                        __framer__threshold: 0,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "dCrGeYxQN",
                                        height: "100%",
                                        id: "OGEjkyaQH",
                                        layoutId: "OGEjkyaQH",
                                        SJurDrY8F: " 004",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "VW28iYURk",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(y, {
                                  children: e(k, {
                                    className: "framer-17f660j-container",
                                    children: e(ge, {
                                      animDelay: 0,
                                      animDuration: 0.1,
                                      animRepeat: 8,
                                      animStagger: 0.05,
                                      content: "INDUSTRIES ",
                                      fontSize:
                                        "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                      fontWeight: 400,
                                      height: "100%",
                                      id: "vLJ6QYiLa",
                                      layoutId: "vLJ6QYiLa",
                                      letterSpace: -1,
                                      repeatType: "mirror",
                                      style: { width: "100%" },
                                      textBorder: "1px",
                                      textColor:
                                        "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(y, {
                                  children: e(k, {
                                    className: "framer-1ctut5b-container",
                                    children: e(ge, {
                                      animDelay: 0,
                                      animDuration: 0.1,
                                      animRepeat: 8,
                                      animStagger: 0.05,
                                      content: "& USE CASES",
                                      fontSize:
                                        "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                      fontWeight: 400,
                                      height: "100%",
                                      id: "pzVcII4YH",
                                      layoutId: "pzVcII4YH",
                                      letterSpace: -1,
                                      repeatType: "mirror",
                                      style: { width: "100%" },
                                      textBorder: "1px",
                                      textColor:
                                        "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            e("div", {
                              className: "framer-16lf7wg",
                              "data-framer-name": "Title",
                              children: e("div", {
                                className: "framer-1s3vqmi",
                                "data-framer-name": "Line Container",
                                children: e(F, {
                                  breakpoint: i,
                                  overrides: { OQjYGxmh9: { y: void 0 } },
                                  children: e(y, {
                                    height: 60,
                                    width: "482px",
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      4914 +
                                      0 +
                                      0 +
                                      410 +
                                      0 +
                                      16,
                                    children: e(k, {
                                      className: "framer-9l46jv-container",
                                      children: e($s, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId:
                                          "na3YdsK4h",
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "f7lkCP8rv",
                                        height: "100%",
                                        id: "QwNbwMydJ",
                                        layoutId: "QwNbwMydJ",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "na3YdsK4h",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            w(tl, {
                              className: "framer-196d1vc",
                              "data-framer-name": "Columns",
                              children: [
                                w(f.div, {
                                  className: "framer-1gubb1w",
                                  "data-framer-name": "Left",
                                  children: [
                                    e(ee, {
                                      __fromCanvasComponent: !0,
                                      children: e(A, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UnViaWstNTAw",
                                            "--framer-font-family":
                                              '"Rubik", "Rubik Placeholder", sans-serif',
                                            "--framer-font-size": "18px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "160%",
                                            "--framer-text-color":
                                              "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                          },
                                          children:
                                            "Dynex technology offers versatile applications across a wide range of industries, enhancing capabilities in sectors such as Artificial Intelligence, Pharmaceuticals, Automotive & Aerospace, Financial Services, Telecommunications, and Research. ",
                                        }),
                                      }),
                                      className: "framer-1p83h9v",
                                      fonts: ["GF;Rubik-500"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(ee, {
                                      __fromCanvasComponent: !0,
                                      children: e(A, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy",
                                            "--framer-font-family":
                                              '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                                            "--framer-line-height": "160%",
                                            "--framer-text-color":
                                              "var(--token-e2149c75-9099-4842-aea6-4fbafaef2693, rgb(191, 199, 212))",
                                          },
                                          children:
                                            "Whether it's speeding up drug discovery, improving vehicle and aircraft design, managing financial risks, enhancing network efficiency, or advancing scientific research, Dynex provides powerful tools that can drive innovation and solve industry-specific challenges effectively.",
                                        }),
                                      }),
                                      className: "framer-15ew23",
                                      fonts: ["GF;Space Grotesk-regular"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(f.div, {
                                      className: "framer-dldqq0",
                                      children: e(F, {
                                        breakpoint: i,
                                        overrides: { OQjYGxmh9: { y: void 0 } },
                                        children: e(y, {
                                          height: 42,
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            4914 +
                                            0 +
                                            0 +
                                            486 +
                                            0 +
                                            0 +
                                            320 +
                                            0,
                                          children: e(k, {
                                            className:
                                              "framer-m57ot7-container",
                                            children: e(Ae, {
                                              height: "100%",
                                              id: "wUC9tztip",
                                              layoutId: "wUC9tztip",
                                              OxvVnM9Vj: !0,
                                              PWiTIKmkB: "https://app.dynexai.pro/",
                                              QVxRnsVaA: "Enterprise Product",
                                              SLOdxAGFe: "ArrowRight",
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                w(f.div, {
                                  className: "framer-gb82ua",
                                  children: [
                                    e(F, {
                                      breakpoint: i,
                                      overrides: { OQjYGxmh9: { y: void 0 } },
                                      children: e(y, {
                                        height: 510,
                                        width: "1536px",
                                        y:
                                          (o?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          4914 +
                                          0 +
                                          0 +
                                          486 +
                                          0 +
                                          -255,
                                        children: e(k, {
                                          className: "framer-2jsuc4-container",
                                          transformTemplate: hl,
                                          children: e(jr, {
                                            height: "100%",
                                            id: "BlT4xl6rV",
                                            layoutId: "BlT4xl6rV",
                                            style: { width: "100%" },
                                            variant: "tMatCB9OQ",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                    e(f.div, {
                                      className: "framer-1ezsl6p",
                                      "data-framer-name": "Squareish",
                                      children: e(X, {
                                        className: "framer-1v9h3mi",
                                        "data-framer-name": "graphic",
                                        layout: "position",
                                        opacity: 1,
                                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192 161"><path d="M 191.5 151 C 191.5 156.247 187.247 160.5 182 160.5 L 72.592 160.5 C 68.502 160.5 64.577 158.883 61.673 156.002 L 5.082 99.839 C 2.149 96.929 0.5 92.968 0.5 88.837 L 0.5 10 C 0.5 4.753 4.753 0.5 10 0.5 L 128.629 0.5 C 133.161 0.5 137.465 2.483 140.41 5.928 L 187.781 61.335 C 190.181 64.142 191.5 67.714 191.5 71.407 Z" fill="transparent" stroke="var(--token-6678d9c0-cf59-4b90-8a3f-78db6c108cce, rgb(61, 63, 71)) /* {&quot;name&quot;:&quot;Border&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                                        svgContentId: 11843122533,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      w(cn, {
                        __framer__animate: { transition: Br },
                        __framer__animateOnce: !0,
                        __framer__enter: mn,
                        __framer__exit: fn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1x3sgfd",
                        "data-framer-name": "Fair Start",
                        style: { transformPerspective: 1200 },
                        children: [
                          w("div", {
                            className: "framer-eob9dl",
                            "data-framer-name": "Masked Title",
                            children: [
                              e(ee, {
                                __fromCanvasComponent: !0,
                                children: e(A, {
                                  children: w("h2", {
                                    className: "framer-styles-preset-1wml6uu",
                                    "data-styles-preset": "fVxnimdqP",
                                    style: {
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                    },
                                    children: [
                                      "A ",
                                      e("span", {
                                        style: {
                                          "--framer-text-color":
                                            "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                        },
                                        children: "Fair",
                                      }),
                                      " Start",
                                    ],
                                  }),
                                }),
                                className: "framer-10zqtdm",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(y, {
                                children: e(k, {
                                  className: "framer-8ard2m-container",
                                  children: e(lt, {
                                    baseWidth: "1000px",
                                    delay: 0.2,
                                    duration: 1,
                                    height: "100%",
                                    id: "lkSDnAXgv",
                                    layoutId: "lkSDnAXgv",
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          w("div", {
                            className: "framer-7zk2qk",
                            "data-framer-name": "Content",
                            children: [
                              e(F, {
                                breakpoint: i,
                                overrides: {
                                  gBDphNyak: {
                                    width: `calc(min(max(${
                                      o?.width || "100vw"
                                    }, 1px), 1680px) - 128px)`,
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      5840 +
                                      96 +
                                      120 +
                                      32 +
                                      0,
                                  },
                                  OQjYGxmh9: {
                                    width: `calc(min(${
                                      o?.width || "100vw"
                                    }, 1680px) - 88px)`,
                                    y: void 0,
                                  },
                                },
                                children: e(y, {
                                  height: 208,
                                  width: `max((min(max(${
                                    o?.width || "100vw"
                                  }, 1px), 1680px) - 384px) / 3, 1px)`,
                                  y:
                                    (o?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    5840 +
                                    96 +
                                    120 +
                                    32,
                                  children: e(Rr, {
                                    __framer__animate: { transition: hn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Er,
                                    __framer__exit: ul,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-218h5s-container",
                                    style: { transformPerspective: 1200 },
                                    children: e(bt, {
                                      De81Dd2tF: e(A, {
                                        children: e("p", {
                                          children:
                                            "Truly fair launch in September 2022 with no ICO, no pre-mining and pre-allocation of coins to the team or investors.",
                                        }),
                                      }),
                                      FXMLloUXk:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      height: "100%",
                                      HMV4Yoe7M:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      id: "T_3oA2zHc",
                                      KXaYyhqTQ: "thin",
                                      layoutId: "T_3oA2zHc",
                                      lFSXA88cV: "No Premine",
                                      style: { width: "100%" },
                                      tXM8rNFsJ: "HardDrives",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(F, {
                                breakpoint: i,
                                overrides: {
                                  gBDphNyak: {
                                    width: `calc(min(max(${
                                      o?.width || "100vw"
                                    }, 1px), 1680px) - 128px)`,
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      5840 +
                                      96 +
                                      120 +
                                      32 +
                                      272,
                                  },
                                  OQjYGxmh9: {
                                    width: `calc(min(${
                                      o?.width || "100vw"
                                    }, 1680px) - 88px)`,
                                    y: void 0,
                                  },
                                },
                                children: e(y, {
                                  height: 208,
                                  width: `max((min(max(${
                                    o?.width || "100vw"
                                  }, 1px), 1680px) - 384px) / 3, 1px)`,
                                  y:
                                    (o?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    5840 +
                                    96 +
                                    120 +
                                    32,
                                  children: e(Rr, {
                                    __framer__animate: { transition: un },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Er,
                                    __framer__exit: yl,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-10v8pbi-container",
                                    style: { transformPerspective: 1200 },
                                    children: e(bt, {
                                      De81Dd2tF: e(A, {
                                        children: w("p", {
                                          children: [
                                            "A maximum of ",
                                            e("strong", {
                                              children: "110.000.000 DNX ",
                                            }),
                                            "utility coins with a deflationary emission schedule.",
                                          ],
                                        }),
                                      }),
                                      FXMLloUXk:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      height: "100%",
                                      HMV4Yoe7M:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      id: "QqoAkFZMc",
                                      KXaYyhqTQ: "thin",
                                      layoutId: "QqoAkFZMc",
                                      lFSXA88cV: "Finite Supply",
                                      style: { width: "100%" },
                                      tXM8rNFsJ: "Database",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(F, {
                                breakpoint: i,
                                overrides: {
                                  gBDphNyak: {
                                    width: `calc(min(max(${
                                      o?.width || "100vw"
                                    }, 1px), 1680px) - 128px)`,
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      5840 +
                                      96 +
                                      120 +
                                      32 +
                                      544,
                                  },
                                  OQjYGxmh9: {
                                    width: `calc(min(${
                                      o?.width || "100vw"
                                    }, 1680px) - 88px)`,
                                    y: void 0,
                                  },
                                },
                                children: e(y, {
                                  height: 208,
                                  width: `max((min(max(${
                                    o?.width || "100vw"
                                  }, 1px), 1680px) - 384px) / 3, 1px)`,
                                  y:
                                    (o?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    5840 +
                                    96 +
                                    120 +
                                    32,
                                  children: e(Rr, {
                                    __framer__animate: { transition: yn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Er,
                                    __framer__exit: gl,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-15hxvrs-container",
                                    style: { transformPerspective: 1200 },
                                    children: e(bt, {
                                      De81Dd2tF: e(A, {
                                        children: e("p", {
                                          children:
                                            "With Dynex, mining is channelled through solving real-world problems, with real, proven results.",
                                        }),
                                      }),
                                      FXMLloUXk:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      height: "100%",
                                      HMV4Yoe7M:
                                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                      id: "H4Jfh9Xd1",
                                      KXaYyhqTQ: "thin",
                                      layoutId: "H4Jfh9Xd1",
                                      lFSXA88cV: "Sustainable",
                                      style: { width: "100%" },
                                      tXM8rNFsJ: "Leaf",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          e("div", {
                            className: "framer-vnaxpa",
                            "data-framer-name": "Bottom Line",
                          }),
                        ],
                      }),
                      e("div", {
                        className: "framer-eszvd0",
                        "data-framer-name": "Connect",
                        children: w("div", {
                          className: "framer-xnlg9l",
                          "data-framer-name": "Content",
                          children: [
                            w("div", {
                              className: "framer-e1krg7",
                              "data-framer-name": "Title",
                              children: [
                                e(F, {
                                  breakpoint: i,
                                  overrides: {
                                    gBDphNyak: {
                                      y:
                                        (o?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        6978 +
                                        0 +
                                        64 +
                                        0 +
                                        11,
                                    },
                                    OQjYGxmh9: { y: void 0 },
                                  },
                                  children: e(y, {
                                    height: 28,
                                    width: "32px",
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      6434 +
                                      0 +
                                      64 +
                                      0 +
                                      11,
                                    children: e(k, {
                                      className: "framer-1ccszd4-container",
                                      children: e(Qe, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId:
                                          "WUkI6RCNj",
                                        __framer__threshold: 0,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "dCrGeYxQN",
                                        height: "100%",
                                        id: "u8MPIr73d",
                                        layoutId: "u8MPIr73d",
                                        SJurDrY8F: " 003",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "VW28iYURk",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                e(y, {
                                  children: e(k, {
                                    className: "framer-j0txb0-container",
                                    children: e(ge, {
                                      animDelay: 0,
                                      animDuration: 0.1,
                                      animRepeat: 8,
                                      animStagger: 0.05,
                                      content: "Connect With",
                                      fontSize:
                                        "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                      fontWeight: 400,
                                      height: "100%",
                                      id: "TXFPoDzII",
                                      layoutId: "TXFPoDzII",
                                      letterSpace: -1,
                                      repeatType: "mirror",
                                      style: { width: "100%" },
                                      textBorder: "1px",
                                      textColor:
                                        "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(y, {
                                  children: e(k, {
                                    className: "framer-1poenmd-container",
                                    children: e(ge, {
                                      animDelay: 0,
                                      animDuration: 0.1,
                                      animRepeat: 8,
                                      animStagger: 0.05,
                                      content: "Dynex",
                                      fontSize:
                                        "clamp(2.225rem,calc(2.225rem + ((1vw - .48rem)*8.4135)),3.25rem)",
                                      fontWeight: 400,
                                      height: "100%",
                                      id: "wAHzBVcnw",
                                      layoutId: "wAHzBVcnw",
                                      letterSpace: -1,
                                      repeatType: "mirror",
                                      style: { width: "100%" },
                                      textBorder: "1px",
                                      textColor:
                                        "var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, rgb(102, 216, 250))",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(F, {
                                  breakpoint: i,
                                  overrides: {
                                    gBDphNyak: {
                                      y:
                                        (o?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        6978 +
                                        0 +
                                        64 +
                                        0 +
                                        11,
                                    },
                                    OQjYGxmh9: { y: void 0 },
                                  },
                                  children: e(y, {
                                    height: 28,
                                    width: "32px",
                                    y:
                                      (o?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      6434 +
                                      0 +
                                      64 +
                                      0 +
                                      11,
                                    children: e(k, {
                                      className: "framer-xl091t-container",
                                      children: e(Qe, {
                                        __framer__animateOnce: !1,
                                        __framer__obscuredVariantId:
                                          "VW28iYURk",
                                        __framer__threshold: 0,
                                        __framer__variantAppearEffectEnabled:
                                          !0,
                                        __framer__visibleVariantId: "XFISgv28f",
                                        height: "100%",
                                        id: "uNndbHCg0",
                                        layoutId: "uNndbHCg0",
                                        SJurDrY8F: " 003",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        variant: "XFISgv28f",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            e(y, {
                              children: e(k, {
                                className: "framer-xvbzkw-container",
                                children: e(st, {
                                  animDelay: 0,
                                  animDuration: 0.2,
                                  animRepeat: 0,
                                  animStagger: 0.05,
                                  content:
                                    "The Dynex community is a globally distributed home to developers, coin holders, miners, and members supporting the blockchain.",
                                  fontSize:
                                    "clamp(1.1rem,1.1rem + ((1vw - .2rem)*0.066),1.15rem)",
                                  height: "100%",
                                  id: "PKbtPHBF0",
                                  layoutId: "PKbtPHBF0",
                                  letterSpace: 0,
                                  repeatType: "reverse",
                                  style: { width: "100%" },
                                  textColor:
                                    "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                  width: "100%",
                                }),
                              }),
                            }),
                            w(Dr, {
                              className: "framer-1cojk32",
                              children: [
                                
                                w(f.div, {
                                  className: "framer-1y3g82n",
                                  "data-border": !0,
                                  "data-framer-name": "Cols",
                                  children: [
                                    w(f.div, {
                                      className: "framer-85lw3g",
                                      children: [
                                        e(X, {
                                          className: "framer-dkto6g",
                                          "data-framer-name": "X_logo_2023",
                                          layout: "position",
                                          opacity: 1,
                                          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 58"><path d="M 50.347 0 L 60.16 0 L 38.613 24.613 L 63.787 58 L 44.032 58 L 28.565 37.711 L 10.859 58 L 1.045 58 L 23.872 31.675 L -0.235 0 L 20.011 0 L 33.984 18.534 Z M 46.912 52.221 L 52.352 52.221 L 17.152 5.565 L 11.307 5.565 Z" fill="var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240)) /* {&quot;name&quot;:&quot;Contrast&quot;} */"></path></svg>',
                                          svgContentId: 9944167306,
                                          withExternalLayout: !0,
                                        }),
                                        w(f.div, {
                                          className: "framer-c5wwsh",
                                          "data-framer-name": "Cols",
                                          children: [
                                            e(ee, {
                                              __fromCanvasComponent: !0,
                                              children: e(A, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-1ygrrqz",
                                                  "data-styles-preset":
                                                    "aSqMlk60T",
                                                  children: "Dynex On",
                                                }),
                                              }),
                                              className: "framer-svpgbq",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(ee, {
                                              __fromCanvasComponent: !0,
                                              children: e(A, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children: "X.com",
                                                }),
                                              }),
                                              className: "framer-lys8it",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e(F, {
                                      breakpoint: i,
                                      overrides: {
                                        gBDphNyak: {
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            6978 +
                                            0 +
                                            64 +
                                            670 +
                                            0 +
                                            0 +
                                            36 +
                                            133,
                                        },
                                        OQjYGxmh9: { y: void 0 },
                                      },
                                      children: e(y, {
                                        height: 55,
                                        width: "200px",
                                        y:
                                          (o?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          6434 +
                                          0 +
                                          64 +
                                          670 +
                                          0 +
                                          36 +
                                          133,
                                        children: e(k, {
                                          className: "framer-144ryqc-container",
                                          children: e(Ct, {
                                            BbUKZRWNn:
                                              "https://x.com/dynexai_erc20",
                                            gAzMgvtIt: !0,
                                            gHTqYbO4m:
                                              "Follow us on X (Twitter)",
                                            height: "100%",
                                            id: "xjqsgE20Z",
                                            layoutId: "xjqsgE20Z",
                                            MuIfADmMF:
                                              "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                            style: { maxWidth: "100%" },
                                            variant: "egaOG97UN",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                w(f.div, {
                                  className: "framer-1ti6zyn",
                                  "data-border": !0,
                                  "data-framer-name": "Cols",
                                  children: [
                                    w(f.div, {
                                      className: "framer-16vai1i",
                                      children: [
                                        e(y, {
                                          children: e(k, {
                                            className:
                                              "framer-1rdblat-container",
                                            children: e(Ge, {
                                              color:
                                                "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                              height: "100%",
                                              iconSearch: "House",
                                              iconSelection: "TelegramLogo",
                                              id: "gJ88MyrrK",
                                              layoutId: "gJ88MyrrK",
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                              },
                                              weight: "regular",
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                        w(f.div, {
                                          className: "framer-dh4iln",
                                          "data-framer-name": "Cols",
                                          children: [
                                            e(ee, {
                                              __fromCanvasComponent: !0,
                                              children: e(A, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-1ygrrqz",
                                                  "data-styles-preset":
                                                    "aSqMlk60T",
                                                  children: "Dynex On",
                                                }),
                                              }),
                                              className: "framer-1uwxvce",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                            e(ee, {
                                              __fromCanvasComponent: !0,
                                              children: e(A, {
                                                children: e("h6", {
                                                  className:
                                                    "framer-styles-preset-14n5412",
                                                  "data-styles-preset":
                                                    "H9bHClO9b",
                                                  children: "Telegram",
                                                }),
                                              }),
                                              className: "framer-1f23hgh",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e(F, {
                                      breakpoint: i,
                                      overrides: {
                                        gBDphNyak: {
                                          width: `calc(max((max(min(max(${
                                            o?.width || "100vw"
                                          }, 1px), 1680px) - 128px, 1px) - 36px) / 2, 50px) - 72px)`,
                                          y:
                                            (o?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            6978 +
                                            0 +
                                            64 +
                                            670 +
                                            0 +
                                            299 +
                                            36 +
                                            136,
                                        },
                                        OQjYGxmh9: {
                                          width: `calc(max(min(${
                                            o?.width || "100vw"
                                          }, 1680px) - 88px, 1px) - 72px)`,
                                          y: void 0,
                                        },
                                      },
                                      children: e(y, {
                                        height: 55,
                                        width: `calc(max((max(min(max(${
                                          o?.width || "100vw"
                                        }, 1px), 1680px) - 256px, 1px) - 72px) / 3, 1px) - 72px)`,
                                        y:
                                          (o?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          6434 +
                                          0 +
                                          64 +
                                          670 +
                                          0 +
                                          36 +
                                          136,
                                        children: e(k, {
                                          className: "framer-1p28id3-container",
                                          children: e(Ct, {
                                            BbUKZRWNn:
                                              "https://t.me/dynexai_erc20",
                                            gAzMgvtIt: !0,
                                            gHTqYbO4m:
                                              "Follow us on Telegram Community",
                                            height: "100%",
                                            id: "yvULkAhKi",
                                            layoutId: "yvULkAhKi",
                                            MuIfADmMF:
                                              "var(--token-dbe9c9f1-6551-45ae-a3bb-b3cb0a81011d, rgb(255, 253, 240))",
                                            style: { width: "100%" },
                                            variant: "egaOG97UN",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            
                          ],
                        }),
                      }),
                      e("div", {
                        className: "framer-1obrtwh",
                        "data-framer-name": "Footer Container",
                        children: e(F, {
                          breakpoint: i,
                          overrides: {
                            gBDphNyak: {
                              width: `max(min(max(${
                                o?.width || "100vw"
                              }, 1px), 1680px) - 128px, 1px)`,
                              y: (o?.y || 0) + 0 + 0 + 0 + 0 + 8420 + 0,
                            },
                            OQjYGxmh9: {
                              width: `max(min(${
                                o?.width || "100vw"
                              }, 1680px) - 88px, 1px)`,
                              y: void 0,
                            },
                          },
                          children: e(y, {
                            height: 564,
                            width: `max(min(max(${
                              o?.width || "100vw"
                            }, 1px), 1680px) - 256px, 1px)`,
                            y: (o?.y || 0) + 0 + 0 + 0 + 0 + 7577 + 0,
                            children: e(k, {
                              className: "framer-3vgpci-container",
                              children: e(F, {
                                breakpoint: i,
                                overrides: {
                                  gBDphNyak: { variant: "aK_4VtDvt" },
                                  OQjYGxmh9: { variant: "CP4euYBms" },
                                },
                                children: e(vr, {
                                  height: "100%",
                                  id: "EXy3O_6Su",
                                  layoutId: "EXy3O_6Su",
                                  style: { width: "100%" },
                                  variant: "lKW5sKZWt",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  e(ll, {
                    animate: xl,
                    className: "framer-1vfm8sz",
                    "data-framer-appear-id": "1vfm8sz",
                    "data-framer-name": "Dynex Main Spline",
                    initial: wl,
                    optimized: !0,
                    children: e(y, {
                      children: e(k, {
                        className: "framer-mbcgd2-container",
                        children: e(He, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: "100%",
                          id: "o883wF8Cm",
                          isMixedBorderRadius: !1,
                          layoutId: "o883wF8Cm",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !1,
                          srcFile:
                            "https://framerusercontent.com/assets/53hENXf62t6mYpTiZDlOghNbWHA.mp4",
                          srcType: "Upload",
                          srcUrl:
                            "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              e(Xe, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 1384,
                  intrinsicWidth: 5104,
                  loading: We((o?.y || 0) + -99),
                  pixelHeight: 1384,
                  pixelWidth: 5104,
                  sizes: "3136px",
                  src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                  srcSet:
                    "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                },
                className: "framer-axjud0",
                "data-framer-name": "GradientBG",
                style: { rotate: -35 },
              }),
            ],
          }),
          e(bl, {
            value:
              "html body { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)); }",
          }),
          e("div", { id: "overlay" }),
        ],
      }),
    });
  }),
  zl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-zV8vy.framer-yttz9e, .framer-zV8vy .framer-yttz9e { display: block; }",
    ".framer-zV8vy.framer-t0i8jj { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1160px; }",
    ".framer-zV8vy .framer-1y2gw06 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 6; }",
    ".framer-zV8vy .framer-u47l4 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; overflow: hidden; position: absolute; right: 0px; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-zV8vy .framer-ik6mia-container { bottom: 0px; flex: none; height: 36px; position: absolute; right: 0px; width: 36px; z-index: 1; }",
    ".framer-zV8vy .framer-hm6fa1-container { flex: none; height: 36px; position: absolute; right: 0px; top: 0px; width: 36px; z-index: 1; }",
    ".framer-zV8vy .framer-38hq93-container { bottom: 0px; flex: none; height: 36px; left: 0px; position: absolute; width: 36px; z-index: 1; }",
    ".framer-zV8vy .framer-192mf81 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-zV8vy .framer-mf8anu-container { flex: none; height: 36px; left: 0px; position: absolute; top: 0px; width: 36px; z-index: 1; }",
    ".framer-zV8vy .framer-1aaxrfx { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }",
    ".framer-zV8vy .framer-um19jf { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); bottom: 0px; flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }",
    ".framer-zV8vy .framer-v9kp3w-container { flex: none; height: 37px; left: 64px; position: absolute; top: 54px; width: 740px; z-index: 5; }",
    ".framer-zV8vy .framer-1d1aoep { flex: none; height: 105px; overflow: visible; position: fixed; right: 20px; text-decoration: none; top: 23px; width: 325px; z-index: 6; }",
    ".framer-zV8vy .framer-823ko4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-15aba18 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1680px; overflow: visible; padding: 0px 128px 0px 128px; position: relative; width: 1px; z-index: 3; }",
    ".framer-zV8vy .framer-2bu7dt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: 100vh; justify-content: flex-start; min-height: 760px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1mgotue-container, .framer-zV8vy .framer-eqd83y-container, .framer-zV8vy .framer-emu1a4-container { flex: none; height: 12vh; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1jq6fq8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 730px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-108y5t3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-lmhikq-container { bottom: 74px; flex: none; height: auto; left: -160px; position: absolute; width: auto; z-index: 0; }",
    ".framer-zV8vy .framer-9f4vx8-container { bottom: -191px; flex: none; height: auto; left: -160px; position: absolute; width: auto; z-index: 1; }",
    ".framer-zV8vy .framer-1xa1i95, .framer-zV8vy .framer-xcicge { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1j84cch-container { flex: none; height: 28px; left: -54px; position: absolute; top: 16px; width: 32px; z-index: 1; }",
    ".framer-zV8vy .framer-3i14w3-container, .framer-zV8vy .framer-17mv17k-container, .framer-zV8vy .framer-wz43fz-container, .framer-zV8vy .framer-1pjtcr6-container, .framer-zV8vy .framer-kdcdz3-container, .framer-zV8vy .framer-ky81hi-container, .framer-zV8vy .framer-4r73gt-container, .framer-zV8vy .framer-1rgk5fl-container, .framer-zV8vy .framer-17kvr74-container, .framer-zV8vy .framer-qth5lt-container, .framer-zV8vy .framer-1s6h3iv-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-zV8vy .framer-1cvri-container, .framer-zV8vy .framer-1a1cylg-container, .framer-zV8vy .framer-13nhdcm-container, .framer-zV8vy .framer-1gzhw39-container { flex: none; height: auto; position: relative; width: 670px; }",
    ".framer-zV8vy .framer-1a3zth7-container { flex: none; height: auto; max-width: 580px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-17khacz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-66rai2-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }",
    ".framer-zV8vy .framer-c473q7, .framer-zV8vy .framer-mc2vo0, .framer-zV8vy .framer-1p83h9v, .framer-zV8vy .framer-15ew23 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-zV8vy .framer-ucrytk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1260px; overflow: hidden; padding: 64px 48px 0px 48px; position: relative; width: 91%; z-index: 2; }",
    ".framer-zV8vy .framer-1j1s0nw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1ws0381 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-1un7ak7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 148px; }",
    ".framer-zV8vy .framer-ez85uc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }",
    ".framer-zV8vy .framer-11p8t5y { flex: none; height: 28px; left: -200px; overflow: hidden; position: absolute; top: calc(83.33333333333336% - 28px / 2); width: 174px; z-index: 1; }",
    ".framer-zV8vy .framer-p982my, .framer-zV8vy .framer-18b1b8o { flex: none; height: 27px; left: calc(50.00000000000002% - 173px / 2); position: absolute; top: calc(50.00000000000002% - 27px / 2); width: 173px; }",
    ".framer-zV8vy .framer-2detj7 { flex: none; height: 28px; overflow: hidden; position: absolute; right: -200px; top: calc(83.33333333333336% - 28px / 2); width: 174px; z-index: 1; }",
    ".framer-zV8vy .framer-jneabt-container { flex: none; height: 100px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-3wwmq7 { aspect-ratio: 5.416666666666667 / 1; height: var(--framer-aspect-ratio-supported, 48px); opacity: 0.5; overflow: hidden; position: relative; text-decoration: none; width: 260px; }",
    ".framer-zV8vy .framer-vm1z4t { flex: none; height: 40px; left: calc(50.00000000000002% - 216.5px / 2); position: absolute; top: calc(50.00000000000002% - 40px / 2); width: 217px; }",
    ".framer-zV8vy .framer-994m81 { height: 48px; opacity: 0.5; overflow: hidden; position: relative; text-decoration: none; width: 96px; }",
    ".framer-zV8vy .framer-1uzooh8 { aspect-ratio: 2 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 80px; }",
    ".framer-zV8vy .framer-1wl76ox { height: 48px; opacity: 0.5; overflow: hidden; position: relative; width: 60px; }",
    ".framer-zV8vy .framer-1c51cfg { aspect-ratio: 1.275 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 51px; }",
    ".framer-zV8vy .framer-1qcq3v2 { height: 48px; opacity: 0.5; overflow: hidden; position: relative; text-decoration: none; width: 174px; }",
    ".framer-zV8vy .framer-1s44xwn { flex: none; height: 40px; left: calc(50.00000000000002% - 145px / 2); position: absolute; top: calc(50.00000000000002% - 40px / 2); width: 145px; }",
    ".framer-zV8vy .framer-q46itv { height: 48px; opacity: 0.5; overflow: hidden; position: relative; width: 169px; }",
    ".framer-zV8vy .framer-1afzfi8 { aspect-ratio: 3.522727272727273 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 140px; }",
    ".framer-zV8vy .framer-11yqqr1, .framer-zV8vy .framer-14pn7ha, .framer-zV8vy .framer-1x3lhd6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1ptnged, .framer-zV8vy .framer-8z1hbs, .framer-zV8vy .framer-1eh6r9a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-k68ne1, .framer-zV8vy .framer-1nm2foo, .framer-zV8vy .framer-93dt6s, .framer-zV8vy .framer-1pxwdg1, .framer-zV8vy .framer-e1krg7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1207ayy-container, .framer-zV8vy .framer-pfu822-container, .framer-zV8vy .framer-1t7eor5-container, .framer-zV8vy .framer-97k29e-container, .framer-zV8vy .framer-1ccszd4-container, .framer-zV8vy .framer-xl091t-container { flex: none; height: 28px; left: -56px; position: absolute; top: 11px; width: 32px; z-index: 1; }",
    ".framer-zV8vy .framer-358hsh-container, .framer-zV8vy .framer-3lzfe5-container, .framer-zV8vy .framer-17f660j-container, .framer-zV8vy .framer-1ctut5b-container, .framer-zV8vy .framer-j0txb0-container, .framer-zV8vy .framer-1poenmd-container, .framer-zV8vy .framer-xvbzkw-container, .framer-zV8vy .framer-1p28id3-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-sq6n55 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-zV8vy .framer-kw1jsg, .framer-zV8vy .framer-obkman { align-content: flex-start; align-items: flex-start; background: radial-gradient(64.5506419400856% 90.5% at 125.49999999999999% -12.6%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%); display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; max-width: 400px; min-height: 220px; min-width: 200px; opacity: 0.8; overflow: visible; padding: 12px; position: relative; text-decoration: none; width: 1px; }",
    ".framer-zV8vy .framer-1t1cvba-container, .framer-zV8vy .framer-u4k4f7-container { cursor: pointer; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(49.90757855822553% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-zV8vy .framer-ig5fw1, .framer-zV8vy .framer-1vo7rt6 { aspect-ratio: 0.6516007532956686 / 1; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; flex: none; height: var(--framer-aspect-ratio-supported, 485px); overflow: visible; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-43jza1, .framer-zV8vy .framer-1mfs98l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-gsffbn, .framer-zV8vy .framer-2vfkmk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1hz602j-container, .framer-zV8vy .framer-1k00yzf-container, .framer-zV8vy .framer-ic7y4u-container, .framer-zV8vy .framer-m57ot7-container, .framer-zV8vy .framer-1nlgibh-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-zV8vy .framer-1mg6fza-container { flex: none; height: 20vh; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1joof58, .framer-zV8vy .framer-16lf7wg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-zV8vy .framer-wfni3p-container, .framer-zV8vy .framer-1dbob5z-container, .framer-zV8vy .framer-218h5s-container, .framer-zV8vy .framer-10v8pbi-container, .framer-zV8vy .framer-15hxvrs-container, .framer-zV8vy .framer-3vgpci-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-27dhyc, .framer-zV8vy .framer-dldqq0, .framer-zV8vy .framer-e8alff { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-mja1sd-container { aspect-ratio: 1.7232394366197183 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 525px); position: relative; width: 100%; z-index: 0; }",
    ".framer-zV8vy .framer-7gm4ps { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-zV8vy .framer-1b7f9zn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-1s3vqmi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-9l46jv-container { flex: none; height: 60px; position: relative; width: 482px; }",
    ".framer-zV8vy .framer-196d1vc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 96px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 4px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-zV8vy .framer-1gubb1w { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: hidden; padding: 0px; position: sticky; top: 0px; width: 1px; will-change: transform; z-index: 1; }",
    ".framer-zV8vy .framer-gb82ua { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 550px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-2jsuc4-container { flex: none; height: auto; left: 0px; position: absolute; top: 50%; transform: translateY(-50%); width: 1536px; z-index: 1; }",
    ".framer-zV8vy .framer-1ezsl6p { flex: none; height: 161px; left: -50px; overflow: visible; position: absolute; top: -30px; width: 192px; z-index: 0; }",
    ".framer-zV8vy .framer-1v9h3mi { bottom: -19px; flex: none; height: 161px; position: absolute; right: -20px; width: 192px; }",
    '.framer-zV8vy .framer-1x3sgfd { align-content: flex-start; align-items: flex-start; background: radial-gradient(45.800000000000004% 50% at 51% 91.4%, #0d0c1f 0%, var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */ 100%); box-shadow: 0px 110px 50px -80px var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 96px 0px 96px 0px; position: relative; width: 100%; z-index: 2; }',
    ".framer-zV8vy .framer-eob9dl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-10zqtdm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 0; }",
    ".framer-zV8vy .framer-8ard2m-container { flex: none; height: 60px; left: 200px; position: absolute; top: 0px; width: 1px; z-index: 1; }",
    ".framer-zV8vy .framer-7zk2qk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px 0px 32px 0px; position: relative; width: 100%; z-index: 3; }",
    ".framer-zV8vy .framer-vnaxpa { background: radial-gradient(31% 50% at 50% 50%, #ffffff 0%, rgba(255, 255, 255, 0) 100%); bottom: 0px; flex: none; height: 1px; left: calc(49.666666666666686% - 150% / 2); opacity: 0.25; overflow: hidden; position: absolute; width: 150%; z-index: 1; }",
    ".framer-zV8vy .framer-eszvd0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-xnlg9l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 64px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-zV8vy .framer-1cojk32 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1sr613r, .framer-zV8vy .framer-1ti6zyn { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: inset 0px 2px 0px 0px var(--token-91c08994-193e-45f6-9137-ba941472f09e, #5c5b56), inset 0px -2px 0px 0px var(--token-91c08994-193e-45f6-9137-ba941472f09e, rgb(92, 91, 86)); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: min-content; justify-content: center; overflow: hidden; padding: 36px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-zV8vy .framer-njspiq, .framer-zV8vy .framer-85lw3g, .framer-zV8vy .framer-16vai1i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-zV8vy .framer-woojdp, .framer-zV8vy .framer-1rdblat-container { flex: none; height: 64px; position: relative; width: 64px; }",
    ".framer-zV8vy .framer-huraj9, .framer-zV8vy .framer-c5wwsh, .framer-zV8vy .framer-dh4iln { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-zV8vy .framer-pn4bch, .framer-zV8vy .framer-76x44r, .framer-zV8vy .framer-svpgbq, .framer-zV8vy .framer-lys8it, .framer-zV8vy .framer-1uwxvce, .framer-zV8vy .framer-1f23hgh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-zV8vy .framer-1y3g82n { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-left-radius: 4px; border-top-right-radius: 4px; box-shadow: inset 0px 2px 0px 0px var(--token-91c08994-193e-45f6-9137-ba941472f09e, #5c5b56), inset 0px -2px 0px 0px var(--token-91c08994-193e-45f6-9137-ba941472f09e, rgb(92, 91, 86)); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 72px; height: auto; justify-content: center; overflow: hidden; padding: 36px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-zV8vy .framer-dkto6g { flex: none; height: 58px; position: relative; width: 64px; }",
    ".framer-zV8vy .framer-144ryqc-container { flex: none; height: auto; max-width: 200px; position: relative; width: auto; }",
    ".framer-zV8vy .framer-1obrtwh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-zV8vy .framer-1vfm8sz { align-content: center; align-items: center; aspect-ratio: 1.6211936662606576 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 940px); justify-content: center; left: -363px; mix-blend-mode: screen; overflow: visible; padding: 0px; position: absolute; right: 0px; top: -73px; z-index: 2; }",
    ".framer-zV8vy .framer-mbcgd2-container { aspect-ratio: 1.7232394366197183 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 884px); position: relative; width: 100%; z-index: 0; }",
    ".framer-zV8vy .framer-axjud0 { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 784px); left: -1371px; overflow: hidden; position: absolute; top: -99px; width: 3136px; z-index: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zV8vy.framer-t0i8jj, .framer-zV8vy .framer-823ko4, .framer-zV8vy .framer-15aba18, .framer-zV8vy .framer-2bu7dt, .framer-zV8vy .framer-1jq6fq8, .framer-zV8vy .framer-108y5t3, .framer-zV8vy .framer-1xa1i95, .framer-zV8vy .framer-17khacz, .framer-zV8vy .framer-xcicge, .framer-zV8vy .framer-ucrytk, .framer-zV8vy .framer-1j1s0nw, .framer-zV8vy .framer-1ws0381, .framer-zV8vy .framer-1un7ak7, .framer-zV8vy .framer-11yqqr1, .framer-zV8vy .framer-1ptnged, .framer-zV8vy .framer-k68ne1, .framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-kw1jsg, .framer-zV8vy .framer-43jza1, .framer-zV8vy .framer-gsffbn, .framer-zV8vy .framer-14pn7ha, .framer-zV8vy .framer-8z1hbs, .framer-zV8vy .framer-1nm2foo, .framer-zV8vy .framer-sq6n55, .framer-zV8vy .framer-obkman, .framer-zV8vy .framer-1mfs98l, .framer-zV8vy .framer-2vfkmk, .framer-zV8vy .framer-1x3lhd6, .framer-zV8vy .framer-1eh6r9a, .framer-zV8vy .framer-93dt6s, .framer-zV8vy .framer-1joof58, .framer-zV8vy .framer-27dhyc, .framer-zV8vy .framer-7gm4ps, .framer-zV8vy .framer-1b7f9zn, .framer-zV8vy .framer-1pxwdg1, .framer-zV8vy .framer-16lf7wg, .framer-zV8vy .framer-1s3vqmi, .framer-zV8vy .framer-196d1vc, .framer-zV8vy .framer-1gubb1w, .framer-zV8vy .framer-dldqq0, .framer-zV8vy .framer-gb82ua, .framer-zV8vy .framer-1x3sgfd, .framer-zV8vy .framer-eob9dl, .framer-zV8vy .framer-7zk2qk, .framer-zV8vy .framer-eszvd0, .framer-zV8vy .framer-xnlg9l, .framer-zV8vy .framer-e1krg7, .framer-zV8vy .framer-1cojk32, .framer-zV8vy .framer-1sr613r, .framer-zV8vy .framer-njspiq, .framer-zV8vy .framer-huraj9, .framer-zV8vy .framer-1y3g82n, .framer-zV8vy .framer-85lw3g, .framer-zV8vy .framer-c5wwsh, .framer-zV8vy .framer-1ti6zyn, .framer-zV8vy .framer-16vai1i, .framer-zV8vy .framer-dh4iln, .framer-zV8vy .framer-e8alff, .framer-zV8vy .framer-1obrtwh, .framer-zV8vy .framer-1vfm8sz { gap: 0px; } .framer-zV8vy.framer-t0i8jj > *, .framer-zV8vy .framer-1jq6fq8 > *, .framer-zV8vy .framer-1xa1i95 > *, .framer-zV8vy .framer-xcicge > *, .framer-zV8vy .framer-11yqqr1 > *, .framer-zV8vy .framer-14pn7ha > *, .framer-zV8vy .framer-1x3lhd6 > *, .framer-zV8vy .framer-1b7f9zn > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-zV8vy.framer-t0i8jj > :first-child, .framer-zV8vy .framer-15aba18 > :first-child, .framer-zV8vy .framer-2bu7dt > :first-child, .framer-zV8vy .framer-1jq6fq8 > :first-child, .framer-zV8vy .framer-108y5t3 > :first-child, .framer-zV8vy .framer-1xa1i95 > :first-child, .framer-zV8vy .framer-xcicge > :first-child, .framer-zV8vy .framer-ucrytk > :first-child, .framer-zV8vy .framer-1ws0381 > :first-child, .framer-zV8vy .framer-11yqqr1 > :first-child, .framer-zV8vy .framer-1ptnged > :first-child, .framer-zV8vy .framer-k68ne1 > :first-child, .framer-zV8vy .framer-kw1jsg > :first-child, .framer-zV8vy .framer-43jza1 > :first-child, .framer-zV8vy .framer-gsffbn > :first-child, .framer-zV8vy .framer-14pn7ha > :first-child, .framer-zV8vy .framer-8z1hbs > :first-child, .framer-zV8vy .framer-1nm2foo > :first-child, .framer-zV8vy .framer-obkman > :first-child, .framer-zV8vy .framer-1mfs98l > :first-child, .framer-zV8vy .framer-2vfkmk > :first-child, .framer-zV8vy .framer-1x3lhd6 > :first-child, .framer-zV8vy .framer-1eh6r9a > :first-child, .framer-zV8vy .framer-93dt6s > :first-child, .framer-zV8vy .framer-1b7f9zn > :first-child, .framer-zV8vy .framer-1pxwdg1 > :first-child, .framer-zV8vy .framer-1gubb1w > :first-child, .framer-zV8vy .framer-1x3sgfd > :first-child, .framer-zV8vy .framer-eob9dl > :first-child, .framer-zV8vy .framer-xnlg9l > :first-child, .framer-zV8vy .framer-e1krg7 > :first-child, .framer-zV8vy .framer-1sr613r > :first-child, .framer-zV8vy .framer-huraj9 > :first-child, .framer-zV8vy .framer-1y3g82n > :first-child, .framer-zV8vy .framer-c5wwsh > :first-child, .framer-zV8vy .framer-1ti6zyn > :first-child, .framer-zV8vy .framer-dh4iln > :first-child { margin-top: 0px; } .framer-zV8vy.framer-t0i8jj > :last-child, .framer-zV8vy .framer-15aba18 > :last-child, .framer-zV8vy .framer-2bu7dt > :last-child, .framer-zV8vy .framer-1jq6fq8 > :last-child, .framer-zV8vy .framer-108y5t3 > :last-child, .framer-zV8vy .framer-1xa1i95 > :last-child, .framer-zV8vy .framer-xcicge > :last-child, .framer-zV8vy .framer-ucrytk > :last-child, .framer-zV8vy .framer-1ws0381 > :last-child, .framer-zV8vy .framer-11yqqr1 > :last-child, .framer-zV8vy .framer-1ptnged > :last-child, .framer-zV8vy .framer-k68ne1 > :last-child, .framer-zV8vy .framer-kw1jsg > :last-child, .framer-zV8vy .framer-43jza1 > :last-child, .framer-zV8vy .framer-gsffbn > :last-child, .framer-zV8vy .framer-14pn7ha > :last-child, .framer-zV8vy .framer-8z1hbs > :last-child, .framer-zV8vy .framer-1nm2foo > :last-child, .framer-zV8vy .framer-obkman > :last-child, .framer-zV8vy .framer-1mfs98l > :last-child, .framer-zV8vy .framer-2vfkmk > :last-child, .framer-zV8vy .framer-1x3lhd6 > :last-child, .framer-zV8vy .framer-1eh6r9a > :last-child, .framer-zV8vy .framer-93dt6s > :last-child, .framer-zV8vy .framer-1b7f9zn > :last-child, .framer-zV8vy .framer-1pxwdg1 > :last-child, .framer-zV8vy .framer-1gubb1w > :last-child, .framer-zV8vy .framer-1x3sgfd > :last-child, .framer-zV8vy .framer-eob9dl > :last-child, .framer-zV8vy .framer-xnlg9l > :last-child, .framer-zV8vy .framer-e1krg7 > :last-child, .framer-zV8vy .framer-1sr613r > :last-child, .framer-zV8vy .framer-huraj9 > :last-child, .framer-zV8vy .framer-1y3g82n > :last-child, .framer-zV8vy .framer-c5wwsh > :last-child, .framer-zV8vy .framer-1ti6zyn > :last-child, .framer-zV8vy .framer-dh4iln > :last-child { margin-bottom: 0px; } .framer-zV8vy .framer-823ko4 > *, .framer-zV8vy .framer-eszvd0 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-zV8vy .framer-823ko4 > :first-child, .framer-zV8vy .framer-17khacz > :first-child, .framer-zV8vy .framer-1j1s0nw > :first-child, .framer-zV8vy .framer-1un7ak7 > :first-child, .framer-zV8vy .framer-1s5c8fv > :first-child, .framer-zV8vy .framer-sq6n55 > :first-child, .framer-zV8vy .framer-1joof58 > :first-child, .framer-zV8vy .framer-27dhyc > :first-child, .framer-zV8vy .framer-7gm4ps > :first-child, .framer-zV8vy .framer-16lf7wg > :first-child, .framer-zV8vy .framer-1s3vqmi > :first-child, .framer-zV8vy .framer-196d1vc > :first-child, .framer-zV8vy .framer-dldqq0 > :first-child, .framer-zV8vy .framer-gb82ua > :first-child, .framer-zV8vy .framer-7zk2qk > :first-child, .framer-zV8vy .framer-eszvd0 > :first-child, .framer-zV8vy .framer-1cojk32 > :first-child, .framer-zV8vy .framer-njspiq > :first-child, .framer-zV8vy .framer-85lw3g > :first-child, .framer-zV8vy .framer-16vai1i > :first-child, .framer-zV8vy .framer-e8alff > :first-child, .framer-zV8vy .framer-1obrtwh > :first-child, .framer-zV8vy .framer-1vfm8sz > :first-child { margin-left: 0px; } .framer-zV8vy .framer-823ko4 > :last-child, .framer-zV8vy .framer-17khacz > :last-child, .framer-zV8vy .framer-1j1s0nw > :last-child, .framer-zV8vy .framer-1un7ak7 > :last-child, .framer-zV8vy .framer-1s5c8fv > :last-child, .framer-zV8vy .framer-sq6n55 > :last-child, .framer-zV8vy .framer-1joof58 > :last-child, .framer-zV8vy .framer-27dhyc > :last-child, .framer-zV8vy .framer-7gm4ps > :last-child, .framer-zV8vy .framer-16lf7wg > :last-child, .framer-zV8vy .framer-1s3vqmi > :last-child, .framer-zV8vy .framer-196d1vc > :last-child, .framer-zV8vy .framer-dldqq0 > :last-child, .framer-zV8vy .framer-gb82ua > :last-child, .framer-zV8vy .framer-7zk2qk > :last-child, .framer-zV8vy .framer-eszvd0 > :last-child, .framer-zV8vy .framer-1cojk32 > :last-child, .framer-zV8vy .framer-njspiq > :last-child, .framer-zV8vy .framer-85lw3g > :last-child, .framer-zV8vy .framer-16vai1i > :last-child, .framer-zV8vy .framer-e8alff > :last-child, .framer-zV8vy .framer-1obrtwh > :last-child, .framer-zV8vy .framer-1vfm8sz > :last-child { margin-right: 0px; } .framer-zV8vy .framer-15aba18 > *, .framer-zV8vy .framer-k68ne1 > *, .framer-zV8vy .framer-1nm2foo > *, .framer-zV8vy .framer-93dt6s > *, .framer-zV8vy .framer-1pxwdg1 > *, .framer-zV8vy .framer-eob9dl > *, .framer-zV8vy .framer-e1krg7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-zV8vy .framer-2bu7dt > *, .framer-zV8vy .framer-108y5t3 > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-zV8vy .framer-17khacz > *, .framer-zV8vy .framer-1cojk32 > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-zV8vy .framer-ucrytk > *, .framer-zV8vy .framer-1ptnged > *, .framer-zV8vy .framer-43jza1 > *, .framer-zV8vy .framer-8z1hbs > *, .framer-zV8vy .framer-1mfs98l > *, .framer-zV8vy .framer-1eh6r9a > *, .framer-zV8vy .framer-1x3sgfd > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-zV8vy .framer-1j1s0nw > *, .framer-zV8vy .framer-njspiq > *, .framer-zV8vy .framer-85lw3g > *, .framer-zV8vy .framer-16vai1i > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-zV8vy .framer-1ws0381 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-zV8vy .framer-1un7ak7 > *, .framer-zV8vy .framer-1s3vqmi > *, .framer-zV8vy .framer-gb82ua > *, .framer-zV8vy .framer-1obrtwh > *, .framer-zV8vy .framer-1vfm8sz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-zV8vy .framer-1s5c8fv > *, .framer-zV8vy .framer-sq6n55 > *, .framer-zV8vy .framer-7zk2qk > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-zV8vy .framer-kw1jsg > *, .framer-zV8vy .framer-obkman > *, .framer-zV8vy .framer-1sr613r > *, .framer-zV8vy .framer-1y3g82n > *, .framer-zV8vy .framer-1ti6zyn > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-zV8vy .framer-gsffbn > *, .framer-zV8vy .framer-2vfkmk > *, .framer-zV8vy .framer-1gubb1w > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-zV8vy .framer-1joof58 > *, .framer-zV8vy .framer-7gm4ps > *, .framer-zV8vy .framer-16lf7wg > * { margin: 0px; margin-left: calc(72px / 2); margin-right: calc(72px / 2); } .framer-zV8vy .framer-27dhyc > *, .framer-zV8vy .framer-dldqq0 > *, .framer-zV8vy .framer-e8alff > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-zV8vy .framer-196d1vc > * { margin: 0px; margin-left: calc(96px / 2); margin-right: calc(96px / 2); } .framer-zV8vy .framer-xnlg9l > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-zV8vy .framer-huraj9 > *, .framer-zV8vy .framer-c5wwsh > *, .framer-zV8vy .framer-dh4iln > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }",
    ...Bt,
    ...Rt,
    ...Mt,
    ...Ia,
    ...Pt,
    '.framer-zV8vy[data-border="true"]::after, .framer-zV8vy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@media (max-width: 809px) { .framer-zV8vy.framer-t0i8jj { width: 390px; } .framer-zV8vy .framer-v9kp3w-container { height: auto; left: 24px; right: 24px; top: 36px; width: unset; } .framer-zV8vy .framer-823ko4, .framer-zV8vy .framer-1joof58, .framer-zV8vy .framer-196d1vc, .framer-zV8vy .framer-7zk2qk, .framer-zV8vy .framer-1cojk32 { flex-direction: column; } .framer-zV8vy .framer-15aba18 { flex: none; padding: 0px 44px 0px 44px; width: 100%; } .framer-zV8vy .framer-1a3zth7-container { order: 4; } .framer-zV8vy .framer-17khacz { flex-wrap: wrap; order: 5; } .framer-zV8vy .framer-xcicge { order: 3; } .framer-zV8vy .framer-c473q7 { order: 1; } .framer-zV8vy .framer-mc2vo0 { order: 0; } .framer-zV8vy .framer-ucrytk { padding: 64px 0px 0px 0px; } .framer-zV8vy .framer-1j1s0nw { padding: 0px; } .framer-zV8vy .framer-eqd83y-container, .framer-zV8vy .framer-emu1a4-container, .framer-zV8vy .framer-1mg6fza-container { height: 10vh; } .framer-zV8vy .framer-1a1cylg-container, .framer-zV8vy .framer-13nhdcm-container, .framer-zV8vy .framer-1gzhw39-container { width: 100%; } .framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-sq6n55 { flex-direction: column; gap: 32px; } .framer-zV8vy .framer-kw1jsg, .framer-zV8vy .framer-obkman { flex: none; order: 0; width: 100%; } .framer-zV8vy .framer-ig5fw1, .framer-zV8vy .framer-1vo7rt6 { height: var(--framer-aspect-ratio-supported, 307px); } .framer-zV8vy .framer-43jza1, .framer-zV8vy .framer-1mfs98l { flex: none; gap: 24px; order: 1; width: 100%; } .framer-zV8vy .framer-wfni3p-container, .framer-zV8vy .framer-1dbob5z-container, .framer-zV8vy .framer-1gubb1w, .framer-zV8vy .framer-gb82ua, .framer-zV8vy .framer-218h5s-container, .framer-zV8vy .framer-10v8pbi-container, .framer-zV8vy .framer-15hxvrs-container { flex: none; width: 100%; } .framer-zV8vy .framer-27dhyc { flex-wrap: wrap; } .framer-zV8vy .framer-mja1sd-container { aspect-ratio: 1.023728813559322 / 1; height: var(--framer-aspect-ratio-supported, 195px); } .framer-zV8vy .framer-1sr613r, .framer-zV8vy .framer-1ti6zyn { flex: none; gap: 32px; width: 100%; } .framer-zV8vy .framer-1y3g82n { align-self: unset; flex: none; gap: 32px; height: min-content; width: 100%; } .framer-zV8vy .framer-1vfm8sz { height: var(--framer-aspect-ratio-supported, 545px); left: -299px; right: -195px; top: 60px; } .framer-zV8vy .framer-mbcgd2-container { height: var(--framer-aspect-ratio-supported, 116px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zV8vy .framer-823ko4, .framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-43jza1, .framer-zV8vy .framer-sq6n55, .framer-zV8vy .framer-1mfs98l, .framer-zV8vy .framer-1joof58, .framer-zV8vy .framer-196d1vc, .framer-zV8vy .framer-7zk2qk, .framer-zV8vy .framer-1cojk32, .framer-zV8vy .framer-1sr613r, .framer-zV8vy .framer-1y3g82n, .framer-zV8vy .framer-1ti6zyn { gap: 0px; } .framer-zV8vy .framer-823ko4 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-zV8vy .framer-823ko4 > :first-child, .framer-zV8vy .framer-1s5c8fv > :first-child, .framer-zV8vy .framer-43jza1 > :first-child, .framer-zV8vy .framer-sq6n55 > :first-child, .framer-zV8vy .framer-1mfs98l > :first-child, .framer-zV8vy .framer-1joof58 > :first-child, .framer-zV8vy .framer-196d1vc > :first-child, .framer-zV8vy .framer-7zk2qk > :first-child, .framer-zV8vy .framer-1cojk32 > :first-child, .framer-zV8vy .framer-1sr613r > :first-child, .framer-zV8vy .framer-1y3g82n > :first-child, .framer-zV8vy .framer-1ti6zyn > :first-child { margin-top: 0px; } .framer-zV8vy .framer-823ko4 > :last-child, .framer-zV8vy .framer-1s5c8fv > :last-child, .framer-zV8vy .framer-43jza1 > :last-child, .framer-zV8vy .framer-sq6n55 > :last-child, .framer-zV8vy .framer-1mfs98l > :last-child, .framer-zV8vy .framer-1joof58 > :last-child, .framer-zV8vy .framer-196d1vc > :last-child, .framer-zV8vy .framer-7zk2qk > :last-child, .framer-zV8vy .framer-1cojk32 > :last-child, .framer-zV8vy .framer-1sr613r > :last-child, .framer-zV8vy .framer-1y3g82n > :last-child, .framer-zV8vy .framer-1ti6zyn > :last-child { margin-bottom: 0px; } .framer-zV8vy .framer-1s5c8fv > *, .framer-zV8vy .framer-sq6n55 > *, .framer-zV8vy .framer-1sr613r > *, .framer-zV8vy .framer-1y3g82n > *, .framer-zV8vy .framer-1ti6zyn > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-zV8vy .framer-43jza1 > *, .framer-zV8vy .framer-1mfs98l > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-zV8vy .framer-1joof58 > * { margin: 0px; margin-bottom: calc(72px / 2); margin-top: calc(72px / 2); } .framer-zV8vy .framer-196d1vc > * { margin: 0px; margin-bottom: calc(96px / 2); margin-top: calc(96px / 2); } .framer-zV8vy .framer-7zk2qk > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-zV8vy .framer-1cojk32 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } }}",
    "@media (min-width: 810px) and (max-width: 1159px) { .framer-zV8vy.framer-t0i8jj { width: 810px; } .framer-zV8vy .framer-v9kp3w-container { height: auto; left: 40px; right: 316px; top: 36px; width: unset; } .framer-zV8vy .framer-15aba18 { padding: 0px 64px 0px 64px; } .framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-sq6n55 { gap: 32px; } .framer-zV8vy .framer-ig5fw1, .framer-zV8vy .framer-1vo7rt6 { height: var(--framer-aspect-ratio-supported, 321px); } .framer-zV8vy .framer-mja1sd-container { height: var(--framer-aspect-ratio-supported, 396px); } .framer-zV8vy .framer-7zk2qk { flex-direction: column; } .framer-zV8vy .framer-218h5s-container, .framer-zV8vy .framer-10v8pbi-container, .framer-zV8vy .framer-15hxvrs-container { flex: none; width: 100%; } .framer-zV8vy .framer-1cojk32 { align-content: unset; align-items: unset; display: grid; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); } .framer-zV8vy .framer-1sr613r, .framer-zV8vy .framer-1y3g82n, .framer-zV8vy .framer-1ti6zyn { align-self: start; flex: none; height: 100%; justify-self: start; width: 100%; } .framer-zV8vy .framer-1vfm8sz { height: var(--framer-aspect-ratio-supported, 724px); } .framer-zV8vy .framer-mbcgd2-container { height: var(--framer-aspect-ratio-supported, 681px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-zV8vy .framer-1s5c8fv, .framer-zV8vy .framer-sq6n55, .framer-zV8vy .framer-7zk2qk, .framer-zV8vy .framer-1cojk32 { gap: 0px; } .framer-zV8vy .framer-1s5c8fv > *, .framer-zV8vy .framer-sq6n55 > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-zV8vy .framer-1s5c8fv > :first-child, .framer-zV8vy .framer-sq6n55 > :first-child { margin-left: 0px; } .framer-zV8vy .framer-1s5c8fv > :last-child, .framer-zV8vy .framer-sq6n55 > :last-child { margin-right: 0px; } .framer-zV8vy .framer-7zk2qk > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-zV8vy .framer-7zk2qk > :first-child { margin-top: 0px; } .framer-zV8vy .framer-7zk2qk > :last-child { margin-bottom: 0px; } .framer-zV8vy .framer-1cojk32 > *, .framer-zV8vy .framer-1cojk32 > :first-child, .framer-zV8vy .framer-1cojk32 > :last-child { margin: 0px; } }}",
  ],
  Zt = ne(Cl, zl, "framer-zV8vy"),
  Jd = Zt;
Zt.displayName = "Page";
Zt.defaultProps = { height: 6526, width: 1160 };
ie(
  Zt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Rubik",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/rubik/v28/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-NYi1VU80V4bVkA.woff2",
          weight: "500",
        },
        {
          family: "Space Grotesk",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsmNsFjTDJK.woff2",
          weight: "400",
        },
      ],
    },
    ...As,
    ...Ps,
    ...Os,
    ...Ds,
    ...qs,
    ...Bs,
    ...Us,
    ...Xs,
    ...Ws,
    ...Gs,
    ...Ys,
    ...Hs,
    ...Qs,
    ...Zs,
    ...Ks,
    ...el,
    ...rl,
    ...al,
    ...nl,
    ...il,
    ...ol,
    ...sl,
    ...de(Et),
    ...de(Dt),
    ...de(Tt),
    ...de(Sa),
    ...de(At),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Zd = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameriUlMedb93",
      slots: [],
      annotations: {
        framerLayoutTemplateCompatible: "true",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "6526",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OQjYGxmh9":{"layout":["fixed","auto"]},"gBDphNyak":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerIntrinsicWidth: "1160",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Zd as __FramerMetadata__, Jd as default };
//# sourceMappingURL=XcHa-91u2Lvqp14oEcGW0coNUzLn5yiBzoGXR1diAWA.EX4RFLLA.mjs.map

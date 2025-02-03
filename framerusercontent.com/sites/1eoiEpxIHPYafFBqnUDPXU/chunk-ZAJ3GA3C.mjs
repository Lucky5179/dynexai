import {
  a as O,
  k as Me,
  l as je,
  m as Be,
  n as Se,
  o as pe,
  p as he,
  q as ue,
  r as y,
  s as Ie,
  t as ne,
  u as Le,
  v as Pe,
  w as Ue,
} from "./chunk-SGZXRRGF.mjs";
import {
  A as Z,
  Ga as te,
  N as ee,
  Oa as J,
  R as G,
  Ra as Re,
  Sa as ae,
  Ua as ye,
  Wa as T,
  Xa as C,
  Ya as re,
  Z as q,
  aa as W,
  c as P,
  da as X,
  g as M,
  ga as A,
  ha as m,
  k as j,
  la as K,
  m as B,
  o as S,
  p as _,
  t as e,
  u as v,
  va as Ve,
  x as L,
  y as a,
  ya as g,
} from "./chunk-WBV7SVYU.mjs";
var qe = C(O),
  We = C(y),
  Xe = ["oLRgPn1dN", "B35lntTEm"],
  Ae = "framer-7c2ca",
  Ke = { B35lntTEm: "framer-v-164fmmy", oLRgPn1dN: "framer-v-sa7yaf" };
function me(i, ...r) {
  let s = {};
  return r?.forEach((o) => o && Object.assign(s, i[o])), s;
}
var Je = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Te = ({ value: i, children: r }) => {
    let s = j(L),
      o = i ?? s.transition,
      c = S(() => ({ ...s, transition: o }), [JSON.stringify(o)]);
    return e(L.Provider, { value: c, children: r });
  },
  Ee = a(P),
  Ye = { Closed: "oLRgPn1dN", Open: "B35lntTEm" },
  He = ({ height: i, id: r, width: s, ...o }) => {
    var c, p;
    return {
      ...o,
      variant:
        (p = (c = Ye[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && p !== void 0
          ? p
          : "oLRgPn1dN",
    };
  },
  Qe = (i, r) =>
    i.layoutDependency ? r.join("-") + i.layoutDependency : r.join("-"),
  Oe = M(function (i, r) {
    let { activeLocale: s, setLocale: o } = G(),
      { style: c, className: p, layoutId: x, variant: E, ...Y } = He(i),
      {
        baseVariant: n,
        classNames: H,
        gestureHandlers: ie,
        gestureVariant: u,
        setGestureState: f,
        setVariant: V,
        variants: R,
      } = J({
        cycleOrder: Xe,
        defaultVariant: "oLRgPn1dN",
        variant: E,
        variantClassNames: Ke,
      }),
      d = Qe(i, R),
      { activeVariantCallback: F, delay: h } = te(n),
      D = F(async (...N) => {
        V("B35lntTEm");
      }),
      oe = F(async (...N) => {
        V("oLRgPn1dN");
      }),
      Q = _(null),
      $ = () => n === "B35lntTEm",
      fe = ee(),
      le = B(),
      Ce = [ue],
      b = A();
    return e(Z, {
      id: x ?? le,
      children: e(Ee, {
        animate: R,
        initial: !1,
        children: e(Te, {
          value: Je,
          children: v(a.div, {
            ...Y,
            ...ie,
            className: X(Ae, ...Ce, "framer-sa7yaf", p, H),
            "data-framer-name": "Closed",
            layoutDependency: d,
            layoutId: "oLRgPn1dN",
            ref: r ?? Q,
            style: { ...c },
            ...me({ B35lntTEm: { "data-framer-name": "Open" } }, n, u),
            children: [
              v(a.div, {
                className: "framer-1pxnxpy",
                "data-framer-name": "Site Menu/Top Menu Link",
                "data-highlight": !0,
                layoutDependency: d,
                layoutId: "qTNjaHeXo",
                onTap: D,
                style: { opacity: 0.6 },
                variants: { B35lntTEm: { opacity: 1 } },
                ...me({ B35lntTEm: { onTap: oe } }, n, u),
                children: [
                  e(ae, {
                    __fromCanvasComponent: !0,
                    children: e(P, {
                      children: e(a.div, {
                        className: "framer-styles-preset-1iim7vr",
                        "data-styles-preset": "pYrYyB2kI",
                        style: {
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-tcooor, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                        },
                        children: "Contact",
                      }),
                    }),
                    className: "framer-1vmivrb",
                    fonts: ["Inter"],
                    layoutDependency: d,
                    layoutId: "E4vhiTHK1",
                    style: {
                      "--extracted-tcooor":
                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(m, {
                    children: e(a.div, {
                      className: "framer-1yxmoru-container",
                      layoutDependency: d,
                      layoutId: "nCqSilKok-container",
                      style: { rotate: 0 },
                      variants: { B35lntTEm: { rotate: 45 } },
                      children: e(O, {
                        color:
                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: "Plus",
                        id: "nCqSilKok",
                        layoutId: "nCqSilKok",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              $() &&
                v(a.div, {
                  className: "framer-11izxp",
                  "data-framer-name": "Dropdown Flex/DDown Content",
                  layoutDependency: d,
                  layoutId: "g_SNiWgLy",
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  children: [
                    e(m, {
                      ...me(
                        { B35lntTEm: { width: b?.width || "100vw" } },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-rl443t-container",
                        layoutDependency: d,
                        layoutId: "f2qXylDm2-container",
                        children: e(y, {
                          aLYjLdBef: "https://twitter.com/dynexcoin",
                          FPje3Ki9Q: "",
                          gOh95WWn9: "X(Twitter)",
                          height: "100%",
                          id: "f2qXylDm2",
                          layoutId: "f2qXylDm2",
                          style: { width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e(m, {
                      ...me(
                        { B35lntTEm: { width: b?.width || "100vw" } },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-1o0qzuh-container",
                        layoutDependency: d,
                        layoutId: "xtWbjVn1J-container",
                        children: e(y, {
                          aLYjLdBef: "https://discord.gg/2YFnG5357k",
                          FPje3Ki9Q: "",
                          gOh95WWn9: "Discord",
                          height: "100%",
                          id: "xtWbjVn1J",
                          layoutId: "xtWbjVn1J",
                          style: { width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e(m, {
                      ...me(
                        { B35lntTEm: { width: b?.width || "100vw" } },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-11dygjm-container",
                        layoutDependency: d,
                        layoutId: "lkfkLA0kL-container",
                        children: e(y, {
                          aLYjLdBef: "https://t.me/dynextg",
                          FPje3Ki9Q: "",
                          gOh95WWn9: "Telegram",
                          height: "100%",
                          id: "lkfkLA0kL",
                          layoutId: "lkfkLA0kL",
                          style: { width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: { webPageId: "s6YWe3VcZ" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "s6YWe3VcZ" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (N) =>
                        e(m, {
                          ...me(
                            { B35lntTEm: { width: b?.width || "100vw" } },
                            n,
                            u
                          ),
                          children: e(a.div, {
                            className: "framer-b208ek-container",
                            layoutDependency: d,
                            layoutId: "mmevMokkx-container",
                            children: e(y, {
                              aLYjLdBef: N[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Linktree",
                              height: "100%",
                              id: "mmevMokkx",
                              layoutId: "mmevMokkx",
                              style: { width: "100%" },
                              width: "100%",
                              ...me({ B35lntTEm: { aLYjLdBef: N[1] } }, n, u),
                            }),
                          }),
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
  ze = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-7c2ca.framer-1scnd8u, .framer-7c2ca .framer-1scnd8u { display: block; }",
    ".framer-7c2ca.framer-sa7yaf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 342px; }",
    ".framer-7c2ca .framer-1pxnxpy { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-7c2ca .framer-1vmivrb { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-7c2ca .framer-1yxmoru-container { flex: none; height: 17px; position: relative; width: 16px; }",
    ".framer-7c2ca .framer-11izxp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-7c2ca .framer-rl443t-container, .framer-7c2ca .framer-1o0qzuh-container, .framer-7c2ca .framer-11dygjm-container, .framer-7c2ca .framer-b208ek-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7c2ca.framer-sa7yaf, .framer-7c2ca .framer-1pxnxpy, .framer-7c2ca .framer-11izxp { gap: 0px; } .framer-7c2ca.framer-sa7yaf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7c2ca.framer-sa7yaf > :first-child, .framer-7c2ca .framer-11izxp > :first-child { margin-top: 0px; } .framer-7c2ca.framer-sa7yaf > :last-child, .framer-7c2ca .framer-11izxp > :last-child { margin-bottom: 0px; } .framer-7c2ca .framer-1pxnxpy > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-7c2ca .framer-1pxnxpy > :first-child { margin-left: 0px; } .framer-7c2ca .framer-1pxnxpy > :last-child { margin-right: 0px; } .framer-7c2ca .framer-11izxp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ...he,
  ],
  ge = K(Oe, ze, "framer-7c2ca"),
  Ne = ge;
ge.displayName = "ContactMobileDdown";
ge.defaultProps = { height: 30, width: 342 };
W(ge, {
  variant: {
    options: ["oLRgPn1dN", "B35lntTEm"],
    optionTitles: ["Closed", "Open"],
    title: "Variant",
    type: q.Enum,
  },
});
T(
  ge,
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
    ...qe,
    ...We,
    ...re(pe),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var $e = C(O),
  et = C(y),
  tt = ["D86Y35o2r", "dZtK2_8eh"],
  at = "framer-ZkWP3",
  rt = { D86Y35o2r: "framer-v-3imvmt", dZtK2_8eh: "framer-v-ahh7fh" };
function k(i, ...r) {
  let s = {};
  return r?.forEach((o) => o && Object.assign(s, i[o])), s;
}
var nt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  it = ({ value: i, children: r }) => {
    let s = j(L),
      o = i ?? s.transition,
      c = S(() => ({ ...s, transition: o }), [JSON.stringify(o)]);
    return e(L.Provider, { value: c, children: r });
  },
  ot = a.create(P),
  lt = { Closed: "D86Y35o2r", Open: "dZtK2_8eh" },
  dt = ({ height: i, id: r, width: s, ...o }) => {
    var c, p;
    return {
      ...o,
      variant:
        (p = (c = lt[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && p !== void 0
          ? p
          : "D86Y35o2r",
    };
  },
  st = (i, r) =>
    i.layoutDependency ? r.join("-") + i.layoutDependency : r.join("-"),
  ct = M(function (i, r) {
    let { activeLocale: s, setLocale: o } = G(),
      { style: c, className: p, layoutId: x, variant: E, ...Y } = dt(i),
      {
        baseVariant: n,
        classNames: H,
        clearLoadingGesture: ie,
        gestureHandlers: u,
        gestureVariant: f,
        isLoading: V,
        setGestureState: R,
        setVariant: d,
        variants: F,
      } = J({
        cycleOrder: tt,
        defaultVariant: "D86Y35o2r",
        variant: E,
        variantClassNames: rt,
      }),
      h = st(i, F),
      { activeVariantCallback: D, delay: oe } = te(n),
      Q = D(async (...l) => {
        d("dZtK2_8eh");
      }),
      $ = D(async (...l) => {
        d("D86Y35o2r");
      }),
      fe = _(null),
      le = () => n === "dZtK2_8eh",
      Ce = ee(),
      b = B(),
      N = [ue],
      t = A();
    return e(Z, {
      id: x ?? b,
      children: e(ot, {
        animate: F,
        initial: !1,
        children: e(it, {
          value: nt,
          children: v(a.div, {
            ...Y,
            ...u,
            className: X(at, ...N, "framer-3imvmt", p, H),
            "data-framer-name": "Closed",
            layoutDependency: h,
            layoutId: "D86Y35o2r",
            ref: r ?? fe,
            style: { ...c },
            ...k({ dZtK2_8eh: { "data-framer-name": "Open" } }, n, f),
            children: [
              v(a.div, {
                className: "framer-w97d8w",
                "data-framer-name": "Site Menu/Top Menu Link",
                "data-highlight": !0,
                layoutDependency: h,
                layoutId: "AA7wyKxAQ",
                onTap: Q,
                style: { opacity: 0.6 },
                variants: { dZtK2_8eh: { opacity: 1 } },
                ...k({ dZtK2_8eh: { onTap: $ } }, n, f),
                children: [
                  e(ae, {
                    __fromCanvasComponent: !0,
                    children: e(P, {
                      children: e(a.div, {
                        className: "framer-styles-preset-1iim7vr",
                        "data-styles-preset": "pYrYyB2kI",
                        style: {
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-tcooor, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                        },
                        children: "DNX",
                      }),
                    }),
                    className: "framer-6tjhrh",
                    fonts: ["Inter"],
                    layoutDependency: h,
                    layoutId: "NnxxpkxMS",
                    style: {
                      "--extracted-tcooor":
                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(m, {
                    children: e(a.div, {
                      className: "framer-tztxf4-container",
                      layoutDependency: h,
                      layoutId: "qM_TWR88B-container",
                      style: { rotate: 0 },
                      variants: { dZtK2_8eh: { rotate: 45 } },
                      children: e(O, {
                        color:
                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: "Plus",
                        id: "qM_TWR88B",
                        layoutId: "qM_TWR88B",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              le() &&
                v(a.div, {
                  className: "framer-1itcv0a",
                  "data-framer-name": "Dropdown Flex/DDown Content",
                  layoutDependency: h,
                  layoutId: "DYrjNTuEB",
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  children: [
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: {
                              pNMeoxCGX: "economic-model-of-dnx",
                            },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "VDd5TK_JU",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: {
                              pNMeoxCGX: "economic-model-of-dnx",
                            },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "VDd5TK_JU",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...k(
                            {
                              dZtK2_8eh: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 378) - 0 - 545) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  0,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-pfavfq-container",
                            layoutDependency: h,
                            layoutId: "I2IO7lpbK-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Econmic Model",
                              height: "100%",
                              id: "I2IO7lpbK",
                              layoutId: "I2IO7lpbK",
                              style: { width: "100%" },
                              width: "100%",
                              ...k({ dZtK2_8eh: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon" },
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
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon" },
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
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...k(
                            {
                              dZtK2_8eh: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 378) - 0 - 545) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  101,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-yvw1qw-container",
                            layoutDependency: h,
                            layoutId: "FnBFZSSoP-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Exchanges",
                              height: "100%",
                              id: "FnBFZSSoP",
                              layoutId: "FnBFZSSoP",
                              style: { width: "100%" },
                              width: "100%",
                              ...k({ dZtK2_8eh: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "mining" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "Wjd4NmEZG",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "mining" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "Wjd4NmEZG",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...k(
                            {
                              dZtK2_8eh: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 378) - 0 - 545) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  202,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-2y6sqi-container",
                            layoutDependency: h,
                            layoutId: "jslvb5km8-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Mining",
                              height: "100%",
                              id: "jslvb5km8",
                              layoutId: "jslvb5km8",
                              style: { width: "100%" },
                              width: "100%",
                              ...k({ dZtK2_8eh: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "wallets" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "tyb6cp1BS",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "wallets" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "tyb6cp1BS",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...k(
                            {
                              dZtK2_8eh: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 378) - 0 - 545) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  303,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-l4eo4c-container",
                            layoutDependency: h,
                            layoutId: "eVnAdg2vC-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Wallets",
                              height: "100%",
                              id: "eVnAdg2vC",
                              layoutId: "eVnAdg2vC",
                              style: { width: "100%" },
                              width: "100%",
                              ...k({ dZtK2_8eh: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: {
                              pNMeoxCGX:
                                "dynex-holder-incentive-program-(dhip)",
                            },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "aoJw9ZUDj",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: {
                              pNMeoxCGX:
                                "dynex-holder-incentive-program-(dhip)",
                            },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "aoJw9ZUDj",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...k(
                            {
                              dZtK2_8eh: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 378) - 0 - 545) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  404,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-6byuli-container",
                            layoutDependency: h,
                            layoutId: "KYq9JRi4Y-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "DHIP reward program",
                              height: "100%",
                              id: "KYq9JRi4Y",
                              layoutId: "KYq9JRi4Y",
                              style: { width: "100%" },
                              width: "100%",
                              ...k({ dZtK2_8eh: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
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
  mt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ZkWP3.framer-s2cckj, .framer-ZkWP3 .framer-s2cckj { display: block; }",
    ".framer-ZkWP3.framer-3imvmt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 342px; }",
    ".framer-ZkWP3 .framer-w97d8w { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-ZkWP3 .framer-6tjhrh { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-ZkWP3 .framer-tztxf4-container { flex: none; height: 17px; position: relative; width: 16px; }",
    ".framer-ZkWP3 .framer-1itcv0a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-ZkWP3 .framer-pfavfq-container, .framer-ZkWP3 .framer-yvw1qw-container, .framer-ZkWP3 .framer-2y6sqi-container, .framer-ZkWP3 .framer-l4eo4c-container, .framer-ZkWP3 .framer-6byuli-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZkWP3.framer-3imvmt, .framer-ZkWP3 .framer-w97d8w, .framer-ZkWP3 .framer-1itcv0a { gap: 0px; } .framer-ZkWP3.framer-3imvmt > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZkWP3.framer-3imvmt > :first-child, .framer-ZkWP3 .framer-1itcv0a > :first-child { margin-top: 0px; } .framer-ZkWP3.framer-3imvmt > :last-child, .framer-ZkWP3 .framer-1itcv0a > :last-child { margin-bottom: 0px; } .framer-ZkWP3 .framer-w97d8w > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ZkWP3 .framer-w97d8w > :first-child { margin-left: 0px; } .framer-ZkWP3 .framer-w97d8w > :last-child { margin-right: 0px; } .framer-ZkWP3 .framer-1itcv0a > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ...he,
  ],
  ve = K(ct, mt, "framer-ZkWP3"),
  ke = ve;
ve.displayName = "DNXMobileDdown";
ve.defaultProps = { height: 30, width: 342 };
W(ve, {
  variant: {
    options: ["D86Y35o2r", "dZtK2_8eh"],
    optionTitles: ["Closed", "Open"],
    title: "Variant",
    type: q.Enum,
  },
});
T(
  ve,
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
      ],
    },
    ...$e,
    ...et,
    ...re(pe),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ft = C(O),
  pt = C(y),
  ht = ["Q4GTnwamh", "F5pvaiPFi"],
  ut = "framer-7tonk",
  yt = { F5pvaiPFi: "framer-v-1huzky7", Q4GTnwamh: "framer-v-1ljdf2o" };
function w(i, ...r) {
  let s = {};
  return r?.forEach((o) => o && Object.assign(s, i[o])), s;
}
var gt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  vt = ({ value: i, children: r }) => {
    let s = j(L),
      o = i ?? s.transition,
      c = S(() => ({ ...s, transition: o }), [JSON.stringify(o)]);
    return e(L.Provider, { value: c, children: r });
  },
  wt = a.create(P),
  xt = { Closed: "Q4GTnwamh", Open: "F5pvaiPFi" },
  bt = ({ height: i, id: r, width: s, ...o }) => {
    var c, p;
    return {
      ...o,
      variant:
        (p = (c = xt[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && p !== void 0
          ? p
          : "Q4GTnwamh",
    };
  },
  Ct = (i, r) =>
    i.layoutDependency ? r.join("-") + i.layoutDependency : r.join("-"),
  Ft = M(function (i, r) {
    let { activeLocale: s, setLocale: o } = G(),
      { style: c, className: p, layoutId: x, variant: E, ...Y } = bt(i),
      {
        baseVariant: n,
        classNames: H,
        clearLoadingGesture: ie,
        gestureHandlers: u,
        gestureVariant: f,
        isLoading: V,
        setGestureState: R,
        setVariant: d,
        variants: F,
      } = J({
        cycleOrder: ht,
        defaultVariant: "Q4GTnwamh",
        variant: E,
        variantClassNames: yt,
      }),
      h = Ct(i, F),
      { activeVariantCallback: D, delay: oe } = te(n),
      Q = D(async (...l) => {
        d("F5pvaiPFi");
      }),
      $ = D(async (...l) => {
        d("Q4GTnwamh");
      }),
      fe = _(null),
      le = () => n === "F5pvaiPFi",
      Ce = ee(),
      b = B(),
      N = [ue],
      t = A();
    return e(Z, {
      id: x ?? b,
      children: e(wt, {
        animate: F,
        initial: !1,
        children: e(vt, {
          value: gt,
          children: v(a.div, {
            ...Y,
            ...u,
            className: X(ut, ...N, "framer-1ljdf2o", p, H),
            "data-framer-name": "Closed",
            layoutDependency: h,
            layoutId: "Q4GTnwamh",
            ref: r ?? fe,
            style: { ...c },
            ...w({ F5pvaiPFi: { "data-framer-name": "Open" } }, n, f),
            children: [
              v(a.div, {
                className: "framer-yv3nxj",
                "data-framer-name": "Site Menu/Top Menu Link",
                "data-highlight": !0,
                layoutDependency: h,
                layoutId: "MfV0RAsJJ",
                onTap: Q,
                style: { opacity: 0.6 },
                variants: { F5pvaiPFi: { opacity: 1 } },
                ...w({ F5pvaiPFi: { onTap: $ } }, n, f),
                children: [
                  e(ae, {
                    __fromCanvasComponent: !0,
                    children: e(P, {
                      children: e(a.div, {
                        className: "framer-styles-preset-1iim7vr",
                        "data-styles-preset": "pYrYyB2kI",
                        style: {
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-tcooor, var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255)))",
                        },
                        children: "About",
                      }),
                    }),
                    className: "framer-1u0kwfe",
                    fonts: ["Inter"],
                    layoutDependency: h,
                    layoutId: "vk2pPv9ya",
                    style: {
                      "--extracted-tcooor":
                        "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(m, {
                    children: e(a.div, {
                      className: "framer-14lpuz6-container",
                      layoutDependency: h,
                      layoutId: "tyX_eLNkQ-container",
                      style: { rotate: 0 },
                      variants: { F5pvaiPFi: { rotate: 45 } },
                      children: e(O, {
                        color:
                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: "Plus",
                        id: "tyX_eLNkQ",
                        layoutId: "tyX_eLNkQ",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              le() &&
                v(a.div, {
                  className: "framer-wxm1pg",
                  "data-framer-name": "Dropdown Flex/DDown Content",
                  layoutDependency: h,
                  layoutId: "KaWltWZyJ",
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                  },
                  children: [
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "n-quantum-computing" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "zc9QlKZA1",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "n-quantum-computing" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "zc9QlKZA1",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  0,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-14w23o7-container",
                            layoutDependency: h,
                            layoutId: "B8rk8ing2-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "N.Quantum Computing",
                              height: "100%",
                              id: "B8rk8ing2",
                              layoutId: "B8rk8ing2",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-whitepapers" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "hL909oHJu",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-whitepapers" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "hL909oHJu",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  101,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-9of2q6-container",
                            layoutDependency: h,
                            layoutId: "KJwLlXWTf-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Whitepapers",
                              height: "100%",
                              id: "KJwLlXWTf",
                              layoutId: "KJwLlXWTf",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "tokenomics" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "UX4FJS0SQ",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "tokenomics" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "UX4FJS0SQ",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  202,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-w9cju7-container",
                            layoutDependency: h,
                            layoutId: "uXBhG25F7-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Tokenomics",
                              height: "100%",
                              id: "uXBhG25F7",
                              layoutId: "uXBhG25F7",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "use-cases" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "NzMW45g6X",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "use-cases" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "NzMW45g6X",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  303,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-omfrsa-container",
                            layoutDependency: h,
                            layoutId: "iaB9r2Yti-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Use Cases",
                              height: "100%",
                              id: "iaB9r2Yti",
                              layoutId: "iaB9r2Yti",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-quantum-apps" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "j9ybuHkoD",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-quantum-apps" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "j9ybuHkoD",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  404,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-t7z2c0-container",
                            layoutDependency: h,
                            layoutId: "W0S_CWg77-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "quantum apps",
                              height: "100%",
                              id: "W0S_CWg77",
                              layoutId: "W0S_CWg77",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-quantum-nodes" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "NSd238q64",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "dynex-quantum-nodes" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "NSd238q64",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  505,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-1armntl-container",
                            layoutDependency: h,
                            layoutId: "N9jSfG_iZ-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "quantum nodes",
                              height: "100%",
                              id: "N9jSfG_iZ",
                              layoutId: "N9jSfG_iZ",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "team-advisors" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "SKj1tHBOi",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "team-advisors" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "SKj1tHBOi",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  606,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-takdyl-container",
                            layoutDependency: h,
                            layoutId: "HTn_vNBT4-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Team & Advisors",
                              height: "100%",
                              id: "HTn_vNBT4",
                              layoutId: "HTn_vNBT4",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: { webPageId: "T46i7cvSN" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "T46i7cvSN" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  707,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-l6v4z4-container",
                            layoutDependency: h,
                            layoutId: "UAIoJvSsR-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "Roadmap",
                              height: "100%",
                              id: "UAIoJvSsR",
                              layoutId: "UAIoJvSsR",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
                        }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: { webPageId: "yRm0dKuom" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "yRm0dKuom" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (l) =>
                        e(m, {
                          height: 101,
                          ...w(
                            {
                              F5pvaiPFi: {
                                width: t?.width || "100vw",
                                y:
                                  (t?.y || 0) +
                                  0 +
                                  (((t?.height || 648.5) - 0 - 949) / 2 +
                                    30 +
                                    10) +
                                  0 +
                                  808,
                              },
                            },
                            n,
                            f
                          ),
                          children: e(a.div, {
                            className: "framer-ibvlzg-container",
                            layoutDependency: h,
                            layoutId: "iGJFpzvkv-container",
                            children: e(y, {
                              aLYjLdBef: l[0],
                              FPje3Ki9Q: "",
                              gOh95WWn9: "News",
                              height: "100%",
                              id: "iGJFpzvkv",
                              layoutId: "iGJFpzvkv",
                              style: { width: "100%" },
                              width: "100%",
                              ...w({ F5pvaiPFi: { aLYjLdBef: l[1] } }, n, f),
                            }),
                          }),
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
  It = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-7tonk.framer-92xx4p, .framer-7tonk .framer-92xx4p { display: block; }",
    ".framer-7tonk.framer-1ljdf2o { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 342px; }",
    ".framer-7tonk .framer-yv3nxj { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-7tonk .framer-1u0kwfe { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-7tonk .framer-14lpuz6-container { flex: none; height: 17px; position: relative; width: 16px; }",
    ".framer-7tonk .framer-wxm1pg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-7tonk .framer-14w23o7-container, .framer-7tonk .framer-9of2q6-container, .framer-7tonk .framer-w9cju7-container, .framer-7tonk .framer-omfrsa-container, .framer-7tonk .framer-t7z2c0-container, .framer-7tonk .framer-1armntl-container, .framer-7tonk .framer-takdyl-container, .framer-7tonk .framer-l6v4z4-container, .framer-7tonk .framer-ibvlzg-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7tonk.framer-1ljdf2o, .framer-7tonk .framer-yv3nxj, .framer-7tonk .framer-wxm1pg { gap: 0px; } .framer-7tonk.framer-1ljdf2o > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-7tonk.framer-1ljdf2o > :first-child, .framer-7tonk .framer-wxm1pg > :first-child { margin-top: 0px; } .framer-7tonk.framer-1ljdf2o > :last-child, .framer-7tonk .framer-wxm1pg > :last-child { margin-bottom: 0px; } .framer-7tonk .framer-yv3nxj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-7tonk .framer-yv3nxj > :first-child { margin-left: 0px; } .framer-7tonk .framer-yv3nxj > :last-child { margin-right: 0px; } .framer-7tonk .framer-wxm1pg > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ...he,
  ],
  we = K(Ft, It, "framer-7tonk"),
  De = we;
we.displayName = "AboutMobileDdown";
we.defaultProps = { height: 30, width: 342 };
W(we, {
  variant: {
    options: ["Q4GTnwamh", "F5pvaiPFi"],
    optionTitles: ["Closed", "Open"],
    title: "Variant",
    type: q.Enum,
  },
});
T(
  we,
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
      ],
    },
    ...ft,
    ...pt,
    ...re(pe),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Pt = C(Pe),
  Ut = C(ne),
  Nt = C(Ue),
  kt = C(Ie),
  Dt = C(Le),
  Vt = C(De),
  Rt = C(ke),
  Mt = C(Ne),
  jt = Me(a.div),
  Bt = ["lTeZvmy7i", "nmHb2oefw", "wp6Z7sg6J"],
  St = "framer-e3CLq",
  _t = {
    lTeZvmy7i: "framer-v-349wvy",
    nmHb2oefw: "framer-v-g89bs",
    wp6Z7sg6J: "framer-v-125xdxe",
  };
function z(i, ...r) {
  let s = {};
  return r?.forEach((o) => o && Object.assign(s, i[o])), s;
}
var Zt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Gt = ({ value: i, children: r }) => {
    let s = j(L),
      o = i ?? s.transition,
      c = S(() => ({ ...s, transition: o }), [JSON.stringify(o)]);
    return e(L.Provider, { value: c, children: r });
  },
  qt = a(P),
  Wt = { "Phone Open": "wp6Z7sg6J", Desktop: "lTeZvmy7i", Phone: "nmHb2oefw" },
  Xt = ({ height: i, id: r, width: s, ...o }) => {
    var c, p;
    return {
      ...o,
      variant:
        (p = (c = Wt[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && p !== void 0
          ? p
          : "lTeZvmy7i",
    };
  },
  At = (i, r) =>
    i.layoutDependency ? r.join("-") + i.layoutDependency : r.join("-"),
  Kt = M(function (i, r) {
    let { activeLocale: s, setLocale: o } = G(),
      { style: c, className: p, layoutId: x, variant: E, ...Y } = Xt(i),
      {
        baseVariant: n,
        classNames: H,
        gestureHandlers: ie,
        gestureVariant: u,
        setGestureState: f,
        setVariant: V,
        variants: R,
      } = J({
        cycleOrder: Bt,
        defaultVariant: "lTeZvmy7i",
        variant: E,
        variantClassNames: _t,
      }),
      d = At(i, R),
      { activeVariantCallback: F, delay: h } = te(n),
      D = F(async (...U) => {
        V("lTeZvmy7i");
      }),
      oe = F(async (...U) => {
        V("JCt1NtKen");
      }),
      Q = F(async (...U) => {
        V("wp6Z7sg6J");
      }),
      $ = F(async (...U) => {
        V("nmHb2oefw");
      }),
      fe = _(null),
      le = () => !["nmHb2oefw", "wp6Z7sg6J"].includes(n),
      Ce = ee(),
      b = () => !!["nmHb2oefw", "wp6Z7sg6J"].includes(n),
      N = () => n === "wp6Z7sg6J",
      t = B(),
      l = [Se],
      I = A();
    return e(Z, {
      id: x ?? t,
      children: e(qt, {
        animate: R,
        initial: !1,
        children: e(Gt, {
          value: Zt,
          children: v(a.div, {
            ...Y,
            ...ie,
            className: X(St, ...l, "framer-349wvy", p, H),
            "data-framer-name": "Desktop",
            layoutDependency: d,
            layoutId: "lTeZvmy7i",
            ref: r ?? fe,
            style: {
              backdropFilter: "none",
              backgroundColor: "rgba(0, 0, 0, 0)",
              WebkitBackdropFilter: "none",
              ...c,
            },
            variants: {
              wp6Z7sg6J: {
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(7, 7, 19, 0.8)",
                WebkitBackdropFilter: "blur(20px)",
              },
            },
            ...z(
              {
                nmHb2oefw: { "data-framer-name": "Phone" },
                wp6Z7sg6J: { "data-framer-name": "Phone Open" },
              },
              n,
              u
            ),
            children: [
              v(a.div, {
                className: "framer-gfyn7n",
                "data-framer-name": "Logo & Menu",
                layoutDependency: d,
                layoutId: "CfKiWejmb",
                children: [
                  e(Ve, {
                    href: { webPageId: "iUlMedb93" },
                    children: e(a.a, {
                      className: "framer-ndl545 framer-3ujj8x",
                      "data-framer-name": "Logo",
                      layoutDependency: d,
                      layoutId: "ultO1yO5y",
                      children: e(ye, {
                        className: "framer-1cpb3fe",
                        "data-framer-name": "DynLogo",
                        layout: "position",
                        layoutDependency: d,
                        layoutId: "eRJmTnwKQ",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 131 37"><path d="M 31.068 8.513 L 18.426 1.031 C 17.237 0.324 15.757 0.324 14.568 1.031 L 1.926 8.513 C 0.734 9.217 0 10.523 0 11.935 L 0 26.9 C 0 28.312 0.734 29.617 1.93 30.321 C 1.93 30.321 8.256 34.068 11.96 36.257 C 13.071 36.917 14.448 36.157 14.564 34.884 L 14.574 34.707 L 14.574 13.202 L 16.5 12.063 L 18.426 13.202 L 18.426 34.707 L 18.436 34.884 C 18.555 36.154 19.929 36.914 21.039 36.257 L 31.071 30.321 C 32.272 29.6 33.005 28.301 33 26.9 L 33 11.935 C 32.997 10.523 32.26 9.217 31.068 8.513 Z M 11.399 32.167 L 3.516 27.501 C 3.305 27.373 3.176 27.144 3.178 26.897 L 3.178 20.35 C 3.178 20.103 3.306 19.874 3.516 19.745 L 11.4 15.08 L 11.4 32.168 Z M 3.175 16.19 L 3.175 11.936 C 3.175 11.688 3.303 11.456 3.513 11.331 L 16.155 3.848 C 16.364 3.725 16.623 3.725 16.832 3.848 L 29.474 11.331 C 29.686 11.459 29.815 11.689 29.813 11.936 L 29.813 16.19 L 16.497 8.304 Z M 29.819 26.9 C 29.819 27.148 29.691 27.38 29.48 27.505 L 21.597 32.167 L 21.597 15.083 L 29.48 19.748 C 29.69 19.874 29.82 20.105 29.82 20.353 L 29.82 26.9 Z M 60.557 21.657 C 60.134 22.681 59.555 23.527 58.821 24.195 C 58.046 24.919 57.138 25.486 56.148 25.865 C 55.124 26.266 53.978 26.467 52.708 26.467 L 49 26.467 L 49 23.928 L 52.674 23.928 C 53.52 23.928 54.289 23.794 54.979 23.528 C 55.63 23.272 56.221 22.886 56.716 22.392 C 57.21 21.897 57.596 21.306 57.852 20.655 C 58.119 19.986 58.252 19.252 58.252 18.45 C 58.252 17.67 58.119 16.947 57.852 16.279 C 57.585 15.589 57.206 15.021 56.716 14.575 C 56.271 14.108 55.692 13.729 54.979 13.44 C 54.241 13.168 53.46 13.032 52.674 13.039 L 49 13.039 L 49 10.5 L 52.708 10.5 C 53.888 10.5 55.024 10.711 56.115 11.135 C 57.127 11.505 58.049 12.086 58.821 12.838 C 59.586 13.541 60.18 14.409 60.557 15.377 C 60.974 16.371 61.19 17.439 61.192 18.517 C 61.192 19.675 60.981 20.721 60.557 21.657 Z M 67.538 10.533 L 64.432 10.533 L 70.645 20.187 L 70.645 26.5 L 73.685 26.5 L 73.685 20.12 Z M 79.931 10.533 L 77.025 10.533 L 73.351 15.778 L 74.987 17.982 Z M 82.369 26.467 L 85.142 26.467 L 85.142 17.949 L 82.369 14.041 L 82.369 26.466 Z M 93.459 10.567 L 93.459 21.557 L 85.609 10.567 L 82.604 10.567 L 93.894 26.467 L 96.198 26.467 L 96.198 10.567 L 93.46 10.567 Z M 100.44 10.567 L 112.332 10.567 L 112.332 13.105 L 100.44 13.105 Z M 100.44 23.927 L 112.298 23.927 L 112.298 26.467 L 100.44 26.467 Z M 100.44 17.18 L 111.163 17.18 L 111.163 19.686 L 100.44 19.686 Z M 121.985 22.525 L 123.488 20.521 L 123.455 20.454 Z M 130.704 10.567 L 127.497 10.567 L 123.522 16.278 L 119.58 10.567 L 116.273 10.567 L 121.852 18.383 L 116.073 26.466 L 119.647 26.466 L 130.704 10.566 Z M 130.904 26.467 L 126.495 20.22 L 124.825 22.458 L 127.63 26.467 Z" fill="rgb(255,255,255)"></path></svg>',
                        svgContentId: 10247498636,
                        withExternalLayout: !0,
                      }),
                    }),
                  }),
                  le() &&
                    v(a.div, {
                      className: "framer-1hjqzh0",
                      "data-framer-name": "Sitenav",
                      layoutDependency: d,
                      layoutId: "WhLW9nLVd",
                      children: [
                        
                      ],
                    }),
                  b() &&
                    e(m, {
                      children: e(a.div, {
                        className: "framer-1ap0g76-container",
                        "data-framer-name": "Menu Icon",
                        layoutDependency: d,
                        layoutId: "BkJyYHIsH-container",
                        name: "Menu Icon",
                        children: e(Le, {
                          height: "100%",
                          id: "BkJyYHIsH",
                          layoutId: "BkJyYHIsH",
                          name: "Menu Icon",
                          tap: oe,
                          variant: "c9yx045IS",
                          width: "100%",
                          ...z(
                            {
                              nmHb2oefw: { tap: Q },
                              wp6Z7sg6J: { tap: $, variant: "NJMM4EUUC" },
                            },
                            n,
                            u
                          ),
                        }),
                      }),
                    }),
                ],
              }),
              N() &&
                v(jt, {
                  className: "framer-1g6zrf6",
                  "data-framer-name": "Nav Mobile",
                  layoutDependency: d,
                  layoutId: "h_afjjSMq",
                  children: [
                    e(m, {
                      ...z(
                        {
                          wp6Z7sg6J: {
                            width: `calc(${I?.width || "100vw"} - 48px)`,
                          },
                        },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-1fgjrgg-container",
                        layoutDependency: d,
                        layoutId: "LWdf4pOHu-container",
                        children: e(De, {
                          height: "100%",
                          id: "LWdf4pOHu",
                          layoutId: "LWdf4pOHu",
                          style: { width: "100%" },
                          variant: "Q4GTnwamh",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "ecosystem" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "axHV8SU44",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: {
                            pathVariables: { pNMeoxCGX: "ecosystem" },
                            unresolvedPathSlugs: {
                              pNMeoxCGX: {
                                collectionId: "Ky33JdLXg",
                                collectionItemId: "axHV8SU44",
                              },
                            },
                            webPageId: "F8eGhiphC",
                          },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (U) =>
                        e(m, {
                          ...z(
                            {
                              wp6Z7sg6J: {
                                width: `calc(${I?.width || "100vw"} - 48px)`,
                              },
                            },
                            n,
                            u
                          ),
                          children: e(a.div, {
                            className: "framer-1c199mo-container",
                            layoutDependency: d,
                            layoutId: "mjNcfp6Wd-container",
                            children: e(ne, {
                              height: "100%",
                              id: "mjNcfp6Wd",
                              KZZfr0JA7: !1,
                              layoutId: "mjNcfp6Wd",
                              ld6qgK5r6: U[0],
                              nrP0QM6gt: "Ecosystem",
                              style: { width: "100%" },
                              variant: "hDyJsHtJ3",
                              width: "100%",
                              yhcsYd89y: !1,
                              ...z({ wp6Z7sg6J: { ld6qgK5r6: U[1] } }, n, u),
                            }),
                          }),
                        }),
                    }),
                    e(m, {
                      ...z(
                        {
                          wp6Z7sg6J: {
                            width: `calc(${I?.width || "100vw"} - 48px)`,
                          },
                        },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-13mdoxq-container",
                        layoutDependency: d,
                        layoutId: "morgGjGI1-container",
                        children: e(ke, {
                          height: "100%",
                          id: "morgGjGI1",
                          layoutId: "morgGjGI1",
                          style: { width: "100%" },
                          variant: "D86Y35o2r",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(g, {
                      links: [
                        {
                          href: { webPageId: "YA_HGMM5Q" },
                          implicitPathVariables: void 0,
                        },
                        {
                          href: { webPageId: "YA_HGMM5Q" },
                          implicitPathVariables: void 0,
                        },
                      ],
                      children: (U) =>
                        e(m, {
                          children: e(a.div, {
                            className: "framer-wh4v7-container",
                            layoutDependency: d,
                            layoutId: "A0kHFMxlo-container",
                            children: e(ne, {
                              height: "100%",
                              id: "A0kHFMxlo",
                              KZZfr0JA7: !1,
                              layoutId: "A0kHFMxlo",
                              ld6qgK5r6: U[0],
                              nrP0QM6gt: "Resources",
                              variant: "hDyJsHtJ3",
                              width: "100%",
                              yhcsYd89y: !1,
                              ...z({ wp6Z7sg6J: { ld6qgK5r6: U[1] } }, n, u),
                            }),
                          }),
                        }),
                    }),
                    e(m, {
                      ...z(
                        {
                          wp6Z7sg6J: {
                            width: `calc(${I?.width || "100vw"} - 48px)`,
                          },
                        },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-1npvbni-container",
                        layoutDependency: d,
                        layoutId: "QivMZb5g1-container",
                        children: e(ne, {
                          height: "100%",
                          id: "QivMZb5g1",
                          KZZfr0JA7: !0,
                          layoutId: "QivMZb5g1",
                          ld6qgK5r6: "https://blockexplorer.dynexcoin.org/",
                          nrP0QM6gt: "Network",
                          style: { width: "100%" },
                          variant: "IjK41iWii",
                          width: "100%",
                          yhcsYd89y: !1,
                        }),
                      }),
                    }),
                    e(m, {
                      ...z(
                        {
                          wp6Z7sg6J: {
                            width: `calc(${I?.width || "100vw"} - 48px)`,
                          },
                        },
                        n,
                        u
                      ),
                      children: e(a.div, {
                        className: "framer-1ixho7j-container",
                        layoutDependency: d,
                        layoutId: "B2wQ68r6W-container",
                        children: e(Ne, {
                          height: "100%",
                          id: "B2wQ68r6W",
                          layoutId: "B2wQ68r6W",
                          style: { width: "100%" },
                          variant: "oLRgPn1dN",
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
              N() &&
                v(a.div, {
                  className: "framer-ys5yxu",
                  "data-framer-name": "Enterprise button",
                  layoutDependency: d,
                  layoutId: "xKyYK_F3n",
                  style: {
                    backgroundColor: "rgb(218, 223, 227)",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  },
                  children: [
                    N() &&
                      e(Re, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 54,
                          intrinsicWidth: 54,
                          pixelHeight: 108,
                          pixelWidth: 108,
                          src: "https://framerusercontent.com/images/msT81yZnCmzjQxlH7kSLlx3cqOo.png",
                        },
                        className: "framer-ib02ic",
                        "data-framer-name": "image",
                        layoutDependency: d,
                        layoutId: "jRWb0eH9f",
                      }),
                    e(ae, {
                      __fromCanvasComponent: !0,
                      children: e(P, {
                        children: v(a.p, {
                          className: "framer-styles-preset-1ygrrqz",
                          "data-styles-preset": "aSqMlk60T",
                          children: [
                            e(a.span, {
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-1w3ko1f, var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)))",
                              },
                              children: e(a.strong, { children: "Dynex" }),
                            }),
                            e(a.strong, { children: e(a.br, {}) }),
                            e(a.span, {
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-c9yw3e, var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)))",
                              },
                              children: e(a.strong, {
                                children: "Enterprise \u2192",
                              }),
                            }),
                          ],
                        }),
                      }),
                      className: "framer-1i9mb9n",
                      fonts: ["Inter", "Inter-Bold"],
                      layoutDependency: d,
                      layoutId: "YwFKxNXOi",
                      style: {
                        "--extracted-1w3ko1f":
                          "var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19))",
                        "--extracted-c9yw3e":
                          "var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Jt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-e3CLq.framer-3ujj8x, .framer-e3CLq .framer-3ujj8x { display: block; }",
    ".framer-e3CLq.framer-349wvy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; height: 37px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 796px; }",
    ".framer-e3CLq .framer-gfyn7n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-e3CLq .framer-ndl545 { flex: none; height: 37px; mix-blend-mode: exclusion; overflow: hidden; position: relative; text-decoration: none; width: 132px; z-index: 10; }",
    ".framer-e3CLq .framer-1cpb3fe { flex: none; height: 37px; position: absolute; right: 0px; top: calc(48.648648648648674% - 37px / 2); width: 131px; }",
    ".framer-e3CLq .framer-1hjqzh0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 10; }",
    ".framer-e3CLq .framer-il2w9e-container, .framer-e3CLq .framer-kguchd-container, .framer-e3CLq .framer-7sswdy-container, .framer-e3CLq .framer-igyia2-container, .framer-e3CLq .framer-ohug8i-container, .framer-e3CLq .framer-8j9e00-container, .framer-e3CLq .framer-wh4v7-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-e3CLq .framer-1ap0g76-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-e3CLq .framer-1g6zrf6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; min-height: 300px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-e3CLq .framer-1fgjrgg-container, .framer-e3CLq .framer-1c199mo-container, .framer-e3CLq .framer-13mdoxq-container, .framer-e3CLq .framer-1npvbni-container, .framer-e3CLq .framer-1ixho7j-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-e3CLq .framer-ys5yxu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 12px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-e3CLq .framer-ib02ic { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 54px); overflow: visible; position: relative; width: 54px; }",
    ".framer-e3CLq .framer-1i9mb9n { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-e3CLq .framer-1hjqzh0, .framer-e3CLq .framer-1g6zrf6 { gap: 0px; } .framer-e3CLq .framer-1hjqzh0 > * { margin: 0px; margin-left: calc(26px / 2); margin-right: calc(26px / 2); } .framer-e3CLq .framer-1hjqzh0 > :first-child { margin-left: 0px; } .framer-e3CLq .framer-1hjqzh0 > :last-child { margin-right: 0px; } .framer-e3CLq .framer-1g6zrf6 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-e3CLq .framer-1g6zrf6 > :first-child { margin-top: 0px; } .framer-e3CLq .framer-1g6zrf6 > :last-child { margin-bottom: 0px; } }",
    ".framer-e3CLq.framer-v-g89bs.framer-349wvy { gap: 24px; height: min-content; justify-content: flex-start; padding: 18px 24px 18px 24px; width: 300px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-e3CLq.framer-v-g89bs.framer-349wvy { gap: 0px; } .framer-e3CLq.framer-v-g89bs.framer-349wvy > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-e3CLq.framer-v-g89bs.framer-349wvy > :first-child { margin-top: 0px; } .framer-e3CLq.framer-v-g89bs.framer-349wvy > :last-child { margin-bottom: 0px; } }",
    ".framer-e3CLq.framer-v-125xdxe.framer-349wvy { align-content: flex-start; align-items: flex-start; gap: 24px; height: min-content; justify-content: flex-start; min-height: calc(var(--framer-viewport-height, 100vh) * 1); padding: 18px 24px 18px 24px; width: 300px; }",
    ".framer-e3CLq.framer-v-125xdxe .framer-gfyn7n, .framer-e3CLq.framer-v-125xdxe .framer-1i9mb9n { order: 0; }",
    ".framer-e3CLq.framer-v-125xdxe .framer-1g6zrf6 { order: 2; }",
    ".framer-e3CLq.framer-v-125xdxe .framer-ys5yxu, .framer-e3CLq.framer-v-125xdxe .framer-ib02ic { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-e3CLq.framer-v-125xdxe.framer-349wvy { gap: 0px; } .framer-e3CLq.framer-v-125xdxe.framer-349wvy > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-e3CLq.framer-v-125xdxe.framer-349wvy > :first-child { margin-top: 0px; } .framer-e3CLq.framer-v-125xdxe.framer-349wvy > :last-child { margin-bottom: 0px; } }",
    ...Be,
  ],
  xe = K(Kt, Jt, "framer-e3CLq"),
  qa = xe;
xe.displayName = "Site Menu/TopbarV2";
xe.defaultProps = { height: 37, width: 796 };
W(xe, {
  variant: {
    options: ["lTeZvmy7i", "nmHb2oefw", "wp6Z7sg6J"],
    optionTitles: ["Desktop", "Phone", "Phone Open"],
    title: "Variant",
    type: q.Enum,
  },
});
T(
  xe,
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
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-ext-XOTVL7ZR.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-6LOMBC2V.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-ext-WXWSJXLB.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-YRST7ODZ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Bold.latin-ext-BASA5UL3.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Bold.latin-UCM45LQF.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Bold.vietnamese-OEVJMXEP.woff2",
          weight: "700",
        },
      ],
    },
    ...Pt,
    ...Ut,
    ...Nt,
    ...kt,
    ...Dt,
    ...Vt,
    ...Rt,
    ...Mt,
    ...re(je),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Et = ["NqmVZdr1V", "nGxH7tJiR"],
  Yt = "framer-NN143",
  Ht = { nGxH7tJiR: "framer-v-eyiv2o", NqmVZdr1V: "framer-v-1o01ixg" };
function Ze(i, ...r) {
  let s = {};
  return r?.forEach((o) => o && Object.assign(s, i[o])), s;
}
var Qt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ot = ({ value: i, children: r }) => {
    let s = j(L),
      o = i ?? s.transition,
      c = S(() => ({ ...s, transition: o }), [JSON.stringify(o)]);
    return e(L.Provider, { value: c, children: r });
  },
  zt = a(P),
  $t = { Default: "NqmVZdr1V", Mini: "nGxH7tJiR" },
  ea = ({ height: i, id: r, width: s, ...o }) => {
    var c, p;
    return {
      ...o,
      variant:
        (p = (c = $t[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && p !== void 0
          ? p
          : "NqmVZdr1V",
    };
  },
  ta = (i, r) =>
    i.layoutDependency ? r.join("-") + i.layoutDependency : r.join("-"),
  aa = M(function (i, r) {
    let { activeLocale: s, setLocale: o } = G(),
      { style: c, className: p, layoutId: x, variant: E, ...Y } = ea(i),
      {
        baseVariant: n,
        classNames: H,
        gestureHandlers: ie,
        gestureVariant: u,
        setGestureState: f,
        setVariant: V,
        variants: R,
      } = J({
        cycleOrder: Et,
        defaultVariant: "NqmVZdr1V",
        variant: E,
        variantClassNames: Ht,
      }),
      d = ta(i, R),
      F = _(null),
      h = () => n !== "nGxH7tJiR",
      D = () => n === "nGxH7tJiR",
      oe = B(),
      Q = [],
      $ = A();
    return e(Z, {
      id: x ?? oe,
      children: e(zt, {
        animate: R,
        initial: !1,
        children: e(Ot, {
          value: Qt,
          children: v(a.div, {
            ...Y,
            ...ie,
            className: X(Yt, ...Q, "framer-1o01ixg", p, H),
            "data-framer-name": "Default",
            layoutDependency: d,
            layoutId: "NqmVZdr1V",
            ref: r ?? F,
            style: { ...c },
            ...Ze({ nGxH7tJiR: { "data-framer-name": "Mini" } }, n, u),
            children: [
              h() &&
                e(ye, {
                  className: "framer-pps7dv",
                  "data-framer-name": "graphic",
                  layout: "position",
                  layoutDependency: d,
                  layoutId: "gCgffDesY",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><path d="M 36 0 L 0 0 L 0 36 L 24 36 C 24 29 29 24 36 24 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path><path d="M 36 24 C 29 24 24 29 24 36" fill="transparent" stroke="var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, rgb(51, 51, 51)) /* {&quot;name&quot;:&quot;Border&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>',
                  svgContentId: 8775016569,
                  withExternalLayout: !0,
                }),
              D() &&
                e(ye, {
                  className: "framer-x735g6",
                  "data-framer-name": "graphicmini",
                  layout: "position",
                  layoutDependency: d,
                  layoutId: "LUxuxTlHe",
                  opacity: 1,
                  svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30"><path d="M 30 0 L 0 0 L 0 30 L 16 30 C 16 21.586 22.462 16 30 16 Z" fill="var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {&quot;name&quot;:&quot;Dark BG&quot;} */"></path><path d="M 30 16 C 21.507 16 16 22.007 16 30.5" fill="transparent" stroke="var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, rgb(51, 51, 51)) /* {&quot;name&quot;:&quot;Border&quot;} */" stroke-miterlimit="10"></path></svg>',
                  svgContentId: 12154580087,
                  withExternalLayout: !0,
                  ...Ze({ nGxH7tJiR: { svgContentId: 11726991557 } }, n, u),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ra = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-NN143.framer-r1qcu2, .framer-NN143 .framer-r1qcu2 { display: block; }",
    ".framer-NN143.framer-1o01ixg { height: 36px; overflow: hidden; position: relative; width: 36px; }",
    ".framer-NN143 .framer-pps7dv { flex: none; height: 36px; left: calc(50.00000000000002% - 36px / 2); position: absolute; top: calc(50.00000000000002% - 36px / 2); width: 36px; }",
    ".framer-NN143 .framer-x735g6 { flex: none; height: 30px; left: 0px; position: absolute; top: 0px; width: 30px; }",
    ".framer-NN143.framer-v-eyiv2o.framer-1o01ixg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; width: min-content; }",
    ".framer-NN143.framer-v-eyiv2o .framer-x735g6 { left: unset; order: 0; position: relative; top: unset; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NN143.framer-v-eyiv2o.framer-1o01ixg { gap: 0px; } .framer-NN143.framer-v-eyiv2o.framer-1o01ixg > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-NN143.framer-v-eyiv2o.framer-1o01ixg > :first-child { margin-top: 0px; } .framer-NN143.framer-v-eyiv2o.framer-1o01ixg > :last-child { margin-bottom: 0px; } }",
  ],
  be = K(aa, ra, "framer-NN143"),
  Ea = be;
be.displayName = "Site Corner";
be.defaultProps = { height: 36, width: 36 };
W(be, {
  variant: {
    options: ["NqmVZdr1V", "nGxH7tJiR"],
    optionTitles: ["Default", "Mini"],
    title: "Variant",
    type: q.Enum,
  },
});
T(be, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
export { qa as a, Ea as b };
//# sourceMappingURL=chunk-ZAJ3GA3C.mjs.map

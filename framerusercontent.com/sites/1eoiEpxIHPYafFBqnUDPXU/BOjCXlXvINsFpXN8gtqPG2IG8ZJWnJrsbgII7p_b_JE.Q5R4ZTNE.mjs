import { a as R } from "./chunk-MO3UYWNT.mjs";
import "./chunk-PRDDNS4X.mjs";
import { a as k } from "./chunk-YURMHTDO.mjs";
import { a as N, b as s } from "./chunk-ZAJ3GA3C.mjs";
import { b as F } from "./chunk-4RYISUAB.mjs";
import { b as J, c as K, d as $, i as U, k as X } from "./chunk-SGZXRRGF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as q,
  Ha as j,
  Pa as P,
  R as D,
  Ra as C,
  Sa as O,
  Va as h,
  Wa as H,
  Xa as d,
  Ya as G,
  c as u,
  da as S,
  g as A,
  ha as i,
  ja as n,
  l as E,
  la as L,
  m as V,
  ma as Z,
  n as _,
  na as Q,
  p as M,
  t as e,
  u as c,
  va as Y,
  xa as m,
  y as a,
} from "./chunk-WBV7SVYU.mjs";
import "./chunk-JR5VT52U.mjs";
import { a as w } from "./chunk-DGFKJSRX.mjs";
import "./chunk-RIUMFBNJ.mjs";
var oe = d(s),
  ce = d(R),
  me = d(F),
  de = P(F),
  se = d(k),
  le = X(a.div),
  fe = d(U),
  pe = d(N),
  he = {
    iNiCcOUwx: "(max-width: 809px)",
    NIgSNxZtg: "(min-width: 1200px)",
    qhkEWQ0Wg: "(min-width: 810px) and (max-width: 1199px)",
  },
  xe = () => typeof document < "u",
  ee = "framer-SO2Cc",
  ge = {
    iNiCcOUwx: "framer-v-2dkz5w",
    NIgSNxZtg: "framer-v-ertrls",
    qhkEWQ0Wg: "framer-v-12m0n1b",
  },
  I = w(),
  ue = { Desktop: "NIgSNxZtg", Phone: "iNiCcOUwx", Tablet: "qhkEWQ0Wg" },
  we = ({ height: W, id: x, width: l, ...g }) => {
    var f, p;
    return {
      ...g,
      variant:
        (p = (f = ue[g.variant]) !== null && f !== void 0 ? f : g.variant) !==
          null && p !== void 0
          ? p
          : "NIgSNxZtg",
    };
  },
  be = A(function (W, x) {
    let { activeLocale: l, setLocale: g } = D(),
      { style: f, className: p, layoutId: y, variant: re, ...te } = we(W);
    E(() => {
      let r = w(void 0, l);
      if (r.robots) {
        let t = document.querySelector('meta[name="robots"]');
        t
          ? t.setAttribute("content", r.robots)
          : ((t = document.createElement("meta")),
            t.setAttribute("name", "robots"),
            t.setAttribute("content", r.robots),
            document.head.appendChild(t));
      }
    }, [void 0, l]),
      _(() => {
        let r = w(void 0, l);
        if (((document.title = r.title || ""), r.viewport)) {
          var t;
          (t = document.querySelector('meta[name="viewport"]')) === null ||
            t === void 0 ||
            t.setAttribute("content", r.viewport);
        }
        let B = r.bodyClassName;
        if (B) {
          let v = document.body;
          v.classList.forEach(
            (T) => T.startsWith("framer-body-") && v.classList.remove(T)
          ),
            v.classList.add(`${r.bodyClassName}-framer-SO2Cc`);
        }
        return () => {
          B &&
            document.body.classList.remove(`${r.bodyClassName}-framer-SO2Cc`);
        };
      }, [void 0, l]);
    let [o, ve] = j(re, he, !1),
      Se = void 0,
      ae = M(null),
      ie = () => (xe() ? o !== "iNiCcOUwx" : !0),
      ne = V(),
      z = [$];
    return (
      Z({}),
      e(Q.Provider, {
        value: { primaryVariantId: "NIgSNxZtg", variantClassNames: ge },
        children: c(q, {
          id: y ?? ne,
          children: [
            c(a.div, {
              ...te,
              className: S(ee, ...z, "framer-ertrls", p),
              ref: x ?? ae,
              style: { ...f },
              children: [
                c("div", {
                  className: "framer-1qt7mmo",
                  "data-framer-name": "Site Mask",
                  name: "Site Mask",
                  children: [
                    e(a.div, {
                      className: "framer-1rt33w1",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                      style: { rotate: 180 },
                    }),
                    e(i, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(n, {
                        className: "framer-k22g3m-container",
                        style: { rotate: 180 },
                        children: e(s, {
                          height: "100%",
                          id: "Ndjc81N7u",
                          layoutId: "Ndjc81N7u",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(i, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(n, {
                        className: "framer-1mjdimo-container",
                        style: { rotate: 90 },
                        children: e(s, {
                          height: "100%",
                          id: "SZBe0gD_m",
                          layoutId: "SZBe0gD_m",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(i, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(n, {
                        className: "framer-1ctr9mx-container",
                        style: { rotate: -90 },
                        children: e(s, {
                          height: "100%",
                          id: "M6p4ZCzzS",
                          layoutId: "M6p4ZCzzS",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-15rxetm",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                    }),
                    e(i, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(n, {
                        className: "framer-1oswqt1-container",
                        children: e(s, {
                          height: "100%",
                          id: "w10kImCaw",
                          layoutId: "w10kImCaw",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-111tylk",
                      "data-border": !0,
                    }),
                    e("div", { className: "framer-aqqa38", "data-border": !0 }),
                  ],
                }),
                ie() &&
                  e(Y, {
                    href: "https://app.dynexai.pro/",
                    nodeId: "g7exEGxdb",
                    children: e(C, {
                      as: "a",
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 176,
                        intrinsicWidth: 439,
                        loading: h(23),
                        pixelHeight: 352,
                        pixelWidth: 878,
                        sizes: "325px",
                        src: "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png 652w",
                      },
                      className: "framer-sgypot hidden-2dkz5w framer-iifmgy",
                      "data-framer-name": "PrimeLink",
                      name: "PrimeLink",
                    }),
                  }),
                c(le, {
                  className: "framer-7o1ypd",
                  "data-framer-name": "Content",
                  name: "Content",
                  children: [
                    e(m, {
                      breakpoint: o,
                      overrides: {
                        iNiCcOUwx: {
                          width: "calc(min(100vw, 1920px) - 80px)",
                          y: 120,
                        },
                        qhkEWQ0Wg: { width: "250px" },
                      },
                      children: e(i, {
                        height: 637,
                        width: "300px",
                        y: 128,
                        children: e(n, {
                          className: "framer-95bry4-container",
                          children: e(R, {
                            height: "100%",
                            id: "R5UIBRe7c",
                            layoutId: "R5UIBRe7c",
                            style: { width: "100%" },
                            variant: "xs3AG2p_3",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(a.div, {
                      className: "framer-ji5nx",
                      "data-framer-name": "Right Col",
                      name: "Right Col",
                      children: c(a.div, {
                        className: "framer-abn8f7",
                        children: [
                          c(a.div, {
                            className: "framer-nyn9k0",
                            "data-framer-name": "Top",
                            name: "Top",
                            children: [
                              e(m, {
                                breakpoint: o,
                                overrides: {
                                  iNiCcOUwx: {
                                    children: e(u, {
                                      children: e("h1", {
                                        style: {
                                          "--font-selector":
                                            "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                          "--framer-font-family":
                                            '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                          "--framer-font-size": "36px",
                                          "--framer-letter-spacing": "0px",
                                          "--framer-line-height": "120%",
                                          "--framer-text-color":
                                            "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Dynex RESOURCES",
                                      }),
                                    }),
                                  },
                                },
                                children: e(O, {
                                  __fromCanvasComponent: !0,
                                  children: e(u, {
                                    children: e("h1", {
                                      style: {
                                        "--font-selector":
                                          "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                        "--framer-font-family":
                                          '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                        "--framer-font-size": "48px",
                                        "--framer-letter-spacing": "0px",
                                        "--framer-line-height": "120%",
                                        "--framer-text-color":
                                          "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: "Dynex RESOURCES",
                                    }),
                                  }),
                                  className: "framer-w5s0mx",
                                  "data-framer-name": "Title",
                                  fonts: ["CUSTOM;Rigid Square Regular"],
                                  name: "Title",
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              e(i, {
                                children: e(n, {
                                  className: "framer-1uuduau-container",
                                  children: e(de, {
                                    __framer__animateOnce: !1,
                                    __framer__obscuredVariantId: "JnoUcnydt",
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    __framer__visibleVariantId: "yN4DNxohH",
                                    height: "100%",
                                    id: "FP0CZObfc",
                                    layoutId: "FP0CZObfc",
                                    style: { height: "100%", width: "100%" },
                                    variant: "JnoUcnydt",
                                    width: "100%",
                                  }),
                                }),
                              }),
                              e(O, {
                                __fromCanvasComponent: !0,
                                children: e(u, {
                                  children: e("p", {
                                    className: "framer-styles-preset-11ut0g7",
                                    "data-styles-preset": "Auy8Lx_6q",
                                    children: `Welcome to the "Resources" section of our website, a comprehensive hub designed to provide you with in-depth information and tools to fully leverage the Dynex blockchain ecosystem. Whether you're an investor, a miner, a pool operator, a miner software developer or interested in becoming part of the Dynex community, this section is tailored to enrich your understanding and application of our cutting-edge leading quantum-as-a-service (QaaS) technology in relation to our Dynex blockchain.`,
                                  }),
                                }),
                                className: "framer-9udv0",
                                fonts: ["Inter"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(m, {
                                breakpoint: o,
                                overrides: { iNiCcOUwx: { y: 1128.2 } },
                                children: e(i, {
                                  height: 42,
                                  y: 481.6,
                                  children: e(n, {
                                    className: "framer-1c8xug5-container",
                                    children: e(k, {
                                      height: "100%",
                                      id: "rU53YqWo5",
                                      layoutId: "rU53YqWo5",
                                      OxvVnM9Vj: !0,
                                      PWiTIKmkB:
                                        "https://github.com/dynexcoin?tab=repositories",
                                      QVxRnsVaA: "Dynex GitHub Repositories",
                                      SLOdxAGFe: "ArrowRight",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          e(m, {
                            breakpoint: o,
                            overrides: {
                              iNiCcOUwx: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 666.5,
                                  intrinsicWidth: 1e3,
                                  loading: h(1218.2),
                                  pixelHeight: 1333,
                                  pixelWidth: 2e3,
                                  sizes: "calc(min(100vw, 1920px) - 80px)",
                                  src: "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=512 512w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png 2000w",
                                },
                              },
                              qhkEWQ0Wg: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 666.5,
                                  intrinsicWidth: 1e3,
                                  loading: h(571.6),
                                  pixelHeight: 1333,
                                  pixelWidth: 2e3,
                                  sizes:
                                    "calc(max(min(100vw, 1920px) - 362px, 1px) - 64px)",
                                  src: "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=512 512w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png 2000w",
                                },
                              },
                            },
                            children: e(C, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 666.5,
                                intrinsicWidth: 1e3,
                                loading: h(571.6),
                                pixelHeight: 1333,
                                pixelWidth: 2e3,
                                sizes:
                                  "calc(max(min(100vw, 1920px) - 444px, 1px) - 64px)",
                                src: "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024",
                                srcSet:
                                  "https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=512 512w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/cn3l2BakU97SxYiTMFpcoiJzT84.png 2000w",
                              },
                              className: "framer-1onw8et",
                              "data-framer-name": "image",
                              name: "image",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-p6cx9l",
                  "data-framer-name": "Footer Container",
                  name: "Footer Container",
                  children: e(m, {
                    breakpoint: o,
                    overrides: {
                      iNiCcOUwx: {
                        width: "min(100vw - 96px, 1200px)",
                        y: 1484.2,
                      },
                      qhkEWQ0Wg: { y: 959.6 },
                    },
                    children: e(i, {
                      height: 564,
                      width: "min(max(100vw - 96px, 1px), 1200px)",
                      y: 1129.6,
                      children: e(n, {
                        className: "framer-b94r0y-container",
                        children: e(U, {
                          height: "100%",
                          id: "jviaUCWzt",
                          layoutId: "jviaUCWzt",
                          style: { maxWidth: "100%", width: "100%" },
                          variant: "lKW5sKZWt",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                c("div", {
                  className: "framer-t79ilo",
                  "data-framer-name": "Gradients",
                  name: "Gradients",
                  children: [
                    e(a.div, {
                      className: "framer-13pncco",
                      "data-framer-name": "Top Gradient Blue",
                      name: "Top Gradient Blue",
                      style: { rotate: -20 },
                    }),
                    e(a.div, {
                      className: "framer-hua8b0",
                      "data-framer-name": "Top Gradient Blue Right",
                      name: "Top Gradient Blue Right",
                      style: { rotate: 30 },
                    }),
                    e(a.div, {
                      className: "framer-1pa7ccp",
                      "data-framer-name": "Top Gradient Yellow",
                      name: "Top Gradient Yellow",
                      style: { rotate: -20 },
                    }),
                  ],
                }),
                e(m, {
                  breakpoint: o,
                  overrides: {
                    iNiCcOUwx: { width: "calc(100vw - 48px)", y: 36 },
                    qhkEWQ0Wg: { width: "calc(100vw - 356px)", y: 36 },
                  },
                  children: e(i, {
                    height: 37,
                    width: "calc(100vw - 420px)",
                    y: 54,
                    children: e(n, {
                      className: "framer-1b88cbw-container",
                      children: e(m, {
                        breakpoint: o,
                        overrides: {
                          iNiCcOUwx: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                          qhkEWQ0Wg: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                        },
                        children: e(N, {
                          height: "100%",
                          id: "DjLUxv8BV",
                          layoutId: "DjLUxv8BV",
                          style: { height: "100%", width: "100%" },
                          variant: "lTeZvmy7i",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: S(ee, ...z), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  ye = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${I.bodyClassName}-framer-SO2Cc { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-SO2Cc.framer-iifmgy, .framer-SO2Cc .framer-iifmgy { display: block; }",
    ".framer-SO2Cc.framer-ertrls { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-SO2Cc .framer-1qt7mmo { flex: none; height: 100%; left: 0px; overflow: hidden; pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 5; }",
    ".framer-SO2Cc .framer-1rt33w1 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; overflow: hidden; position: absolute; right: 0px; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-SO2Cc .framer-k22g3m-container { bottom: 0px; flex: none; height: 36px; position: absolute; right: 0px; width: 36px; z-index: 1; }",
    ".framer-SO2Cc .framer-1mjdimo-container { flex: none; height: 36px; position: absolute; right: 0px; top: 0px; width: 36px; z-index: 1; }",
    ".framer-SO2Cc .framer-1ctr9mx-container { bottom: 0px; flex: none; height: 36px; left: 0px; position: absolute; width: 36px; z-index: 1; }",
    ".framer-SO2Cc .framer-15rxetm { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-SO2Cc .framer-1oswqt1-container { flex: none; height: 36px; left: 0px; position: absolute; top: 0px; width: 36px; z-index: 1; }",
    ".framer-SO2Cc .framer-111tylk { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }",
    ".framer-SO2Cc .framer-aqqa38 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); bottom: 0px; flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }",
    ".framer-SO2Cc .framer-sgypot { flex: none; height: 105px; overflow: visible; position: fixed; right: 20px; text-decoration: none; top: 23px; width: 325px; z-index: 6; }",
    ".framer-SO2Cc .framer-7o1ypd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 96px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }",
    ".framer-SO2Cc .framer-95bry4-container { flex: none; height: auto; position: sticky; top: 80px; width: 300px; will-change: transform; z-index: 1; }",
    ".framer-SO2Cc .framer-ji5nx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-SO2Cc .framer-abn8f7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 32px; position: relative; width: 100%; }",
    ".framer-SO2Cc .framer-nyn9k0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-SO2Cc .framer-w5s0mx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-SO2Cc .framer-1uuduau-container { flex: none; height: 28px; position: relative; width: 100%; }",
    ".framer-SO2Cc .framer-9udv0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-SO2Cc .framer-1c8xug5-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-SO2Cc .framer-1onw8et { flex: none; height: 490px; overflow: visible; position: relative; width: 100%; }",
    ".framer-SO2Cc .framer-p6cx9l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-SO2Cc .framer-b94r0y-container { flex: 1 0 0px; height: auto; max-width: 1200px; position: relative; width: 1px; }",
    ".framer-SO2Cc .framer-t79ilo { flex: none; height: 1566px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    '.framer-SO2Cc .framer-13pncco { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa) /* {"name":"Dynex Blue"} */ 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -164px; opacity: 0.2; overflow: hidden; position: absolute; right: 226px; top: -579px; z-index: 0; }',
    ".framer-SO2Cc .framer-hua8b0 { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #67E3F9 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: 763px; opacity: 0.15; overflow: hidden; position: absolute; right: -443px; top: -599px; z-index: 0; }",
    ".framer-SO2Cc .framer-1pa7ccp { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #f1ff70 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -302px; opacity: 0.2; overflow: hidden; position: absolute; right: 364px; top: -555px; z-index: 0; }",
    ".framer-SO2Cc .framer-1b88cbw-container { flex: none; height: 37px; left: 64px; position: absolute; right: 356px; top: 54px; z-index: 3; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SO2Cc.framer-ertrls, .framer-SO2Cc .framer-7o1ypd, .framer-SO2Cc .framer-ji5nx, .framer-SO2Cc .framer-abn8f7, .framer-SO2Cc .framer-nyn9k0, .framer-SO2Cc .framer-p6cx9l { gap: 0px; } .framer-SO2Cc.framer-ertrls > *, .framer-SO2Cc .framer-nyn9k0 > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-SO2Cc.framer-ertrls > :first-child, .framer-SO2Cc .framer-ji5nx > :first-child, .framer-SO2Cc .framer-abn8f7 > :first-child, .framer-SO2Cc .framer-nyn9k0 > :first-child { margin-top: 0px; } .framer-SO2Cc.framer-ertrls > :last-child, .framer-SO2Cc .framer-ji5nx > :last-child, .framer-SO2Cc .framer-abn8f7 > :last-child, .framer-SO2Cc .framer-nyn9k0 > :last-child { margin-bottom: 0px; } .framer-SO2Cc .framer-7o1ypd > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-SO2Cc .framer-7o1ypd > :first-child, .framer-SO2Cc .framer-p6cx9l > :first-child { margin-left: 0px; } .framer-SO2Cc .framer-7o1ypd > :last-child, .framer-SO2Cc .framer-p6cx9l > :last-child { margin-right: 0px; } .framer-SO2Cc .framer-ji5nx > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-SO2Cc .framer-abn8f7 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-SO2Cc .framer-p6cx9l > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${I.bodyClassName}-framer-SO2Cc { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-SO2Cc.framer-ertrls { width: 810px; } .framer-SO2Cc .framer-7o1ypd { gap: 32px; } .framer-SO2Cc .framer-95bry4-container { width: 250px; } .framer-SO2Cc .framer-1onw8et { height: 320px; } .framer-SO2Cc .framer-1b88cbw-container { height: auto; left: 40px; right: 316px; top: 36px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SO2Cc .framer-7o1ypd { gap: 0px; } .framer-SO2Cc .framer-7o1ypd > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-SO2Cc .framer-7o1ypd > :first-child { margin-left: 0px; } .framer-SO2Cc .framer-7o1ypd > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .${I.bodyClassName}-framer-SO2Cc { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-SO2Cc.framer-ertrls { padding: 48px 0px 0px 0px; width: 390px; } .framer-SO2Cc .framer-7o1ypd { flex-direction: column; gap: 32px; padding: 72px 40px 0px 40px; } .framer-SO2Cc .framer-95bry4-container { position: relative; top: unset; width: 100%; } .framer-SO2Cc .framer-ji5nx, .framer-SO2Cc .framer-b94r0y-container { flex: none; width: 100%; } .framer-SO2Cc .framer-abn8f7 { padding: 32px 0px 0px 0px; } .framer-SO2Cc .framer-1onw8et { height: 230px; } .framer-SO2Cc .framer-p6cx9l { flex-direction: column; } .framer-SO2Cc .framer-1b88cbw-container { height: auto; left: 24px; right: 24px; top: 36px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-SO2Cc .framer-7o1ypd, .framer-SO2Cc .framer-p6cx9l { gap: 0px; } .framer-SO2Cc .framer-7o1ypd > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-SO2Cc .framer-7o1ypd > :first-child, .framer-SO2Cc .framer-p6cx9l > :first-child { margin-top: 0px; } .framer-SO2Cc .framer-7o1ypd > :last-child, .framer-SO2Cc .framer-p6cx9l > :last-child { margin-bottom: 0px; } .framer-SO2Cc .framer-p6cx9l > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...K,
    '.framer-SO2Cc[data-border="true"]::after, .framer-SO2Cc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  b = L(be, ye, "framer-SO2Cc"),
  Me = b;
b.displayName = "Learn";
b.defaultProps = { height: 1720, width: 1200 };
H(
  b,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Rigid Square Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/2byiqNmSK7iIV1YW3mItnbQSRUc.otf",
        },
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
    ...oe,
    ...ce,
    ...me,
    ...se,
    ...fe,
    ...pe,
    ...G(J),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var qe = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerYA_HGMM5Q",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qhkEWQ0Wg":{"layout":["fixed","auto"]},"iNiCcOUwx":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1200",
        framerIntrinsicHeight: "1720",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { qe as __FramerMetadata__, Me as default };
//# sourceMappingURL=BOjCXlXvINsFpXN8gtqPG2IG8ZJWnJrsbgII7p_b_JE.Q5R4ZTNE.mjs.map

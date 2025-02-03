import { a as y } from "./chunk-BTMLHZDK.mjs";
import { a as Ve, b as Ae, c as Be } from "./chunk-FZIHN23O.mjs";
import {
  a as C,
  b as x,
  c as ce,
  d as he,
  e as xe,
  f as ue,
  g as be,
  h as ge,
  i as ye,
  j as we,
  k as ve,
  l as Fe,
  m as ke,
  n as Ke,
  o as Se,
  p as Ne,
  q as Ie,
  r as Ce,
  s as Ue,
  t as _e,
  u as je,
  v as Re,
  w as ze,
} from "./chunk-DWV2M2OI.mjs";
import { a as Ge, b as Le, c as Pe } from "./chunk-RLVDOXHI.mjs";
import { a as R } from "./chunk-MO3UYWNT.mjs";
import { a as Me } from "./chunk-PRDDNS4X.mjs";
import { a as _, b as c } from "./chunk-ZAJ3GA3C.mjs";
import { b as j } from "./chunk-4RYISUAB.mjs";
import { i as U } from "./chunk-SGZXRRGF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as Q,
  Ba as ie,
  Ha as ne,
  La as oe,
  Ma as se,
  P as Z,
  Pa as me,
  Qa as le,
  R as O,
  Ra as de,
  Sa as N,
  V as X,
  Va as fe,
  Wa as pe,
  Xa as p,
  Ya as t,
  Za as I,
  c as g,
  da as S,
  fa as $,
  g as q,
  ha as n,
  ja as o,
  l as H,
  la as ee,
  m as Y,
  ma as re,
  n as J,
  na as te,
  p as W,
  t as e,
  u as m,
  va as ae,
  xa as l,
  y as f,
} from "./chunk-WBV7SVYU.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
le.loadWebFontsFromSelectors([]);
var Ee = [],
  Te = [
    '.framer-oo7HG .framer-styles-preset-pbndum:not(.rich-text-wrapper), .framer-oo7HG .framer-styles-preset-pbndum.rich-text-wrapper a { --framer-link-current-text-color: var(--token-1742c135-0874-4b11-bc38-cace343dbddc, #ffffff) /* {"name":"White/White"} */; --framer-link-hover-text-color: var(--token-1742c135-0874-4b11-bc38-cace343dbddc, #ffffff) /* {"name":"White/White"} */; --framer-link-hover-text-decoration: none; --framer-link-text-color: var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa); --framer-link-text-decoration: none; }',
  ],
  De = "framer-oo7HG";
var z,
  G,
  L,
  P,
  ar = p(c),
  ir = p(R),
  nr = p(j),
  or = me(j),
  sr = ie(N),
  mr = p(U),
  lr = p(_),
  dr = {
    HLbldvYFG: "(min-width: 810px) and (max-width: 1159px)",
    IMG0JjI4J: "(max-width: 809px)",
    lVIz3eeb4: "(min-width: 1160px)",
  },
  fr = () => typeof document < "u",
  qe = "framer-38nKi",
  pr = {
    HLbldvYFG: "framer-v-1ukyuge",
    IMG0JjI4J: "framer-v-1x3hybc",
    lVIz3eeb4: "framer-v-1uuuuvx",
  },
  cr = { damping: 80, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  hr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: cr,
    x: 0,
    y: 0,
  },
  xr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -40,
  },
  V = y(),
  ur = { Desktop: "lVIz3eeb4", Phone: "IMG0JjI4J", Tablet: "HLbldvYFG" },
  br = ({ height: A, id: u, width: h, ...b }) => {
    var d, a;
    return {
      ...b,
      variant:
        (a = (d = ur[b.variant]) !== null && d !== void 0 ? d : b.variant) !==
          null && a !== void 0
          ? a
          : "lVIz3eeb4",
    };
  },
  gr = q(function (A, u) {
    let { activeLocale: h, setLocale: b } = O(),
      d = Z(),
      [a] = oe({
        from: { alias: "F8eGhiphC", data: Me, type: "Collection" },
        select: [
          { collection: "F8eGhiphC", name: "XBtLGj5jg", type: "Identifier" },
          { collection: "F8eGhiphC", name: "Uu1cd17Pd", type: "Identifier" },
        ],
        where: se(d, "F8eGhiphC"),
      }),
      B = (r) => {
        if (!a)
          throw new X(`No data matches path variables: ${JSON.stringify(d)}`);
        return a[r];
      };
    var v, F;
    let {
      style: He,
      className: Ye,
      layoutId: k,
      variant: Je,
      XBtLGj5jg: We = (v = B("XBtLGj5jg")) !== null && v !== void 0 ? v : "",
      Uu1cd17Pd: Qe = (F = B("Uu1cd17Pd")) !== null && F !== void 0 ? F : "",
      ...Ze
    } = br(A);
    H(() => {
      let r = y(a, h);
      if (r.robots) {
        let i = document.querySelector('meta[name="robots"]');
        i
          ? i.setAttribute("content", r.robots)
          : ((i = document.createElement("meta")),
            i.setAttribute("name", "robots"),
            i.setAttribute("content", r.robots),
            document.head.appendChild(i));
      }
    }, [a, h]),
      J(() => {
        let r = y(a, h);
        if (((document.title = r.title || ""), r.viewport)) {
          var i;
          (i = document.querySelector('meta[name="viewport"]')) === null ||
            i === void 0 ||
            i.setAttribute("content", r.viewport);
        }
        let T = r.bodyClassName;
        if (T) {
          let K = document.body;
          K.classList.forEach(
            (D) => D.startsWith("framer-body-") && K.classList.remove(D)
          ),
            K.classList.add(`${r.bodyClassName}-framer-38nKi`);
        }
        return () => {
          T &&
            document.body.classList.remove(`${r.bodyClassName}-framer-38nKi`);
        };
      }, [a, h]);
    let [s, wr] = ne(Je, dr, !1),
      vr = void 0,
      Oe = W(null),
      M = () => (fr() ? s !== "IMG0JjI4J" : !0),
      Xe = Y(),
      E = [xe, _e, Pe, ge, Ke, ve, Be, De, ze, Ie];
    return (
      re({}),
      e(te.Provider, {
        value: { primaryVariantId: "lVIz3eeb4", variantClassNames: pr },
        children: m(Q, {
          id: k ?? Xe,
          children: [
            m(f.div, {
              ...Ze,
              className: S(qe, ...E, "framer-1uuuuvx", Ye),
              ref: u ?? Oe,
              style: { ...He },
              children: [
                m("div", {
                  className: "framer-148tnhz",
                  "data-framer-name": "Site Mask",
                  name: "Site Mask",
                  children: [
                    e(f.div, {
                      className: "framer-1dr4621",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                      style: { rotate: 180 },
                    }),
                    e(n, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(o, {
                        className: "framer-hd4qe6-container",
                        style: { rotate: 180 },
                        children: e(c, {
                          height: "100%",
                          id: "shQrnT2kN",
                          layoutId: "shQrnT2kN",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(n, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(o, {
                        className: "framer-9bbgqp-container",
                        style: { rotate: 90 },
                        children: e(c, {
                          height: "100%",
                          id: "HSjFMYqwJ",
                          layoutId: "HSjFMYqwJ",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(n, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(o, {
                        className: "framer-1tis5pf-container",
                        style: { rotate: -90 },
                        children: e(c, {
                          height: "100%",
                          id: "N1LKuzO3f",
                          layoutId: "N1LKuzO3f",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-n9u5vg",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                    }),
                    e(n, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(o, {
                        className: "framer-15hdgax-container",
                        children: e(c, {
                          height: "100%",
                          id: "B_r9NR27p",
                          layoutId: "B_r9NR27p",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", { className: "framer-47a7zb", "data-border": !0 }),
                    e("div", {
                      className: "framer-1qza1z5",
                      "data-border": !0,
                    }),
                  ],
                }),
                m("div", {
                  className: "framer-939se6",
                  "data-framer-name": "Content",
                  name: "Content",
                  children: [
                    M() &&
                      e(l, {
                        breakpoint: s,
                        overrides: { HLbldvYFG: { width: "260px" } },
                        children: e(n, {
                          height: 637,
                          width: "300px",
                          y: 112,
                          children: e(o, {
                            className: "framer-i7wa7q-container hidden-1x3hybc",
                            children: e(R, {
                              height: "100%",
                              id: "uFTTfWuyR",
                              layoutId: "uFTTfWuyR",
                              style: { width: "100%" },
                              variant: "xs3AG2p_3",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    m("div", {
                      className: "framer-bm0l5",
                      "data-framer-name": "Post",
                      name: "Post",
                      children: [
                        e(l, {
                          breakpoint: s,
                          overrides: {
                            HLbldvYFG: {
                              children: e(g, {
                                children: e("h3", {
                                  className: "framer-styles-preset-bcjq8k",
                                  "data-styles-preset": "EtnOUzv10",
                                  children: "Telecommunication",
                                }),
                              }),
                              fonts: ["Inter"],
                            },
                            IMG0JjI4J: {
                              children: e(g, {
                                children: e("h4", {
                                  className: "framer-styles-preset-11ezvfj",
                                  "data-styles-preset": "rrjoIeBSb",
                                  children: "Telecommunication",
                                }),
                              }),
                              fonts: ["Inter"],
                            },
                          },
                          children: e(N, {
                            __fromCanvasComponent: !0,
                            children: e(g, {
                              children: e("h1", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO1JpZ2lkIFNxdWFyZSBSZWd1bGFy",
                                  "--framer-font-family":
                                    '"Rigid Square Regular", "Rigid Square Regular Placeholder", sans-serif',
                                  "--framer-font-size": "64px",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--token-1742c135-0874-4b11-bc38-cace343dbddc, rgb(255, 255, 255))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children:
                                  "Dynex: The Neuromorphic Cloud Computing Platform",
                              }),
                            }),
                            className: "framer-sh1wsd",
                            "data-framer-name": "Title",
                            fonts: ["CUSTOM;Rigid Square Regular"],
                            name: "Title",
                            text: We,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(n, {
                          children: e(o, {
                            className: "framer-xz7rcy-container",
                            children: e(or, {
                              __framer__animateOnce: !1,
                              __framer__obscuredVariantId: "JnoUcnydt",
                              __framer__threshold: 0.5,
                              __framer__variantAppearEffectEnabled: !0,
                              __framer__visibleVariantId: "yN4DNxohH",
                              height: "100%",
                              id: "LM8j4f_Rn",
                              layoutId: "LM8j4f_Rn",
                              style: { height: "100%", width: "100%" },
                              variant: "JnoUcnydt",
                              width: "100%",
                            }),
                          }),
                        }),
                        e($, {
                          presets: {
                            "module:NEd4VmDdsxM3StIUbddO/bZxrMUxBPAhoXlARkK9C/YouTube.js:Youtube":
                              C.T_j0y6EwI,
                            "module:pVk4QsoHxASnVtUBp6jr/TbhpORLndv1iOkZzyo83/CodeBlock.js:default":
                              C.io8WtmkA6,
                          },
                          children: e(sr, {
                            __fromCanvasComponent: !0,
                            animate: hr,
                            children: Qe,
                            className: "framer-hj8ubq",
                            "data-framer-appear-id": "hj8ubq",
                            "data-framer-name": "Content",
                            fonts: ["Inter"],
                            initial: xr,
                            name: "Content",
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            stylesPresetsClassNames: {
                              a: "framer-styles-preset-pbndum",
                              code: "framer-styles-preset-14p4v3h",
                              h1: "framer-styles-preset-3nqyhf",
                              h2: "framer-styles-preset-1wml6uu",
                              h3: "framer-styles-preset-bcjq8k",
                              h4: "framer-styles-preset-11ezvfj",
                              h5: "framer-styles-preset-13oo16j",
                              h6: "framer-styles-preset-14n5412",
                              img: "framer-styles-preset-ruux4e",
                              p: "framer-styles-preset-21ogod",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e("div", {
                  className: "framer-1jsmli2",
                  "data-framer-name": "Footer Container",
                  name: "Footer Container",
                  children: e(l, {
                    breakpoint: s,
                    overrides: {
                      HLbldvYFG: { y: 749 },
                      IMG0JjI4J: { width: "calc(100vw - 48px)", y: 415.2 },
                    },
                    children: e(n, {
                      height: 564,
                      width: "max(100vw - 96px, 1px)",
                      y: 785,
                      children: e(o, {
                        className: "framer-1jos2ma-container",
                        children: e(l, {
                          breakpoint: s,
                          overrides: {
                            HLbldvYFG: { variant: "aK_4VtDvt" },
                            IMG0JjI4J: { variant: "CP4euYBms" },
                          },
                          children: e(U, {
                            height: "100%",
                            id: "mgDkt0iun",
                            layoutId: "mgDkt0iun",
                            style: { width: "100%" },
                            variant: "lKW5sKZWt",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                m("div", {
                  className: "framer-yfxwji",
                  "data-framer-name": "Gradients",
                  name: "Gradients",
                  children: [
                    e(f.div, {
                      className: "framer-l929br",
                      "data-framer-name": "Top Gradient Blue",
                      name: "Top Gradient Blue",
                      style: { rotate: -20 },
                    }),
                    e(f.div, {
                      className: "framer-20tle3",
                      "data-framer-name": "Top Gradient Blue Right",
                      name: "Top Gradient Blue Right",
                      style: { rotate: 30 },
                    }),
                    e(f.div, {
                      className: "framer-18fyo74",
                      "data-framer-name": "Top Gradient Yellow",
                      name: "Top Gradient Yellow",
                      style: { rotate: -20 },
                    }),
                  ],
                }),
                e(l, {
                  breakpoint: s,
                  overrides: {
                    HLbldvYFG: { width: "calc(100vw - 356px)", y: 36 },
                    IMG0JjI4J: { width: "calc(100vw - 48px)", y: 36 },
                  },
                  children: e(n, {
                    height: 37,
                    width: "calc(100vw - 420px)",
                    y: 54,
                    children: e(o, {
                      className: "framer-1x6llcl-container",
                      children: e(l, {
                        breakpoint: s,
                        overrides: {
                          HLbldvYFG: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                          IMG0JjI4J: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                        },
                        children: e(_, {
                          height: "100%",
                          id: "nUUgWx3pn",
                          layoutId: "nUUgWx3pn",
                          style: { height: "100%", width: "100%" },
                          variant: "lTeZvmy7i",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                M() &&
                  e(ae, {
                    href: "https://app.dynexai.pro/",
                    nodeId: "BzIyclTLL",
                    children: e(de, {
                      as: "a",
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 176,
                        intrinsicWidth: 439,
                        loading: fe(23),
                        pixelHeight: 352,
                        pixelWidth: 878,
                        sizes: "325px",
                        src: "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png 652w",
                      },
                      className: "framer-1qorgda hidden-1x3hybc framer-19rp5pp",
                      "data-framer-name": "PrimeLink",
                      name: "PrimeLink",
                    }),
                  }),
              ],
            }),
            e("div", { className: S(qe, ...E), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  yr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${V.bodyClassName}-framer-38nKi { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-38nKi.framer-19rp5pp, .framer-38nKi .framer-19rp5pp { display: block; }",
    ".framer-38nKi.framer-1uuuuvx { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 100px 0px; position: relative; width: 1160px; }",
    ".framer-38nKi .framer-148tnhz { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 5; }",
    ".framer-38nKi .framer-1dr4621 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; overflow: hidden; position: absolute; right: 0px; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-38nKi .framer-hd4qe6-container { bottom: 0px; flex: none; height: 36px; position: absolute; right: 0px; width: 36px; z-index: 1; }",
    ".framer-38nKi .framer-9bbgqp-container { flex: none; height: 36px; position: absolute; right: 0px; top: 0px; width: 36px; z-index: 1; }",
    ".framer-38nKi .framer-1tis5pf-container { bottom: 0px; flex: none; height: 36px; left: 0px; position: absolute; width: 36px; z-index: 1; }",
    ".framer-38nKi .framer-n9u5vg { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-38nKi .framer-15hdgax-container { flex: none; height: 36px; left: 0px; position: absolute; top: 0px; width: 36px; z-index: 1; }",
    ".framer-38nKi .framer-47a7zb { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }",
    ".framer-38nKi .framer-1qza1z5 { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); bottom: 0px; flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }",
    ".framer-38nKi .framer-939se6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; max-width: 1680px; overflow: visible; padding: 80px 40px 0px 40px; position: relative; width: 100%; z-index: 1; }",
    ".framer-38nKi .framer-i7wa7q-container { flex: none; height: auto; position: sticky; top: 80px; width: 300px; will-change: transform; z-index: 1; }",
    ".framer-38nKi .framer-bm0l5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 32px; position: relative; width: 1px; }",
    ".framer-38nKi .framer-sh1wsd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-38nKi .framer-xz7rcy-container { flex: none; height: 20px; position: relative; width: 100%; }",
    ".framer-38nKi .framer-hj8ubq { --framer-paragraph-spacing: 36px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-38nKi .framer-1jsmli2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 48px 0px 48px; position: relative; width: 100%; }",
    ".framer-38nKi .framer-1jos2ma-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-38nKi .framer-yfxwji { flex: none; height: 1566px; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    '.framer-38nKi .framer-l929br { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, var(--token-2678ca90-7bcd-460e-87c6-9327e3761be8, #66d8fa) /* {"name":"Dynex Blue"} */ 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -164px; opacity: 0.2; overflow: hidden; position: absolute; right: 226px; top: -579px; z-index: 0; }',
    ".framer-38nKi .framer-20tle3 { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #67E3F9 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: 763px; opacity: 0.15; overflow: hidden; position: absolute; right: -443px; top: -599px; z-index: 0; }",
    ".framer-38nKi .framer-18fyo74 { -webkit-filter: blur(20px); background: radial-gradient(30.099999999999998% 51.2% at 47.099999999999994% 35.199999999999996%, #f1ff70 0%, rgba(103, 227, 249, 0) 100%); filter: blur(20px); flex: none; height: 1000px; left: -302px; opacity: 0.2; overflow: hidden; position: absolute; right: 364px; top: -555px; z-index: 0; }",
    ".framer-38nKi .framer-1x6llcl-container { flex: none; height: 37px; left: 64px; position: absolute; right: 356px; top: 54px; z-index: 3; }",
    ".framer-38nKi .framer-1qorgda { flex: none; height: 105px; overflow: visible; position: fixed; right: 20px; text-decoration: none; top: 23px; width: 325px; z-index: 6; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-38nKi.framer-1uuuuvx, .framer-38nKi .framer-939se6, .framer-38nKi .framer-bm0l5, .framer-38nKi .framer-1jsmli2 { gap: 0px; } .framer-38nKi.framer-1uuuuvx > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-38nKi.framer-1uuuuvx > :first-child, .framer-38nKi .framer-bm0l5 > :first-child { margin-top: 0px; } .framer-38nKi.framer-1uuuuvx > :last-child, .framer-38nKi .framer-bm0l5 > :last-child { margin-bottom: 0px; } .framer-38nKi .framer-939se6 > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-38nKi .framer-939se6 > :first-child, .framer-38nKi .framer-1jsmli2 > :first-child { margin-left: 0px; } .framer-38nKi .framer-939se6 > :last-child, .framer-38nKi .framer-1jsmli2 > :last-child { margin-right: 0px; } .framer-38nKi .framer-bm0l5 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-38nKi .framer-1jsmli2 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ...he,
    ...Ue,
    ...Le,
    ...be,
    ...ke,
    ...we,
    ...Ae,
    ...Te,
    ...Re,
    ...Ne,
    '.framer-38nKi[data-border="true"]::after, .framer-38nKi [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    `@media (min-width: 810px) and (max-width: 1159px) { .${V.bodyClassName}-framer-38nKi { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-38nKi.framer-1uuuuvx { gap: 0px; width: 810px; } .framer-38nKi .framer-939se6 { gap: 24px; } .framer-38nKi .framer-i7wa7q-container { width: 260px; } .framer-38nKi .framer-xz7rcy-container { height: 40px; } .framer-38nKi .framer-1x6llcl-container { height: auto; left: 40px; right: 316px; top: 36px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-38nKi.framer-1uuuuvx, .framer-38nKi .framer-939se6 { gap: 0px; } .framer-38nKi.framer-1uuuuvx > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-38nKi.framer-1uuuuvx > :first-child { margin-top: 0px; } .framer-38nKi.framer-1uuuuvx > :last-child { margin-bottom: 0px; } .framer-38nKi .framer-939se6 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-38nKi .framer-939se6 > :first-child { margin-left: 0px; } .framer-38nKi .framer-939se6 > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .${V.bodyClassName}-framer-38nKi { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-38nKi.framer-1uuuuvx { padding: 48px 0px 100px 0px; width: 374px; } .framer-38nKi .framer-939se6 { flex-direction: column; gap: 24px; padding: 72px 40px 0px 40px; } .framer-38nKi .framer-bm0l5 { flex: none; gap: 24px; padding: 32px 8px 0px 8px; width: 100%; } .framer-38nKi .framer-xz7rcy-container { height: 40px; } .framer-38nKi .framer-1jsmli2 { flex-direction: column; padding: 0px 24px 0px 24px; } .framer-38nKi .framer-1jos2ma-container { flex: none; width: 100%; } .framer-38nKi .framer-1x6llcl-container { height: auto; left: 24px; right: 24px; top: 36px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-38nKi .framer-939se6, .framer-38nKi .framer-bm0l5, .framer-38nKi .framer-1jsmli2 { gap: 0px; } .framer-38nKi .framer-939se6 > *, .framer-38nKi .framer-bm0l5 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-38nKi .framer-939se6 > :first-child, .framer-38nKi .framer-bm0l5 > :first-child, .framer-38nKi .framer-1jsmli2 > :first-child { margin-top: 0px; } .framer-38nKi .framer-939se6 > :last-child, .framer-38nKi .framer-bm0l5 > :last-child, .framer-38nKi .framer-1jsmli2 > :last-child { margin-bottom: 0px; } .framer-38nKi .framer-1jsmli2 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
  ],
  w = ee(gr, yr, "framer-38nKi"),
  Hr = w;
w.displayName = "Page";
w.defaultProps = { height: 2592, width: 1160 };
pe(
  w,
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
    ...ar,
    ...ir,
    ...nr,
    ...mr,
    ...lr,
    ...t(ce),
    ...t(Ce),
    ...t(Ge),
    ...t(ue),
    ...t(Fe),
    ...t(ye),
    ...t(Ve),
    ...t(Ee),
    ...t(je),
    ...t(Se),
    ...(!((z = x) === null || z === void 0) && z.io8WtmkA6
      ? I((G = x) === null || G === void 0 ? void 0 : G.io8WtmkA6)
      : []),
    ...(!((L = x) === null || L === void 0) && L.T_j0y6EwI
      ? I((P = x) === null || P === void 0 ? void 0 : P.T_j0y6EwI)
      : []),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Yr = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerF8eGhiphC",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "2592",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HLbldvYFG":{"layout":["fixed","auto"]},"IMG0JjI4J":{"layout":["fixed","auto"]}}}',
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1160",
        framerContractVersion: "1",
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Yr as __FramerMetadata__, Hr as default };
//# sourceMappingURL=0NERFmynqEUh1bINx7d-ajY62XT7n1B21PUzNbWe8TA.TJQJCLSQ.mjs.map

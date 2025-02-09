import { a as w } from "./chunk-5Y2YJSS3.mjs";
import { a as n } from "./chunk-4VXOT5SN.mjs";
import "./chunk-ZGCOBBVW.mjs";
import { a as $, b as ee, c as re } from "./chunk-RLVDOXHI.mjs";
import { a as B, b as f } from "./chunk-ZAJ3GA3C.mjs";
import { b as Y, c as M, d as X, i as L } from "./chunk-SGZXRRGF.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as O,
  Ha as K,
  R as A,
  Ra as q,
  Sa as N,
  Va as P,
  Wa as W,
  Xa as u,
  Ya as F,
  c as b,
  da as T,
  g as j,
  ha as r,
  ja as t,
  l as D,
  la as H,
  m as R,
  ma as V,
  n as C,
  na as Q,
  p as Z,
  qa as _,
  t as e,
  u as h,
  va as J,
  xa as i,
  y as k,
} from "./chunk-WBV7SVYU.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-RIUMFBNJ.mjs";
var oe = u(f),
  le = u(n),
  se = u(L),
  me = u(B),
  pe = {
    Llc6Pldp4: "(max-width: 809px)",
    lrsdkFfGn: "(min-width: 1200px)",
    uneZsfNuF: "(min-width: 810px) and (max-width: 1199px)",
  },
  he = () => typeof document < "u",
  te = "framer-T6qdl",
  fe = {
    Llc6Pldp4: "framer-v-1ksgj1h",
    lrsdkFfGn: "framer-v-u32exf",
    uneZsfNuF: "framer-v-1dyo272",
  },
  ce = { oDJvo1yNO: new _(() => import("./s6YWe3VcZ-0-EI6UIUR4.mjs")) },
  xe = (m) => {
    let s = [];
    for (; m; ) {
      let l = ce[m.id];
      if (l) {
        let p = l.preload();
        p && s.push(p);
      }
      m = m.fallback;
    }
    if (s.length > 0) return Promise.all(s);
  };
var E = w(),
  ue = { Desktop: "lrsdkFfGn", Phone: "Llc6Pldp4", Tablet: "uneZsfNuF" },
  we = ({ height: m, id: s, width: l, ...p }) => {
    var c, x;
    return {
      ...p,
      variant:
        (x = (c = ue[p.variant]) !== null && c !== void 0 ? c : p.variant) !==
          null && x !== void 0
          ? x
          : "lrsdkFfGn",
    };
  },
  ye = j(function (m, s) {
    let { activeLocale: l, setLocale: p } = A(),
      { style: c, className: x, layoutId: g, variant: ae, ...ie } = we(m);
    D(() => {
      let d = w(void 0, l);
      if (d.robots) {
        let o = document.querySelector('meta[name="robots"]');
        o
          ? o.setAttribute("content", d.robots)
          : ((o = document.createElement("meta")),
            o.setAttribute("name", "robots"),
            o.setAttribute("content", d.robots),
            document.head.appendChild(o));
      }
    }, [void 0, l]),
      C(() => {
        let d = w(void 0, l);
        if (((document.title = d.title || ""), d.viewport)) {
          var o;
          (o = document.querySelector('meta[name="viewport"]')) === null ||
            o === void 0 ||
            o.setAttribute("content", d.viewport);
        }
        let z = d.bodyClassName;
        if (z) {
          let v = document.body;
          v.classList.forEach(
            (I) => I.startsWith("framer-body-") && v.classList.remove(I)
          ),
            v.classList.add(`${d.bodyClassName}-framer-T6qdl`);
        }
        return () => {
          z &&
            document.body.classList.remove(`${d.bodyClassName}-framer-T6qdl`);
        };
      }, [void 0, l]);
    let [a, ve] = K(ae, pe, !1),
      be = void 0,
      G = xe(l);
    if (G) throw G;
    let ne = Z(null),
      S = () => (he() ? a !== "Llc6Pldp4" : !0),
      de = R(),
      U = [re, X];
    return (
      V({}),
      e(Q.Provider, {
        value: { primaryVariantId: "lrsdkFfGn", variantClassNames: fe },
        children: h(O, {
          id: g ?? de,
          children: [
            h(k.div, {
              ...ie,
              className: T(te, ...U, "framer-u32exf", x),
              ref: s ?? ne,
              style: { ...c },
              children: [
                h("div", {
                  className: "framer-1i6qmel",
                  "data-framer-name": "Site Mask",
                  name: "Site Mask",
                  children: [
                    e(k.div, {
                      className: "framer-103sr6z",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                      style: { rotate: 180 },
                    }),
                    e(r, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(t, {
                        className: "framer-171hyo-container",
                        style: { rotate: 180 },
                        children: e(f, {
                          height: "100%",
                          id: "HItAMGfFG",
                          layoutId: "HItAMGfFG",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(r, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(t, {
                        className: "framer-ojmovn-container",
                        style: { rotate: 90 },
                        children: e(f, {
                          height: "100%",
                          id: "pnoqyj8Xg",
                          layoutId: "pnoqyj8Xg",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e(r, {
                      height: 36,
                      width: "36px",
                      y: 964,
                      children: e(t, {
                        className: "framer-1jhn8yq-container",
                        style: { rotate: -90 },
                        children: e(f, {
                          height: "100%",
                          id: "zYYcXsDWK",
                          layoutId: "zYYcXsDWK",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-bp5t4b",
                      "data-border": !0,
                      "data-framer-name": "Site Line",
                      name: "Site Line",
                    }),
                    e(r, {
                      height: 36,
                      width: "36px",
                      y: 0,
                      children: e(t, {
                        className: "framer-r8pi0a-container",
                        children: e(f, {
                          height: "100%",
                          id: "LKLt9LuTv",
                          layoutId: "LKLt9LuTv",
                          style: { height: "100%", width: "100%" },
                          variant: "NqmVZdr1V",
                          width: "100%",
                        }),
                      }),
                    }),
                    e("div", {
                      className: "framer-1qib2k0",
                      "data-border": !0,
                    }),
                    e("div", {
                      className: "framer-1q5zpoq",
                      "data-border": !0,
                    }),
                  ],
                }),
                h("header", {
                  className: "framer-31bz89",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    e("div", { className: "framer-1k27ibh" }),
                    e(N, {
                      __fromCanvasComponent: !0,
                      children: e(b, {
                        children: e("h1", {
                          className: "framer-styles-preset-3nqyhf",
                          "data-styles-preset": "YAP816Y5n",
                          style: { "--framer-text-alignment": "center" },
                          children: "Dynex Links",
                        }),
                      }),
                      className: "framer-112u8jt",
                      fonts: ["Inter"],
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(N, {
                      __fromCanvasComponent: !0,
                      children: e(b, {
                        children: e("p", {
                          className: "framer-styles-preset-11ut0g7",
                          "data-styles-preset": "Auy8Lx_6q",
                          style: { "--framer-text-alignment": "center" },
                          children:
                            "Below are the links to our official Dynex properties. Stay ahead of the scammers and protect yourself from phishing attacks by verifying links.",
                        }),
                      }),
                      className: "framer-s12x2d",
                      fonts: ["Inter"],
                      style: { transformPerspective: 500 },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
                h("div", {
                  className: "framer-1n7owqo",
                  "data-framer-name": "FAQ",
                  name: "FAQ",
                  children: [
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 624,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 728,
                        children: e(t, {
                          className: "framer-yjfe91-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "Zld6AhUSz",
                            layoutId: "Zld6AhUSz",
                            lGBeh6L6z: "https://dynexcoin.org/",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex Website",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 796,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 728,
                        children: e(t, {
                          className: "framer-14xpjos-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "zj29pPb9L",
                            layoutId: "zj29pPb9L",
                            lGBeh6L6z: "https://t.me/dynextg",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Telegram \u2013 Dynex Official (EN)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 968,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 900,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 728,
                        children: e(t, {
                          className: "framer-121ka2u-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "ag61RR9bs",
                            layoutId: "ag61RR9bs",
                            lGBeh6L6z:
                              "https://join.slack.com/t/dynex-workspace/shared_invite/zt-22eb1n4mo-aXS5zsUBoPs613Dofi8Q4A",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Slack (Customers & Devs)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 1140,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 900,
                        children: e(t, {
                          className: "framer-s3lfki-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "pkHrlMtK9",
                            layoutId: "pkHrlMtK9",
                            lGBeh6L6z: "https://discord.gg/2YFnG5357k",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Discord",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 1312,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1072,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 900,
                        children: e(t, {
                          className: "framer-1nhwkj6-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "stLEWBqx7",
                            layoutId: "stLEWBqx7",
                            lGBeh6L6z: "https://x.com/dynexai_erc20",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Twitter",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 1484,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1072,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 900,
                        children: e(t, {
                          className: "framer-xrgysc-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "oHXdUs3H1",
                            layoutId: "oHXdUs3H1",
                            lGBeh6L6z: "https://t.me/dynexai_erc20",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Telegram \u2013 Dynex News (EN)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 1656,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1244,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1072,
                        children: e(t, {
                          className: "framer-kqs1c-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "NAOPoWf1Y",
                            layoutId: "NAOPoWf1Y",
                            lGBeh6L6z: "https://t.me/dynexpricediscussion",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl:
                              "Telegram \u2013 Dynex Price Discussion (EN)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 1828,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1244,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1072,
                        children: e(t, {
                          className: "framer-h0c70w-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "Yb0SpVVo8",
                            layoutId: "Yb0SpVVo8",
                            lGBeh6L6z: "https://t.me/dnxmining",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl:
                              "Telegram \u2013 Dynex Mining Discussion (EN)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2e3,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1416,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1072,
                        children: e(t, {
                          className: "framer-k8d8ng-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "jJh9pqwNU",
                            layoutId: "jJh9pqwNU",
                            lGBeh6L6z: "https://t.me/DynexTurkiye",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Telegram \u2013 Dynex Turkey",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2172,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1416,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1244,
                        children: e(t, {
                          className: "framer-vv5owv-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "lKGzsTMSB",
                            layoutId: "lKGzsTMSB",
                            lGBeh6L6z: "https://t.me/dynexrussian",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Telegram \u2013 Dynex Dynex Russian",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2344,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1588,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1244,
                        children: e(t, {
                          className: "framer-1rm62d4-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "oD9H4XAHy",
                            layoutId: "oD9H4XAHy",
                            lGBeh6L6z: "https://t.me/DynexPersian",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Telegram \u2013 Dynex Persian",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2516,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1588,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1244,
                        children: e(t, {
                          className: "framer-h3wxdt-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "rsVvi6DBE",
                            layoutId: "rsVvi6DBE",
                            lGBeh6L6z: "https://www.instagram.com/dynex_coin/",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Instagram (community curated)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2688,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1760,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1416,
                        children: e(t, {
                          className: "framer-12e4yuw-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "c4kN46abl",
                            layoutId: "c4kN46abl",
                            lGBeh6L6z:
                              "https://dynexwallet.dynexcoin.org/public_html/",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex Mobile Web Wallet (beta)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 2860,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1760,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1416,
                        children: e(t, {
                          className: "framer-98f8tr-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "YRKVzIb1o",
                            layoutId: "YRKVzIb1o",
                            lGBeh6L6z: "https://blockexplorer.dynexcoin.org",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex Block Explorer",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 3032,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1932,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1416,
                        children: e(t, {
                          className: "framer-1g1o3lr-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "yIiwdKehh",
                            layoutId: "yIiwdKehh",
                            lGBeh6L6z:
                              "https://dynexfaq.notion.site/dynexfaq/Dynex-Community-FAQ-849ec5c3bf6248f6b7553815d8299740",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "FAQS (COMMUNITY CURATED)",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 3204,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 1932,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1588,
                        children: e(t, {
                          className: "framer-i1fuex-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "YOGfrk8ST",
                            layoutId: "YOGfrk8ST",
                            lGBeh6L6z:
                              "https://github.com/OneKeyHQ/app-monorepo/releases/tag/v4.24.0",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "OneKey Hardware Wallet",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 3376,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 2104,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1588,
                        children: e(t, {
                          className: "framer-1tvnkng-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "tKciJlRcV",
                            layoutId: "tKciJlRcV",
                            lGBeh6L6z: "https://github.com/dynexcoin",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex Github",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 3548,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 2104,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1588,
                        children: e(t, {
                          className: "framer-vtug8s-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "iLwTUV2RH",
                            layoutId: "iLwTUV2RH",
                            lGBeh6L6z:
                              "https://github.com/dynexcoin/DynexSDK/wiki",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex SDK WIKI",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "max(min(100vw, 1260px) - 48px, 200px)",
                          y: 3720,
                        },
                        uneZsfNuF: {
                          width: "max((min(100vw, 1260px) - 128px) / 2, 200px)",
                          y: 2276,
                        },
                      },
                      children: e(r, {
                        height: 140,
                        width: "max((min(100vw, 1260px) - 160px) / 3, 200px)",
                        y: 1760,
                        children: e(t, {
                          className: "framer-ejwdv6-container",
                          children: e(n, {
                            GEyoky4iu: !1,
                            height: "100%",
                            id: "PK1g82kvA",
                            layoutId: "PK1g82kvA",
                            lGBeh6L6z: "https://docs.dynexcoin.org",
                            pE0us8S3f: 18,
                            PpO_BR84d: !0,
                            style: { width: "100%" },
                            T4lOJsQnl: "Dynex SDK Documentation",
                            variant: "gBo37P4ea",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                h("header", {
                  className: "framer-i8ugdj",
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    S() &&
                      e("div", { className: "framer-djsgxf hidden-1ksgj1h" }),
                    e(i, {
                      breakpoint: a,
                      overrides: {
                        Llc6Pldp4: {
                          width: "calc(min(100vw, 1260px) - 48px)",
                          y: 3884,
                        },
                        uneZsfNuF: { y: 2476 },
                      },
                      children: e(r, {
                        height: 564,
                        width: "calc(min(100vw, 1260px) - 80px)",
                        y: 1960,
                        children: e(t, {
                          className: "framer-7cecku-container",
                          children: e(i, {
                            breakpoint: a,
                            overrides: {
                              Llc6Pldp4: { variant: "CP4euYBms" },
                              uneZsfNuF: { variant: "aK_4VtDvt" },
                            },
                            children: e(L, {
                              height: "100%",
                              id: "QZdLWFzvG",
                              layoutId: "QZdLWFzvG",
                              style: { width: "100%" },
                              variant: "lKW5sKZWt",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                e(q, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1384,
                    intrinsicWidth: 5104,
                    loading: P(-99),
                    pixelHeight: 1384,
                    pixelWidth: 5104,
                    sizes: "3136px",
                    src: "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png",
                    srcSet:
                      "https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=512 512w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/ESZPbyHyGeJ6veiCv3wIKEb0bWU.png 5104w",
                  },
                  className: "framer-4fjyhu",
                  "data-framer-name": "GradientBG",
                  name: "GradientBG",
                  style: { rotate: -35 },
                }),
                e(i, {
                  breakpoint: a,
                  overrides: {
                    Llc6Pldp4: { width: "calc(100vw - 48px)", y: 36 },
                    uneZsfNuF: { width: "calc(100vw - 356px)", y: 36 },
                  },
                  children: e(r, {
                    height: 37,
                    width: "calc(100vw - 420px)",
                    y: 54,
                    children: e(t, {
                      className: "framer-1cvbrwk-container",
                      children: e(i, {
                        breakpoint: a,
                        overrides: {
                          Llc6Pldp4: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                          uneZsfNuF: {
                            style: { width: "100%" },
                            variant: "nmHb2oefw",
                          },
                        },
                        children: e(B, {
                          height: "100%",
                          id: "HicY3Yjwy",
                          layoutId: "HicY3Yjwy",
                          style: { height: "100%", width: "100%" },
                          variant: "lTeZvmy7i",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                S() &&
                  e(J, {
                    href: "https://app.dynexai.xyz/",
                    children: e(q, {
                      as: "a",
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 176,
                        intrinsicWidth: 439,
                        loading: P(23),
                        pixelHeight: 352,
                        pixelWidth: 878,
                        sizes: "325px",
                        src: "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png?scale-down-to=512 512w,https://framerusercontent.com/images/LN5s3ixFHAR4Q6MxSAZfsskiQM8.png 652w",
                      },
                      className: "framer-1uju7r5 hidden-1ksgj1h framer-cj5nun",
                      "data-framer-name": "PrimeLink",
                      name: "PrimeLink",
                    }),
                  }),
              ],
            }),
            e("div", { className: T(te, ...U), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  ge = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${E.bodyClassName}-framer-T6qdl { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; }`,
    ".framer-T6qdl.framer-cj5nun, .framer-T6qdl .framer-cj5nun { display: block; }",
    ".framer-T6qdl.framer-u32exf { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-T6qdl .framer-1i6qmel { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 5; }",
    ".framer-T6qdl .framer-103sr6z { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; overflow: hidden; position: absolute; right: 0px; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-T6qdl .framer-171hyo-container { bottom: 0px; flex: none; height: 36px; position: absolute; right: 0px; width: 36px; z-index: 1; }",
    ".framer-T6qdl .framer-ojmovn-container { flex: none; height: 36px; position: absolute; right: 0px; top: 0px; width: 36px; z-index: 1; }",
    ".framer-T6qdl .framer-1jhn8yq-container { bottom: 0px; flex: none; height: 36px; left: 0px; position: absolute; width: 36px; z-index: 1; }",
    ".framer-T6qdl .framer-bp5t4b { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 100%; left: 0px; overflow: hidden; position: absolute; top: calc(50.409836065573785% - 100% / 2); width: 24px; }",
    ".framer-T6qdl .framer-r8pi0a-container { flex: none; height: 36px; left: 0px; position: absolute; top: 0px; width: 36px; z-index: 1; }",
    ".framer-T6qdl .framer-1qib2k0 { --border-bottom-width: 1px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 0; }",
    ".framer-T6qdl .framer-1q5zpoq { --border-bottom-width: 0px; --border-color: var(--token-5dde0a23-566d-4a94-846f-1aad7ed4209e, #333333); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); bottom: 0px; flex: none; height: 24px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 0; }",
    ".framer-T6qdl .framer-31bz89 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 60vh; justify-content: center; overflow: hidden; padding: 128px; position: relative; width: 100%; z-index: 2; }",
    ".framer-T6qdl .framer-1k27ibh, .framer-T6qdl .framer-djsgxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; min-height: 40px; min-width: 110px; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-T6qdl .framer-112u8jt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-T6qdl .framer-s12x2d { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; overflow: hidden; position: relative; white-space: pre-wrap; width: 600px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-T6qdl .framer-1n7owqo { background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: grid; flex: none; gap: 32px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 128px 48px 0px 48px; position: relative; width: 100%; z-index: 3; }",
    ".framer-T6qdl .framer-yjfe91-container, .framer-T6qdl .framer-14xpjos-container, .framer-T6qdl .framer-121ka2u-container, .framer-T6qdl .framer-s3lfki-container, .framer-T6qdl .framer-1nhwkj6-container, .framer-T6qdl .framer-xrgysc-container, .framer-T6qdl .framer-kqs1c-container, .framer-T6qdl .framer-h0c70w-container, .framer-T6qdl .framer-k8d8ng-container, .framer-T6qdl .framer-vv5owv-container, .framer-T6qdl .framer-1rm62d4-container, .framer-T6qdl .framer-h3wxdt-container, .framer-T6qdl .framer-12e4yuw-container, .framer-T6qdl .framer-98f8tr-container, .framer-T6qdl .framer-1g1o3lr-container, .framer-T6qdl .framer-i1fuex-container, .framer-T6qdl .framer-1tvnkng-container, .framer-T6qdl .framer-vtug8s-container, .framer-T6qdl .framer-ejwdv6-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",
    ".framer-T6qdl .framer-i8ugdj { align-content: center; align-items: center; background-color: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, #070713); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1260px; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-T6qdl .framer-7cecku-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-T6qdl .framer-4fjyhu { aspect-ratio: 4 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 784px); left: -1371px; overflow: hidden; position: absolute; top: -99px; width: 3136px; z-index: 0; }",
    ".framer-T6qdl .framer-1cvbrwk-container { flex: none; height: 37px; left: 64px; position: absolute; right: 356px; top: 54px; z-index: 3; }",
    ".framer-T6qdl .framer-1uju7r5 { flex: none; height: 105px; overflow: visible; position: fixed; right: 20px; text-decoration: none; top: 23px; width: 325px; z-index: 6; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-T6qdl.framer-u32exf, .framer-T6qdl .framer-31bz89, .framer-T6qdl .framer-1k27ibh, .framer-T6qdl .framer-i8ugdj, .framer-T6qdl .framer-djsgxf { gap: 0px; } .framer-T6qdl.framer-u32exf > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-T6qdl.framer-u32exf > :first-child, .framer-T6qdl .framer-31bz89 > :first-child, .framer-T6qdl .framer-i8ugdj > :first-child { margin-top: 0px; } .framer-T6qdl.framer-u32exf > :last-child, .framer-T6qdl .framer-31bz89 > :last-child, .framer-T6qdl .framer-i8ugdj > :last-child { margin-bottom: 0px; } .framer-T6qdl .framer-31bz89 > *, .framer-T6qdl .framer-i8ugdj > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-T6qdl .framer-1k27ibh > *, .framer-T6qdl .framer-djsgxf > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-T6qdl .framer-1k27ibh > :first-child, .framer-T6qdl .framer-djsgxf > :first-child { margin-left: 0px; } .framer-T6qdl .framer-1k27ibh > :last-child, .framer-T6qdl .framer-djsgxf > :last-child { margin-right: 0px; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${E.bodyClassName}-framer-T6qdl { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-T6qdl.framer-u32exf { width: 810px; } .framer-T6qdl .framer-1n7owqo { grid-template-columns: repeat(2, minmax(200px, 1fr)); } .framer-T6qdl .framer-1cvbrwk-container { height: auto; left: 40px; right: 316px; top: 36px; }}`,
    `@media (max-width: 809px) { .${E.bodyClassName}-framer-T6qdl { background: var(--token-8a1ac775-2030-4971-9b8a-a8218fc36594, rgb(7, 7, 19)) /* {"name":"Dark BG"} */; } .framer-T6qdl.framer-u32exf { width: 390px; } .framer-T6qdl .framer-31bz89 { padding: 128px 24px 128px 24px; } .framer-T6qdl .framer-112u8jt { width: 100%; } .framer-T6qdl .framer-s12x2d { max-width: unset; width: 100%; } .framer-T6qdl .framer-1n7owqo { grid-template-columns: repeat(1, minmax(200px, 1fr)); padding: 24px 24px 0px 24px; } .framer-T6qdl .framer-i8ugdj { padding: 24px; } .framer-T6qdl .framer-1cvbrwk-container { height: auto; left: 24px; right: 24px; top: 36px; }}`,
    ...ee,
    ...M,
    '.framer-T6qdl[data-border="true"]::after, .framer-T6qdl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  y = H(ye, ge, "framer-T6qdl"),
  je = y;
y.displayName = "Linktree";
y.defaultProps = { height: 2484, width: 1200 };
W(
  y,
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
    ...oe,
    ...le,
    ...se,
    ...me,
    ...F($),
    ...F(Y),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var De = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framers6YWe3VcZ",
      slots: [],
      annotations: {
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "2484",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uneZsfNuF":{"layout":["fixed","auto"]},"Llc6Pldp4":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { De as __FramerMetadata__, je as default };
//# sourceMappingURL=h-D5nR7-Zb8ZvQx1_pIXboHwn0ydauPe8PGdoFfxPTE.IZKLPIRH.mjs.map

import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/content/Content.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--b5734d55.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/elad/projects/nof/src/content/Content.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
export default function Content() {
  return /* @__PURE__ */ jsxDEV("div", { id: "my-ext", className: "container", "data-theme": "light", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-6 p-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mx-auto w-72 rounded-xl bg-white p-4 shadow-lg dark:bg-gray-800", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-gray-600 dark:text-white", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold text-indigo-500", children: "“" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
        /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-bold text-indigo-500", children: "”" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "mt-4 flex items-center", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "google.com", className: "relative block", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            alt: "profil",
            src: "https://www.tailwind-kit.com/images/person/1.jpg",
            className: "mx-auto h-10 w-10 rounded-full object-cover "
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 43,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "ml-2 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-semibold text-indigo-500", children: "Jean Miguel" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "flex items-center text-xs dark:text-gray-400", children: [
            "User of Tail-Kit",
            /* @__PURE__ */ jsxDEV("img", { src: "/icons/rocket.svg", className: "ml-2 h-4 w-4", alt: "" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-outline", children: "Default" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-primary btn-outline", children: "Primary" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-secondary btn-outline", children: "Secondary" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-accent btn-outline", children: "Accent" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-neutral", children: "Neutral" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-primary", children: "Primary" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn", children: "Button" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-secondary", children: "Secondary" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-accent", children: "Accent" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-ghost", children: "Ghost" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-link", children: "Link" }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxDEV("label", { className: "input-bordered input flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV("input", { type: "text", className: "grow", placeholder: "Search" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "h-4 w-4 opacity-70",
            children: /* @__PURE__ */ jsxDEV(
              "path",
              {
                fillRule: "evenodd",
                d: "M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z",
                clipRule: "evenodd"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 106,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 100,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("label", { className: "input-bordered input flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "h-4 w-4 opacity-70",
            children: [
              /* @__PURE__ */ jsxDEV("path", { d: "M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 120,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("path", { d: "M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 121,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 114,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("input", { type: "text", className: "grow", placeholder: "Email" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("label", { className: "input-bordered input flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "h-4 w-4 opacity-70",
            children: /* @__PURE__ */ jsxDEV("path", { d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 132,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 126,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("input", { type: "text", className: "grow", placeholder: "Username" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("label", { className: "input-bordered input flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            className: "h-4 w-4 opacity-70",
            children: /* @__PURE__ */ jsxDEV(
              "path",
              {
                fillRule: "evenodd",
                d: "M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z",
                clipRule: "evenodd"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 143,
                columnNumber: 15
              },
              this
            )
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 137,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("input", { type: "password", className: "grow", value: "password" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-10 flex gap-2", children: /* @__PURE__ */ jsxDEV(
      "div",
      {
        className: "tooltip tooltip-open tooltip-primary",
        "data-tip": "primary",
        children: /* @__PURE__ */ jsxDEV("button", { type: "button", className: "btn btn-primary", children: "primary" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, this)
      },
      void 0,
      false,
      {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 154,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "carousel w-full", children: [
        /* @__PURE__ */ jsxDEV("div", { id: "item1", className: "carousel-item w-full", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
            className: "w-full"
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 167,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 166,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { id: "item2", className: "carousel-item w-full", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
            className: "w-full"
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 173,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { id: "item3", className: "carousel-item w-full", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
            className: "w-full"
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 179,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { id: "item4", className: "carousel-item w-full", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
            className: "w-full"
          },
          void 0,
          false,
          {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 185,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 184,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex w-full justify-center gap-2 py-2", children: [
        /* @__PURE__ */ jsxDEV("a", { href: "#item1", className: "btn btn-xs", children: "1" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#item2", className: "btn btn-xs", children: "2" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 195,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#item3", className: "btn btn-xs", children: "3" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("a", { href: "#item4", className: "btn btn-xs", children: "4" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 191,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV("table", { className: "table", children: [
      /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("label", { children: /* @__PURE__ */ jsxDEV("input", { type: "checkbox", className: "checkbox" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 215,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 214,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 213,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Name" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 218,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Job" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 219,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Favorite Color" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 220,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", {}, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 221,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 212,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 211,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("tbody", { children: [
        /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("label", { children: /* @__PURE__ */ jsxDEV("input", { type: "checkbox", className: "checkbox" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 229,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 228,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 227,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "avatar", children: /* @__PURE__ */ jsxDEV("div", { className: "mask mask-squircle h-12 w-12", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://img.daisyui.com/images/profile/demo/2@94.webp",
                alt: "Avatar Tailwind CSS Component"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 236,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 235,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 234,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-bold", children: "Hart Hagerty" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 243,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm opacity-50", children: "United States" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 244,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 242,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 233,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 232,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [
            "Zemlak, Daniel and Leannon",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "badge badge-ghost badge-sm", children: "Desktop Support Technician" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: "Purple" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 255,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-ghost btn-xs", children: "details" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 257,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 256,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 226,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("label", { children: /* @__PURE__ */ jsxDEV("input", { type: "checkbox", className: "checkbox" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 264,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 263,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 262,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "avatar", children: /* @__PURE__ */ jsxDEV("div", { className: "mask mask-squircle h-12 w-12", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://img.daisyui.com/images/profile/demo/3@94.webp",
                alt: "Avatar Tailwind CSS Component"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 271,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 270,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 269,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-bold", children: "Brice Swyre" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 278,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm opacity-50", children: "China" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 279,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 277,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 268,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [
            "Carroll Group",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 285,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "badge badge-ghost badge-sm", children: "Tax Accountant" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 286,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 283,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: "Red" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 290,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-ghost btn-xs", children: "details" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 292,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 291,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("label", { children: /* @__PURE__ */ jsxDEV("input", { type: "checkbox", className: "checkbox" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 299,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 298,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 297,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "avatar", children: /* @__PURE__ */ jsxDEV("div", { className: "mask mask-squircle h-12 w-12", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://img.daisyui.com/images/profile/demo/4@94.webp",
                alt: "Avatar Tailwind CSS Component"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 306,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 305,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 304,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-bold", children: "Marjy Ferencz" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 313,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm opacity-50", children: "Russia" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 314,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 312,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 303,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 302,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [
            "Rowe-Schoen",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 320,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "badge badge-ghost badge-sm", children: "Office Assistant I" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 321,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 318,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: "Crimson" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 325,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-ghost btn-xs", children: "details" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 327,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 326,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 296,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("label", { children: /* @__PURE__ */ jsxDEV("input", { type: "checkbox", className: "checkbox" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 334,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 333,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 332,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "avatar", children: /* @__PURE__ */ jsxDEV("div", { className: "mask mask-squircle h-12 w-12", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: "https://img.daisyui.com/images/profile/demo/5@94.webp",
                alt: "Avatar Tailwind CSS Component"
              },
              void 0,
              false,
              {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 341,
                columnNumber: 27
              },
              this
            ) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 340,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 339,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "font-bold", children: "Yancy Tear" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 348,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "text-sm opacity-50", children: "Brazil" }, void 0, false, {
                fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
                lineNumber: 349,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 347,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 338,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 337,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [
            "Wyman-Ledner",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 355,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "badge badge-ghost badge-sm", children: "Community Outreach Specialist" }, void 0, false, {
              fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
              lineNumber: 356,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 353,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: "Indigo" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 360,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: /* @__PURE__ */ jsxDEV("button", { className: "btn btn-ghost btn-xs", children: "details" }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 362,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
            lineNumber: 361,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 331,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV("tfoot", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
        /* @__PURE__ */ jsxDEV("th", {}, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 369,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Name" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 370,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Job" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 371,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", { children: "Favorite Color" }, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 372,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV("th", {}, void 0, false, {
          fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
          lineNumber: 373,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 368,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
        lineNumber: 367,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 209,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 208,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
      lineNumber: 207,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/elad/projects/nof/src/content/Content.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
_c = Content;
var _c;
$RefreshReg$(_c, "Content");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/elad/projects/nof/src/content/Content.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/elad/projects/nof/src/content/Content.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

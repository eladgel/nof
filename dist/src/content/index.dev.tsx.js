import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--b5734d55.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/vendor/.vite-deps-react-dom_client.js__v--f61ca3b7.js"; const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];
import Content from "/src/content/Content.tsx.js";
import "/src/assets/styles/index.css.js";
const container = document.createElement("div");
const styleElement = document.querySelector("style[data-vite-dev-id]");
if (!styleElement) {
  throw new Error("Style element with attribute data-vite-dev-id not found.");
}
const shadowRoot = container.attachShadow({ mode: "open" });
shadowRoot.appendChild(styleElement);
document.body.appendChild(container);
const root = createRoot(shadowRoot);
root.render(/* @__PURE__ */ jsxDEV(Content, {}, void 0, false, {
  fileName: "/Users/elad/projects/nof/src/content/index.dev.tsx",
  lineNumber: 35,
  columnNumber: 13
}, this));

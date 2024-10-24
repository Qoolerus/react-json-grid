(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-json-grid"] = factory(global.React));
})(this, (function (React) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".json-grid-container {\n  --jg-bg-color: #222;\n  --jg-border-color: #b5b5b5;\n  --jg-cell-border-color: #474747;\n  --jg-key-color: #ffffff;\n  --jg-index-color: #949494;\n  --jg-expand-group-color: #ffffff;\n  --jg-number-color: #6c99bb;\n  --jg-boolean-color: #6c99bb;\n  --jg-string-color: #a5c261;\n  --jg-object-color: #ffffff;\n  --jg-table-header-bg-color: #444;\n  --jg-table-icon-color: #ffffff;\n  --jg-select-highlight-bg-color: #3b3b3b;\n  --jg-hover-light-bg-color: transparent;\n  --jg-search-highlight-bg-color: #565a36;\n  display: inline-block;\n  margin: 0;\n  font-family: \"Segoe UI\", Roboto, Arial, sans-serif;\n  line-height: 1.5;\n  text-align: left;\n  background-color: var(--jg-bg-color);\n}\n.json-grid-container,\n.json-grid-container .json-grid-table {\n  border-radius: 3px;\n  overflow: hidden;\n}\n.json-grid-container .json-grid-table {\n  border-collapse: separate;\n  border-spacing: 0;\n  border: solid var(--jg-table-border-color) 1px;\n}\n.json-grid-container .json-grid-table .json-grid-table {\n  margin: 3px 0px;\n}\n.json-grid-container .json-grid-table .glyphicon {\n  position: relative;\n  top: 3px;\n  display: inline-block;\n  color: var(--jg-table-icon-color);\n}\n.json-grid-container .hoverlight {\n  background-color: var(--jg-hover-light-bg-color);\n}\n.json-grid-container .highlight {\n  background-color: var(--jg-select-highlight-bg-color);\n}\n.json-grid-container .obj {\n  border: 1px solid var(--jg-cell-border-color);\n  padding: 3px 10px;\n  padding-bottom: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.json-grid-container .obj,\n.json-grid-container .obj .name {\n  color: var(--jg-key-color);\n}\n.json-grid-container .obj .index {\n  color: var(--jg-index-color);\n}\n.json-grid-container .obj .number {\n  color: var(--jg-number-color);\n}\n.json-grid-container .obj .boolean {\n  color: var(--jg-boolean-color);\n}\n.json-grid-container .obj .string {\n  color: var(--jg-string-color);\n}\n.json-grid-container .obj .undefined {\n  color: var(--jg-object-color);\n}\n.json-grid-container .obj .object {\n  color: var(--jg-object-color);\n}\n.json-grid-container .order {\n  background-color: var(--jg-table-header-bg-color);\n  font-weight: normal !important;\n}\n.json-grid-container .key {\n  vertical-align: top;\n}\n.json-grid-container .title {\n  font-weight: 600;\n  color: var(--jg-expand-group-color);\n}\n.json-grid-container .plusminus {\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 2px;\n  color: var(--jg-expand-group-color);\n}\n.json-grid-container .search-highlight {\n  background-color: var(--jg-search-highlight-bg-color);\n  padding: 1px 5px;\n  padding-top: 0;\n  border-radius: 2px;\n}";
  var styles = {"json-grid-container":"json-grid-container","json-grid-table":"json-grid-table","glyphicon":"glyphicon","hoverlight":"hoverlight","highlight":"highlight","obj":"obj","name":"name","index":"index","number":"number","boolean":"boolean","string":"string","undefined":"undefined","object":"object","order":"order","key":"key","title":"title","plusminus":"plusminus","search-highlight":"search-highlight"};
  styleInject(css_248z);

  const themes = {
      default: {
          bgColor: "#222",
          borderColor: "#b5b5b5",
          selectHighlightBgColor: "#3b3b3b",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#474747",
          keyColor: "#ffffff",
          indexColor: "#949494",
          expandGroupColor: "#ffffff",
          numberColor: "#6c99bb",
          booleanColor: "#6c99bb",
          stringColor: "#a5c261",
          objectColor: "#ffffff",
          tableHeaderBgColor: "#444",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#565a36",
      },
      dracula: {
          bgColor: "#2b2e3b",
          borderColor: "#44475a",
          selectHighlightBgColor: "#363949",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#44475a",
          keyColor: "#F8F8F2",
          indexColor: "#6272a4",
          expandGroupColor: "#F8F8F2",
          numberColor: "#f1fa8c",
          booleanColor: "#ff79c6",
          stringColor: "#50FA7B",
          objectColor: "#ff79c6",
          tableHeaderBgColor: "#363949",
          tableIconColor: "#f8f8f2",
          searchHighlightBgColor: "#4c4f67",
      },
      monokai: {
          bgColor: "#272822",
          borderColor: "#49483e",
          selectHighlightBgColor: "#49483e",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#373a2c",
          keyColor: "#c1c1bd",
          indexColor: "#75715e",
          expandGroupColor: "#c1c1bd",
          numberColor: "#a3e8f5",
          booleanColor: "#ae81ff",
          stringColor: "#ece393",
          objectColor: "#a6e22e",
          tableHeaderBgColor: "#414434",
          tableIconColor: "#f8f8f2",
          searchHighlightBgColor: "#72705a",
      },
      oceanicPark: {
          bgColor: "#17242B",
          borderColor: "#2c3e50",
          selectHighlightBgColor: "#345365",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#2b4554",
          keyColor: "#89adc2",
          indexColor: "#546e7a",
          expandGroupColor: "#89adc2",
          numberColor: "#89ddff",
          booleanColor: "#35A6B3",
          stringColor: "#c3e88d",
          objectColor: "#ffcb6b",
          tableHeaderBgColor: "#2c3e50",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#185e70",
      },
      panda: {
          bgColor: "#292A2B",
          borderColor: "#4d4e50",
          selectHighlightBgColor: "#3e4042",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#4c4c4d",
          keyColor: "#b4fdf2",
          indexColor: "#9aedfe",
          expandGroupColor: "#b4fdf2",
          numberColor: "#35dcfd",
          booleanColor: "#FF9AA4",
          stringColor: "#FFB857",
          objectColor: "#ff6b72",
          tableHeaderBgColor: "#3b3c3d",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#4a4d4f",
      },
      gruvboxMaterial: {
          bgColor: "#282828",
          borderColor: "#3c3836",
          selectHighlightBgColor: "#3c3836",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#504945",
          keyColor: "#d3869b",
          indexColor: "#bdae93",
          expandGroupColor: "#d3869b",
          numberColor: "#8ec07c",
          booleanColor: "#8ec07c",
          stringColor: "#ebdbb2",
          objectColor: "#d3869b",
          tableHeaderBgColor: "#3c3836",
          tableIconColor: "#ebdbb2",
          searchHighlightBgColor: "#62564f",
      },
      tokyoNight: {
          bgColor: "#1A1B26",
          borderColor: "#272a36",
          selectHighlightBgColor: "#34374c",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#272a36",
          keyColor: "#C0CAF5",
          indexColor: "#89b8ff",
          expandGroupColor: "#C0CAF5",
          numberColor: "#7CCE6A",
          booleanColor: "#7AA2F7",
          stringColor: "#AC94F7",
          objectColor: "#9d88f5",
          tableHeaderBgColor: "#363a4a",
          tableIconColor: "#f3f3f3",
          searchHighlightBgColor: "#53577b",
      },
      remedy: {
          bgColor: "#ffffff",
          borderColor: "#d3d3d3",
          selectHighlightBgColor: "#f5f5f5",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#eaeaea",
          keyColor: "#6e5494",
          indexColor: "#4d4d4d",
          expandGroupColor: "#6e5494",
          numberColor: "#007acc",
          booleanColor: "#007acc",
          stringColor: "#2c8ebb",
          objectColor: "#6e5494",
          tableHeaderBgColor: "#f5f5f5",
          tableIconColor: "#6e5494",
          searchHighlightBgColor: "#FCEED1",
      },
      atlanticNight: {
          bgColor: "#000720",
          borderColor: "#000b33",
          selectHighlightBgColor: "#1f2647",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#00114d",
          keyColor: "#6cb6ff",
          indexColor: "#6cb6ff",
          expandGroupColor: "#6cb6ff",
          numberColor: "#a2d6ff",
          booleanColor: "#a2d6ff",
          stringColor: "#BF90C9",
          objectColor: "#6cb6ff",
          tableHeaderBgColor: "#001666",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#1C2341",
      },
      defaultLight: {
          bgColor: "#f5f5f5",
          borderColor: "#d3d3d3",
          selectHighlightBgColor: "#e0e0e0",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#c0c0c0",
          keyColor: "#333333",
          indexColor: "#666666",
          expandGroupColor: "#333333",
          numberColor: "#007acc",
          booleanColor: "#007acc",
          stringColor: "#2ca22c",
          objectColor: "#333333",
          tableHeaderBgColor: "#dddddd",
          tableIconColor: "#333333",
          searchHighlightBgColor: "#cccccc",
      },
      defaultLight2: {
          bgColor: "#fafafa",
          borderColor: "#e0e0e0",
          selectHighlightBgColor: "#e6e6e6",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#c7c7c7",
          keyColor: "#4caf50",
          indexColor: "#757575",
          expandGroupColor: "#4caf50",
          numberColor: "#2196f3",
          booleanColor: "#2196f3",
          stringColor: "#ff9800",
          objectColor: "#4caf50",
          tableHeaderBgColor: "#e0e0e0",
          tableIconColor: "#333333",
          searchHighlightBgColor: "#cccccc",
      },
      slime: {
          bgColor: "#1E2324",
          borderColor: "#333333",
          selectHighlightBgColor: "#333333",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#444444",
          keyColor: "#8EC199",
          indexColor: "#999999",
          expandGroupColor: "#8EC199",
          numberColor: "#BE9287",
          booleanColor: "#B081B9",
          stringColor: "#D88F56",
          objectColor: "#dcdcaa",
          tableHeaderBgColor: "#333333",
          tableIconColor: "#cccccc",
          searchHighlightBgColor: "#404040",
      },
      spacegray: {
          bgColor: "#212835",
          borderColor: "#2c313a",
          selectHighlightBgColor: "#2c313a",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#394147",
          keyColor: "#9ec7fa",
          indexColor: "#768390",
          expandGroupColor: "#9ec7fa",
          numberColor: "#E9B672",
          booleanColor: "#D49FF4",
          stringColor: "#63F49C",
          objectColor: "#61afef",
          tableHeaderBgColor: "#2c313a",
          tableIconColor: "#e0e0e0",
          searchHighlightBgColor: "#303b4f",
      },
      blueberryDark: {
          bgColor: "#242938",
          borderColor: "#343d4a",
          selectHighlightBgColor: "#343d4a",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#444f5c",
          keyColor: "#ADD7FF",
          indexColor: "#8c98a6",
          expandGroupColor: "#ADD7FF",
          numberColor: "#38B0B2",
          booleanColor: "#c3e88d",
          stringColor: "#27E8A7",
          objectColor: "#c792ea",
          tableHeaderBgColor: "#343d4a",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#30435a",
      },
      nord: {
          bgColor: "#2e3440",
          borderColor: "#3b4252",
          selectHighlightBgColor: "#363c4a",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#434c5e",
          keyColor: "#81a1c1",
          indexColor: "#D8DEE9",
          expandGroupColor: "#81a1c1",
          numberColor: "#88C0D0",
          booleanColor: "#8fbcbb",
          stringColor: "#A3BE8C",
          objectColor: "#b48ead",
          tableHeaderBgColor: "#3b4252",
          tableIconColor: "#e5e9f0",
          searchHighlightBgColor: "#404859",
      },
      nightOwl: {
          bgColor: "#011627",
          borderColor: "#02233d",
          selectHighlightBgColor: "#02233d",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#03314b",
          keyColor: "#dbb8e0",
          indexColor: "#dcdcaa",
          expandGroupColor: "#dbb8e0",
          numberColor: "#F77D48",
          booleanColor: "#82aaff",
          stringColor: "#ECC48D",
          objectColor: "#ffcb6b",
          tableHeaderBgColor: "#02233d",
          tableIconColor: "#e0e0e0",
          searchHighlightBgColor: "#033963",
      },
      oneMonokai: {
          bgColor: "#282c34",
          borderColor: "#2c313a",
          selectHighlightBgColor: "#2c313a",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#3e4451",
          keyColor: "#abb2bf",
          indexColor: "#5c6370",
          expandGroupColor: "#abb2bf",
          numberColor: "#d19a66",
          booleanColor: "#61AFEF",
          stringColor: "#98c379",
          objectColor: "#61afef",
          tableHeaderBgColor: "#2c313a",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#383E4A",
      },
      cobaltNext: {
          bgColor: "#1B2B34",
          borderColor: "#234666",
          selectHighlightBgColor: "#2b333b",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#29546a",
          keyColor: "#dcd0e2",
          indexColor: "#dcd0e2",
          expandGroupColor: "#dcd0e2",
          numberColor: "#5A9BCF",
          booleanColor: "#ce9178",
          stringColor: "#89C794",
          objectColor: "#d1d2d3",
          tableHeaderBgColor: "#234666",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#343D46",
      },
      shadesOfPurple: {
          bgColor: "#2d2b55",
          borderColor: "#463d69",
          selectHighlightBgColor: "#463d69",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#54496b",
          keyColor: "#fad000",
          indexColor: "#a599e9",
          expandGroupColor: "#fad000",
          numberColor: "#ff6188",
          booleanColor: "#ff6188",
          stringColor: "#A5FF90",
          objectColor: "#fad000",
          tableHeaderBgColor: "#463d69",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#554a82",
      },
      codeBlue: {
          bgColor: "#081620",
          borderColor: "#233544",
          selectHighlightBgColor: "#233544",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#194666",
          keyColor: "#B2A8B4",
          indexColor: "#96b5b4",
          expandGroupColor: "#B2A8B4",
          numberColor: "#99cc99",
          booleanColor: "#99cc99",
          stringColor: "#d2cd87",
          objectColor: "#ff8d00",
          tableHeaderBgColor: "#233544",
          tableIconColor: "#fff",
          searchHighlightBgColor: "#233544",
      },
      softEra: {
          bgColor: "#F9F5F5",
          borderColor: "#d3d3d3",
          selectHighlightBgColor: "#E3E6ED",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#c0c0c0",
          keyColor: "#696462",
          indexColor: "#888888",
          expandGroupColor: "#696462",
          numberColor: "#82B4E3",
          booleanColor: "#DA8FBD",
          stringColor: "#87B6BE",
          objectColor: "#C1AFDF",
          tableHeaderBgColor: "#E3E6ED",
          tableIconColor: "#333333",
          searchHighlightBgColor: "#d0d5e1",
      },
      atomMaterial: {
          bgColor: "#263238",
          borderColor: "#37474f",
          selectHighlightBgColor: "#37474f",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#546e7a",
          keyColor: "#EEFFFF",
          indexColor: "#90a4ae",
          expandGroupColor: "#EEFFFF",
          numberColor: "#F78150",
          booleanColor: "#82b1ff",
          stringColor: "#C3E88D",
          objectColor: "#ffcb6b",
          tableHeaderBgColor: "#455a64",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#4F6875",
      },
      evaDark: {
          bgColor: "#282C34",
          borderColor: "#343c47",
          selectHighlightBgColor: "#343c47",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#3d4752",
          keyColor: "#B0B7C3",
          indexColor: "#5c6773",
          expandGroupColor: "#B0B7C3",
          numberColor: "#FF9070",
          booleanColor: "#56B7C3",
          stringColor: "#82BE79",
          objectColor: "#b4be82",
          tableHeaderBgColor: "#343c47",
          tableIconColor: "#ffffff",
          searchHighlightBgColor: "#4e5765",
      },
      moonLight: {
          bgColor: "#222436",
          borderColor: "#343c47",
          selectHighlightBgColor: "#31344e",
          hoverLightBgColor: "transparent",
          cellBorderColor: "#3d4752",
          keyColor: "#C8D3F5",
          indexColor: "#C8D3F5",
          expandGroupColor: "#C8D3F5",
          numberColor: "#7CAFFF",
          booleanColor: "#FF6F78",
          stringColor: "#7AF8CA",
          objectColor: "#ff9e64",
          tableHeaderBgColor: "#31344e",
          tableIconColor: "#C8D3F5",
          searchHighlightBgColor: "#4e5765",
      },
  };

  function isObject(obj) {
      return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
  }
  function classnames(...args) {
      return args.filter(Boolean).join(" ");
  }
  function lookup(obj, searchText) {
      const keyTree = {};
      let matchesInKey = false;
      if (!isObject(obj) && !Array.isArray(obj))
          return null;
      for (const key in obj) {
          if (isObject(obj) && matchesText(key, searchText)) {
              matchesInKey = true;
          }
          if (isObject(obj[key]) || Array.isArray(obj[key])) {
              const nestedKeyTree = lookup(obj[key], searchText);
              if (nestedKeyTree != null) {
                  keyTree[key] = nestedKeyTree;
              }
          }
          else if (matchesText(obj[key], searchText)) {
              keyTree[key] = true;
          }
      }
      if (Object.keys(keyTree).length !== 0)
          return keyTree;
      else if (matchesInKey)
          return true;
      else
          return null;
  }
  function matchesText(obj, searchText) {
      if (searchText == null)
          return false;
      return String(obj).toLowerCase().includes(searchText.toLowerCase());
  }
  function mergeKeyTrees(keyTree1, keyTree2) {
      if (keyTree1 == null)
          return keyTree2;
      if (keyTree2 == null)
          return keyTree1;
      if (keyTree1 === true)
          return keyTree2;
      if (keyTree2 === true)
          return keyTree1;
      const mergedKeyTree = {};
      for (const key in keyTree1) {
          mergedKeyTree[key] = mergeKeyTrees(keyTree1[key], keyTree2[key]);
      }
      for (const key in keyTree2) {
          if (!mergedKeyTree.hasOwnProperty(key)) {
              mergedKeyTree[key] = keyTree2[key];
          }
      }
      return mergedKeyTree;
  }
  function checkAllObjects(data) {
      let allObjects = false;
      let keys = [];
      let isArray = Array.isArray(data);
      if (Array.isArray(data)) {
          allObjects = data.length > 0;
          let keysSet = new Set();
          for (let i = 0; i < data.length; i++) {
              if (!isObject(data[i])) {
                  allObjects = false;
                  break;
              }
              Object.keys(data[i]).forEach((k) => keysSet.add(k));
          }
          if (allObjects)
              keys = Array.from(keysSet);
          else
              keys = Object.keys(data);
      }
      else if (isObject(data)) {
          keys = Object.keys(data);
      }
      return { allObjects, keys, isArray };
  }
  function validateProps({ data, defaultExpandDepth, defaultExpandKeyTree, onSelect, highlightSelected, searchText, theme, }) {
      if (!data) {
          throw new Error("JSONGrid: data prop cannot be null or undefined");
      }
      if (!Array.isArray(data) && typeof data !== "object") {
          throw new Error("JSONGrid: data prop must be an object or an array");
      }
      if (defaultExpandDepth && defaultExpandDepth < 0) {
          throw new Error("JSONGrid: defaultExpandDepth prop must not be a negative number");
      }
      if (defaultExpandKeyTree && !isObject(defaultExpandKeyTree)) {
          throw new Error("JSONGrid: defaultExpandKeyTree prop must be an object");
      }
      if (onSelect && typeof onSelect !== "function") {
          throw new Error("JSONGrid: onSelect prop must be a function");
      }
      if (highlightSelected && typeof highlightSelected !== "boolean") {
          throw new Error("JSONGrid: highlightSelected prop must be a boolean");
      }
      if (searchText && typeof searchText !== "string") {
          throw new Error("JSONGrid: searchText prop must be a string");
      }
      if (theme && !themes[theme]) {
          throw new Error(`JSONGrid: theme prop must be one of ${Object.keys(themes).join(", ")}`);
      }
  }
  function getThemeStyles(customTheme, theme) {
      const themeDetails = themes[theme];
      return {
          "--jg-bg-color": customTheme.bgColor || themeDetails.bgColor,
          "--jg-border-color": customTheme.borderColor || themeDetails.borderColor,
          "--jg-cell-border-color": customTheme.cellBorderColor || themeDetails.cellBorderColor,
          "--jg-key-color": customTheme.keyColor || themeDetails.keyColor,
          "--jg-index-color": customTheme.indexColor || themeDetails.indexColor,
          "--jg-expand-group-color": customTheme.expandGroupColor || themeDetails.expandGroupColor,
          "--jg-number-color": customTheme.numberColor || themeDetails.numberColor,
          "--jg-boolean-color": customTheme.booleanColor || themeDetails.booleanColor,
          "--jg-string-color": customTheme.stringColor || themeDetails.stringColor,
          "--jg-object-color": customTheme.objectColor || themeDetails.objectColor,
          "--jg-table-header-bg-color": customTheme.tableHeaderBgColor || themeDetails.tableHeaderBgColor,
          "--jg-table-icon-color": customTheme.tableIconColor || themeDetails.tableIconColor,
          "--jg-select-highlight-bg-color": customTheme.selectHighlightBgColor || themeDetails.selectHighlightBgColor,
          "--jg-hover-light-bg-color": customTheme.hoverLightBgColor || themeDetails.hoverLightBgColor,
          "--jg-search-highlight-bg-color": customTheme.searchHighlightBgColor || themeDetails.searchHighlightBgColor,
      };
  }

  const NestedJSONGrid = (props) => {
      const { level, keyPath, data, dataKey, highlightedElement, hoveredElement, highlightSelected, onSelect, setHighlightedElement, setHoveredElement, defaultExpandDepth, defaultExpandKeyTree, searchText, } = props;
      const highlight = (event) => {
          event.stopPropagation();
          const target = event.target;
          const currentTarget = event.currentTarget;
          if ((target !== currentTarget && target.hasAttribute("data-clickable")) ||
              (target.parentElement !== currentTarget && target.parentElement?.hasAttribute("data-clickable")))
              return;
          let nextKeyPath = [];
          let nextHighlightElement = currentTarget;
          if (highlightedElement != null)
              highlightedElement.classList.remove(styles.highlight);
          if (currentTarget.hasAttribute("data-rowhighlight")) {
              nextHighlightElement = currentTarget.parentElement;
              const rowIndex = Array.prototype.indexOf.call(nextHighlightElement?.parentElement?.children, nextHighlightElement);
              nextKeyPath = [isArray && !allObjects ? [rowIndex] : rowIndex];
          }
          else if (currentTarget.hasAttribute("data-colhighlight")) {
              const colIndex = Array.prototype.indexOf.call(currentTarget.parentElement?.children, currentTarget);
              nextHighlightElement = currentTarget.parentElement?.parentElement?.previousElementSibling?.children[colIndex];
              nextKeyPath = [[keys[colIndex - 1]]];
          }
          else {
              const rowIndex = Array.prototype.indexOf.call(nextHighlightElement?.parentElement?.parentElement?.children, nextHighlightElement.parentElement);
              const colIndex = Array.prototype.indexOf.call(nextHighlightElement?.parentElement?.children, nextHighlightElement);
              if (allObjects) {
                  nextKeyPath = [rowIndex, keys[colIndex - 1]];
              }
              else {
                  const key = keys[rowIndex];
                  if (colIndex === 0) {
                      nextKeyPath = [[key]];
                  }
                  else {
                      nextKeyPath = [isArray ? parseInt(key) : key];
                  }
              }
          }
          if (highlightSelected)
              nextHighlightElement?.classList.add(styles.highlight);
          setHighlightedElement(nextHighlightElement);
          onSelect(keyPath.concat(nextKeyPath));
      };
      const hovered = (event) => {
          event.stopPropagation();
          const target = event.target;
          const currentTarget = event.currentTarget;
          if ((target !== currentTarget && target.hasAttribute("data-clickable")) ||
              (target.parentElement !== currentTarget && target.parentElement?.hasAttribute("data-clickable")))
              return;
          let nextHoverElement = currentTarget;
          if (hoveredElement != null)
              hoveredElement.classList.remove(styles.hoverlight);
          if (currentTarget.hasAttribute("data-rowhighlight")) {
              nextHoverElement = currentTarget.parentElement;
          }
          else if (currentTarget.hasAttribute("data-colhighlight")) {
              const colIndex = Array.prototype.indexOf.call(currentTarget.parentElement?.children, currentTarget);
              nextHoverElement = currentTarget.parentElement?.parentElement?.previousElementSibling?.children[colIndex];
          }
          if (highlightSelected)
              nextHoverElement?.classList.add(styles.hoverlight);
          setHoveredElement(nextHoverElement);
      };
      const renderValue = (key, value, level, keyTree, nextKeyPath) => {
          if (value && typeof value === "object")
              return (React.createElement("td", { className: classnames(styles.obj, styles.value), onClick: highlight, onMouseOver: hovered, "data-clickable": "true", key: key },
                  React.createElement(NestedJSONGrid, { level: level + 1, keyPath: keyPath.concat(nextKeyPath), dataKey: key, data: value, highlightedElement: highlightedElement, hoveredElement: hoveredElement, highlightSelected: highlightSelected, onSelect: onSelect, setHighlightedElement: setHighlightedElement, setHoveredElement: setHoveredElement, defaultExpandDepth: defaultExpandDepth, defaultExpandKeyTree: keyTree && keyTree[key], searchText: searchText })));
          return (React.createElement("td", { className: classnames(styles.obj, styles.value), onClick: highlight, onMouseOver: hovered, "data-clickable": "true", key: key },
              React.createElement("span", { className: classnames(styles[typeof value], matchesText(value, searchText) && styles["search-highlight"]) }, String(value))));
      };
      const renderTable = (data, level, allObjects, keys) => {
          return (React.createElement("table", { className: styles["json-grid-table"] },
              allObjects && (React.createElement(React.Fragment, null,
                  React.createElement("colgroup", null,
                      React.createElement("col", null),
                      keys.map((key) => (React.createElement("col", { key: key })))),
                  React.createElement("thead", null,
                      React.createElement("tr", null,
                          React.createElement("th", { className: classnames(styles.obj, styles.order), "data-clickable": "true" },
                              React.createElement("svg", { className: styles.glyphicon, "data-clickable": "true", xmlns: "http://www.w3.org/2000/svg", height: "1em", viewBox: "0 0 448 512" },
                                  React.createElement("path", { fill: "currentColor", d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" }))),
                          keys.map((key) => (React.createElement("th", { className: classnames(styles.obj, styles.order, styles.name), key: key, onClick: highlight, onMouseOver: hovered, "data-clickable": "true", "data-colhighlight": "true" },
                              React.createElement("span", { className: matchesText(key, searchText) ? styles["search-highlight"] : undefined }, key)))))))),
              React.createElement("tbody", null, Object.keys(data).map((key) => (React.createElement("tr", { key: key },
                  Array.isArray(data) ? (React.createElement("td", { className: classnames(styles.obj, styles.order, styles.index), onClick: highlight, onMouseOver: hovered, "data-clickable": "true", "data-rowhighlight": "true" }, parseInt(key) + 1)) : (React.createElement("td", { className: classnames(styles.obj, styles.key, styles.name), onClick: highlight, onMouseOver: hovered, "data-clickable": "true" },
                      React.createElement("span", { className: matchesText(key, searchText) ? styles["search-highlight"] : undefined }, key))),
                  allObjects
                      ? keys.map((nestedKey) => renderValue(nestedKey, data[key][nestedKey], level, defaultExpandKeyTree && defaultExpandKeyTree[key], [parseInt(key), nestedKey]))
                      : renderValue(key, data[key], level, defaultExpandKeyTree, [key])))))));
      };
      const { allObjects, keys, isArray } = checkAllObjects(data);
      if (level !== 0) {
          const [open, setOpen] = React.useState(Boolean(level <= defaultExpandDepth || defaultExpandKeyTree));
          return (React.createElement("div", { className: styles.box },
              React.createElement("span", { className: styles.plusminus, onClick: () => setOpen(!open), "data-clickable": "true" }, open ? "[-]" : "[+]"),
              React.createElement("span", { className: styles.title },
                  dataKey,
                  "\u00A0",
                  Array.isArray(data) ? `[${data.length}]` : "{}"),
              open && renderTable(data, level, allObjects, keys)));
      }
      return renderTable(data, level, allObjects, keys);
  };

  const JSONGrid = ({ data, defaultExpandDepth = 0, defaultExpandKeyTree = {}, onSelect = (keyPath) => { }, highlightSelected = true, searchText, theme = "default", customTheme = {}, }) => {
      const [highlightedElement, setHighlightedElement] = React.useState(null);
      const [hoveredElement, setHoveredElement] = React.useState(null);
      const wrapperRef = React.useRef(null);
      React.useEffect(() => {
          function handleClickOutside(event) {
              if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                  if (highlightedElement !== null)
                      highlightedElement.classList.remove(styles.highlight);
                  setHighlightedElement(null);
              }
          }
          document.addEventListener("click", handleClickOutside);
          return () => document.removeEventListener("click", handleClickOutside);
      }, [highlightedElement]);
      const wrapperMouseLeaveHandler = () => {
          if (hoveredElement !== null) {
              hoveredElement.classList.remove(styles.hoverlight);
              setHoveredElement(null);
          }
      };
      React.useEffect(() => {
          validateProps({
              data,
              defaultExpandDepth,
              defaultExpandKeyTree,
              onSelect,
              highlightSelected,
              searchText,
              theme,
          });
      }, [data, defaultExpandDepth, onSelect, highlightSelected, searchText, theme]);
      const themeStyles = getThemeStyles(customTheme, theme);
      const mergedKeyTree = searchText
          ? mergeKeyTrees(defaultExpandKeyTree, lookup(data, searchText))
          : defaultExpandKeyTree;
      return (React.createElement("div", { className: styles["json-grid-container"], style: themeStyles, ref: wrapperRef, onMouseLeave: wrapperMouseLeaveHandler },
          React.createElement(NestedJSONGrid, { level: 0, keyPath: [], data: data, highlightedElement: highlightedElement, hoveredElement: hoveredElement, highlightSelected: highlightSelected, onSelect: onSelect, setHighlightedElement: setHighlightedElement, setHoveredElement: setHoveredElement, defaultExpandDepth: defaultExpandDepth, defaultExpandKeyTree: mergedKeyTree, searchText: searchText })));
  };

  return JSONGrid;

}));
//# sourceMappingURL=index.umd.js.map

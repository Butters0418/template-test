# 活動頁

> 一個基於 React + Vite 開發的電商活動頁面,整合自動化圖片壓縮、多後台資料串接與客製化打包流程。

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://butters.idv.tw/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)](https://tailwindcss.com/)

## 📋 目錄

- [🛠 技術棧](#-技術棧)
- [✨ 核心功能](#-核心功能)
- [📝 Demo 說明](#-demo-說明)
- [🚀 快速開始](#-快速開始)
- [📂 專案結構](#-專案結構)
- [💻 開發指南](#-開發指南)
- [🎨 核心組件使用](#-核心組件使用)
- [🗂️ 狀態管理](#️-狀態管理)
- [📝 開發 Snippets](#-開發-snippets)
- [🛠️ 工具函式](#️-工具函式)

---

**🌐 線上展示**: [https://butters.idv.tw/](https://butters.idv.tw/)

---

## 🛠 技術棧

### 核心技術

- **React 18.2** - 前端框架
- **Vite 4.x** - 建構工具
- **Tailwind CSS 3.x** - CSS 框架
- **Styled Components** - CSS-in-JS
- **Twin.macro** - Tailwind + Styled Components 整合

### 狀態管理

- **Zustand** - 輕量級狀態管理

### UI 元件

- **Swiper** - 輪播元件
- **Material-UI** - UI 元件庫

### 動畫套件

- **GSAP** - 動畫元件庫

### 開發工具

- **Sharp** - 圖片壓縮處理
- **Vite Plugin Zip Pack** - 打包壓縮

---

## ✨ 核心功能

- ✅ **響應式設計** - 支援 PC/Mobile 多裝置瀏覽
- ✅ **自動圖片壓縮** - 整合 Sharp 自動壓縮並產出 WebP 格式
- ✅ **多後台整合** - 支援多組後台 API 串接
- ✅ **動態區塊渲染** - 根據後台資料自動顯示/隱藏區塊
- ✅ **一鍵打包部署** - 自動產生可上傳的 .zip 壓縮包
- ✅ **錨點導航** - 自動生成側邊欄錨點選單

---

## 📝 Demo 說明

此 Demo 版本為作品集展示用途,已移除以下功能:

- ~~會員登入 API~~
- ~~折價券 API~~
- ~~商品後台 API~~
- ~~限時瘋殺 API~~
- ~~Build 後產生 .zip 上傳包~~

---

## 🚀 快速開始

### 環境需求

- **Node.js**: v18.18 或更高版本
- **npm** 或 **yarn**

### 建議使用的 VSCode 擴充套件

| 擴充套件                                                                                                                      | 用途                       |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) | React 程式碼片段           |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                          | 程式碼品質檢查             |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)                    | Tailwind CSS 自動補全      |
| [Tailwind Twin IntelliSense](https://marketplace.visualstudio.com/items?itemName=lightyen.tailwindcss-intellisense-twin)      | Twin.macro 支援            |
| [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)    | Styled Components 語法高亮 |
| [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)                   | 路徑自動補全               |
| [MUI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.mui-snippets)                                  | Material-UI 程式碼片段     |

### 安裝相關套件

```bash
npm install
```

### 啟動開發環境

啟動專案並自動執行圖片壓縮:

```bash
npm run dev
```

### 建構生產版本

打包專案並建立 .zip 壓縮包:

```bash
npm run build
```

---

## 💻 開發指南

### 環境變數設定

在 `.env` 檔案中配置活動頁基本資訊:

```shell
# 活動設定
VITE_ACTIVE_ID=後台 ID
VITE_ISONLINE=true

# 瘋殺 API (本地測試用)
VITE_ONSALE_API=

# Meta 標籤
VITE_META_TITLE=
VITE_META_KEYWORDS=
VITE_META_DESCRIPTION=
VITE_META_OGIMAGE=
```

### 🖼️ 圖片壓縮功能

使用 [Sharp](https://www.npmjs.com/package/sharp) 自動壓縮圖片並產出 WebP 格式:

1. **放置素材**: 將圖片素材放在 `input-source/` 資料夾內 (可用子資料夾分類)
2. **執行壓縮**: 執行 `npm run dev` 時自動壓縮
3. **輸出位置**: 壓縮後的圖檔會輸出至 `assets/layout/`

**自動命名範例並 import export**:

```javascript
// assets/layout/index.js 自動產生
import onsaleBgPc from './onsale/bg-pc.png';
import onsaleBgPcWebp from './onsale/bg-pcWebp.webp';
export { onsaleBgPc, onsaleBgPcWebp };
```

**注意事項**:

- 不需壓縮的圖片請放在 `input-source/nominify/` 中
- 壓縮品質參數可在 `convert.js` 中調整
- 圖檔過小可能變 Base64

### 📦 打包功能

使用 [vite-plugin-zip-pack](https://www.npmjs.com/package/vite-plugin-zip-pack) 自動產生後台可上傳壓縮包:

```bash
npm run build
```

執行後會在 `./build-zip/` 資料夾產出可直接上傳後台的 `.zip` 檔案 (請注意檔案大小)。

---

## 📂 專案結構

```
ice-festival/
├── public/                      # 靜態資源
├── input-source/                # 圖片素材放這
│   ├── nominify/               # 不需壓縮的圖片
│   └── ...
├── src/
│   ├── assets/
│   │   ├── base/              # 活動頁基礎圖片素材
│   │   └── layout/            # 壓縮後的圖片輸出
│   ├── components/
│   │   ├── basic/             # 基礎共用元件
│   │   └── ToggleSection.jsx  # 條件渲染元件
│   ├── constants/             # 模擬資料
│   ├── hooks/                 # 自定義 Hooks
│   │   ├── useIsLogin.js
│   │   ├── useWindowScroll.js
│   │   └── useWindowWidth.js
│   ├── stores/                # Zustand 狀態管理
│   │   ├── useLaLaStore.js
│   │   ├── useCouponStore.js
│   │   └── useOnsaleStore.js
│   ├── utils/                 # 自定義 工具函式
│   │   ├── filterData.js
│   │   ├── getDataById.js
│   │   ├── formatPriceText.js
│   │   └── scrollToElement.js
│   ├── styles/                # 全域樣式
│   ├── App.jsx                # 根元件
│   ├── main.jsx               # 入口檔案
│   └── index.css              # 全域 CSS
├── build-zip/                  # 打包輸出目錄
├── convert.js                  # Sharp 圖片壓縮
├── vite.config.js             # Vite 配置
├── tailwind.config.js         # Tailwind 配置
├── postcss.config.js          # PostCSS 配置
├── .env                       # 環境變數 (開發)
├── .env.production            # 環境變數 (生產)
└── package.json               # 專案配置
```

---

## 🎨 核心元件使用

### 1. ToggleSection - 條件渲染元件

根據後台資料自動顯示/隱藏區塊 : 請與後台維護同學確定區塊 id

```jsx
<ToggleSection data-id={[31, 42]}>
  {/* 當 id 31 或 42 有資料時顯示 */}
  其他內容
</ToggleSection>
```

**`.env` 中 `VITE_ISONLINE` 的影響**:

- `true`: id 無資料時區塊不渲染 (生產環境)
- `false`: id 無資料時區塊依然渲染 (開發環境)

### 2. RightNav - 錨點導航

自動抓取含有 `data-title` 的 DOM 並渲染至右側選單:

> 該區塊 id 為可投廣的錨點連結，ex : url#pd1

```html
<div id="pd1" data-title="3C特賣"></div>
<div id="pd2" data-title="美食專區"></div>
```

### 3. 快速建立元件

使用 VSCode Snippet 快速建立 Function Component:

**輸入 `rfce` + Tab**:

```jsx
function TestComponent() {
  return <div>TestComponent</div>;
}

export default TestComponent;
```

**輸入 `//` + Tab** 建立元件註解模板:

```javascript
// 元件說明:

// packages

// stores

// custom hooks & utils

// components

// images

// style

// constants
```

---

## 🗂️ 狀態管理

專案使用 [Zustand](https://zustand-demo.pmnd.rs/) 進行狀態管理。

### 初始化資料獲取

在 `App.jsx` 中初始化後台資料:

```jsx
import { useLaLaStore1 } from './stores/useLaLaStore';
import { useEffect } from 'react';

function App() {
  const getLaLaData1 = useLaLaStore1((state) => state.getData);

  useEffect(() => {
    getLaLaData1();
  }, []);

  return <div>{/* ... */}</div>;
}
```

### 在元件中使用資料

從 Store 獲取資料並依 ID 篩選:

```jsx
import { useState, useEffect } from 'react';
import { useLaLaStore1 } from '../stores/useLaLaStore';
import getDataById from '../utils/getDataById';

function Products() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [pdData, setPdData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 32);
    if (idData.length !== 0) {
      setPdData(idData);
    }
  }, [newPdData]);
  return <></>;
}
```

### 多後台整合

當活動頁需要整合多個後台 API 時:

**Step 1**: 在 `useLaLaStore.js` 中建立第二組 Store

```jsx
// 第一個 store (預設)
export const useLaLaStore1 = createLaLaStore(import.meta.env.VITE_ACTIVE_ID);

// 第二個 store (指定後台 ID)
export const useLaLaStore2 = createLaLaStore('C123456789');
```

**Step 2**: 在 `App.jsx` 中初始化多個 Store

```jsx
import { useLaLaStore1, useLaLaStore2 } from './stores/useLaLaStore';

function App() {
  const getLaLaData1 = useLaLaStore1((state) => state.getData);
  const getLaLaData2 = useLaLaStore2((state) => state.getData);

  useEffect(() => {
    getLaLaData1();
    getLaLaData2();
  }, []);
}
```

---

## 📝 開發 Snippets

內建的程式碼片段快速輸入:

### `iptw` + Tab

匯入 Twin.macro:

```javascript
import tw, { styled } from 'twin.macro';
```

### `stw` + Tab

建立 Styled Component 樣板:

```javascript
export const ComponentName = styled.div`
  ${tw``}
  ${tw`sm:()`}
  ${tw`lg:()`}
`;
```

### `//` + Tab

建立元件註解模板:

```javascript
// 元件說明:

// packages

// stores

// custom hooks & utils

// components

// images

// style

// constants
```

### `pcm` + Tab

建立響應式圖片標籤:

```html
<picture>
  <source srcset="{imageDesktop}" media="(min-width: 767px)" />
  <img src="{imageMobile}" alt="" />
</picture>
```

---

## 🛠️ 工具函式

專案內建的工具函式:

### `getDataById(data, id)`

依 ID 篩選資料:

```javascript
import getDataById from '../utils/getDataById';

const filteredData = getDataById(newPdData, 32);
```

### `formatPriceText(price)`

格式化價格顯示(後台價格可能人為輸入中文 or 特殊符號):

```javascript
import formatPriceText from '../utils/formatPriceText';

const formattedPrice1 = formatPriceText('2入$99');
// 輸出: '2<span class="chi">入</span><span class="dollar">$</span>99'

const formattedPrice2 = formatPriceText('$99');
// 輸出: '<span class="dollar">$</span>99'

const formattedPrice3 = formatPriceText('99');
// 輸出: '<span class="dollar">$</span>99'
```

### `scrollToElement(elementId)`

滿順捲動至指定元素:

```javascript
import scrollToElement from '../utils/scrollToElement';

scrollToElement('section1');
```

---

## 📌 注意事項

- 此專案為 Demo 展示版本,部分 API 功能已移除
- 建議使用 Node.js v18.18 以上版本

---

## 👤 作者

**Butters**

- GitHub: [@Butters0418](https://github.com/Butters0418)

---

## 📝 License

MIT License

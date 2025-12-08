# 活動頁 template : React + Vite + Tailwind

Node.js 版本 v18.18 +

## Demo 版本已刪除

1. ~~會員登入 api~~
2. ~~折價券 api~~
3. ~~商品後台 api~~
4. ~~限時瘋殺 api~~

### 建議 VSCode 套件

1. [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
3. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
4. [Tailwind Twin IntelliSense](https://marketplace.visualstudio.com/items?itemName=lightyen.tailwindcss-intellisense-twin)
5. [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
6. [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
7. [MUI Snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.mui-snippets)

npm install

```
npm i
```

啟動專案 & 自動壓圖

```
npm run dev
```

打包專案 & 建立 .zip

```
npm run build
```

### 壓圖功能

使用 [sharp](https://www.npmjs.com/package/sharp) 將素材圖片放在 input-source/ 資料夾內 ( 可再用資料夾分類 )，執行 <code>npm run dev</code> 時，會將圖片壓縮並同時產出一份 WebP 格式，壓縮完的圖檔最終位置 : assets/layout/

- 在 assets/layout/index.js 中，會將檔名整裡並 export，不需要自行作變數命名，檔名會依照分類資料夾 + 檔名, 例如

  ```javascript
  import onsaleBgPc from './onsale/bg-pc.png';
  import onsaleBgPcWebp from './onsale/bg-pcWebp.webp';
  // ...
  export { onsaleBgPc, onsaleBgPcWebp };
  ```

- 不需要壓縮的圖片，置放在 input-source/nominify/ 中
- 壓圖品質參數可調整 convert.js

### 打包功能

使用 [vite-plugin-zip-pack](https://www.npmjs.com/package/vite-plugin-zip-pack) 在執行 <code>npm run build</code> 後，在 ./build-zip/ 資料夾中產出可直接上傳拉拉熊後台的 .zip 檔

### 資料夾結構

```
├─ public ( 不會用到，除非有圖 build 時被轉 base64 壞掉才放這 )
├─ input-source ( 圖檔素材進入點 )
│  └─ nominify ( 不需壓縮的圖檔 )
├─ src
│  ├─ assets
│  │  ├─ base ( 基本圖片素材 )
│  │  └─ layout ( 由 input-source 輸出後的圖檔 )
│  ├─ components
│  │  ├─ ToggleSection.jsx ( 拉拉熊 id 區塊判斷渲染 )
│  │  └─ basic ( 活動頁基本元件 )
│  ├─ constants ( 佔位/假資料 )
│  │  └─ index.js
│  ├─ hooks
│  │  ├─ useIsLogin.js
│  │  ├─ useWindowScroll.js
│  │  └─ useWindowWidth.js
│  ├─ stores ( 資料集 )
│  │  ├─ useLaLaStore.js
│  │  ├─ useCouponStore.js
│  │  └─ useOnsaleStore.js
│  ├─ utils
│  │  ├─ filterData.js
│  │  ├─ getDataById.js
│  │  └─ scrollToElement.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ App.jsx
├─ index.html
├─ tailwind.config.js
├─ vite.config.js
├─ package-lock.json
├─ package.json
├─ convert.js ( sharp 壓圖 )
├─ .env
├─ .env.production
└─ .gitignore

```

### 起手設定

.env 設定活動頁基本資訊

```shell
# 活動設定
VITE_ACTIVE_ID=後台 ID
VITE_ISONLINE=true

# 瘋殺 api ( 本地測試 )
VITE_ONSALE_API=

# meta 相關
VITE_META_TITLE=
VITE_META_KEYWORDS=
VITE_META_DESCRIPTION=
VITE_META_OGIMAGE=
```

### 元件基本用法

1. ToggleSection : data-id 陣列中的拉拉熊 id 都無資料時，區塊關閉不渲染

   .env 中 VITE_ISONLINE 的影響

   - true : id 無資料區塊不渲染
   - false : id 無資料區塊依然渲染

```html
<ToggleSection data-id="{[31, 42]}> 其他內容 }"</ToggleSection>
```

2. RightNav : 自動抓取含有 data-title 的 dom 並渲染至右選單當錨點

```html
<div id="pd1" data-title="3C特賣"></div>
```

3. 元件建立 : 於 .jsx 檔案中使用 <code>rfce + tab</code> 快速建立 function component

```jsx
// 此行可刪，React 18 後不需要
// import React from 'react'

function TestComponent() {
  return <div>TestComponent</div>;
}

export default TestComponent;
```

4. 使用 snippet <code>// + tab</code> 建立元件必要註解

### 拉拉熊與其他資料

使用 [Zustand](https://zustand-demo.pmnd.rs/) 管理資料

1. 在 App.jsx 中首次呼叫拉拉熊 getData

```jsx
// stores
import { useLaLaStore1 } from './stores/useLaLaStore';

function App() {
  // 取出拉拉熊 getData 的方法
  const getLaLaData1 = useLaLaStore1((state) => state.getData);

  useEffect(() => {
    getLaLaData1();
  }, []);
}
```

2. 有需要使用拉拉熊 newPdData 的元件取法

```jsx
// stores
import { useLaLaStore1 } from '../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../utils/getDataById';

function Products() {
  const { newPdData } = useLaLaStore1();
  const [pdData, setPdData] = useState();

  useEffect(() => {
    const idData1 = getDataById(newPdData, 32);
    idData1.length !== 0 && setPdData(idData1);
  }, [newPdData]);
}
```

### !! 活動頁引入兩個拉拉熊後台

1. useLaLaStore.js 中建立第二組 useLaLaStore

```jsx
// 第一個 store (預設)
export const useLaLaStore1 = createLaLaStore(import.meta.env.VITE_ACTIVE_ID);
// 建立第二組 store 實例，參數填入後台 id
export const useLaLaStore2 = createLaLaStore('C123456789');
```

2. App.js 中引入兩個 store

```jsx
// stores
import { useLaLaStore1, useLaLaStore2 } from './stores/useLaLaStore';

function App() {
  // 取出拉拉熊 getData 的方法
  const getLaLaData1 = useLaLaStore1((state) => state.getData);
  const getLaLaData2 = useLaLaStore2((state) => state.getData);

  // 執行
  useEffect(() => {
    getLaLaData1();
    getLaLaData2();
  }, []);
}
```

### Snippets

iptw + tab

```js
import tw, { styled } from 'twin.macro';
```

stw + tab

```js
export const a = styled.div`
  ${tw``}
  ${tw`sm:()`}
  ${tw`lg:()`}
`;
```

// + tab

```js
// 元件說明:

// packages

// stores

// custom hooks & utils

// components

// images

// style

// constants
```

pcm + tab

```html
<picture>
  <source srcset="{}" media="(min-width: 767px)" />
  <img src="{}" alt="" />
</picture>
```

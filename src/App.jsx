// packages
import { useEffect } from 'react';

// stores
import { useLaLaStore1 } from './stores/useLaLaStore';

// custom hooks & utils
import scrollToElement from './utils/scrollToElement';

// components
import Header from './components/basic/Header.jsx';
import Footer from './components/basic/Footer.jsx';
import LeftNav from './components/basic/LeftNav.jsx';
import RightNav from './components/basic/RightNav.jsx';
import Onsale from './components/Onsale/Onsale.jsx';

function App() {
  const hasLeftNav = true; // 是否需要左選單?
  const getLalaData1 = useLaLaStore1((state) => state.getData); // 執行呼叫拉拉熊 1 資料方法

  // 取得拉拉熊 1 資料
  useEffect(() => {
    getLalaData1();
  }, []);

  // 判斷是否有網址 #id 錨點
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 30;

    const scrollHandler = () => {
      const anchor = window.location.hash.split('#')[1];
      if (!anchor) {
        return;
      } else {
        scrollToElement(anchor, 'instant');
      }

      if (retryCount < maxRetries) {
        retryCount++;
        requestAnimationFrame(scrollHandler);
      } else {
        console.warn('錨點 id 有誤');
      }
    };

    scrollHandler();
  }, []);
  return (
    <div>
      <Header />
      {hasLeftNav && <LeftNav />}
      <RightNav />
      {/* ============ Main ============ */}

      <div id="pd1" data-title="aaa" className="h-[500px]">
        aaa
      </div>
      <div id="pd2" data-title="bbb" className="h-[500px]">
        bbb
      </div>
      <div id="pd3" data-title="ccc" className="h-[500px]">
        ccc
      </div>
      <div id="pd4" data-title="ddd" className="h-[500px]">
        ddd
      </div>
      <Onsale />
      {/* ============ End Main ============ */}
      <Footer hasLeftNav={hasLeftNav} />
    </div>
  );
}
export default App;

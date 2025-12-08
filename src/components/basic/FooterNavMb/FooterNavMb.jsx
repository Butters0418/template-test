// 元件說明:手機底部選單
import { useState, useRef } from 'react';

// packages
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

// images
import { footerMenu, footerGoTop } from '../../../assets/base';

// style
import {
  NavContainer,
  NavBtn,
  NavIcon,
  Board,
  BtnClose,
  ListContainer,
  ListUl,
} from './style';

// register useGSAP
gsap.registerPlugin(useGSAP);

function FooterNavMb({ newNavData, moreActive }) {
  const [isBoardOpen, setIsBoardOpen] = useState(false); // 面版是否開啟
  const container = useRef(null); // gsap scope
  const tl = useRef(null); // 面版收合 timeline

  // 面版收合
  function toggleTimeline() {
    setIsBoardOpen((prev) => !prev);
    tl.current.reversed(!tl.current.reversed());
  }

  // 面版動畫
  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to('.list__container', { duration: 0.2, y: 0 }, 0.12)
        .to('.list__ul', { duration: 0.3, y: 0, opacity: 1 }, 0.2)
        .progress(0)
        .reverse();
    },
    { scope: container },
  );

  return (
    <NavContainer isOpen={isBoardOpen} ref={container}>
      {/* 按鈕區 */}
      <div className="footer__container">
        <div className="flex h-full justify-evenly">
          {/* 額外活動 */}
          {moreActive.length !== 0 &&
            moreActive.map((item, index) => (
              <NavBtn as="a" href={item.url} key={index}>
                <NavIcon>
                  <img
                    src={item.imgSrc}
                    alt={item.productName}
                    className="rounded-full"
                  />
                  <span>{item.productName}</span>
                </NavIcon>
              </NavBtn>
            ))}

          {/* 分會場按鈕 */}
          <NavBtn type="button" onClick={toggleTimeline}>
            <NavIcon>
              <img src={footerMenu} alt="分會場" />
              <span>分會場</span>
            </NavIcon>
          </NavBtn>

          {/* 回上方按鈕 */}
          <NavBtn
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <NavIcon>
              <img src={footerGoTop} alt="back to top" />
              <span>TOP</span>
            </NavIcon>
          </NavBtn>
        </div>
      </div>

      {/* 收合面版 分會場 */}
      <Board>
        <ListContainer className="list__container">
          {/* 關閉按鈕 */}
          <BtnClose onClick={toggleTimeline}>
            <IoIosCloseCircleOutline className="h-8 w-8" />
            <span>CLOSE</span>
          </BtnClose>
          {/* 分會場列表 */}
          <ListUl className="list__ul">
            {newNavData.otherLink.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ListUl>
        </ListContainer>
      </Board>
    </NavContainer>
  );
}

export default FooterNavMb;

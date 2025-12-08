// 元件說明: PC 左選單
import { useEffect, useState, memo } from 'react';

// packages
import { IoIosArrowForward } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// custom hooks & utils
import useWindowWidth from '../../../hooks/useWindowWidth';
import useWindowScroll from '../../../hooks/useWindowScroll';

// images
import { placeImg } from '../../../assets/base';
import { nominifyLeftnavBg } from '../../../assets/layout';

// style
import {
  NavContainer,
  Button,
  ListContainer,
  Sticker,
  ListWrap,
  TopList,
  MainList,
  SubList,
} from './style';

const leftNavBg = 'leftnav-bg.svg';

function LeftNavPc({ newNavData, moreActive }) {
  const [isOpen, setIsOpen] = useState(true); // 左選開關
  const [isScrollTop, setIsScrollTop] = useState(false); // 是否上滑
  const ww = useWindowWidth();
  const scroll = useWindowScroll();

  // resize handler
  useEffect(() => {
    if (ww > 1480) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [ww]);

  // scroll handler
  useEffect(() => {
    if (scroll > 40) {
      setIsScrollTop(true);
    } else {
      setIsScrollTop(false);
    }
  }, [scroll]);

  return (
    <NavContainer isOpen={isOpen} isScrollTop={isScrollTop}>
      <Button
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        aria-label="left-nav toggle button"
      >
        <IoIosArrowForward
          className={`h-7 w-7 text-white ${isOpen && 'rotate-180'}`}
        />
      </Button>
      <ListContainer isOpen={isOpen}>
        {/* 貼紙 */}
        <Sticker href={newNavData.stickerImg.url} target="_blank">
          <img
            src={
              newNavData.stickerImg.imgSrc
                ? newNavData.stickerImg.imgSrc
                : placeImg
            }
            className="h-[120px] w-[120px]"
            alt="主會場"
          />
        </Sticker>

        {/* 選單 */}
        <ListWrap
          style={{
            backgroundImage: `url(./${leftNavBg})`,
          }}
        >
          {/* 額外活動 */}
          <TopList>
            {moreActive.length === 0 ? (
              <Skeleton
                count={2}
                className="h-[32px] w-full"
                containerClassName="w-full"
                baseColor="#ccc"
                highlightColor="#fff"
              />
            ) : (
              moreActive.map((item, index) => (
                <a key={index} href={item.url} target="_blank">
                  {item.productName}
                </a>
              ))
            )}
          </TopList>
          {/* 分會場 */}
          <MainList>
            {newNavData.otherLink.length === 0 ? (
              <>
                {Array.from({ length: 14 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton
                      className="h-[24px] w-full"
                      baseColor="#ecc7ad"
                      highlightColor="#ffe1cc"
                    />
                  </li>
                ))}
              </>
            ) : (
              newNavData.otherLink
                .filter((item, index, arr) => {
                  return index <= arr.length - 4;
                })
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url} target="_blank">
                        {item.text}
                      </a>
                    </li>
                  );
                })
            )}
          </MainList>

          {/* 品牌區 */}
          <SubList>
            {newNavData.otherLink.length === 0 ? (
              <>
                {Array.from({ length: 3 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton
                      className="h-[24px] w-full"
                      baseColor="#ecc7ad"
                      highlightColor="#ffe1cc"
                    />
                  </li>
                ))}
              </>
            ) : (
              newNavData.otherLink
                .filter((item, index, arr) => {
                  return index > arr.length - 4;
                })
                .map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>{item.text}</a>
                    </li>
                  );
                })
            )}
          </SubList>
        </ListWrap>
      </ListContainer>
    </NavContainer>
  );
}

export default memo(LeftNavPc);

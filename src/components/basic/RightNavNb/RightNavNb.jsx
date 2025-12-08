// 元件說明: 桌機右選(短版)
import { useEffect, useState, memo } from 'react';

// packages
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// custom hooks & utils
import useWindowWidth from '../../../hooks/useWindowWidth';
import useWindowScroll from '../../../hooks/useWindowScroll';
import scrollToElement from '../../../utils/scrollToElement';

// style
import {
  NavContainer,
  Button,
  ListContainer,
  ListUl,
  HashLink,
  BackTopBtn,
} from './style';

// custom hooks

function RightNavPc({ hashContainer, currentContainer, sticky }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrollTop, setIsScrollTop] = useState(false);
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
        aria-label="toggle right nav"
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <IoIosArrowForward
          className={`h-7 w-7 text-white ${!isOpen && 'rotate-180'}`}
        />
      </Button>
      <ListContainer isOpen={isOpen}>
        <ListUl>
          {hashContainer.map((item) => {
            const isActive = item.id === currentContainer;
            return (
              <HashLink key={item.id} isActive={isActive}>
                <button
                  onClick={() => {
                    scrollToElement(item.id);
                  }}
                >
                  {item.dataset.title}
                </button>
              </HashLink>
            );
          })}
          <li>
            {sticky.length === 0 ? (
              <Skeleton
                className="h-24 w-24"
                baseColor="#ecc7ad"
                highlightColor="#ffe1cc"
              />
            ) : (
              <a target="_blank" href={sticky[0].url}>
                <img
                  alt="活動總覽"
                  src={sticky[0].imgSrc}
                  className="h-24 w-24"
                />
              </a>
            )}
          </li>
        </ListUl>
        <BackTopBtn
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>
            <IoIosArrowUp className="h-5 w-5" />
            GO TOP
          </span>
        </BackTopBtn>
      </ListContainer>
    </NavContainer>
  );
}

export default memo(RightNavPc);

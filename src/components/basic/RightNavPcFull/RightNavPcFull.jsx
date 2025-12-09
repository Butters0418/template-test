// 元件說明:桌機右選(滿版)
// packages
import { memo } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// custom hooks & utils
import scrollToElement from '../../../utils/scrollToElement';

// images
import { rightNavAnchor } from '../../../assets/base';

// style
import {
  SNavContainer,
  SFlexContainer,
  SBackTopBtn,
  SListUl,
  SHashLink,
} from './style';

function RightNavFullPc({ hashContainer, currentContainer, sticky }) {
  return (
    <SNavContainer>
      <SFlexContainer>
        <SListUl>
          {hashContainer.length == 0 ? (
            <Skeleton
              count={4}
              className="h-[20px]"
              containerClassName="w-full"
              baseColor="#ecc7ad"
              highlightColor="#ffe1cc"
            />
          ) : (
            hashContainer.map((item) => {
              const isActive = item.id === currentContainer;
              return (
                <SHashLink key={item.id} isActive={isActive}>
                  <button
                    onClick={() => {
                      scrollToElement(item.id);
                    }}
                  >
                    <p>
                      {isActive && <img src={rightNavAnchor} alt="anchor" />}
                      {item.dataset.title}
                    </p>
                  </button>
                </SHashLink>
              );
            })
          )}

          <li>
            {sticky.length === 0 ? (
              <Skeleton
                className="h-24 w-24"
                baseColor="#ecc7ad"
                highlightColor="#ffe1cc"
              />
            ) : (
              <a href={sticky[0].url}>
                <img
                  alt="活動總覽"
                  src={sticky[0].imgSrc}
                  className="h-24 w-24"
                />
              </a>
            )}
          </li>
        </SListUl>

        {/* back to top */}
        <SBackTopBtn
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>
            <IoIosArrowUp className="h-5 w-5" />
            GO TOP
          </span>
        </SBackTopBtn>
      </SFlexContainer>
    </SNavContainer>
  );
}

export default memo(RightNavFullPc);

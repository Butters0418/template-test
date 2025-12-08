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
  NavContainer,
  FlexContainer,
  BackTopBtn,
  ListUl,
  HashLink,
} from './style';

function RightNavFullPc({ hashContainer, currentContainer, sticky }) {
  return (
    <NavContainer>
      <FlexContainer>
        <ListUl>
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
                <HashLink key={item.id} isActive={isActive}>
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
                </HashLink>
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

        {/* back to top */}
        <BackTopBtn
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>
            <IoIosArrowUp className="h-5 w-5" />
            GO TOP
          </span>
        </BackTopBtn>
      </FlexContainer>
    </NavContainer>
  );
}

export default memo(RightNavFullPc);

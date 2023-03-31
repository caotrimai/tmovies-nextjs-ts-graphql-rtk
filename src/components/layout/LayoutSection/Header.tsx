import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { LoginOutlined, SearchOutlined } from '@ant-design/icons';
import HeaderLogo from '@/assets/images/logo_header.png';
import { NavLink } from '@/components/common';
import HotList from '@/features/hot-list/components/HotList';
import { useScrollPosition } from '@/hooks/index';
import clsx from 'clsx';

const LogoStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  h1 {
    position: absolute;
    z-index: -1;
    color: transparent;
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <Image src={HeaderLogo} alt='PhimHD header logo' width={130} height={36} priority />
      <h1>
        Xem phim | Phim Bộ | Phim lẻ | Phim mới | Xem phim vietsub | Xem Phim Online | Phim HD | Phim hay
      </h1>
    </LogoStyled>
  );
};

const HeaderNavStyled = styled.nav`
  ul {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(8.5rem, auto));
    column-gap: 1rem;
    font-size: 2rem;

    .nav-item {
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        color: var(--COLOR_GRAY_SECONDARY);
        border-bottom: 0.2rem solid var(--COLOR_GRAY_SECONDARY);
      }
    }

    & > .nav-item:hover {
      color: var(--COLOR_GRAY_SECONDARY);
    }
  }
`;

const HeaderNav = () => {
  const categories = [
    { href: '/', value: 'new', label: 'Phim mới' },
    { href: '/single', value: 'single', label: 'Phim lẻ' },
    { href: '/series', value: 'series', label: 'Phim bộ' },
    { href: '/show', value: 'show', label: 'Show' },
    { href: '/cartoon', value: 'cartoon', label: 'Hoạt hình' },
  ];
  return (
    <HeaderNavStyled>
      <ul>
        {categories.map((category) => (
          <NavLink
            key={category.value}
            href={`${category.href}`}
            className='nav-item'
            exact
          >
            <>
              {category.label}
            </>
          </NavLink>
        ))}
      </ul>
    </HeaderNavStyled>
  );
};

const HeaderStyled = styled.header`
  position: relative;
  width: 100%;
  height: var(--HEADER_HEIGHT);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--COLOR_WHITE);
  overflow: hidden;

  .header-section {
    border-bottom: 1px solid rgba(255, 255, 255, .1);
  }

  .nav-fixed {
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, .8);
    transition: var(--transition-default);
  }
`;

const HeaderNavigationStyled = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;

  .header-navigation-container {
    width: var(--CONTENT_WIDTH_MAX);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 1rem;
  }

  @media (max-width: var(--CONTENT_WIDTH_MAX)) {
    .header-navigation-container {
      width: 100%;
    }
  }
`;

const HeaderNavigation = ({ className }: { className?: string }) => {
  return (
    <HeaderNavigationStyled className={className}>
      <div className='header-navigation-container'>
        <Logo />
        <HeaderNav />
        <AccountItem />
      </div>
    </HeaderNavigationStyled>
  );
};

const AccountItemStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: default;

  .icon {
    position: relative;
    cursor: pointer;
  }

  .icon:hover svg {
    color: var(--COLOR_GRAY_SECONDARY);
  }
`;

const AccountItem = () => {
  return (
    <AccountItemStyled>
      <LoginOutlined className='icon' style={{ fontSize: '2.8rem' }} />
    </AccountItemStyled>
  );
};

const HeaderSearchStyled = styled.div`
  z-index: 1;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  
  .header-search-container {
    width: var(--CONTENT_WIDTH_MAX);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: var(--CONTENT_WIDTH_MAX)) {
    .header-search-container {
      width: 100%;
    }
  }

  .search-form {
    position: relative;
    height: 5rem;
    width: 50rem;
    display: flex;
    justify-content: space-between;

    .icon {
      z-index: 1;
      height: 100%;
      width: 4.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }


    button {
      z-index: 1;
      padding: 0 .5rem;
      background-color: #fb7299;
      color: var(--COLOR_WHITE);
      border: unset;
      opacity: 0;
      transition: .5s 0s all ease-out;
    }

    .form-control {
      display: block;
      position: absolute;
      color: var(--COLOR_WHITE);
      top: 0;
      left: 0;
      z-index: 0;
      background: 0 0;
      width: 100%;
      height: 100%;
      padding: .5rem 8.5rem 0.5rem 4.2rem;
      line-height: 1.25rem;
      border: 0;
      transition: .5s 0s all ease-out;
      font-size: 1rem;
      box-shadow: unset;
      outline: unset;

    }

    &:hover {
      .form-control {
        background: rgba(255, 255, 255, .1);
      }

      button {
        opacity: 1;
      }
    }
  }
`;

const HeaderSearch = ({ className }: { className?: string }) => {
  return (
    <HeaderSearchStyled className={className}>
      <div className='header-search-container'>
        <form className='search-form' onSubmit={(data) => console.log(data)}>
          <SearchOutlined className='icon' style={{ fontSize: '1.4rem' }} />
          <input type='text' placeholder='Bạn muốn tìm phim gì?' className='form-control' />
          <button type='submit'>Tìm kiếm</button>
        </form>
      </div>
    </HeaderSearchStyled>
  );
};

const HotListStyled = styled.div`
  position: relative;
  width: var(--CONTENT_WIDTH_MAX);
  display: flex;
  justify-content: center;
`;

const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;

  .background-image {
    display: block;
    position: absolute;
    left: -5%;
    top: -5%;
    z-index: 0;
    width: 110%;
    height: 110%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 50%;
    filter: blur(60px);
    transition: .5s 0s all ease-out;
  }
`;

const Header = () => {
  const solidBackground = 'linear-gradient(to bottom right, #4e4e4e, #fff)';
  const [headerBackground, setHeaderBackground] = useState<string>(solidBackground);
  const isDefaultBackground = headerBackground === solidBackground;
  const scrollPosition = useScrollPosition();
  const FIXED_NAV_HEIGHT = 89;
  const isNavFixed = scrollPosition >= FIXED_NAV_HEIGHT;
  return (
    <HeaderStyled>
      <HeaderNavigation className='header-section' />
      <HeaderBackground>
        <span
          style={{ backgroundImage: isDefaultBackground ? headerBackground : `url("${headerBackground}")` }}
          className='background-image'
        />
      </HeaderBackground>
      <HeaderSearch className={clsx('header-section', { 'nav-fixed': isNavFixed })} />
      <HotListStyled>
        <HotList onChangeSlide={(movie) => setHeaderBackground(movie.thumbnail)} />
      </HotListStyled>
    </HeaderStyled>
  );
};

export default Header;
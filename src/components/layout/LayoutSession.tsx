import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Space } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import HeaderLogo from '@/assets/images/logo_header.png';
import { NavLink } from '@/components/common';

const LogoStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <LogoStyled>
      <Image src={HeaderLogo} alt='PhimHD header logo' width={130} height={36} />
    </LogoStyled>
  );
};

const HeaderNavStyled = styled.nav`
  ul {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, auto);
    column-gap: 1rem;
    font-size: 2rem;

    .nav-item {
      cursor: pointer;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &.active {
        color: var(--COLOR_GRAY_2);
        border-bottom: 0.2rem solid var(--COLOR_GRAY_2);
      }
    }

    & > .nav-item:hover {
      color: var(--COLOR_GRAY_2);
    }
  }
`;

const HeaderNav = () => {
  const categories = [
    { href: '/', value: 'new', label: 'new' },
    { href: '/single', value: 'single', label: 'single' },
    { href: '/series', value: 'series', label: 'series' },
    { href: '/show', value: 'show', label: 'show' },
    { href: '/cartoon', value: 'cartoon', label: 'cartoon' },
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
              {category.value}
            </>
          </NavLink>
        ))}
      </ul>
    </HeaderNavStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  height: var(--HEADER_HEIGHT);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--COLOR_WHITE);

  .header-body {
    position: fixed;
    width: var(--CONTENT_WIDTH_MAX);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    column-gap: 1rem;
    @media (max-width: var(--CONTENT_WIDTH_MAX)) {
      width: 100%;
    }
  }

  img {
    //opacity: 0;
  }
`;

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
    color: var(--COLOR_GRAY_2);
  }
`;

const AccountItem = () => {
  return (
    <AccountItemStyled>
      <LoginOutlined className='icon' style={{ fontSize: '2.8rem' }} />
    </AccountItemStyled>
  );
};

export const Header = () => {
  return (
    <HeaderStyled>
      <div className='header-body'>
        <Logo />
        <HeaderNav />
        <AccountItem />
      </div>
    </HeaderStyled>
  );
};

const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - var(--HEADER_HEIGHT) - var(--FOOTER_HEIGHT));
  display: flex;
  justify-content: center;

  .main-body {
    width: var(--CONTENT_WIDTH_MAX);

    @media (max-width: var(--CONTENT_WIDTH_MAX)) {
      width: 100%;
    }
  }
`;

export const Main = ({ children }: PropsWithChildren) => {
  return (
    <MainStyled>
      <div className='main-body'>
        {children}
      </div>
    </MainStyled>
  );
};

const FooterStyled = styled.footer`
  width: 100%;
  height: var(--FOOTER_HEIGHT);
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--CONTENT_WIDTH_MAX);
    @media (max-width: var(--CONTENT_WIDTH_MAX)) {
      width: 100%;
    }
    .link-list {
      margin-top: 2rem;
      color: var(--COLOR_WHITE);
      & > a:hover {
        color: var(--COLOR_GRAY_2);
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className='footer-body'>
        <div>@2023 phimhd.cc</div>
        <div className='link-list'>
          <a href='/rss/index.xml' target='_blank'>RSS</a>
          <span className='split-line hidden_xs'></span>
          <a href='/rss/google.xml' target='_blank'>google</a>
          <span className='split-line hidden_xs'></span>
          <a href='/rss/bing.xml' target='_blank'>bing</a>
        </div>
      </div>
    </FooterStyled>
  );
};
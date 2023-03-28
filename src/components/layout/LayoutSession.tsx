import styled from 'styled-components';
import Image from 'next/image';
import { LoginOutlined } from '@ant-design/icons';
import HeaderLogo from '@/assets/images/logo_header.png';
// import { Layout, Space } from 'antd';
//
// const { Header: AntdHeader, Footer, Sider, Content } = Layout;


const HeaderNavStyled = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(5, auto);
    column-gap: 1rem;
    font-size: 2rem;
  }
`;

const HeaderNav = () => {
  const categories = [
    {value: 'new', label: 'new'},
    {value: 'single', label: 'single'},
    {value: 'series', label: 'series'},
    {value: 'show', label: 'show'},
    {value: 'cartoon', label: 'cartoon'},
  ]
  return (
    <HeaderNavStyled>
      <ul>
        {categories.map((category) => (
          <li key={category.value}>{category.value}</li>
        ))}
      </ul>
    </HeaderNavStyled>
  );
}

const HeaderStyled =  styled.header`
  display: flex;
  flex-direction: row;
`;

const AccountItemStyled = styled.div`

`;

const AccountItem = () => {
  return (
    <AccountItemStyled>
      <LoginOutlined style={{ fontSize: '2rem' }}/>
    </AccountItemStyled>
  );
}

export const Header = () => {
  return (
    <HeaderStyled>
      <Image src={HeaderLogo} alt="PhimHD header logo" width={130} height={36}/>
      <HeaderNav />
      <AccountItem />
    </HeaderStyled>
  );
}

const MainStyled = styled.main`

`;

const FooterStyled = styled.footer`

`;

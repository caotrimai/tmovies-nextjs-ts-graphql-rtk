import styled from 'styled-components';

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

const Footer = () => {
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

export default Footer;
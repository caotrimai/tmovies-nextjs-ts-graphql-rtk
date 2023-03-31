import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const MainStyled = styled.main`
  width: 100%;
  min-height: calc(100vh - var(--HEADER_HEIGHT) - var(--FOOTER_HEIGHT));
  display: flex;
  justify-content: center;

  .main-body {
    width: var(--CONTENT_WIDTH_MAX);

    @media (max-width: var(--CONTENT_WIDTH_MAX)) {
      width: 100%;
    }
  }
`;

const Main = ({ children }: PropsWithChildren) => {
  return (
    <MainStyled>
      <div className='main-body'>
        {children}
      </div>
    </MainStyled>
  );
};

export default Main;
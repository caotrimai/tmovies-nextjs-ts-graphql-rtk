import { LayoutProps } from '@/models/index';
import styled from 'styled-components';
import { Footer, Header, Main } from './LayoutSession';

const Container = styled.div`
  font-size: 1.2rem;
`;

export function MainLayout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
}

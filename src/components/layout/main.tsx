import { LayoutProps } from '@/models/index';
import styled from 'styled-components';
import LayoutSection from './LayoutSection';

const Container = styled.div`
  font-size: 1.2rem;
`;

export function MainLayout({ children }: LayoutProps) {
  return (
    <Container>
      <LayoutSection.Header />
      <LayoutSection.Main>
        {children}
      </LayoutSection.Main>
      <LayoutSection.Footer />
    </Container>
  );
}

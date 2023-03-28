import { LayoutProps } from '@/models/index';
import styled from 'styled-components';
import Link from 'next/link';
import {Header} from './LayoutSession'

const Container = styled.div`
  font-size: 1.2rem;
`;

export function MainLayout({ children }: LayoutProps) {
  return (
    <Container className='container'>
      <Header/>
      <div>
        {children}
      </div>
    </Container>
  );
}

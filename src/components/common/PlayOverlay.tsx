import styled from 'styled-components';
import Image from 'next/image';
import ICON_PLAY from '@/assets/images/play.svg';

const PlayOverlayStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
  transition: all ease-in-out .25s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: all ease-in-out .35s;
  }
  &:hover {
    opacity: .5;
    filter: alpha(opacity=100);
    background-color: var(--COLOR_BLACK);
    img {
      width: 35%;
      height: 35%;
      opacity: 1;
    }
  }
`;

export function PlayOverlay() {

  return (
    <PlayOverlayStyled>
      <Image className='play' src={ICON_PLAY} alt='Play' priority={false}></Image>
    </PlayOverlayStyled>
  );
}
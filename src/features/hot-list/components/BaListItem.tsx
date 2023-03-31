import styled from 'styled-components';
import { Movie } from '@/models/movie';
import { PlayOverlay } from '@/components/common';
  
  interface BaListItemProps {
    movie: Movie;
  }

const BaListItemStyled = styled.div`
    width: 24rem;
    height: 33.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  `;

const BaListItemWrapperStyled = styled.div`
    width: 20rem;
    height: 29.9rem;
    position: relative;
    overflow: hidden;
    transition: var(--transition-default);
    border-radius: 1rem;
    
    .thumbnail {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    .play{
      position: absolute;
      z-index: 1;
    }
    .describe {
      position: absolute;
      z-index: 1;
      padding: 1rem;
      bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 1rem;
      color: var(--COLOR_WHITE);
      font-size: 1.8rem;
      .sub {
        font-size: 1.2rem;
      }
    }
    .background {
      position: absolute;
      z-index: 0;
      bottom: 0;
      left: 1rem;
      height: 40%;
      width: calc(100% - 2rem);
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: linear-gradient(transparent,rgba(0,0,0,.8));
      transform: scale(1.1);
    }
  `;
export default function BaListItem({movie}: BaListItemProps){
  
  const BaListItemWrapper = () => {
    return (
      <BaListItemWrapperStyled className="BaListItemWrapper">
        <img 
          className='thumbnail'
          alt={movie.title}
          src={movie.thumbUrl}
        />
        <PlayOverlay/>
        <div className="describe">
          <div className='title'>{movie.title}</div>
          <div className='sub'>{movie.sub}</div>
        </div>
        <div className='background'></div>
      </BaListItemWrapperStyled>
    );
  }
  
  return (
    <BaListItemStyled>
      <BaListItemWrapper/>
    </BaListItemStyled>
  );
}
import styled from 'styled-components';
import { PlayOverlay } from '@/components/common/PlayOverlay';
import { Movie } from '@/models/movie';
import Image from 'next/image';

const PanelMovieCardStyled = styled.div`
  border-radius: .4rem;
  position: relative;
  overflow: hidden;

  .thumbnail {
    width: 100%;
    height: 100%;
    border-radius: .4rem;
    position: relative;

    img.thumbnail-image {
      width: 100%;
      height: 100%;
      border-radius: .4rem;
    }
  }

  .top {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.2rem;
    color: var(--COLOR_WHITE);
    text-shadow: 0 0 .2rem rgba(0, 0, 0, .5);
    
    span {
      border-radius: .2rem;
      padding: .2rem .4rem;

      &.year {
        background-color: #1890ff;
      }

      &.type {
        margin-left: .5rem;
        background-color: #ffb800;
      }
    }
  }

  .describe {
    padding: 1rem .4rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    cursor: default;

    .title {
      font-size: 1.4rem;
      color: var(--COLOR_GRAY_SECONDARY);
    }

    .sub {
      margin-top: .5rem;
      font-size: 1.2rem;
      color: var(--COLOR_GRAY_THIRD);
    }
  }
  
  &:hover {
    .describe {
      .title, .sub {
        color: var(--COLOR_RED_PRIMARY);
      }
    }
  }
`;

interface PanelMovieCardProps {
  movie: Movie
}

export const PanelMovieCard = ({movie}: PanelMovieCardProps) => {
  return (
    <PanelMovieCardStyled>
      <div className='thumbnail'>
        <Image
          className='thumbnail-image'
          alt={'Khanh Khanh Nhật Thường (Tân Xuyên Nhật Thường)'}
          src={'/assets/images/khanh-khanh-nhat-thuong.png'}
          width={100}
          height={100}
          style={{width: '100%', height: '100%'}}
          priority={false}
        />
        <PlayOverlay />
      </div>
      <div className='top'>
        <span className='year'>{movie.year}</span>
        <span className='type'>{movie.type}</span>
      </div>
      <div className='describe'>
        <span className='title'>{movie.title}</span>
        <span className='sub'>{movie.sub}</span>
      </div>
    </PanelMovieCardStyled>
  );
};

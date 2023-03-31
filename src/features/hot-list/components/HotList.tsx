import styled from 'styled-components';
import Slider from 'react-slick';
import BaListItem from '@/features/hot-list/components/BaListItem';
import { Movie } from '@/models/movie';

const HotListStyled = styled.div`
  height: 33.9rem;
  width: 100%;

  .slick-slider {
    width: 100%;

    .slick-list {
      width: 100%;
    }
  }

  .slick-center {
    .BaListItemWrapper {
      width: 24.2rem;
      height: 35rem;
      border-radius: 1rem;
    }
  }
`;

interface HotListProps {
  onChangeSlide: (movie: Movie) => void;
}

export default function HotList({onChangeSlide}: HotListProps) {
  const movieList: Movie[] = [
    {
      id: 1,
      thumbnail: '/assets/images/huong-gio-ma-di.jpg',
      title: 'Hướng Gió Mà Đi 1',
      sub: 'Flight to You',
    },
    {
      id: 2,
      thumbnail: '/assets/images/thuong-lan-quyet.png',
      title: 'Thuong Lan Quyet',
      sub: 'Flight to You',
    },
    {
      id: 5,
      thumbnail: '/assets/images/huong-gio-ma-di.jpg',
      title: 'Hướng Gió Mà Đi 5',
      sub: 'Flight to You',
    },
    {
      id: 3,
      thumbnail: '/assets/images/con-ut-nha-tai-phiet.png',
      title: 'Con út nha tài phiệt',
      sub: 'Flight to You',
    },
    {
      id: 6,
      thumbnail: '/assets/images/huong-gio-ma-di.jpg',
      title: 'Hướng Gió Mà Đi 6',
      sub: 'Flight to You',
    },
    {
      id: 7,
      thumbnail: '/assets/images/con-ut-nha-tai-phiet.png',
      title: 'Con út nha tài phiệt',
      sub: 'Flight to You',
    },
  ];
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    centerMode: true,
    centerPadding: '1rem',
    className: 'center',
    pauseOnHover: true,
    afterChange: (currentSlide:number) => {
      onChangeSlide(movieList[currentSlide]);
    },
  };

  return (
    <HotListStyled>
      <Slider {...settings}>
        {movieList.map((movie) => (<BaListItem movie={movie} key={movie.id} />))}
      </Slider>
    </HotListStyled>
  );
}
import styled from 'styled-components';
import { FireOutlined } from '@ant-design/icons';
import { PanelHeader as PanelHeaderType } from '@/models/common';
import { PanelMovieCard } from '@/components/common';

const LatestUpdateStyled = styled.div``;

interface PanelHeaderProps {
  panelHeader: PanelHeaderType;
}

const PanelHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--COLOR_GRAY_SECONDARY);

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    font-size: 2.4rem;
    color: var(--COLOR_RED_PRIMARY);
  }

  h2.title {
    font-size: 2.4rem;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;

    strong.subtitle {
      margin-left: 1rem;
      font-size: 1.4rem;
      font-weight: normal;
      text-transform: uppercase;
      cursor: default;

      &:hover {
        color: var(--COLOR_RED_PRIMARY);
      }
    }
  }
`;

const PanelHeader = ({ panelHeader }: PanelHeaderProps) => {
  return (
    <PanelHeaderStyled>
      <div className='icon'>
        {panelHeader.icon}
      </div>
      <h2 className='title'>
        {panelHeader.title}
        <strong className='subtitle'>{panelHeader.subTitle}</strong>
      </h2>
    </PanelHeaderStyled>
  );
};

const PanelBodyStyled = styled.div`
  width: 100%;

  .movie-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1rem;
    @media (max-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 820px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 460px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
const PanelBody = () => {
  const movie = {
    title: 'Khanh Khanh Nhật Thường (Tân Xuyên Nhật Thường)',
    sub: 'New Life Begins',
    thumbnail: 'https://phimhd.cc/upload/vod/20230205-2/dd55285f85d5fc250663ff63dd161918.jpg',
    year: 2021,
    type: 'Cổ trang',
  };
  return (
    <PanelBodyStyled>
      <ul className='movie-list'>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
        <li>
          <PanelMovieCard movie={movie} />
        </li>
      </ul>
    </PanelBodyStyled>
  );
};

export const LatestUpdate = () => {
  const panelHeader = {
    icon: <FireOutlined />,
    title: 'HOT',
    subTitle: 'Phim mới cập nhật',
  };
  return (
    <LatestUpdateStyled>
      <PanelHeader panelHeader={panelHeader} />
      <PanelBody />
    </LatestUpdateStyled>
  );
};

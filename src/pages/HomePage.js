import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>
      <h1 className="title">Chcesz połączyć Marmo Bota ze kontem w Spotify? Widocznie się coś nie udało więc spróbuj ponownie ;)</h1>
    </div>
  );
};

export default HomePage;

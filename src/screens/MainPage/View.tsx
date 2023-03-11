import React, { FC } from 'react';
import { SearchBar, ScreenBox, Logo } from 'components';

export const View: FC = () => {
  console.log('MainPage');

  return (
    <ScreenBox>
      <Logo fontSize={90} />
      <SearchBar />
    </ScreenBox>
  );
};

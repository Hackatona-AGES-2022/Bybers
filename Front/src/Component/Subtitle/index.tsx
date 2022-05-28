import React, { FC } from 'react';
import {Subtitle} from './style';
interface TitleProps {
  title: string;
}

const TitleComponent: FC<TitleProps> = ({ title }) => {
  return (
    <>
      <Subtitle>{title}</Subtitle>
    </>
  );
};

export default TitleComponent;

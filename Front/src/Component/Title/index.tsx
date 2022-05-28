import React, { FC } from 'react';
import {Title} from './style';
interface TitleProps {
  title: string;
}

const TitleComponent: FC<TitleProps> = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default TitleComponent;

import React, { FC } from 'react';

interface SubtitleProps {
  title: string;
}

const Subtitle: FC<SubtitleProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default Subtitle;

import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import LazyLoad from 'react-lazyload';
import lazyStyle from './index.module.less';
import { Container, ContainerProps } from 'components/Container';

interface LazyLoadPicProps extends ContainerProps {
  picUrl: string;
}

const LazyLoadPic: FC<LazyLoadPicProps & HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { picUrl, className, width, rate, height, ..._props } = props;

  return (
    <Container
      width={width}
      height={height}
      rate={rate}
      className={classNames(
        !!className && className,
        lazyStyle['lazy-pic-wrapper']
      )}
      {..._props}
    >
      <LazyLoad once throttle className={lazyStyle['lazy-pic-container']}>
        <img
          alt="图片，按钮"
          src={picUrl}
          className={lazyStyle['lazy-pic-img']}
        />
      </LazyLoad>
    </Container>
  );
};

export default LazyLoadPic;

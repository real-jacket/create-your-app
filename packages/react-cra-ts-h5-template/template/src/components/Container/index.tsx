import { CSSProperties, FC, HTMLAttributes } from 'react';
import style from './index.module.less';
import classNames from 'classnames';

export interface ContainerProps {
  rate?: number;
  width: string;
  height?: string;
}

export const Container: FC<ContainerProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  rate,
  height,
  width,
  className
}) => {
  const placeStyle: CSSProperties = rate
    ? {
        paddingBottom: `${rate * 100}%`
      }
    : {
        height
      };
  return (
    <div
      className={classNames(className, style.container)}
      style={{
        width
      }}
    >
      <div className={style['container-placeholder']} style={placeStyle} />
      <div className={style['container-content']}>{children}</div>
    </div>
  );
};

import React, { FC } from 'react';
// CRA 默认支持 src/ 目录下的别名映射
import Example from 'components/Example';
import LazyLoadPic from '@/components/LazyLoadPic';
import AppStyle from './App.module.less';

const App: FC = () => {
  return (
    <div className={AppStyle['app-wrapper']}>
      {/* 示例，编码时移除 */}
      <Example />
      {/* 图片懒加载示例 */}
      <LazyLoadPic
        className={AppStyle['example-log']}
        width={'100%'}
        rate={1280 / 1920}
        // height={`${(1280 * 375) / (1920 * 16)}rem`}
        picUrl={
          '//raw.kgithub.com/real-jacket/picgo-store/main/img/dd4ee7050f3dea37_1920x1280.jpg'
        }
      />
    </div>
  );
};

export default App;

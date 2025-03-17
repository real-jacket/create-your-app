/**
 * 示例组件，编码时移除。
 */

// eg：react scoped css（暂不支持使用 @ 别名导入）
import './style.scoped.less';
import React, { FC, useEffect } from 'react';
import Code from './Code';
import LOGO from './logo.svg';
import { getPageInfoRequest } from 'service';

const Example: FC = () => {
  useEffect(() => {
    getPageInfoRequest()
      .then()
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="example-wrapper">
      <img src={LOGO} alt="react logo" />
      <p>The react app has been created.</p>
      <Code />
      <p>Pull down to show the lazy picture</p>
    </div>
  );
};

export default Example;

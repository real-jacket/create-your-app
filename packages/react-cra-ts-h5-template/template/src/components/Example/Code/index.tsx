// eg: react css modules（暂不支持使用 @ 别名导入）
import React, { FC } from 'react';
import style from './style.module.less';

const Code: FC = () => {
  return (
    <>
      <span className={style.abcd}>Happy coding ~</span>
      {/* use styleName */}
      <code className={style['code-wrapper']}>
        pnpx @rjkt/create-your-app create my-app -t
        @rjkt/cya-react-cra-ts-h5-template
      </code>
    </>
  );
};

export default Code;

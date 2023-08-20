import React from 'react';
import cat from 'assets/img/cat.svg';
import classnames from 'classnames';
import 'assets/index.scss';

function Cat(props) {
  const { className, ...rest } = props;
  return (
    <img className={classnames('gold-cat', className)} src={cat} {...rest} />
  );
}

export default Cat;

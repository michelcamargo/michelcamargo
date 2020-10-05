import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Img from './styles';

function Image({ src, link, alt, width, radius }) {
  return (
    <Link to={link}>
      <Img src={src} alt={alt} width={width} radius={radius} />
    </Link>
  );
}

export default Image;

Image.defaultProps = {
  radius: '0px',
  link: '',
  alt: 'Imagem',
  width: '200px',
};

Image.propTypes = {
  src: propTypes.string.isRequired,
  radius: propTypes.string,
  link: propTypes.string,
  alt: propTypes.string,
  width: propTypes.string,
};

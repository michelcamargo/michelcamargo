import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Img = styled.img`

`;

function Image({ src, link }) {
  return (
    <>
      <Link to={link}>
        <Img src={src} />
      </Link>
    </>
  );
}

export default Image;

Image.defaultProps = {
  link: '',
};

Image.propTypes = {
  src: propTypes.string.isRequired,
  link: propTypes.string,
};

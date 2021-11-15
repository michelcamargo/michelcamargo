import React from 'react';
import { Link } from 'react-router-dom';

import Img from './styles';

interface Props {
  src: string;
  link?: string;
  alt?: string;
  width: string;
  radius?: string;
}

function Image({src, alt, width, radius, link}: Props) {
  if(link){
    return (
      <Link className="image-link" to={link}>
        <Img className="image" src={src} alt={alt} width={width} radius={radius} />
      </Link>
    );
  }

  else{
    return (
      <Img className="image" src={src} alt={alt} width={width} radius={radius} />
    );
  }
}

export default Image;

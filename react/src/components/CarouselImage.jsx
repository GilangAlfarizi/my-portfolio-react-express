import React from 'react';

function CarouselImage(props) {
  const {src, alt} = props
  return (
    <div className='d-flex justify-content-center'>
      <img src={src} alt={alt} style={{height: '550px', width: '1000px', filter: 'brightness(70%)'}} />
    </div>
  );
}

export default CarouselImage;
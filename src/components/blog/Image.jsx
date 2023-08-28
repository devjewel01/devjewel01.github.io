import React from 'react'

const Image = ({src, alt, height, width}) => {
  return (
    <img src={src} alt={alt} height={height} width={width}/>
  )
}

export default Image
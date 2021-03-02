import React from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Container} from "./Gallery.styles.js"

const Gallery = ({
  images, 
  width=800, 
  height=256, 
  showFullscreenButton=false, 
  showBullets=false,
  showPlayButton=false,
  showNav=false,
  showIndex=false,
  autoPlay=false,
  showThumbnails=true,
  infinite=false,
  lazyLoad=false,
  slideDuration=450,
  slideInterval=3000,
  startIndex=0
}) => {
		return (
      <Container width={width} height={height}>
        <ImageGallery 
          items={images} 
          showFullscreenButton={showFullscreenButton} 
          showBullets={showBullets}
          showPlayButton={showPlayButton}
          showNav={showNav}
          showIndex={showIndex}
          autoPlay={autoPlay}
          showThumbnails={showThumbnails}
          infinite={infinite}
          lazyLoad={lazyLoad}
          slideDuration={slideDuration}
          slideInterval={slideInterval}
          startIndex={startIndex}
        />
      </Container>
    );
	  
};

export default Gallery;

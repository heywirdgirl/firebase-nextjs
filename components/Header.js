import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <Carousel className="" showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img className="h-96" src="https://firebasestorage.googleapis.com/v0/b/fir-setup-8b120.appspot.com/o/hello.png?alt=media&token=ae54f6b0-6d33-46f9-8f42-995bcbfef845" />                  
                </div>
                <div>
                    <img className="h-96" src="banner.jpg" />               
                </div>
                <div>
                    <img className="h-96" src="https://firebasestorage.googleapis.com/v0/b/fir-setup-8b120.appspot.com/o/hello.png?alt=media&token=ae54f6b0-6d33-46f9-8f42-995bcbfef845" />
                </div>
                <div>
                    <img className="h-96" src="banner.jpg" />               
                </div>
            </Carousel>
  )
}

export default Header




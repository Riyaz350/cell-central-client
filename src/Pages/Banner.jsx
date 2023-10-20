import { Carousel, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel
      className="rounded-xl  max-w-[1700px] lg:h-[600px] mx-auto"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className=" absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://i.ibb.co/vwLnC8p/i15.png"
        alt="image 1"
        className="h-full w-full "
      />
      <div className='h-[170px] lg:h-full '>
      <Link  to='/phoneDetails/6531ce8fb527a46c715fac53'>
      <img
        src="https://i.ibb.co/FmzxRKr/image.png"
        alt="image 2"
        className="h-full  w-full "
        
      /></Link>
      </div>
      
      <div className='h-[170px] lg:h-full '>
      <img
        src="https://i.ibb.co/x3YShH8/image.png"
        alt="image 3"
        className="h-full  w-full "
      />
      </div>
    </Carousel>
    
    );
};

export default Banner;
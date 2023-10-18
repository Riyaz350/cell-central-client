
const AdSlider = () => {
    return (
        
<div className="flex justify-center mt-20">
<div className="carousel max-w-6xl mx-auto">
        <div id="slide1" className="carousel-item relative w-full h-3/4">
            <img src="https://i.ibb.co/xGHmXnW/image.png" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-3/4">
            <img src="https://i.ibb.co/DKh7ZDk/image.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-3/4">
            <img src="https://i.ibb.co/cYk48kb/image.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> 
        
        </div>
</div>

    );
};

export default AdSlider;
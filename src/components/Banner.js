import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-200 via-gray-100 to-transparent bottom-0 z-20' />
        
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading='lazy' src='/banner.png' alt="" />
            </div>
            <div>
                <img loading='lazy' src='/business.jpg' alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://links.papareact.com/6ff" alt="" />
            </div>
            <div>
                <img loading='lazy' src="/baner.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />
            </div>
            <div>
                <img loading='lazy' src='/poster.jpeg' alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
            </div>
            
        </Carousel>

    </div>
  )
}

export default Banner;
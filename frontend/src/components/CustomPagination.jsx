/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

const settings = {
  dots: false,
  infinite: false, 
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

export default function CustomPagination({ total, current, onChange }) {
  const [slickRef, setSlickRef] = useState(null);

  const handlePageChange = (newPage) => {
    onChange(newPage);
    if (slickRef) {
      slickRef.slickGoTo(newPage - 1);
    }
  };

  useEffect(() => {
    if (slickRef) {
      slickRef.slickGoTo(current - 1);
    }
  }, [current, slickRef]);

  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div>
      <Slider {...settings} initialSlide={current - 1} ref={(slider) => setSlickRef(slider)}>
        
      </Slider>
      <div className="flex flex-row justify-center gap-5" style={{marginTop:'-15px'}}>
        <button  className="text-black rounded-full p-3 mt-5 mb-5"
              style={{ fontFamily: 'G1', fontSize: '1rem' , backgroundColor: '#ffcc01' }} onClick={() => handlePageChange(current - 1)} disabled={current === 1}>
          Previous
        </button>
        <button className="text-black rounded-full p-3 mt-5 mb-5"
              style={{ fontFamily: 'G1', fontSize: '1rem' , backgroundColor: '#ffcc01' }} onClick={() => handlePageChange(current + 1)} disabled={current === total}>
          Next
        </button>
      </div>
    </div>
  );
}
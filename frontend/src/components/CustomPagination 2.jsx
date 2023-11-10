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
        {pages.map((page) => (
          <div key={page}>
            <div  onClick={() => handlePageChange(page)}>Page {page}</div>
          </div>
        ))}
      </Slider>
      <div className="flex flex-row justify-between">
        <button className="glassmorphism-smbutton" onClick={() => handlePageChange(current - 1)} disabled={current === 1}>
          Previous
        </button>
        <button className="glassmorphism-smbutton" onClick={() => handlePageChange(current + 1)} disabled={current === total}>
          Next
        </button>
      </div>
    </div>
  );
}

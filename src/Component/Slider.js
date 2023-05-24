import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const BannerData = [
    {
      image: "../Images/Banner/a.jpg",
      title: "This Is First Banner",
      decs: "This is some dummy text on banner One"
    },
    {
      image: "../Images/Banner/s.jpg",
      title: "This Is Second Banner",
      decs: "This is some dummy text on banner Two"
    },
    {
      image: "../Images/Banner/d.jpg",
      title: "This Is Third Banner",
      decs: "This is some dummy text on banner Three"
    },
    {
      image: "../Images/Banner/f.jpg",
      title: "This Is Fourth Banner",
      decs: "This is some dummy text on banner  Four"
    },
    {
      image: "../Images/Banner/g.jpg",
      title: "This Is Fifth Banner",
      decs: "This is some dummy text on banner Five"
    }
  ];
  return (
    <div>

      <Carousel activeIndex={index} onSelect={handleSelect}>

        {
          BannerData.map((ite, index) => {
            return (
              <Carousel.Item key={index} >
                <img
                  className="d-block w-100"
                  src={ite.image}
                  alt="Banner"
                />
                <Carousel.Caption>
                  <h3 className='text-[red] text-5xl font-bold'>{ite.title}</h3>
                  <p className='text-[purple] text-3xl font-bold' >{ite.decs}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }

      </Carousel>

    </div>
  )
}

export default Slider;
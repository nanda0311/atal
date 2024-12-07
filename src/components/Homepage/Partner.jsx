import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub, FaTiktok } from 'react-icons/fa'; // Import social media icons from react-icons

export const Partner = () => {
  const logos = [
    <FaFacebook size={50} color="#4267B2" />,
    <FaTwitter size={50} color="#1DA1F2" />,
    <FaInstagram size={50} color="#C13584" />,
    <FaLinkedin size={50} color="#0077B5" />,
    <FaYoutube size={50} color="#FF0000" />,
    <FaGithub size={50} color="#333" />,
    <FaTiktok size={50} color="#000000" />,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="partner-carousel">
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>OUR PARTNERS</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f0f0', borderRadius: '8px' }}>
              {logo}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;

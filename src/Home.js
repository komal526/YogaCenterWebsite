import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import yoga1 from './yoga1.jpg';
import yoga2 from './yoga2.jpg';
import yoga3 from './yoga3.jpg';
import yoga8 from './yoga8.jpg';
import yoga9 from './yoga9.avif';
import yoga10 from './yoga10.avif';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slideIndex]);

  const showSlides = () => {
    const slides = slidesRef.current;
    if (slides.length === 0) return;

    // Hide all slides
    slides.forEach(slide => {
      slide.style.display = 'none';
    });

    // Increment slideIndex
    setSlideIndex((prevSlideIndex) => {
      const newSlideIndex = prevSlideIndex + 1;
      if (newSlideIndex >= slides.length) {
        return 0;
      }
      return newSlideIndex;
    });

    // Display the current slide
    slides[slideIndex].style.display = 'block';
  };

  const prevSlide = () => {
    setSlideIndex((prevSlideIndex) => {
      if (prevSlideIndex === 0) {
        return slidesRef.current.length - 1;
      }
      return prevSlideIndex - 1;
    });
  };

  const nextSlide = () => {
    setSlideIndex((prevSlideIndex) => {
      if (prevSlideIndex === slidesRef.current.length - 1) {
        return 0;
      }
      return prevSlideIndex + 1;
    });
  };

  return (
    <div className="slideshow-container">
      <div className="slides">
        <img ref={(el) => (slidesRef.current[0] = el)} src={yoga8} alt="Slide 1" style={{ display: 'block' }} />
        <img ref={(el) => (slidesRef.current[1] = el)} src={yoga2} alt="Slide 2" style={{ display: 'none' }} />
        <img ref={(el) => (slidesRef.current[2] = el)} src={yoga3} alt="Slide 3" style={{ display: 'none' }} />
      </div>

      <div className='first-head' >
        <h1 className='head-heading'>The only yoga membership you'll ever need.</h1>
        <p className='head-para'>Practice yoga, meditation and breathwork.</p>
        <p className='head-para'>Learn Ayurveda and yoga philosophy.</p>
        <p className='head-para'>Earn yoga teaching certificates.</p>
      </div>

      <div class="first_section">

      <div class="rightSection" id="rightContent"> 
            <img src= {yoga9} alt="Description of the image"/>
        </div>

        <div class="leftSection" id="leftContent"> 
         <h1 className='yoga-benifits-head'>Benifits Of Yoga</h1>
         <p className='yoga-benifits' >Improve flexibility</p>
         <p className='yoga-benifits'>Reduces Stress</p>
         <p className='yoga-benifits'>Relaxation and refresh</p>
         <p className='yoga-benifits'>Boosts Immunity</p>
         <p className='yoga-benifits'>Boosts Mental Clarity</p>
         <p className='yoga-benifits'>Promotes Self-Awareness</p>

        </div>
        
        

       </div> 
       <div class="second_section2">
        <h1 class="second-heading2">Join Our Community</h1>
        <div>
          <p>We invite you to join our vibrant and welcoming community at Yoga Center. Whether you are seeking physical health, mental clarity, or a sense of inner peace, we are here to support you on your yoga journey. Come experience the many benefits of yoga with us.</p>
        </div>
    </div>
    </div>
  );
};

export default Home;

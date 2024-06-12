import React from 'react';
import { useState } from "react"
import './Courses.css'; 
import yoga10 from './yoga10.avif';
import yoga14 from './yoga14.avif';
import yoga13 from './yoga13.avif';
import yoga12 from './yoga12.avif';
import yoga15 from './yoga15.avif';
import yoga16 from './yoga16.avif';

function Courses() {
  return (
    <div className='course-first'>
    <div class="course-grid">
           <div class="course">
               <img class="course-image"  src={yoga14} alt="Course 1"/>
               <h2>Meditation and breathwork</h2>
               <p>Techniques to enhance mindfulness and relaxation through focused breathing and meditation practices.</p>
               <p className='price' >Rs 1000</p>
           </div>
           <div class="course">
               <img  class="course-image" src={yoga10} alt="Course 2"/>
               <h2 >Basic Yoga Asanas</h2>
             
               <p>Learn foundational poses to improve flexibility, strength, and balance through guided practice of essential asanas.</p>
               <p className='price' >Rs 1500</p>
           </div>
           <div class="course">
               <img class="course-image"  src={yoga12} alt="Course 3"/>
               <h2>Principles of Ayurveda </h2>
               <p>Study Ayurveda theory online through 100 video lessons, read and check curated references online, discuss online with our ayurveda guides </p>
               <p className='price'>Rs 2000</p>
           </div>
           <div class="course">
               <img class="course-image"  src={yoga13} alt="Course 4"/>
               <h2>Prenatal Yoga</h2>
               <p>Specialized yoga training for pregnant women, focusing on safe asanas, breathing techniques, and relaxation.</p>
               <p className='price'>Rs 2500</p>
           </div>
           <div class="course">
               <img class="course-image"  src={yoga15} alt="Course 5"/>
               <h2>Face Yoga</h2>
               <p> Exercises targeting facial muscles to enhance tone, reduce wrinkles, and promote skin health.</p>
               <p className='price'>Rs 3000</p>
           </div>
           <div class="course">
               <img class="course-image"  src={yoga16}  alt="Course 6"/>
               <h2>Learning About Asanas</h2>
               <p>Master complex poses to deepen practice, enhance flexibility, strength, and balance with guided instruction.</p>
               <p className='price'>Rs 3500</p>
           </div>
       </div>
       
  
    </div>
    

    );
    }

export default Courses;
import React from 'react';
import { useState } from "react"
import './About.css';
import myimg from './yoga5.jpg';

function About() {
  return (
    <div>

  <div>
    <div class="first_section">
        <div class="leftSection" id="leftContent"> 

         We believe in the transformative power of yoga to enhance physical, mental, and spiritual well-being. Our mission is to provide a serene and supportive environment where individuals of all ages and skill levels can explore and deepen their yoga practice.
         We embrace the transformative power of yoga to nurture your mind, body, and spirit.  Whether you're seeking to enhance your physical health, find mental clarity, or cultivate inner peace,   YOGA CENTER is dedicated to guiding you on your journey towards holistic well-being. Join us and become part of a vibrant community committed to mindfulness, wellness, and personal growth.
        </div>
        <div class="rightSection" id="rightContent"> 
            <img src= {myimg} alt="Description of the image"/>
        </div>
        

       </div> 


    <div class="second_section" >
        <h1 class="second-heading" >Our Mission</h1>
        <div class="second-content" >
          Our mission is to foster a community that values health, wellness, and inner peace. We strive to offer a variety of yoga classes and workshops that cater to the diverse needs of our students, helping them to achieve balance and harmony in their lives.
        </div>
    </div>

    <div lass="second_section">
        <h1 class="second-heading">Our Values</h1>
        <div>
          <div class="container">
            <div class="box"><h3 class="value-heading">Inclusivity</h3>
              At our yoga center, inclusivity is at the heart of everything we do. We warmly welcome everyone, irrespective of age, gender, fitness level, or background. Our diverse community is built on the belief that yoga is for everyone, and we strive to create an environment where all individuals feel accepted and supported. Whether you're a seasoned practitioner or stepping onto the mat for the first time, you'll find a space that respects and embraces your unique journey.
            </div>
            <div class="box"><h3 class="value-heading">Community</h3>
              We believe that the true power of yoga extends beyond individual practice; it thrives in the connections we build with others. Our yoga center is a hub of community, fostering bonds of support and friendship both on and off the mat. Through group classes, workshops, and social events, we create opportunities for members to connect, share experiences, and grow together. The sense of belonging and mutual encouragement within our community enhances each person's yoga journey and enriches our collective experience.
            </div>
            <div class="box"><h3 class="value-heading">Mindfilness</h3>
              Mindfulness is a cornerstone of our philosophy at the yoga center. We encourage our members to cultivate a mindful approach to life, integrating the principles of yoga and meditation into their daily routines. By focusing on the present moment, we can achieve greater clarity, reduce stress, and enhance our overall well-being. Our classes and workshops are designed to deepen your practice of mindfulness, helping you develop a greater awareness of your body, mind, and spirit.
            </div>
            <div class="box"><h3 class="value-heading">Wellness</h3>
              Our dedication to wellness encompasses a holistic approach to health, nurturing the physical, mental, and spiritual aspects of our members. Through a variety of yoga styles, meditation sessions, and wellness workshops, we aim to promote balanced and healthy living. Our programs are crafted to support your overall well-being, whether you're seeking to improve your physical fitness, manage stress, or explore spiritual growth. We believe that true wellness is achieved through a harmonious integration of body, mind, and spirit, and we're here to guide you on that journey.
            </div>

    </div>
    

    <div class="second_section2">
        <h1 class="second-heading2">Join Our Community</h1>
        <div>
          <p>We invite you to join our vibrant and welcoming community at Yoga Center. Whether you are seeking physical health, mental clarity, or a sense of inner peace, we are here to support you on your yoga journey. Come experience the many benefits of yoga with us.</p>
        </div>
    </div>


  </div>   

    </div>
    </div>
    </div>
    );
    }

export default About;

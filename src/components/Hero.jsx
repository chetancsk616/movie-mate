import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current, visualRef.current], {
      opacity: 0,
      y: 30
    });

    // Animate elements in sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(visualRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // Animate cinema screens
    gsap.to(".screen", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title glitch-text" data-text="Movie Mate">
            Kutikuppala Chetan Srinivas
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            AI Engineer
          </p>
          <p ref={descriptionRef} className="hero-description">
            I am deeply intrigued by Artificial Intelligence, IoT, Machine Learning,
            and Data Science, with an innate drive to tackle intricate data challenges
            and craft intelligent, scalable solutions. With hands-on expertise in Python,
            R, TensorFlow, Scikit-learn, and NLP frameworks such as SpaCy and NLTK, I focus
            on data refinement, exploratory analysis, predictive modeling, and intelligent automation.
          </p>
          <div ref={ctaRef} className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => window.open("https://github.com/chetancsk3000", "_blank")}
            >
              GitHub
            </button>
            <button
              className="tn btn-secondary"
              onClick={() => window.open("https://www.linkedin.com/in/chetancsk3000", "_blank")}
            >
              LinkedIn
            </button>
          </div>
        </div>
        <div ref={visualRef} className="hero-visual">
          <div className="cinema-screens">
            <div className="screen screen-1">🐙</div>
            <div className="screen screen-2">💼</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

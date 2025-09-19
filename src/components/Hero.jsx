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
            Movie Mate
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            The Ultimate Platform for Cinephiles
          </p>
          <p ref={descriptionRef} className="hero-description">
            Connect, watch, and discuss movies with fellow film enthusiasts. 
            Stream together, debate classics, discover new releases, and immerse 
            yourself in the world of cinema like never before.
          </p>
          <div ref={ctaRef} className="hero-cta">
            <button className="btn btn-primary">Join the Community</button>
            <button className="btn btn-secondary">Explore Features</button>
          </div>
        </div>
        <div ref={visualRef} className="hero-visual">
          <div className="cinema-screens">
            <div className="screen screen-1">🎬</div>
            <div className="screen screen-2">🍿</div>
            <div className="screen screen-3">🎭</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const featuresRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
  {
    id: 1,
    title: "AgroSmart",
    description: "A farmer-assistance platform that offers pesticide and fertilizer recommendations, tractor booking, and multilingual support to enhance agricultural productivity.",
    icon: "🌾",
    highlight: "Smart Farming Platform"
  },
  {
    id: 2,
    title: "NutriTrack",
    description: "An AI-powered nutrition prediction app that analyzes food data and provides health insights with daily tracking and Firebase history integration.",
    icon: "🥗",
    highlight: "AI Nutrition Tracker"
  },
  {
    id: 3,
    title: "Secure Locker for Adaptively Charging an Electronic Device",
    description: "Patent No. 202541030598 · Issued May 2, 2025. This patented innovation introduces a biometric-secured locker that provides adaptive charging to electronic devices. It intelligently adjusts charging parameters, locks the device securely, and initiates charging based on stored biometric and device data.",
    icon: "🔐",
    highlight: "Patent Innovation"
  },
  {
    id: 4,
    title: "Solar and Field Automation System",
    description: "A dual automation system consisting of an agricultural data logger for monitoring field conditions and a solar panel protection mechanism that automatically closes with a cleaning cloth during low light and reopens under sunlight, ensuring optimal energy generation and panel maintenance.",
    icon: "☀️",
    highlight: "Automation & Clean Energy"
  }
];


  useEffect(() => {
    // Animate section header
    gsap.fromTo(headerRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate feature cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animation
        const handleMouseEnter = () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        };

        const handleMouseLeave = () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="features" ref={featuresRef}>
      <div className="container">
        <div ref={headerRef} className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <article 
              key={feature.id} 
              ref={el => cardsRef.current[index] = el}
              className="feature-card" 
              tabIndex="0"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <span className="feature-highlight">{feature.highlight}</span>
              <p className="feature-description">{feature.description}</p>
              <button className="feature-cta" aria-label={`Learn more about ${feature.title}`}>
                Explore
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

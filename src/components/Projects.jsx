import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Projects.css'; // You'll add the styles below

gsap.registerPlugin(ScrollTrigger);

const Popup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuresRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [popupMessage, setPopupMessage] = useState('');

  const features = [
    {
      id: 1,
      title: "Agri Services",
      description:
        "A farmer-assistance platform that offers pesticide and fertilizer recommendations, tractor booking, and multilingual support to enhance agricultural productivity.",
      icon: "🌾",
      highlight: "Smart Farming Platform",
      link: "https://agriservices.chetancsk3000.dev/"
    },
    {
      id: 2,
      title: "NutriTrack",
      description:
        "An AI-powered nutrition prediction app that analyzes food data and provides health insights with daily tracking and Firebase history integration.",
      icon: "🥗",
      highlight: "AI Nutrition Tracker",
      link: "https://myapplication-d691d792.web.app/"
    },
    {
      id: 3,
      title: "Secure Locker for Adaptively Charging an Electronic Device",
      description:
        "Patent No. 202541030598 · Issued May 2, 2025. This patented innovation introduces a biometric-secured locker that provides adaptive charging to electronic devices. It intelligently adjusts charging parameters, locks the device securely, and initiates charging based on stored biometric and device data.",
      icon: "🔐",
      highlight: "Patent Innovation",
      link: "-"
    },
    {
      id: 4,
      title: "Solar and Field Automation System",
      description:
        "A dual automation system consisting of an agricultural data logger for monitoring field conditions and a solar panel protection mechanism that automatically closes with a cleaning cloth during low light and reopens under sunlight, ensuring optimal energy generation and panel maintenance.",
      icon: "☀️",
      highlight: "Automation & Clean Energy",
      link: "-"
    }
  ];

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.9 },
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

        card.addEventListener("mouseenter", () =>
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" })
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="features" ref={featuresRef}>
      <div className="container">
        <div ref={headerRef} className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="feature-card"
              tabIndex="0"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <span className="feature-highlight">{feature.highlight}</span>
              
              <p className="feature-description">
                {feature.description.length > 120
                  ? feature.description.substring(0, 120) + "..."
                  : feature.description}
              </p>

              <div className="feature-actions">
                {feature.description.length > 120 && (
                  <button
                    className="see-more-btn"
                    onClick={() => setPopupMessage(feature.description)}
                  >
                    See More
                  </button>
                )}
                {feature.link !== "-" && (
                  <a
                    href={feature.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="feature-cta"
                  >
                    Explore
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Popup message={popupMessage} onClose={() => setPopupMessage('')} />
    </section>
  );
};

export default Projects;

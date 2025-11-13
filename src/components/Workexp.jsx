import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Wexp = () => {
  const featuresRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      id: 1,
      title: "AI Intern",
      company: "Aarvasa",
      period: "July 2025 - Present",
      description:
        "Led a team to enhance Aarvasa's AI chatbot by improving RAG pipeline efficiency, Groq API integration, and overall conversational accuracy — boosting reliability and response quality.",
      icon: "/assets/aarvasa.png", // 🔹 your Aarvasa logo or image path
      highlight: "Gen AI"
    },
    {
      id: 2,
      title: "Summer Intern",
      company: "TIFAC",
      period: "June 2025 - August 2025",
      description:
        "Independently built a multilingual agricultural web app under TIFAC to help farmers access services like vehicle booking, pesticide purchase, and crop health advice — featuring real-time translation and voice interaction.",
      icon: "/assets/tifac.jpg", // 🔹 your TIFAC logo or image path
      highlight: "React Specialist"
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

        const handleMouseEnter = () => {
          gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        };
        const handleMouseLeave = () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="workexp" className="features" ref={featuresRef}>
      <div className="container">
        <div ref={headerRef} className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A timeline of my professional journey and achievements
          </p>
        </div>

        <div className="features-grid">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="feature-card"
              tabIndex="0"
            >
              <div className="feature-icon">
                <img
                  src={experience.icon}
                  alt={`${experience.company} logo`}
                  className="icon-img"
                />
              </div>
              <div className="feature-header">
                <h3 className="feature-title">{experience.title}</h3>
                <span className="feature-company">{experience.company}</span>
                <span className="feature-period">{experience.period}</span>
              </div>
              <span className="feature-highlight">{experience.highlight}</span>
              <p className="feature-description">{experience.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wexp;

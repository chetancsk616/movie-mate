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
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      period: "2023 - Present",
      description: "Led the development of scalable web applications using React and Node.js. Improved system performance by 40% through optimization techniques and modern architecture patterns.",
      icon: "�",
      highlight: "Full Stack Development"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description: "Developed responsive web applications using React, Redux, and TypeScript. Implemented CI/CD pipelines and reduced deployment time by 60%.",
      icon: "⚛️",
      highlight: "React Specialist"
    },
    {
      id: 3,
      title: "Software Developer",
      company: "InnovateTech Solutions",
      period: "2019 - 2021",
      description: "Built and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      icon: "�",
      highlight: "Web Development"
    },
    {
      id: 4,
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description: "Developed and maintained company websites and internal tools. Participated in code reviews and implemented best practices for code quality.",
      icon: "🔧",
      highlight: "Web Development"
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
              ref={el => cardsRef.current[index] = el}
              className="feature-card" 
              tabIndex="0"
            >
              <div className="feature-icon">{experience.icon}</div>
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

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
      title: "Stream Room",
      description: "Watch movies together in real-time with friends and fellow cinephiles. Experience the communal joy of cinema from anywhere in the world.",
      icon: "📺",
      highlight: "Virtual Cinema Experience"
    },
    {
      id: 2,
      title: "Chat Room",
      description: "Engage in passionate film discussions, share trivia, and debate your favorite movies with a community of film enthusiasts.",
      icon: "💬",
      highlight: "Real-time Discussions"
    },
    {
      id: 3,
      title: "OTT View",
      description: "Discover and access content from multiple streaming platforms in one place. Never miss out on hidden gems or latest releases.",
      icon: "📱",
      highlight: "Unified Streaming"
    },
    {
      id: 4,
      title: "Game Competitions",
      description: "Test your film knowledge with trivia, quizzes, and movie-related games. Compete with others and earn rewards.",
      icon: "🎮",
      highlight: "Interactive Gaming"
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

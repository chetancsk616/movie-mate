import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    // Animate about text
    gsap.fromTo(textRef.current, 
      { 
        opacity: 0, 
        x: -50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate visual elements
    gsap.fromTo(visualRef.current, 
      { 
        opacity: 0, 
        x: 50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visualRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate stats with counter effect
    const statNumbers = statsRef.current.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
      const finalValue = stat.textContent;
      const numericValue = parseInt(finalValue.replace(/\D/g, ''));
      
      gsap.fromTo(stat, 
        { 
          textContent: 0 
        },
        {
          textContent: numericValue,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          onUpdate: function() {
            const currentValue = Math.round(this.targets()[0].textContent);
            if (finalValue.includes('K')) {
              stat.textContent = currentValue + 'K+';
            } else {
              stat.textContent = currentValue + '+';
            }
          }
        }
      );
    });

    // Animate mission section
    gsap.fromTo(missionRef.current, 
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
          trigger: missionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          <div ref={textRef} className="about-text">
            <h2 className="section-title">About Movie Mate</h2>
            <p className="about-description">
              Movie Mate was born from a simple idea: cinema is better when shared. 
              We believe that the magic of movies lies not just in watching them, 
              but in the conversations, debates, and connections they create.
            </p>
            <p className="about-description">
              Our platform brings together passionate cinephiles from around the world, 
              creating a vibrant community where film lovers can connect, discover, 
              and celebrate their shared passion for cinema.
            </p>
            
            <div ref={statsRef} className="about-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Movie Enthusiasts</span>
              </div>
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Movies Watched Together</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Daily Discussions</span>
              </div>
            </div>
          </div>
          
          <div ref={visualRef} className="about-visual">
            <div className="cinema-reel">
              <div className="reel-frame frame-1"></div>
              <div className="reel-frame frame-2"></div>
              <div className="reel-frame frame-3"></div>
              <div className="reel-frame frame-4"></div>
            </div>
          </div>
        </div>

        <div ref={missionRef} className="mission">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-text">
            To create the ultimate digital space where cinema lovers can experience, 
            discuss, and celebrate films together, fostering a global community 
            united by the love of storytelling through moving pictures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

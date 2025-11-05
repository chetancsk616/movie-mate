import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Skills.module.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const headerRef = useRef(null);
  const categoriesRef = useRef([]);

  const skillCategories = [
    {
      id: 1,
      title: "AI & Deployment",
      icon: "⚙️",
      skills: [
        { name: "Python", proficiency: 85 },
        { name: "NLP/ OpenCV", proficiency: 80 },
        { name: "Gen AI", proficiency: 75 },
        { name: "Deep learning", proficiency: 80 },
        { name: "Vercel/ Rnder", proficiency: 75 },
        { name: "Supabase/ Firebase", proficiency: 90 }
      ]
    },
    {
      id: 2,
      title: "Embided systems & Cloud",
      icon: "🛠️",
      skills: [
        { name: "Arduino", proficiency: 90 },
        { name: "ESP32/8622", proficiency: 75 },
        { name: "Raspberry pi", proficiency: 70 },
        { name: "Oracle", proficiency: 80 },
        { name: "AWS", proficiency: 75 },
        { name: "Google cloud", proficiency: 85 }
      ]
    },
    {
      id: 3,
      title: "Frontend and others",
      icon: "🎨",
      skills: [
        { name: "React.js", proficiency: 95 },
        { name: "JavaScript", proficiency: 90 },
        { name: "HTML5/CSS3", proficiency: 85 },
        { name: "R programming", proficiency: 90 },
        { name: "C/C++", proficiency: 85 },
        { name: "Java", proficiency: 80 }
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      icon: "🤝",
      skills: [
        { name: "Team Leadership", proficiency: 90 },
        { name: "Problem Solving", proficiency: 95 },
        { name: "Communication", proficiency: 90 },
        { name: "Agile/Scrum", proficiency: 85 },
        { name: "Mentoring", proficiency: 80 },
        { name: "Project Management", proficiency: 85 }
      ]
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

    // Animate skill categories
    categoriesRef.current.forEach((category, index) => {
      if (category) {
        gsap.fromTo(category,
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
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Animate proficiency bars
        const proficiencyBars = category.querySelectorAll(`.${styles.proficiencyLevel}`);
        proficiencyBars.forEach((bar) => {
          const proficiency = bar.getAttribute('data-proficiency');
          gsap.fromTo(bar,
            { width: "0%" },
            {
              width: `${proficiency}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 90%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="skills" className={styles.skills} ref={skillsRef}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <p className={styles.sectionSubtitle}>
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              ref={el => categoriesRef.current[index] = el}
              className={styles.skillCategory}
            >
              <h3 className={styles.categoryTitle}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.title}
              </h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <span>{skill.name}</span>
                    <div className={styles.proficiencyBar}>
                      <div
                        className={styles.proficiencyLevel}
                        data-proficiency={skill.proficiency}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

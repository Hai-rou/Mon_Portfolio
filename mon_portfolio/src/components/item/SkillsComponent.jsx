import '../../SASS/item/competence.scss';
import { Icon } from '@iconify/react';
import { useEffect, useRef } from 'react';

const SkillsComponent = () => {
  const skillsRef = useRef([]);

  const skills = [
    { name: 'HTML5', icon: 'skill-icons:html', percentage: 80, color: '#e44d26', category: 'Front-end' },
    { name: 'CSS3', icon: 'skill-icons:css', percentage: 80, color: '#1572b6', category: 'Front-end' },
    { name: 'JavaScript', icon: 'skill-icons:javascript', percentage: 50, color: '#f7df1e', category: 'Front-end' },
    { name: 'React', icon: 'skill-icons:react-dark', percentage: 60, color: '#61dafb', category: 'Framework' },
    { name: 'Python', icon: 'skill-icons:python-dark', percentage: 20, color: '#3776ab', category: 'Back-end' },
    { name: 'Astro', icon: 'simple-icons:astro', percentage: 20, color: '#ff5d01', category: 'Framework' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => observer.disconnect();
  }, []);

  const getLevel = (percentage) => {
    if (percentage >= 70) return 'Expert';
    if (percentage >= 50) return 'Avancé';
    if (percentage >= 30) return 'Intermédiaire';
    return 'Débutant';
  };

  return (
    <div className="skills-showcase">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <div className="skill-header">
              <div className="skill-icon-wrapper">
                <Icon icon={skill.icon} width="48" height="48" />
                <div className="icon-glow" style={{ backgroundColor: skill.color }}></div>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>

            <div className="skill-stats">
              <div className="stat-row">
                <span className="stat-label">Niveau</span>
                <span className="stat-value">{getLevel(skill.percentage)}</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Maîtrise</span>
                <span className="stat-percentage" style={{ color: skill.color }}>
                  {skill.percentage}%
                </span>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color
                  }}
                >
                  <div className="progress-shine"></div>
                </div>
              </div>
              <div className="progress-trail" style={{ borderColor: skill.color }}></div>
            </div>

            <div className="skill-badge" style={{ borderColor: skill.color, color: skill.color }}>
              {skill.percentage >= 70 ? '⭐ Expert' : skill.percentage >= 50 ? '🚀 Avancé' : '📚 En apprentissage'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;

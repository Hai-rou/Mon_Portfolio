import '../../SASS/item/competence.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Icon } from '@iconify/react';

const SkillsComponent = () => {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', percentage: 94 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', percentage: 88 },
    { name: 'JavaScript', icon: 'fab fa-js-square', percentage: 50 },
    { name: 'React', icon: 'fab fa-react', percentage: 82 },
    { name: 'Python', icon: 'fab fa-python', percentage: 20 },
    { name: 'Astro', icon: 'simple-icons:astro', percentage: 20, type: 'iconify'}
  ];

  return (
    <div className="skills-container">
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-label">
                {skill.type === 'iconify' ? (
                  <Icon icon={skill.icon} width="18" height="18" style={{marginRight: '8px'}} />
                ) : (
                  <i className={skill.icon}></i>
                )}{' '}
                {skill.name}
              </span>
              <span className="percentage">{skill.percentage}%</span>
            </div>
            <div className="bar">
              <div
                className={`fill ${skill.name.toLowerCase()}`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;

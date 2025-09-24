import '../../SASS/item/competence.css';
import { Icon } from '@iconify/react';

const SkillsComponent = () => {
  const skills = [
    { name: 'HTML5', icon: 'skill-icons:html', percentage: 94, type: 'iconify' },
    { name: 'CSS3', icon: 'skill-icons:css', percentage: 88, type: 'iconify' },
    { name: 'JavaScript', icon: 'skill-icons:javascript', percentage: 50, type: 'iconify' },
    { name: 'React', icon: 'skill-icons:react-dark', percentage: 82, type: 'iconify' },
    { name: 'Python', icon: 'skill-icons:python-dark', percentage: 20, type: 'iconify' },
    { name: 'Astro', icon: 'simple-icons:astro', percentage: 20, type: 'iconify'}
  ];

  return (
    <div className="skills-container">
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-label">
                <Icon icon={skill.icon} width="18" height="18" style={{marginRight: '8px'}} />
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

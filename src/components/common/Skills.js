import React, { useState } from 'react';
import './Skills.css';
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {
  const skills = [
    'JavaScript',
    'Node.js',
    'Java',
    'Python',
    'CSS',
    'Version control',
    'REST',
    'SQL',
    'Firebase',
    'Docker',
    'Linux',
    'React.js',
    'NoSQL',
    'Scrum',
    'GCP',
    'HTML5',
    'Redux.js',
    'TDD',
    'CI / CD',
    'Code review',

  ];

  const [sorted, setSorted] = useState(false);
  const [buttons, setButtons] = useState(skills.map(skill => <Button key={skill} className="linked">{skill}</Button>));

  const shuffle = function shuffle() {
    const shuffledButtons = buttons.slice();
    let counter = shuffledButtons.length; let temp; let index;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      temp = shuffledButtons[counter];
      shuffledButtons[counter] = shuffledButtons[index];
      shuffledButtons[index] = temp;
    }
    setButtons([]);
    setTimeout(function () {
      setButtons(shuffledButtons);
    }, 700);
  };

  return (
    <Fade delay={150}>
      <div className="skills">
        <div className="skills-row">
          A few of my skills
          <FontAwesomeIcon
            icon={faSync}
            size="1x"
            onClick={() => {
              shuffle();
              setSorted(!sorted);
            }}
            className={sorted ? ' icon-sorted' : 'icon'}
          />
        </div>
        <div className="skill-buttons">
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {buttons}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    </Fade>
  );
}

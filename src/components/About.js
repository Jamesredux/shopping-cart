import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <div className='explainer'>
        <p>
          Created as part of the{' '}
          <a href='https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/shopping-cart'>
            The Odin Project
          </a>{' '}
          by <a href='https://github.com/Jamesredux'>James Redux</a>.{' '}
        </p>
        <p>
          <a href='https://github.com/Jamesredux/shopping-cart'>View Code</a>
        </p>
        <p>
          Store contents provided by{' '}
          <a href='https://fakestoreapi.com/'>Fake Store API</a>
        </p>
      </div>
    </div>
  );
};

export default About;

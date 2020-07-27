/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss';

import Techno from './Techno';

AOS.init();

const Project = ({
  name,
  thumbnail,
  alt,
  description,
  technos,
  githublink,
  link,
}) => {
  return (
    <div className="projet-item" data-aos="zoom-in">
      <div className="overlay">
        <div className="overlay-meta" data-aos="fade-right">
          <h3 className="overlay-meta-title">
            {name}
          </h3>
          <p className="overlay-meta-description">
            {description}
          </p>
          <div className="overlay-meta-technos">
            {technos.map((techno) => (
              <Techno key={techno.id} {...techno} />
            ))}
          </div>
          <p className="overlay-meta-link">
            <a href={githublink} target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -40 600 600.33402" className=""><g><path d="m352.214844 501.335938h-192v-53.335938h-30.265625c-31.058594-.125-58.835938-19.367188-69.867188-48.398438l-11.199219-30c-1.558593-4.171874-5.546874-6.9375-10-6.933593h-6.667968c-9.429688.011719-18.382813-4.128907-24.472656-11.328125-6.089844-7.195313-8.699219-16.710938-7.128907-26.003906 2.535157-15.203126 16.535157-26.667969 32.667969-26.667969h24c21.335938-.027344 40.636719 12.664062 49.066406 32.265625l12.667969 29.46875c3.359375 7.839844 11.066406 12.925781 19.597656 12.933594h21.601563c1.867187-26.136719 10.53125-46.800782 25.332031-61.335938l2.933594-2.800781c-67.734375-22.398438-113.597657-77.332031-113.597657-138.53125.136719-25.039063 7.550782-49.496094 21.332032-70.402344v-44.398437c-.003906-17.347657 4.011718-34.464844 11.734375-50l3.066406-5.867188h18.398437c22.65625-.0898438 44.40625 8.886719 60.402344 24.933594l5.066406 5.066406c40.144532-11.667969 82.785157-11.667969 122.933594 0l5.066406-5.066406c15.960938-16.011719 37.65625-24.9882815 60.265626-24.933594h18.398437l2.933594 5.867188c7.722656 15.535156 11.738281 32.652343 11.734375 50v44.398437c13.78125 20.90625 21.195312 45.363281 21.332031 70.402344 0 61.199219-45.867187 116.132812-113.597656 138.53125l2.53125 2.535156c16.402343 16.09375 25.671875 38.085937 25.734375 61.066406zm-170.667969-21.335938h149.335937v-107.199219c-.074218-17.214843-7.035156-33.6875-19.335937-45.734375l-29.597656-28.933594 18.933593-4.398437c67.863282-16 115.332032-66.535156 115.332032-123.066406-.148438-21.898438-6.9375-43.238281-19.46875-61.199219l-1.863282-2.667969v-50.933593c.003907-11.84375-2.308593-23.574219-6.800781-34.53125h-4.933593c-16.972657-.015626-33.246094 6.75-45.199219 18.796874l-14.402344 14.269532-6.265625-2.136719c-39.699219-12.839844-82.433594-12.839844-122.132812 0l-6.265626 2.136719-14.402343-14.269532c-11.953125-12.046874-28.226563-18.8125-45.199219-18.796874h-4.933594c-4.492187 10.957031-6.804687 22.6875-6.800781 34.53125v50.933593l-1.867187 2.667969c-12.527344 17.960938-19.316407 39.300781-19.464844 61.199219 0 56.53125 47.464844 107.066406 115.332031 122.933593l18.933594 4.398438-30 29.335938c-11.066407 10.796874-17.464844 26.796874-19.066407 47.730468-.898437 11.050782-10.113281 19.566406-21.199218 19.601563h-21.601563c-17.0625-.007813-32.480469-10.183594-39.199219-25.867188l-12.53125-29.464843c-5.070312-11.761719-16.664062-19.367188-29.46875-19.335938h-24c-5.734374 0-10.800781 3.867188-11.597656 8.800781-.550781 3.089844.289063 6.265625 2.292969 8.679688 2.003906 2.414062 4.96875 3.824219 8.105469 3.855469h6.53125c13.351562.027343 25.292968 8.304687 30 20.796874l11.203125 29.867188c7.855469 20.8125 27.753906 34.605469 50 34.667969h30.265625c11.78125 0 21.332031 9.550781 21.332031 21.332031zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#FFAEA1"/></g> </svg>
            </a>
            <a href={link} target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enableBackground="new 0 0 128 128" viewBox="-20 -20 160 160"><g><path id="External_Link" d="m124 8v36c0 2.211-1.789 4-4 4s-4-1.789-4-4v-26.344l-57.172 57.172c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l57.172-57.172h-26.344c-2.211 0-4-1.789-4-4s1.789-4 4-4h36c2.211 0 4 1.789 4 4zm-16 104v-48c0-2.211-1.789-4-4-4s-4 1.789-4 4v48c0 2.207-1.793 4-4 4h-80c-2.207 0-4-1.793-4-4v-80c0-2.207 1.793-4 4-4h48c2.211 0 4-1.789 4-4s-1.789-4-4-4h-48c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12h80c6.617 0 12-5.383 12-12z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#130524" /></g> </svg>
            </a>
          </p>
        </div>
      </div>
      <div className="infos" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
        <div className="infos-meta" data-aos="fade-right">
          <h3 className="infos-meta-title">
            {name}
          </h3>
          <p className="infos-meta-description">
            {description}
          </p>
          <div className="infos-meta-technos">
            {technos.map((techno) => (
              <Techno key={techno.id} {...techno} />
            ))}
          </div>
          <p className="infos-meta-link">
            <a href={githublink} target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -40 600 600.33402" className=""><g><path d="m352.214844 501.335938h-192v-53.335938h-30.265625c-31.058594-.125-58.835938-19.367188-69.867188-48.398438l-11.199219-30c-1.558593-4.171874-5.546874-6.9375-10-6.933593h-6.667968c-9.429688.011719-18.382813-4.128907-24.472656-11.328125-6.089844-7.195313-8.699219-16.710938-7.128907-26.003906 2.535157-15.203126 16.535157-26.667969 32.667969-26.667969h24c21.335938-.027344 40.636719 12.664062 49.066406 32.265625l12.667969 29.46875c3.359375 7.839844 11.066406 12.925781 19.597656 12.933594h21.601563c1.867187-26.136719 10.53125-46.800782 25.332031-61.335938l2.933594-2.800781c-67.734375-22.398438-113.597657-77.332031-113.597657-138.53125.136719-25.039063 7.550782-49.496094 21.332032-70.402344v-44.398437c-.003906-17.347657 4.011718-34.464844 11.734375-50l3.066406-5.867188h18.398437c22.65625-.0898438 44.40625 8.886719 60.402344 24.933594l5.066406 5.066406c40.144532-11.667969 82.785157-11.667969 122.933594 0l5.066406-5.066406c15.960938-16.011719 37.65625-24.9882815 60.265626-24.933594h18.398437l2.933594 5.867188c7.722656 15.535156 11.738281 32.652343 11.734375 50v44.398437c13.78125 20.90625 21.195312 45.363281 21.332031 70.402344 0 61.199219-45.867187 116.132812-113.597656 138.53125l2.53125 2.535156c16.402343 16.09375 25.671875 38.085937 25.734375 61.066406zm-170.667969-21.335938h149.335937v-107.199219c-.074218-17.214843-7.035156-33.6875-19.335937-45.734375l-29.597656-28.933594 18.933593-4.398437c67.863282-16 115.332032-66.535156 115.332032-123.066406-.148438-21.898438-6.9375-43.238281-19.46875-61.199219l-1.863282-2.667969v-50.933593c.003907-11.84375-2.308593-23.574219-6.800781-34.53125h-4.933593c-16.972657-.015626-33.246094 6.75-45.199219 18.796874l-14.402344 14.269532-6.265625-2.136719c-39.699219-12.839844-82.433594-12.839844-122.132812 0l-6.265626 2.136719-14.402343-14.269532c-11.953125-12.046874-28.226563-18.8125-45.199219-18.796874h-4.933594c-4.492187 10.957031-6.804687 22.6875-6.800781 34.53125v50.933593l-1.867187 2.667969c-12.527344 17.960938-19.316407 39.300781-19.464844 61.199219 0 56.53125 47.464844 107.066406 115.332031 122.933593l18.933594 4.398438-30 29.335938c-11.066407 10.796874-17.464844 26.796874-19.066407 47.730468-.898437 11.050782-10.113281 19.566406-21.199218 19.601563h-21.601563c-17.0625-.007813-32.480469-10.183594-39.199219-25.867188l-12.53125-29.464843c-5.070312-11.761719-16.664062-19.367188-29.46875-19.335938h-24c-5.734374 0-10.800781 3.867188-11.597656 8.800781-.550781 3.089844.289063 6.265625 2.292969 8.679688 2.003906 2.414062 4.96875 3.824219 8.105469 3.855469h6.53125c13.351562.027343 25.292968 8.304687 30 20.796874l11.203125 29.867188c7.855469 20.8125 27.753906 34.605469 50 34.667969h30.265625c11.78125 0 21.332031 9.550781 21.332031 21.332031zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#FFAEA1" /></g> </svg>
            </a>
            <a href={link} target="blank">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enableBackground="new 0 0 128 128" viewBox="-15 -10 160 160"><g><path id="External_Link" d="m124 8v36c0 2.211-1.789 4-4 4s-4-1.789-4-4v-26.344l-57.172 57.172c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l57.172-57.172h-26.344c-2.211 0-4-1.789-4-4s1.789-4 4-4h36c2.211 0 4 1.789 4 4zm-16 104v-48c0-2.211-1.789-4-4-4s-4 1.789-4 4v48c0 2.207-1.793 4-4 4h-80c-2.207 0-4-1.793-4-4v-80c0-2.207 1.793-4 4-4h48c2.211 0 4-1.789 4-4s-1.789-4-4-4h-48c-6.617 0-12 5.383-12 12v80c0 6.617 5.383 12 12 12h80c6.617 0 12-5.383 12-12z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#130524"/></g> </svg>
            </a>
          </p>
        </div>
      </div>
      <img
        src={thumbnail}
        className="projet-item-thumbnail"
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      techno: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  link: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
  githublink: PropTypes.string.isRequired,
};

export default Project;

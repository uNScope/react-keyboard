import React from 'react';
import * as _ from 'underscore';
import PropTypes from 'prop-types';

const Letters = ({ items, active }) => {
  let lettersArr = [];

  _.each(items, (letter, index) => {
    lettersArr.push((
      <span data-letter
            className="letters__el" key={ index }>
        { letter }
      </span>
    ));
  });

  return (
    <div data-letters-container
         className={"letters " + (!active ? 'disabled' : '')}>
      { lettersArr }
    </div>
  );
};

Letters.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Letters;

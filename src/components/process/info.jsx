import React from 'react';
import PropTypes from 'prop-types';

import { formatTime } from "../../utils/time";

const Info = ({ timeLimit, timeSpent, wrongKeys, items }) => (
  <div className='process-info'>
    <div>Времени затрачено: <span>{ formatTime(timeSpent) }</span></div>
    <div>Времени осталось:  <span>{ formatTime(timeLimit) }</span></div>
    <div>Кол-во ошибок:     <span>{ wrongKeys }</span></div>
    <div>Осталось символов: <span>{ items.length }</span></div>
  </div>
);

Info.propTypes = {
  timeLimit: PropTypes.number.isRequired,
  timeSpent: PropTypes.number.isRequired,
  wrongKeys: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default Info;

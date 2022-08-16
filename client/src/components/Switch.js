import { func, bool } from 'prop-types';

import './switch.css';

const Switch = ({ onClick, value = false }) => {
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onClick={onClick}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{ background: value && '#06D6A0', margin: '0 5px' }}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

Switch.propTypes = {
  onClick: func,
  value: bool,
};

export { Switch };

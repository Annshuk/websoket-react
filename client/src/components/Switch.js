import { useState } from 'react';
import './switch.css';

const Switch = (props) => {
  const [value, setValue] = useState(false);

  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onClick={() => {
          setValue(!value);
        }}
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

export { Switch };

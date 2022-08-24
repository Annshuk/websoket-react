import { createContext, useContext, useState, useLayoutEffect } from 'react';
import { node } from 'prop-types';

export const context = createContext({});
export const { Provider } = context;

export const useSensorContext = () => {
  const ctx = context || {};

  return useContext(ctx);
};

const ws = new WebSocket('ws://localhost:5000');

/**
 * SensorProvider
 * App Provider
 *
 */
const SensorProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);
  const [value, setValue] = useState(false);

  const handleClick = () => setValue(() => !value);

  useLayoutEffect(() => {
    ws.onmessage = ({ data = '{}' }) => {
      const parsedSensor = JSON.parse(data);

      setSensors((prev) => [
        ...new Map(
          [...prev, parsedSensor].map((sensor) => [sensor.id, sensor]),
        ).values(),
      ]);
    };

    return () => ws.close();
  }, []);

  return (
    <Provider
      value={{
        sensors,
        setSensors,
        ws,
        handleClick,
        value,
      }}
    >
      {children}
    </Provider>
  );
};

SensorProvider.propTypes = {
  children: node,
};

export default SensorProvider;

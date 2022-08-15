import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { node } from 'prop-types';

export const context = createContext({});
export const { Provider } = context;

export const useSensorContext = () => {
  const ctx = context || {};

  return useContext(ctx);
};

/**
 * SensorProvider
 * App Provider
 *
 */
const SensorProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);
  const ws = useRef(WebSocket);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000');
    ws.current.onopen = () => {
      console.warn('connection opned');
    };

    ws.current.onclose = () => {
      console.warn('connection closed');
    };

    ws.current.onmessage = (event) => {
      const { data } = event;

      setSensors((prevState) => [...prevState, JSON.parse(data)]);
    };

    console.warn('remder');

    return () => ws.current?.close();
  }, [ws]);

  return (
    <Provider value={{ sensors, setSensors, ws: ws.current }}>
      {children}
    </Provider>
  );
};

SensorProvider.propTypes = {
  children: node,
};

export default SensorProvider;

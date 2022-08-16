import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useRef,
} from 'react';
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
  const [value, setValue] = useState(false);

  const handleClick = () => setValue(() => !value);

  const ws = useRef(WebSocket);

  useLayoutEffect(() => {
    ws.current = new WebSocket('ws://localhost:5000');

    ws.current.onmessage = (event) => {
      const { data } = event;
      const parsedSensor = JSON.parse(data);

      setSensors((prevState) => [...prevState, parsedSensor]);
    };

    return () => ws.current?.close();
  }, [ws]);

  return (
    <Provider
      value={{
        sensors,
        setSensors,
        ws: ws.current,
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

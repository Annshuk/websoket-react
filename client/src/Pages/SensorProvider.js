import {
  createContext,
  useContext,
  useState,
  useLayoutEffect,
  useRef,
  //useEffect,
} from 'react';
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
  const sensorsRef = useRef(sensors);

  const handleClick = () => setValue(() => !value);

  useLayoutEffect(() => {
    ws.onmessage = ({ data }) => {
      const parsedSensor = JSON.parse(data);

      sensorsRef.current = parsedSensor;

      setSensors((prevState) => {
        return !sensorsRef.current.connected
          ? [...prevState, parsedSensor]
          : prevState.map((item) => {
              if (item.id === parsedSensor.id && sensorsRef.current.connected) {
                return { ...item, ...parsedSensor };
              }

              return item;
            });
      });
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

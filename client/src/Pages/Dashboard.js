import { useCallback } from 'react';
import { Row, Col } from 'reactstrap';

import SensorCards from 'components/SensorCards';
import { useSensorContext } from './SensorProvider';

const Dashboard = () => {
  const { sensors = [], ws, setSensors } = useSensorContext();

  const handleSensors = useCallback(
    ({ id, connected }) => {
      ws.send(
        JSON.stringify({
          id,
          command: !connected ? 'connect' : 'disconnect',
        }),
      );

      setSensors((prev) =>
        prev.map((sensor) => {
          if (sensor.id === id) {
            return { ...sensor, connected: !connected };
          }

          return sensor;
        }),
      );
    },

    [ws, setSensors],
  );

  return (
    <Row>
      {sensors.map((item, index) => (
        <Col xs="12" sm="4" md="4" key={index}>
          <SensorCards sensors={item} onClick={() => handleSensors(item)} />
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;

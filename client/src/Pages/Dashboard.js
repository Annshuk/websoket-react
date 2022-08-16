import { useCallback, useMemo } from 'react';
import { Row, Col, Alert } from 'reactstrap';

import SensorCards from 'components/SensorCards';
import { useSensorContext } from './SensorProvider';

const Dashboard = () => {
  const { sensors = [], ws, setSensors, value } = useSensorContext();

  const filteredSensors = useMemo(
    () => (value ? sensors.filter(({ connected }) => connected) : sensors),
    [sensors, value],
  );

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
      {!filteredSensors.length ? (
        <Col>
          <Alert color="info">No sensors Connected found!!</Alert>
        </Col>
      ) : null}
      {filteredSensors.map((item, index) => (
        <Col xs="12" sm="4" md="4" key={index}>
          <SensorCards sensors={item} onClick={() => handleSensors(item)} />
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;

import { Row, Col } from 'reactstrap';

import SensorCards from 'components/SensorCards';
import { useSensorContext } from './SensorProvider';
import { useCallback } from 'react';

const Dashboard = () => {
  const { sensors = [], ws } = useSensorContext();

  const handleSensors = useCallback(
    (item) => {
      ws.send(
        JSON.stringify({
          id: item.id,
          command: !item.connected ? 'connect' : 'disconnect',
        }),
      );
    },
    [ws],
  );

  return (
    <Row>
      {sensors.map((item, index) => (
        <Col xs="12" sm="3" md="3" key={index}>
          <SensorCards sensors={item} onClick={() => handleSensors(item)} />
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;

import { Row, Col } from 'reactstrap';

import SensorCards from 'components/SensorCards';
import { useSensorContext } from './SensorProvider';

const Dashboard = () => {
  const { sensors = [], setSensors, ws } = useSensorContext();

  const handleSensors = (item) => {
    setSensors((prevState) => {
      const updatedSensor = prevState.map((sensor) => {
        if (sensor.id === item.id) {
          return { ...sensor, id: item.id, connected: !item.connected };
        }

        return sensor;
      });

      console.warn(ws);

      ws.send(JSON.stringify(updatedSensor));
      return updatedSensor;
    });
  };

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

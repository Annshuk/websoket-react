import { memo } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardFooter,
} from 'reactstrap';
import { object, func } from 'prop-types';

/**
 * SensorCards
 * to show sensor cards
 */
const SensorCards = ({ sensors = {}, onClick }) => {
  const isConnect = sensors.connected;

  return (
    <Card className="my-2" outline>
      <CardBody>
        <CardTitle tag="h5">{sensors.name}</CardTitle>
        <CardText>Unit : {sensors.unit}</CardText>
        <CardText>Value : {sensors.value ? sensors.value : 'N/A'}</CardText>
        <CardFooter>
          <Button color={isConnect ? 'primary' : 'secondary'} onClick={onClick}>
            {!sensors.connected ? 'Connect' : 'Disconnect'}
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

SensorCards.propTypes = {
  sensors: object,
  onClick: func,
};

export default memo(SensorCards);

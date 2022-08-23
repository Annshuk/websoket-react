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
  const { unit, name, value, connected } = sensors;

  return (
    <Card className="my-2" outline>
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText>Unit : {unit}</CardText>
        <CardText>Value : {value ? value : 'N/A'}</CardText>
        <CardFooter>
          <Button color={connected ? 'primary' : 'secondary'} onClick={onClick}>
            {!connected ? 'Connect' : 'Disconnect'}
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

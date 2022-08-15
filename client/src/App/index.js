import { Container } from 'reactstrap';

import Header from 'components/Header';
import SensorProvider from 'Pages/SensorProvider';
import Dashboard from 'Pages/Dashboard';

/**
 * App
 */
const App = () => (
  <SensorProvider>
    <Header />
    <Container fluid>
      <Dashboard />
    </Container>
  </SensorProvider>
);

export default App;

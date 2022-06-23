import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Metrics from './components/Metrics';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import '@testing-library/jest-dom';

const MetricsProvider = () => (
  <Provider store={store}>
    <Metrics />
  </Provider>
);

const CountryDetailsProvider = () => (
  <Provider store={store}>
    <CountryDetails />
  </Provider>
);

const Navigation = () => (
  <Router>
    <Navbar />
  </Router>
);

describe('component test', () => {
  it('Metrics renders correctly', () => {
    const tree = renderer.create(<MetricsProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CountryDetails renders correctly', () => {
    const tree = renderer.create(<CountryDetailsProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Metrics screen renders correctly', async () => {
    render(<MetricsProvider />);
    expect(screen.getByText('AFRICA')).toBeInTheDocument();
  });

  it('Navbar renders correctly', async () => {
    render(<Navigation />);
    expect(screen.getByText('Get to know about Africa')).toBeInTheDocument();
  });

  test('NavLink to match snapshot', () => {
    const component = renderer.create(
      <Router>
        <NavLink to="/countryDetails/1" />
      </Router>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
//import { render } from '@testing-library/react';
import Enzime, { shallow } from 'enzyme';
import EnzimeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzime.configure({
  adapter: new EnzimeAdapter()
})

test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy();
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

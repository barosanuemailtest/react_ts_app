import React from 'react';
//import { render } from '@testing-library/react';
import Enzime, { shallow } from 'enzyme';
import EnzimeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzime.configure({
  adapter: new EnzimeAdapter()
});

let wrapper: Enzime.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
beforeEach(() => {
  wrapper = shallow(<App />)
});

test('renders without error', () => {

  expect(wrapper).toBeTruthy();
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
  const errorDiv = wrapper.find("[data-test='error-message']")
  expect(errorDiv.hasClass('hidden')).toBe(true);
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('renders button', () => {
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0', () => {
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe("0");
});

test('click the button increments counter display', () => {
  const button = wrapper.find("[data-test='increment-button']");
  button.simulate('click');
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe("1");
});
test('counter still displays 0', () => {
  const count = wrapper.find("[data-test='count']").text();
  expect(count).toBe("0");
});
test('clicking increment clears the error', () => {
  const incButton = wrapper.find("[data-test='increment-button']")
  incButton.simulate('click');

  const errorDiv = wrapper.find("[data-test='error-message']")
  const errorHasHiddenClass = errorDiv.hasClass('hidden');
  expect(errorHasHiddenClass).toBe(true);
});

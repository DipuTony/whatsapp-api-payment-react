import { render, screen } from '@testing-library/react';
import App from './App';
import DynamicWithURL from './Pages/DynamicWithURL';

test('simple text testing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple Static/i);
  expect(linkElement).toBeInTheDocument();
});

test('render login component', ()=>{
  const component = render(<App />);
  // console.log("++", component)
  const childElement = component.getByDisplayValue("END URL");
  expect(childElement).toBeInTheDocument();
  // expect(childElement).toBeTruthy();
})
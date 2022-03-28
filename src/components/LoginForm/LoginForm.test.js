import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test('renders form fields correctly', () => {
  render(<LoginForm />);
  const emailText = screen.getByText("Email Address");
  const passwordText = screen.getByText("Password");

  expect(emailText).toBeInTheDocument();
  expect(passwordText).toBeInTheDocument();
});

test('validate function should pass a correct email', () => { 
  render(<LoginForm />);
  const correctEmailInput = "hai@gmail.com";
  const emailInput = screen.getByText("Email Address");
  
  emailInput.value = correctEmailInput;
  expect(emailInput.value).toBe(correctEmailInput);
});

test('validate function should display error when input incorrect email', () => { 
  render(<LoginForm />);
  const incorrectEmailInput = "hai@.com";
  const emailInput = screen.getByText("Email Address");
  
  emailInput.value = incorrectEmailInput;

  const signInButton = screen.getByText("Sign In");
  fireEvent.click(signInButton);

  const errorEmail = screen.getAllByDisplayValue("Please enter a valid email address");
  expect(errorEmail).toBeInTheDocument();

});
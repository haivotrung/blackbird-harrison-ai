import { render, screen } from '@testing-library/react';
import LoginForm from '.';



const badFormInput = {
  email: "bademail",
  password: "Hi"
}

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here

test('renders 2 input component and submit', () => {
  render(<LoginForm />);
  const emailTest = screen.getByText("Email Address");
  expect(emailTest).toBeInTheDocument();

  const passwordTest = screen.getByText("Password");
  expect(passwordTest).toBeInTheDocument();

  const submitButton = screen.getByText("Sign In")
  expect(submitButton).toBeInTheDocument();
});

test('good validation', () => {
  const goodFormInput = {
  email: "hai@ediciones.nyc",
  password: "ThisIsGre@t14"
  };
  
  render(<LoginForm />);
  
})
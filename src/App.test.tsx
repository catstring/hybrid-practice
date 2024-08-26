import { describe, it, expect } from "vitest";;
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders correctly with initial count', () => {
    render(<App />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
    expect(screen.getByText('Double: 0')).toBeInTheDocument();
    expect(screen.getByText('Is Even: Yes')).toBeInTheDocument();
  });

  it('increments the count when increment button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    expect(screen.getByText('Double: 2')).toBeInTheDocument();
    expect(screen.getByText('Is Even: No')).toBeInTheDocument();
  });

  it('decrements the count when decrement button is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    expect(screen.getByText('Double: 2')).toBeInTheDocument();
    expect(screen.getByText('Is Even: No')).toBeInTheDocument();
  });
});
import { View, Text, StyleSheet, Button } from 'react-native';
import { createContext, useContext, useState } from 'react'; 

const ContextCounter = createContext({ counter: 0, setCounter:(counter: number) => {} });

export function CountProvider({ children }: {children: React.ReactNode}) {
  const [counter, setCounter] = useState(0);
  return <ContextCounter.Provider value={{ counter, setCounter }}>{children}</ContextCounter.Provider>;
}

export function DisplayCounter({ children }: {children: React.ReactNode}) {
  const { counter } = useContext(ContextCounter);
  return <Text>{counter}</Text>;
}

export function IncrementButton({ children }: {children: React.ReactNode}) {
  const { counter, setCounter } = useContext(ContextCounter);
  return <Button title="Increment" onPress={() => setCounter(counter + 1)} />;
}

export function DecrementButton({ children }: {children: React.ReactNode}) {
  const { counter, setCounter } = useContext(ContextCounter);
  return <Button title="Decrement" onPress={() => setCounter(counter - 1)} />;
}

export function ResetButton({ children }: {children: React.ReactNode}) {
  const { counter, setCounter } = useContext(ContextCounter);
  return <Button title="Reset" onPress={() => setCounter(0)} />;
}


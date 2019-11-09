# react-create-shared-state

[![Build Status](https://github.com/mucsi96/react-create-shared-state/workflows/Build/badge.svg)](https://github.com/mucsi96/react-create-shared-state/actions?query=workflow%3ABuild+branch%3Amaster)

Reacts `useState` hook but with shared state across components.

# Usage

[Demo](https://codesandbox.io/s/react-create-shared-state-demo-9s9ui)

```jsx
import { createSharedState } from 'react-create-shared-state';

const useTheme = createSharedState('light');

function App {
  return (
    <Toolbar />
    <ThemeSwitch />
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const [theme] = useTheme();
  return <Button theme={theme} />;
}

function ThemeSwitch {
  const [theme, setTheme] = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme}
    </Button>
  );
}
```

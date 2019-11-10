# react-create-shared-state

[![npm version](https://badge.fury.io/js/react-create-shared-state.svg)](https://badge.fury.io/js/react-create-shared-state)
[![Build Status](https://github.com/mucsi96/react-create-shared-state/workflows/Build/badge.svg)](https://github.com/mucsi96/react-create-shared-state/actions?query=workflow%3ABuild+branch%3Amaster)

This package allows sharing data between components with hooks. In many cases leads to more simple implementation compared to Context API.
`createSharedState` creates a hook very similar to `useState` but with sync state across hook instances. Setting a value in one component will result re-rendering every component which uses the same hook.

## Side-by-side comparison with Context API

![image](https://user-images.githubusercontent.com/3163392/68534701-aedc9e00-0337-11ea-89c3-7eed540f23cd.png)

## Usage

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

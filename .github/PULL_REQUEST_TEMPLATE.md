### Please read and mark the following check list before creating a pull request:

- [x] I read and followed the [CONTRIBUTING.md](https://github.com/akveo/react-native-ui-kitten/blob/master/CONTRIBUTING.md) guide.
- [x] I read and followed the [New Feature Checklist](https://github.com/akveo/react-native-ui-kitten/blob/master/DEV_DOCS.md) guide.

#### Short description of what this resolves:

This PR exposes a custom hook `useTheme` to access to theme context value.

Using this hook we can be able to access the current value theme in this manner:

```tsx
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'themes';

function MyComponent() {
  const themeValue = useTheme();
  const backgroundColor = React.useMemo(
    () =>
      themeValue === 'light'
        ? { backgroundColor: 'blue' }
        : { backgroundColor: 'darkblue' },
    [themeValue]
  );

  return <View style={[backgroundColor]}></View>;
}
```

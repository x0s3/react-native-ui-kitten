import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';
import { ThemeContext } from './themeContext';
import { useTheme } from './useTheme';

interface MockProps {
  theme: string;
}

const MockContext: React.FC<MockProps> = props => {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

function ConsumeHook() {
  const themeContext = useTheme();

  return <Text testID={'contextID'}>{themeContext}</Text>;
}

describe('@theme: ui theme hook context checks', () => {
  it('finds theme value properly', () => {
    const { getByTestId } = render(
      <MockContext theme={'light'}>
        <ConsumeHook />
      </MockContext>,
    );

    expect(getByTestId('contextID').props.children).toEqual('light');
  });

  it('not find theme value and throw error properly', () => {
    try {
      render(<ConsumeHook />);
    } catch (error) {
      expect(error.toString()).toEqual(
        'Error: useTeheme must be used within a ThemeProvider',
      );
    }
  });
});

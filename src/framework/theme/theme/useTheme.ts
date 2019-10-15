import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { ThemeType } from './type';
import isEmpty from 'lodash/isEmpty';

export function useTheme(): ThemeType {
  const themeContext = useContext(ThemeContext);

  if (isEmpty(themeContext)) {
    throw new Error('useTeheme must be used within a ThemeProvider');
  }

  return themeContext;
}

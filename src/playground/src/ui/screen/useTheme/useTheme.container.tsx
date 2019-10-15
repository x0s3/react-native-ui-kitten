import React, { useCallback } from 'react';
import { useTheme } from '@kitten/theme';
import { UseThemeShowcase } from './useTheme.component';
import { ShowcaseContainer } from '../common/showcase.container';

export const UseThemeContainer: React.FC = () => {
  const themeValue = useTheme();
  const renderItem = useCallback(() => {
    return <UseThemeShowcase {...themeValue} />;
  }, [themeValue]);

  return (
    <ShowcaseContainer
      showcase={{ sections: [null, null] }}
      renderItem={renderItem}
    />
  );
};

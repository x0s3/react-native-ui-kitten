import { Layout, LayoutElement, Text } from '@kitten/ui';
import React from 'react';

interface UseThemeShowcaseProps {
  themeValue?: string;
}

export const UseThemeShowcase = (
  props?: UseThemeShowcaseProps,
): LayoutElement => {
  return (
    <Layout>
      <Text category='h2'>Color: {props.themeValue}</Text>
    </Layout>
  );
};

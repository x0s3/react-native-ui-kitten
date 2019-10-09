import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';

export class BottomNavigationWithoutIndicatorShowcase extends React.Component {

  state = {
    selectedIndex: 0,
  };

  onTabSelect = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={this.state.selectedIndex}
        onSelect={this.onTabSelect}>
        <BottomNavigationTab title='DASHBOARD'/>
        <BottomNavigationTab title='SETTINGS'/>
      </BottomNavigation>
    );
  }
}

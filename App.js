/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
      ]
    }
  };

  componentDidMount() {
    const interval = setInterval(() => {
      const lastColor = this.state.colors.slice(-1);
      const listWithoutLastColor = this.state.colors.slice(0, -1);
      this.setState({ colors: lastColor.concat(listWithoutLastColor) });
    }, 1500);
  }

  render() {
    const views = this.state.colors.map( color => (
      <View key={ color } style={[styles.container, styles[`${color}Bg`]]} />
    ));

    return (
      <View style={styles.container}>
        { views }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  redBg: { backgroundColor: '#FF0000' },
  orangeBg: { backgroundColor: '#FF7F00' },
  yellowBg: { backgroundColor: '#FFFF00' },
  greenBg: { backgroundColor: '#00FF00' },
  blueBg: { backgroundColor: '#0000FF' },
  indigoBg: { backgroundColor: '#4B0082' },
  violetBg: { backgroundColor: '#9400D3' },
});

export default App;
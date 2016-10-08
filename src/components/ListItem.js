import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListItem extends Component {
  render() {
    const { title } = this.props.library;
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default ListItem;

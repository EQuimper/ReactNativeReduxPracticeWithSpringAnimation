import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const {
      library: { title, id },
      selectLibrary
    } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// connect(state, action)
export default connect(null, actions)(ListItem);

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriendAction } from '../../redux/actions/friendAction';

const Friends = (props) => {
  return (
    <View style={styles.wrapper}>
      {props.friends.possible.map((friend, index) => (
        <Button
          key={friend}
          title={`Add ${friend}`}
          onPress={() => props.addFriendAction(index)}
        />
      ))}
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addFriendAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Friends);

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

const ListFriends = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text>You have {props.friends.current.length} friends</Text>
      <Button
        title="Add some friends"
        onPress={() => props.navigation.navigate('Friends')}
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

export default connect(mapStateToProps, null)(ListFriends);

import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function ChatList() {
  return (
    <View style={styles.container}>
      <Text>Chat List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
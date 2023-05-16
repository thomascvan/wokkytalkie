import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatTile from './ChatTile';

// Dummy conversation data
const conversations = [
  { id: '1', title: 'Chat 1', lastMessage: 'Last message 1' },
  { id: '2', title: 'Chat 2', lastMessage: 'Last message 2' },
  { id: '3', title: 'Chat 3', lastMessage: 'Last message 3' },
  // Add more conversation objects as needed
];

export default function ChatList() {
  return (
    <FlatList
      style={styles.container}
      data={conversations}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatTile chat={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatTile from './ChatTile';

// Dummy conversation data
const conversations = [
  { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?' },
  { id: '2', name: 'Jane Smith', lastMessage: 'Looking forward to the weekend!' },
  { id: '3', name: 'Mike Johnson', lastMessage: `Let's meet for lunch tomorrow.` },
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

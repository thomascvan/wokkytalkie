import { SafeAreaView, StyleSheet, View } from 'react-native';
import TopBar from './components/TopBar';
import ChatList from './components/ChatList';
// import { Web3Modal } from '@web3modal/react-native';

const projectId = '';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Web3Modal projectId={projectId} /> */}
      <View style={styles.topBarContainer}>
        <TopBar />
      </View>
      <View style={styles.chatListContainer}>
        <ChatList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    height: 60, // Adjust the value as needed
  },
  chatListContainer: {
    flex: 1,
  },
});

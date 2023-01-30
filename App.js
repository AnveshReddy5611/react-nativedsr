import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Instagram from './instagram-feed/InstagramFeed';
import MusicPlayer from './music-player/MusicPlayer';

import WorldwideNews from './news/WorldwideNews';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <WorldwideNews/>
       */}
       {/* <MusicPlayer/> */}
       <Instagram/>
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

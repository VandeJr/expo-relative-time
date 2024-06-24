import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRelativeTime from 'expo-relative-time';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoRelativeTime.hello()}</Text>
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

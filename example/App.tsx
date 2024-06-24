import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import * as ExpoRelativeTime from 'expo-relative-time';

export default function App() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setTime(ExpoRelativeTime.getRelativeTime())
    }, 1000)
    setTime(ExpoRelativeTime.getRelativeTime())
  }, [])

  return (
    <View style={styles.container}>
      <Text>{time}</Text>
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

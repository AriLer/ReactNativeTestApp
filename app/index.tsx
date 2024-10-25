import 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function RootLayoutNav() {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text>Pick Me Up</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        to Profile
      </Link>
    </View>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Register' }} />
      <Text style={styles.title}>Register</Text>
      <Text style={styles.placeholder}>Registration flow coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  placeholder: {
    fontSize: 14,
    color: '#999',
  },
});

import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TeleV4</Text>
      <Text style={styles.subtitle}>Telehealth Marketplace Platform</Text>
      <Link href="/(auth)/login" style={styles.link}>
        <Text>Login</Text>
      </Link>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  link: {
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
});

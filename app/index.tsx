import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}>
        <Link href="/onboarding">
            <ThemedText style={styles.titleContainer}>Welcome!</ThemedText>
        </Link>
        <HelloWave />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 80
  },
});

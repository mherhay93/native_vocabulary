import {StyleSheet} from 'react-native';
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from "@/components/ThemedText";

export default function TabTwoScreen() {
  return (
      <ThemedView style={styles.titleContainer}>
        <ThemedText>
          Explore
        </ThemedText>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
  },
});

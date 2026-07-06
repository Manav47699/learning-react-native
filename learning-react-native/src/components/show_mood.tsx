import { View, Text, FlatList, StyleSheet } from "react-native";

export default function ShowMood({ history }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>History Logs</Text>
      
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.moodText}>Mood: {item.mood}</Text>
            <Text style={styles.noteText}>{item.note || "No notes added."}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  heading: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  card: { padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginVertical: 5 },
  moodText: { fontWeight: "bold", color: "purple" },
  noteText: { marginTop: 5, color: "#333" }
});
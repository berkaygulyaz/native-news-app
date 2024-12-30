import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomepageScreen from "./app/screens/HomepageScreen/HomepageScreen";
import LoadingScreen from "./app/screens/LoadingScreen/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <View style={styles.Container}>
      {loading ? <LoadingScreen /> : <HomepageScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

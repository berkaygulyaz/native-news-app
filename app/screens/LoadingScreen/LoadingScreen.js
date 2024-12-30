import { Image, StyleSheet, View, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Logo}>
        <Image
          source={require("../../assets/logo/Subtract.png")}
          style={styles.LogoImage}
        />
        <Image
          source={require("../../assets/logo/Pixels.png")}
          style={styles.LogoImage}
        />
        <Image
          source={require("../../assets/logo/TM.png")}
          style={styles.LogoImage}
        />
      </View>
      <View style={styles.Loader}>
        <ActivityIndicator size="large" color="#0077B6" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  Logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  LogoImage: {
    margin: 5,
  },
  Loader: {
    marginTop: 10,
  },
});
export default LoadingScreen;

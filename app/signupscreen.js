import React from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* First Section - Purple Background */}
      <View style={styles.purpleSection}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Second Section - White Background */}
      <View style={styles.whiteSection}>
        <Text>Sign up screen content goes here...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  purpleSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  whiteSection: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 16,
    backgroundColor: "yellow",
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
});

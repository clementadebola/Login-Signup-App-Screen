import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "purple" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 30,
          }}
        >
          Let get started
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/images/Perss.jpg")}
            style={{ width: 350, height: 350, borderRadius: 55 }}
          />
        </View>
        <View>
          <TouchableOpacity 
          onPress={() => router.push('signupscreen')}
            style={{
              backgroundColor: "yellow",
              padding: "10",
              borderRadius: 5,
              width: 300,
            }} 

          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                textAlign: "center",
                color: "grey",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "semibold" }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "yellow", fontWeight: "semibold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

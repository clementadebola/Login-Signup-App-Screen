import React from 'react'
import { Stack } from 'expo-router'

export default function layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="signupscreen" options={{headerShown: false}}/>
    </Stack>
  )
}

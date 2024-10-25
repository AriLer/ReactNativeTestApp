import React from 'react'
import { Slot, Stack, Link } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  )
}

// _layout.tsx shortcut: rnfes

export default RootLayout

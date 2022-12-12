import 'expo-dev-client'
import React from 'react'
// import { NativeNavigation } from 'app/navigation/native'
import { Button, Stack, Text } from '@my/ui'
import { Provider } from './provider'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider>
      <Stack justifyContent="center" alignItems="center" display="flex" flex={1}>
        <Text fontFamily="$body" fontSize="$6">
          Open up App.tsx to start working on your app!
        </Text>
        <Button backgroundColor="black" color="white">
          Button
        </Button>
        <StatusBar style="auto" />
      </Stack>
    </Provider>
  )
}

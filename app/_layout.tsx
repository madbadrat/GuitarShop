import { Redirect, Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(unloginedTabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(mainTabs)" options={{ headerShown: false }} />
      </Stack>
      {/* <Redirect href="/login" /> */}
      {/* <Redirect href={"/profile"} /> */}
      <Redirect href={"/history"} />
      <StatusBar style="light" />
    </>
  )
}

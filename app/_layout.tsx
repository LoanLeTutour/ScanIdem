import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const {isLoaded, isSignedIn, userId} = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      console.log(userId)
      router.replace('/(tabs)/photo');
    }else {
      router.replace('/');
    }
  },[isSignedIn])
  return (

        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        </Stack>

  );
}

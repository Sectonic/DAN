import { Stack } from "expo-router";

export default function AuthenticateLayout() {
    return (
        <Stack screenOptions={{
            headerTransparent: true,
            headerTintColor: "#ffffff",
        }}>
            <Stack.Screen name="unauthorized" options={{ headerShown: false }} />
            <Stack.Screen 
                name="index" 
                options={{ 
                    title: "Get Started", 
                    headerBackTitle: "Back", 
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen 
                name="qr" 
                options={{ 
                    title: "", 
                    headerBackTitle: "Back", 
                    headerBackVisible: true,
                }} 
            />
        </Stack>
    )
}
import {Stack} from "expo-router"

export default function TabsLayout() {
    return (
        <Stack 
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="home"/>
            <Stack.Screen name="bookmarks"/>
            <Stack.Screen name="create"/>
            <Stack.Screen name="profile"/>
        </Stack>
    )
}
import {StatusBar} from "expo-status-bar"
import {Stack} from "expo-router"

export default function AuthLayout() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#161622"/>
            <Stack>
                <Stack.Screen name="signUp" options={{headerShown: false}}/>
            </Stack>
        </>
    )
}

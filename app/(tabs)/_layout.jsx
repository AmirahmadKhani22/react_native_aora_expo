import {StatusBar} from "expo-status-bar"
import {Tabs} from "expo-router"

export default function TabsLayout() {
    return (
        <>
            <StatusBar style="light" backgroundColor="#161622"/>
            <Tabs 
                screenOptions={{headerShown: false}}
            >
                <Tabs.Screen name="home"/>
                <Tabs.Screen name="bookmarks"/>
                <Tabs.Screen name="create"/>
                <Tabs.Screen name="profile"/>
            </Tabs>
        </>
    )
}
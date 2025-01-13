import "@/css/global.css"
import {Stack} from "expo-router"
import useImportFonts from "@/hooks/importFonts.js"

export default function RootLayout() {
    const [isFontsLoaded , fontsLoadingError] = useImportFonts()
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
        </Stack>
    )
}
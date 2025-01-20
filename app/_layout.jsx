import "@/css/global.css"
import {useEffect} from "react"
import {Provider as RTKProvider} from "react-redux"
import ReduxStore from "../redux/store"
import {SplashScreen, Stack} from "expo-router"
import useImportFonts from "@/hooks/importFonts.js"
import AppError from "@/components/appError"

export default function RootLayout() {
    const [isFontsLoaded , fontsLoadingError] = useImportFonts()
    useEffect(() => {
        if(fontsLoadingError) {
            throw fontsLoadingError
        }
        if(isFontsLoaded) {
            SplashScreen.hideAsync()
        }
    } , [isFontsLoaded , fontsLoadingError])
    if(!isFontsLoaded && !fontsLoadingError) {
        return (
            <AppError 
                message="The fonts are not found!"        
            />
        )
    }
    return (
        <RTKProvider store={ReduxStore}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            </Stack>
        </RTKProvider>
    )
}
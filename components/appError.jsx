import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar} from "expo-status-bar"
import {Text} from "react-native"

export default function AppError({message="" , children}) {
    console.log(message) 
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-primary">
            <StatusBar style="light" backgroundColor="#161622"/>
            {
                message ? (
                    <Text className="text-2xl text-blue">
                        <Text className="text-bold">Oops!</Text>
                        {message}
                    </Text>
                ) : children
            }
        </SafeAreaView>
    )
}

export {Text}

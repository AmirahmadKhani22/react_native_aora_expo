import 'react-native-url-polyfill/auto'
import {useSelector} from "react-redux"
import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar} from "expo-status-bar"
import {ScrollView , View , Text , Dimensions} from "react-native"
import Image from "@/components/image"
import StartPageTitle from '../components/startPageTitle'
import PrimaryButton from "@/components/primaryButton"
import {Redirect , router} from "expo-router"

const {width: windowWidth} = Dimensions.get("window")
const HPadding = 4 * 4

export default function App() {
    const user = useSelector(state => state.user)
    const isDataLoadded = useSelector(state => state.isDataLoadded)

    if(isDataLoadded && user) {
        return <Redirect href="/home"/>
    }

    return (
        <SafeAreaView className="w-full h-full bg-primary">
            <StatusBar style="light" backgroundColor="#161622"/>
            <ScrollView contentContainerStyle={{width: "100%" , minHeight: "100%" , paddingHorizontal: HPadding}}>
                <View className={`w-full min-h-[100vh] items-center justify-center`}>
                    <Image 
                        name="logo"
                        resizeMode="contain"
                        width={(windowWidth - HPadding * 2) * 0.5}
                        aspectRatio={345/103}
                    />
                    <Image 
                        name="cards"
                        resizeMode="contain"
                        className="mt-5"
                        width={windowWidth - HPadding * 2} 
                        aspectRatio={1125/894}
                    />
                    <StartPageTitle />
                    <Text className="w-full mt-7 font-pregular text-sm text-gray-100 text-center">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                    </Text>
                    <PrimaryButton
                        extraContainerStyle="w-full mt-7"
                        handlePress={event => {router.push("/signIn")}}
                    >
                        Continue with Email
                    </PrimaryButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
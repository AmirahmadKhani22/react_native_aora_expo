import 'react-native-url-polyfill/auto'
import {SafeAreaView} from "react-native-safe-area-context"
import {StatusBar} from "expo-status-bar"
import {ScrollView , View , Text , Dimensions, ActivityIndicator} from "react-native"
import Image from "@/components/image"
import StartPageTitle from '@/components/startPageTitle'
import PrimaryButton from "@/components/primaryButton"
import {Redirect , router} from "expo-router"
import useSingIn from '@/hooks/useSignIn'

const {width: windowWidth} = Dimensions.get("window")
const HPadding = 4 * 4
const activityIndicatorSize = 36
const activityIndicatorScaleRatio = 2.5

export default function App() {
    const [authStatus , user] = useSingIn()

    if((authStatus === "authorized" && !user) || (authStatus === "unauthorized" && user && !Object.keys(user).length)) {
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

    if(authStatus === "authorized" && user) {
        return <Redirect href="/Home"/>
    }

    return (
        <SafeAreaView className="w-full h-full bg-primary">
            <StatusBar style="light" backgroundColor="#161622"/>
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator animating={true} size="large" color="#ff0000" style={{width: activityIndicatorScaleRatio * activityIndicatorSize , height: activityIndicatorScaleRatio * activityIndicatorSize , transform: [{scale: activityIndicatorScaleRatio}]}}/>
                <Text className="mt-5 text-2xl text-white font-psemibold">Getting information ...</Text>
            </View>
        </SafeAreaView>
    )
}
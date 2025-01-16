import {useState} from "react"
import {SafeAreaView} from "react-native-safe-area-context"
import {router} from "expo-router"
import {StatusBar} from "expo-status-bar"
import {ScrollView , View , Text , Dimensions} from "react-native"
import Image from "@/components/image"
import PrimaryButton from "@/components/primaryButton"

const {width: windowWidth} = Dimensions.get("window")
const HPadding = 4 * 4
const pathImageAspectRatio = 210/37
const pathImageWidth = 90
const pathImageHeight = pathImageWidth / pathImageAspectRatio

export default function App() {
    const [titleTextPosition , setTitleTextPosition] = useState(null)
    return (
        <SafeAreaView className="w-full h-full bg-primary">
            <StatusBar style="light" backgroundColor="#161622"/>
            <ScrollView contentContainerStyle={{width: "100%" , height: "100%" , paddingHorizontal: HPadding}}>
                <View className={`w-full h-full items-center justify-center`}>
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
                    <View className="mt-5 relative">
                        <Text 
                            className="text-white text-center text-3xl font-psemibold"
                            onLayout={event => {setTitleTextPosition(event.nativeEvent.layout)}}    
                        >
                            Discover Endless Possibilities With{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        {
                            titleTextPosition && <Image 
                                name="path"
                                resizeMode="contain"
                                style={{
                                    position: "absolute", 
                                    bottom: -(pathImageHeight - 5), 
                                    left: titleTextPosition.width - (pathImageWidth - 5)
                                }}
                                width={pathImageWidth}
                                aspectRatio={pathImageAspectRatio}
                            />
                        }
                    </View>
                    <Text className="w-full mt-7 font-pregular text-sm text-gray-100 text-center">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                    </Text>
                    <PrimaryButton
                        extraContainerStyle="w-full mt-7"
                        handlePress={event => {router.push("/signUp")}}
                    >
                        Continue with Email
                    </PrimaryButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
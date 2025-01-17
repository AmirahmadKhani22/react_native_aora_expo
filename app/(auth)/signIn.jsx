import {SafeAreaView} from "react-native-safe-area-context" 
import {ScrollView , View , Text , Dimensions} from "react-native"
import Image from "@/components/image"
import SignInForm from "@/components/signInForm"
import {Link} from "expo-router"

const {width: screenWidth} = Dimensions.get("window")
const HPadding = 4 * 3

export default function SignUp() {
    return (
        <SafeAreaView className="bg-primary min-h-full">
            <ScrollView contentContainerStyle={{minHeight: "100%" , justifyContent: "center", paddingHorizontal: HPadding}}>
                <View className="min-h-[85vh] justify-center">
                    <Image 
                        name="logo"
                        resizeMode="contain"
                        width={screenWidth / 2.5}
                        aspectRatio={345/103}
                    />
                    <Text className="mt-14 text-3xl text-white font-psemibold">Log in to Aora</Text>

                    <SignInForm />
                    
                    <Text className="mt-6 text-center text-lg text-gray-100 font-pregular">
                        Don't have account?{" "}
                        <Link 
                            href="/signUp"
                            className="text-secondary font-psemibold"
                        >
                            Sign Up
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

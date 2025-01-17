import {SafeAreaView} from "react-native-safe-area-context" 
import {ScrollView , View , Text , Dimensions} from "react-native"
import Image from "@/components/image"
import SignUpForm from "@/components/signUpForm"
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
                    <Text className="mt-14 text-3xl text-white font-psemibold">Sign up to Aora</Text>

                    <SignUpForm />
                    
                    <Text className="mt-6 text-center text-lg text-gray-100 font-pregular">
                        Have an account already?{" "}
                        <Link 
                            href="/signIn"
                            className="text-secondary font-psemibold"
                        >
                            Sign In
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

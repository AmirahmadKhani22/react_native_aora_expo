import {View , Text , Dimensions} from "react-native"
import Image from "@/components/image"
import PrimaryButton from "@/components/primaryButton"
import {router} from "expo-router"

const {width: screenWidth} = Dimensions.get("window")

export default function EmptyList({title , subtitle , HPadding}) {
    return (
        <View className="items-center justify-center">
            <Image 
                name="empty"
                resizeMode="contain"
                width={screenWidth - HPadding * 2}
                aspectRatio={810/648}
            />
            <View className="mt-2">
                <Text className="text-2xl text-center text-white font-psemibold">{title}</Text>
                <Text className="text-base text-center text-gray-100 font-pmedium">{subtitle}</Text>
            </View>
            <PrimaryButton
                extraContainerStyle="w-full my-5"
                handlePress={event => router.replace("/Home")}
            >
                Create video
            </PrimaryButton>
        </View>
    )
}

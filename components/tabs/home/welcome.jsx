import {Text , View} from "react-native"
import Image from "@/components/image"
import {useSelector} from "react-redux"

const logoSize = 36

export default function Welcome() {
    const username = useSelector(state => state.user.username)

    return (
        <View className="items-center justify-between">
            <View>
                <Text className="text-base text-gray-100 font-pmedium">Welcome Back</Text>
                <Text className="text-2xl text-white font-psemibold">{username}</Text>
            </View>
            <View className="mt-1.5">
                <Image
                    name="logoSmall"
                    resizeMode="contain"
                    width={logoSize}
                    height={logoSize}
                />
            </View>
        </View>
    )
}
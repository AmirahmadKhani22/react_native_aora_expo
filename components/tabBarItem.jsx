import {View , Text} from "react-native"
import Image from "@/components/image"

export function TabBarIcon({name , focused , color , size}) {
    return (
        <View>
            <Image
                name={name}
                width={size}
                height={size}
                resizeMode="contain"
                tintColor={color}
            />
        </View>
    )
}

export function TabBarLabel({focused , color , position , children}) {
    return (
        <View className="mt-2">
            <Text
                style={{color , fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular"}}
            >
                {children}
            </Text>
        </View>
    )
}

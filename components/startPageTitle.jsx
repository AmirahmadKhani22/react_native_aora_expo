import {useState} from "react"
import {View , Text} from "react-native"
import Image from "@/components/image"

const pathImageAspectRatio = 210/37
const pathImageWidth = 90
const pathImageHeight = pathImageWidth / pathImageAspectRatio

export default function StartPageTitle() {
    const [titleTextPosition , setTitleTextPosition] = useState(null)
    return (
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
    )
}
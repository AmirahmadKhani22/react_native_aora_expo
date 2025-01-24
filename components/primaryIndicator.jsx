import {View , ActivityIndicator , Text} from "react-native"

const activityIndicatorSize = 36
const activityIndicatorScaleRatio = 2.5

export default function PrimaryIndicator({children=""}) {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator animating={true} size="large" color="#ff0000" style={{width: activityIndicatorScaleRatio * activityIndicatorSize , height: activityIndicatorScaleRatio * activityIndicatorSize , transform: [{scale: activityIndicatorScaleRatio}]}}/>
            {children && <Text className="mt-5 text-2xl text-white font-psemibold">{children}</Text>}
        </View>
    )
}
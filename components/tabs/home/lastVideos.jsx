import {View , Text , FlatList} from "react-native"

export default function LastVideos() {
    // get last videos and render component if last videos exists
    return (
        <View className="w-full pt-5 pb-8">
            <Text className="mb-3 text-gray-100 text-lg font-pregular">Last Videos</Text>
            <FlatList
                data={[]}
                keyExtractor={(item , index) => index}
            />
        </View>
    )
}
import {SafeAreaView} from "react-native-safe-area-context"
import {View , FlatList} from "react-native"
import useVideo from "@/hooks/useVideo"
import PrimaryIndicator from "@/components/primaryIndicator"
import ListHeader from "@/components/tabs/home/listHeader"
import ListItem from "@/components/tabs/home/listItem"
import EmptyList from "@/components/tabs/emptyList"

const HPadding = 4 * 4

export default function Home() {
    const videos = useVideo()
    if(!videos) {
        return (
            <SafeAreaView className="min-h-[100vh] bg-primary">
                <PrimaryIndicator>
                    Getting Videos ...
                </PrimaryIndicator>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView className="min-h-[100vh] bg-primary" style={{paddingHorizontal: HPadding}}>
            <View className="w-full">
                <FlatList
                    data={videos}
                    keyExtractor={(item , index) => index}
                    renderItem={({item}) => (
                        <ListItem
                            data={item}
                        />
                    )}
                    ListHeaderComponent={() => (
                        <ListHeader />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyList 
                            title="No Videos Found"
                            subtitle="Be the first one to upload a video"
                        />
                    )}
                    initialNumToRender={3}
                />
            </View>
        </SafeAreaView>
    )
}
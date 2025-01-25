import {SafeAreaView} from "react-native-safe-area-context"
import {View , FlatList} from "react-native"
import useVideo from "@/hooks/useVideo"
import PrimaryIndicator from "@/components/primaryIndicator"
import ListHeader from "@/components/tabs/home/listHeader"
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
        <SafeAreaView className="min-h-[100vh] bg-primary">
            <View className="">
                <FlatList
                    ListHeaderComponent={() => (
                        <ListHeader />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyList 
                            HPadding={HPadding}
                            title="No Videos Found"
                            subtitle="Be the first one to upload a video"
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}
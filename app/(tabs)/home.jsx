import {SafeAreaView} from "react-native-safe-area-context"
import {View , FlatList} from "react-native"
import ListHeader from "@/components/tabs/home/listHeader"
import EmptyList from "@/components/tabs/emptyList"

const HPadding = 4 * 4

export default function Home() {
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
import {View} from "react-native"
import Welcome from "@/components/tabs/home/welcome"
import SearchInput from "@/components/tabs/home/searchInput"
import LastVideos from "@/components/tabs/home/lastVideos"

export default function ListHeader() {
    return (
        <View>
            <View className="mb-6">
                <Welcome />
                <SearchInput
                    extraContainerStyle="mt-4"
                    placeholder="Search for a video topic"
                />
            </View>
            <LastVideos />
        </View>
    )
}
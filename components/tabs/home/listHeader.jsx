import {View} from "react-native"
import Welcome from "@/components/tabs/home/welcome"
import SearchInput from "./searchInput"

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
        </View>
    )
}
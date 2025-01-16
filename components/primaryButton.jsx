import {TouchableOpacity , Text} from "react-native"

export default function PrimaryButton({
    children="", 
    handlePress= () => {}, 
    extraContainerStyle="", 
    extraContentStyle="",
    isLoading=false
}) {
    return (
        <TouchableOpacity 
            className={`bg-secondary items-center justify-center rounded-xl min-h-16 ${isLoading ? "opacity-50" : ""} ${extraContainerStyle}`}
            activeOpacity={0.7}
            onPress={handlePress}
            disabled={isLoading}
        >
            <Text className={`text-lg text-primary font-psemibold ${extraContentStyle}`}>{children}</Text>
        </TouchableOpacity>
    )
}
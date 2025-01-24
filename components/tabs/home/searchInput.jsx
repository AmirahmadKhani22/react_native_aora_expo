import {useState} from "react"
import {View , TextInput , TouchableOpacity} from "react-native"
import Image from "@/components/image"

const textInputHPadding = 4 * 4
const textInputHeight = 4 * 16
const magnifierButtonSize = 4 * 8

export default function SearchInput({
    placeholder,
    extraContainerStyle, 
    extraLabelStyle, 
    extraInputStyle, 
    placeholderColor,
    ...inputProps
}) {
    const [input , setInput] = useState("")
    const handleTextChange = text => {
        setInput(text)
    }
    const handleSearch = event => {
        // searching basis of input
    }
    return (
        <View className={`w-full relative ${extraContainerStyle ?? ""}`} style={{height: textInputHeight}}>
            <TextInput 
                className={`w-full h-full border-2 border-black-200 rounded-2xl bg-black-100 focus:border-secondary text-base text-white font-psemibold ${extraInputStyle ?? ""}`}
                style={{paddingHorizontal: textInputHPadding}}
                value={input}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor ?? "#7b7b8b"}
                onChangeText={handleTextChange}
                {...inputProps}
            />
            <TouchableOpacity 
                className="items-center justify-center"
                style={{
                    position: "absolute", 
                    right: textInputHPadding, 
                    top: textInputHeight / 2 - magnifierButtonSize / 2,
                    width: magnifierButtonSize,
                    height: magnifierButtonSize
                }}
                activeOpacity={0.6}
                onPress={handleSearch}
            >
                <Image 
                    category="icon"
                    name="search" 
                    style={{width: "100%" , height: "100%"}}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}

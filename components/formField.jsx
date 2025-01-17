import {useState , useMemo} from "react"
import {View , Text , TextInput , TouchableOpacity , Image} from "react-native"
import {icons} from "@/constants"

const textInputHPadding = 4 * 4
const textInputHeight = 4 * 16
const eyeButtonSize = 4 * 8

export default function FormField({
    label,
    placeholder,
    value,
    handleTextChange = () => {},
    extraContainerStyle, 
    extraLabelStyle, 
    extraInputStyle, 
    placeholderColor,
    isSecureTextRequired,
    ...inputProps
}) {
    const [shownSecureText , setShownSecureText] = useState(false)
    const _isSecureTextRequired = useMemo(() => {
        return isSecureTextRequired ?? label.match(/password/i)
    })
    console.log(inputProps)
    return (
        <View className={`gap-y-2 ${extraContainerStyle ?? ""}`}>
            <Text className={`text-base text-gray-100 font-pmedium ${extraLabelStyle ?? ""}`}>{label}</Text>
            <View className="w-full relative" style={{height: textInputHeight}}>
                <TextInput 
                    className={`w-full h-full border-2 border-black-200 rounded-2xl bg-black-100 focus:border-secondary text-base text-white font-psemibold ${extraInputStyle ?? ""}`}
                    style={{paddingHorizontal: textInputHPadding}}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderColor ?? "#7b7b8b"}
                    onChangeText={handleTextChange}
                    secureTextEntry={_isSecureTextRequired && !shownSecureText}
                    {...inputProps}
                />
                {
                    _isSecureTextRequired && <TouchableOpacity 
                        className="items-center justify-center"
                        style={{
                            position: "absolute", 
                            right: textInputHPadding, 
                            top: textInputHeight / 2 - eyeButtonSize / 2,
                            width: eyeButtonSize,
                            height: eyeButtonSize
                        }}
                        activeOpacity={0.6}
                        onPress={event => {setShownSecureText(state => !state)}}
                    >
                        <Image 
                            source={shownSecureText ? icons["eyeHide"] : icons["eye"]} 
                            resizeMode="contain"
                            className="flex-1"
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

import {useState} from "react"
import {Alert , View} from "react-native"
import FormField from "@/components/formField"
import PrimaryButton from "@/components/primaryButton"
import {signIn} from "../appwrite/auth"
import {router} from "expo-router"

export default function SignUpForm() {
    const [formData , setFormData] = useState({
        email: "",
        password: ""
    })
    const [isSubmitting , setIsSubmitting] = useState(false)

    const submit = async event => {
        for(const item in formData) {
            formData[item] = formData[item].trim()
            if(!formData[item]) {
                return Alert.alert("Error" , "fill form data completely!")
            }
        }
        try {
            await signIn(formData.email , formData.password)
            setIsSubmitting(state => !state)

            // store user data in redux

            router.replace("/home")
        } catch(error) {
            return Alert.alert("Error" , error.message)
        }
    }

    return (
        <View className="mt-14 gap-y-6">
            <FormField 
                label="Email"
                handleTextChange={text => {setFormData(state => ({...state , email: text}))}}
                inputMode="email"
                keyboardType="email-address"
            />
            <FormField 
                label="Password"
                handleTextChange={text => {setFormData(state => ({...state , password: text}))}}
            />
            <PrimaryButton
                handlePress={submit}
                isLoading={isSubmitting}
            >
                Sign In
            </PrimaryButton>
        </View>
    )
}
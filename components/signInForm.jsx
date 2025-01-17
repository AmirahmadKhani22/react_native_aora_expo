import {useState} from "react"
import {View} from "react-native"
import FormField from "@/components/formField"
import PrimaryButton from "@/components/primaryButton"

export default function SignUpForm() {
    const [formData , setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isSubmitting , setIsSubmitting] = useState(false)

    const submit = async event => {
        // setIsSubmitting(state => !state)
        // await to send form data through fetch or react query or axios, with method post, in request body
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
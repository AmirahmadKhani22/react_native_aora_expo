import {useState} from "react"
import {Alert , View} from "react-native"
import FormField from "@/components/formField"
import PrimaryButton from "@/components/primaryButton"
import {signIn , getSignedInUser} from "../appwrite/auth"
import {router} from "expo-router"
import {useDispatch} from "react-redux"
import {setUserData} from "../redux/slices/user"

export default function SignUpForm() {
    const userDispatch = useDispatch()
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
            const user = await getSignedInUser()
            console.log(user)
            userDispatch(setUserData(user))
            setIsSubmitting(state => !state)
            setTimeout(() => router.replace("/home") , 500)
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
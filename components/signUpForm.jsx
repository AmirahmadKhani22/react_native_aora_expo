import {useState} from "react"
import {Alert , View} from "react-native"
import FormField from "@/components/formField"
import PrimaryButton from "@/components/primaryButton"
import {signUp} from "../appwrite/auth"
import {router} from "expo-router"
import {useDispatch} from "react-redux"
import {setUserData , setUserNoData} from "../redux/slices/user"
import {setAuthStatusUnauthorized , setAuthStatusAuthorized} from "../redux/slices/authStatus"

export default function SignUpForm() {
    const userDispatch = useDispatch()
    const authStatusDispatch = useDispatch()
    const [formData , setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const submit = async event => {
        for(const item in formData) {
            formData[item] = formData[item].trim()
            if(!formData[item]) {
                return Alert.alert("Error" , "fill form data completely!")
            }
        }
        try {
            const user = await signUp(formData.username , formData.email , formData.password)
            authStatusDispatch(setAuthStatusAuthorized())
            userDispatch(setUserData(user))
            router.replace("/Home")
        } catch(error) {
            authStatusDispatch(setAuthStatusUnauthorized())
            userDispatch(setUserNoData())
            return Alert.alert("Error" , error.message)
        }
    }

    return (
        <View className="mt-14 gap-y-6">
            <FormField 
                label="Username"
                handleTextChange={text => {setFormData(state => ({...state , username: text}))}}
            />
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
            >
                Sign Up
            </PrimaryButton>
        </View>
    )
}
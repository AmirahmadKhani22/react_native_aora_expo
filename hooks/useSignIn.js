import {useEffect} from "react"
import {useDispatch , useSelector} from "react-redux"
import {getSignedInUser} from "../appwrite/auth"
import {setUserData , setUserNoData} from "../redux/slices/user"
import {setAuthStatusUnauthorized , setAuthStatusAuthorized} from "../redux/slices/authStatus"
import { Alert } from "react-native"

export default function useSingIn() {
    const authStatus = useSelector(state => state.authStatus)
    const user = useSelector(state => state.user)
    const authStatusDispatch = useDispatch()
    const userDispatch = useDispatch()
    useEffect(() => {
        getSignedInUser()
        .then(userData => {
            authStatusDispatch(setAuthStatusAuthorized())
            userDispatch(setUserData(userData))
        })  
        .catch(error => {
            authStatusDispatch(setAuthStatusUnauthorized())
            userDispatch(setUserData({}))
            Alert.alert("Error" , error.message)
            console.log(error)
        })
    })
    return [authStatus , user]
}

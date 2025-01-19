import {Account , Avatars , ID} from 'react-native-appwrite'
import {client , database , appWriteConfig} from "../index"

const account = new Account(client)
const avater = new Avatars(client)

export async function signUp(username , email , password) {
    const avaterUrl = avater.getInitials(username)
    const userAccount = await account.create(ID.unique() , email , password , username)
    await database.createDocument(
        appWriteConfig.databaseId, 
        appWriteConfig.userCollectionId, 
        ID.unique(), 
        {
            username,
            email,
            password,
            avater: avaterUrl
        }
    )
    await signIn(userAccount.email , userAccount.password)
    return userAccount
}

export async function signIn(email , password) {
    return await account.createEmailPasswordSession(email , password)
}

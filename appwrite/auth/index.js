import {Account , Avatars , ID , Query} from 'react-native-appwrite'
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
            accountId: userAccount.$id,
            username,
            email,
            password,
            avater: avaterUrl
        }
    )
    await signIn(email , password)
    return userAccount
}

export async function signIn(email , password) {
    return await account.createEmailPasswordSession(email , password)
}

export async function getSignedInUser() {
    try {
        const userAccount = await account.get()
        const signedInUser = await database.listDocuments(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            [Query.equal("accountId" , userAccount.$id)]
        )
        return signedInUser.documents[0]
    } catch(error) {
        console.log(error)
        return null
    }
}

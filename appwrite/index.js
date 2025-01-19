import {Client} from 'react-native-appwrite'

const appWriteConfig = {
    endpoint: "https://cload.appwrite.io/v1",
    projectId: "678ce9490025b061ba67",
    platform: "com.amirahmadkhani.react_native_aora_expo_tutorial",
    databaseId: "678cf42f002c0c5cdbd1",
    userCollectionId: "678cf483002ba20202b1",
    videoCollectionId: "678cf4bf00306fac1bf1",
    filesStorageId: "678cf798001853fa7822"
}

const client = new Client()
client
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId)
    .setPlatform(appWriteConfig.platform)

export {client , appWriteConfig}

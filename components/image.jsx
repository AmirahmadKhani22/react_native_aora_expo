import {Image as RNImage} from "react-native"
import {images} from "../constants"

export default function Image({name , source , width , height , aspectRatio , style={} , ...others}) {
    return (
        <RNImage
            source={name ? images[name] : source}
            style={{width , height: height ?? width / aspectRatio , ...style}}
            {...others}
        />
    )
}
 
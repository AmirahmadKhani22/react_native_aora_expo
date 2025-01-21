import {Image as RNImage} from "react-native"
import {images , icons} from "../constants"

export default function Image({
    category="image",
    name, 
    source, 
    width, 
    height, 
    aspectRatio, 
    style={}, 
    ...others
}) {
    let _category
    if(category === "image") {
        _category = images
    }
    if(category === "icon") {
        _category = icons
    }
    return (
        <RNImage
            source={name ? _category[name] : source}
            style={{width , height: height ?? width / aspectRatio , ...style}}
            {...others}
        />
    )
}
 
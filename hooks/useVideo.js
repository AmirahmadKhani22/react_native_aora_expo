import {useEffect} from "react"
import {useSelector , useDispatch} from "react-redux"

export default function useVideo() {
    const videos = useSelector(state => state.video)
    const videosDispatch = useDispatch()
    useEffect(() => {
        // fetch videos and dispatch set videos action
    } , [])
    return videos
}

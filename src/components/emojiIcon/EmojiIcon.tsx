import {ImAngry, ImHappy, ImSmile, ImCool, ImSad, ImNeutral} from 'react-icons/im'

type IconPropType = {
    size:string,
    type:string 
}

const EmojiIcon = ({type, size}: IconPropType) => {
    if(type === "angry"){
        return <ImAngry size={size} color={"red"}/>
    }else if(type === "cool"){
        return <ImCool size={size} color={"yellowgreen"}/>
    }else if(type === "sad"){
        return <ImSad size={size} color={"blue"}/>
    }else if(type === "neutral"){
        return <ImNeutral size={size} color={"lightblue"}/>
    }else if(type === "happy"){
        return <ImSmile size={size} color={"green"}/>
    }
    return <ImNeutral size={size} color={"yellow"}/>
}

export default EmojiIcon;
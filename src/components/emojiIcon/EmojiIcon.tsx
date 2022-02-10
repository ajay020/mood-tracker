import {ImAngry, ImHappy, ImSmile, ImCool, ImSad, ImNeutral} from 'react-icons/im'

type IconPropType = {
    size:string,
    type:string,
    color?:string
}

const EmojiIcon = ({type, size, color}: IconPropType) => {
    console.log("EmojiIcon");

    if(type === "angry"){
        return <ImAngry size={size} color={ color ? color :"red"}/>
    }else if(type === "cool"){
        return <ImCool size={size} color={color ? color :"green"}/>
    }else if(type === "sad"){
        return <ImSad size={size} color={color ? color :"purple"}/>
    }else if(type === "okay"){
        return <ImNeutral size={size} color={color ? color :"teal"}/>
    }else if(type === "happy"){
        return <ImSmile size={size} color={color ? color :"orange"}/>
    }
    return <ImNeutral size={size} color={color ? color :"yellow"}/>
}

export default EmojiIcon;
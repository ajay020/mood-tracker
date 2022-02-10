import { useState } from "react";
import styled from "styled-components";
import { EmojiIcon } from "..";

export const EmojiWrapper = styled.span`
    margin: 0 8px;
    cursor: pointer;
    /* background:pink; */
    &:hover{
        /* background:pink; */
        transform: translate(.3px, .4px);
    }
`
export const EmojiCaption = styled.span`
 text-align: center;
 font-size:14px;
 line-height: 18px;
 display:block;
 color : ${({color}) => color};
`

type EmojiPropType = {
    size: string,
    chosenEmoji:string,
    handleChosenEmoji : (emoji:string) => void 
}

const EmojiSelector = ({ size, chosenEmoji, handleChosenEmoji }: EmojiPropType) => {
    const [selectedEmoji, setSelectedEmoji] = useState(chosenEmoji);

    const handleEmoji = (emoji: string) =>{
        setSelectedEmoji(emoji);
        handleChosenEmoji(emoji);
    }
    console.log("Emojis");

    return (
        <>
            <EmojiWrapper onClick={() => handleEmoji("angry")}>
              <EmojiIcon size={"35px"} type="sad" color={selectedEmoji === "angry" ? "red" : "gray"}/>
              <EmojiCaption color = {selectedEmoji === "angry" ? "red" : ""} >Angry</EmojiCaption>
            </EmojiWrapper>
            <EmojiWrapper onClick={() => handleEmoji("sad")}>
                <EmojiIcon size={"35px"} type="sad"  color={selectedEmoji === "sad" ? "purple" : "gray"}/>
                <EmojiCaption color={selectedEmoji === "sad" ? "purple" : "gray"}>Sad</EmojiCaption>
            </EmojiWrapper>
            <EmojiWrapper onClick={() => handleEmoji("okay")}>
                <EmojiIcon size={"35px"} type="okay" color={selectedEmoji === "okay" ? "teal" : "gray"}/>
                <EmojiCaption color={selectedEmoji === "okay" ? "teal" : "gray"}>Okay</EmojiCaption>
            </EmojiWrapper>
            <EmojiWrapper onClick={() => handleEmoji("cool")}>
                <EmojiIcon size={"35px"} type="cool" color={selectedEmoji === "cool" ? "green" : "gray" }/>
                <EmojiCaption color={selectedEmoji === "cool" ? "green" : "gray"} >Cool</EmojiCaption>
            </EmojiWrapper>
            <EmojiWrapper onClick={() => handleEmoji("happy")}>
                <EmojiIcon size={"35px"} type="happy" color={selectedEmoji === "happy" ? "orange" : "gray"}/>
                <EmojiCaption color={selectedEmoji === "happy" ? "orange" : "gray"} >Happy</EmojiCaption>
            </EmojiWrapper>
        </>
      );
}

export default EmojiSelector;
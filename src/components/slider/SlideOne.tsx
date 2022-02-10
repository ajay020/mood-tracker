import { EmojiSelector } from "..";
import { EmojiContainer, EmotionContainer, HeadingText } from "../addEmotions/AddEmotion.element";

type SlideOnePropsType = {
    chosenEmoji: string,
    handleChosenEmoji:(emoji:string) => void 
}

const SlideOne = ({chosenEmoji, handleChosenEmoji}:SlideOnePropsType) => {
    console.log("SliderOne");
    return (
            <EmotionContainer>
                <HeadingText fontSize="medium">How are you doing?</HeadingText>
                <EmojiContainer>
                    <EmojiSelector size="32px" chosenEmoji = {chosenEmoji} handleChosenEmoji={handleChosenEmoji} />
                </EmojiContainer>
            </EmotionContainer>
        );
}

export default SlideOne;
import { EmotionContainer, HeadingText } from "../addEmotions/AddEmotion.element";
import Emotions from './../emotions/Emotions';

type SlideThreePropType = {
    chosenEmotions: string[],
    handleChosenEmotions:(emoji:string) => void 
}

const SlideThree = ({chosenEmotions,handleChosenEmotions}:SlideThreePropType) => {

    console.log("SliderThree");
    
    return (
        <EmotionContainer>
            <HeadingText  fontSize="medium">What activities have you been doing?</HeadingText>
            <Emotions
                emotionType="activities" 
                handleChosenEmotions={handleChosenEmotions}
                chosenEmotions={chosenEmotions}
            />
        </EmotionContainer>
    )
}
export default SlideThree; 
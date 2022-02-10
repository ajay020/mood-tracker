import { useState } from "react";
import styled from 'styled-components';
import { EmotionContainer, HeadingText } from "../addEmotions/AddEmotion.element";
import { Emotions } from "..";

const EmotionTabs = styled.div`
    display:flex;
    justify-content: space-evenly;
    /* background: grey; */
    width: 100%;
`
type SlideTwoPropTypes = {
    chosenEmotions:string[],
    handleChosenEmotions:(emotion:string)=> void 
}

const SlideTwo = ({chosenEmotions,handleChosenEmotions }:SlideTwoPropTypes) =>{
    const [emotionType, setEmotionType] = useState("positive");

    console.log("SliderTwo");

    const selectPositive = () =>{
        setEmotionType("positive");
    }
    const selectNegative = () =>{
        setEmotionType("negative");
    }
    return (
        <EmotionContainer>
        <HeadingText  fontSize="medium">What emotions are you experincing?</HeadingText>
            <EmotionTabs>
                <HeadingText
                onClick={selectPositive} 
                bottomBorder={emotionType === "positive"}
                fontSize="small">
                    Positive
                </HeadingText>
                <HeadingText 
                onClick={selectNegative} 
                bottomBorder={emotionType === "negative"} 
                fontSize="small">
                    Negative
                </HeadingText>
            </EmotionTabs>
            {
                emotionType
                    ? <Emotions
                        chosenEmotions={chosenEmotions}
                        emotionType = {emotionType}
                        handleChosenEmotions={handleChosenEmotions} /> 
                    : <Emotions
                        chosenEmotions={chosenEmotions}
                        emotionType = {emotionType} 
                        handleChosenEmotions = {handleChosenEmotions}/>
            }

        </EmotionContainer>
        )
}

export default SlideTwo;
import { useCallback, useState } from "react";
import { IconContext } from "react-icons/lib";
import { v4 as uuidv4 } from 'uuid';
import { negativeEmotions, positiveEmotions, activities } from './../../data';
import { useAppDispatch } from "../../app/hook";
import { addEmotion } from "../../features/emotionSlice";
import React from 'react';
import {
    ImWondering,
    ImNeutral,
    ImConfused,
    ImCrying,
    ImAngry,
    ImFrustrated,
    ImSmile,
    ImCool,
    ImSad
  } from "react-icons/im";

  import * as i from 'react-icons/fa';
import styled from 'styled-components';
import {
        CardWrapper,
        EmojiContainer,
        EmotionChipWrapper, 
        EmotionChip,
        HeadingText,
        EmotionContainer,
        EmotionTabs,
        EmojiWrapper,
        EmojiCaption,
        Slider,
        SliderContent,
        LeftArrow,
        RightArrow
    } from "./AddEmotion.element";
import SliderFour from "../slider/SliderFour";


type EmojiPropType = {
    size: string,
    chosenEmoji:string,
    handleChosenEmoji : (emoji:string) => void 
}


const Emojis = React.memo(({ size, chosenEmoji, handleChosenEmoji }: EmojiPropType) => {
    const [selectedEmoji, setSelectedEmoji] = useState(chosenEmoji);

    const handleEmoji = (emoji: string) =>{
        setSelectedEmoji(emoji);
        handleChosenEmoji(emoji);
    }

  return (
    <>
        <EmojiWrapper onClick={() => handleEmoji("angry")}>
          <ImAngry size={size} color={selectedEmoji === "angry" ? "red" : ""} />
          <EmojiCaption color = {selectedEmoji === "angry" ? "red" : ""} >Angry</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("sad")}>
            <ImSad size={size} color={selectedEmoji === "sad" ? "blue" : ""}  />
            <EmojiCaption color={selectedEmoji === "sad" ? "blue" : ""}>Sad</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("neutral")}>
            <ImNeutral size={size}color={selectedEmoji === "neutral" ? "lightblue" : ""}  />
            <EmojiCaption color={selectedEmoji === "neutral" ? "lightblue" : ""}>Okay</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("cool")}>
            <ImCool size={size}color={selectedEmoji === "cool" ? "yellowgreen" : ""}  />
            <EmojiCaption color={selectedEmoji === "cool" ? "yellowgreen" : ""} >Cool</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("happy")}>
            <ImSmile size={size}color={selectedEmoji === "happy" ? "green" : ""}  />
            <EmojiCaption color={selectedEmoji === "happy" ? "green" : ""} >Happy</EmojiCaption>
        </EmojiWrapper>
    </>
  );
})

type EmotionsProp = {
    emotionType:string 
    handleChosenEmotions: (emotion:string)=> void 
    chosenEmotions: string[]
}

const Emotions = ({emotionType, handleChosenEmotions, chosenEmotions}: EmotionsProp) => {

  const chooseEmotion = emotionType === "positive" ?
                        positiveEmotions : (emotionType === "negative" ?
                        negativeEmotions : activities);
                   
  return (
    <EmotionChipWrapper>
      {chooseEmotion.map((emotion) => (
        <EmotionChip 
        cursor="true"
        onClick={()=> handleChosenEmotions(emotion)}
        key={emotion}
        selected={chosenEmotions.includes(emotion)}
        >
            {emotion}
        </EmotionChip>
      ))}
    </EmotionChipWrapper>
  );
};

const AddEmotions = () => {
    const [emotionType, setEmotionType] = useState("positive");
    const [chosenEmotions, setChosenEmotions] = useState<string[]>([]);
    const [chosenEmoji, setChosenEmoji] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const dispatch = useAppDispatch();

    const selectPositive = () =>{
        setEmotionType("positive");
    }
    const selectNegative = () =>{
        setEmotionType("negative");
    }

    console.log("parent");

    const handleChosenEmotions = (emotion:string) =>{
        setChosenEmotions(prevChosen => {
            return (
                prevChosen.includes(emotion)
                    ? prevChosen.filter(em => em !== emotion)
                    : [...prevChosen, emotion]);
        })  ; 
       
    }

    const handleChosenEmoji  = useCallback( (emoji: string) =>{
        setChosenEmoji(emoji);
    },[chosenEmoji]);
   

    const handleAddEmotions = (emotionDescription: string)=>{
        const newEmotion = {
            id: uuidv4(),
            date: new Date().getMilliseconds().toString(),
            chosenEmoji,
            chosenEmotions,
            emotionDescription
        }
        if(chosenEmoji){
            dispatch(addEmotion(newEmotion))
        }
        setChosenEmoji("");
        setChosenEmotions([]);
        setCurrentIndex(0);
    }

    const SlideOne = () => {
        return (
                <EmotionContainer>
                    <HeadingText fontSize="medium">How are you doing?</HeadingText>
                    <EmojiContainer>
                        <Emojis size="32px" chosenEmoji = {chosenEmoji} handleChosenEmoji={handleChosenEmoji} />
                    </EmojiContainer>
                </EmotionContainer>
            );
    }

    const SlideTwo = () =>{
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

    const SlideThree = () => {
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
    const SlideFour = () => <SliderFour handleAddEmotions={handleAddEmotions}/>
      
    const slides = [SlideOne, SlideTwo, SlideThree, SlideFour];

    const prvSlide = () =>{
        setCurrentIndex( (prvIndex) => {
            if(prvIndex != 0){
                return prvIndex-1;
            }
            return prvIndex;
        });
    }
    const nextSlide = () =>{
        setCurrentIndex(prvIndex =>{
            if(prvIndex < slides.length-1){
                return prvIndex+1;
            }
            return prvIndex;
        });
    }

  return (
      <IconContext.Provider value={{color:'darkgray'}}>
        <CardWrapper>
                <Slider>
                    <LeftArrow 
                     currentIndex={currentIndex === 0 ? 1 : 0}
                     onClick={prvSlide} size={30}
                     />
                    <SliderContent>
                        {
                            slides.map((Slide, index) => {
                                return (currentIndex == index)&& <Slide key={index}/>
                            })
                        }
                    </SliderContent>
                    <RightArrow 
                        currentIndex={currentIndex === slides.length-1 ? 1 : 0}
                        onClick={nextSlide}  size={30}
                        />
                </Slider>
        </CardWrapper>
    </IconContext.Provider>
  );
};

export default AddEmotions;

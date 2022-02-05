import { useState } from "react";
import { IconContext } from "react-icons/lib";
import { v4 as uuidv4 } from 'uuid';
import {
    ImWondering,
    ImNeutral,
    ImNeutral2,
    ImConfused,
    ImCrying,
    ImAngry,
    ImAngry2,
    ImFrustrated,
    ImFrustrated2,
    ImSmile,
    ImSmile2,
    ImCool,
    ImSad
  } from "react-icons/im";


import {
        CardWrapper,
        EmojiContainer,
        StyledInput, 
        EmotionChipWrapper, 
        ButtonSave ,
        EmotionChip,
        HeadingText,
        EmotionContainer,
        EmotionHeading,
        EmojiWrapper,
        EmojiCaption,
        Angry,
    } from "./AddEmotion.element";
import { negativeEmotions, positiveEmotions, activities } from './../../data';
import { useAppDispatch } from "../../app/hook";
import { addEmotion } from "../../features/emotionSlice";

type EmojiPropType = {
    size: string,
    color: string ,
    handleChosenEmoji : (emoji:string) => void 
}

const Emojis = ({ size, color="gray", handleChosenEmoji }: EmojiPropType) => {
    const [selectedEmoji, setSelectedEmoji] = useState("");

    const handleEmoji = (emoji: string) =>{
        handleChosenEmoji(emoji);
        setSelectedEmoji(emoji);
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
};

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
    const [emotionDesc, setEmotionDesc] = useState<string>("");

    const dispatch = useAppDispatch();

    const selectPositive = () =>{
        setEmotionType("positive");
    }
    const selectNegative = () =>{
        setEmotionType("negative");
    }

    const handleChosenEmotions = (emotion:string) =>{
        setChosenEmotions(prevChosen => {
            return (
                prevChosen.includes(emotion)
                    ? prevChosen.filter(em => em !== emotion)
                    : [...prevChosen, emotion]);
        })  ; 
       
    }
    const handleChosenEmoji = (emoji: string) =>{
        setChosenEmoji(emoji);
    }

    const handleAddEmotions = ()=>{
        const newEmotion = {
            id: uuidv4(),
            chosenEmoji,
            chosenEmotions,
            emotionDesc
        }
        if(chosenEmoji){
            dispatch(addEmotion(newEmotion))
        }
        // console.log(newEmotion);
        setChosenEmoji("");
        setChosenEmotions([]);
        setEmotionDesc("");
    }

  return (
      <IconContext.Provider value={{color:'black'}}>
        <CardWrapper>
            <HeadingText fontSize="medium">How are you doing?</HeadingText>
            <EmojiContainer>
                <Emojis size="32px" color="gray" handleChosenEmoji={handleChosenEmoji} />
            </EmojiContainer>
            <HeadingText  fontSize="medium">What emotions are you experincing?</HeadingText>

            <EmotionContainer>
                <EmotionHeading>
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
                </EmotionHeading>
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

                <HeadingText  fontSize="medium">What activities have you been doing?</HeadingText>
                <Emotions
                    emotionType="activities" 
                    handleChosenEmotions={handleChosenEmotions}
                    chosenEmotions={chosenEmotions}
                />
            </EmotionContainer>

            <StyledInput
              value={emotionDesc}
               onChange={(e) => setEmotionDesc(e.target.value)} 
              placeholder="Describe your emotions..." />
            <ButtonSave onClick={handleAddEmotions}>Save</ButtonSave>
        </CardWrapper>
    </IconContext.Provider>
  );
};

export default AddEmotions;

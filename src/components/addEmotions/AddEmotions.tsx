import { useState } from "react";
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
  } from "react-icons/im";

  import { IconContext } from "react-icons/lib";

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
        <EmojiWrapper onClick={() => handleEmoji("frustrated")}>
            <ImFrustrated size={size} color={selectedEmoji === "frustrated" ? "orange" : ""}  />
            <EmojiCaption color={selectedEmoji === "frustrated" ? "orange" : ""}>Frustrated</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("neutral")}>
            <ImNeutral size={size}color={selectedEmoji === "neutral" ? "lightblue" : ""}  />
            <EmojiCaption color={selectedEmoji === "neutral" ? "lightblue" : ""}>Okay</EmojiCaption>
        </EmojiWrapper>
        <EmojiWrapper onClick={() => handleEmoji("wondering")}>
            <ImWondering size={size}color={selectedEmoji === "wondering" ? "blue" : ""}  />
            <EmojiCaption color={selectedEmoji === "wondering" ? "blue" : ""} >Wondering</EmojiCaption>
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
    const [selected, setSelected] = useState(false);

  let negativeEmotions = [
    "Lost",
    "Worried",
    "Confused",
    "Happy",
    "Sad",
    "Frustrated",
    "stressed",
    "Overwelming",
  ];

  let positiveEmotions = [
      "Happy",
      "Excited",
      "Calm",
      "Content",
      "Hopeful"
  ]

  let activities = [
      "Work", "Family", "Exercise", "Food", "Games", "Shopping", "Hobby"
  ]

  const chooseEmotion = emotionType === "positive" ?
                        positiveEmotions : (emotionType === "negative" ?
                        negativeEmotions : activities);


  const handleSelected = () =>{
      setSelected(preSelected => !preSelected);
  }                      

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
    const [chosenEmoji, setChosenEmoji] = useState("");

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
    // console.log(chosenEmotions);

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
            <Emotions emotionType="activities" handleChosenEmotions={handleChosenEmotions} chosenEmotions={chosenEmotions}/>
            </EmotionContainer>

            <StyledInput placeholder="Describe your emotions..." />
            <ButtonSave>Save</ButtonSave>
        </CardWrapper>
    </IconContext.Provider>
  );
};

export default AddEmotions;

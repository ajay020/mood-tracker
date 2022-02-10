import React,{ useState } from 'react';
import styled from "styled-components";
import { EmotionContainer } from "../addEmotions/AddEmotion.element";

export const StyledInput = styled.textarea`
  padding: 10px;
  margin-top: 8px;
  border: none;
  outline:none;
  margin: 12px 0;
  box-sizing: border-box;
  width:100%;
  resize:vertical;
  min-height: 100px;
`;
export const ButtonSave = styled.button`
  background: black;
  padding: 8px 12px;
  border: none;
  color: white;
  width:40%;
  margin: 0 auto;
  cursor:pointer;
`;

type SlideFourPropsType = {
    handleAddEmotions: (emotinDescription: string) => void 
}

const SlideFour = ({handleAddEmotions}: SlideFourPropsType) =>{
    const [emotionDescription, setEmotionDescription] = useState("");
    console.log("SliderFour");

    return ( 
        <EmotionContainer>
            <StyledInput
                value={emotionDescription}
                onChange={(e) => setEmotionDescription(e.target.value)} 
                placeholder="Describe your emotions..."
                />
            <ButtonSave onClick={() => handleAddEmotions(emotionDescription)}>Save</ButtonSave>
        </EmotionContainer>
   )
}

export default React.memo( SlideFour);
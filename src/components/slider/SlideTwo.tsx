import React, { useState } from "react";
import styled from "styled-components";
import {
  EmotionContainer,
  HeadingText,
} from "../addEmotions/AddEmotion.element";
import { Emotions } from "..";

const EmotionTabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
type SlideTwoPropTypes = {
  chosenEmotions: string[];
  handleChosenEmotions: (emotion: string) => void;
};

let selectedTab: string = "positive";

const SlideTwo = ({
  chosenEmotions,
  handleChosenEmotions,
}: SlideTwoPropTypes) => {
  const [emotionType, setEmotionType] = useState(selectedTab);

  console.log("SliderTwo");

  const selectPositive = () => {
    setEmotionType("positive");
    selectedTab = "positive";
  };
  const selectNegative = () => {
    setEmotionType("negative");
    selectedTab = "negative";
  };
  return (
    <EmotionContainer>
      <HeadingText fontSize="medium">
        What emotions are you experincing?
      </HeadingText>
      <EmotionTabs>
        <HeadingText
          onClick={selectPositive}
          bottomBorder={selectedTab === "positive"}
          fontSize="small"
        >
          Positive
        </HeadingText>
        <HeadingText
          onClick={selectNegative}
          bottomBorder={selectedTab === "negative"}
          fontSize="small"
        >
          Negative
        </HeadingText>
      </EmotionTabs>
      {emotionType ? (
        <Emotions
          chosenEmotions={chosenEmotions}
          emotionType={emotionType}
          handleChosenEmotions={handleChosenEmotions}
        />
      ) : (
        <Emotions
          chosenEmotions={chosenEmotions}
          emotionType={emotionType}
          handleChosenEmotions={handleChosenEmotions}
        />
      )}
    </EmotionContainer>
  );
};

export default React.memo(SlideTwo);

import { negativeEmotions, positiveEmotions, activities } from './../../data';
import styled from 'styled-components';

type EmotionsProp = {
    emotionType:string 
    handleChosenEmotions: (emotion:string)=> void 
    chosenEmotions: string[]
}

type EmotionChipPropType = {
    selected?:boolean 
    cursor?: string
}

export const EmotionChip = styled.span<EmotionChipPropType>`
  padding: 1px 4px;
  border: solid 1px gray;
  border-radius: 12px;
  margin: 2px 2px;
  font-size: 14px;
  cursor: ${({cursor}) => cursor ? "pointer": ""};
  background: ${({selected}:EmotionChipPropType) => selected ? "darkblue":"" };
  color: ${({selected}:EmotionChipPropType) => selected ? "white" : "black"};

`;

export const EmotionChipWrapper = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
  width:70%;
  justify-content:center;
`;

const Emotions = ({emotionType, handleChosenEmotions, chosenEmotions}: EmotionsProp) => {

    const chooseEmotion = emotionType === "positive" ?
                          positiveEmotions : (emotionType === "negative" ?
                          negativeEmotions : activities);
     
      console.log("Emotions");
                     
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

  export default Emotions;
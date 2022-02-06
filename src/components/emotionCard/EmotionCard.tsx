import styled from 'styled-components';
import { EmotionType } from '../../features/emotionSlice';
import { EmotionChip } from '../addEmotions/AddEmotion.element';
import Moment from 'react-moment';
import { EmojiIcon } from '..';

const CardWrapper = styled.div`
    border: 1px solid black;
    background-color: lightgray;
    width: 60%;
    margin:4px auto;
    display:flex;
    flex-direction: column;
    padding: .2rem .5rem;
    box-sizing: border-box;
`
const CardHeader = styled.div`
    /* background:purple; */
    display:flex;
    align-items: center;
`
const CardBody = styled.div`
    /* background:red; */
    margin-top: 4px;
    text-align:start;
`

const CardDate = styled(Moment)`
    /* background: olive; */
`

const CardImg = styled.div`
    width: 42px;
    height: 42px;
    /* background: yellow; */
    margin-right: 12px;
`
type CardTitleProps = {
    fontWeight: string  
}
const CardTitle = styled.h4<CardTitleProps>`
    /* background: pink; */
    line-height: 18px;
    margin:0;
    padding:0;
    text-align: start;
    font-weight: ${({fontWeight}) => fontWeight};
`
const CardHeaderInfo = styled.div`
    /* background: black; */
`

const Wrapper = styled.div`
    /* background:goldenrod; */
    margin:8px 0;
    display:flex;
    flex-wrap: wrap;
`
const CardBodyContent = styled.div`
`

type EmotionCardPropType = {
 emotion : EmotionType    
}


const EmotionCard = ({emotion}: EmotionCardPropType) => {

    return (
        <CardWrapper>
            <CardHeader>
                <CardImg>
                    <EmojiIcon type={emotion.chosenEmoji} size={"35px"} />
                </CardImg>
                <CardHeaderInfo>
                    <CardDate format="hh:mm A">
                        {emotion.date} 
                    </CardDate> 
                    <CardTitle fontWeight={"500"}>
                       
                        {emotion.chosenEmoji}
                    </CardTitle>   
                 </CardHeaderInfo>
            </CardHeader>
            <CardBody>
                <Wrapper>
                    {
                        emotion.chosenEmotions.map(em => <EmotionChip key={em}>{em}</EmotionChip>)
                    }
                </Wrapper>
                <CardBodyContent>
                    {emotion.emotionDesc}
              </CardBodyContent>
            </CardBody>
        </CardWrapper>
    );
  };
  
  export default EmotionCard;
  
import styled from 'styled-components';


const CardWrapper = styled.div`
    border: 1px solid black;
    background-color: lightgray;
    width: 60%;
    margin:4px auto;
    padding: .2rem .5rem;
`
const EmojiContainer = styled.div`
    display: flex;
    background-color: green;
    justify-content: space-between;
    padding: .2rem;
`

const EmotionCard = () => {
    return (
        <CardWrapper>
                Emotion card
        </CardWrapper>
    );
  };
  
  export default EmotionCard;
  
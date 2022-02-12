import styled from "styled-components";
import { useAppSelector } from "../app/hook";
import { BarChart, CalendarChart } from "../components";
import { getEmotions } from "../features/emotionSlice";
import { colors, device } from "../GlobalStyles";

const Container = styled.div`
    /* background: black; */
    margin-top: 4rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    @media ${device.mobileS}{
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }
    @media ${device.laptop}{
        flex-direction:row;
    }
`
const CalanderContainer = styled.div`
    /* background: peru; */
    width: 40%;
    /* height: 380px; */

    @media ${device.mobileS}{
        width: 70%;
    }
    @media ${device.laptop}{
        width: 40%;
        height: 350px;
        margin: 0 .5rem 0 2rem;

    }
   
`
const HeadingText = styled.h2`
    color: white;
    background: ${colors.primaryBlue};
    padding: 1rem;
    margin:0;
`
const BarGrapContainer = styled.div`
    background: darkblue;
    width: 40%;
    /* height: 380px; */
    /* margin: 0 2rem 0 .5rem; */
    @media ${device.mobileS}{
        width: 70%;
        margin-top: 8px;
    }
    @media ${device.laptop}{
        width: 40%;
        height: 350px;
        margin: 0 2rem 0 .5rem;
    }
`


const Stats  = () => {

    const emotions = useAppSelector(getEmotions)

    let moodCount:{[key:string]: number}  = {
        angry:0,
        sad:0,
        neutral:0,
        cool:0,
        happy:0,
    };

    emotions.forEach(em => {
        if(em.chosenEmoji){
            moodCount[em.chosenEmoji]++;
        }
    });

    let moodFrequencies =  Object.values( moodCount);

    return (<Container>
        <CalanderContainer>
             <HeadingText>Monthly Mood Data </HeadingText>
             <CalendarChart/>
        </CalanderContainer>
        <BarGrapContainer>
            <HeadingText>Monthly Mood Data </HeadingText>
            <BarChart moodFrequencies={moodFrequencies} />
        </BarGrapContainer>
    </Container>)
}

export default Stats;
import styled from "styled-components";
import { useAppSelector } from "../app/hook";
import { AddEmotions, BarChart, CalendarChart, EmotioncardList } from "../components"
import { getEmotions } from "../features/emotionSlice";
import { device } from "../GlobalStyles";


const HomeContainer = styled.div`
    /* background:brown; */
    /* width:100%; */
    margin-top:40px;
    display:flex;
    justify-content: center;
    @media ${device.mobileS}{
        flex-direction:column;
        align-items: center;
    }
    @media ${device.laptop}{
        flex-direction:row;
    }
`
const ChartContainer = styled.aside`
    /* background: purple; */
    margin:  1rem 1rem auto 2rem;
    @media ${device.mobileS}{
        width: 70%;
        display: none;
    }
    @media ${device.laptop}{
        width: 40%;
        display: block;
    }
    
`
const Wrapper = styled.div`
    /* background: black; */
    margin:  1rem 2rem auto 1rem;
    width: 40%;
    @media ${device.mobileS}{
        width: 70%;
        /* display: none; */
    }
    @media ${device.tablet}{
        width: 70%;
        /* display: none; */
    }
    @media ${device.laptop}{
        width: 40%;
        /* display: none; */
    }
`
const BarChartWrapper = styled.div`
    background:darkblue;
    margin: 4px auto; 
`

const Home =() => {

    const emotions = useAppSelector(getEmotions)

    let moodCount:{[key:string]: number}  = {
        angry:0,
        sad:0,
        okay:0,
        cool:0,
        happy:0,
    };

    emotions.forEach(em => {
        if(em.chosenEmoji){
            moodCount[em.chosenEmoji]++;
        }
    });

    let moodFrequencies =  Object.values( moodCount);

    return(
        <HomeContainer>
            <ChartContainer>
                  <CalendarChart/>
                  <BarChartWrapper>
                    <BarChart moodFrequencies={moodFrequencies} />
                  </BarChartWrapper>
            </ChartContainer>
            <Wrapper>
                <AddEmotions/>
                <EmotioncardList/>
            </Wrapper>
        </HomeContainer>
    )
}

export default Home;

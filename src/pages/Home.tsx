import styled from "styled-components";
import { useAppSelector } from "../app/hook";
import { AddEmotions, BarChart, CalendarChart, EmotioncardList } from "../components"
import { getEmotions } from "../features/emotionSlice";
import { device } from "../GlobalStyles";


const HomeContainer = styled.div`
    background:brown;
    margin-top:40px;
    display:flex;
    @media ${device.mobileS}{
        flex-direction:column;
    }
    @media ${device.laptop}{
        flex-direction:row;
    }
`
const ChartContainer = styled.aside`
    /* background: purple; */
    margin:  1rem;
    flex: 1;
  }
`
const Wrapper = styled.div`
    background: black;
    flex:2;
`
const BarChartWrapper = styled.div`
    background:black;
    width:380px;
`

const Home =() => {

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

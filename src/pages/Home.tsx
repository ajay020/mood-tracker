import styled from "styled-components";
import { AddEmotions, EmotioncardList } from "../components"
import Calendar from 'react-calendar';
import { useAppSelector } from "../app/hook";
import {  getEmotions } from './../features/emotionSlice';
import { EmojiIcon } from "../components";
import '../Calander.css';

const HomeContainer = styled.div`
    background:wheat;
    display:flex;
`
const CalanderContainer = styled.aside`
    /* background: purple; */
    margin:  1rem;
    flex: 1;
  }
`
const Wrapper = styled.div`
    background: tomato;
    flex:2;
`

const EmojiWrapper = styled.span`
    margin-left:2px;
    /* background:black; */
`

type TileContentPorp = {
    activeStartDate: Date 
    date: Date,
    view: string
}

const Home =() => {
    const emotions = useAppSelector(getEmotions);

    const handleTileContent = ({ activeStartDate, date, view }: TileContentPorp) =>{

        const emotion  = emotions.find(emotion => emotion.date.getTime() === date.getTime());
        // console.log(emotion);
        if(emotion){
            return(
                    <EmojiWrapper> 
                        <EmojiIcon type={emotion.chosenEmoji} size="24px"/>
                    </EmojiWrapper>
                 );
        }

        return null;
    }

    return(
        <HomeContainer>
            <CalanderContainer>
                <Calendar 
                    tileContent = {handleTileContent}
                 />
            </CalanderContainer>
            <Wrapper>
                <AddEmotions/>
                <EmotioncardList/>
            </Wrapper>
        </HomeContainer>
    )
}

export default Home;

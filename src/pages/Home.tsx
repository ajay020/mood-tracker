import styled from "styled-components";
import { AddEmotions, EmotioncardList } from "../components"
import Calendar from 'react-calendar';
import { useState } from "react";
import '../Calander.css';
import { ImAngry } from 'react-icons/im';
import { useAppSelector } from "../app/hook";
import {  getEmotions } from './../features/emotionSlice';
import { EmojiIcon } from "../components";

const HomeContainer = styled.div`
    background:wheat;
    display:flex;
`
const CalanderContainer = styled.aside`
    background: purple;
    margin:  1rem;
    flex: 1;
  }

`
const Wrapper = styled.div`
    background: tomato;
    flex:2;
`

const CustomTile = () => {
    return <h1>Hello</h1>
}

type TileContentPorp = {
    activeStartDate: Date 
    date: Date,
    view: string
}

const Home =() => {
    const [value, onChange] = useState();
    const emotions = useAppSelector(getEmotions);

    const handleTileContent = ({ activeStartDate, date, view }: TileContentPorp) =>{

        const emotion  = emotions.filter(emotion => emotion.date.getTime() === date.getTime());
        console.log(emotion);
        if(emotion[0]){
            return <EmojiIcon type={emotion[0].chosenEmoji} size="34px"/>
        }

        return null;
    }

    return(
        <HomeContainer>
            <CalanderContainer>
                <Calendar 
                    tileContent = {handleTileContent}
                    value={value} 
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

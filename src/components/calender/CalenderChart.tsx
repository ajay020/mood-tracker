import Calendar  from 'react-calendar';
import styled from "styled-components";
import { EmojiIcon } from "..";

import { getEmotions } from '../../features/emotionSlice';
import { useAppSelector } from '../../app/hook';
import './Calander.css';

type TileContentPorp = {
    activeStartDate: Date 
    date: Date,
    view: string
}

const EmojiWrapper = styled.span`
    margin-left:2px;
    /* background:black; */
`

const CalendarChart = () => {

    const emotions = useAppSelector(getEmotions);

    const handleTileContent = ({ activeStartDate, date, view }: TileContentPorp) =>{

        const emotion  = emotions.find(emotion => new Date(emotion.date).getTime().toString() === date.getTime().toString());
        if(emotion){
            return(
                    <EmojiWrapper> 
                        <EmojiIcon type={emotion.chosenEmoji} size="24px"/>
                    </EmojiWrapper>
                 );
        }

        return null;
    }

    return (
         <Calendar 
             tileContent = {handleTileContent}
        />);

}

export default CalendarChart;
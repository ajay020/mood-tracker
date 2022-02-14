import { EmotionCard } from "..";
import { EmotionType, getEmotions } from "../../features/emotionSlice";
import {  useAppSelector } from './../../app/hook';

function EmotionList() {
    const emotions = useAppSelector(getEmotions);
    

    return (
        <>
        {
            emotions.map( (emotion: EmotionType) => <EmotionCard key={emotion.id} emotion = {emotion}/>)
        }
        </>
     );
}

export default EmotionList;
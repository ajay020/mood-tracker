import { EmotionCard } from "..";
import { EmotionType, getEmotions } from "../../features/emotionSlice";
import { useAppDispatch, useAppSelector } from './../../app/hook';

function EmotionList() {
    const dispatch = useAppDispatch();
    const emotions = useAppSelector(getEmotions);
    // console.log(emotions.length);

    return (
        <>
        {
            emotions.map( (emotion: EmotionType) => <EmotionCard key={emotion.id} emotion = {emotion}/>)
        }
        </>
     );
}

export default EmotionList;
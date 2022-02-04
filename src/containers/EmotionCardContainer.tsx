import { useAppSelector } from "../app/hook";
import { AddEmotions, EmotionCard } from "../components"
import { getEmotions } from "../features/emotionSlice";

const EmotionCardContainer = () =>{
    const emotions = useAppSelector(getEmotions);
    // console.log(emotions);
    return (
        <>
            <AddEmotions/>
            <EmotionCard/>
        </>
    )
}

export default EmotionCardContainer;
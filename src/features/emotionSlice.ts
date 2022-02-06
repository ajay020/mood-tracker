import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


export type EmotionType = {
    id:string,
    chosenEmoji:string,
    chosenEmotions: string[],
    emotionDesc: string ,
    date: Date 
}

interface EmotionState{
    emotions:EmotionType[]
}

const initialState: EmotionState = {
    emotions:[
        {
            id:"1",
            date: new Date(2022, 1, 6),
            chosenEmoji:"happy",
            chosenEmotions:["happy"],
            emotionDesc:"It's a great day"
        },
        {
            id:"2",
            date: new Date(2022, 1, 3),
            chosenEmoji:"sad",
            chosenEmotions:["tense"],
            emotionDesc:"It's a blue day"
        },
        {
            id:"3",
            date: new Date(2022, 1, 1),
            chosenEmoji:"cool",
            chosenEmotions:["relax"],
            emotionDesc:"It's a relaxing day"
        }
    ]
    
}

export const emotionSlice = createSlice({
    name:'emotion',
    initialState,
    reducers:{
        addEmotion : (state, action) =>{
            state.emotions = [...state.emotions, action.payload];
        }
    }
});

export const  {addEmotion} = emotionSlice.actions;

export const getEmotions = (state: RootState)=>  state.emotions.emotions
// export const getDates = (state: RootState) => state.emotions.emotions.map(em => em.date);
export default emotionSlice.reducer;


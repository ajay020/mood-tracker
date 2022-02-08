import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { fakeData } from "../data";


export type EmotionType = {
    id:string,
    chosenEmoji:string,
    chosenEmotions: string[],
    emotionDesc: string ,
    date: string
}

interface EmotionState{
    emotions:EmotionType[]
}

const initialState: EmotionState = {
    emotions:[
        ...fakeData
    ]
}

export const emotionSlice = createSlice({
    name:'emotion',
    initialState,
    reducers:{
        addEmotion : (state, action) =>{
            state.emotions = [...state.emotions, action.payload];
        },
        deleteEmotion: (state, action) => {
            state.emotions = state.emotions.filter(em => em.id !== action.payload);
        }
    }
});

export const  {addEmotion, deleteEmotion} = emotionSlice.actions;

export const getEmotions = (state: RootState)=>  state.emotions.emotions

export default emotionSlice.reducer;


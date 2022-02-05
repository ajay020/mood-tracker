import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


export type EmotionType = {
    id:string,
    chosenEmoji:string,
    chosenEmotions: string[],
    emotionDesc: string 
}

interface EmotionState{
    emotions:EmotionType[]
}

const initialState: EmotionState = {
    emotions:[
        {
            id:"1",
            chosenEmoji:"happy",
            chosenEmotions:["happy"],
            emotionDesc:"It's a great day"
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

export default emotionSlice.reducer;


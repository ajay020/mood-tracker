import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface EmotionState{
    emotions:string[]
}

const initialState: EmotionState = {
    emotions:["happy", "sad", "furstrated"]
}

export const emotionSlice = createSlice({
    name:'emotion',
    initialState,
    reducers:{
        
    }
});

export const getEmotions = (state: RootState)=>  state.emotions

export default emotionSlice.reducer;


import {
    ImWondering,
    ImNeutral,
    ImNeutral2,
    ImConfused,
    ImCrying,
    ImAngry,
    ImAngry2,
    ImFrustrated,
    ImFrustrated2,
    ImSmile,
    ImSmile2,
    ImCool,
    ImSad
  } from "react-icons/im";
import { IconType } from "react-icons/lib";

export let negativeEmotions = [
    "Lost",
    "Worried",
    "Confused",
    "Sad",
    "Frustrated",
    "stressed",
    "Overwelming",
    "Tired",
    "Guilty"
  ];

 export let positiveEmotions = [
      "Happy",
      "Excited",
      "Calm",
      "Content",
      "Hopeful",
      "Greatful",
      "Relieved",
      "Loved"
  ];

 export  let activities = [
      "Work", 
      "Family",
       "Exercise", 
      "Food", 
      "Games", 
      "Shopping", "Hobby",
      "Sleep",
      "School",
      "Relax"
  ];

 export const fakeData = [
    {
        id:"1",
        date: new Date(2022, 1, 6).toString(),
        chosenEmoji:"happy",
        chosenEmotions:["happy", "calm", "gratful"],
        emotionDesc:"It's a great day"
    },
    {
        id:"2",
        date: new Date(2022, 1, 3).toString(),
        chosenEmoji:"sad",
        chosenEmotions:["tense", "tired", "worried"],
        emotionDesc:"It's a tough day."
    },
    {
        id:"3",
        date: new Date(2022, 1, 5).toString(),
        chosenEmoji:"cool",
        chosenEmotions:["relax", "excited"],
        emotionDesc:"I am feeling amazing!!"
    },
    {
        id:"4",
        date: new Date(2022, 1, 4).toString(),
        chosenEmoji:"okay",
        chosenEmotions:["relax", "greatful"],
        emotionDesc:"It's okay."
    },
    {
        id:"5",
        date: new Date(2022, 1, 10).toString(),
        chosenEmoji:"angry",
        chosenEmotions:["frustrated", "tired"],
        emotionDesc:"Feeling angry"
    },
    {
        id:"6",
        date: new Date(2022, 1, 12).toString(),
        chosenEmoji:"okay",
        chosenEmotions:["relax", "Calm"],
        emotionDesc:"I did workout and some meditation."
    },
    {
        id:"7",
        date: new Date(2022, 1, 13).toString(),
        chosenEmoji:"sad",
        chosenEmotions:["angry", "guilty", "stressed", "worried"],
        emotionDesc:"I did workout and some meditation."
    },

 ]
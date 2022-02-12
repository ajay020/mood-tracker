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
      "Hopeful",
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
        date: new Date(2022, 1, 6).getTime().toString(),
        chosenEmoji:"happy",
        chosenEmotions:["happy"],
        emotionDesc:"It's a great day"
    },
    {
        id:"2",
        date: new Date(2022, 1, 3).getTime().toString(),
        chosenEmoji:"sad",
        chosenEmotions:["tense"],
        emotionDesc:"It's a blue day"
    },
    {
        id:"3",
        date: new Date(2022, 1, 5).getTime().toString(),
        chosenEmoji:"cool",
        chosenEmotions:["relax"],
        emotionDesc:"It's a relaxing day"
    },
    {
        id:"4",
        date: new Date(2022, 1, 4).getTime().toString(),
        chosenEmoji:"okay",
        chosenEmotions:["relax"],
        emotionDesc:"It's okay."
    },
    {
        id:"5",
        date: new Date(2022, 1, 10).getTime().toString(),
        chosenEmoji:"angry",
        chosenEmotions:["frustrated", "tired"],
        emotionDesc:"Feeling angry"
    },
    {
        id:"6",
        date: new Date(2022, 1, 12).getTime().toString(),
        chosenEmoji:"okay",
        chosenEmotions:["relax", "Calm"],
        emotionDesc:"I did workout and some meditation."
    },
    {
        id:"7",
        date: new Date(2022, 1, 13).getTime().toString(),
        chosenEmoji:"sad",
        chosenEmotions:["angry", "guilty", "stressed", "worried"],
        emotionDesc:"I did workout and some meditation."
    },

 ]
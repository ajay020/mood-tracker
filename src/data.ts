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
  ImSad,
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
  "Guilty",
];

export let positiveEmotions = [
  "Happy",
  "Excited",
  "Calm",
  "Content",
  "Hopeful",
  "Greatful",
  "Relieved",
  "Loved",
];

export let activities = [
  "Work",
  "Family",
  "Exercise",
  "Food",
  "Games",
  "Shopping",
  "Hobby",
  "Sleep",
  "School",
  "Relax",
];

const today = new Date();

let d = 24 * 60 * 60 * 1000;

const onedayago = today.getTime() - d;
const twodayago = today.getTime() - d * 2;
const threedayago = today.getTime() - d * 3;
const fourdayago = today.getTime() - d * 4;

export const fakeData = [
  {
    id: "1",
    date: new Date(onedayago).toString(),
    chosenEmoji: "happy",
    chosenEmotions: ["happy", "calm", "gratful"],
    emotionDescription: "It's a great day",
  },
  {
    id: "2",
    date: new Date(twodayago).toString(),
    chosenEmoji: "sad",
    chosenEmotions: ["tense", "tired", "worried"],
    emotionDescription: "It's a tough day. Felt overwhelmed",
  },
  {
    id: "3",
    date: new Date(threedayago).toString(),
    chosenEmoji: "cool",
    chosenEmotions: ["relax", "excited"],
    emotionDescription: "I am feeling amazing!!",
  },
  {
    id: "4",
    date: new Date(fourdayago).toString(),
    chosenEmoji: "happy",
    chosenEmotions: ["relax", "calm", "content"],
    emotionDescription: "Feeling alright.",
  },
];

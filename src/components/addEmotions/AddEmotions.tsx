import { useCallback, useState } from "react";
import { IconContext } from "react-icons/lib";
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from "../../app/hook";
import { addEmotion } from "../../features/emotionSlice";

import {
        CardWrapper,
        Slider,
        SliderContent,
        LeftArrow,
        RightArrow
    } from "./AddEmotion.element";
import { EmojiSelector, SlideOne,SlideTwo, SlideFour, SlideThree } from "..";

const AddEmotions = () => {
    const [chosenEmotions, setChosenEmotions] = useState<string[]>([]);
    const [chosenEmoji, setChosenEmoji] = useState<string>("");
    const [currentindex, setCurrentIndex] = useState<number>(0);

    const dispatch = useAppDispatch();

  

    console.log("AddEmotions");

    const handleChosenEmotions = (emotion:string) =>{
        setChosenEmotions(prevChosen => {
            return (
                prevChosen.includes(emotion)
                    ? prevChosen.filter(em => em !== emotion)
                    : [...prevChosen, emotion]);
        })  ; 
       
    }

    const handleChosenEmoji  = useCallback( (emoji: string) =>{
        setChosenEmoji(emoji);
    },[chosenEmoji]);
   

    const handleAddEmotions = (emotionDescription: string)=>{
        const newEmotion = {
            id: uuidv4(),
            date: new Date().getMilliseconds().toString(),
            chosenEmoji,
            chosenEmotions,
            emotionDescription
        }
        if(chosenEmoji){
            dispatch(addEmotion(newEmotion))
        }
        setChosenEmoji("");
        setChosenEmotions([]);
        setCurrentIndex(0);
    }

   const slideOne = () => <SlideOne chosenEmoji={chosenEmoji} handleChosenEmoji={handleChosenEmoji} />

    const slideTwo = () => <SlideTwo chosenEmotions={chosenEmotions} handleChosenEmotions={handleChosenEmotions} />

    const slideThree = () => <SlideThree chosenEmotions={chosenEmotions} handleChosenEmotions={handleChosenEmotions} />
    const slideFour = () => <SlideFour handleAddEmotions={handleAddEmotions}/>
      
    const slides = [slideOne, slideTwo, slideThree, slideFour];

    const prvSlide = () =>{
        setCurrentIndex( (prvIndex) => {
            if(prvIndex != 0){
                return prvIndex-1;
            }
            return prvIndex;
        });
    }
    const nextSlide = () =>{
        setCurrentIndex(prvIndex =>{
            if(prvIndex < slides.length-1){
                return prvIndex+1;
            }
            return prvIndex;
        });
    }

  return (
      <IconContext.Provider value={{color:'darkgray'}}>
        <CardWrapper>
                <Slider>
                    <LeftArrow 
                     currentindex={currentindex === 0 ? 1 : 0}
                     onClick={prvSlide} size={30}
                     />
                    <SliderContent>
                        {
                            slides.map((Slide, index) => {
                                return (currentindex == index)&& <Slide key={index}/>
                            })
                        }
                    </SliderContent>
                    <RightArrow 
                        currentindex={currentindex === slides.length-1 ? 1 : 0}
                        onClick={nextSlide}  size={30}
                        />
                </Slider>
        </CardWrapper>
    </IconContext.Provider>
  );
};

export default AddEmotions;

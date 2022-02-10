import styled from "styled-components";
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'


export const CardWrapper = styled.div`
  border: 1px solid black;
  background-color: lightgray;
  width: 60%;
  margin: 1rem auto;
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const EmojiContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  /* justify-content: center; */
  /* background-color: green; */
  /* width: 70%; */
`;


type EmotionChipPropType = {
    selected?:boolean 
    cursor?: string
}
export const EmotionChip = styled.span<EmotionChipPropType>`
  padding: 1px 4px;
  border: solid 1px gray;
  border-radius: 12px;
  margin: 2px 2px;
  font-size: 14px;
  cursor: ${({cursor}) => cursor ? "pointer": ""};
  background: ${({selected}:EmotionChipPropType) => selected ? "darkblue":"" };
  color: ${({selected}:EmotionChipPropType) => selected ? "white" : "black"};

`;

export const EmotionChipWrapper = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
  width:70%;
  justify-content:center;
`;


type HeadingTextProp = {
    fontSize:string 
    bottomBorder?: boolean 
}

export const HeadingText = styled.h3`
    /* background:orange; */
    font-size: ${ (props: HeadingTextProp) =>  props.fontSize};
    font-weight: 400;
    border-bottom: ${({bottomBorder}:HeadingTextProp) => bottomBorder ? "2px solid green" :"" };
    cursor: ${ ({bottomBorder}) => bottomBorder !== undefined ? 'pointer' : "" };
`

export const EmotionContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background: orange; */
    align-items:center;
    /* justify-content:center; */
    padding:1rem;
`

export const Slider = styled.div`
 background:lightgray;
 min-height: 190px;
 width:100%;
 display: flex;
 align-items:center;
 /* justify-content: space-between; */
`
export const SliderContent = styled.div`
 background:lightgray;
 /* align-self:stretch; */
 flex:1;
 margin: 0 2px;
`

type ArrowPropType = {
    currentindex:number
}

export const LeftArrow = styled(FaChevronLeft)<ArrowPropType>`
    background:black;
    padding:4px;
    cursor:pointer;
    /* flex:1; */
    opacity:${({currentindex}) => currentindex !== 0 ? 0.1 : 1}
   
`

export const RightArrow = styled(FaChevronRight)<ArrowPropType>`
    background:black;
    padding:4px;
    cursor:pointer;
    opacity:${({currentindex}) => currentindex !== 0 ? 0.1 : 1}
    /* flex:1; */
`
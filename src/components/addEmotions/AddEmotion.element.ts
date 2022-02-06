import { ImAngry } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

export const CardWrapper = styled.div`
  border: 1px solid black;
  background-color: lightgray;
  /* width: 60%; */
  margin: 1rem;
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Angry = styled(ImAngry)`
 /* color:${({color}) => color };  */
 &:hover{
     /* background:${({color}) => color }; */
     color:${({color}) =>"red" }; 
 }
`
export const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: green; */
  /* width: 70%; */
`;
export const EmojiWrapper = styled.span`
    margin: 0 8px;
    cursor: pointer;
    /* background:pink; */
    &:hover{
        /* background:pink; */
        transform: translate(.3px, .4px);
    }
`
export const EmojiCaption = styled.span`
 text-align: center;
 font-size:14px;
 line-height: 18px;
 display:block;
 color : ${({color}) => color};
`

export const StyledInput = styled.textarea`
  padding: 10px;
  margin-top: 8px;
  border: none;
  width: 60%;
  outline:none;
  margin: 12px 0;
  box-sizing: border-box;
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

  &:hover{
      background-color: black;
      color: white;
  }
`;

export const EmotionChipWrapper = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
 
`;

export const ButtonSave = styled.button`
  background: green;
  padding: 8px 12px;
  color: white;
  width:40%;
  margin: 0 auto;
`;

type HeadingTextProp = {
    fontSize:string 
    bottomBorder?: boolean 
}

export const HeadingText = styled.h3`
    font-size: ${ (props: HeadingTextProp) =>  props.fontSize};
    font-weight: 400;
    border-bottom: ${({bottomBorder}:HeadingTextProp) => bottomBorder ? "2px solid green" :"" };
    cursor: ${ ({bottomBorder}) => bottomBorder !== undefined ? 'pointer' : "" };
`

export const EmotionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const EmotionHeading = styled.div`
    display:flex;
    justify-content: space-evenly;
    /* background: grey; */
    width: 100%;
   
`
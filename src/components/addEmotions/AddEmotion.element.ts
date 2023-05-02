import styled from "styled-components";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { colors } from "../../GlobalStyles";

export const CardWrapper = styled.div`
  border: 1px solid gray;
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type EmotionChipPropType = {
  selected?: boolean;
  cursor?: string;
};
export const EmotionChip = styled.span<EmotionChipPropType>`
  padding: 3px 6px;
  border: solid 1px lightgray;
  border-radius: 12px;
  margin: 2px 2px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  cursor: ${({ cursor }) => (cursor ? "pointer" : "")};
  background: ${({ selected }: EmotionChipPropType) =>
    selected ? "darkblue" : ""};
  color: ${({ selected }: EmotionChipPropType) =>
    selected ? "white" : "black"};
`;

export const EmotionChipWrapper = styled.div`
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
`;

type HeadingTextProp = {
  fontSize: string;
  bottomBorder?: boolean;
};

export const HeadingText = styled.h3`
  /* background:orange; */
  font-size: ${(props: HeadingTextProp) => props.fontSize};
  font-weight: 400;
  border-bottom: ${({ bottomBorder }: HeadingTextProp) =>
    bottomBorder ? "2px solid green" : ""};
  cursor: ${({ bottomBorder }) =>
    bottomBorder !== undefined ? "pointer" : ""};
`;

export const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: orange; */
  align-items: center;
  /* justify-content:center; */
  padding: 1rem;
`;

export const Slider = styled.div`
  background: white;
  min-height: 190px;
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
export const SliderContent = styled.div`
  /* background:lightgray; */
  /* align-self:stretch; */
  flex: 1;
  margin: 0 2px;
`;

type ArrowPropType = {
  currentindex: number;
};

export const LeftArrow = styled(FaChevronLeft)<ArrowPropType>`
  background: ${colors.primaryBlue};
  padding: 4px;
  cursor: pointer;
  /* flex:1; */
  opacity: ${({ currentindex }) => (currentindex !== 0 ? 0.1 : 1)};
`;

export const RightArrow = styled(FaChevronRight)<ArrowPropType>`
  background: ${colors.primaryBlue};
  padding: 4px;
  cursor: pointer;
  opacity: ${({ currentindex }) => (currentindex !== 0 ? 0.1 : 1)};
  /* flex:1; */
`;

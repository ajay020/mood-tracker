import styled from "styled-components";
import { deleteEmotion, EmotionType } from "../../features/emotionSlice";
import { EmotionChip } from "../addEmotions/AddEmotion.element";
import Moment from "react-moment";
import { EmojiIcon } from "..";
import { FaTrash } from "react-icons/fa";
import { useAppDispatch } from "./../../app/hook";

type CardTitleProps = {
  fontWeight: string;
};

const CardWrapper = styled.div`
  background-color: white;
  /* width: 60%; */
  margin: 6px auto;
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0.8rem;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
const CardHeader = styled.div`
  /* background:purple; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const CardBody = styled.div`
  /* background:red; */
  margin-top: 4px;
  text-align: start;
`;

const CardDate = styled(Moment)`
  /* background: olive; */
`;

const CardImg = styled.div`
  width: 42px;
  height: 42px;
  /* background: yellow; */
  margin-right: 12px;
`;

const CardTitle = styled.h4<CardTitleProps>`
  /* background: pink; */
  line-height: 18px;
  margin: 0;
  padding: 0;
  text-align: start;
  font-weight: ${({ fontWeight }) => fontWeight};
`;
const CardHeaderInfo = styled.div`
  /* background: black; */
`;
const TrashTooltip = styled.span`
  background: white;
  position: absolute;
  top: -24px;
  left: 0;
  font-size: 12px;
  padding: 0.3rem;
  color: red;
  display: none;
`;
const TrashWrapper = styled("div")`
  margin-left: auto;
  cursor: pointer;
  position: relative;
  padding: 4px;
  /* background:teal; */

  &:hover {
    color: red;
    ${TrashTooltip} {
      display: block;
    }
  }
`;

const Wrapper = styled.div`
  /* background:goldenrod; */
  margin: 8px 0;
  display: flex;
  flex-wrap: wrap;
`;
const CardBodyContent = styled.div``;

type EmotionCardPropType = {
  emotion: EmotionType;
};

const EmotionCard = ({ emotion }: EmotionCardPropType) => {
  const dispatch = useAppDispatch();

  const date = new Date(emotion.date);

  const handleDelete = (emotionId: string) => {
    dispatch(deleteEmotion(emotionId));
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardImg>
          <EmojiIcon type={emotion.chosenEmoji} size={"35px"} />
        </CardImg>
        <CardHeaderInfo>
          <CardDate format="ddd-MMM">{date}</CardDate>
          <CardTitle fontWeight={"500"}>{emotion.chosenEmoji}</CardTitle>
        </CardHeaderInfo>

        <TrashWrapper onClick={() => handleDelete(emotion.id)}>
          <FaTrash />
          <TrashTooltip>Delete</TrashTooltip>
        </TrashWrapper>
      </CardHeader>
      <CardBody>
        <Wrapper>
          {emotion.chosenEmotions.map((em) => (
            <EmotionChip key={em}>{em}</EmotionChip>
          ))}
        </Wrapper>
        <CardBodyContent>{emotion.emotionDescription}</CardBodyContent>
      </CardBody>
    </CardWrapper>
  );
};

export default EmotionCard;

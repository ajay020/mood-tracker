import Calendar from "react-calendar";
import styled from "styled-components";
import { EmojiIcon } from "..";

import { getEmotions } from "../../features/emotionSlice";
import { useAppSelector } from "../../app/hook";
import "./Calander.css";

type TileContentPorp = {
  activeStartDate: Date;
  date: Date;
  view: string;
};

const EmojiWrapper = styled.span`
  margin-left: 2px;
`;

const CalendarChart = () => {
  const emotions = useAppSelector(getEmotions);

  const handleTileContent = ({
    activeStartDate,
    date,
    view,
  }: TileContentPorp) => {
    const emotion = emotions.find((emotion) => {
      let currDate = new Date(emotion.date);
      currDate.setHours(0, 0, 0, 0);
      date.setHours(0, 0, 0, 0);

      return currDate.getTime() === date.getTime();
    });

    if (emotion) {
      return (
        <EmojiWrapper>
          <EmojiIcon type={emotion.chosenEmoji} size="24px" />
        </EmojiWrapper>
      );
    }

    return null;
  };

  return <Calendar tileContent={handleTileContent} />;
};

export default CalendarChart;

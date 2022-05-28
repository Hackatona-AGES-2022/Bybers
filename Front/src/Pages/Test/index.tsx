import React from "react";

import WeekDayComponentButton from "../../Component/WeekDayComponent";
import { useNavigate } from "react-router-dom";

function Test() {
  const onClick = () => {};
  return (
    <div>
      <WeekDayComponentButton text="Segunda"></WeekDayComponentButton>
    </div>
  );
}

export default Test;

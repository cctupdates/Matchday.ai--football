import React from "react";
import { PaperStyle, TabsStyle, TabStyle } from "./style";
import { useState } from "react";

export default function CenteredTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PaperStyle>
      <TabsStyle
        variant="fullWidth"
        value={value}
        textColor="#21294c"
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <TabStyle label="Game Footage" />
        <TabStyle label="Game Analytics" />
      </TabsStyle>
    </PaperStyle>
  );
}

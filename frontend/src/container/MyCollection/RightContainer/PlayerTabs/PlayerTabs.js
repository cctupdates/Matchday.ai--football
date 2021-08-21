import React from "react";
import { PaperStyle, TabsStyle, TabStyle } from "./style";
import { useState } from "react";

export default function PlayerTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PaperStyle>
      <TabsStyle
        variant="fullWidth"
        value={value}
        textColor="#ffffff"
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <TabStyle label="Shrikanth Kadambi" />
        <TabStyle label="Tanongsak Saensomboonsuk" />
      </TabsStyle>
    </PaperStyle>
  );
}

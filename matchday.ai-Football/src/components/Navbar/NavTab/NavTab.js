import React from "react";
import { PaperStyle, TabsStyle, TabStyle } from "./style";
import { useState } from "react";

export default function NavTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PaperStyle>
      <TabsStyle
        value={value}
        textColor="#ffffff"
        onChange={handleChange}
        indicatorColor="primary"
        centered
      >
        <TabStyle label="My Collections" />
        <TabStyle label="Browse" />
        <TabStyle label="Compare" />
        <TabStyle label="My Progress" />
      </TabsStyle>
    </PaperStyle>
  );
}

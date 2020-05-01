import React from "react";
import {
  Paper,
  Tabs,
  Tab
} from '@material-ui/core';
import { muscles } from "../../store";

const Footer = ({ muscles, category, onSelect }) => {
  const index = category  
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e, index) => 
    onSelect(index === 0 ? '' : muscles[index -1])

  return (
    <Paper>
      <Tabs
        value={0}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map((group, index) => <Tab label={group} key={index} />)}
      </Tabs>
    </Paper>
  );
};

export default Footer;

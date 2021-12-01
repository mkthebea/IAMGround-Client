import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableMaterial from "../../module/TableMaterial";
import { Div } from "../style/styled-compo";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Notification() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const column = [
    { title: "Time", field: "time" },
    { title: "Object", field: "object" },
    { title: "arn", field: "arn" },
    { title: "Message", field: "message" },
    { title: "Marking", field: "marking" },
  ];
  const currentAlarm = [
    {
      time: "IAMGROUND",
      object: "Sat Nov 20 2021 02:47:47",
      arn: "활성화",
      message: "리소스 만료 예정",
      marking: <input type="checkbox" />,
    },
  ];
  const futureAlarm = [
    {
      time: "IAMGROUND",
      object: "Sat Nov 20 2021 02:47:47",
      arn: "활성화",
      message: "리소스 만료 예정",
      marking: <input type="checkbox" />,
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="현재 알림" {...a11yProps(0)} />
          <Tab label="예정 알림" {...a11yProps(1)} />
        </Tabs>
      </Box>
      {value === 0 && <TableMaterial columns={column} cdata={currentAlarm} title="현재 알림 목록" type="notification" />}
      {value === 1 && <TableMaterial columns={column} cdata={futureAlarm} title="예정 알림 목록" type="notification" />}
    </Box>
  );
}

export default Notification;

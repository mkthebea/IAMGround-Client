import React, { useEffect, useState } from "react";
import { Tdiv } from "../style/styled-compo";
import { ResponsiveLine } from "@nivo/line";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import TableMaterial from "../../module/TableMaterial";
import axios from "axios";

function Scanning() {
  // useEffect(() => {
  //   ScanningAccounts();
  // }, []);

  // const ScanningAccounts = async () => {
  //   const url = "http://54.180.115.206:8000/mock/scan";
  //   const response = await axios.get(url);
  //   // const result = await response.json();
  //   console.log(response);
  // };
  const [accounts, setAccounts] = useState([]);
  const fetchAccounts = async () => {
    const response = await axios.get("http://54.180.115.206:8000/mock/scan");
    setAccounts(response.data.cloudList);
    console.log(accounts);
  };
  useEffect(() => {
    fetchAccounts();
  }, []);

  const gdata = [
    {
      id: "Dev",
      color: "hsl(269, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 40,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 150,
        },
        {
          x: "11/14",
          y: 100,
        },
        {
          x: "11/15",
          y: 78,
        },
      ],
    },
    {
      id: "Res",
      color: "hsl(263, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 40,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 150,
        },
        {
          x: "11/14",
          y: 100,
        },
        {
          x: "11/15",
          y: 78,
        },
      ],
    },
    {
      id: "Sec",
      color: "hsl(269, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 150,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 30,
        },
        {
          x: "11/14",
          y: 20,
        },
        {
          x: "11/15",
          y: 5,
        },
      ],
    },
    {
      id: "Test",
      color: "hsl(269, 70%, 50%)",
      data: [
        {
          x: "11/10",
          y: 40,
        },
        {
          x: "11/11",
          y: 85,
        },
        {
          x: "11/12",
          y: 44,
        },
        {
          x: "11/13",
          y: 150,
        },
        {
          x: "11/14",
          y: 100,
        },
        {
          x: "11/15",
          y: 78,
        },
      ],
    },
  ];

  const MyResponsiveLine = ({ gdata }) => (
    <ResponsiveLine
      data={gdata}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Recommendations",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <h1 style={{ color: "#787878", margin: "0px 0px 10px 0px", fontSize: "26px", height: "35px" }}>Scanning</h1>
      <div style={{ height: "45%", width: "100%", backgroundColor: "white", border: "1px solid #D6D6D6" }}>
        <MyResponsiveLine gdata={gdata} />
      </div>
      <div></div>
      <Tdiv>
        <br />
        <TableMaterial
          columns={[
            { title: "Root", field: "root" },
            { title: "Last Scanned", field: "last_scanned" },
            { title: "Per", field: "per", align: "center" },
            { title: "Config", field: "config", align: "center" },
            { title: "Scan", field: "scan", align: "center" },
            { title: "Result", field: "result", align: "center" },
          ]}
          cdata={accounts.map((v, i) => {
            return {
              root: v.name,
              last_scanned: v.lastScan,
              per: v.permissionCount,
              config: v.configCount,
              scan: <button>Scan</button>,
              result: (
                <Link to="/scan/report/summary">
                  <DescriptionIcon />
                </Link>
              ),
            };
          })}
          title="Root Accounts"
          type="scanningsum"
        />
      </Tdiv>
    </>
  );
}

export default Scanning;

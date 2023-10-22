import {
  BusinessCenterTwoTone,
  PhonelinkTwoTone,
  DataObject,
  Code,
} from "@mui/icons-material";
import {
  TabContext,
  TabList,
  TabPanel,
  Timeline,
  timelineItemClasses,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const experiences = [
  {
    id: "1",
    year: 2021,
    exp: [
      {
        icon: <Code fontSize="small" />,
        title: "Fontend/Mobile Developer and Freelancer",
        dec: (
          <>
            Many projects (Web app, Mobile App, UI Design).{<br />}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/projects"
            >
              Services
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "2",
    year: 2022,
    exp: [
      {
        icon: <DataObject fontSize="small" />,
        title: "Backend Developer",
        dec: (
          <>
            In the{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="http://ubora-studios.com"
              target="_blank"
            >
              Ubora Studios
            </Link>{" "}
            startup.
          </>
        ),
      },
      {
        icon: <BusinessCenterTwoTone fontSize="small" />,
        title: "Freelancer",
        dec: (
          <>
            Many projects (Web app, Mobile App, UI Design).{<br />}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/about#services"
            >
              Services
            </Link>
          </>
        ),
      },
    ],
  },
  {
    id: "3",
    year: 2023,
    exp: [
      {
        icon: <PhonelinkTwoTone fontSize="small" />,
        title: "Fullstack Developer",
        dec: (
          <>
            In the{" "}
            <Link
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="http://ubora-studios.com"
              target="_blank"
            >
              Ubora Studios
            </Link>{" "}
            startup.
          </>
        ),
      },
      {
        icon: <BusinessCenterTwoTone fontSize="small" />,
        title: "Freelancer",
        dec: (
          <>
            Many projects (Web app, Mobile App, UI Design).{<br />}
            <a
              style={{ textDecoration: "underline" }}
              className="textPOP"
              href="/about#services"
            >
              Services
            </a>
          </>
        ),
      },
    ],
  },
];

const Experiences = () => {
  const [value, setValue] = React.useState("3");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const ExpItem = ({
    icon,
    title,
    desc,
  }: {
    icon: React.ReactElement;
    title: string;
    desc: React.ReactElement;
  }) => {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            color="primary"
            variant="outlined"
            sx={{ border: "1px solid var(--primaryColorOp)", p: 0.8 }}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography sx={{ fontWeight: "700" }} component="span">
            {title}
          </Typography>
          <Typography>
            <small>{desc}</small>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "var(--cardBgColor)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TabList
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {experiences.map((e) => (
            <Tab
              sx={{
                transition: "0.3s",
                ":hover": { color: "var(--foregroundColor)" },
              }}
              label={e.year}
              value={e.id}
            />
          ))}
        </TabList>
      </Box>
      {experiences.map((e) => (
        <TabPanel value={e.id} sx={{ padding: 0, mt: 1.5 }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
              px: 0,
            }}
          >
            {e.exp.map((item) => (
              <ExpItem icon={item.icon} title={item.title} desc={item.dec} />
            ))}
          </Timeline>
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default Experiences;

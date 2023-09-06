import {
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";

export const ExpItem = ({ icon, title, desc }) => {
	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot variant="outlined">{icon}</TimelineDot>
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

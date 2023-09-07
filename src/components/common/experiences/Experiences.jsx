import {
	TabContext,
	TabList,
	TabPanel,
	Timeline,
	timelineItemClasses,
} from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import { ExpItem } from "./ExpItem";

export const Experiences = ({ experiences }) => {
	const [value, setValue] = React.useState(3);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "#333" }}>
					<TabList
						onChange={handleChange}
						textColor="primary"
						indicatorColor="primary"
						// sx={{
						// 	["& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected"]: {
						// 		color: "var(--primaryColor)",
						// 	},
						// 	[".css-1aquho2-MuiTabs-indicator"]: {
						// 		backgroundColor: "var(--primaryColor)",
						// 	},
						// 	".css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
						// 		color: "#fff",
						// 	},
						// }}
					>
						{experiences.map((e) => (
							<Tab label={e.year} value={e.id} />
						))}
					</TabList>
				</Box>
				{experiences.map((e) => (
					<TabPanel value={e.id} sx={{ padding: 0 }}>
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
		</Box>
	);
};

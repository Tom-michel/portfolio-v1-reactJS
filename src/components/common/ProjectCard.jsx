import React from "react";
import {
	Typography,
	Card,
	AspectRatio,
	//IconButton,
	CardOverflow,
	Divider,
	Link,
} from "@mui/joy";
import { /*Favorite,*/ Filter, InsertLink, Launch } from "@mui/icons-material";
import { Avatar, AvatarGroup, Tooltip, Zoom } from "@mui/material";

export const ProjectCard = ({
	tech,
	img,
	onClickAction,
	name,
	category,
	desc,
	link,
}) => {
	return (
		<>
			<Card
				className="card-project h-100"
				variant="solid"
				sx={{ width: 320, bgcolor: "#09090D" }}
			>
				<CardOverflow
				//data-aos="flip-left"
				>
					<AspectRatio
						ratio="2"
						sx={{
							padding: "12px 12px 0",
							borderBottomLeftRadius: 10,
							borderBottomRightRadius: 10,
						}}
						//data-aos="flip-down"
					>
						<img
							src={img}
							// src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
							// srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
							loading="lazy"
							alt=""
							//data-aos="flip-up"
						/>
					</AspectRatio>
				</CardOverflow>
				<Typography
					className="d-flex align-items-center"
					level="h2"
					sx={{ fontSize: "md" }}
				>
					<Link
						onClick={onClickAction}
						className="me-3"
						// href={"#" + name.replace(/\s+/g, "-")}
						overlay
						underline="none"
						data-aos="flip-right"
					>
						<Typography fontSize="md">{name}</Typography>
					</Link>

					<span className="category me-1 mb-1 pt-1" data-aos="fade-left">
						{category}
					</span>
				</Typography>
				<Typography
					component="p"
					level="body2"
					sx={{ color: "#fff" }}
					data-aos="fade-up-right"
				>
					<span className="truncate-text">{desc}</span>
				</Typography>
				<CardOverflow
					className="project-footer d-flex justify-content-between align-items-center"
					variant="soft"
					sx={{
						display: "flex",
						gap: 1.5,
						py: 1.5,
						px: "var(--Card-padding)",
						// bgcolor: "#25252D",
					}}
				>
					<AvatarGroup className="gap-1" max={10}>
						{tech.map((val) => (
							<Tooltip title={val.name} TransitionComponent={Zoom} arrow>
								<Avatar
									className="project-tech"
									data-toggle="tooltip"
									alt={val.name}
									src={val.img}
									sx={{
										width: 20,
										height: 20,
										// bgcolor: "#161616",
										padding: 0.9,
									}}
									data-aos="fade-up-right"
								/>
							</Tooltip>
						))}
					</AvatarGroup>
					<Divider orientation="vertical" />
					<Typography className="d-flex gap-3">
						{link !== "" ? (
							<Typography
								component="a"
								className="t-gr t-code d-flex align-items-end gap-2"
								href={link}
								level="body3"
								target="_blank"
								sx={{
									fontWeight: "md",
									color: "text.secondary",
									cursor: "pointer",
								}}
							>
								{/* <span className="text-decoration-underline">More</span> */}
								<Tooltip
									title={"Visit the application"}
									TransitionComponent={Zoom}
									arrow
								>
									<Launch fontSize="medium" />
								</Tooltip>
							</Typography>
						) : (
							""
						)}
						<Typography
							onClick={onClickAction}
							component="a"
							className="t-gr t-code d-flex align-items-center gap-2"
							// href={"#" + name.replace(/\s+/g, "-")}
							level="body3"
							sx={{
								fontWeight: "md",
								color: "text.secondary",
								cursor: "pointer",
							}}
						>
							{/* <span className="text-decoration-underline">More</span> */}
							<Tooltip title={"See More"} TransitionComponent={Zoom} arrow>
								<Filter fontSize="small" />
							</Tooltip>
						</Typography>
					</Typography>
				</CardOverflow>
			</Card>
		</>
	);
};

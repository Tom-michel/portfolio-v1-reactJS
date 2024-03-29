import * as React from "react";
import Box from "@mui/material/Box";
import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
//import Paper from '@mui/material/Paper';
import Masonry from "@mui/lab/Masonry";
//import { styled } from '@mui/material/styles';
import List from "@mui/joy/List";

/*const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));*/

export const ProjectModal = ({ my_project, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalDialog layout="fullscreen">
        <ModalClose
          variant="plain"
          sx={{
            /*top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',*/
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          {my_project.name}
        </Typography>
        <Typography
          id="modal-desc"
          textColor="text.tertiary"
          sx={{ color: "#adadad", mb: 2 }}
        >
          {my_project.desc}
        </Typography>

        <List
          className="desc-imgList"
          sx={{
            overflowY: "scroll",
            mx: "calc(-1 * var(--ModalDialog-padding))",
            px: "var(--ModalDialog-padding)",
          }}
        >
          <Box>
            <Masonry
              className="mx-auto"
              columns={{ xs: 2, sm: 3, lg: 4 }}
              spacing={{ xs: 2, sm: 3, lg: 4 }}
            >
              {my_project.images.map((img, index) => (
                <div className="desc-img" key={index}>
                  <div className="desc-text">
                    {/* <span>{img.text}</span> */}
                  </div>
                  {/*<Label>{"image " + index + 1}</Label>*/}
                  <img
                    key={index}
                    src={`${img.img}?w=162&auto=format`}
                    srcSet={`${img.img}?w=162&auto=format&dpr=2 2x`}
                    alt="img"
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </div>
              ))}
            </Masonry>
          </Box>
        </List>
      </ModalDialog>
    </Modal>
  );
};

/*const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];*/

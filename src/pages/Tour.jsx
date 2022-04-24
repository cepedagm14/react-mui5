import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";

import React from "react";
import CustomizedAccordions from "../components/Accordian";
import QuiltedImageList from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat et
          cumque sapiente doloremque veritatis corporis itaque temporibus
          suscipit aperiam perferendis quidem quis rerum libero, nobis provident
          voluptatem ab aliquam in?
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;

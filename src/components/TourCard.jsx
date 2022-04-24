import React from "react";
import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt=""
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Titulo del tour
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 Hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
          >
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body2" component="p" marginLeft={0.5}>
              (455 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C 455$
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;

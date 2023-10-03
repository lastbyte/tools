import {Box, Grid} from "@mui/material";
import _ from "lodash";
import React from "react";
import tinycolor from "tinycolor2";

interface ColorVariantProps {
  color: string;
  setColor?: any;
  height: string | number;
}

export function ColorVariant(props: ColorVariantProps) {
  return (
    <Grid
      container
      flexDirection="row"
      width="100%"
      flexWrap="nowrap"
      sx={{ boxSizing: "border-box" }}
    >
      {_.range(-25, 30, 5).map((value) => {
        const colorString =
          value < 0
            ? tinycolor(props.color).brighten(Math.abs(value)).toRgbString()
            : tinycolor(props.color).darken(value).toRgbString();
        return (
          <Box
            key={value}
            onClick={() => props.setColor && props.setColor(colorString)}
            sx={(theme) => ({
              boxSizing: "border-box",
              border: value === 0 ? "2px solid white" : "none",
              background: colorString,
              width: "9%",
              height: props.height,
            })}
          ></Box>
        );
      })}
    </Grid>
  );
}

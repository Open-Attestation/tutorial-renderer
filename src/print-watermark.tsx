import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";
import watermark from "./watermark.svg";

export const PrintWatermark: FunctionComponent = () => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      opacity: 0.6;
      display: block;
      position: absolute;
      background-image: url(${watermark});
      background-repeat: repeat;

      @media print {
      }
    `}
  />
);

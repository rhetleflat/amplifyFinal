/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, View } from "@aws-amplify/ui-react";
export default function TableBottom(props) {
  const { overrides, ...rest } = props;
  const badgeOnClick = useNavigateAction({ type: "url", url: "/ampligram" });
  return (
    <View
      width="1600px"
      height="92px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(239,240,240,1)"
      {...getOverrideProps(overrides, "TableBottom")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        position="absolute"
        top="0px"
        left="766px"
        size="default"
        variation="success"
        children="Ansatte med bilde"
        onClick={() => {
          badgeOnClick();
        }}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </View>
  );
}

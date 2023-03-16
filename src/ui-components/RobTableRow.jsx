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
import { Flex, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function RobTableRow(props) {
  const { ansatt, overrides, ...rest } = props;
  const rowOneOnClick = useNavigateAction({
    type: "url",
    url: `${"/oppdaterAnsatt/"}${ansatt?.id}`,
  });
  const iconFourSevenFourFourNineNineOnClick = useNavigateAction({
    type: "url",
    url: `${"/visAnsatt/"}${ansatt?.id}`,
  });
  const iconFourSevenFourFourSevenEightOnClick = useNavigateAction({
    type: "url",
    url: `${"/oppdaterAnsatt/"}${ansatt?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="1600px"
      height="10px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RobTableRow")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="5px"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 123px 0px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "RobTableHead")}
      >
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 1344595")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418344596")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="270px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={ansatt?.navn}
              onClick={() => {
                rowOneOnClick();
              }}
              {...getOverrideProps(overrides, "Row1")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 4")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418344608")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="270px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={ansatt?.tittel}
              {...getOverrideProps(overrides, "Row2")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 3")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418344605")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="270px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={ansatt?.epost}
              {...getOverrideProps(overrides, "Row3")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418344602")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="270px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={ansatt?.telefon}
              {...getOverrideProps(overrides, "Row4")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 1344598")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418344599")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="270px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={ansatt?.ansattDato}
              {...getOverrideProps(overrides, "Row5")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(239,240,240,1)"
          {...getOverrideProps(overrides, "Frame 1474471")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Frame 418474472")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="58px"
              height="unset"
              justifyContent="flex-end"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Overflow")}
            >
              <View
                width="24px"
                height="18px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  iconFourSevenFourFourNineNineOnClick();
                }}
                {...getOverrideProps(overrides, "Icon474499")}
              >
                <MyIcon
                  width="24px"
                  height="24px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  type="send"
                  {...getOverrideProps(overrides, "MyIcon474500")}
                ></MyIcon>
              </View>
              <View
                width="24px"
                height="18px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                onClick={() => {
                  iconFourSevenFourFourSevenEightOnClick();
                }}
                {...getOverrideProps(overrides, "Icon474478")}
              >
                <MyIcon
                  width="24px"
                  height="24px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  position="absolute"
                  top="0px"
                  left="0px"
                  padding="0px 0px 0px 0px"
                  type="edit"
                  {...getOverrideProps(overrides, "MyIcon474502")}
                ></MyIcon>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

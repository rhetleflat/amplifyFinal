/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function MyNavBar(props) {
  const { overrides, ...rest } = props;
  const ansatteTwoSixFiveNineEightSixOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const nyansattOnClick = useNavigateAction({ type: "url", url: "/nyAnsatt" });
  const ansatteFourSevenFourFourEightOneOnClick = useAuthSignOutAction({
    global: true,
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1561px"
      height="146px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(121,20,117,1)"
      {...getOverrideProps(overrides, "MyNavBar")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="0px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="509px"
          height="115px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(0,0,0,1)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="contain"
          src="https://uc.no/wp-content/uploads/2020/06/cropped-cropped-Ulriken_C_logo_white_rgb-e1591863674845.png"
          {...getOverrideProps(overrides, "image265980")}
        ></Image>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="486px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321265985")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(254,249,249,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ansatte"
          onClick={() => {
            ansatteTwoSixFiveNineEightSixOnClick();
          }}
          {...getOverrideProps(overrides, "Ansatte265986")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,253,253,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ny ansatt"
          onClick={() => {
            nyansattOnClick();
          }}
          {...getOverrideProps(overrides, "Ny ansatt")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,250,250,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Prosjekter"
          {...getOverrideProps(overrides, "Prosjekter")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,248,248,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nytt prosjekt"
          {...getOverrideProps(overrides, "Nytt prosjekt")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(254,249,249,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logg av"
          onClick={() => {
            ansatteFourSevenFourFourEightOneOnClick();
          }}
          {...getOverrideProps(overrides, "Ansatte474481")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="487px"
        height="47px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 99px"
        {...getOverrideProps(overrides, "Frame 321265990")}
      >
        <SearchField
          width="208px"
          height="42px"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image265994")}
        ></Image>
      </Flex>
    </Flex>
  );
}

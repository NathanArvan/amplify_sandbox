/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { token, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="297px"
      height="124px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(206.12500101327896,198.39531898498535,198.39531898498535,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="32.25806451612903%"
        bottom="50%"
        left="44.107744107744104%"
        right="22.55892255892256%"
        padding="0px 0px 0px 0px"
        children={token?.name}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Image
        position="absolute"
        top="16.93548387096774%"
        bottom="16.129032258064516%"
        height="66.93548387096774%"
        left="8.516483756428213%"
        right="72.25274750680634%"
        width="19.23076873676544%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component12(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="279px"
      height="40px"
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
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <View
        position="absolute"
        top="15%"
        bottom="15%"
        left="72.04301075268818%"
        right="3.942652329749104%"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(72.00000330805779,91.00000217556953,191.00000381469727,1)"
        {...getOverrideProps(overrides, "View.View[1]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="15%"
        bottom="15%"
        left="75.26881720430107%"
        right="5.376344086021505%"
        padding="0px 0px 0px 0px"
        children="Send"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}

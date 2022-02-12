/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Component12 from "./Component12";
export default function Component15(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="294px"
      height="660px"
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
        border="1px SOLID rgba(73.69323045015335,181.60885334014893,215.68750709295273,1)"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(236.93750202655792,236.93750202655792,236.93750202655792,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Component12
        position="absolute"
        top="87.85715738932292%"
        bottom="5%"
        left="6.269591844000784%"
        right="6.269572381259633%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Component12[0]")}
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
          {...getOverrideProps(overrides, "View.Component12[0].View[0]")}
        ></View>
        <View
          position="absolute"
          top="15.000000606884893%"
          bottom="15.000002629834524%"
          left="72.04300603088491%"
          right="3.9426487352232047%"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(72.00000330805779,91.00000217556953,191.00000381469727,1)"
          {...getOverrideProps(overrides, "View.Component12[0].View[1]")}
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
          top="15.000000606884893%"
          bottom="25.60593916165083%"
          left="75.26881439674239%"
          right="3.7305322524462086%"
          padding="0px 0px 0px 0px"
          children="Send"
          {...getOverrideProps(overrides, "View.Component12[0].Text[0]")}
        ></Text>
      </Component12>
      <View
        padding="0px 0px 0px 0px"
        width="294px"
        height="60px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "View.View[1]")}
      >
        <View
          height="60px"
          position="absolute"
          top="0px"
          left="0px"
          right="0px"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(176.37499898672104,151.38854295015335,151.38854295015335,1)"
          {...getOverrideProps(overrides, "View.View[1].View[0]")}
        ></View>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(232.68750607967377,232.68750607967377,232.68750607967377,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="1.0339734048554392%"
        bottom="93.94386898387562%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="Chat"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Flex
        gap="10px"
        position="absolute"
        top="102px"
        left="31px"
        direction="row"
        width="315px"
        height="416px"
        justifyContent="center"
        alignItems="flex-end"
        borderRadius="12px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        opacity="0.30000001192092896"
        {...getOverrideProps(overrides, "View.Flex[0]")}
      ></Flex>
    </View>
  );
}

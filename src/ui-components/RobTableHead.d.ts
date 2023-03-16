/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RobTableHeadOverridesProps = {
    RobTableHead?: PrimitiveOverrideProps<FlexProps>;
    RobTableHead266347?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344558"?: PrimitiveOverrideProps<FlexProps>;
    Head1?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344555"?: PrimitiveOverrideProps<FlexProps>;
    Head2?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344552"?: PrimitiveOverrideProps<FlexProps>;
    Head3?: PrimitiveOverrideProps<TextProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344547"?: PrimitiveOverrideProps<FlexProps>;
    Head4?: PrimitiveOverrideProps<TextProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344549"?: PrimitiveOverrideProps<FlexProps>;
    Head5?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RobTableHeadProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RobTableHeadOverridesProps | undefined | null;
}>;
export default function RobTableHead(props: RobTableHeadProps): React.ReactElement;

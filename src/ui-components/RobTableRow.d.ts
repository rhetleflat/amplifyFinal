/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ansatt } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RobTableRowOverridesProps = {
    RobTableRow?: PrimitiveOverrideProps<FlexProps>;
    RobTableHead?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1344595"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344596"?: PrimitiveOverrideProps<FlexProps>;
    Row1?: PrimitiveOverrideProps<TextProps>;
    "Frame 4"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344608"?: PrimitiveOverrideProps<FlexProps>;
    Row2?: PrimitiveOverrideProps<TextProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344605"?: PrimitiveOverrideProps<FlexProps>;
    Row3?: PrimitiveOverrideProps<TextProps>;
    "Frame 2"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344602"?: PrimitiveOverrideProps<FlexProps>;
    Row4?: PrimitiveOverrideProps<TextProps>;
    "Frame 1344598"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418344599"?: PrimitiveOverrideProps<FlexProps>;
    Row5?: PrimitiveOverrideProps<TextProps>;
    "Frame 1474471"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418474472"?: PrimitiveOverrideProps<FlexProps>;
    Overflow?: PrimitiveOverrideProps<FlexProps>;
    Icon474499?: PrimitiveOverrideProps<ViewProps>;
    MyIcon474500?: MyIconProps;
    Icon474478?: PrimitiveOverrideProps<ViewProps>;
    MyIcon474502?: MyIconProps;
} & EscapeHatchProps;
export declare type RobTableRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    ansatt?: Ansatt;
} & {
    overrides?: RobTableRowOverridesProps | undefined | null;
}>;
export default function RobTableRow(props: RobTableRowProps): React.ReactElement;

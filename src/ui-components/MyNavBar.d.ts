/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, SearchFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MyNavBarOverridesProps = {
    MyNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    image265980?: PrimitiveOverrideProps<ImageProps>;
    "Frame 321265985"?: PrimitiveOverrideProps<FlexProps>;
    Ansatte265986?: PrimitiveOverrideProps<TextProps>;
    "Ny ansatt"?: PrimitiveOverrideProps<TextProps>;
    Prosjekter?: PrimitiveOverrideProps<TextProps>;
    "Nytt prosjekt"?: PrimitiveOverrideProps<TextProps>;
    Ansatte474481?: PrimitiveOverrideProps<TextProps>;
    "Frame 321265990"?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    image265994?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type MyNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MyNavBarOverridesProps | undefined | null;
}>;
export default function MyNavBar(props: MyNavBarProps): React.ReactElement;

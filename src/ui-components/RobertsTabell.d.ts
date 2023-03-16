/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RobertsTabellOverridesProps = {
    RobertsTabell?: PrimitiveOverrideProps<FlexProps>;
    Columns24044?: PrimitiveOverrideProps<FlexProps>;
    Columns24045?: PrimitiveOverrideProps<FlexProps>;
    Columns24046?: PrimitiveOverrideProps<FlexProps>;
    Columns24047?: PrimitiveOverrideProps<FlexProps>;
    Columns24048?: PrimitiveOverrideProps<FlexProps>;
    Columns24049?: PrimitiveOverrideProps<FlexProps>;
    Columns24050?: PrimitiveOverrideProps<FlexProps>;
    Columns24051?: PrimitiveOverrideProps<FlexProps>;
    Columns24052?: PrimitiveOverrideProps<FlexProps>;
    Columns24053?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type RobertsTabellProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RobertsTabellOverridesProps | undefined | null;
}>;
export default function RobertsTabell(props: RobertsTabellProps): React.ReactElement;

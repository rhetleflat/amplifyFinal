/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TemplateDetachmeProps } from "./TemplateDetachme";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RobertsTab2OverridesProps = {
    RobertsTab2?: PrimitiveOverrideProps<FlexProps>;
    RobertsTab294891?: TemplateDetachmeProps;
} & EscapeHatchProps;
export declare type RobertsTab2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RobertsTab2OverridesProps | undefined | null;
}>;
export default function RobertsTab2(props: RobertsTab2Props): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TableBottomOverridesProps = {
    TableBottom?: PrimitiveOverrideProps<ViewProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type TableBottomProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TableBottomOverridesProps | undefined | null;
}>;
export default function TableBottom(props: TableBottomProps): React.ReactElement;

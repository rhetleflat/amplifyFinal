/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RobTableRowProps } from "./RobTableRow";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RobTableRowCollectionOverridesProps = {
    RobTableRowCollection?: PrimitiveOverrideProps<CollectionProps>;
    RobTableRow?: RobTableRowProps;
} & EscapeHatchProps;
export declare type RobTableRowCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => RobTableRowProps;
} & {
    overrides?: RobTableRowCollectionOverridesProps | undefined | null;
}>;
export default function RobTableRowCollection(props: RobTableRowCollectionProps): React.ReactElement;

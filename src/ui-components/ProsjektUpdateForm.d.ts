/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Prosjekt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProsjektUpdateFormInputValues = {
    prosjektNavn?: string;
    timepris?: number;
};
export declare type ProsjektUpdateFormValidationValues = {
    prosjektNavn?: ValidationFunction<string>;
    timepris?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProsjektUpdateFormOverridesProps = {
    ProsjektUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prosjektNavn?: PrimitiveOverrideProps<TextFieldProps>;
    timepris?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProsjektUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProsjektUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prosjekt?: Prosjekt;
    onSubmit?: (fields: ProsjektUpdateFormInputValues) => ProsjektUpdateFormInputValues;
    onSuccess?: (fields: ProsjektUpdateFormInputValues) => void;
    onError?: (fields: ProsjektUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProsjektUpdateFormInputValues) => ProsjektUpdateFormInputValues;
    onValidate?: ProsjektUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProsjektUpdateForm(props: ProsjektUpdateFormProps): React.ReactElement;

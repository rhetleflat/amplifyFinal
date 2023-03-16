/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProsjektCreateFormInputValues = {
    prosjektNavn?: string;
    timepris?: number;
};
export declare type ProsjektCreateFormValidationValues = {
    prosjektNavn?: ValidationFunction<string>;
    timepris?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProsjektCreateFormOverridesProps = {
    ProsjektCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    prosjektNavn?: PrimitiveOverrideProps<TextFieldProps>;
    timepris?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProsjektCreateFormProps = React.PropsWithChildren<{
    overrides?: ProsjektCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProsjektCreateFormInputValues) => ProsjektCreateFormInputValues;
    onSuccess?: (fields: ProsjektCreateFormInputValues) => void;
    onError?: (fields: ProsjektCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProsjektCreateFormInputValues) => ProsjektCreateFormInputValues;
    onValidate?: ProsjektCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProsjektCreateForm(props: ProsjektCreateFormProps): React.ReactElement;

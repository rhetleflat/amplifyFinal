/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnsattCreateFormInputValues = {
    navn?: string;
    tittel?: string;
    stilling?: string;
    epost?: string;
    telefon?: string;
    ansattDato?: string;
    sluttetDato?: string;
    bilde?: string;
};
export declare type AnsattCreateFormValidationValues = {
    navn?: ValidationFunction<string>;
    tittel?: ValidationFunction<string>;
    stilling?: ValidationFunction<string>;
    epost?: ValidationFunction<string>;
    telefon?: ValidationFunction<string>;
    ansattDato?: ValidationFunction<string>;
    sluttetDato?: ValidationFunction<string>;
    bilde?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnsattCreateFormOverridesProps = {
    AnsattCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    tittel?: PrimitiveOverrideProps<TextFieldProps>;
    stilling?: PrimitiveOverrideProps<SelectFieldProps>;
    epost?: PrimitiveOverrideProps<TextFieldProps>;
    telefon?: PrimitiveOverrideProps<TextFieldProps>;
    ansattDato?: PrimitiveOverrideProps<TextFieldProps>;
    sluttetDato?: PrimitiveOverrideProps<TextFieldProps>;
    bilde?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnsattCreateFormProps = React.PropsWithChildren<{
    overrides?: AnsattCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AnsattCreateFormInputValues) => AnsattCreateFormInputValues;
    onSuccess?: (fields: AnsattCreateFormInputValues) => void;
    onError?: (fields: AnsattCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnsattCreateFormInputValues) => AnsattCreateFormInputValues;
    onValidate?: AnsattCreateFormValidationValues;
} & React.CSSProperties>;
export default function AnsattCreateForm(props: AnsattCreateFormProps): React.ReactElement;

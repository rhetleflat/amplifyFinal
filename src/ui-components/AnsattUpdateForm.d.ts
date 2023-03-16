/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Ansatt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AnsattUpdateFormInputValues = {
    navn?: string;
    tittel?: string;
    stilling?: string;
    epost?: string;
    telefon?: string;
    ansattDato?: string;
    sluttetDato?: string;
};
export declare type AnsattUpdateFormValidationValues = {
    navn?: ValidationFunction<string>;
    tittel?: ValidationFunction<string>;
    stilling?: ValidationFunction<string>;
    epost?: ValidationFunction<string>;
    telefon?: ValidationFunction<string>;
    ansattDato?: ValidationFunction<string>;
    sluttetDato?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnsattUpdateFormOverridesProps = {
    AnsattUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    tittel?: PrimitiveOverrideProps<TextFieldProps>;
    stilling?: PrimitiveOverrideProps<SelectFieldProps>;
    epost?: PrimitiveOverrideProps<TextFieldProps>;
    telefon?: PrimitiveOverrideProps<TextFieldProps>;
    ansattDato?: PrimitiveOverrideProps<TextFieldProps>;
    sluttetDato?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AnsattUpdateFormProps = React.PropsWithChildren<{
    overrides?: AnsattUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ansatt?: Ansatt;
    onSubmit?: (fields: AnsattUpdateFormInputValues) => AnsattUpdateFormInputValues;
    onSuccess?: (fields: AnsattUpdateFormInputValues) => void;
    onError?: (fields: AnsattUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AnsattUpdateFormInputValues) => AnsattUpdateFormInputValues;
    onValidate?: AnsattUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AnsattUpdateForm(props: AnsattUpdateFormProps): React.ReactElement;

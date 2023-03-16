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
export declare type OppdaterAnsattInputValues = {
    navn?: string;
    tittel?: string;
    stilling?: string;
    epost?: string;
    telefon?: string;
    ansattDato?: string;
    sluttetDato?: string;
    bilde?: string;
};
export declare type OppdaterAnsattValidationValues = {
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
export declare type OppdaterAnsattOverridesProps = {
    OppdaterAnsattGrid?: PrimitiveOverrideProps<GridProps>;
    navn?: PrimitiveOverrideProps<TextFieldProps>;
    tittel?: PrimitiveOverrideProps<TextFieldProps>;
    stilling?: PrimitiveOverrideProps<SelectFieldProps>;
    epost?: PrimitiveOverrideProps<TextFieldProps>;
    telefon?: PrimitiveOverrideProps<TextFieldProps>;
    ansattDato?: PrimitiveOverrideProps<TextFieldProps>;
    sluttetDato?: PrimitiveOverrideProps<TextFieldProps>;
    bilde?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OppdaterAnsattProps = React.PropsWithChildren<{
    overrides?: OppdaterAnsattOverridesProps | undefined | null;
} & {
    id?: string;
    ansatt?: Ansatt;
    onSubmit?: (fields: OppdaterAnsattInputValues) => OppdaterAnsattInputValues;
    onSuccess?: (fields: OppdaterAnsattInputValues) => void;
    onError?: (fields: OppdaterAnsattInputValues, errorMessage: string) => void;
    onChange?: (fields: OppdaterAnsattInputValues) => OppdaterAnsattInputValues;
    onValidate?: OppdaterAnsattValidationValues;
} & React.CSSProperties>;
export default function OppdaterAnsatt(props: OppdaterAnsattProps): React.ReactElement;

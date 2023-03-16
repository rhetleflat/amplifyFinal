/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Ansatt } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AnsattCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    navn: "",
    tittel: "",
    stilling: undefined,
    epost: "",
    telefon: "",
    ansattDato: "",
    sluttetDato: "",
  };
  const [navn, setNavn] = React.useState(initialValues.navn);
  const [tittel, setTittel] = React.useState(initialValues.tittel);
  const [stilling, setStilling] = React.useState(initialValues.stilling);
  const [epost, setEpost] = React.useState(initialValues.epost);
  const [telefon, setTelefon] = React.useState(initialValues.telefon);
  const [ansattDato, setAnsattDato] = React.useState(initialValues.ansattDato);
  const [sluttetDato, setSluttetDato] = React.useState(
    initialValues.sluttetDato
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNavn(initialValues.navn);
    setTittel(initialValues.tittel);
    setStilling(initialValues.stilling);
    setEpost(initialValues.epost);
    setTelefon(initialValues.telefon);
    setAnsattDato(initialValues.ansattDato);
    setSluttetDato(initialValues.sluttetDato);
    setErrors({});
  };
  const validations = {
    navn: [{ type: "Required" }],
    tittel: [{ type: "Required" }],
    stilling: [{ type: "Required" }],
    epost: [{ type: "Required" }, { type: "Email" }],
    telefon: [{ type: "Required" }, { type: "Phone" }],
    ansattDato: [{ type: "Required" }],
    sluttetDato: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          navn,
          tittel,
          stilling,
          epost,
          telefon,
          ansattDato,
          sluttetDato,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Ansatt(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AnsattCreateForm")}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Tøm"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Lagre"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
      <TextField
        label="Navn"
        isRequired={true}
        isReadOnly={false}
        value={navn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn: value,
              tittel,
              stilling,
              epost,
              telefon,
              ansattDato,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.navn ?? value;
          }
          if (errors.navn?.hasError) {
            runValidationTasks("navn", value);
          }
          setNavn(value);
        }}
        onBlur={() => runValidationTasks("navn", navn)}
        errorMessage={errors.navn?.errorMessage}
        hasError={errors.navn?.hasError}
        {...getOverrideProps(overrides, "navn")}
      ></TextField>
      <TextField
        label="Tittel"
        isRequired={true}
        isReadOnly={false}
        value={tittel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel: value,
              stilling,
              epost,
              telefon,
              ansattDato,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.tittel ?? value;
          }
          if (errors.tittel?.hasError) {
            runValidationTasks("tittel", value);
          }
          setTittel(value);
        }}
        onBlur={() => runValidationTasks("tittel", tittel)}
        errorMessage={errors.tittel?.errorMessage}
        hasError={errors.tittel?.hasError}
        {...getOverrideProps(overrides, "tittel")}
      ></TextField>
      <SelectField
        label="Stilling"
        placeholder="Velg Stilling"
        isDisabled={false}
        value={stilling}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel,
              stilling: value,
              epost,
              telefon,
              ansattDato,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.stilling ?? value;
          }
          if (errors.stilling?.hasError) {
            runValidationTasks("stilling", value);
          }
          setStilling(value);
        }}
        onBlur={() => runValidationTasks("stilling", stilling)}
        errorMessage={errors.stilling?.errorMessage}
        hasError={errors.stilling?.hasError}
        {...getOverrideProps(overrides, "stilling")}
      >
        <option
          children="Daglig leder"
          value="DAGLIG_LEDER"
          {...getOverrideProps(overrides, "stillingoption0")}
        ></option>
        <option
          children="Systemkonsulent"
          value="SYSTEMKONSULENT"
          {...getOverrideProps(overrides, "stillingoption1")}
        ></option>
        <option
          children="Arkitekt"
          value="ARKITEKT"
          {...getOverrideProps(overrides, "stillingoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Epost"
        isRequired={true}
        isReadOnly={false}
        value={epost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel,
              stilling,
              epost: value,
              telefon,
              ansattDato,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.epost ?? value;
          }
          if (errors.epost?.hasError) {
            runValidationTasks("epost", value);
          }
          setEpost(value);
        }}
        onBlur={() => runValidationTasks("epost", epost)}
        errorMessage={errors.epost?.errorMessage}
        hasError={errors.epost?.hasError}
        {...getOverrideProps(overrides, "epost")}
      ></TextField>
      <TextField
        label="Telefon"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={telefon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel,
              stilling,
              epost,
              telefon: value,
              ansattDato,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.telefon ?? value;
          }
          if (errors.telefon?.hasError) {
            runValidationTasks("telefon", value);
          }
          setTelefon(value);
        }}
        onBlur={() => runValidationTasks("telefon", telefon)}
        errorMessage={errors.telefon?.errorMessage}
        hasError={errors.telefon?.hasError}
        {...getOverrideProps(overrides, "telefon")}
      ></TextField>
      <TextField
        label="Ansatt dato"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={ansattDato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel,
              stilling,
              epost,
              telefon,
              ansattDato: value,
              sluttetDato,
            };
            const result = onChange(modelFields);
            value = result?.ansattDato ?? value;
          }
          if (errors.ansattDato?.hasError) {
            runValidationTasks("ansattDato", value);
          }
          setAnsattDato(value);
        }}
        onBlur={() => runValidationTasks("ansattDato", ansattDato)}
        errorMessage={errors.ansattDato?.errorMessage}
        hasError={errors.ansattDato?.hasError}
        {...getOverrideProps(overrides, "ansattDato")}
      ></TextField>
      <TextField
        label="Sluttet dato"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={sluttetDato}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              navn,
              tittel,
              stilling,
              epost,
              telefon,
              ansattDato,
              sluttetDato: value,
            };
            const result = onChange(modelFields);
            value = result?.sluttetDato ?? value;
          }
          if (errors.sluttetDato?.hasError) {
            runValidationTasks("sluttetDato", value);
          }
          setSluttetDato(value);
        }}
        onBlur={() => runValidationTasks("sluttetDato", sluttetDato)}
        errorMessage={errors.sluttetDato?.errorMessage}
        hasError={errors.sluttetDato?.hasError}
        {...getOverrideProps(overrides, "sluttetDato")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Tøm"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Lagre"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

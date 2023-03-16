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
export default function OppdaterAnsatt(props) {
  const {
    id: idProp,
    ansatt,
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
    bilde: "",
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
  const [bilde, setBilde] = React.useState(initialValues.bilde);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ansattRecord
      ? { ...initialValues, ...ansattRecord }
      : initialValues;
    setNavn(cleanValues.navn);
    setTittel(cleanValues.tittel);
    setStilling(cleanValues.stilling);
    setEpost(cleanValues.epost);
    setTelefon(cleanValues.telefon);
    setAnsattDato(cleanValues.ansattDato);
    setSluttetDato(cleanValues.sluttetDato);
    setBilde(cleanValues.bilde);
    setErrors({});
  };
  const [ansattRecord, setAnsattRecord] = React.useState(ansatt);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Ansatt, idProp) : ansatt;
      setAnsattRecord(record);
    };
    queryData();
  }, [idProp, ansatt]);
  React.useEffect(resetStateValues, [ansattRecord]);
  const validations = {
    navn: [{ type: "Required" }],
    tittel: [{ type: "Required" }],
    stilling: [{ type: "Required" }],
    epost: [{ type: "Required" }, { type: "Email" }],
    telefon: [{ type: "Required" }, { type: "Phone" }],
    ansattDato: [{ type: "Required" }],
    sluttetDato: [],
    bilde: [{ type: "URL" }],
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
          bilde,
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
          await DataStore.save(
            Ansatt.copyOf(ansattRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OppdaterAnsatt")}
      {...rest}
    >
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
              bilde,
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
              bilde,
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
        placeholder="Please select an option"
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
              bilde,
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
              bilde,
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
              bilde,
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
              bilde,
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
        isRequired={false}
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
              bilde,
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
      <TextField
        label="Bilde"
        isRequired={false}
        isReadOnly={false}
        value={bilde}
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
              sluttetDato,
              bilde: value,
            };
            const result = onChange(modelFields);
            value = result?.bilde ?? value;
          }
          if (errors.bilde?.hasError) {
            runValidationTasks("bilde", value);
          }
          setBilde(value);
        }}
        onBlur={() => runValidationTasks("bilde", bilde)}
        errorMessage={errors.bilde?.errorMessage}
        hasError={errors.bilde?.hasError}
        {...getOverrideProps(overrides, "bilde")}
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
          isDisabled={!(idProp || ansatt)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Lagre"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ansatt) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

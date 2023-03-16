/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Prosjekt } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProsjektCreateForm(props) {
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
    prosjektNavn: "",
    timepris: "",
  };
  const [prosjektNavn, setProsjektNavn] = React.useState(
    initialValues.prosjektNavn
  );
  const [timepris, setTimepris] = React.useState(initialValues.timepris);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProsjektNavn(initialValues.prosjektNavn);
    setTimepris(initialValues.timepris);
    setErrors({});
  };
  const validations = {
    prosjektNavn: [{ type: "Required" }],
    timepris: [{ type: "Required" }],
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
          prosjektNavn,
          timepris,
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
          await DataStore.save(new Prosjekt(modelFields));
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
      {...getOverrideProps(overrides, "ProsjektCreateForm")}
      {...rest}
    >
      <TextField
        label="Prosjekt navn"
        isRequired={true}
        isReadOnly={false}
        value={prosjektNavn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              prosjektNavn: value,
              timepris,
            };
            const result = onChange(modelFields);
            value = result?.prosjektNavn ?? value;
          }
          if (errors.prosjektNavn?.hasError) {
            runValidationTasks("prosjektNavn", value);
          }
          setProsjektNavn(value);
        }}
        onBlur={() => runValidationTasks("prosjektNavn", prosjektNavn)}
        errorMessage={errors.prosjektNavn?.errorMessage}
        hasError={errors.prosjektNavn?.hasError}
        {...getOverrideProps(overrides, "prosjektNavn")}
      ></TextField>
      <TextField
        label="Timepris"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={timepris}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              prosjektNavn,
              timepris: value,
            };
            const result = onChange(modelFields);
            value = result?.timepris ?? value;
          }
          if (errors.timepris?.hasError) {
            runValidationTasks("timepris", value);
          }
          setTimepris(value);
        }}
        onBlur={() => runValidationTasks("timepris", timepris)}
        errorMessage={errors.timepris?.errorMessage}
        hasError={errors.timepris?.hasError}
        {...getOverrideProps(overrides, "timepris")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
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
            children="Submit"
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

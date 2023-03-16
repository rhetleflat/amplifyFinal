/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnsattTimer = /* GraphQL */ `
  mutation CreateAnsattTimer(
    $input: CreateAnsattTimerInput!
    $condition: ModelAnsattTimerConditionInput
  ) {
    createAnsattTimer(input: $input, condition: $condition) {
      id
      ansattID
      Prosjekt {
        id
        prosjektNavn
        timepris
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fraDato
      tilDato
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ansattTimerProsjektId
    }
  }
`;
export const updateAnsattTimer = /* GraphQL */ `
  mutation UpdateAnsattTimer(
    $input: UpdateAnsattTimerInput!
    $condition: ModelAnsattTimerConditionInput
  ) {
    updateAnsattTimer(input: $input, condition: $condition) {
      id
      ansattID
      Prosjekt {
        id
        prosjektNavn
        timepris
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fraDato
      tilDato
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ansattTimerProsjektId
    }
  }
`;
export const deleteAnsattTimer = /* GraphQL */ `
  mutation DeleteAnsattTimer(
    $input: DeleteAnsattTimerInput!
    $condition: ModelAnsattTimerConditionInput
  ) {
    deleteAnsattTimer(input: $input, condition: $condition) {
      id
      ansattID
      Prosjekt {
        id
        prosjektNavn
        timepris
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fraDato
      tilDato
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ansattTimerProsjektId
    }
  }
`;
export const createProsjekt = /* GraphQL */ `
  mutation CreateProsjekt(
    $input: CreateProsjektInput!
    $condition: ModelProsjektConditionInput
  ) {
    createProsjekt(input: $input, condition: $condition) {
      id
      prosjektNavn
      timepris
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProsjekt = /* GraphQL */ `
  mutation UpdateProsjekt(
    $input: UpdateProsjektInput!
    $condition: ModelProsjektConditionInput
  ) {
    updateProsjekt(input: $input, condition: $condition) {
      id
      prosjektNavn
      timepris
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProsjekt = /* GraphQL */ `
  mutation DeleteProsjekt(
    $input: DeleteProsjektInput!
    $condition: ModelProsjektConditionInput
  ) {
    deleteProsjekt(input: $input, condition: $condition) {
      id
      prosjektNavn
      timepris
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAnsatt = /* GraphQL */ `
  mutation CreateAnsatt(
    $input: CreateAnsattInput!
    $condition: ModelAnsattConditionInput
  ) {
    createAnsatt(input: $input, condition: $condition) {
      id
      navn
      tittel
      stilling
      epost
      telefon
      ansattDato
      sluttetDato
      AnsattTimers {
        nextToken
        startedAt
      }
      bilde
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAnsatt = /* GraphQL */ `
  mutation UpdateAnsatt(
    $input: UpdateAnsattInput!
    $condition: ModelAnsattConditionInput
  ) {
    updateAnsatt(input: $input, condition: $condition) {
      id
      navn
      tittel
      stilling
      epost
      telefon
      ansattDato
      sluttetDato
      AnsattTimers {
        nextToken
        startedAt
      }
      bilde
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAnsatt = /* GraphQL */ `
  mutation DeleteAnsatt(
    $input: DeleteAnsattInput!
    $condition: ModelAnsattConditionInput
  ) {
    deleteAnsatt(input: $input, condition: $condition) {
      id
      navn
      tittel
      stilling
      epost
      telefon
      ansattDato
      sluttetDato
      AnsattTimers {
        nextToken
        startedAt
      }
      bilde
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

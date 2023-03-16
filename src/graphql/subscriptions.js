/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnsattTimer = /* GraphQL */ `
  subscription OnCreateAnsattTimer(
    $filter: ModelSubscriptionAnsattTimerFilterInput
  ) {
    onCreateAnsattTimer(filter: $filter) {
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
export const onUpdateAnsattTimer = /* GraphQL */ `
  subscription OnUpdateAnsattTimer(
    $filter: ModelSubscriptionAnsattTimerFilterInput
  ) {
    onUpdateAnsattTimer(filter: $filter) {
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
export const onDeleteAnsattTimer = /* GraphQL */ `
  subscription OnDeleteAnsattTimer(
    $filter: ModelSubscriptionAnsattTimerFilterInput
  ) {
    onDeleteAnsattTimer(filter: $filter) {
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
export const onCreateProsjekt = /* GraphQL */ `
  subscription OnCreateProsjekt($filter: ModelSubscriptionProsjektFilterInput) {
    onCreateProsjekt(filter: $filter) {
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
export const onUpdateProsjekt = /* GraphQL */ `
  subscription OnUpdateProsjekt($filter: ModelSubscriptionProsjektFilterInput) {
    onUpdateProsjekt(filter: $filter) {
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
export const onDeleteProsjekt = /* GraphQL */ `
  subscription OnDeleteProsjekt($filter: ModelSubscriptionProsjektFilterInput) {
    onDeleteProsjekt(filter: $filter) {
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
export const onCreateAnsatt = /* GraphQL */ `
  subscription OnCreateAnsatt($filter: ModelSubscriptionAnsattFilterInput) {
    onCreateAnsatt(filter: $filter) {
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
export const onUpdateAnsatt = /* GraphQL */ `
  subscription OnUpdateAnsatt($filter: ModelSubscriptionAnsattFilterInput) {
    onUpdateAnsatt(filter: $filter) {
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
export const onDeleteAnsatt = /* GraphQL */ `
  subscription OnDeleteAnsatt($filter: ModelSubscriptionAnsattFilterInput) {
    onDeleteAnsatt(filter: $filter) {
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

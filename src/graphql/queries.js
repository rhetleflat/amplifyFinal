/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnsattTimer = /* GraphQL */ `
  query GetAnsattTimer($id: ID!) {
    getAnsattTimer(id: $id) {
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
export const listAnsattTimers = /* GraphQL */ `
  query ListAnsattTimers(
    $filter: ModelAnsattTimerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnsattTimers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ansattID
        fraDato
        tilDato
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ansattTimerProsjektId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnsattTimers = /* GraphQL */ `
  query SyncAnsattTimers(
    $filter: ModelAnsattTimerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnsattTimers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ansattID
        fraDato
        tilDato
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ansattTimerProsjektId
      }
      nextToken
      startedAt
    }
  }
`;
export const ansattTimersByAnsattID = /* GraphQL */ `
  query AnsattTimersByAnsattID(
    $ansattID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnsattTimerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ansattTimersByAnsattID(
      ansattID: $ansattID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ansattID
        fraDato
        tilDato
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ansattTimerProsjektId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProsjekt = /* GraphQL */ `
  query GetProsjekt($id: ID!) {
    getProsjekt(id: $id) {
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
export const listProsjekts = /* GraphQL */ `
  query ListProsjekts(
    $filter: ModelProsjektFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProsjekts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        prosjektNavn
        timepris
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProsjekts = /* GraphQL */ `
  query SyncProsjekts(
    $filter: ModelProsjektFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProsjekts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        prosjektNavn
        timepris
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAnsatt = /* GraphQL */ `
  query GetAnsatt($id: ID!) {
    getAnsatt(id: $id) {
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
export const listAnsatts = /* GraphQL */ `
  query ListAnsatts(
    $filter: ModelAnsattFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnsatts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        navn
        tittel
        stilling
        epost
        telefon
        ansattDato
        sluttetDato
        bilde
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAnsatts = /* GraphQL */ `
  query SyncAnsatts(
    $filter: ModelAnsattFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnsatts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        navn
        tittel
        stilling
        epost
        telefon
        ansattDato
        sluttetDato
        bilde
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

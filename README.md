1. VS Code
2. Install node https://nodejs.org/en/download/
3. Install amplify cli (npm install -g @aws-amplify/cli)
4. npm install aws-amplify @aws-amplify/ui-react
5. npx create-react-app my-uc-app
6. amplify pull --appId d1kqv8oqjj4jp4 --envName staging
7. amplify push
8. amplify add hosting
8. amplify publish

Figma link:
https://www.figma.com/file/xr8w3LA0h1iEBmFfNd99LP/Roberts-Components?node-id=2653-2886&t=GXOq9p5DeKDkWNA9-0


Datamodell:

type AnsattTimer @model @auth(rules: [{allow: public}]) {
  id: ID!
  ansattID: ID! @index(name: "byAnsatt")
  Prosjekt: Prosjekt @hasOne
  fraDato: AWSDate
  tilDato: AWSDate
}

type Prosjekt @model @auth(rules: [{allow: public}]) {
  id: ID!
  prosjektNavn: String!
  timepris: Float!
}

enum Stillinger {
  DAGLIG_LEDER
  SYSTEMKONSULENT
  ARKITEKT
}

type Ansatt @model @auth(rules: [{allow: public}]) {
  id: ID!
  navn: String!  
  stilling: Stillinger!
  epost: AWSEmail!
  telefon: AWSPhone!
  ansattDato: AWSDate!
  sluttetDato: AWSDate
  AnsattTimers: [AnsattTimer] @hasMany(indexName: "byAnsatt", fields: ["id"])
  bilde: AWSURL
}

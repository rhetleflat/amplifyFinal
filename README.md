1. VS Code
2. Install node https://nodejs.org/en/download/
3. Install amplify cli (npm install -g @aws-amplify/cli)
4. npm install aws-amplify @aws-amplify/ui-react
5. npx create-react-app my-uc-app
6. npm install "@aws-amplify/ui-react@^4.0.1
7. npm install "aws-amplify@^5.0.2"
8.  npm install "react-router-dom"
9. amplify pull --appId d1kqv8oqjj4jp4 --envName staging
10. amplify codegen
11. amplify push
12. amplify add hosting
13. amplify publish

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

Link til UC logo

https://uc.no/wp-content/uploads/2020/06/cropped-cropped-Ulriken_C_logo_white_rgb-e1591863674845.png

Bildegaleri:

http://utestapp-storage-79d4d08d12c95844-staging.s3-website.eu-north-1.amazonaws.com/

Add rewrite rule

</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>

/index.html




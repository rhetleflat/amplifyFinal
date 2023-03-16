// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Stillinger = {
  "DAGLIG_LEDER": "DAGLIG_LEDER",
  "SYSTEMKONSULENT": "SYSTEMKONSULENT",
  "ARKITEKT": "ARKITEKT"
};

const { AnsattTimer, Prosjekt, Ansatt } = initSchema(schema);

export {
  AnsattTimer,
  Prosjekt,
  Ansatt,
  Stillinger
};
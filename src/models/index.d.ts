import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Stillinger {
  DAGLIG_LEDER = "DAGLIG_LEDER",
  SYSTEMKONSULENT = "SYSTEMKONSULENT",
  ARKITEKT = "ARKITEKT"
}



type EagerAnsattTimer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnsattTimer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ansattID: string;
  readonly Prosjekt?: Prosjekt | null;
  readonly fraDato?: string | null;
  readonly tilDato?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ansattTimerProsjektId?: string | null;
}

type LazyAnsattTimer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AnsattTimer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ansattID: string;
  readonly Prosjekt: AsyncItem<Prosjekt | undefined>;
  readonly fraDato?: string | null;
  readonly tilDato?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ansattTimerProsjektId?: string | null;
}

export declare type AnsattTimer = LazyLoading extends LazyLoadingDisabled ? EagerAnsattTimer : LazyAnsattTimer

export declare const AnsattTimer: (new (init: ModelInit<AnsattTimer>) => AnsattTimer) & {
  copyOf(source: AnsattTimer, mutator: (draft: MutableModel<AnsattTimer>) => MutableModel<AnsattTimer> | void): AnsattTimer;
}

type EagerProsjekt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prosjekt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prosjektNavn: string;
  readonly timepris: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProsjekt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Prosjekt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prosjektNavn: string;
  readonly timepris: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Prosjekt = LazyLoading extends LazyLoadingDisabled ? EagerProsjekt : LazyProsjekt

export declare const Prosjekt: (new (init: ModelInit<Prosjekt>) => Prosjekt) & {
  copyOf(source: Prosjekt, mutator: (draft: MutableModel<Prosjekt>) => MutableModel<Prosjekt> | void): Prosjekt;
}

type EagerAnsatt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ansatt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn: string;
  readonly tittel: string;
  readonly stilling: Stillinger | keyof typeof Stillinger;
  readonly epost: string;
  readonly telefon: string;
  readonly ansattDato: string;
  readonly sluttetDato?: string | null;
  readonly AnsattTimers?: (AnsattTimer | null)[] | null;
  readonly bilde?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnsatt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ansatt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly navn: string;
  readonly tittel: string;
  readonly stilling: Stillinger | keyof typeof Stillinger;
  readonly epost: string;
  readonly telefon: string;
  readonly ansattDato: string;
  readonly sluttetDato?: string | null;
  readonly AnsattTimers: AsyncCollection<AnsattTimer>;
  readonly bilde?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ansatt = LazyLoading extends LazyLoadingDisabled ? EagerAnsatt : LazyAnsatt

export declare const Ansatt: (new (init: ModelInit<Ansatt>) => Ansatt) & {
  copyOf(source: Ansatt, mutator: (draft: MutableModel<Ansatt>) => MutableModel<Ansatt> | void): Ansatt;
}
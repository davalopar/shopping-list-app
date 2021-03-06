// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  item: (where?: ItemWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  item: (where: ItemWhereUniqueInput) => ItemNullablePromise;
  items: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Item>;
  itemsConnection: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ItemConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createItem: (data: ItemCreateInput) => ItemPromise;
  updateItem: (args: {
    data: ItemUpdateInput;
    where: ItemWhereUniqueInput;
  }) => ItemPromise;
  updateManyItems: (args: {
    data: ItemUpdateManyMutationInput;
    where?: ItemWhereInput;
  }) => BatchPayloadPromise;
  upsertItem: (args: {
    where: ItemWhereUniqueInput;
    create: ItemCreateInput;
    update: ItemUpdateInput;
  }) => ItemPromise;
  deleteItem: (where: ItemWhereUniqueInput) => ItemPromise;
  deleteManyItems: (where?: ItemWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  item: (
    where?: ItemSubscriptionWhereInput
  ) => ItemSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ItemOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ItemCreateInput {
  id?: Maybe<ID_Input>;
  name?: Maybe<String>;
}

export interface ItemUpdateInput {
  name?: Maybe<String>;
}

export interface ItemUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface ItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  OR?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  NOT?: Maybe<ItemWhereInput[] | ItemWhereInput>;
}

export interface ItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ItemWhereInput>;
  AND?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  OR?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  NOT?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
}

export type ItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateItem {
  count: Int;
}

export interface AggregateItemPromise
  extends Promise<AggregateItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateItemSubscription
  extends Promise<AsyncIterator<AggregateItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ItemPreviousValues {
  id: ID_Output;
  name?: String;
}

export interface ItemPreviousValuesPromise
  extends Promise<ItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ItemPreviousValuesSubscription
  extends Promise<AsyncIterator<ItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ItemEdge {
  node: Item;
  cursor: String;
}

export interface ItemEdgePromise extends Promise<ItemEdge>, Fragmentable {
  node: <T = ItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ItemEdgeSubscription
  extends Promise<AsyncIterator<ItemEdge>>,
    Fragmentable {
  node: <T = ItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ItemSubscriptionPayload {
  mutation: MutationType;
  node: Item;
  updatedFields: String[];
  previousValues: ItemPreviousValues;
}

export interface ItemSubscriptionPayloadPromise
  extends Promise<ItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ItemPreviousValuesPromise>() => T;
}

export interface ItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ItemPreviousValuesSubscription>() => T;
}

export interface Item {
  id: ID_Output;
  name?: String;
}

export interface ItemPromise extends Promise<Item>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ItemSubscription
  extends Promise<AsyncIterator<Item>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ItemNullablePromise
  extends Promise<Item | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface ItemConnection {
  pageInfo: PageInfo;
  edges: ItemEdge[];
}

export interface ItemConnectionPromise
  extends Promise<ItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ItemEdge>>() => T;
  aggregate: <T = AggregateItemPromise>() => T;
}

export interface ItemConnectionSubscription
  extends Promise<AsyncIterator<ItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateItemSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Item",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();

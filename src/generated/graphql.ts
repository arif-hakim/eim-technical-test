import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "../index";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  EmailAddress: any;
  JSONObject: any;
  LocalTime: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  PositiveFloat: any;
  PositiveInt: any;
};

export type Actor = {
  __typename?: "Actor";
  id: Scalars["ID"];
  name: Scalars["String"];
  nationality: Scalars["String"];
};

export type ActorInput = {
  id: Scalars["ID"];
};

export type AddMovieCastInput = {
  actorId: Scalars["String"];
  castName: Scalars["String"];
  movieId: Scalars["String"];
};

export type AddMovieCastPayload = {
  __typename?: "AddMovieCastPayload";
  movieCast: MovieCast;
};

export type Author = {
  __typename?: "Author";
  id: Scalars["ID"];
  name: Scalars["String"];
  nationality: Scalars["String"];
};

export type AuthorInput = {
  id: Scalars["ID"];
};

export type CreateActorInput = {
  name: Scalars["String"];
  nationality: Scalars["String"];
};

export type CreateActorPayload = {
  __typename?: "CreateActorPayload";
  actor: Actor;
};

export type CreateAuthorInput = {
  name: Scalars["String"];
  nationality: Scalars["String"];
};

export type CreateAuthorPayload = {
  __typename?: "CreateAuthorPayload";
  author: Author;
};

export type CreateMovieInput = {
  authorId: Scalars["String"];
  description: Scalars["String"];
  minutes: Scalars["PositiveInt"];
  title: Scalars["String"];
};

export type CreateMoviePayload = {
  __typename?: "CreateMoviePayload";
  movie: Movie;
};

export type DeleteActorInput = {
  id: Scalars["ID"];
};

export type DeleteActorPayload = {
  __typename?: "DeleteActorPayload";
  id: Scalars["ID"];
};

export type DeleteAuthorInput = {
  id: Scalars["ID"];
};

export type DeleteAuthorPayload = {
  __typename?: "DeleteAuthorPayload";
  id: Scalars["ID"];
};

export type DeleteMovieInput = {
  id: Scalars["ID"];
};

export type DeleteMoviePayload = {
  __typename?: "DeleteMoviePayload";
  id: Scalars["ID"];
};

export type Movie = {
  __typename?: "Movie";
  author: Author;
  casts: Array<MovieCast>;
  description: Scalars["String"];
  id: Scalars["ID"];
  minutes: Scalars["PositiveInt"];
  title: Scalars["String"];
};

export type MovieCast = {
  __typename?: "MovieCast";
  actor: Actor;
  castName: Scalars["String"];
  id: Scalars["ID"];
  movie: Movie;
};

export type MovieInput = {
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Boolean"]>;
  addMovieCast: AddMovieCastPayload;
  createActor: CreateActorPayload;
  createAuthor: CreateAuthorPayload;
  createMovie: CreateMoviePayload;
  deleteActor: DeleteActorPayload;
  deleteAuthor: DeleteAuthorPayload;
  deleteMovie: DeleteMoviePayload;
  removeMovieCast: RemoveMovieCastPayload;
  signIn: SignInPayload;
  updateActor: UpdateActorPayload;
  updateAuthor: UpdateAuthorPayload;
  updateMovie: UpdateMoviePayload;
};

export type MutationAddMovieCastArgs = {
  input: AddMovieCastInput;
};

export type MutationCreateActorArgs = {
  input: CreateActorInput;
};

export type MutationCreateAuthorArgs = {
  input: CreateAuthorInput;
};

export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};

export type MutationDeleteActorArgs = {
  input: DeleteActorInput;
};

export type MutationDeleteAuthorArgs = {
  input: DeleteAuthorInput;
};

export type MutationDeleteMovieArgs = {
  input: DeleteMovieInput;
};

export type MutationRemoveMovieCastArgs = {
  input: RemoveMovieCastInput;
};

export type MutationSignInArgs = {
  input: SignInInput;
};

export type MutationUpdateActorArgs = {
  input: UpdateActorInput;
};

export type MutationUpdateAuthorArgs = {
  input: UpdateAuthorInput;
};

export type MutationUpdateMovieArgs = {
  input: UpdateMovieInput;
};

export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Boolean"]>;
  actor: Actor;
  actors: Array<Actor>;
  author: Author;
  authors: Array<Author>;
  movie: Movie;
  movies: Array<Movie>;
};

export type QueryActorArgs = {
  input: ActorInput;
};

export type QueryAuthorArgs = {
  input: AuthorInput;
};

export type QueryMovieArgs = {
  input: MovieInput;
};

export type RemoveMovieCastInput = {
  id: Scalars["ID"];
};

export type RemoveMovieCastPayload = {
  __typename?: "RemoveMovieCastPayload";
  id: Scalars["ID"];
};

export type SignInInput = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type SignInPayload = {
  __typename?: "SignInPayload";
  token: Scalars["String"];
};

export type UpdateActorInput = {
  id: Scalars["ID"];
  patch: UpdateActorPatch;
};

export type UpdateActorPatch = {
  name?: InputMaybe<Scalars["String"]>;
  nationality?: InputMaybe<Scalars["String"]>;
};

export type UpdateActorPayload = {
  __typename?: "UpdateActorPayload";
  actor: Actor;
};

export type UpdateAuthorInput = {
  id: Scalars["ID"];
  patch: UpdateAuthorPatch;
};

export type UpdateAuthorPatch = {
  name?: InputMaybe<Scalars["String"]>;
  nationality?: InputMaybe<Scalars["String"]>;
};

export type UpdateAuthorPayload = {
  __typename?: "UpdateAuthorPayload";
  author: Author;
};

export type UpdateMovieInput = {
  id: Scalars["ID"];
  patch: UpdateMoviePatch;
};

export type UpdateMoviePatch = {
  authorId?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  minutes?: InputMaybe<Scalars["PositiveInt"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateMoviePayload = {
  __typename?: "UpdateMoviePayload";
  movie: Movie;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Actor: ResolverTypeWrapper<Actor>;
  ActorInput: ActorInput;
  AddMovieCastInput: AddMovieCastInput;
  AddMovieCastPayload: ResolverTypeWrapper<AddMovieCastPayload>;
  Author: ResolverTypeWrapper<Author>;
  AuthorInput: AuthorInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  CreateActorInput: CreateActorInput;
  CreateActorPayload: ResolverTypeWrapper<CreateActorPayload>;
  CreateAuthorInput: CreateAuthorInput;
  CreateAuthorPayload: ResolverTypeWrapper<CreateAuthorPayload>;
  CreateMovieInput: CreateMovieInput;
  CreateMoviePayload: ResolverTypeWrapper<CreateMoviePayload>;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DeleteActorInput: DeleteActorInput;
  DeleteActorPayload: ResolverTypeWrapper<DeleteActorPayload>;
  DeleteAuthorInput: DeleteAuthorInput;
  DeleteAuthorPayload: ResolverTypeWrapper<DeleteAuthorPayload>;
  DeleteMovieInput: DeleteMovieInput;
  DeleteMoviePayload: ResolverTypeWrapper<DeleteMoviePayload>;
  EmailAddress: ResolverTypeWrapper<Scalars["EmailAddress"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  JSONObject: ResolverTypeWrapper<Scalars["JSONObject"]>;
  LocalTime: ResolverTypeWrapper<Scalars["LocalTime"]>;
  Movie: ResolverTypeWrapper<Movie>;
  MovieCast: ResolverTypeWrapper<MovieCast>;
  MovieInput: MovieInput;
  Mutation: ResolverTypeWrapper<{}>;
  NonEmptyString: ResolverTypeWrapper<Scalars["NonEmptyString"]>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars["NonNegativeFloat"]>;
  PositiveFloat: ResolverTypeWrapper<Scalars["PositiveFloat"]>;
  PositiveInt: ResolverTypeWrapper<Scalars["PositiveInt"]>;
  Query: ResolverTypeWrapper<{}>;
  RemoveMovieCastInput: RemoveMovieCastInput;
  RemoveMovieCastPayload: ResolverTypeWrapper<RemoveMovieCastPayload>;
  SignInInput: SignInInput;
  SignInPayload: ResolverTypeWrapper<SignInPayload>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  UpdateActorInput: UpdateActorInput;
  UpdateActorPatch: UpdateActorPatch;
  UpdateActorPayload: ResolverTypeWrapper<UpdateActorPayload>;
  UpdateAuthorInput: UpdateAuthorInput;
  UpdateAuthorPatch: UpdateAuthorPatch;
  UpdateAuthorPayload: ResolverTypeWrapper<UpdateAuthorPayload>;
  UpdateMovieInput: UpdateMovieInput;
  UpdateMoviePatch: UpdateMoviePatch;
  UpdateMoviePayload: ResolverTypeWrapper<UpdateMoviePayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Actor: Actor;
  ActorInput: ActorInput;
  AddMovieCastInput: AddMovieCastInput;
  AddMovieCastPayload: AddMovieCastPayload;
  Author: Author;
  AuthorInput: AuthorInput;
  Boolean: Scalars["Boolean"];
  CreateActorInput: CreateActorInput;
  CreateActorPayload: CreateActorPayload;
  CreateAuthorInput: CreateAuthorInput;
  CreateAuthorPayload: CreateAuthorPayload;
  CreateMovieInput: CreateMovieInput;
  CreateMoviePayload: CreateMoviePayload;
  Date: Scalars["Date"];
  DateTime: Scalars["DateTime"];
  DeleteActorInput: DeleteActorInput;
  DeleteActorPayload: DeleteActorPayload;
  DeleteAuthorInput: DeleteAuthorInput;
  DeleteAuthorPayload: DeleteAuthorPayload;
  DeleteMovieInput: DeleteMovieInput;
  DeleteMoviePayload: DeleteMoviePayload;
  EmailAddress: Scalars["EmailAddress"];
  ID: Scalars["ID"];
  JSONObject: Scalars["JSONObject"];
  LocalTime: Scalars["LocalTime"];
  Movie: Movie;
  MovieCast: MovieCast;
  MovieInput: MovieInput;
  Mutation: {};
  NonEmptyString: Scalars["NonEmptyString"];
  NonNegativeFloat: Scalars["NonNegativeFloat"];
  PositiveFloat: Scalars["PositiveFloat"];
  PositiveInt: Scalars["PositiveInt"];
  Query: {};
  RemoveMovieCastInput: RemoveMovieCastInput;
  RemoveMovieCastPayload: RemoveMovieCastPayload;
  SignInInput: SignInInput;
  SignInPayload: SignInPayload;
  String: Scalars["String"];
  UpdateActorInput: UpdateActorInput;
  UpdateActorPatch: UpdateActorPatch;
  UpdateActorPayload: UpdateActorPayload;
  UpdateAuthorInput: UpdateAuthorInput;
  UpdateAuthorPatch: UpdateAuthorPatch;
  UpdateAuthorPayload: UpdateAuthorPayload;
  UpdateMovieInput: UpdateMovieInput;
  UpdateMoviePatch: UpdateMoviePatch;
  UpdateMoviePayload: UpdateMoviePayload;
};

export type ActorResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Actor"] = ResolversParentTypes["Actor"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddMovieCastPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["AddMovieCastPayload"] = ResolversParentTypes["AddMovieCastPayload"]
> = {
  movieCast?: Resolver<ResolversTypes["MovieCast"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Author"] = ResolversParentTypes["Author"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateActorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CreateActorPayload"] = ResolversParentTypes["CreateActorPayload"]
> = {
  actor?: Resolver<ResolversTypes["Actor"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAuthorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CreateAuthorPayload"] = ResolversParentTypes["CreateAuthorPayload"]
> = {
  author?: Resolver<ResolversTypes["Author"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMoviePayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CreateMoviePayload"] = ResolversParentTypes["CreateMoviePayload"]
> = {
  movie?: Resolver<ResolversTypes["Movie"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DeleteActorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["DeleteActorPayload"] = ResolversParentTypes["DeleteActorPayload"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteAuthorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["DeleteAuthorPayload"] = ResolversParentTypes["DeleteAuthorPayload"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteMoviePayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["DeleteMoviePayload"] = ResolversParentTypes["DeleteMoviePayload"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EmailAddress"], any> {
  name: "EmailAddress";
}

export interface JsonObjectScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSONObject"], any> {
  name: "JSONObject";
}

export interface LocalTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["LocalTime"], any> {
  name: "LocalTime";
}

export type MovieResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Movie"] = ResolversParentTypes["Movie"]
> = {
  author?: Resolver<ResolversTypes["Author"], ParentType, ContextType>;
  casts?: Resolver<Array<ResolversTypes["MovieCast"]>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  minutes?: Resolver<ResolversTypes["PositiveInt"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieCastResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["MovieCast"] = ResolversParentTypes["MovieCast"]
> = {
  actor?: Resolver<ResolversTypes["Actor"], ParentType, ContextType>;
  castName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  movie?: Resolver<ResolversTypes["Movie"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  addMovieCast?: Resolver<
    ResolversTypes["AddMovieCastPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationAddMovieCastArgs, "input">
  >;
  createActor?: Resolver<
    ResolversTypes["CreateActorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateActorArgs, "input">
  >;
  createAuthor?: Resolver<
    ResolversTypes["CreateAuthorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAuthorArgs, "input">
  >;
  createMovie?: Resolver<
    ResolversTypes["CreateMoviePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateMovieArgs, "input">
  >;
  deleteActor?: Resolver<
    ResolversTypes["DeleteActorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteActorArgs, "input">
  >;
  deleteAuthor?: Resolver<
    ResolversTypes["DeleteAuthorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAuthorArgs, "input">
  >;
  deleteMovie?: Resolver<
    ResolversTypes["DeleteMoviePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMovieArgs, "input">
  >;
  removeMovieCast?: Resolver<
    ResolversTypes["RemoveMovieCastPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveMovieCastArgs, "input">
  >;
  signIn?: Resolver<
    ResolversTypes["SignInPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationSignInArgs, "input">
  >;
  updateActor?: Resolver<
    ResolversTypes["UpdateActorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateActorArgs, "input">
  >;
  updateAuthor?: Resolver<
    ResolversTypes["UpdateAuthorPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAuthorArgs, "input">
  >;
  updateMovie?: Resolver<
    ResolversTypes["UpdateMoviePayload"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateMovieArgs, "input">
  >;
};

export interface NonEmptyStringScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonEmptyString"], any> {
  name: "NonEmptyString";
}

export interface NonNegativeFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonNegativeFloat"], any> {
  name: "NonNegativeFloat";
}

export interface PositiveFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PositiveFloat"], any> {
  name: "PositiveFloat";
}

export interface PositiveIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PositiveInt"], any> {
  name: "PositiveInt";
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  _?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  actor?: Resolver<
    ResolversTypes["Actor"],
    ParentType,
    ContextType,
    RequireFields<QueryActorArgs, "input">
  >;
  actors?: Resolver<Array<ResolversTypes["Actor"]>, ParentType, ContextType>;
  author?: Resolver<
    ResolversTypes["Author"],
    ParentType,
    ContextType,
    RequireFields<QueryAuthorArgs, "input">
  >;
  authors?: Resolver<Array<ResolversTypes["Author"]>, ParentType, ContextType>;
  movie?: Resolver<
    ResolversTypes["Movie"],
    ParentType,
    ContextType,
    RequireFields<QueryMovieArgs, "input">
  >;
  movies?: Resolver<Array<ResolversTypes["Movie"]>, ParentType, ContextType>;
};

export type RemoveMovieCastPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["RemoveMovieCastPayload"] = ResolversParentTypes["RemoveMovieCastPayload"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SignInPayload"] = ResolversParentTypes["SignInPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateActorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UpdateActorPayload"] = ResolversParentTypes["UpdateActorPayload"]
> = {
  actor?: Resolver<ResolversTypes["Actor"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAuthorPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UpdateAuthorPayload"] = ResolversParentTypes["UpdateAuthorPayload"]
> = {
  author?: Resolver<ResolversTypes["Author"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMoviePayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UpdateMoviePayload"] = ResolversParentTypes["UpdateMoviePayload"]
> = {
  movie?: Resolver<ResolversTypes["Movie"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Actor?: ActorResolvers<ContextType>;
  AddMovieCastPayload?: AddMovieCastPayloadResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  CreateActorPayload?: CreateActorPayloadResolvers<ContextType>;
  CreateAuthorPayload?: CreateAuthorPayloadResolvers<ContextType>;
  CreateMoviePayload?: CreateMoviePayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DeleteActorPayload?: DeleteActorPayloadResolvers<ContextType>;
  DeleteAuthorPayload?: DeleteAuthorPayloadResolvers<ContextType>;
  DeleteMoviePayload?: DeleteMoviePayloadResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Movie?: MovieResolvers<ContextType>;
  MovieCast?: MovieCastResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  RemoveMovieCastPayload?: RemoveMovieCastPayloadResolvers<ContextType>;
  SignInPayload?: SignInPayloadResolvers<ContextType>;
  UpdateActorPayload?: UpdateActorPayloadResolvers<ContextType>;
  UpdateAuthorPayload?: UpdateAuthorPayloadResolvers<ContextType>;
  UpdateMoviePayload?: UpdateMoviePayloadResolvers<ContextType>;
};

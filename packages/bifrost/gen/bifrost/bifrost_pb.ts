// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file bifrost/bifrost.proto (package bifrost, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
	BinaryReadOptions,
	FieldList,
	JsonReadOptions,
	JsonValue,
	PartialMessage,
	PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3, protoInt64 } from '@bufbuild/protobuf';

/**
 * @generated from message bifrost.KVServiceGetRequest
 */
export class KVServiceGetRequest extends Message<KVServiceGetRequest> {
	/**
	 * @generated from field: string key = 1;
	 */
	key = '';

	constructor(data?: PartialMessage<KVServiceGetRequest>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServiceGetRequest';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServiceGetRequest {
		return new KVServiceGetRequest().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServiceGetRequest {
		return new KVServiceGetRequest().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServiceGetRequest {
		return new KVServiceGetRequest().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServiceGetRequest | PlainMessage<KVServiceGetRequest> | undefined,
		b: KVServiceGetRequest | PlainMessage<KVServiceGetRequest> | undefined
	): boolean {
		return proto3.util.equals(KVServiceGetRequest, a, b);
	}
}

/**
 * @generated from message bifrost.KVServiceGetResponse
 */
export class KVServiceGetResponse extends Message<KVServiceGetResponse> {
	/**
	 * @generated from field: bifrost.KeyValueEntry key_value_entry = 1;
	 */
	keyValueEntry?: KeyValueEntry;

	constructor(data?: PartialMessage<KVServiceGetResponse>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServiceGetResponse';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'key_value_entry', kind: 'message', T: KeyValueEntry },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServiceGetResponse {
		return new KVServiceGetResponse().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServiceGetResponse {
		return new KVServiceGetResponse().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServiceGetResponse {
		return new KVServiceGetResponse().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServiceGetResponse | PlainMessage<KVServiceGetResponse> | undefined,
		b: KVServiceGetResponse | PlainMessage<KVServiceGetResponse> | undefined
	): boolean {
		return proto3.util.equals(KVServiceGetResponse, a, b);
	}
}

/**
 * @generated from message bifrost.KVServicePutRequest
 */
export class KVServicePutRequest extends Message<KVServicePutRequest> {
	/**
	 * @generated from field: string key = 1;
	 */
	key = '';

	/**
	 * @generated from field: string value = 2;
	 */
	value = '';

	constructor(data?: PartialMessage<KVServicePutRequest>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServicePutRequest';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 2, name: 'value', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServicePutRequest {
		return new KVServicePutRequest().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServicePutRequest {
		return new KVServicePutRequest().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServicePutRequest {
		return new KVServicePutRequest().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServicePutRequest | PlainMessage<KVServicePutRequest> | undefined,
		b: KVServicePutRequest | PlainMessage<KVServicePutRequest> | undefined
	): boolean {
		return proto3.util.equals(KVServicePutRequest, a, b);
	}
}

/**
 * @generated from message bifrost.KVServicePutResponse
 */
export class KVServicePutResponse extends Message<KVServicePutResponse> {
	/**
	 * @generated from field: uint64 revision = 1;
	 */
	revision = protoInt64.zero;

	constructor(data?: PartialMessage<KVServicePutResponse>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServicePutResponse';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'revision', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServicePutResponse {
		return new KVServicePutResponse().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServicePutResponse {
		return new KVServicePutResponse().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServicePutResponse {
		return new KVServicePutResponse().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServicePutResponse | PlainMessage<KVServicePutResponse> | undefined,
		b: KVServicePutResponse | PlainMessage<KVServicePutResponse> | undefined
	): boolean {
		return proto3.util.equals(KVServicePutResponse, a, b);
	}
}

/**
 * @generated from message bifrost.KVServiceDeleteRequest
 */
export class KVServiceDeleteRequest extends Message<KVServiceDeleteRequest> {
	/**
	 * @generated from field: string key = 1;
	 */
	key = '';

	constructor(data?: PartialMessage<KVServiceDeleteRequest>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServiceDeleteRequest';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServiceDeleteRequest {
		return new KVServiceDeleteRequest().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServiceDeleteRequest {
		return new KVServiceDeleteRequest().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServiceDeleteRequest {
		return new KVServiceDeleteRequest().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServiceDeleteRequest | PlainMessage<KVServiceDeleteRequest> | undefined,
		b: KVServiceDeleteRequest | PlainMessage<KVServiceDeleteRequest> | undefined
	): boolean {
		return proto3.util.equals(KVServiceDeleteRequest, a, b);
	}
}

/**
 * @generated from message bifrost.KVServiceDeleteResponse
 */
export class KVServiceDeleteResponse extends Message<KVServiceDeleteResponse> {
	constructor(data?: PartialMessage<KVServiceDeleteResponse>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KVServiceDeleteResponse';
	static readonly fields: FieldList = proto3.util.newFieldList(() => []);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KVServiceDeleteResponse {
		return new KVServiceDeleteResponse().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KVServiceDeleteResponse {
		return new KVServiceDeleteResponse().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KVServiceDeleteResponse {
		return new KVServiceDeleteResponse().fromJsonString(jsonString, options);
	}

	static equals(
		a: KVServiceDeleteResponse | PlainMessage<KVServiceDeleteResponse> | undefined,
		b: KVServiceDeleteResponse | PlainMessage<KVServiceDeleteResponse> | undefined
	): boolean {
		return proto3.util.equals(KVServiceDeleteResponse, a, b);
	}
}

/**
 * @generated from message bifrost.KeyValueEntry
 */
export class KeyValueEntry extends Message<KeyValueEntry> {
	/**
	 * @generated from field: string key = 1;
	 */
	key = '';

	/**
	 * @generated from field: string value = 2;
	 */
	value = '';

	/**
	 * @generated from field: uint64 revision = 3;
	 */
	revision = protoInt64.zero;

	constructor(data?: PartialMessage<KeyValueEntry>) {
		super();
		proto3.util.initPartial(data, this);
	}

	static readonly runtime = proto3;
	static readonly typeName = 'bifrost.KeyValueEntry';
	static readonly fields: FieldList = proto3.util.newFieldList(() => [
		{ no: 1, name: 'key', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 2, name: 'value', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
		{ no: 3, name: 'revision', kind: 'scalar', T: 4 /* ScalarType.UINT64 */ },
	]);

	static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyValueEntry {
		return new KeyValueEntry().fromBinary(bytes, options);
	}

	static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyValueEntry {
		return new KeyValueEntry().fromJson(jsonValue, options);
	}

	static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyValueEntry {
		return new KeyValueEntry().fromJsonString(jsonString, options);
	}

	static equals(
		a: KeyValueEntry | PlainMessage<KeyValueEntry> | undefined,
		b: KeyValueEntry | PlainMessage<KeyValueEntry> | undefined
	): boolean {
		return proto3.util.equals(KeyValueEntry, a, b);
	}
}

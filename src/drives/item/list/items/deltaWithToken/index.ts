/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createListItemFromDiscriminatorValue, deserializeIntoBaseDeltaFunctionResponse, serializeBaseDeltaFunctionResponse, serializeListItem, type BaseDeltaFunctionResponse, type ListItem } from '../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DeltaWithTokenGetResponse}
 */
export function createDeltaWithTokenGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDeltaWithTokenGetResponse;
}
export interface DeltaWithTokenGetResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: ListItem[];
}
/**
 * Provides operations to call the delta method.
 */
export interface DeltaWithTokenRequestBuilder extends BaseRequestBuilder<DeltaWithTokenRequestBuilder> {
    /**
     * Invoke function delta
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeltaWithTokenGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeltaWithTokenRequestBuilderGetQueryParameters> | undefined) : Promise<DeltaWithTokenGetResponse | undefined>;
    /**
     * Invoke function delta
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeltaWithTokenRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function delta
 */
export interface DeltaWithTokenRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDeltaWithTokenGetResponse(deltaWithTokenGetResponse: Partial<DeltaWithTokenGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseDeltaFunctionResponse(deltaWithTokenGetResponse),
        "value": n => { deltaWithTokenGetResponse.value = n.getCollectionOfObjectValues<ListItem>(createListItemFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDeltaWithTokenGetResponse(writer: SerializationWriter, deltaWithTokenGetResponse: Partial<DeltaWithTokenGetResponse> | undefined = {}) : void {
    serializeBaseDeltaFunctionResponse(writer, deltaWithTokenGetResponse)
    writer.writeCollectionOfObjectValues<ListItem>("value", deltaWithTokenGetResponse.value, serializeListItem);
}
/**
 * Uri template for the request builder.
 */
export const DeltaWithTokenRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/items/delta(token='{token}'){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeltaWithTokenRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeltaWithTokenRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeltaWithTokenRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeltaWithTokenGetResponseFromDiscriminatorValue,
        queryParametersMapper: DeltaWithTokenRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */

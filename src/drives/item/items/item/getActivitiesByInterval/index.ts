/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createItemActivityStatFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeItemActivityStat, type BaseCollectionPaginationCountResponse, type ItemActivityStat } from '../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetActivitiesByIntervalGetResponse}
 */
export function createGetActivitiesByIntervalGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetActivitiesByIntervalGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoGetActivitiesByIntervalGetResponse(getActivitiesByIntervalGetResponse: Partial<GetActivitiesByIntervalGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getActivitiesByIntervalGetResponse),
        "value": n => { getActivitiesByIntervalGetResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
export interface GetActivitiesByIntervalGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ItemActivityStat[];
}
/**
 * Provides operations to call the getActivitiesByInterval method.
 */
export interface GetActivitiesByIntervalRequestBuilder extends BaseRequestBuilder<GetActivitiesByIntervalRequestBuilder> {
    /**
     * Get a collection of itemActivityStats resources for the activities that took place on this resource within the specified time interval. Analytics aggregates might not be available for all action types.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetActivitiesByIntervalGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/itemactivitystat-getactivitybyinterval?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GetActivitiesByIntervalRequestBuilderGetQueryParameters> | undefined) : Promise<GetActivitiesByIntervalGetResponse | undefined>;
    /**
     * Get a collection of itemActivityStats resources for the activities that took place on this resource within the specified time interval. Analytics aggregates might not be available for all action types.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetActivitiesByIntervalRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a collection of itemActivityStats resources for the activities that took place on this resource within the specified time interval. Analytics aggregates might not be available for all action types.
 */
export interface GetActivitiesByIntervalRequestBuilderGetQueryParameters {
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
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetActivitiesByIntervalGetResponse(writer: SerializationWriter, getActivitiesByIntervalGetResponse: Partial<GetActivitiesByIntervalGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalGetResponse)
    writer.writeCollectionOfObjectValues<ItemActivityStat>("value", getActivitiesByIntervalGetResponse.value, serializeItemActivityStat);
}
/**
 * Uri template for the request builder.
 */
export const GetActivitiesByIntervalRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/getActivitiesByInterval(){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetActivitiesByIntervalRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const GetActivitiesByIntervalRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetActivitiesByIntervalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetActivitiesByIntervalGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetActivitiesByIntervalRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */

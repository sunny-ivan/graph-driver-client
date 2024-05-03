/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createItemActivityStatCollectionResponseFromDiscriminatorValue, createItemActivityStatFromDiscriminatorValue, serializeItemActivityStat, type ItemActivityStat, type ItemActivityStatCollectionResponse } from '../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { ItemActivityStatItemRequestBuilderNavigationMetadata, ItemActivityStatItemRequestBuilderRequestsMetadata, type ItemActivityStatItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
 */
export interface ItemActivityStatsRequestBuilder extends BaseRequestBuilder<ItemActivityStatsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the itemActivityStats property of the microsoft.graph.itemAnalytics entity.
     * @param itemActivityStatId The unique identifier of itemActivityStat
     * @returns {ItemActivityStatItemRequestBuilder}
     */
     byItemActivityStatId(itemActivityStatId: string) : ItemActivityStatItemRequestBuilder;
    /**
     * Get itemActivityStats from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ItemActivityStatCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ItemActivityStatsRequestBuilderGetQueryParameters> | undefined) : Promise<ItemActivityStatCollectionResponse | undefined>;
    /**
     * Create new navigation property to itemActivityStats for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ItemActivityStat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ItemActivityStat, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ItemActivityStat | undefined>;
    /**
     * Get itemActivityStats from drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemActivityStatsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to itemActivityStats for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ItemActivityStat, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get itemActivityStats from drives
 */
export interface ItemActivityStatsRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const ItemActivityStatsRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/analytics/itemActivityStats{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ItemActivityStatsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
 * Metadata for all the navigation properties in the request builder.
 */
export const ItemActivityStatsRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemActivityStatsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byItemActivityStatId: {
        requestsMetadata: ItemActivityStatItemRequestBuilderRequestsMetadata,
        navigationMetadata: ItemActivityStatItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["itemActivityStat%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemActivityStatsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ItemActivityStatsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createItemActivityStatCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ItemActivityStatsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ItemActivityStatsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createItemActivityStatFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeItemActivityStat,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

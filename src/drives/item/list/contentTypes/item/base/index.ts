/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createContentTypeFromDiscriminatorValue, type ContentType } from '../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the base property of the microsoft.graph.contentType entity.
 */
export interface BaseRequestBuilderEscaped extends BaseRequestBuilder<BaseRequestBuilderEscaped> {
    /**
     * Parent contentType from which this content type is derived.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContentType>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<BaseRequestBuilderGetQueryParameters> | undefined) : Promise<ContentType | undefined>;
    /**
     * Parent contentType from which this content type is derived.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<BaseRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Parent contentType from which this content type is derived.
 */
export interface BaseRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const BaseRequestBuilderEscapedUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}/base{?%24expand,%24select}";
/**
 * Metadata for all the requests in the request builder.
 */
export const BaseRequestBuilderEscapedRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: BaseRequestBuilderEscapedUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContentTypeFromDiscriminatorValue,
    },
};
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const BaseRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/* tslint:enable */
/* eslint-enable */

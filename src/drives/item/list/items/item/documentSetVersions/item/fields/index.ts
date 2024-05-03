/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFieldValueSetFromDiscriminatorValue, serializeFieldValueSet, type FieldValueSet } from '../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fields property of the microsoft.graph.listItemVersion entity.
 */
export interface FieldsRequestBuilder extends BaseRequestBuilder<FieldsRequestBuilder> {
    /**
     * Delete navigation property fields for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A collection of the fields and values for this version of the list item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FieldValueSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FieldsRequestBuilderGetQueryParameters> | undefined) : Promise<FieldValueSet | undefined>;
    /**
     * Update the navigation property fields in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FieldValueSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: FieldValueSet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FieldValueSet | undefined>;
    /**
     * Delete navigation property fields for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A collection of the fields and values for this version of the list item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FieldsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property fields in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: FieldValueSet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of the fields and values for this version of the list item.
 */
export interface FieldsRequestBuilderGetQueryParameters {
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
export const FieldsRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/items/{listItem%2Did}/documentSetVersions/{documentSetVersion%2Did}/fields{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FieldsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FieldsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FieldsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FieldsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFieldValueSetFromDiscriminatorValue,
        queryParametersMapper: FieldsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FieldsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFieldValueSetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFieldValueSet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

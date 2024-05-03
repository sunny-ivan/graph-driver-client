/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveItemFromDiscriminatorValue, type DriveItem } from '../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the media for the drive entity.
 */
export interface ContentRequestBuilder extends BaseRequestBuilder<ContentRequestBuilder> {
    /**
     * The content stream, if the item represents a file.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ContentRequestBuilderGetQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The content stream, if the item represents a file.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     put(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DriveItem | undefined>;
    /**
     * The content stream, if the item represents a file.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContentRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * The content stream, if the item represents a file.
     * @param body Binary request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The content stream, if the item represents a file.
 */
export interface ContentRequestBuilderGetQueryParameters {
    /**
     * Format of the content
     */
    format?: string;
}
/**
 * Uri template for the request builder.
 */
export const ContentRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/bundles/{driveItem%2Did}/content{?%24format*}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContentRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "format": "%24format",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContentRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        queryParametersMapper: ContentRequestBuilderGetQueryParametersMapper,
    },
    put: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        requestBodyContentType: "application/octet-stream",
        requestInformationContentSetMethod: "setStreamContent",
    },
};
/* tslint:enable */
/* eslint-enable */

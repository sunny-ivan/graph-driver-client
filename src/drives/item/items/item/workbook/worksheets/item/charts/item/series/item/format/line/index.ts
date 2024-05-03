/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookChartLineFormatFromDiscriminatorValue, serializeWorkbookChartLineFormat, type WorkbookChartLineFormat } from '../../../../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { ClearRequestBuilderRequestsMetadata, type ClearRequestBuilder } from './clear/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the line property of the microsoft.graph.workbookChartSeriesFormat entity.
 */
export interface LineRequestBuilder extends BaseRequestBuilder<LineRequestBuilder> {
    /**
     * Provides operations to call the clear method.
     */
    get clear(): ClearRequestBuilder;
    /**
     * Delete navigation property line for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents line formatting. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartLineFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<LineRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookChartLineFormat | undefined>;
    /**
     * Update the navigation property line in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartLineFormat>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookChartLineFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartLineFormat | undefined>;
    /**
     * Delete navigation property line for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents line formatting. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LineRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property line in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookChartLineFormat, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents line formatting. Read-only.
 */
export interface LineRequestBuilderGetQueryParameters {
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
export const LineRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/{workbookChartSeries%2Did}/format/line{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LineRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const LineRequestBuilderNavigationMetadata: Record<Exclude<keyof LineRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    clear: {
        requestsMetadata: ClearRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LineRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: LineRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: LineRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartLineFormatFromDiscriminatorValue,
        queryParametersMapper: LineRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: LineRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartLineFormatFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookChartLineFormat,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookPivotTableFromDiscriminatorValue, serializeWorkbookPivotTable, type WorkbookPivotTable } from '../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { RefreshRequestBuilderRequestsMetadata, type RefreshRequestBuilder } from './refresh/';
// @ts-ignore
import { type WorksheetRequestBuilder, WorksheetRequestBuilderRequestsMetadata } from './worksheet/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pivotTables property of the microsoft.graph.workbookWorksheet entity.
 */
export interface WorkbookPivotTableItemRequestBuilder extends BaseRequestBuilder<WorkbookPivotTableItemRequestBuilder> {
    /**
     * Provides operations to call the refresh method.
     */
    get refresh(): RefreshRequestBuilder;
    /**
     * Provides operations to manage the worksheet property of the microsoft.graph.workbookPivotTable entity.
     */
    get worksheet(): WorksheetRequestBuilder;
    /**
     * Delete navigation property pivotTables for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of PivotTables that are part of the worksheet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookPivotTable>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WorkbookPivotTableItemRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookPivotTable | undefined>;
    /**
     * Update the navigation property pivotTables in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookPivotTable>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookPivotTable, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookPivotTable | undefined>;
    /**
     * Delete navigation property pivotTables for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of PivotTables that are part of the worksheet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WorkbookPivotTableItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property pivotTables in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookPivotTable, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of PivotTables that are part of the worksheet.
 */
export interface WorkbookPivotTableItemRequestBuilderGetQueryParameters {
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
export const WorkbookPivotTableItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/pivotTables/{workbookPivotTable%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WorkbookPivotTableItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WorkbookPivotTableItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WorkbookPivotTableItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    refresh: {
        requestsMetadata: RefreshRequestBuilderRequestsMetadata,
    },
    worksheet: {
        requestsMetadata: WorksheetRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WorkbookPivotTableItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WorkbookPivotTableItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WorkbookPivotTableItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookPivotTableFromDiscriminatorValue,
        queryParametersMapper: WorkbookPivotTableItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WorkbookPivotTableItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookPivotTableFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookPivotTable,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

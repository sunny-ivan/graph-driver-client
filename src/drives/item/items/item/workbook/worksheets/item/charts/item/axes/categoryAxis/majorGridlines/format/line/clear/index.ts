/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the clear method.
 */
export interface ClearRequestBuilder extends BaseRequestBuilder<ClearRequestBuilder> {
    /**
     * Clear the line format of a chart element.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/chartlineformat-clear?view=graph-rest-1.0|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Clear the line format of a chart element.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ClearRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/categoryAxis/majorGridlines/format/line/clear";
/**
 * Metadata for all the requests in the request builder.
 */
export const ClearRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ClearRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */

/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DaysPostRequestBody}
 */
export function createDaysPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDaysPostRequestBody;
}
export interface DaysPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The endDate property
     */
    endDate?: UntypedNode;
    /**
     * The startDate property
     */
    startDate?: UntypedNode;
}
/**
 * Provides operations to call the days method.
 */
export interface DaysRequestBuilder extends BaseRequestBuilder<DaysRequestBuilder> {
    /**
     * Invoke action days
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DaysPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action days
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DaysPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDaysPostRequestBody(daysPostRequestBody: Partial<DaysPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDate": n => { daysPostRequestBody.endDate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "startDate": n => { daysPostRequestBody.startDate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDaysPostRequestBody(writer: SerializationWriter, daysPostRequestBody: Partial<DaysPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("endDate", daysPostRequestBody.endDate);
    writer.writeObjectValue("startDate", daysPostRequestBody.startDate);
    writer.writeAdditionalData(daysPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DaysRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/days";
/**
 * Metadata for all the requests in the request builder.
 */
export const DaysRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DaysRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDaysPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

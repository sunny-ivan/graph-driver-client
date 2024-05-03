/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Floor_MathPostRequestBody}
 */
export function createFloor_MathPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFloor_MathPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoFloor_MathPostRequestBody(floor_MathPostRequestBody: Partial<Floor_MathPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "mode": n => { floor_MathPostRequestBody.mode = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "number": n => { floor_MathPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "significance": n => { floor_MathPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface Floor_MathPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The mode property
     */
    mode?: Json;
    /**
     * The number property
     */
    number?: Json;
    /**
     * The significance property
     */
    significance?: Json;
}
/**
 * Provides operations to call the floor_Math method.
 */
export interface Floor_MathRequestBuilder extends BaseRequestBuilder<Floor_MathRequestBuilder> {
    /**
     * Invoke action floor_Math
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Floor_MathPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action floor_Math
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Floor_MathPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeFloor_MathPostRequestBody(writer: SerializationWriter, floor_MathPostRequestBody: Partial<Floor_MathPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("mode", floor_MathPostRequestBody.mode, serializeJson);
    writer.writeObjectValue<Json>("number", floor_MathPostRequestBody.number, serializeJson);
    writer.writeObjectValue<Json>("significance", floor_MathPostRequestBody.significance, serializeJson);
    writer.writeAdditionalData(floor_MathPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Floor_MathRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/floor_Math";
/**
 * Metadata for all the requests in the request builder.
 */
export const Floor_MathRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Floor_MathRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFloor_MathPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

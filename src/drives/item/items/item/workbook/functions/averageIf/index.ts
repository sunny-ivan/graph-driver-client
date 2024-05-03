/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AverageIfPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The averageRange property
     */
    averageRange?: Json;
    /**
     * The criteria property
     */
    criteria?: Json;
    /**
     * The range property
     */
    range?: Json;
}
/**
 * Provides operations to call the averageIf method.
 */
export interface AverageIfRequestBuilder extends BaseRequestBuilder<AverageIfRequestBuilder> {
    /**
     * Invoke action averageIf
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AverageIfPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action averageIf
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AverageIfPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AverageIfPostRequestBody}
 */
export function createAverageIfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAverageIfPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAverageIfPostRequestBody(averageIfPostRequestBody: Partial<AverageIfPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "averageRange": n => { averageIfPostRequestBody.averageRange = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "criteria": n => { averageIfPostRequestBody.criteria = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "range": n => { averageIfPostRequestBody.range = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAverageIfPostRequestBody(writer: SerializationWriter, averageIfPostRequestBody: Partial<AverageIfPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("averageRange", averageIfPostRequestBody.averageRange, serializeJson);
    writer.writeObjectValue<Json>("criteria", averageIfPostRequestBody.criteria, serializeJson);
    writer.writeObjectValue<Json>("range", averageIfPostRequestBody.range, serializeJson);
    writer.writeAdditionalData(averageIfPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AverageIfRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/averageIf";
/**
 * Metadata for all the requests in the request builder.
 */
export const AverageIfRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AverageIfRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAverageIfPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface Binom_Dist_RangePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The numberS property
     */
    numberS?: Json;
    /**
     * The numberS2 property
     */
    numberS2?: Json;
    /**
     * The probabilityS property
     */
    probabilityS?: Json;
    /**
     * The trials property
     */
    trials?: Json;
}
/**
 * Provides operations to call the binom_Dist_Range method.
 */
export interface Binom_Dist_RangeRequestBuilder extends BaseRequestBuilder<Binom_Dist_RangeRequestBuilder> {
    /**
     * Invoke action binom_Dist_Range
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Binom_Dist_RangePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action binom_Dist_Range
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Binom_Dist_RangePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Binom_Dist_RangePostRequestBody}
 */
export function createBinom_Dist_RangePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBinom_Dist_RangePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoBinom_Dist_RangePostRequestBody(binom_Dist_RangePostRequestBody: Partial<Binom_Dist_RangePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "numberS": n => { binom_Dist_RangePostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS2": n => { binom_Dist_RangePostRequestBody.numberS2 = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { binom_Dist_RangePostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "trials": n => { binom_Dist_RangePostRequestBody.trials = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBinom_Dist_RangePostRequestBody(writer: SerializationWriter, binom_Dist_RangePostRequestBody: Partial<Binom_Dist_RangePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("numberS", binom_Dist_RangePostRequestBody.numberS, serializeJson);
    writer.writeObjectValue<Json>("numberS2", binom_Dist_RangePostRequestBody.numberS2, serializeJson);
    writer.writeObjectValue<Json>("probabilityS", binom_Dist_RangePostRequestBody.probabilityS, serializeJson);
    writer.writeObjectValue<Json>("trials", binom_Dist_RangePostRequestBody.trials, serializeJson);
    writer.writeAdditionalData(binom_Dist_RangePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Binom_Dist_RangeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/binom_Dist_Range";
/**
 * Metadata for all the requests in the request builder.
 */
export const Binom_Dist_RangeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Binom_Dist_RangeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBinom_Dist_RangePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

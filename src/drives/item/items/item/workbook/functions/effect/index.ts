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
 * @returns {EffectPostRequestBody}
 */
export function createEffectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEffectPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoEffectPostRequestBody(effectPostRequestBody: Partial<EffectPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "nominalRate": n => { effectPostRequestBody.nominalRate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "npery": n => { effectPostRequestBody.npery = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface EffectPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The nominalRate property
     */
    nominalRate?: Json;
    /**
     * The npery property
     */
    npery?: Json;
}
/**
 * Provides operations to call the effect method.
 */
export interface EffectRequestBuilder extends BaseRequestBuilder<EffectRequestBuilder> {
    /**
     * Invoke action effect
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: EffectPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action effect
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EffectPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeEffectPostRequestBody(writer: SerializationWriter, effectPostRequestBody: Partial<EffectPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("nominalRate", effectPostRequestBody.nominalRate, serializeJson);
    writer.writeObjectValue<Json>("npery", effectPostRequestBody.npery, serializeJson);
    writer.writeAdditionalData(effectPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const EffectRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/effect";
/**
 * Metadata for all the requests in the request builder.
 */
export const EffectRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EffectRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEffectPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

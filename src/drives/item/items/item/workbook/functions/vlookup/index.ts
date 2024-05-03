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
 * @returns {VlookupPostRequestBody}
 */
export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoVlookupPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoVlookupPostRequestBody(vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "colIndexNum": n => { vlookupPostRequestBody.colIndexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupValue": n => { vlookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rangeLookup": n => { vlookupPostRequestBody.rangeLookup = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "tableArray": n => { vlookupPostRequestBody.tableArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeVlookupPostRequestBody(writer: SerializationWriter, vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("colIndexNum", vlookupPostRequestBody.colIndexNum, serializeJson);
    writer.writeObjectValue<Json>("lookupValue", vlookupPostRequestBody.lookupValue, serializeJson);
    writer.writeObjectValue<Json>("rangeLookup", vlookupPostRequestBody.rangeLookup, serializeJson);
    writer.writeObjectValue<Json>("tableArray", vlookupPostRequestBody.tableArray, serializeJson);
    writer.writeAdditionalData(vlookupPostRequestBody.additionalData);
}
export interface VlookupPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The colIndexNum property
     */
    colIndexNum?: Json;
    /**
     * The lookupValue property
     */
    lookupValue?: Json;
    /**
     * The rangeLookup property
     */
    rangeLookup?: Json;
    /**
     * The tableArray property
     */
    tableArray?: Json;
}
/**
 * Provides operations to call the vlookup method.
 */
export interface VlookupRequestBuilder extends BaseRequestBuilder<VlookupRequestBuilder> {
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VlookupRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/vlookup";
/**
 * Metadata for all the requests in the request builder.
 */
export const VlookupRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: VlookupRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVlookupPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

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
 * @returns {NumberValuePostRequestBody}
 */
export function createNumberValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNumberValuePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoNumberValuePostRequestBody(numberValuePostRequestBody: Partial<NumberValuePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalSeparator": n => { numberValuePostRequestBody.decimalSeparator = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "groupSeparator": n => { numberValuePostRequestBody.groupSeparator = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "text": n => { numberValuePostRequestBody.text = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface NumberValuePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The decimalSeparator property
     */
    decimalSeparator?: UntypedNode;
    /**
     * The groupSeparator property
     */
    groupSeparator?: UntypedNode;
    /**
     * The text property
     */
    text?: UntypedNode;
}
/**
 * Provides operations to call the numberValue method.
 */
export interface NumberValueRequestBuilder extends BaseRequestBuilder<NumberValueRequestBuilder> {
    /**
     * Invoke action numberValue
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: NumberValuePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action numberValue
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NumberValuePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeNumberValuePostRequestBody(writer: SerializationWriter, numberValuePostRequestBody: Partial<NumberValuePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("decimalSeparator", numberValuePostRequestBody.decimalSeparator);
    writer.writeObjectValue("groupSeparator", numberValuePostRequestBody.groupSeparator);
    writer.writeObjectValue("text", numberValuePostRequestBody.text);
    writer.writeAdditionalData(numberValuePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const NumberValueRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/numberValue";
/**
 * Metadata for all the requests in the request builder.
 */
export const NumberValueRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: NumberValueRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNumberValuePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

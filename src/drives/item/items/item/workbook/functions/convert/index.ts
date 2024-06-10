/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, UntypedNode } from '@microsoft/kiota-abstractions';

export interface ConvertPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fromUnit property
     */
    fromUnit?: UntypedNode;
    /**
     * The number property
     */
    number?: UntypedNode;
    /**
     * The toUnit property
     */
    toUnit?: UntypedNode;
}
/**
 * Provides operations to call the convert method.
 */
export interface ConvertRequestBuilder extends BaseRequestBuilder<ConvertRequestBuilder> {
    /**
     * Invoke action convert
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ConvertPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action convert
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ConvertPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ConvertPostRequestBody}
 */
export function createConvertPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoConvertPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoConvertPostRequestBody(convertPostRequestBody: Partial<ConvertPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fromUnit": n => { convertPostRequestBody.fromUnit = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "number": n => { convertPostRequestBody.number = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "toUnit": n => { convertPostRequestBody.toUnit = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeConvertPostRequestBody(writer: SerializationWriter, convertPostRequestBody: Partial<ConvertPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("fromUnit", convertPostRequestBody.fromUnit);
    writer.writeObjectValue("number", convertPostRequestBody.number);
    writer.writeObjectValue("toUnit", convertPostRequestBody.toUnit);
    writer.writeAdditionalData(convertPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ConvertRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/convert";
/**
 * Metadata for all the requests in the request builder.
 */
export const ConvertRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ConvertRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConvertPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

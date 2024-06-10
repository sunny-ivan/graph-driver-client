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
 * @returns {EdatePostRequestBody}
 */
export function createEdatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEdatePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoEdatePostRequestBody(edatePostRequestBody: Partial<EdatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "months": n => { edatePostRequestBody.months = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "startDate": n => { edatePostRequestBody.startDate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface EdatePostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The months property
     */
    months?: UntypedNode;
    /**
     * The startDate property
     */
    startDate?: UntypedNode;
}
/**
 * Provides operations to call the edate method.
 */
export interface EdateRequestBuilder extends BaseRequestBuilder<EdateRequestBuilder> {
    /**
     * Invoke action edate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: EdatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action edate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EdatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeEdatePostRequestBody(writer: SerializationWriter, edatePostRequestBody: Partial<EdatePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("months", edatePostRequestBody.months);
    writer.writeObjectValue("startDate", edatePostRequestBody.startDate);
    writer.writeAdditionalData(edatePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const EdateRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/edate";
/**
 * Metadata for all the requests in the request builder.
 */
export const EdateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EdateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

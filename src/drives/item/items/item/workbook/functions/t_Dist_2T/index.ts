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
 * @returns {T_Dist_2TPostRequestBody}
 */
export function createT_Dist_2TPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoT_Dist_2TPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoT_Dist_2TPostRequestBody(t_Dist_2TPostRequestBody: Partial<T_Dist_2TPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "degFreedom": n => { t_Dist_2TPostRequestBody.degFreedom = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "x": n => { t_Dist_2TPostRequestBody.x = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeT_Dist_2TPostRequestBody(writer: SerializationWriter, t_Dist_2TPostRequestBody: Partial<T_Dist_2TPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("degFreedom", t_Dist_2TPostRequestBody.degFreedom);
    writer.writeObjectValue("x", t_Dist_2TPostRequestBody.x);
    writer.writeAdditionalData(t_Dist_2TPostRequestBody.additionalData);
}
export interface T_Dist_2TPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The degFreedom property
     */
    degFreedom?: UntypedNode;
    /**
     * The x property
     */
    x?: UntypedNode;
}
/**
 * Provides operations to call the t_Dist_2T method.
 */
export interface T_Dist_2TRequestBuilder extends BaseRequestBuilder<T_Dist_2TRequestBuilder> {
    /**
     * Invoke action t_Dist_2T
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: T_Dist_2TPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action t_Dist_2T
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: T_Dist_2TPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const T_Dist_2TRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/t_Dist_2T";
/**
 * Metadata for all the requests in the request builder.
 */
export const T_Dist_2TRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: T_Dist_2TRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeT_Dist_2TPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

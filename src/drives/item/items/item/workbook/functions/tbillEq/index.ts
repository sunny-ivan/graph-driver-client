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
 * @returns {TbillEqPostRequestBody}
 */
export function createTbillEqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTbillEqPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoTbillEqPostRequestBody(tbillEqPostRequestBody: Partial<TbillEqPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "discount": n => { tbillEqPostRequestBody.discount = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "maturity": n => { tbillEqPostRequestBody.maturity = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "settlement": n => { tbillEqPostRequestBody.settlement = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTbillEqPostRequestBody(writer: SerializationWriter, tbillEqPostRequestBody: Partial<TbillEqPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("discount", tbillEqPostRequestBody.discount);
    writer.writeObjectValue("maturity", tbillEqPostRequestBody.maturity);
    writer.writeObjectValue("settlement", tbillEqPostRequestBody.settlement);
    writer.writeAdditionalData(tbillEqPostRequestBody.additionalData);
}
export interface TbillEqPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The discount property
     */
    discount?: UntypedNode;
    /**
     * The maturity property
     */
    maturity?: UntypedNode;
    /**
     * The settlement property
     */
    settlement?: UntypedNode;
}
/**
 * Provides operations to call the tbillEq method.
 */
export interface TbillEqRequestBuilder extends BaseRequestBuilder<TbillEqRequestBuilder> {
    /**
     * Invoke action tbillEq
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TbillEqPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action tbillEq
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TbillEqPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TbillEqRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/tbillEq";
/**
 * Metadata for all the requests in the request builder.
 */
export const TbillEqRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: TbillEqRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTbillEqPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

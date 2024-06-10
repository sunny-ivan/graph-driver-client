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
 * @returns {PpmtPostRequestBody}
 */
export function createPpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPpmtPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoPpmtPostRequestBody(ppmtPostRequestBody: Partial<PpmtPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { ppmtPostRequestBody.fv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "nper": n => { ppmtPostRequestBody.nper = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "per": n => { ppmtPostRequestBody.per = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "pv": n => { ppmtPostRequestBody.pv = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "rate": n => { ppmtPostRequestBody.rate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "type": n => { ppmtPostRequestBody.type = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface PpmtPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The fv property
     */
    fv?: UntypedNode;
    /**
     * The nper property
     */
    nper?: UntypedNode;
    /**
     * The per property
     */
    per?: UntypedNode;
    /**
     * The pv property
     */
    pv?: UntypedNode;
    /**
     * The rate property
     */
    rate?: UntypedNode;
    /**
     * The type property
     */
    type?: UntypedNode;
}
/**
 * Provides operations to call the ppmt method.
 */
export interface PpmtRequestBuilder extends BaseRequestBuilder<PpmtRequestBuilder> {
    /**
     * Invoke action ppmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: PpmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action ppmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: PpmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePpmtPostRequestBody(writer: SerializationWriter, ppmtPostRequestBody: Partial<PpmtPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("fv", ppmtPostRequestBody.fv);
    writer.writeObjectValue("nper", ppmtPostRequestBody.nper);
    writer.writeObjectValue("per", ppmtPostRequestBody.per);
    writer.writeObjectValue("pv", ppmtPostRequestBody.pv);
    writer.writeObjectValue("rate", ppmtPostRequestBody.rate);
    writer.writeObjectValue("type", ppmtPostRequestBody.type);
    writer.writeAdditionalData(ppmtPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const PpmtRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/ppmt";
/**
 * Metadata for all the requests in the request builder.
 */
export const PpmtRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PpmtRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePpmtPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

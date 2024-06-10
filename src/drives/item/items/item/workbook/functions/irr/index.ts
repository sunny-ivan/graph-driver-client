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
 * @returns {IrrPostRequestBody}
 */
export function createIrrPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoIrrPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoIrrPostRequestBody(irrPostRequestBody: Partial<IrrPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "guess": n => { irrPostRequestBody.guess = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "values": n => { irrPostRequestBody.values = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface IrrPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The guess property
     */
    guess?: UntypedNode;
    /**
     * The values property
     */
    values?: UntypedNode;
}
/**
 * Provides operations to call the irr method.
 */
export interface IrrRequestBuilder extends BaseRequestBuilder<IrrRequestBuilder> {
    /**
     * Invoke action irr
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: IrrPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action irr
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: IrrPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeIrrPostRequestBody(writer: SerializationWriter, irrPostRequestBody: Partial<IrrPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue("guess", irrPostRequestBody.guess);
    writer.writeObjectValue("values", irrPostRequestBody.values);
    writer.writeAdditionalData(irrPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const IrrRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/irr";
/**
 * Metadata for all the requests in the request builder.
 */
export const IrrRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: IrrRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIrrPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

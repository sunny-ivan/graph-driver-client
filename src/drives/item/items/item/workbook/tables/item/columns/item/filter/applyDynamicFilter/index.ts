/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApplyDynamicFilterPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The criteria property
     */
    criteria?: string;
}
/**
 * Provides operations to call the applyDynamicFilter method.
 */
export interface ApplyDynamicFilterRequestBuilder extends BaseRequestBuilder<ApplyDynamicFilterRequestBuilder> {
    /**
     * Invoke action applyDynamicFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ApplyDynamicFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action applyDynamicFilter
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyDynamicFilterPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyDynamicFilterPostRequestBody}
 */
export function createApplyDynamicFilterPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyDynamicFilterPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoApplyDynamicFilterPostRequestBody(applyDynamicFilterPostRequestBody: Partial<ApplyDynamicFilterPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "criteria": n => { applyDynamicFilterPostRequestBody.criteria = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeApplyDynamicFilterPostRequestBody(writer: SerializationWriter, applyDynamicFilterPostRequestBody: Partial<ApplyDynamicFilterPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("criteria", applyDynamicFilterPostRequestBody.criteria);
    writer.writeAdditionalData(applyDynamicFilterPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ApplyDynamicFilterRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter/applyDynamicFilter";
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplyDynamicFilterRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ApplyDynamicFilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyDynamicFilterPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

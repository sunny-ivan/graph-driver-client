/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookTableFromDiscriminatorValue, serializeWorkbookTable, type WorkbookTable } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The address property
     */
    address?: string;
    /**
     * The hasHeaders property
     */
    hasHeaders?: boolean;
}
/**
 * Provides operations to call the add method.
 */
export interface AddRequestBuilder extends BaseRequestBuilder<AddRequestBuilder> {
    /**
     * Use this API to create a new Table.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookTable>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/workbook-post-tables?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookTable | undefined>;
    /**
     * Use this API to create a new Table.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddPostRequestBody}
 */
export function createAddPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAddPostRequestBody(addPostRequestBody: Partial<AddPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { addPostRequestBody.address = n.getStringValue(); },
        "hasHeaders": n => { addPostRequestBody.hasHeaders = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: Partial<AddPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("address", addPostRequestBody.address);
    writer.writeBooleanValue("hasHeaders", addPostRequestBody.hasHeaders);
    writer.writeAdditionalData(addPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AddRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/add";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookTableFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

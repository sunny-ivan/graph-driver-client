/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ValidatePermissionPostRequestBody}
 */
export function createValidatePermissionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoValidatePermissionPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoValidatePermissionPostRequestBody(validatePermissionPostRequestBody: Partial<ValidatePermissionPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "challengeToken": n => { validatePermissionPostRequestBody.challengeToken = n.getStringValue(); },
        "password": n => { validatePermissionPostRequestBody.password = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeValidatePermissionPostRequestBody(writer: SerializationWriter, validatePermissionPostRequestBody: Partial<ValidatePermissionPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("challengeToken", validatePermissionPostRequestBody.challengeToken);
    writer.writeStringValue("password", validatePermissionPostRequestBody.password);
    writer.writeAdditionalData(validatePermissionPostRequestBody.additionalData);
}
export interface ValidatePermissionPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The challengeToken property
     */
    challengeToken?: string;
    /**
     * The password property
     */
    password?: string;
}
/**
 * Provides operations to call the validatePermission method.
 */
export interface ValidatePermissionRequestBuilder extends BaseRequestBuilder<ValidatePermissionRequestBuilder> {
    /**
     * Invoke action validatePermission
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ValidatePermissionPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action validatePermission
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ValidatePermissionPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ValidatePermissionRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/validatePermission";
/**
 * Metadata for all the requests in the request builder.
 */
export const ValidatePermissionRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ValidatePermissionRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeValidatePermissionPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

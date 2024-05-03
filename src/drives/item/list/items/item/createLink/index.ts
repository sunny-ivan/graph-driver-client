/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveRecipientFromDiscriminatorValue, createPermissionFromDiscriminatorValue, serializeDriveRecipient, serializePermission, type DriveRecipient, type Permission } from '../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CreateLinkPostRequestBody}
 */
export function createCreateLinkPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCreateLinkPostRequestBody;
}
export interface CreateLinkPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The expirationDateTime property
     */
    expirationDateTime?: Date;
    /**
     * The message property
     */
    message?: string;
    /**
     * The password property
     */
    password?: string;
    /**
     * The recipients property
     */
    recipients?: DriveRecipient[];
    /**
     * The retainInheritedPermissions property
     */
    retainInheritedPermissions?: boolean;
    /**
     * The scope property
     */
    scope?: string;
    /**
     * The sendNotification property
     */
    sendNotification?: boolean;
    /**
     * The type property
     */
    type?: string;
}
/**
 * Provides operations to call the createLink method.
 */
export interface CreateLinkRequestBuilder extends BaseRequestBuilder<CreateLinkRequestBuilder> {
    /**
     * Invoke action createLink
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Permission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CreateLinkPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Permission | undefined>;
    /**
     * Invoke action createLink
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CreateLinkPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoCreateLinkPostRequestBody(createLinkPostRequestBody: Partial<CreateLinkPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { createLinkPostRequestBody.expirationDateTime = n.getDateValue(); },
        "message": n => { createLinkPostRequestBody.message = n.getStringValue(); },
        "password": n => { createLinkPostRequestBody.password = n.getStringValue(); },
        "recipients": n => { createLinkPostRequestBody.recipients = n.getCollectionOfObjectValues<DriveRecipient>(createDriveRecipientFromDiscriminatorValue); },
        "retainInheritedPermissions": n => { createLinkPostRequestBody.retainInheritedPermissions = n.getBooleanValue(); },
        "scope": n => { createLinkPostRequestBody.scope = n.getStringValue(); },
        "sendNotification": n => { createLinkPostRequestBody.sendNotification = n.getBooleanValue(); },
        "type": n => { createLinkPostRequestBody.type = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCreateLinkPostRequestBody(writer: SerializationWriter, createLinkPostRequestBody: Partial<CreateLinkPostRequestBody> | undefined = {}) : void {
    writer.writeDateValue("expirationDateTime", createLinkPostRequestBody.expirationDateTime);
    writer.writeStringValue("message", createLinkPostRequestBody.message);
    writer.writeStringValue("password", createLinkPostRequestBody.password);
    writer.writeCollectionOfObjectValues<DriveRecipient>("recipients", createLinkPostRequestBody.recipients, serializeDriveRecipient);
    writer.writeBooleanValue("retainInheritedPermissions", createLinkPostRequestBody.retainInheritedPermissions);
    writer.writeStringValue("scope", createLinkPostRequestBody.scope);
    writer.writeBooleanValue("sendNotification", createLinkPostRequestBody.sendNotification);
    writer.writeStringValue("type", createLinkPostRequestBody.type);
    writer.writeAdditionalData(createLinkPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CreateLinkRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/items/{listItem%2Did}/createLink";
/**
 * Metadata for all the requests in the request builder.
 */
export const CreateLinkRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CreateLinkRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPermissionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCreateLinkPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */

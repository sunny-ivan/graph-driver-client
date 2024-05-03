/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserFromDiscriminatorValue, type User } from '../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../models/oDataErrors/';
// @ts-ignore
import { MailboxSettingsRequestBuilderRequestsMetadata, type MailboxSettingsRequestBuilder } from './mailboxSettings/';
// @ts-ignore
import { ServiceProvisioningErrorsRequestBuilderNavigationMetadata, ServiceProvisioningErrorsRequestBuilderRequestsMetadata, type ServiceProvisioningErrorsRequestBuilder } from './serviceProvisioningErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
 */
export interface CreatedByUserRequestBuilder extends BaseRequestBuilder<CreatedByUserRequestBuilder> {
    /**
     * The mailboxSettings property
     */
    get mailboxSettings(): MailboxSettingsRequestBuilder;
    /**
     * The serviceProvisioningErrors property
     */
    get serviceProvisioningErrors(): ServiceProvisioningErrorsRequestBuilder;
    /**
     * Identity of the user who created the item. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<User>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : Promise<User | undefined>;
    /**
     * Identity of the user who created the item. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CreatedByUserRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Identity of the user who created the item. Read-only.
 */
export interface CreatedByUserRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const CreatedByUserRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/createdByUser{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CreatedByUserRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CreatedByUserRequestBuilderNavigationMetadata: Record<Exclude<keyof CreatedByUserRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    mailboxSettings: {
        requestsMetadata: MailboxSettingsRequestBuilderRequestsMetadata,
    },
    serviceProvisioningErrors: {
        requestsMetadata: ServiceProvisioningErrorsRequestBuilderRequestsMetadata,
        navigationMetadata: ServiceProvisioningErrorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CreatedByUserRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CreatedByUserRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFromDiscriminatorValue,
        queryParametersMapper: CreatedByUserRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */

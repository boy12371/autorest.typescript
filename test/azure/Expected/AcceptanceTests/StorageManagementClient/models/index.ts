/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import { RequestOptionsBase } from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing StorageAccountCheckNameAvailabilityParameters.
 */
export interface StorageAccountCheckNameAvailabilityParameters {
  /**
   * @member {string} name
   */
  name: string;
  /**
   * @member {string} [type] Default value: 'Microsoft.Storage/storageAccounts'
   * .
   */
  type?: string;
}

/**
 * @interface
 * An interface representing CheckNameAvailabilityResult.
 * The CheckNameAvailability operation response.
 *
 */
export interface CheckNameAvailabilityResult {
  /**
   * @member {boolean} [nameAvailable] Gets a boolean value that indicates
   * whether the name is available for you to use. If true, the name is
   * available. If false, the name has already been taken or invalid and cannot
   * be used.
   */
  nameAvailable?: boolean;
  /**
   * @member {string} [reason] Gets the reason that a storage account name
   * could not be used. The Reason element is only returned if NameAvailable is
   * false. Possible values include: 'AccountNameInvalid', 'AlreadyExists'
   */
  reason?: string;
  /**
   * @member {string} [message] Gets an error message explaining the Reason
   * value in more detail.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   */
  readonly type?: string;
  /**
   * @member {string} location Resource location
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing StorageAccountCreateParameters.
 * The parameters to provide for the account.
 *
 * @extends Resource
 */
export interface StorageAccountCreateParameters extends Resource {
  /**
   * @member {string} [accountType] Gets or sets the account type. Possible
   * values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
   * 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType?: string;
}

/**
 * @interface
 * An interface representing Bar.
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 */
export interface Bar {
  /**
   * @member {Endpoints} [recursivePoint] Recursive Endpoints
   */
  recursivePoint?: Endpoints;
}

/**
 * @interface
 * An interface representing Foo.
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 */
export interface Foo {
  /**
   * @member {Bar} [barPoint] Bar point
   */
  barPoint?: Bar;
}

/**
 * @interface
 * An interface representing Endpoints.
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 */
export interface Endpoints {
  /**
   * @member {string} [blob] Gets the blob endpoint.
   */
  blob?: string;
  /**
   * @member {string} [queue] Gets the queue endpoint.
   */
  queue?: string;
  /**
   * @member {string} [table] Gets the table endpoint.
   */
  table?: string;
  /**
   * @member {Endpoints} [dummyEndPoint] Dummy EndPoint
   */
  dummyEndPoint?: Endpoints;
  /**
   * @member {Foo} [fooPoint] Foo point
   */
  fooPoint?: Foo;
}

/**
 * @interface
 * An interface representing CustomDomain.
 * The custom domain assigned to this storage account. This can be set via
 * Update.
 *
 */
export interface CustomDomain {
  /**
   * @member {string} [name] Gets or sets the custom domain name. Name is the
   * CNAME source.
   */
  name?: string;
  /**
   * @member {boolean} [useSubDomain] Indicates whether indirect CName
   * validation is enabled. Default value is false. This should only be set on
   * updates
   */
  useSubDomain?: boolean;
}

/**
 * @interface
 * An interface representing StorageAccount.
 * The storage account.
 *
 * @extends Resource
 */
export interface StorageAccount extends Resource {
  /**
   * @member {string} [provisioningState] Gets the status of the storage
   * account at the time the operation was called. Possible values include:
   * 'Creating', 'ResolvingDNS', 'Succeeded'
   */
  provisioningState?: string;
  /**
   * @member {string} [accountType] Gets the type of the storage account.
   * Possible values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS',
   * 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType?: string;
  /**
   * @member {Endpoints} [primaryEndpoints] Gets the URLs that are used to
   * perform a retrieval of a public blob, queue or table object.Note that
   * StandardZRS and PremiumLRS accounts only return the blob endpoint.
   */
  primaryEndpoints?: Endpoints;
  /**
   * @member {string} [primaryLocation] Gets the location of the primary for
   * the storage account.
   */
  primaryLocation?: string;
  /**
   * @member {string} [statusOfPrimary] Gets the status indicating whether the
   * primary location of the storage account is available or unavailable.
   * Possible values include: 'Available', 'Unavailable'
   */
  statusOfPrimary?: string;
  /**
   * @member {Date} [lastGeoFailoverTime] Gets the timestamp of the most recent
   * instance of a failover to the secondary location. Only the most recent
   * timestamp is retained. This element is not returned if there has never
   * been a failover instance. Only available if the accountType is StandardGRS
   * or StandardRAGRS.
   */
  lastGeoFailoverTime?: Date;
  /**
   * @member {string} [secondaryLocation] Gets the location of the geo
   * replicated secondary for the storage account. Only available if the
   * accountType is StandardGRS or StandardRAGRS.
   */
  secondaryLocation?: string;
  /**
   * @member {string} [statusOfSecondary] Gets the status indicating whether
   * the secondary location of the storage account is available or unavailable.
   * Only available if the accountType is StandardGRS or StandardRAGRS.
   * Possible values include: 'Available', 'Unavailable'
   */
  statusOfSecondary?: string;
  /**
   * @member {Date} [creationTime] Gets the creation date and time of the
   * storage account in UTC.
   */
  creationTime?: Date;
  /**
   * @member {CustomDomain} [customDomain] Gets the user assigned custom domain
   * assigned to this storage account.
   */
  customDomain?: CustomDomain;
  /**
   * @member {Endpoints} [secondaryEndpoints] Gets the URLs that are used to
   * perform a retrieval of a public blob, queue or table object from the
   * secondary location of the storage account. Only available if the
   * accountType is StandardRAGRS.
   */
  secondaryEndpoints?: Endpoints;
}

/**
 * @interface
 * An interface representing StorageAccountKeys.
 * The access keys for the storage account.
 *
 */
export interface StorageAccountKeys {
  /**
   * @member {string} [key1] Gets the value of key 1.
   */
  key1?: string;
  /**
   * @member {string} [key2] Gets the value of key 2.
   */
  key2?: string;
}

/**
 * @interface
 * An interface representing StorageAccountUpdateParameters.
 * The parameters to update on the account.
 *
 * @extends Resource
 */
export interface StorageAccountUpdateParameters extends Resource {
  /**
   * @member {string} [accountType] Gets or sets the account type. Note that
   * StandardZRS and PremiumLRS accounts cannot be changed to other account
   * types, and other account types cannot be changed to StandardZRS or
   * PremiumLRS. Possible values include: 'Standard_LRS', 'Standard_ZRS',
   * 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'
   */
  accountType?: string;
  /**
   * @member {CustomDomain} [customDomain] User domain assigned to the storage
   * account. Name is the CNAME source. Only one custom domain is supported per
   * storage account at this time. To clear the existing custom domain, use an
   * empty string for the custom domain name property.
   */
  customDomain?: CustomDomain;
}

/**
 * @interface
 * An interface representing StorageAccountRegenerateKeyParameters.
 */
export interface StorageAccountRegenerateKeyParameters {
  /**
   * @member {string} [keyName] Possible values include: 'key1', 'key2'
   */
  keyName?: string;
}

/**
 * @interface
 * An interface representing UsageName.
 * The Usage Names.
 *
 */
export interface UsageName {
  /**
   * @member {string} [value] Gets a string describing the resource name.
   */
  value?: string;
  /**
   * @member {string} [localizedValue] Gets a localized string describing the
   * resource name.
   */
  localizedValue?: string;
}

/**
 * @interface
 * An interface representing Usage.
 * Describes Storage Resource Usage.
 *
 */
export interface Usage {
  /**
   * @member {string} [unit] Gets the unit of measurement. Possible values
   * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
   * 'BytesPerSecond'
   */
  unit?: string;
  /**
   * @member {number} [currentValue] Gets the current count of the allocated
   * resources in the subscription.
   */
  currentValue?: number;
  /**
   * @member {number} [limit] Gets the maximum count of the resources that can
   * be allocated in the subscription.
   */
  limit?: number;
  /**
   * @member {UsageName} [name] Gets the name of the type of usage.
   */
  name?: UsageName;
}

/**
 * @interface
 * An interface representing UsageListResult.
 * The List Usages operation response.
 *
 */
export interface UsageListResult {
  /**
   * @member {Usage[]} [value] Gets or sets the list Storage Resource Usages.
   */
  value?: Usage[];
}

/**
 * @interface
 * An interface representing SubResource.
 * @extends BaseResource
 */
export interface SubResource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   */
  id?: string;
}

/**
 * @interface
 * An interface representing StorageAccountsRegenerateKeyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface StorageAccountsRegenerateKeyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [keyName] Possible values include: 'key1', 'key2'
   */
  keyName?: string;
}


/**
 * @interface
 * An interface representing the StorageAccountListResult.
 * The list storage accounts operation response.
 *
 * @extends Array<StorageAccount>
 */
export interface StorageAccountListResult extends Array<StorageAccount> {
  /**
   * @member {string} [nextLink] Gets the link to the next set of results.
   * Currently this will always be empty as the API does not support
   * pagination.
   */
  nextLink?: string;
}

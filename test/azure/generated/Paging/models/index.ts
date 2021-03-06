/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ProductProperties.
 */
export interface ProductProperties {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
}

/**
 * @interface
 * An interface representing Product.
 */
export interface Product {
  /**
   * @member {ProductProperties} [properties]
   */
  properties?: ProductProperties;
}

/**
 * @interface
 * An interface representing OperationResult.
 */
export interface OperationResult {
  /**
   * @member {Status} [status] The status of the request. Possible values
   * include: 'Succeeded', 'Failed', 'canceled', 'Accepted', 'Creating',
   * 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
   */
  status?: Status;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesOptions.
 * Additional parameters for getMultiplePages operation.
 *
 */
export interface PagingGetMultiplePagesOptions {
  /**
   * @member {number} [maxresults] Sets the maximum number of items to return
   * in the response.
   */
  maxresults?: number;
  /**
   * @member {number} [timeout] Sets the maximum time that the server can spend
   * processing the request, in seconds. The default is 30 seconds. Default
   * value: 30 .
   */
  timeout?: number;
}

/**
 * @interface
 * An interface representing PagingGetOdataMultiplePagesOptions.
 * Additional parameters for getOdataMultiplePages operation.
 *
 */
export interface PagingGetOdataMultiplePagesOptions {
  /**
   * @member {number} [maxresults] Sets the maximum number of items to return
   * in the response.
   */
  maxresults?: number;
  /**
   * @member {number} [timeout] Sets the maximum time that the server can spend
   * processing the request, in seconds. The default is 30 seconds. Default
   * value: 30 .
   */
  timeout?: number;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesWithOffsetOptions.
 * Additional parameters for getMultiplePagesWithOffset operation.
 *
 */
export interface PagingGetMultiplePagesWithOffsetOptions {
  /**
   * @member {number} [maxresults] Sets the maximum number of items to return
   * in the response.
   */
  maxresults?: number;
  /**
   * @member {number} offset Offset of return value
   */
  offset: number;
  /**
   * @member {number} [timeout] Sets the maximum time that the server can spend
   * processing the request, in seconds. The default is 30 seconds. Default
   * value: 30 .
   */
  timeout?: number;
}

/**
 * @interface
 * An interface representing CustomParameterGroup.
 * Additional parameters for a set of operations, such as:
 * Paging_getMultiplePagesFragmentWithGroupingNextLink,
 * Paging_nextFragmentWithGrouping.
 *
 */
export interface CustomParameterGroup {
  /**
   * @member {string} apiVersion Sets the api version to use.
   */
  apiVersion: string;
  /**
   * @member {string} tenant Sets the tenant to use.
   */
  tenant: string;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesLROOptions.
 * Additional parameters for getMultiplePagesLRO operation.
 *
 */
export interface PagingGetMultiplePagesLROOptions {
  /**
   * @member {number} [maxresults] Sets the maximum number of items to return
   * in the response.
   */
  maxresults?: number;
  /**
   * @member {number} [timeout] Sets the maximum time that the server can spend
   * processing the request, in seconds. The default is 30 seconds. Default
   * value: 30 .
   */
  timeout?: number;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesWithOffsetNextOptions.
 * Additional parameters for getMultiplePagesWithOffsetNext operation.
 *
 */
export interface PagingGetMultiplePagesWithOffsetNextOptions {
  /**
   * @member {number} [maxresults] Sets the maximum number of items to return
   * in the response.
   */
  maxresults?: number;
  /**
   * @member {number} [timeout] Sets the maximum time that the server can spend
   * processing the request, in seconds. The default is 30 seconds. Default
   * value: 30 .
   */
  timeout?: number;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesOptions} [pagingGetMultiplePagesOptions]
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
}

/**
 * @interface
 * An interface representing PagingGetOdataMultiplePagesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetOdataMultiplePagesOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetOdataMultiplePagesOptions}
   * [pagingGetOdataMultiplePagesOptions] Additional parameters for the
   * operation
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesWithOffsetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesWithOffsetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesLROOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesLROOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesLROOptions}
   * [pagingGetMultiplePagesLROOptions] Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * @interface
 * An interface representing PagingBeginGetMultiplePagesLROOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingBeginGetMultiplePagesLROOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesLROOptions}
   * [pagingGetMultiplePagesLROOptions] Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesOptions} [pagingGetMultiplePagesOptions]
   * Additional parameters for the operation
   */
  pagingGetMultiplePagesOptions?: PagingGetMultiplePagesOptions;
}

/**
 * @interface
 * An interface representing PagingGetOdataMultiplePagesNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetOdataMultiplePagesNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetOdataMultiplePagesOptions}
   * [pagingGetOdataMultiplePagesOptions] Additional parameters for the
   * operation
   */
  pagingGetOdataMultiplePagesOptions?: PagingGetOdataMultiplePagesOptions;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesWithOffsetNextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesWithOffsetNextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesWithOffsetNextOptions}
   * [pagingGetMultiplePagesWithOffsetNextOptions] Additional parameters for
   * the operation
   */
  pagingGetMultiplePagesWithOffsetNextOptions?: PagingGetMultiplePagesWithOffsetNextOptions;
}

/**
 * @interface
 * An interface representing PagingGetMultiplePagesLRONextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingGetMultiplePagesLRONextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesLROOptions}
   * [pagingGetMultiplePagesLROOptions] Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * @interface
 * An interface representing PagingBeginGetMultiplePagesLRONextOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PagingBeginGetMultiplePagesLRONextOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [clientRequestId]
   */
  clientRequestId?: string;
  /**
   * @member {PagingGetMultiplePagesLROOptions}
   * [pagingGetMultiplePagesLROOptions] Additional parameters for the operation
   */
  pagingGetMultiplePagesLROOptions?: PagingGetMultiplePagesLROOptions;
}

/**
 * @interface
 * An interface representing AutoRestPagingTestServiceOptions.
 * @extends AzureServiceClientOptions
 */
export interface AutoRestPagingTestServiceOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ProductResult.
 * @extends Array<Product>
 */
export interface ProductResult extends Array<Product> {
  /**
   * @member {string} [nextLink]
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the OdataProductResult.
 * @extends Array<Product>
 */
export interface OdataProductResult extends Array<Product> {
  /**
   * @member {string} [odatanextLink]
   */
  odatanextLink?: string;
}

/**
 * Defines values for Status.
 * Possible values include: 'Succeeded', 'Failed', 'canceled', 'Accepted',
 * 'Creating', 'Created', 'Updating', 'Updated', 'Deleting', 'Deleted', 'OK'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Status = <Status>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export enum Status {
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Canceled = 'canceled',
  Accepted = 'Accepted',
  Creating = 'Creating',
  Created = 'Created',
  Updating = 'Updating',
  Updated = 'Updated',
  Deleting = 'Deleting',
  Deleted = 'Deleted',
  OK = 'OK',
}

/**
 * Contains response data for the getSinglePages operation.
 */
export type PagingGetSinglePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePages operation.
 */
export type PagingGetMultiplePagesResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getOdataMultiplePages operation.
 */
export type PagingGetOdataMultiplePagesResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesWithOffset operation.
 */
export type PagingGetMultiplePagesWithOffsetResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetryFirst operation.
 */
export type PagingGetMultiplePagesRetryFirstResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetrySecond operation.
 */
export type PagingGetMultiplePagesRetrySecondResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesFailure operation.
 */
export type PagingGetSinglePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailure operation.
 */
export type PagingGetMultiplePagesFailureResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureUri operation.
 */
export type PagingGetMultiplePagesFailureUriResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFragmentNextLink operation.
 */
export type PagingGetMultiplePagesFragmentNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFragmentWithGroupingNextLink operation.
 */
export type PagingGetMultiplePagesFragmentWithGroupingNextLinkResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesLRO operation.
 */
export type PagingGetMultiplePagesLROResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the nextFragment operation.
 */
export type PagingNextFragmentResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the nextFragmentWithGrouping operation.
 */
export type PagingNextFragmentWithGroupingResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the beginGetMultiplePagesLRO operation.
 */
export type PagingBeginGetMultiplePagesLROResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesNext operation.
 */
export type PagingGetSinglePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesNext operation.
 */
export type PagingGetMultiplePagesNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getOdataMultiplePagesNext operation.
 */
export type PagingGetOdataMultiplePagesNextResponse = OdataProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OdataProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesWithOffsetNext operation.
 */
export type PagingGetMultiplePagesWithOffsetNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetryFirstNext operation.
 */
export type PagingGetMultiplePagesRetryFirstNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesRetrySecondNext operation.
 */
export type PagingGetMultiplePagesRetrySecondNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getSinglePagesFailureNext operation.
 */
export type PagingGetSinglePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureNext operation.
 */
export type PagingGetMultiplePagesFailureNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesFailureUriNext operation.
 */
export type PagingGetMultiplePagesFailureUriNextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the getMultiplePagesLRONext operation.
 */
export type PagingGetMultiplePagesLRONextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/**
 * Contains response data for the beginGetMultiplePagesLRONext operation.
 */
export type PagingBeginGetMultiplePagesLRONextResponse = ProductResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProductResult;
    };
};

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/skipUrlEncodingMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a SkipUrlEncoding. */
export class SkipUrlEncoding {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a SkipUrlEncoding.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {string} unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMethodPathValidWithHttpOperationResponse(unencodedPathParam: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        unencodedPathParam,
        options
      },
      getMethodPathValidOperationSpec);
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {string} unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getPathPathValidWithHttpOperationResponse(unencodedPathParam: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        unencodedPathParam,
        options
      },
      getPathPathValidOperationSpec);
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getSwaggerPathValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSwaggerPathValidOperationSpec);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {string} q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMethodQueryValidWithHttpOperationResponse(q1: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        q1,
        options
      },
      getMethodQueryValidOperationSpec);
  }

  /**
   * Get method with unencoded query parameter with value null
   *
   * @param {SkipUrlEncodingGetMethodQueryNullOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getMethodQueryNullWithHttpOperationResponse(options?: Models.SkipUrlEncodingGetMethodQueryNullOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodQueryNullOperationSpec);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {string} q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getPathQueryValidWithHttpOperationResponse(q1: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        q1,
        options
      },
      getPathQueryValidOperationSpec);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getSwaggerQueryValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSwaggerQueryValidOperationSpec);
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {string} unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMethodPathValid(unencodedPathParam: string): Promise<void>;
  getMethodPathValid(unencodedPathParam: string, options: msRest.RequestOptionsBase): Promise<void>;
  getMethodPathValid(unencodedPathParam: string, callback: msRest.ServiceCallback<void>): void;
  getMethodPathValid(unencodedPathParam: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getMethodPathValid(unencodedPathParam: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getMethodPathValidWithHttpOperationResponse.bind(this), unencodedPathParam, options, callback);
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {string} unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getPathPathValid(unencodedPathParam: string): Promise<void>;
  getPathPathValid(unencodedPathParam: string, options: msRest.RequestOptionsBase): Promise<void>;
  getPathPathValid(unencodedPathParam: string, callback: msRest.ServiceCallback<void>): void;
  getPathPathValid(unencodedPathParam: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getPathPathValid(unencodedPathParam: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getPathPathValidWithHttpOperationResponse.bind(this), unencodedPathParam, options, callback);
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getSwaggerPathValid(): Promise<void>;
  getSwaggerPathValid(options: msRest.RequestOptionsBase): Promise<void>;
  getSwaggerPathValid(callback: msRest.ServiceCallback<void>): void;
  getSwaggerPathValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getSwaggerPathValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getSwaggerPathValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {string} q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMethodQueryValid(q1: string): Promise<void>;
  getMethodQueryValid(q1: string, options: msRest.RequestOptionsBase): Promise<void>;
  getMethodQueryValid(q1: string, callback: msRest.ServiceCallback<void>): void;
  getMethodQueryValid(q1: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getMethodQueryValid(q1: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getMethodQueryValidWithHttpOperationResponse.bind(this), q1, options, callback);
  }

  /**
   * Get method with unencoded query parameter with value null
   *
   * @param {SkipUrlEncodingGetMethodQueryNullOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getMethodQueryNull(): Promise<void>;
  getMethodQueryNull(options: Models.SkipUrlEncodingGetMethodQueryNullOptionalParams): Promise<void>;
  getMethodQueryNull(callback: msRest.ServiceCallback<void>): void;
  getMethodQueryNull(options: Models.SkipUrlEncodingGetMethodQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getMethodQueryNull(options?: Models.SkipUrlEncodingGetMethodQueryNullOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getMethodQueryNullWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {string} q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getPathQueryValid(q1: string): Promise<void>;
  getPathQueryValid(q1: string, options: msRest.RequestOptionsBase): Promise<void>;
  getPathQueryValid(q1: string, callback: msRest.ServiceCallback<void>): void;
  getPathQueryValid(q1: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getPathQueryValid(q1: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getPathQueryValidWithHttpOperationResponse.bind(this), q1, options, callback);
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getSwaggerQueryValid(): Promise<void>;
  getSwaggerQueryValid(options: msRest.RequestOptionsBase): Promise<void>;
  getSwaggerQueryValid(callback: msRest.ServiceCallback<void>): void;
  getSwaggerQueryValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getSwaggerQueryValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getSwaggerQueryValidWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getMethodPathValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/method/path/valid/{unencodedPathParam}",
  urlParameters: [
    Parameters.unencodedPathParam0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPathPathValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/path/path/valid/{unencodedPathParam}",
  urlParameters: [
    Parameters.unencodedPathParam0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSwaggerPathValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/swagger/path/valid/{unencodedPathParam}",
  urlParameters: [
    Parameters.unencodedPathParam1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getMethodQueryValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/method/query/valid",
  queryParameters: [
    Parameters.q10
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getMethodQueryNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/method/query/null",
  queryParameters: [
    Parameters.q11
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPathQueryValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/path/query/valid",
  queryParameters: [
    Parameters.q10
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSwaggerQueryValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/skipUrlEncoding/swagger/query/valid",
  queryParameters: [
    Parameters.q12
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

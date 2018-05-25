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
import * as Mappers from "../models/mappers";
import { AutoRestAzureSpecialParametersTestClient } from "../autoRestAzureSpecialParametersTestClient";

const WebResource = msRest.WebResource;

/** Class representing a Header. */
export class Header {
  private readonly client: AutoRestAzureSpecialParametersTestClient;
  /**
   * Create a Header.
   * @param {AutoRestAzureSpecialParametersTestClient} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClient) {
    this.client = client;
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async customNamedRequestIdWithHttpOperationResponse(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdResponse> {
    let client = this.client;
    // Validate
    try {
      if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
        throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            fooClientRequestId: fooClientRequestId,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "/azurespecials/customNamedRequestId",
          headerParameters: [
            {
              parameterName: "fooClientRequestId",
              headerName: "foo-client-request-id",
              type: msRest.OperationParameterType.String
            },
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        operationRes.parsedHeaders = client.serializer.deserialize(Mappers.HeaderCustomNamedRequestIdHeaders, operationRes.headers.rawHeaders(), 'operationRes.parsedBody');
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request, via a parameter group
   *
   * @param {HeaderCustomNamedRequestIdParamGroupingParameters}
   * headerCustomNamedRequestIdParamGroupingParameters Additional parameters for
   * the operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async customNamedRequestIdParamGroupingWithHttpOperationResponse(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdParamGroupingResponse> {
    let client = this.client;
    // Validate
    try {
      if (headerCustomNamedRequestIdParamGroupingParameters === null || headerCustomNamedRequestIdParamGroupingParameters === undefined) {
        throw new Error('headerCustomNamedRequestIdParamGroupingParameters cannot be null or undefined.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
    let fooClientRequestId: any;
    try {
      if (headerCustomNamedRequestIdParamGroupingParameters !== null && headerCustomNamedRequestIdParamGroupingParameters !== undefined)
      {
        fooClientRequestId = headerCustomNamedRequestIdParamGroupingParameters.fooClientRequestId;
        if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
          throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
            fooClientRequestId: fooClientRequestId
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "/azurespecials/customNamedRequestIdParamGrouping",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String
            },
            {
              parameterName: "fooClientRequestId",
              headerName: "foo-client-request-id",
              type: msRest.OperationParameterType.String
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        operationRes.parsedHeaders = client.serializer.deserialize(Mappers.HeaderCustomNamedRequestIdParamGroupingHeaders, operationRes.headers.rawHeaders(), 'operationRes.parsedBody');
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async customNamedRequestIdHeadWithHttpOperationResponse(fooClientRequestId: string, options?: msRest.RequestOptionsBase): Promise<Models.HeaderCustomNamedRequestIdHeadResponse> {
    let client = this.client;
    // Validate
    try {
      if (fooClientRequestId === null || fooClientRequestId === undefined || typeof fooClientRequestId.valueOf() !== 'string') {
        throw new Error('fooClientRequestId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            fooClientRequestId: fooClientRequestId,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "HEAD",
          baseUrl: this.client.baseUri,
          path: "/azurespecials/customNamedRequestIdHead",
          headerParameters: [
            {
              parameterName: "fooClientRequestId",
              headerName: "foo-client-request-id",
              type: msRest.OperationParameterType.String
            },
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200 && statusCode !== 404) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      operationRes.parsedBody = (statusCode === 200);
      // Deserialize Response
      if (statusCode === 200) {
        operationRes.parsedHeaders = client.serializer.deserialize(Mappers.HeaderCustomNamedRequestIdHeadHeaders, operationRes.headers.rawHeaders(), 'operationRes.parsedBody');
      }
      // Deserialize Response
      if (statusCode === 404) {
        operationRes.parsedHeaders = client.serializer.deserialize(Mappers.HeaderCustomNamedRequestIdHeadHeaders, operationRes.headers.rawHeaders(), 'operationRes.parsedBody');
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  customNamedRequestId(fooClientRequestId: string): Promise<void>;
  customNamedRequestId(fooClientRequestId: string, options: msRest.RequestOptionsBase): Promise<void>;
  customNamedRequestId(fooClientRequestId: string, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestId(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestId(fooClientRequestId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.customNamedRequestIdWithHttpOperationResponse(fooClientRequestId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.customNamedRequestIdWithHttpOperationResponse(fooClientRequestId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request, via a parameter group
   *
   * @param {HeaderCustomNamedRequestIdParamGroupingParameters}
   * headerCustomNamedRequestIdParamGroupingParameters Additional parameters for
   * the operation
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters): Promise<void>;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options: msRest.RequestOptionsBase): Promise<void>;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  customNamedRequestIdParamGrouping(headerCustomNamedRequestIdParamGroupingParameters: Models.HeaderCustomNamedRequestIdParamGroupingParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.customNamedRequestIdParamGroupingWithHttpOperationResponse(headerCustomNamedRequestIdParamGroupingParameters, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.customNamedRequestIdParamGroupingWithHttpOperationResponse(headerCustomNamedRequestIdParamGroupingParameters, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Send foo-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the
   * header of the request
   *
   * @param {string} fooClientRequestId The fooRequestId
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {boolean} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  customNamedRequestIdHead(fooClientRequestId: string): Promise<boolean>;
  customNamedRequestIdHead(fooClientRequestId: string, options: msRest.RequestOptionsBase): Promise<boolean>;
  customNamedRequestIdHead(fooClientRequestId: string, callback: msRest.ServiceCallback<boolean>): void;
  customNamedRequestIdHead(fooClientRequestId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  customNamedRequestIdHead(fooClientRequestId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<boolean>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<boolean>;
    if (!callback) {
      return this.customNamedRequestIdHeadWithHttpOperationResponse(fooClientRequestId, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as boolean);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.customNamedRequestIdHeadWithHttpOperationResponse(fooClientRequestId, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as boolean;
        return cb(err, result, data.request, data);
      });
    }
  }

}

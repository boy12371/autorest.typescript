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
import * as Mappers from "../models/mappers";
import { AutoRestAzureSpecialParametersTestClient } from "../autoRestAzureSpecialParametersTestClient";

const WebResource = msRest.WebResource;

/** Class representing a SubscriptionInCredentials. */
export class SubscriptionInCredentials {
  private readonly client: AutoRestAzureSpecialParametersTestClient;
  /**
   * Create a SubscriptionInCredentials.
   * @param {AutoRestAzureSpecialParametersTestClient} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClient) {
    this.client = client;
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMethodGlobalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/method/string/none/path/global/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
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

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to null, and client-side validation should prevent you from
   * making this call
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMethodGlobalNullWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/method/string/none/path/global/null/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
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

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postMethodGlobalNotProvidedValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
        throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/method/string/none/path/globalNotProvided/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    queryParamsArray.push('api-version=' + encodeURIComponent(this.client.apiVersion));
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
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

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postPathGlobalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/path/string/none/path/global/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
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

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async postSwaggerGlobalValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/subscriptionId/swagger/string/none/path/global/1234-5678-9012-3456/{subscriptionId}';
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'POST';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
      httpRequest.headers['accept-language'] = this.client.acceptLanguage;
    }
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    httpRequest.body = null;
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.bodyAsJson as { [key: string]: any };
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

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postMethodGlobalValid(): Promise<void>;
  postMethodGlobalValid(options: msRest.RequestOptionsBase): Promise<void>;
  postMethodGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodGlobalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodGlobalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to null, and client-side validation should prevent you from
   * making this call
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postMethodGlobalNull(): Promise<void>;
  postMethodGlobalNull(options: msRest.RequestOptionsBase): Promise<void>;
  postMethodGlobalNull(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNull(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodGlobalNullWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodGlobalNullWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postMethodGlobalNotProvidedValid(): Promise<void>;
  postMethodGlobalNotProvidedValid(options: msRest.RequestOptionsBase): Promise<void>;
  postMethodGlobalNotProvidedValid(callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNotProvidedValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postMethodGlobalNotProvidedValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postMethodGlobalNotProvidedValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postMethodGlobalNotProvidedValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postPathGlobalValid(): Promise<void>;
  postPathGlobalValid(options: msRest.RequestOptionsBase): Promise<void>;
  postPathGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postPathGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postPathGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postPathGlobalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postPathGlobalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * POST method with subscriptionId modeled in credentials.  Set the credential
   * subscriptionId to '1234-5678-9012-3456' to succeed
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  postSwaggerGlobalValid(): Promise<void>;
  postSwaggerGlobalValid(options: msRest.RequestOptionsBase): Promise<void>;
  postSwaggerGlobalValid(callback: msRest.ServiceCallback<void>): void;
  postSwaggerGlobalValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  postSwaggerGlobalValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.postSwaggerGlobalValidWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.bodyAsJson as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.postSwaggerGlobalValidWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.bodyAsJson as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}

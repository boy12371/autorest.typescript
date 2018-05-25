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
import { AutoRestSwaggerBATFormDataService } from "../autoRestSwaggerBATFormDataService";

const WebResource = msRest.WebResource;

/** Class representing a Formdata. */
export class Formdata {
  private readonly client: AutoRestSwaggerBATFormDataService;
  /**
   * Create a Formdata.
   * @param {AutoRestSwaggerBATFormDataService} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFormDataService) {
    this.client = client;
  }

  /**
   * Upload file
   *
   * @param {ReadableStream} fileContent File to upload.
   *
   * @param {string} fileName File name to upload. Name has to be spelled exactly
   * as written here.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async uploadFileWithHttpOperationResponse(fileContent: ReadableStream, fileName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<msRest.HttpOperationResponse>> {
    let client = this.client;
    // Validate
    try {
      if (fileContent === null || fileContent === undefined) {
        throw new Error('fileContent cannot be null or undefined and it must be of type readablestream.');
      }
      if (fileName === null || fileName === undefined || typeof fileName.valueOf() !== 'string') {
        throw new Error('fileName cannot be null or undefined and it must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            fileContent: fileContent,
            fileName: fileName
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "POST",
          baseUrl: this.client.baseUri,
          path: "/formdata/stream/uploadfile",
          formDataParameters: [
            {
              parameterName: "fileContent",
              type: msRest.OperationParameterType.Stream
            },
            {
              parameterName: "fileName",
              type: msRest.OperationParameterType.String
            }
          ],
          contentType: "multipart/form-data"
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
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

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Upload file
   *
   * @param {ReadableStream} fileContent File to upload.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async uploadFileViaBodyWithHttpOperationResponse(fileContent: ReadableStream, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<msRest.HttpOperationResponse>> {
    let client = this.client;
    // Validate
    try {
      if (fileContent === null || fileContent === undefined) {
        throw new Error('fileContent cannot be null or undefined and it must be of type readablestream.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      let requestModelMapper = {
        required: true,
        serializedName: 'fileContent',
        type: {
          name: 'Stream'
        }
      };
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            fileContent: fileContent
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "/formdata/stream/uploadfile",
          requestBodyMapper: requestModelMapper,
          requestBodyName: "fileContent",
          requestBodyType: msRest.OperationParameterType.Stream,
          contentType: "application/octet-stream"
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
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

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Upload file
   *
   * @param {ReadableStream} fileContent File to upload.
   *
   * @param {string} fileName File name to upload. Name has to be spelled exactly
   * as written here.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {msRest.HttpOperationResponse} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  uploadFile(fileContent: ReadableStream, fileName: string): Promise<msRest.HttpOperationResponse>;
  uploadFile(fileContent: ReadableStream, fileName: string, options: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
  uploadFile(fileContent: ReadableStream, fileName: string, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  uploadFile(fileContent: ReadableStream, fileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  uploadFile(fileContent: ReadableStream, fileName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<msRest.HttpOperationResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<msRest.HttpOperationResponse>;
    if (!callback) {
      return this.uploadFileWithHttpOperationResponse(fileContent, fileName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.uploadFileWithHttpOperationResponse(fileContent, fileName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Upload file
   *
   * @param {ReadableStream} fileContent File to upload.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {msRest.HttpOperationResponse} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  uploadFileViaBody(fileContent: ReadableStream): Promise<msRest.HttpOperationResponse>;
  uploadFileViaBody(fileContent: ReadableStream, options: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
  uploadFileViaBody(fileContent: ReadableStream, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  uploadFileViaBody(fileContent: ReadableStream, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  uploadFileViaBody(fileContent: ReadableStream, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<msRest.HttpOperationResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<msRest.HttpOperationResponse>;
    if (!callback) {
      return this.uploadFileViaBodyWithHttpOperationResponse(fileContent, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.uploadFileViaBodyWithHttpOperationResponse(fileContent, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data;
        return cb(err, result, data.request, data);
      });
    }
  }

}

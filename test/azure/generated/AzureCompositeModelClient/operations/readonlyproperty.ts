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
import * as Mappers from "../models/readonlypropertyMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Readonlyproperty. */
export class Readonlyproperty {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Readonlyproperty.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ReadonlyObj>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec);
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidWithHttpOperationResponse(options?: Models.ReadonlypropertyPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putValidOperationSpec);
  }

  /**
   * Get complex types that have readonly properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ReadonlyObj} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ReadonlyObj} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.ReadonlyObj>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ReadonlyObj>;
  getValid(callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReadonlyObj>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ReadonlyObj>): any {
    return msRest.responseToBody(this.getValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types that have readonly properties
   *
   * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional Parameters.
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
  putValid(): Promise<void>;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ReadonlypropertyPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ReadonlypropertyPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/readonlyproperty/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ReadonlyObj
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/readonlyproperty/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      size: [
        "options",
        "size"
      ]
    },
    mapper: {
      ...Mappers.ReadonlyObj,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

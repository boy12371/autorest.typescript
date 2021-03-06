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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestRenameParameterTestServiceContext } from "./autoRestRenameParameterTestServiceContext";

class AutoRestRenameParameterTestService extends AutoRestRenameParameterTestServiceContext {
  /**
   * Initializes a new instance of the AutoRestRenameParameterTestService class.
   * @param noRetryPolicy A query parameter.
   * @param [options] The parameter options
   */
  constructor(noRetryPolicy: string, options?: Models.AutoRestRenameParameterTestServiceOptions) {
    super(noRetryPolicy, options);
  }

  /**
   * GET with an optional query parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getUsingOptional(options?: Models.AutoRestRenameParameterTestServiceGetUsingOptionalOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getUsingOptional(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUsingOptional(options: Models.AutoRestRenameParameterTestServiceGetUsingOptionalOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getUsingOptional(options?: Models.AutoRestRenameParameterTestServiceGetUsingOptionalOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getUsingOptionalOperationSpec,
      callback);
  }

  /**
   * GET with a required query parameter
   * @param timeout A query parameter.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getUsingRequired(timeout: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param timeout A query parameter.
   * @param callback The callback
   */
  getUsingRequired(timeout: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param timeout A query parameter.
   * @param options The optional parameters
   * @param callback The callback
   */
  getUsingRequired(timeout: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getUsingRequired(timeout: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        timeout,
        options
      },
      getUsingRequiredOperationSpec,
      callback);
  }

  /**
   * GET with an optional client query parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getUsingClientOptional(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getUsingClientOptional(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUsingClientOptional(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getUsingClientOptional(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getUsingClientOptionalOperationSpec,
      callback);
  }

  /**
   * GET with a required client query parameter
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getUsingClientRequired(options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  getUsingClientRequired(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUsingClientRequired(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getUsingClientRequired(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getUsingClientRequiredOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getUsingOptionalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "rename-parameter/optional",
  queryParameters: [
    Parameters.timeout0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUsingRequiredOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "rename-parameter/required",
  queryParameters: [
    Parameters.timeout1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUsingClientOptionalOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "rename-parameter/client-optional",
  queryParameters: [
    Parameters.withCredentials
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUsingClientRequiredOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "rename-parameter/client-required",
  queryParameters: [
    Parameters.noRetryPolicy
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestRenameParameterTestService,
  AutoRestRenameParameterTestServiceContext,
  Models as AutoRestRenameParameterTestServiceModels,
  Mappers as AutoRestRenameParameterTestServiceMappers
};

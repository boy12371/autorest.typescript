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
import * as Mappers from "../models/formdataMappers";
import * as Parameters from "../models/parameters";
import { AutoRestSwaggerBATFormDataServiceContext } from "../autoRestSwaggerBATFormDataServiceContext";

/** Class representing a Formdata. */
export class Formdata {
  private readonly client: AutoRestSwaggerBATFormDataServiceContext;

  /**
   * Create a Formdata.
   * @param {AutoRestSwaggerBATFormDataServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFormDataServiceContext) {
    this.client = client;
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {string} fileName File name to upload. Name has to be spelled exactly as written here.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  uploadFileWithHttpOperationResponse(fileContent: msRest.HttpRequestBody, fileName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        fileContent,
        fileName,
        options
      },
      uploadFileOperationSpec);
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  uploadFileViaBodyWithHttpOperationResponse(fileContent: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        fileContent,
        options
      },
      uploadFileViaBodyOperationSpec);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const uploadFileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "formdata/stream/uploadfile",
  formDataParameters: [
    Parameters.fileContent,
    Parameters.fileName
  ],
  contentType: "multipart/form-data",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const uploadFileViaBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "formdata/stream/uploadfile",
  requestBody: {
    parameterPath: "fileContent",
    mapper: {
      required: true,
      serializedName: "fileContent",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

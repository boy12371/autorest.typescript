/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing CompositeBoolIntOptions.
 * @extends ServiceClientOptions
 */
export interface CompositeBoolIntOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * Contains response data for the getTrue operation.
 */
export type BoolGetTrueResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
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
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the getFalse operation.
 */
export type BoolGetFalseResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
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
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type BoolGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
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
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type BoolGetInvalidResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
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
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type IntModelGetNullResponse = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type IntModelGetInvalidResponse = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getOverflowInt32 operation.
 */
export type IntModelGetOverflowInt32Response = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getUnderflowInt32 operation.
 */
export type IntModelGetUnderflowInt32Response = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getOverflowInt64 operation.
 */
export type IntModelGetOverflowInt64Response = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getUnderflowInt64 operation.
 */
export type IntModelGetUnderflowInt64Response = {
  /**
   * The parsed response body.
   */
  body: number;
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
      parsedBody: number;
    };
};

/**
 * Contains response data for the getUnixTime operation.
 */
export type IntModelGetUnixTimeResponse = {
  /**
   * The parsed response body.
   */
  body: Date;
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
      parsedBody: Date;
    };
};

/**
 * Contains response data for the getInvalidUnixTime operation.
 */
export type IntModelGetInvalidUnixTimeResponse = {
  /**
   * The parsed response body.
   */
  body: Date;
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
      parsedBody: Date;
    };
};

/**
 * Contains response data for the getNullUnixTime operation.
 */
export type IntModelGetNullUnixTimeResponse = {
  /**
   * The parsed response body.
   */
  body: Date;
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
      parsedBody: Date;
    };
};

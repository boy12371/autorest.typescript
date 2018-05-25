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
 * An interface representing HeaderParamStringOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HeaderParamStringOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [value] Send a post request with header values "The quick
   * brown fox jumps over the lazy dog" or null or ""
   */
  value?: string;
}

/**
 * @interface
 * An interface representing HeaderParamDatetimeRfc1123OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HeaderParamDatetimeRfc1123OptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Date} [value] Send a post request with header values "Wed, 01 Jan
   * 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   */
  value?: Date;
}

/**
 * @interface
 * An interface representing HeaderParamEnumOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface HeaderParamEnumOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {GreyscaleColors} [value] Send a post request with header values
   * 'GREY'. Possible values include: 'White', 'black', 'GREY'
   */
  value?: GreyscaleColors;
}

/**
 * @interface
 * An interface representing HeaderResponseExistingKeyHeaders.
 * Defines headers for responseExistingKey operation.
 *
 */
export interface HeaderResponseExistingKeyHeaders {
  /**
   * @member {string} [userAgent] response with header value "User-Agent":
   * "overwrite"
   */
  userAgent?: string;
}

/**
 * @interface
 * An interface representing HeaderResponseProtectedKeyHeaders.
 * Defines headers for responseProtectedKey operation.
 *
 */
export interface HeaderResponseProtectedKeyHeaders {
  /**
   * @member {string} [contentType] response with header value "Content-Type":
   * "text/html"
   */
  contentType?: string;
}

/**
 * @interface
 * An interface representing HeaderResponseIntegerHeaders.
 * Defines headers for responseInteger operation.
 *
 */
export interface HeaderResponseIntegerHeaders {
  /**
   * @member {number} [value] response with header value "value": 1 or -2
   */
  value?: number;
}

/**
 * @interface
 * An interface representing HeaderResponseLongHeaders.
 * Defines headers for responseLong operation.
 *
 */
export interface HeaderResponseLongHeaders {
  /**
   * @member {number} [value] response with header value "value": 105 or -2
   */
  value?: number;
}

/**
 * @interface
 * An interface representing HeaderResponseFloatHeaders.
 * Defines headers for responseFloat operation.
 *
 */
export interface HeaderResponseFloatHeaders {
  /**
   * @member {number} [value] response with header value "value": 0.07 or -3.0
   */
  value?: number;
}

/**
 * @interface
 * An interface representing HeaderResponseDoubleHeaders.
 * Defines headers for responseDouble operation.
 *
 */
export interface HeaderResponseDoubleHeaders {
  /**
   * @member {number} [value] response with header value "value": 7e120 or -3.0
   */
  value?: number;
}

/**
 * @interface
 * An interface representing HeaderResponseBoolHeaders.
 * Defines headers for responseBool operation.
 *
 */
export interface HeaderResponseBoolHeaders {
  /**
   * @member {boolean} [value] response with header value "value": true or
   * false
   */
  value?: boolean;
}

/**
 * @interface
 * An interface representing HeaderResponseStringHeaders.
 * Defines headers for responseString operation.
 *
 */
export interface HeaderResponseStringHeaders {
  /**
   * @member {string} [value] response with header values "The quick brown fox
   * jumps over the lazy dog" or null or ""
   */
  value?: string;
}

/**
 * @interface
 * An interface representing HeaderResponseDateHeaders.
 * Defines headers for responseDate operation.
 *
 */
export interface HeaderResponseDateHeaders {
  /**
   * @member {Date} [value] response with header values "2010-01-01" or
   * "0001-01-01"
   */
  value?: Date;
}

/**
 * @interface
 * An interface representing HeaderResponseDatetimeHeaders.
 * Defines headers for responseDatetime operation.
 *
 */
export interface HeaderResponseDatetimeHeaders {
  /**
   * @member {Date} [value] response with header values "2010-01-01T12:34:56Z"
   * or "0001-01-01T00:00:00Z"
   */
  value?: Date;
}

/**
 * @interface
 * An interface representing HeaderResponseDatetimeRfc1123Headers.
 * Defines headers for responseDatetimeRfc1123 operation.
 *
 */
export interface HeaderResponseDatetimeRfc1123Headers {
  /**
   * @member {Date} [value] response with header values "Wed, 01 Jan 2010
   * 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   */
  value?: Date;
}

/**
 * @interface
 * An interface representing HeaderResponseDurationHeaders.
 * Defines headers for responseDuration operation.
 *
 */
export interface HeaderResponseDurationHeaders {
  /**
   * @member {string} [value] response with header values "P123DT22H14M12.011S"
   */
  value?: string;
}

/**
 * @interface
 * An interface representing HeaderResponseByteHeaders.
 * Defines headers for responseByte operation.
 *
 */
export interface HeaderResponseByteHeaders {
  /**
   * @member {Buffer} [value] response with header values "啊齄丂狛狜隣郎隣兀﨩"
   */
  value?: Buffer;
}

/**
 * @interface
 * An interface representing HeaderResponseEnumHeaders.
 * Defines headers for responseEnum operation.
 *
 */
export interface HeaderResponseEnumHeaders {
  /**
   * @member {GreyscaleColors} [value] response with header values "GREY" or
   * null. Possible values include: 'White', 'black', 'GREY'
   */
  value?: GreyscaleColors;
}

/**
 * Defines values for GreyscaleColors.
 * Possible values include: 'White', 'black', 'GREY'
 * @readonly
 * @enum {string}
 */
export enum GreyscaleColors {
  White = 'White',
  Black = 'black',
  GREY = 'GREY',
}

/**
 * Contains response data for the responseExistingKey operation.
 */
export interface HeaderResponseExistingKeyResponse extends msRest.HttpOperationResponse<void, HeaderResponseExistingKeyHeaders> {};

/**
 * Contains response data for the responseProtectedKey operation.
 */
export interface HeaderResponseProtectedKeyResponse extends msRest.HttpOperationResponse<void, HeaderResponseProtectedKeyHeaders> {};

/**
 * Contains response data for the responseInteger operation.
 */
export interface HeaderResponseIntegerResponse extends msRest.HttpOperationResponse<void, HeaderResponseIntegerHeaders> {};

/**
 * Contains response data for the responseLong operation.
 */
export interface HeaderResponseLongResponse extends msRest.HttpOperationResponse<void, HeaderResponseLongHeaders> {};

/**
 * Contains response data for the responseFloat operation.
 */
export interface HeaderResponseFloatResponse extends msRest.HttpOperationResponse<void, HeaderResponseFloatHeaders> {};

/**
 * Contains response data for the responseDouble operation.
 */
export interface HeaderResponseDoubleResponse extends msRest.HttpOperationResponse<void, HeaderResponseDoubleHeaders> {};

/**
 * Contains response data for the responseBool operation.
 */
export interface HeaderResponseBoolResponse extends msRest.HttpOperationResponse<void, HeaderResponseBoolHeaders> {};

/**
 * Contains response data for the responseString operation.
 */
export interface HeaderResponseStringResponse extends msRest.HttpOperationResponse<void, HeaderResponseStringHeaders> {};

/**
 * Contains response data for the responseDate operation.
 */
export interface HeaderResponseDateResponse extends msRest.HttpOperationResponse<void, HeaderResponseDateHeaders> {};

/**
 * Contains response data for the responseDatetime operation.
 */
export interface HeaderResponseDatetimeResponse extends msRest.HttpOperationResponse<void, HeaderResponseDatetimeHeaders> {};

/**
 * Contains response data for the responseDatetimeRfc1123 operation.
 */
export interface HeaderResponseDatetimeRfc1123Response extends msRest.HttpOperationResponse<void, HeaderResponseDatetimeRfc1123Headers> {};

/**
 * Contains response data for the responseDuration operation.
 */
export interface HeaderResponseDurationResponse extends msRest.HttpOperationResponse<void, HeaderResponseDurationHeaders> {};

/**
 * Contains response data for the responseByte operation.
 */
export interface HeaderResponseByteResponse extends msRest.HttpOperationResponse<void, HeaderResponseByteHeaders> {};

/**
 * Contains response data for the responseEnum operation.
 */
export interface HeaderResponseEnumResponse extends msRest.HttpOperationResponse<void, HeaderResponseEnumHeaders> {};
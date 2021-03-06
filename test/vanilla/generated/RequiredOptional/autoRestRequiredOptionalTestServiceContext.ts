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

const packageName = "";
const packageVersion = "";

export class AutoRestRequiredOptionalTestServiceContext extends msRest.ServiceClient {
  requiredGlobalPath: string;
  requiredGlobalQuery: string;
  optionalGlobalQuery?: number;

  /**
   * Initializes a new instance of the AutoRestRequiredOptionalTestServiceContext class.
   * @param requiredGlobalPath number of items to skip
   * @param requiredGlobalQuery number of items to skip
   * @param [options] The parameter options
   */
  constructor(requiredGlobalPath: string, requiredGlobalQuery: string, options?: Models.AutoRestRequiredOptionalTestServiceOptions) {
    if (requiredGlobalPath === null || requiredGlobalPath === undefined) {
      throw new Error('\'requiredGlobalPath\' cannot be null.');
    }
    if (requiredGlobalQuery === null || requiredGlobalQuery === undefined) {
      throw new Error('\'requiredGlobalQuery\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.requiredGlobalPath = requiredGlobalPath;
    this.requiredGlobalQuery = requiredGlobalQuery;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.optionalGlobalQuery !== null && options.optionalGlobalQuery !== undefined) {
      this.optionalGlobalQuery = options.optionalGlobalQuery;
    }
  }
}

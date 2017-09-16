"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ms_rest_azure_js_1 = require("ms-rest-azure-js");
exports.CloudError = ms_rest_azure_js_1.CloudErrorMapper;
exports.BaseResource = ms_rest_azure_js_1.BaseResourceMapper;
exports.ErrorModel = {
    required: false,
    serializedName: 'Error',
    type: {
        name: 'Composite',
        className: 'ErrorModel',
        modelProperties: {
            status: {
                required: false,
                serializedName: 'status',
                type: {
                    name: 'Number'
                }
            },
            message: {
                required: false,
                serializedName: 'message',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.Resource = {
    required: false,
    serializedName: 'Resource',
    type: {
        name: 'Composite',
        className: 'Resource',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            type: {
                required: false,
                readOnly: true,
                serializedName: 'type',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            location: {
                required: false,
                serializedName: 'location',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                readOnly: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.FlattenedProduct = {
    required: false,
    serializedName: 'FlattenedProduct',
    type: {
        name: 'Composite',
        className: 'FlattenedProduct',
        modelProperties: {
            id: {
                required: false,
                readOnly: true,
                serializedName: 'id',
                type: {
                    name: 'String'
                }
            },
            type: {
                required: false,
                readOnly: true,
                serializedName: 'type',
                type: {
                    name: 'String'
                }
            },
            tags: {
                required: false,
                serializedName: 'tags',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'stringElementType',
                        type: {
                            name: 'String'
                        }
                    }
                }
            },
            location: {
                required: false,
                serializedName: 'location',
                type: {
                    name: 'String'
                }
            },
            name: {
                required: false,
                readOnly: true,
                serializedName: 'name',
                type: {
                    name: 'String'
                }
            },
            pname: {
                required: false,
                serializedName: 'properties.pname',
                type: {
                    name: 'String'
                }
            },
            lsize: {
                required: false,
                serializedName: 'properties.lsize',
                type: {
                    name: 'Number'
                }
            },
            provisioningState: {
                required: false,
                serializedName: 'properties.provisioningState',
                type: {
                    name: 'String'
                }
            }
        }
    }
};
exports.ResourceCollection = {
    required: false,
    serializedName: 'ResourceCollection',
    type: {
        name: 'Composite',
        className: 'ResourceCollection',
        modelProperties: {
            productresource: {
                required: false,
                serializedName: 'productresource',
                type: {
                    name: 'Composite',
                    className: 'FlattenedProduct'
                }
            },
            arrayofresources: {
                required: false,
                serializedName: 'arrayofresources',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'FlattenedProductElementType',
                        type: {
                            name: 'Composite',
                            className: 'FlattenedProduct'
                        }
                    }
                }
            },
            dictionaryofresources: {
                required: false,
                serializedName: 'dictionaryofresources',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'FlattenedProductElementType',
                        type: {
                            name: 'Composite',
                            className: 'FlattenedProduct'
                        }
                    }
                }
            }
        }
    }
};
exports.AutoRestResourceFlatteningTestServicePutArrayOptionalParams = {
    required: false,
    serializedName: 'PutArrayOptions',
    type: {
        name: 'Composite',
        className: 'AutoRestResourceFlatteningTestServicePutArrayOptionalParams',
        modelProperties: {
            resourceArray: {
                required: false,
                serializedName: 'ResourceArray',
                type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ResourceElementType',
                        type: {
                            name: 'Composite',
                            className: 'Resource'
                        }
                    }
                }
            }
        }
    }
};
exports.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams = {
    required: false,
    serializedName: 'PutDictionaryOptions',
    type: {
        name: 'Composite',
        className: 'AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams',
        modelProperties: {
            resourceDictionary: {
                required: false,
                serializedName: 'ResourceDictionary',
                type: {
                    name: 'Dictionary',
                    value: {
                        required: false,
                        serializedName: 'FlattenedProductElementType',
                        type: {
                            name: 'Composite',
                            className: 'FlattenedProduct'
                        }
                    }
                }
            }
        }
    }
};
exports.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams = {
    required: false,
    serializedName: 'PutResourceCollectionOptions',
    type: {
        name: 'Composite',
        className: 'AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams',
        modelProperties: {
            resourceComplexObject: {
                required: false,
                serializedName: 'ResourceComplexObject',
                type: {
                    name: 'Composite',
                    className: 'ResourceCollection'
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map
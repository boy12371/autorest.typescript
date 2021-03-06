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


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        xmlName: "status",
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        xmlName: "message",
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Slide: msRest.CompositeMapper = {
  xmlName: "slide",
  serializedName: "Slide",
  type: {
    name: "Composite",
    className: "Slide",
    modelProperties: {
      type: {
        xmlIsAttribute: true,
        xmlName: "type",
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      title: {
        xmlName: "title",
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      items: {
        xmlName: "items",
        xmlElementName: "item",
        serializedName: "items",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Slideshow: msRest.CompositeMapper = {
  xmlName: "slideshow",
  serializedName: "Slideshow",
  type: {
    name: "Composite",
    className: "Slideshow",
    modelProperties: {
      title: {
        xmlIsAttribute: true,
        xmlName: "title",
        serializedName: "title",
        type: {
          name: "String"
        }
      },
      date: {
        xmlIsAttribute: true,
        xmlName: "date",
        serializedName: "date",
        type: {
          name: "String"
        }
      },
      author: {
        xmlIsAttribute: true,
        xmlName: "author",
        serializedName: "author",
        type: {
          name: "String"
        }
      },
      slides: {
        xmlName: "slides",
        xmlElementName: "slide",
        serializedName: "slides",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Slide"
            }
          }
        }
      }
    }
  }
};

export const AppleBarrel: msRest.CompositeMapper = {
  serializedName: "AppleBarrel",
  type: {
    name: "Composite",
    className: "AppleBarrel",
    modelProperties: {
      goodApples: {
        xmlIsWrapped: true,
        xmlName: "GoodApples",
        xmlElementName: "Apple",
        serializedName: "GoodApples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      badApples: {
        xmlIsWrapped: true,
        xmlName: "BadApples",
        xmlElementName: "Apple",
        serializedName: "BadApples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Banana: msRest.CompositeMapper = {
  xmlName: "banana",
  serializedName: "Banana",
  type: {
    name: "Composite",
    className: "Banana",
    modelProperties: {
      name: {
        xmlName: "name",
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      flavor: {
        xmlName: "flavor",
        serializedName: "flavor",
        type: {
          name: "String"
        }
      },
      expiration: {
        xmlName: "expiration",
        serializedName: "expiration",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ContainerProperties: msRest.CompositeMapper = {
  serializedName: "ContainerProperties",
  type: {
    name: "Composite",
    className: "ContainerProperties",
    modelProperties: {
      lastModified: {
        xmlName: "Last-Modified",
        required: true,
        serializedName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        xmlName: "Etag",
        required: true,
        serializedName: "Etag",
        type: {
          name: "String"
        }
      },
      leaseStatus: {
        xmlName: "LeaseStatus",
        serializedName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "locked",
            "unlocked"
          ]
        }
      },
      leaseState: {
        xmlName: "LeaseState",
        serializedName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        xmlName: "LeaseDuration",
        serializedName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: [
            "infinite",
            "fixed"
          ]
        }
      },
      publicAccess: {
        xmlName: "PublicAccess",
        serializedName: "PublicAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Container: msRest.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "Container",
    modelProperties: {
      name: {
        xmlName: "Name",
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      properties: {
        xmlName: "Properties",
        required: true,
        serializedName: "Properties",
        type: {
          name: "Composite",
          className: "ContainerProperties"
        }
      },
      metadata: {
        xmlName: "Metadata",
        serializedName: "Metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ListContainersResponse: msRest.CompositeMapper = {
  xmlName: "EnumerationResults",
  serializedName: "ListContainersResponse",
  type: {
    name: "Composite",
    className: "ListContainersResponse",
    modelProperties: {
      serviceEndpoint: {
        xmlIsAttribute: true,
        xmlName: "ServiceEndpoint",
        required: true,
        serializedName: "ServiceEndpoint",
        type: {
          name: "String"
        }
      },
      prefix: {
        xmlName: "Prefix",
        required: true,
        serializedName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        xmlName: "Marker",
        serializedName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        xmlName: "MaxResults",
        required: true,
        serializedName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      containers: {
        xmlIsWrapped: true,
        xmlName: "Containers",
        xmlElementName: "Container",
        serializedName: "Containers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Container"
            }
          }
        }
      },
      nextMarker: {
        xmlName: "NextMarker",
        required: true,
        serializedName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CorsRule: msRest.CompositeMapper = {
  serializedName: "CorsRule",
  type: {
    name: "Composite",
    className: "CorsRule",
    modelProperties: {
      allowedOrigins: {
        xmlName: "AllowedOrigins",
        required: true,
        serializedName: "AllowedOrigins",
        type: {
          name: "String"
        }
      },
      allowedMethods: {
        xmlName: "AllowedMethods",
        required: true,
        serializedName: "AllowedMethods",
        type: {
          name: "String"
        }
      },
      allowedHeaders: {
        xmlName: "AllowedHeaders",
        required: true,
        serializedName: "AllowedHeaders",
        type: {
          name: "String"
        }
      },
      exposedHeaders: {
        xmlName: "ExposedHeaders",
        required: true,
        serializedName: "ExposedHeaders",
        type: {
          name: "String"
        }
      },
      maxAgeInSeconds: {
        xmlName: "MaxAgeInSeconds",
        required: true,
        serializedName: "MaxAgeInSeconds",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BlobProperties: msRest.CompositeMapper = {
  serializedName: "BlobProperties",
  type: {
    name: "Composite",
    className: "BlobProperties",
    modelProperties: {
      lastModified: {
        xmlName: "Last-Modified",
        required: true,
        serializedName: "Last-Modified",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      etag: {
        xmlName: "Etag",
        required: true,
        serializedName: "Etag",
        type: {
          name: "String"
        }
      },
      contentLength: {
        xmlName: "Content-Length",
        serializedName: "Content-Length",
        type: {
          name: "Number"
        }
      },
      contentType: {
        xmlName: "Content-Type",
        serializedName: "Content-Type",
        type: {
          name: "String"
        }
      },
      contentEncoding: {
        xmlName: "Content-Encoding",
        serializedName: "Content-Encoding",
        type: {
          name: "String"
        }
      },
      contentLanguage: {
        xmlName: "Content-Language",
        serializedName: "Content-Language",
        type: {
          name: "String"
        }
      },
      contentMD5: {
        xmlName: "Content-MD5",
        serializedName: "Content-MD5",
        type: {
          name: "String"
        }
      },
      contentDisposition: {
        xmlName: "Content-Disposition",
        serializedName: "Content-Disposition",
        type: {
          name: "String"
        }
      },
      cacheControl: {
        xmlName: "Cache-Control",
        serializedName: "Cache-Control",
        type: {
          name: "String"
        }
      },
      blobSequenceNumber: {
        xmlName: "x-ms-blob-sequence-number",
        serializedName: "x-ms-blob-sequence-number",
        type: {
          name: "Number"
        }
      },
      blobType: {
        xmlName: "BlobType",
        serializedName: "BlobType",
        type: {
          name: "Enum",
          allowedValues: [
            "BlockBlob",
            "PageBlob",
            "AppendBlob"
          ]
        }
      },
      leaseStatus: {
        xmlName: "LeaseStatus",
        serializedName: "LeaseStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "locked",
            "unlocked"
          ]
        }
      },
      leaseState: {
        xmlName: "LeaseState",
        serializedName: "LeaseState",
        type: {
          name: "Enum",
          allowedValues: [
            "available",
            "leased",
            "expired",
            "breaking",
            "broken"
          ]
        }
      },
      leaseDuration: {
        xmlName: "LeaseDuration",
        serializedName: "LeaseDuration",
        type: {
          name: "Enum",
          allowedValues: [
            "infinite",
            "fixed"
          ]
        }
      },
      copyId: {
        xmlName: "CopyId",
        serializedName: "CopyId",
        type: {
          name: "String"
        }
      },
      copyStatus: {
        xmlName: "CopyStatus",
        serializedName: "CopyStatus",
        type: {
          name: "Enum",
          allowedValues: [
            "pending",
            "success",
            "aborted",
            "failed"
          ]
        }
      },
      copySource: {
        xmlName: "CopySource",
        serializedName: "CopySource",
        type: {
          name: "String"
        }
      },
      copyProgress: {
        xmlName: "CopyProgress",
        serializedName: "CopyProgress",
        type: {
          name: "String"
        }
      },
      copyCompletionTime: {
        xmlName: "CopyCompletionTime",
        serializedName: "CopyCompletionTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      copyStatusDescription: {
        xmlName: "CopyStatusDescription",
        serializedName: "CopyStatusDescription",
        type: {
          name: "String"
        }
      },
      serverEncrypted: {
        xmlName: "ServerEncrypted",
        serializedName: "ServerEncrypted",
        type: {
          name: "Boolean"
        }
      },
      incrementalCopy: {
        xmlName: "IncrementalCopy",
        serializedName: "IncrementalCopy",
        type: {
          name: "Boolean"
        }
      },
      destinationSnapshot: {
        xmlName: "DestinationSnapshot",
        serializedName: "DestinationSnapshot",
        type: {
          name: "String"
        }
      },
      deletedTime: {
        xmlName: "DeletedTime",
        serializedName: "DeletedTime",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      remainingRetentionDays: {
        xmlName: "RemainingRetentionDays",
        serializedName: "RemainingRetentionDays",
        type: {
          name: "Number"
        }
      },
      accessTier: {
        xmlName: "AccessTier",
        serializedName: "AccessTier",
        type: {
          name: "String"
        }
      },
      accessTierInferred: {
        xmlName: "AccessTierInferred",
        serializedName: "AccessTierInferred",
        type: {
          name: "Boolean"
        }
      },
      archiveStatus: {
        xmlName: "ArchiveStatus",
        serializedName: "ArchiveStatus",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blob: msRest.CompositeMapper = {
  serializedName: "Blob",
  type: {
    name: "Composite",
    className: "Blob",
    modelProperties: {
      name: {
        xmlName: "Name",
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      },
      deleted: {
        xmlName: "Deleted",
        required: true,
        serializedName: "Deleted",
        type: {
          name: "Boolean"
        }
      },
      snapshot: {
        xmlName: "Snapshot",
        required: true,
        serializedName: "Snapshot",
        type: {
          name: "String"
        }
      },
      properties: {
        xmlName: "Properties",
        required: true,
        serializedName: "Properties",
        type: {
          name: "Composite",
          className: "BlobProperties"
        }
      },
      metadata: {
        xmlName: "Metadata",
        serializedName: "Metadata",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RetentionPolicy: msRest.CompositeMapper = {
  serializedName: "RetentionPolicy",
  type: {
    name: "Composite",
    className: "RetentionPolicy",
    modelProperties: {
      enabled: {
        xmlName: "Enabled",
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      days: {
        xmlName: "Days",
        serializedName: "Days",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Logging: msRest.CompositeMapper = {
  serializedName: "Logging",
  type: {
    name: "Composite",
    className: "Logging",
    modelProperties: {
      version: {
        xmlName: "Version",
        required: true,
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      deleteProperty: {
        xmlName: "Delete",
        required: true,
        serializedName: "Delete",
        type: {
          name: "Boolean"
        }
      },
      read: {
        xmlName: "Read",
        required: true,
        serializedName: "Read",
        type: {
          name: "Boolean"
        }
      },
      write: {
        xmlName: "Write",
        required: true,
        serializedName: "Write",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        xmlName: "RetentionPolicy",
        required: true,
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const Metrics: msRest.CompositeMapper = {
  serializedName: "Metrics",
  type: {
    name: "Composite",
    className: "Metrics",
    modelProperties: {
      version: {
        xmlName: "Version",
        serializedName: "Version",
        type: {
          name: "String"
        }
      },
      enabled: {
        xmlName: "Enabled",
        required: true,
        serializedName: "Enabled",
        type: {
          name: "Boolean"
        }
      },
      includeAPIs: {
        xmlName: "IncludeAPIs",
        serializedName: "IncludeAPIs",
        type: {
          name: "Boolean"
        }
      },
      retentionPolicy: {
        xmlName: "RetentionPolicy",
        serializedName: "RetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const BlobPrefix: msRest.CompositeMapper = {
  serializedName: "BlobPrefix",
  type: {
    name: "Composite",
    className: "BlobPrefix",
    modelProperties: {
      name: {
        xmlName: "Name",
        required: true,
        serializedName: "Name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Blobs: msRest.CompositeMapper = {
  serializedName: "Blobs",
  type: {
    name: "Composite",
    className: "Blobs",
    modelProperties: {
      blobPrefix: {
        xmlName: "BlobPrefix",
        xmlElementName: "BlobPrefix",
        serializedName: "BlobPrefix",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BlobPrefix"
            }
          }
        }
      },
      blob: {
        xmlName: "Blob",
        xmlElementName: "Blob",
        serializedName: "Blob",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Blob"
            }
          }
        }
      }
    }
  }
};

export const ListBlobsResponse: msRest.CompositeMapper = {
  xmlName: "EnumerationResults",
  serializedName: "ListBlobsResponse",
  type: {
    name: "Composite",
    className: "ListBlobsResponse",
    modelProperties: {
      serviceEndpoint: {
        xmlIsAttribute: true,
        xmlName: "ServiceEndpoint",
        required: true,
        serializedName: "ServiceEndpoint",
        type: {
          name: "String"
        }
      },
      containerName: {
        xmlIsAttribute: true,
        xmlName: "ContainerName",
        required: true,
        serializedName: "ContainerName",
        type: {
          name: "String"
        }
      },
      prefix: {
        xmlName: "Prefix",
        required: true,
        serializedName: "Prefix",
        type: {
          name: "String"
        }
      },
      marker: {
        xmlName: "Marker",
        required: true,
        serializedName: "Marker",
        type: {
          name: "String"
        }
      },
      maxResults: {
        xmlName: "MaxResults",
        required: true,
        serializedName: "MaxResults",
        type: {
          name: "Number"
        }
      },
      delimiter: {
        xmlName: "Delimiter",
        required: true,
        serializedName: "Delimiter",
        type: {
          name: "String"
        }
      },
      blobs: {
        xmlName: "Blobs",
        required: true,
        serializedName: "Blobs",
        type: {
          name: "Composite",
          className: "Blobs"
        }
      },
      nextMarker: {
        xmlName: "NextMarker",
        required: true,
        serializedName: "NextMarker",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AccessPolicy: msRest.CompositeMapper = {
  serializedName: "AccessPolicy",
  type: {
    name: "Composite",
    className: "AccessPolicy",
    modelProperties: {
      start: {
        xmlName: "Start",
        required: true,
        serializedName: "Start",
        type: {
          name: "DateTime"
        }
      },
      expiry: {
        xmlName: "Expiry",
        required: true,
        serializedName: "Expiry",
        type: {
          name: "DateTime"
        }
      },
      permission: {
        xmlName: "Permission",
        required: true,
        serializedName: "Permission",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignedIdentifier: msRest.CompositeMapper = {
  serializedName: "SignedIdentifier",
  type: {
    name: "Composite",
    className: "SignedIdentifier",
    modelProperties: {
      id: {
        xmlName: "Id",
        required: true,
        serializedName: "Id",
        type: {
          name: "String"
        }
      },
      accessPolicy: {
        xmlName: "AccessPolicy",
        required: true,
        serializedName: "AccessPolicy",
        type: {
          name: "Composite",
          className: "AccessPolicy"
        }
      }
    }
  }
};

export const StorageServiceProperties: msRest.CompositeMapper = {
  serializedName: "StorageServiceProperties",
  type: {
    name: "Composite",
    className: "StorageServiceProperties",
    modelProperties: {
      logging: {
        xmlName: "Logging",
        serializedName: "Logging",
        type: {
          name: "Composite",
          className: "Logging"
        }
      },
      hourMetrics: {
        xmlName: "HourMetrics",
        serializedName: "HourMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      minuteMetrics: {
        xmlName: "MinuteMetrics",
        serializedName: "MinuteMetrics",
        type: {
          name: "Composite",
          className: "Metrics"
        }
      },
      cors: {
        xmlIsWrapped: true,
        xmlName: "Cors",
        xmlElementName: "CorsRule",
        serializedName: "Cors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CorsRule"
            }
          }
        }
      },
      defaultServiceVersion: {
        xmlName: "DefaultServiceVersion",
        serializedName: "DefaultServiceVersion",
        type: {
          name: "String"
        }
      },
      deleteRetentionPolicy: {
        xmlName: "DeleteRetentionPolicy",
        serializedName: "DeleteRetentionPolicy",
        type: {
          name: "Composite",
          className: "RetentionPolicy"
        }
      }
    }
  }
};

export const ComplexTypeNoMeta: msRest.CompositeMapper = {
  serializedName: "ComplexTypeNoMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeNoMeta",
    modelProperties: {
      id: {
        xmlName: "ID",
        serializedName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ComplexTypeWithMeta: msRest.CompositeMapper = {
  xmlName: "XMLComplexTypeWithMeta",
  serializedName: "ComplexTypeWithMeta",
  type: {
    name: "Composite",
    className: "ComplexTypeWithMeta",
    modelProperties: {
      id: {
        xmlName: "ID",
        serializedName: "ID",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootWithRefAndNoMeta: msRest.CompositeMapper = {
  serializedName: "RootWithRefAndNoMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndNoMeta",
    modelProperties: {
      refToModel: {
        xmlName: "RefToModel",
        serializedName: "RefToModel",
        type: {
          name: "Composite",
          className: "ComplexTypeNoMeta"
        }
      },
      something: {
        xmlName: "Something",
        serializedName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RootWithRefAndMeta: msRest.CompositeMapper = {
  serializedName: "RootWithRefAndMeta",
  type: {
    name: "Composite",
    className: "RootWithRefAndMeta",
    modelProperties: {
      refToModel: {
        xmlName: "XMLComplexTypeWithMeta",
        serializedName: "RefToModel",
        type: {
          name: "Composite",
          className: "ComplexTypeWithMeta"
        }
      },
      something: {
        xmlName: "Something",
        serializedName: "Something",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const XmlGetHeadersHeaders: msRest.CompositeMapper = {
  serializedName: "xml-getheaders-headers",
  type: {
    name: "Composite",
    className: "XmlGetHeadersHeaders",
    modelProperties: {
      customHeader: {
        serializedName: "custom-header",
        type: {
          name: "String"
        }
      }
    }
  }
};

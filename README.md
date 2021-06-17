# Introduction
This sample shows how to load data to S3 from an API call.

# Prerequisites
Before using this sample, please have the following values

1. https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
2. folder on the S3 bucket.
3. S3 bucket in AWS Account.

# Installation

1. Install NodeJS from https://nodejs.org (v12 recommended)

# Steps

## 1. Install npm packages

npm install

## 2. Create/Update a file called "config.json".

In root folder with the following JSON:
```
{
  "requestParams": {
    "method": "",
    "url": "",
    "data": {}
  },
  "s3Bucket": "",
  "folder": ""
}


```

requestParams => parameters to do the request
s3Bucket => Bucket to load the data
folder => Folder in the bucket to create the data

# Usage

Load Data: `node index.js`
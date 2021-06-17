const AWS = require("aws-sdk");
const uuidv1 = require("uuid");
const axios = require("axios");

const s3 = new AWS.S3();

const { requestParams, s3Bucket, folder } = require("./config.json");

const loadDataToS3 = async (data) => {
  const params = {
    Body: JSON.stringify(data),
    Bucket: s3Bucket,
    ContentType: "application/json",
    Key: `${folder}/${uuidv1.v1()}.json`,
  };
  await s3.upload(params).promise();
};

const sendRequest = async () => {
  try {
    return await axios(requestParams);
  } catch (error) {
    console.log("error: ", error);
    console.log(JSON.stringify(requestParams, null, 2));
    throw error;
  }
};

const run = async () => {
  try {
    //Get data from API
    console.log("Getting data from API...");
    const response = await sendRequest();
    //Load the data to S3
    console.log("Loading data to S3...");
    await loadDataToS3(response.data);
    console.log("End.");
  } catch (error) {
    console.log("error: ", error);
  }
};

run();

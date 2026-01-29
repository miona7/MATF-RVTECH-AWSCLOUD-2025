const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');

const TABLE_NAME = process.env.CHARGERS_TABLE;

const DYNAMODB_ENDPOINT = process.env.LOCALSTACK_HOSTNAME
  ? `http://${process.env.LOCALSTACK_HOSTNAME}:4566`
  : 'http://localhost:4566';

const client = new DynamoDBClient({
  endpoint: DYNAMODB_ENDPOINT,
  region: 'us-east-1',
});

const docClient = DynamoDBDocumentClient.from(client);

const ALLOWED_ORIGIN =
  'http://matf-rvtech-website.s3-website.localhost.localstack.cloud:4566';

const corsHeaders = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

exports.getChargersByTown = async () => {
  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify({ message: 'getChargersByTown initialized' }),
  };
};
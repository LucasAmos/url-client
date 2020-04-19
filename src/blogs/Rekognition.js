import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Container, Row, Col } from 'react-bootstrap';
import Blog from './Blog';
import './blogpost.css';

const ReactMarkdown = require('react-markdown/with-html');

const code1 = `#.env file

ACCESSKEYID=youraccesskeyhere
SECRETACCESSKEY=yoursecretaccesskeyhere
REGION=us-east-1
BUCKET=rekognition-tutorial`;

const code2 = `{
  "name": "Rekognition",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
}
`;
const code3 = `//index.js

const fs = require("fs");
const AWS = require("aws-sdk");
const { v1: uuid } = require("uuid");
require("dotenv").config();

const { ACCESSKEYID, SECRETACCESSKEY, REGION, BUCKET } = process.env;
AWS.config.update({
  accessKeyId: ACCESSKEYID,
  secretAccessKey: SECRETACCESSKEY,
  region: REGION,
});
const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();
`;

const code4 = `{
  "name": "Rekognition",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "aws-sdk": "^2.653.0",
    "dotenv": "^8.2.0",
    "uuid": "^7.0.3"
  }
}
`;

const code5 = `//index.js

async function uploadFile(filePath, bucket) {
  try {
    const fileContent = fs.readFileSync(filePath);
    const params = {
      Bucket: bucket,
      Key: uuid(),
      Body: fileContent,
    };
    const result = s3.upload(params).promise();
    return result;
  } catch (error) {
    throw Error(error.message);
  }
}
`;

const code6 = `//index.js

async function deleteFile(bucket, key) {
  const params = {
    Bucket: bucket,
    Key: key,
  };

  try {
    const result = await s3.deleteObject(params).promise();
    return result;
  } catch (error) {
    throw Error(error.message);
  }
}
`;

const code7 = `//index.js

async function analyseImage(filePath) {
  try {
    const res = await uploadFile(filePath, BUCKET);
    const result = await getImageLabels(BUCKET, res.key);
    deleteFile(BUCKET, res.Key);

    result.Labels.forEach((label) => {
      console.log(\`\${label.Confidence}\% confidence that is a \${label.Name}\`);
    });
  } catch (error) {
    console.log(error);
  }
}`;

const code8 = `
{ 
  ETag: '"3a04a57d047a35921a3047ef3b9226ec"',
  Location:
   'https://rekognition-tutorial.s3.amazonaws.com/08776200-8269-11ea-af13-0fc69f69c688',
  Key: '08776200-8269-11ea-af13-0fc69f69c688',
  Bucket: 'rekognition-tutorial' 
}`;

const code9 = `//index.js

async function getImageLabels(bucket, filename) {
  const params = {
    Image: {
      S3Object: {
        Bucket: bucket,
        Name: filename,
      },
    },
    MaxLabels: 10,
  };

  try {
    const result = await rekognition.detectLabels(params).promise();
    return result;
  } catch (error) {
    throw Error(error.message);
  }
}`;

const code10 = ` {
  Labels: [
     {
    Confidence: 99.25072479248047, 
    Name: "People"
   }, 
     {
    Confidence: 99.25074005126953, 
    Name: "Person"
   }
  ]
 }`;

const code11 = `99.9832534790039% confidence that is a Text
98.00961303710938% confidence that is a Document
98.00961303710938% confidence that is a Diploma
76.6316146850586% confidence that is a Menu`;
export default function Blog1() {
  return (
    <Blog>
      <div className="blogpost">
        <Container>
          <Row>
            <Col>
              <header>
                Using AWS Rekognition to identify, people, objects and scenes in images{' '}
              </header>
            </Col>
          </Row>
          <Row id="intro">
            <Col>
              <h2>
                Image recognition using machine learning is difficult. Designing, training and
                verifying models takes time and obtaining the images to train the model can be a
                challenge and that is before other questions such as how the model is consumed are
                addressed. Will a RESTful API need to be constructed to act as in interface for the
                model and where will it be deployed? Fortunately{' '}
                <a href="https://aws.amazon.com/rekognition/">AWS Rekognition</a> can answer all of
                these problems for you.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>How it works</h1>
              <h2></h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>What it costs</h1>
              <p>
                Price varies by AWS region with US EAST (N. Virginia) currently the cheapest. Costs
                start at $0.001 for the first 1 million images processed a month, progressively
                decreasing to $0.0004 per image when over 100 million images a month are processed.
              </p>
              <br />
              <p>
                Full details can found on the{' '}
                <a href="https://aws.amazon.com/rekognition/pricing/">AWS site.</a>
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1>Creating AWS credentials and an S3 bucket</h1>
              <p>
                Before we get started we will need to create some credentials by visiting the{' '}
                <a href="https://console.aws.amazon.com">AWS console</a>. Once you have logged in
                select the <b>IAM</b> service and navigate to the <b>users</b> section. Here will we
                click <b>Add user</b> and create a user with programmatic access.
                <img src="https://lucas-blog-images.s3.eu-west-2.amazonaws.com/rekognition/rekognition1.png" />
                <p>
                  Click next and progress to the screen where will give the user the required
                  permissions by clicking <b>Attach existing policies directly</b>. Here we can use
                  the search box to add the <b> AmazonRekognitionFullAccess</b> and{' '}
                  <b>AmazonS3FullAccess</b> policies. Click next twice and then click{' '}
                  <b>create user</b>
                </p>
                <img src="https://lucas-blog-images.s3.eu-west-2.amazonaws.com/rekognition/rekognition2.png" />
              </p>

              <p>
                Make sure to copy your Access key ID and Secret access key, we will need them later.
              </p>

              <img src="https://lucas-blog-images.s3.eu-west-2.amazonaws.com/rekognition/rekognition3.png" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>The code</h1>
              <p>
                Firstly will will create a new directory named <code>Rekognition</code>, move into
                this directory and initialise a new <code>Node.js</code> project using the{' '}
                <code> yarn init -y</code> command to default to all recommended settings. Your{' '}
                <code>package.json</code> should look like this
              </p>
              <SyntaxHighlighter
                language="json"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code2}
              </SyntaxHighlighter>
              <p>
                Before we write any code we need to create a <code>.env</code> file in the{' '}
                <b>Rekognition</b> directory, with the ACCESSKEYID and SECRETACCESSKEY values being
                replaced with the credentials that you created using the AWS console.
              </p>
              <SyntaxHighlighter
                language="plaintext"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code1}
              </SyntaxHighlighter>
              <p>
                To process our images using the rekognition API we will need to make use of three
                packages, the <b> AWS SDK, uuid and dotenv.</b> The AWS SDK is the Javascript
                library used to access AWS services, uuid is used for generating Universally Unique
                Identifiers and dotenv is used to store credentials in environment variables and
                prevent them from being embedded in our code. Install these packages by running{' '}
                <code>yarn add aws-sdk uuid dotenv</code> <br />
                <br />
                Your <code>package.json</code> file should now look like this
              </p>
              <SyntaxHighlighter
                language="json"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code4}
              </SyntaxHighlighter>
              <p>
                Now we can create the <code>index.js</code> file that will be the entrypoint to our
                application.
              </p>
              <p>
                At the top of the file we will import the packages that we previously installed, we
                will also import the <code>fs</code> util which we will use to read the image files
                from the filesystem. Next we will set the AWS config properties with our credentials
                and region. Finally we will create the <code>s3</code> and <code>rekognition</code>{' '}
                objects that we will use to access the S3 and Rekognition APIs.
              </p>

              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code3}
              </SyntaxHighlighter>

              <p>
                At this point you may be wondering why we will need to access the S3 API, after all
                we only want to analyse images, we don't actually want to store them. While this is
                true, the simplest way to upload an image to Rekognition is from S3 and considering
                the super low costs of S3 and that the image may already be stored in S3 this is the
                approach we will use.
              </p>

              <p>
                To upload the file to S3 we will create the <code>uploadFile</code> function which
                will take two parameters; the file path of the image we will upload and the name of
                the bucket we are uploading the file to.
              </p>
              <p>
                S3 is an object storage service and every file that is uploaded must have a key via
                which it can be identified. We will generate this key by using the <code>uuid</code>{' '}
                <a href="https://github.com/uuidjs/uuid"> package</a> that we installed earlier.
              </p>
              <p>
                Once we have uploaded the file we will return the response object, if an error
                occurs we will throw an <code>Error</code> along with the error message.
              </p>
              <p>
                It's important to note that we are creating an asynchronous function that returns
                the result of <code>s3.upload(params).promise()</code>. This is important as when we
                use this function we will want to <code>await</code> the reponse from the S3 API
                before we invoke the call to the Rekognition API.
              </p>

              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code5}
              </SyntaxHighlighter>

              <p>
                Once the file has been succesfully uploaded to S3 the reponse object returns several
                useful values, the most important of which is the <code>Key</code> value, this is
                the value that we created using the <code>uuid</code> package. As this value is
                returned with the reponse object we do not need to keep track of the value crated by
                the uuid library for later use.
              </p>

              <SyntaxHighlighter
                language="json"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code8}
              </SyntaxHighlighter>
              <p>
                For this example we will not need the image file once it has been processed by
                Rekognition so we will also create a <code>deleteFile</code> function to minimise
                those already super low S3 costs.
              </p>
              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code6}
              </SyntaxHighlighter>

              <p>
                Finally we will create a <code>getImageLabels</code> function to handle the request
                to the <b>Rekognition</b> API. This function will take two parameters; the{' '}
                <b>bucket</b> bucket that the image was uploaded to and the <b>Key</b> that it was
                created with. We want to call the <code>detectLabels</code> function on the{' '}
                <code>rekognition</code> object that we declared at the top of the file. To do this
                we must construct a <code>params</code> object using the <b>bucket</b> and{' '}
                <b>filename values</b>. We can also pass in an optional <b>MaxLabels</b> value to
                limit the number of labels that Rekognition will identify in the image. Again we
                will <code>await</code> the response and throw an <code>Error</code> if the request
                is unsuccessful.
              </p>
              <SyntaxHighlighter
                language="javscript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code9}
              </SyntaxHighlighter>

              <p>
                A successful invocation of the <code>detectLabels</code> function will return an
                object containing a <b> Labels</b> Array. Each label will include a name for the
                object detected by Rekognition and the level of confidence that the image contains
                the object.
              </p>
              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code10}
              </SyntaxHighlighter>

              <p>
                Now it is time to combine all of these functions and do some image processing! We
                will create an <code>analyseImage</code> function that we will use to invoke our
                request to the Rekognition API. This function will take one parameter; the path to
                the image file that we wish to analyse.
              </p>
              <p>
                Firstly this function will make use of the <code>uploadFile</code> function we
                created earlier to upload the file to S3 and await on the response.
              </p>
              <p>
                Secondly, it will take the <code>Key</code> value returned by the{' '}
                <code> s3.upload</code> request and use this as a parameter when invoking the{' '}
                <code>getImageLabels</code> function. We will also call the <code>deleteFile</code>{' '}
                function but we will not await the reponse, however if for some reason the file is
                not deleted we will not know about it.
              </p>
              <p>
                Finally we will iterate over the <b>Labels</b> value of the response object,
                printing out the label and the confidence that Rekognition has assigned to it.
              </p>
              <p>
                We should note that this function includes a <code>try/catch</code> block which will
                catch any errors thrown by our functions, printing out the error message.
              </p>

              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code7}
              </SyntaxHighlighter>

              <SyntaxHighlighter
                language="plaintext"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code11}
              </SyntaxHighlighter>
            </Col>
          </Row>
        </Container>
      </div>
    </Blog>
  );
}

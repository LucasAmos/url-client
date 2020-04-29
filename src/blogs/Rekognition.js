// cSpell:words rekognition

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Container, Row, Col } from 'react-bootstrap';
import Blog from './Blog';
import './blogpost.css';
import rekognition1 from '../res/blogs/rekognition1/rekognition1.png';
import rekognition2 from '../res/blogs/rekognition1/rekognition2.png';
import rekognition3 from '../res/blogs/rekognition1/rekognition3.png';
import rekognition4 from '../res/blogs/rekognition1/rekognition4.png';
import rekognition5 from '../res/blogs/rekognition1/rekognition5.png';
import sossusvlei from '../res/blogs/rekognition1/sossusvlei.JPG';

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

const code11 = `99.94205474853516% confidence that is a Soil
99.81169891357422% confidence that is a Nature
99.67384338378906% confidence that is a Outdoors
99.06948852539062% confidence that is a Sand
96.6515121459961% confidence that is a Desert
93.18544006347656% confidence that is a Dune
58.29045867919922% confidence that is a Grassland
58.29045867919922% confidence that is a Field
58.17866134643555% confidence that is a Ground
55.499420166015625% confidence that is a Savanna`;

const code12 = `analyseImage("./sossusvlei.JPG");
`;
export default function Blog1() {
  return (
    <Blog>
      <div className="blogpost">
        <Container>
          <Row>
            <Col>
              <header>
                Using AWS Rekognition to identify, people, objects and scenes in images
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
                <a
                  href="https://aws.amazon.com/rekognition/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS Rekognition
                </a>{' '}
                can answer all of these problems for you.
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>How it works</h1>
              <p>
                The principle behind AWS Rekognition is simple; provide an image and in response
                receive the names of the identified objects and a percentage value for the level of
                confidence that the image contains the identified object. When accessing the
                rekognition API the maximum number of labels and minimum confidence values can be
                set.
              </p>
              <code>
                {`[{Name: lighthouse, Confidence: 98.4629},
              {Name: rock,Confidence: 79.2097}]`}
              </code>
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
              <p>
                Full details can found on the{' '}
                <a
                  href="https://aws.amazon.com/rekognition/pricing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS site.
                </a>
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1>Creating AWS credentials and an S3 bucket</h1>
              <p>
                Before we get started we will need to create some credentials by visiting the{' '}
                <a href="https://console.aws.amazon.com" target="_blank" rel="noopener noreferrer">
                  AWS console
                </a>
                . Once you have logged in select the <b>IAM</b> service and navigate to the{' '}
                <b>users</b> section. Here will we click <b>Add user</b> and create a user with
                programmatic access.
              </p>
              <img alt="aws add user" src={rekognition1} />
              <p>
                Click next and progress to the screen where will give the user the required
                permissions by clicking <b>Attach existing policies directly</b>. Here we can use
                the search box to add the <b> AmazonRekognitionFullAccess</b> and{' '}
                <b>AmazonS3FullAccess</b> policies. Click next twice and then click{' '}
                <b>create user</b>
              </p>
              <img alt="permissions summary" src={rekognition2} />

              <p>
                Make sure to copy your Access key ID and Secret access key, we will need them later.
              </p>

              <img alt="access keys" src={rekognition3} />

              <p>
                Now we will create the S3 bucket, navigate to the S3 section of the AWS console and
                click <b>create bucket.</b>
              </p>

              <img alt="create bucket" src={rekognition4} />
              <p>
                Enter <b>rekognition-tutorial</b> as the bucket name, you can select any region but
                make sure that you enter the same name in the <code>.env</code> file we will create
                in the next step. For this example we will use the <b>us-east-1</b> region. As we
                will only be accessing the bucket programmatically we can leave the{' '}
                <b>block all public access</b> option selected.
              </p>
              <img alt="bucket details" src={rekognition5} />
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
                Storing credentials in your code is always a bad idea as they can easily end up
                exposed on the internet and can be used to run up unauthorised bills on your AWS
                account. We can avoid this by creating a <code>.env</code> file in the{' '}
                <b>Rekognition</b> directory, with the ACCESSKEYID and SECRETACCESSKEY values being
                replaced with the credentials that you created using the AWS console. If you commit
                this code to a git repository make sure add the <code>.env</code> file to your{' '}
                <code>.gitignore</code> file.
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
                Identifiers and dotenv is used to access the environment variables that we created
                in the <code>.env</code> file. Install these packages by running{' '}
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
                <a href="https://github.com/uuidjs/uuid" target="_blank" rel="noopener noreferrer">
                  {' '}
                  package
                </a>{' '}
                that we installed earlier. We will use this along with the Bucket name and
                fileContent to populate the params object that is passed as a parameter to the{' '}
                <code>s3.upload()</code> API call.
              </p>
              <p>
                Once we have uploaded the file we will return the response object, if an error
                occurs we will throw an <code>Error</code> along with the error message.
              </p>
              <p>
                It's important to note that we are creating an asynchronous function that returns
                the result of <code>s3.upload(params).promise()</code>. This is important as when we
                use this function we will want to <code>await</code> the response from the S3 API
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
                Once the file has been successfully uploaded to S3 the response object returns
                several useful values, the most important of which is the <code>Key</code> value,
                this is the value that we created using the <code>uuid</code> package.
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
                <b>bucket</b> that the image was uploaded to and the <b>Key</b> that it was created
                with. We want to call the <code>detectLabels</code> function on the{' '}
                <code>rekognition</code> object that we declared at the top of the file. To do this
                we must construct a <code>params</code> object using the <b>bucket</b> and{' '}
                <b>filename values</b>. We can also pass in an optional <b>MaxLabels</b> value to
                limit the number of labels that Rekognition will identify in the image. Again we
                will <code>await</code> the response and throw an <code>Error</code> if the request
                is unsuccessful.
              </p>
              <SyntaxHighlighter
                language="javascript"
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
                function but we will not await the response, however if for some reason the file is
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
              <p>
                The image we will use is one the Namibian sand dunes at Sossusvlei that I took
                during an epic road trip across Africa.
              </p>
              <img style={{ border: 0 }} alt="sossusvlei" src={sossusvlei} />
              <p>
                At the bottom of <code>index.js</code> we will invoke the <code>analyseImage</code>{' '}
                function, passing in the path to our image file as a parameter{' '}
              </p>
              <SyntaxHighlighter
                language="javascript"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code12}
              </SyntaxHighlighter>
              <p>
                Open a terminal window in the <b>Rekognition</b> folder and run the following
                command
              </p>
              <SyntaxHighlighter
                language="bash"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                node index.js
              </SyntaxHighlighter>
              <p>
                Here we can see that <b>Rekognition</b> has identified with greater than 99%
                probability that image is outdoors, in nature and contains sand and soil. There are
                also other less confident and indeed incorrect labels.
              </p>
              <SyntaxHighlighter
                language="plaintext"
                customStyle={{ padding: 'none', fontSize: '100%' }}
                style={a11yDark}
              >
                {code11}
              </SyntaxHighlighter>
              <h1>Conclusion</h1>
              <p>
                It's interesting to see that while the labels with over 93% confidence are all
                accurate none of the labels identify that the image contains trees and a road. A
                machine learning model is only as good as the data it has been trained on and this
                was certainly unlike any tree I had seen before!
              </p>
              <p>
                Keep tuned for part two of this article on AWS Rekognition where we will extend this
                code to parse the text in an image!
              </p>
              <p>
                All of the code used in this example can be viewed on{' '}
                <a
                  href="https://github.com/LucasAmos/AWS/tree/master/Rekognition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Blog>
  );
}

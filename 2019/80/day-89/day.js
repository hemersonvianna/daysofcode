// TensorFlow.js is a library for machine learning in JavaScript
// Develop ML models in JavaScript, and use ML directly in the browser or in Node.js.
// https://www.tensorflow.org/js/
//
const tf = require('@tensorflow/tfjs')
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
const jpeg = require('jpeg-js');

require('@tensorflow/tfjs-node');

const NUMBER_OF_CHANNELS = 3

const readImage = path => {
  const buf = fs.readFileSync(path);
  const pixels = jpeg.decode(buf, true);
  return pixels;
}

const imageByteArray = (image, numChannels) => {
  const pixels = image.data
  const numPixels = image.width * image.height;
  const values = new Int32Array(numPixels * numChannels);

  for (let i = 0; i < numPixels; i++) {
    for (let channel = 0; channel < numChannels; ++channel) {
      values[i * numChannels + channel] = pixels[i * 4 + channel];
    }
  }

  return values;
}

const imageToInput = (image, numChannels) => {
  const values = imageByteArray(image, numChannels);
  const outShape = [image.height, image.width, numChannels];
  const input = tf.tensor3d(values, outShape, 'int32');

  return input;
}

const classify = async path => {
  const image = readImage(path);
  const input = imageToInput(image, NUMBER_OF_CHANNELS);

  const  mn_model = await mobilenet.load();
  const predictions = await mn_model.classify(input);

  console.log('Resultado', predictions);
}

classify(process.argv[2]);

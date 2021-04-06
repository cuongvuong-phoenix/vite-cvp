const manifest = require('./lib/client/ssr-manifest.json');
const { default: render } = require('./lib/server/main');

exports.handler = async function (event) {
  try {
    // `process.env.URL` from Netlify build enviroment.
    // `event.path` from AWS Lambda event object.
    const url = `${process.env.URL}${event.path}`;

    const { html } = await render(url, { manifest, preload: true });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  }
};

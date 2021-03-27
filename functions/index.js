exports.handler = async function () {
  try {
    const manifest = require('./lib/client/ssr-manifest.json');
    const { default: render } = require('./lib/server/main');

    const url = process.env.URL;

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

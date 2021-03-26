import path from 'path';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import manifest from './dist/client/ssr-manifest.json';
import render from './dist/server/main';

async function main() {
  const server = fastify();

  server.register(fastifyStatic, {
    root: path.join(__dirname, 'dist/client'),
    index: false,
    wildcard: false,
  });

  server.get('*', async (req, res) => {
    try {
      const url = `${req.protocol}://${req.headers.host}${req.url}`;

      const { html } = await render(url, { manifest, preload: true });

      res.status(200).type('text/html').send(html);
    } catch (err) {
      res.status(404).send({ message: err });
    }
  });

  return server;
}

main().then((server) => {
  const port = process.env.PORT || 5000;

  server.listen(port, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address}`);
  });
});

import * as path from 'path';
import fastify from 'fastify';
import fastifyStatic from 'fastify-static';

async function main() {
  const manifest = await import('../dist/client/ssr-manifest.json');
  // @ts-ignore
  const { default: render } = await import('../dist/server/main');

  const server = fastify();

  server.register(fastifyStatic, {
    root: path.join(__dirname, '../dist/client'),
    index: false,
    wildcard: false,
  });

  server.get('*', async (req, res) => {
    try {
      const url = `${req.protocol}://${req.headers.host}${req.url}`;

      const { html } = await render(url, { manifest, preload: true });

      res.status(200).type('text/html').send(html);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  });

  return server;
}

main()
  .then((server) => {
    const port = process.env.PORT || 5000;
    const ip = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';

    server.listen(port, ip, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(`🔥 Server listening at ${address}`);
    });
  })
  .catch((err) => console.error(err));

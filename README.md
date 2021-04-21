# meta

Project that includes the vue-meta@next in a vite project and it's getting

```bash
yarn dev
yarn run v1.22.10
$ vite
Pre-bundling dependencies:
  vue
  vue-meta
  vue-router
(this will be run only when your dependencies or config have changed)
 > node_modules/vue-meta/dist/vue-meta.esm-bundler.js:851:44: error: Could not resolve "@vue/server-renderer" (mark it as external to exclude it from the bundle)
    851 │     const { renderToString } = await import('@vue/server-renderer');
        ╵                                             ~~~~~~~~~~~~~~~~~~~~~~

error when starting dev server:
Error: Build failed with 1 error:
node_modules/vue-meta/dist/vue-meta.esm-bundler.js:851:44: error: Could not resolve "@vue/server-renderer" (mark it as external to exclude it from the bundle)
    at failureErrorWithLog (/home/meta/node_modules/esbuild/lib/main.js:1224:15)
    at buildResponseToResult (/home/meta/node_modules/esbuild/lib/main.js:936:32)
    at /home/meta/node_modules/esbuild/lib/main.js:1035:20
    at /home/meta/node_modules/esbuild/lib/main.js:568:9
    at handleIncomingPacket (/home/meta/node_modules/esbuild/lib/main.js:657:9)
    at Socket.readFromStdout (/home/meta/node_modules/esbuild/lib/main.js:535:7)
    at Socket.emit (events.js:315:20)
    at addChunk (internal/streams/readable.js:309:12)
    at readableAddChunk (internal/streams/readable.js:284:9)
    at Socket.Readable.push (internal/streams/readable.js:223:10)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

LIB_CLIENT_SOURCE="./dist/client/ssr-manifest.json"
LIB_CLIENT_DIR="./functions/lib/client/"
LIB_SERVER_SOURCE="./dist/server/main.js"
LIB_SERVER_DIR="./functions/lib/server/"

mkdir -p "${LIB_CLIENT_DIR}" && cp -f "${LIB_CLIENT_SOURCE}" "${LIB_CLIENT_DIR}" 
mkdir -p "${LIB_SERVER_DIR}" && cp -f "${LIB_SERVER_SOURCE}" "${LIB_SERVER_DIR}"
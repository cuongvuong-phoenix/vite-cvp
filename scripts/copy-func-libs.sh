# Must run from `package.json`.
source "./scripts/utils.sh"

mkdir -p "${LIB_CLIENT_DIR}" && cp -f "${LIB_CLIENT_SOURCE}" "${LIB_CLIENT_DIR}" 
mkdir -p "${LIB_SERVER_DIR}" && cp -f "${LIB_SERVER_SOURCE}" "${LIB_SERVER_DIR}"
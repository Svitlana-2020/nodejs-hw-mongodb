import { initMongoDB } from "./db/initMongoDB.js";
import { setupServer } from "./server.js";

const boostrap = async () => {
    await initMongoDB ();
    await createDirIfNotExists(TEMP_UPLOAD_DIR);
    await createDirIfNotExists(UPLOAD_DIR);
    setupServer();
}

boostrap();
import { fileURLToPath } from 'url'
import path from 'path'
import * as dotenv from 'dotenv'
//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '../../config/.env') })
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: "dwbl7l17r",
    api_key: "362848569251581",
    api_secret: "3uiLs5XZ_1JE8a3qXj2yN7PgOqo",
    secure: true
});


export default cloudinary.v2;
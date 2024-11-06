import { fileURLToPath } from 'url'
import path from 'path'
import * as dotenv from 'dotenv'
//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '../../config/.env') })
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: "",
    api_key: "",
    api_secret: "",
    secure: true
});


export default cloudinary.v2;

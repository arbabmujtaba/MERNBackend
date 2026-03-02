const imageKit = require("@imagekit/nodejs")
const ImageKitClient = new imageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})
async function UploadFile(file){
    const result = await ImageKitClient.files.upload({
        file,
        fileName:"music" + Date.now(),
        folder:"backend/music"
    })
    return result;

}
module.exports = {UploadFile}

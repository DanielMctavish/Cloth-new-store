const admin = require("firebase-admin");

const serviceAccount = require("../firebase-key.json");
const BUCKET = 'cloch-new-store.appspot.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket()

const uploadImage = (req,res, next)=>{
    if(!req.file) return next()
    const image = req.file;
    const file_name = Date.now() + image.originalname.split(".").pop()
    
    const file = bucket.file(file_name)
    const stream = file.createWriteStream({
        metadata:{
            contentType: image.mimetype
        }
    })

    stream.on("error",()=>console.log(error))
    stream.on("finish",async ()=>{
        await file.makePublic();
        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${file_name}`
        next()
    })

    stream.end(image.buffer)
}

module.exports = uploadImage
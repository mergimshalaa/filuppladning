import mongoose from 'mongoose';
import { app } from './app';

//Connect to database
//Start server

async function main() {
    await mongoose.connect('mongodb://localhost:27017/upload-file');
    console.log('Connected to database');
    
    app.listen(3000, () => console.log('Server started at port 3000'));
}

main();
import express from "express";
import { getFileById, uploadFile } from "./file-controller";

export const app = express();

app.get('/api/file/:id', getFileById);
app.post('/api/file', uploadFile);
app.delete('/api/file/:id', getFileById);
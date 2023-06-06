import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { fileBucket } from './file-model';

export async function getFileById(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    const file = await fileBucket.find({ _id });
    if (!file) {
        return res.status(404).json({ error: 'File not found' });
    }

    res.set('Content-Type', file.contentType);
    const downloadStream = fileBucket.openDownloadStream(_id);
  downloadStream.pipe(res);
}

export async function uploadFile(req: Request, res: Response) {
// todo: implement
}

export async function deleteFileById(req: Request, res: Response) {
// todo: implement
}
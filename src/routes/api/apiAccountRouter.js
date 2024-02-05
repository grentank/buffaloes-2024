import express from 'express';
import multer from 'multer';
import path from 'path';
import { User } from '../../../db/models';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const cwd = process.cwd();
    cb(null, path.resolve(cwd, 'public'));
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `/images/${file.fieldname}-${uniqueSuffix}.png`);
  },
});

const upload = multer({ storage });

const apiAccountRouter = express.Router();

apiAccountRouter.patch('/profilepic', upload.single('img'), async (req, res) => {
  await User.update({ img: req.file.filename }, { where: { id: res.locals.user.id } });
  res.send({ image: req.file.filename });
});

export default apiAccountRouter;

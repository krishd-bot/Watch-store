import {getWatches, createWatch} from '../Controller/watch.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', getWatches);
router.post("/", createWatch);

export default router
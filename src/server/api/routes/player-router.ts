﻿import * as express from 'express';
import * as controller from '../controllers/player-controller';

const router: express.Router = express.Router();

router.route('/get')
    .get(controller.getAllPlayers);

router.route('/get/:playerLogin')
    .get(controller.getOrCreatePlayer)
    .delete(controller.deletePlayer);

router.route('/getFull/:playerLogin')
    .get(controller.getFull);

router.route('/stats')
    .get(controller.getAllStats);

router.route('/stats/:playerLogin')
    .get(controller.getStats);

router.route('/equip/:playerLogin')
    .post(controller.equip);

export = router;

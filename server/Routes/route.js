import express from 'express'

import { createWorkshop,deleteWorkshop,getWorkshop, getWorkshopByid, updateWorkshop } from '../Controller/workshopController.js'

const router = express.Router();


router.post('/create',createWorkshop)
router.get('/workshops',getWorkshop)
router.get('/workshops/:id',getWorkshopByid)
router.delete('/workshops/:id',deleteWorkshop)
router.put('/update/:id',updateWorkshop)

export default router;

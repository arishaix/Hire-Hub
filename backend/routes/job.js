const express = require('express');
const router = express.Router();
const jobController = require('../controllers/job');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const validate = require('../middleware/validation');

router.post('/createJob',
    auth.verifyToken,
    role.verifyRole,
    validate.validateJob,
    jobController.createJob
)

router.get('/',
    jobController.getJobs
)

router.get('/:jobId',
    jobController.getJob
)

module.exports = router;
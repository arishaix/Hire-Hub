const express = require('express');
const router = express.Router();
const applyController = require('../controllers/application');
const auth = require('../middleware/auth');
const role = require('../middleware/candidateRole');
const recRole = require('../middleware/role');
const validate = require('../middleware/validation');

router.post('/apply/:jobId',
    auth.verifyToken,
    role.verifyCandidate,
    validate.validateApplication,
    applyController.createApplication
)

router.get('/job/:jobId',
    auth.verifyToken,
    recRole.verifyRole,
    applyController.getApplications
)

router.get('/myApplications',
    auth.verifyToken,
    applyController.getCandidateApplications
)

module.exports = router;
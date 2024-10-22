const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/books');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');


router.get('/', bookCtrl.getAllBooks);
router.post('/',[auth, multer], bookCtrl.createBook);
router.post('/:id/rating', auth, bookCtrl.rateBook);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id',[auth, multer], bookCtrl.modifyBook);
router.delete('/:id',auth, bookCtrl.deleteBook);

module.exports = router;
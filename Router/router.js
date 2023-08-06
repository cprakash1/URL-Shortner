const express= require('express');
const router= express.Router({mergeParams: true});
const {getForm,postForm,getResult, redirectRoute}=require('../Controller/control.js');

router.route('/generate')
    .get(getForm)
    .post(postForm);

router.route('/result/:id')
    .get(getResult);
router.route('/:id')
    .get(redirectRoute);
module.exports = router;
const express  = require('express')
const router = express.Router()
const fetchQuestions = require('../utilities/get/question')
const postQuestion = require('../utilities/post/questions')
const postAnswer = require('../utilities/post/answer')
const logInUser = require('../utilities/get/login')
const signUpUser = require('../utilities/get/signup')
const logout = require('../utilities/post/logout')
const  jwtVerify = require('../middleware/jwt')
const deleteQuestion = require('../utilities/delete/question')
const answerDelete = require('../utilities/delete/answer')


router.route('/all').get(fetchQuestions)
router.route('/login').post(logInUser)
router.route('/signup').post(signUpUser)
router.route('/logout').post(logout)
router.get('/fetching', fetchQuestions)
router.post('/postquestion',jwtVerify , postQuestion)
router.post('/postanswer/:id', jwtVerify , postAnswer)
router.delete('/modifyanswer/:qid/:aid' , deleteQuestion)
router.delete('/modifyanswer/:qid/:aid', answerDelete)


module.exports = router
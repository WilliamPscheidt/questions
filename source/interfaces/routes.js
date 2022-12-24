class Router {
    initializeAPI() {
        const HttpServerAdapter = require('../adapters/httpServer-adapter')
        const httpServer = new HttpServerAdapter()

        const RegisterMiddleware = require("../middlerwares/RegisterMiddleware.usecase")
        const registerMiddleware = new RegisterMiddleware()

        const LoginRouteUseCase = require("../middlerwares/LoginMiddleware.usecase")
        const loginRouteUseCase = new LoginRouteUseCase()

        const AdminLoginRouteUseCase = require("../middlerwares/AdminLoginMiddleware.usecase")
        const adminLoginRouteUseCase = new AdminLoginRouteUseCase()

        const ChangePasswordRouteUseCase = require("../middlerwares/ChangePasswordMiddleware.usecase")
        const changePasswordRouteUseCase = new ChangePasswordRouteUseCase()

        const DesativateAccount = require('./routes/admins-routes/desativateAccount.route')
        const InsertQuestion = require('./routes/admins-routes/insertQuestions.route')
        const ListAccounts = require('./routes/admins-routes/listAccounts.route')
        const ReativateAccount = require('./routes/admins-routes/reativateAccount.route')
        const ListQuestions = require('./routes/admins-routes/listQuestions.route')
        const RemoveQuestion = require('./routes/admins-routes/removeQuestions.route')
        const UpdateQuestion = require('./routes/admins-routes/updateQuestion.route')
        const ViewQuestion = require('./routes/admins-routes/viewQuestion.route')
        const ChangePassword = require('./routes/authentication-routes/changePassword.route')
        const Login = require('./routes/authentication-routes/login.route')
        const Register = require('./routes/authentication-routes/register.route')
        const ValidateAdmin = require('./routes/authentication-routes/validateAdmin.route')
        const ValidateAdminToken = require('./routes/authentication-routes/validateAdminToken.route')
        const ValidateToken = require('./routes/authentication-routes/validateToken.route')
        const CardsDashboard = require('./routes/dashboard-routes/cardsDashboard.route')
        const DashboardTop = require('./routes/dashboard-routes/dashboardTop.route')
        const DashboardBottom = require('./routes/dashboard-routes/dashboardBottom.route')
        const DashboardHome = require('./routes/dashboard-routes/homeDashboard.route')
        const Contact = require('./routes/mailer-routes/contact.route')
        const ListQuestionsTest = require('./routes/questions-routes/listQuestions.route')
        const ValidateAnswer = require('./routes/questions-routes/validateAnswers.route')

        const desativateAccount = new DesativateAccount()
        const insertQuestion = new InsertQuestion()
        const listAccounts = new ListAccounts()
        const reativateAccount = new ReativateAccount()
        const listQuestions = new ListQuestions()
        const removeQuestion = new RemoveQuestion()
        const updateQuestion = new UpdateQuestion()
        const viewQuestion = new ViewQuestion()
        const changePassword = new ChangePassword()
        const login = new Login()
        const register = new Register()
        const validateAdmin = new ValidateAdmin()
        const validateAdminToken = new ValidateAdminToken()
        const validateToken = new ValidateToken()
        const cardsDashboard = new CardsDashboard()
        const dashboardTop = new DashboardTop()
        const dashboardBottom = new DashboardBottom()
        const dashboardHome = new DashboardHome()
        const contact = new Contact()
        const listQuestionsTest = new ListQuestionsTest()
        const validateAnswer = new ValidateAnswer()

        httpServer.post('/admin/desativate_account', desativateAccount.route)
        httpServer.post('/admin/insert_question', insertQuestion.route)
        httpServer.get('/admin/list_accounts', listAccounts.route)
        httpServer.post('/admin/reativate_account', reativateAccount.route)
        httpServer.post('/admin/list_questions', listQuestions.route)
        httpServer.post('/admin/remove_question', removeQuestion.route)
        httpServer.post('/admin/update_question', updateQuestion.route)
        httpServer.post('/admin/view_question', viewQuestion.route)


        httpServer.use('/authentication/change_password', changePasswordRouteUseCase.validate)
        httpServer.post('/authentication/change_password', changePassword.route)
        httpServer.use('/authentication/login', loginRouteUseCase.validate)
        httpServer.post('/authentication/login', login.route)
        httpServer.use('/authentication/register', registerMiddleware.validate)
        httpServer.post('/authentication/register', register.route)
        httpServer.use('/authentication/validate_admin', adminLoginRouteUseCase.validate)
        httpServer.post('/authentication/validate_admin', validateAdmin.route)
        httpServer.post('/authentication/validate_admin_token', validateAdminToken.route)
        httpServer.post('/authentication/validate_token', validateToken.route)

        httpServer.post('/dashboard/cards_dashboard', cardsDashboard.route)
        httpServer.post('/dashboard/dashboard_top', dashboardTop.route)
        httpServer.post('/dashboard/dashboard_bottom', dashboardBottom.route)
        httpServer.post('/dashboard/dashboard_home', dashboardHome.route)

        httpServer.post('/mailer/contact', contact.route)

        httpServer.get('/questions/list_questions_test', listQuestionsTest.route)
        httpServer.post('/questions/validate_answer', validateAnswer.route)
    
        httpServer.start()
    }

}

module.exports = Router
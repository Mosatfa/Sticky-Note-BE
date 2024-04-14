import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import listRouter from './modules/list/list.router.js'
import noteRouter from './modules/note/note.router.js'

import { gloablErrorHandling } from './utils/errorHandling.js'


const initApp = (app, express) => {
    
    //convert Buffer Data
    app.use(express.json({}))

    //Setup API Routing 
    app.get('/', (req, res, next) => {
        return res.json({message:'welcome to Stricy Note'})
    })
    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/list', listRouter)
    app.use('/note', noteRouter)


    app.all('*', (req, res, next) => {
        res.status(400).send("In-valid Routing Plz check url  or  method")
    })

    // Gloable Error Handling
    app.use(gloablErrorHandling)
    // Connected DB
    connectDB()

}



export default initApp
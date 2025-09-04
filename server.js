const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const movieRoutes=require('./routes/movieRoutes');
const userRoutes=require('./routes/userRoutes');
const logger=require('./middleware/loggerMiddleware');
const errorHandler=require('./middleware/errorMiddleware');
dotenv.config();
connectDB()
const app=express();
app.use(express.json());
app.use(logger);
//Routes
app.use('/api/users',userRoutes);
app.use('/api/movies',movieRoutes);
//error handler
app.use(errorHandler);
const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})
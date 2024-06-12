import express from 'express';
import mongoose from 'mongoose';
import employeeRoutes from "./routers/employeeData.routes.js"
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());



console.log('Mongoose', process.env.MONGODB_URL);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Remove the deprecated option
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });



  
// Routes
app.use('/api/employees', employeeRoutes);
// app.use('/api/create/employee', employeeData);
// app.use('/api/employee/:roll/update', employeeData);
// app.use('/api/employee/:roll/delete', employeeData);




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
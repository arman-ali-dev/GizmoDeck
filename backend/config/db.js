const mongoose = require('mongoose')
require('dotenv').config()


const database = async () => {
    const maxRetryAttempts = 3;
    const retryInterval = 5000;
    let retryCount = 0;

    const connectWithRetry = () => {
        return mongoose.connect(`${process.env.DB_LOCAL_URL}`, {useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((err) => {
                console.error('Error connecting to database:', err.message);
                if (retryCount < maxRetryAttempts) {
                    console.log(`Retrying connection attempt ${retryCount + 1}/${maxRetryAttempts} in ${retryInterval} milliseconds`);
                    retryCount++;
                    setTimeout(connectWithRetry, retryInterval);
                } else {
                    console.error('Max retry attempts reached. Unable to connect to database.');
                }
            });
    };
    connectWithRetry();
};

module.exports = database 
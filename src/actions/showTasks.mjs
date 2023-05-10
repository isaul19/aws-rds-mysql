import connection from "../db/config.mjs";

const showTasks = (event, context) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tasks`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        tasks: results,
                    }),
                });
            }
        });
    });
};

export { showTasks };

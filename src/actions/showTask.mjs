import connection from "../db/config.mjs";

const showTask = (event, context) => {
    return new Promise((resolve, reject) => {
        const { id } = event.pathParameters;
        const query = `SELECT * FROM tasks WHERE id = ${id}`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        task: results[0],
                    }),
                });
            }
        });
    });
};

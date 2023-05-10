import connection from "../db/config.mjs";

const deleteTask = (event, context) => {
    return new Promise((resolve, reject) => {
        const { id } = event.pathParameters;
        const query = `DELETE FROM tasks WHERE id = ${id}`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Tarea eliminada exitosamente",
                    }),
                });
            }
        });
    });
};

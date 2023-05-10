import connection from "../db/config.mjs";

const editTask = (event, context) => {
    return new Promise((resolve, reject) => {
        const { id } = event.pathParameters;
        const { title, description } = JSON.parse(event.body);
        const query = `UPDATE tasks SET title = '${title}', description = '${description}' WHERE id = ${id}`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Tarea actualizada exitosamente",
                        task: {
                            id,
                            title,
                            description,
                        },
                    }),
                });
            }
        });
    });
};

export { editTask };

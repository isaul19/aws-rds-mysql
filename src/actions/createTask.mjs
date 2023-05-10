// conectarse a aws rds mysql
import connection from "../db/config.mjs";

const createTask = (event, context) => {
    return new Promise((resolve, reject) => {
        const { title, description } = JSON.parse(event.body);
        const query = `INSERT INTO tasks (title, description) VALUES ('${title}', '${description}')`;
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "Tarea creada exitosamente",
                        task: {
                            id: results.insertId,
                            title,
                            description,
                        },
                    }),
                });
            }
        });
    });
};

export { createTask };

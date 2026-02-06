import { DatabaseConnection } from "./DatabaseConnection";

// Singleton instance for backward compatibility
const dbConnection = new DatabaseConnection();

export const connect = async () => {
    return await dbConnection.connect();
};

export { dbConnection };

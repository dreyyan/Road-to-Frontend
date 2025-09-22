const fetchData = async (dataPromise: Promise<string>): Promise<string> => {
    try {
        const response = await dataPromise;
        return response;
    } catch (error) {
        return "ERROR: Failed to fetch data";
    }
};

const mockSuccess = Promise.resolve("Hello, world!");
const mockFailure = Promise.reject("Something went wrong");

fetchData(mockSuccess).then(console.log);
fetchData(mockFailure).then(console.log);
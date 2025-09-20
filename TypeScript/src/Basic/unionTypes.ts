let statusType: "pending" | "completed" | "failed";

// FUNCTION: Logs message based on status
const replyStatus = (status: string | string | string) => {
    switch (status) {
        case "pending":
            console.log("STATUS: Pending...");
            break;
        case "completed":
            console.log("STATUS: Completed");
            break;
        case "failed":
            console.log("STATUS: Failed");
            break;
    }
}

// Test function
replyStatus("pending");
replyStatus("completed");
replyStatus("failed");
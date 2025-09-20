"use strict";
let statusType;
// FUNCTION: Logs message based on status
const replyStatus = (status) => {
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
};
// Test function
replyStatus("pending");
replyStatus("completed");
replyStatus("failed");

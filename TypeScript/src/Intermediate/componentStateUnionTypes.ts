type LoadingState = "idle" | "loading" | "success" | "error";

// FUNCTION: Log message based on loadingState
const displayMessage = (loadingState: LoadingState) => {
    switch (loadingState) {
        case "idle":
            console.log("STATUS: Idle");
            break;
        case "loading":
            console.log("STATUS: Loading");
            break;
        case "success":
            console.log("STATUS: Success");
            break;
        case "error":
            console.log("STATUS: ERROR");
            break;
    }
};

// Test function
displayMessage("idle");
displayMessage("loading");
displayMessage("success");
displayMessage("error");
"use strict";
// FUNCTION: Render a 'JSX'-like component based on API state
const renderComponent = (state) => {
    switch (state.kind) {
        case "loading":
            return `<p>Loading...</p>`;
            break;
        case "success":
            return `<p>Success!\nMessage: ${state.data}</p>`;
            break;
        case "error":
            return `<p>ERROR: ${state.message}</p>`;
            break;
        default:
            return "";
    }
};

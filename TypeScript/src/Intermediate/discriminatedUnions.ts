// 'kind' is the discriminator
type APIState =
{ kind: "loading" } |
{ kind: "success", data: string } | 
{ kind: "error", message: string };

// FUNCTION: Render a 'JSX'-like component based on API state
const renderComponent = (state: APIState): string => {
    switch (state.kind) {
        case "loading":
            return `<p>Loading...</p>`;
            break;
        case "success":
            return `<p>Success!\nMessage: ${state.data}</p>`;
            break;
        case "error":
            return`<p>ERROR: ${state.message}</p>`;
            break;
        default:
            return "";
    }
};
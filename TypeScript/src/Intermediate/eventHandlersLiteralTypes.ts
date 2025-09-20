type ButtonType = "primary" | "secondary" | "danger";

const getButtonStyles = (buttonType: ButtonType): string => {
    switch (buttonType) {
        case "primary":
          return "background-color: blue; color: white;";
        case "secondary":
          return "background-color: gray; color: white;";
        case "danger":
          return "background-color: red; color: white;";
    }
};

// Test function
console.log(getButtonStyles("primary"));
console.log(getButtonStyles("secondary"));
console.log(getButtonStyles("danger"));
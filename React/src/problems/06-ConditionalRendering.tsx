type status = "loading" | "success" | "error";

interface StatusProps {
    status: status;
};

const StatusMessage: React.FC<StatusProps> = ({ status }) => {
    const displayStatus = (status: status): JSX.Element => {
        switch (status) {
            case "loading":
                return <p>Loading...</p>;
                break;
            case "success":
                return <p>Success!</p>;
                break;
            case "error":
                return <p>ERROR</p>;
                break;
        }
    };

    return (
        <div>
            {displayStatus(status)}
        </div>
    );
};

export default StatusMessage;
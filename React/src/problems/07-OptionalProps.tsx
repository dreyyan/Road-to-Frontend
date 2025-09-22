import type { JSX } from "react";
interface ProfileProps {
    name: string;
    avatarUrl?: string;
};

const ProfileCard: React.FC<ProfileProps> = ({ name, avatarUrl }) => {
    const renderAvatar = (): JSX.Element => {
        if (avatarUrl == null)
            return <p>{name}'s avatar not found.</p>
        else
            return <p>{avatarUrl}</p>
    };

    return (
        <div>
            {renderAvatar()}
        </div>
    );
};

export default ProfileCard;
type listType = string[];

interface ListProps {
    items: listType;
};

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <div className="w-20 h-40">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
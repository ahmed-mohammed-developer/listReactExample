export default function ListItem() {
    const ListItem = ({ value }) => <li>{value}</li>;
    const items = ["React", "Vue", "Angular"];
    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index} value={item} />
                ))}
            </ul>
        </>
    );
}

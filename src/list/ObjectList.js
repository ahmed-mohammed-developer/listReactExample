export default function ObjectList() {
    const users = [
        {id: 1, name: "Ahmed"},
        {id: 2, name: "Mohmead"},
        {id: 3, name: "Osama"},
    ]

    return(
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}
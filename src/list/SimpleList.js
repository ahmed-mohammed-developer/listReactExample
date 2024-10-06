export default function SimpleList(){

    const items = ["Apple", "Banana", "Cherry"]

    return(
        <>
        <uL>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </uL>
        </>
    )
}
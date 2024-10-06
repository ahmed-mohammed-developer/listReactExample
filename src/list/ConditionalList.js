export default function ConditionalList(){

    const numbers = [1, 2, 3, 4, 5]
    return(
        <>
        <ul>
            {numbers.map((number, index) => (
                number % 2 === 0 ? <li key={index}>{number}</li> : null
            ))}
        </ul>
        </>
    )
}
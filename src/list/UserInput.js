// استيراد دالة useState من مكتبة React
import { useState } from "react"

// تعريف وتصدير الدالة الرئيسية للمكون
export default function UserInput(){
    // تعريف حالتين: items لتخزين العناصر و input لتخزين قيمة الإدخال الحالية
    const [items, setItems] = useState([])
    const [input, setInput] = useState("")

    // دالة لإضافة عنصر جديد إلى القائمة
    const addItem = () => {
        // تحديث حالة items بإضافة العنصر الجديد من input
        setItems([...items, input])
        // إعادة تعيين قيمة input إلى نص فارغ
        setInput("")
    }

    // الجزء الذي يتم عرضه في واجهة المستخدم
    return(
        <>
        {/* حقل إدخال لتحديث قيمة input عند تغييرها */}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {/* زر لإضافة العنصر الجديد عند النقر عليه */}
        <button onClick={addItem}>Add</button>
        {/* قائمة لعرض العناصر المخزنة في items */}
        <ul>
            {items.map((item, index) => (
                // عرض كل عنصر في قائمة غير مرتبة
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}

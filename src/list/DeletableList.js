// استيراد دالة useState من مكتبة React
import { useState } from "react"

// تعريف وتصدير الدالة الرئيسية للمكون
export default function DeletableList(){

    // تعريف حالة items وتعيين قيمتها الابتدائية إلى مصفوفة تحتوي على ثلاثة عناصر
    const [items, setItems] = useState([
        "Item 1",
        "Item 2",
        "Item 3"
    ])

    // دالة لحذف عنصر من المصفوفة بناءً على الفهرس (index)
    const deletItem = (index) => {
        // تحديث حالة items بتصفية العناصر التي لا تتطابق مع الفهرس المحدد
        setItems(items.filter((_, i) => i !== index))
    }

    // الجزء الذي يتم عرضه في واجهة المستخدم
    return(
        <>
        {/* قائمة غير مرتبة لعرض العناصر */}
        <ul>
            {items.map((item, index) => (
                // عرض كل عنصر في قائمة غير مرتبة مع زر لحذفه
                <li key={index}>
                    {item} <button onClick={() => deletItem(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}

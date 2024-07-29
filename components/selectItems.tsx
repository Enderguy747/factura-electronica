
import {
    SelectItem,
} from "@/components/ui/select"

type TProps = {
    cabys: { id: number; description: string; }[]
}




export function SelectItems({ cabys }: TProps) {
    return (
        <>
            {
                cabys.map(items => {
                    return (
                        <SelectItem key={items.id} value={String(items.id)}>{items.description}</SelectItem>
                    )
                })


            }

        </>
    )
}




import { ClassNameProps } from "@/utils/types"
import { useRouter } from "next/router"
import { useState } from "react"

const SearchBar = ({className}:ClassNameProps) => {
  const router = useRouter()
  const [dateSelected, setDateSelected] = useState('')

  const onDateHandler = (ev: any) => {
    setDateSelected(ev.target.value)
  }

  const onGoHandler = () => {
    router.push(`/image/${dateSelected}`)
  }

  return (
    <div className="flex items-center justify-center w-full gap-2 p-2 sm:justify-end">
      <label className="text-white" htmlFor='imageDate'>Buscar imagen por fecha:</label>
      <input onChange={onDateHandler} className={className} type='date' name='imageDate' id='imageDate' />
      <button onClick={onGoHandler} className="flex items-center justify-center w-10 h-10 p-2 font-bold text-black bg-white rounded-full">Ir</button>
    </div>
  )
}

export default SearchBar
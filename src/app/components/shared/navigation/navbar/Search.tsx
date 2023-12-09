"use client"
import { useState } from "react"
import { MdOutlineSearch } from "react-icons/md"

const Search = () => {
    const [text, setText] = useState("")
  return (
   <form className="flex flex-row border-[1px] border-neutral-700 rounded-full overflow-hidden w-2/5" >
<input type="text" placeholder="Search" onChange={(e)=>setText(e.target.value)} value={text}  className="w-full py-2 px-4 bg-neutral-900" />
<button type="submit" className="px-3 bg-neutral-800 border-none"><MdOutlineSearch className="h-6 w-6" /></button>

   </form>
  )
}

export default Search
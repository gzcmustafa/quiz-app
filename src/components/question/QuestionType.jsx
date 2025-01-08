import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function QuestionType({data,setSelectType}) {
  return (
    <Select onValueChange={(value) => setSelectType(value)}>
      <SelectTrigger  className="w-[200px] bg-orange-600 text-white border-2 border-white hover:bg-orange-600 focus:ring-2 focus:ring-white">
        <SelectValue placeholder="Select Quesionts Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          
            <SelectItem  value={"multiple"}>
              Multiple-Choice
            </SelectItem> 
        
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

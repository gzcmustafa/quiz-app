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
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Quesionts Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((type) => (
            <SelectItem  value={type.toString()}>
              {type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

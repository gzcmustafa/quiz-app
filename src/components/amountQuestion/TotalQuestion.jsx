import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TotalQuestion({data, setTotalQuestion}) {
  return (
    <Select onValueChange={(value) => setTotalQuestion(value)}>
      <SelectTrigger   className="w-[200px] bg-orange-600 text-white border-2 border-white hover:bg-orange-600 focus:ring-2 focus:ring-white">
        <SelectValue placeholder="Number of Question" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((number) => (
            <SelectItem key={number} value={number.toString()}>
              {number}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

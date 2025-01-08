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
      <SelectTrigger className="w-[280px]">
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

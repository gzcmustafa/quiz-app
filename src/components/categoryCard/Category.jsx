import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Category({data, setCategory}) {
  return (
    <Select onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data.map((category) => (
            <SelectItem key={category.id} value={category.id.toString()}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

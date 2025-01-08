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
    <Select    onValueChange={(value) => setCategory(value)}>
      <SelectTrigger   className="w-[280px] bg-orange-600 text-white border-2 border-white hover:bg-orange-600 focus:ring-2 focus:ring-white">
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

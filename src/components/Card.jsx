import React from 'react'

export default function Card({
    name,
    description,
    image_link
}) {
  return (
    <div className="border-2 w-64 h-80 p-4">
        <p>{name}</p>
        <p>{description}</p>
        <img src={image_link} alt="" className="w-64 h-48 mt-5 object-cover" />
    </div>
  )
}

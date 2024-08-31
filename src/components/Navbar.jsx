import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    let location = useLocation();

    console.log(location.pathname)

    const routing = [
        {
            name: "home",
            href: "/home"
        },
        {
            name: "about",
            href: "/about"
        }
    ]
  return (
    <div className="flex gap-4 items-center py-8 px-10">
        <h1 className="text-2xl">Tokoserbaada</h1>

        {
            routing.map((data) => {
                return (
                <Link 
                    to={data.href} 
                    className={`text-lg font-semibold ${(data.href == location.pathname) ? "text-red-500" : "text-gray-400"}`}
                >
                    {data.name}
                </Link>)
            })
        }
        
    </div>
  )
}

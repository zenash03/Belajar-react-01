import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

export default function Home() {

  const dummyData = [
    {
        id: 1,
        name: "Belajar React",
        description: "Belajar react itu seru",
        image_link: "https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Belajar Java",
        description: "Belajar java itu sulit",
        image_link: "https://plus.unsplash.com/premium_photo-1694425773046-31e088f7a7dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
        id: 3,
        name: "Belajar Mendix",
        description: "Belajar mendix itu gatau",
        image_link: "https://images.unsplash.com/photo-1725012858161-59d7edb5d9dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    }
  ]  
  return (
    <div>
        <Navbar active="home" />
        <h1 className="text-3xl text-custom1 font-bold mt-5">Halaman Home</h1>
        <p>awdkakdwakwdkadkwkddkadk</p>

        <div className="ml-5 mt-5 flex gap-4">
            {
                dummyData.map((data) => {
                    return <Card name={data.name} description={data.description} key={data.id} image_link={data.image_link} />
                })
            }

        </div>
    </div>
  )
}

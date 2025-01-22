import React from 'react'
import Activities from '../components/Activities'
import MinimalistCard from '../components/Sightseeing'

const ActivitiesAndAmmenities = () => {
  const sightSeeing = [
    {
      name: "Durgadi Fort",
      desc: "A historic fort featuring a temple dedicated to Goddess Durga, offering insights into the region's rich heritage.",
      image: "./sightseeing/durgadifort.png",
    },
    {
      name: "Titwala Ganpati Mandir",
      desc: "A revered temple dedicated to Lord Ganesha, attracting numerous devotees and tourists year-round. The temple is believed to be the site of the hermitage of sage Kanva and holds significant religious importance.",
      image: "./sightseeing/titwala ganesh mandirG.png",
    },
    {
      name: "Malshej Ghat",
      desc: "A picturesque mountain pass known for its scenic beauty, waterfalls, and trekking opportunities. It's a popular destination for nature enthusiasts and adventure seekers.",
      image: "./sightseeing/malshej ghatG.png",
    },
    {
      name: "Kala Talao",
      desc: "A scenic lake located in the center of Kalyan city, popular for recreational activities and boating. It's a great spot for relaxation and family outings.",
      image: "./sightseeing/kala talao.png",
    }
  ];
  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <div 
        className="relative h-[40vh] bg-cover bg-bottom"
        style={{
          backgroundImage: 'url("./Swimming pool.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Activities</h1>
        </div>
      </div>

      <Activities />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center scale-up-center">Sightseeing</h2>
        <p className="text-gray-600 mb-8 text-center scale-up-center">
          Enhance your visit with these must-see attractions.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
           {sightSeeing.map((item, index) => (
             <MinimalistCard
             key={index}
             name={item.name}
             desc={item.desc}
             image={item.image}
             otherClass={'border-gray-200 border-[1px]'}
             />
           ))}
        </div>
      </div>
    </div>
  )
}

export default ActivitiesAndAmmenities
import React from 'react'
const services = [
    {
      title: "Web Development",
      description: "We provide high-quality web development services.",
      image: "/web.jpg",
    },
    {
      title: "Graphic Design",
      description: "Our graphic design services will make your brand stand out.",
      image: "/gra.jpg",
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's ranking with our SEO services.",
      image: "/basic.jpg",
    },
    {
      title: "Digital Marketing",
      description: "We offer comprehensive digital marketing solutions.",
      image: "/di.jpg",
    },
  ];
const Teacher = [
    {
      title: "Web Development",
      description: "We provide high-quality web development services.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Graphic Design",
      description: "Our graphic design services will make your brand stand out.",
      image: "public/Sha.png",
    },
    {
      title: "SEO Optimization",
      description: "Improve your site's ranking with our SEO services.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Digital Marketing",
      description: "We offer comprehensive digital marketing solutions.",
      image: "https://via.placeholder.com/150",
    },
  ];
const Team = ({title,de}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-bold mb-2 ">{title}</h2>
      {de ? <p className="text-wrap text-center mb-8">We build awesome course & university sites! Don't miss out join us today!</p>:''}
      
      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="max-w-sm w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-48" src={service.image} alt={service.title} />
              <div className="p-4">
                <div className="text-gray-900 font-bold text-xl mb-2">{service.title}</div>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

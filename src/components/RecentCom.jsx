
import { useEffect, useRef, useState } from "react"
const courses = [
    {
      title: "Getting Starting With Graphic Designing",
      instructor: "Sir Hassam",
      duration: "2 Month",
      students: 12,
      price: 100.00,
      rating: 5,
      image: "/gra.jpg",
      featured: true
    },
    {
      title: "Learning WordPress Content Management System",
      instructor: "Sir Hassam",
      duration: "1 Month",
      students: 63,
      price: 55.00,
      rating: 5,
      image: "/di.jpg",
      featured: false
    },
    {
      title: "How To Write A 10-Finger Keyboard With Laptop",
      instructor: "Sir Hassam",
      duration: "3 Month",
      students: 66,
      price: 57.00,
      rating: 5,
      image: "/basic.jpg",
      featured: false
    },
    {
      title: "How To Create a Website ",
      instructor: "Sir Hassam",
      duration: "3 Month",
      students: 66,
      price: 57.00,
      rating: 5,
      image: "/web.jpg",
      featured: false
    },
    
  ];
// const post = [
//     {
//       title: "Getting Starting With Bootstrap Framework",
//       instructor: "Sir Hassam",
//       duration: "2 Month",
//       students: 12,
//       price: 100.00,
//       rating: 5,
//       image: "/eg.png",
//       featured: true
//     },
//     {
//       title: "Learning WordPress Content Management System",
//       instructor: "Sir Hassam",
//       duration: "1 Month",
//       students: 63,
//       price: 55.00,
//       rating: 5,
//       image: "/eg.png",
//       featured: false
//     },
//     {
//       title: "How To Write A 10-Finger Keyboard With Laptop",
//       instructor: "Sir Hassam",
//       duration: "3 Month",
//       students: 66,
//       price: 57.00,
//       rating: 5,
//       image: "/eg.png",
//       featured: false
//     },
//     {
//       title: "How To Write A 10-Finger Keyboard With Laptop",
//       instructor: "Sir Hassam",
//       duration: "3 Month",
//       students: 66,
//       price: 57.00,
//       rating: 5,
//       image: "/eg.png",
//       featured: false
//     },
//     {
//       title: "How To Write A 10-Finger Keyboard With Laptop",
//       instructor: "Sir Hassam",
//       duration: "3 Month",
//       students: 66,
//       price: 57.00,
//       rating: 5,
//       image: "/eg.png",
//       featured: false
//     }
//   ];
const RecentCom = ({title}) => {
    const scrollRef = useRef(null);
 const [isScrollableLeft, setIsScrollableLeft] = useState(false);
 const [isScrollableRight, setIsScrollableRight] = useState(true); // Assuming content starts fully visible

 useEffect(() => {
   // Check scroll position on mount and update scrollable states
   handleScroll();
 }, []);

 const handleScroll = () => {
   if (scrollRef.current) {
     setIsScrollableLeft(scrollRef.current.scrollLeft > 0); // Check if scroll left is possible
     setIsScrollableRight(
       scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
     ); // Check if scroll right is possible
   }
 };

 const scrollLeft = () => {
   if (scrollRef.current) {
     const newPosition = scrollRef.current.scrollLeft - 200; // Adjust scroll amount as needed
     scrollRef.current.scrollLeft = Math.max(newPosition, 0); // Prevent scrolling beyond the start
     handleScroll(); // Update scrollable states
   }
 };

 const scrollRight = () => {
   if (scrollRef.current) {
     const newPosition = scrollRef.current.scrollLeft + 200; // Adjust scroll amount as needed
     const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
     scrollRef.current.scrollLeft = Math.min(newPosition, maxScrollLeft); // Prevent scrolling beyond the end
     handleScroll(); // Update scrollable states
   }
 };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mx-5">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Recent {title}</h2>
        <div className="flex items-center">
          <i className={`bx bxs-chevron-left-circle text-4xl cursor-pointer ${isScrollableLeft ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollLeft}></i>
          <i className={`bx bxs-chevron-right-circle text-4xl ml-4 cursor-pointer ${isScrollableRight ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollRight}></i>
        </div>
      </div>

      <div className={`overflow-x-auto scroll-smooth  md:scrollbar-hidden`} onScroll={handleScroll} ref={scrollRef} style={{
  overflowY: 'scroll',         // Always show scrollbar
  WebkitOverflowScrolling: 'touch',  // Optional: Enables smooth scrolling in iOS Safari
  scrollbarWidth: 'none',      // Firefox
  msOverflowStyle: 'none',     // Internet Explorer and Edge
  WebkitScrollbarDisplay: 'none',  // Chrome, Safari, and Opera
}}>
  <div className="flex flex-nowrap">
    {courses.map((course, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex-shrink-0">
        <div className="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal shadow-md h-full">
          <div className="mb-8 relative flex-grow">
            <img className="w-full h-48 rounded-md object-cover" src={course.image} alt="Course" />
            {course.featured && (
              <div className="absolute top-0 left-0 bg-blue-500 text-white p-2 rounded-tr-md rounded-bl-md">Featured</div>
            )}
            <div className="text-gray-900 font-bold text-xl mb-2">{course.title}</div>
            <p className="text-gray-700 text-base">${course.price.toFixed(2)}</p>
            <div className="mt-2 flex items-center">
              {[...Array(course.rating)].map((_, i) => (
                <i key={i} className='bx bxs-star text-yellow-500'></i>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="/Sha.png" alt="Instructor" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{course.instructor}</p>
              <p className="text-gray-600">{course.duration} | {course.students} students</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Courses
        </button>
      </div>
    </div>
  )
}

export default RecentCom

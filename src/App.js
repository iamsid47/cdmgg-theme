/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import courses from "./data/courses";
import CoursePage from "./components/CoursePage";

import CourseCards from "./components/CourseCards";
import courseCards from "./data/courseCards";

function App() {
  return (
    <div className="App">


      <div className="bg-gray-200 py-24 flex items-center justify-center">
        <button className="bg-gray-100 px-4 py-2 text-gray-800 rounded-lg mx-2">
          Primary
        </button>
        <button className="bg-pr-offRed px-4 py-2 text-pr-deepWhite rounded-lg mx-2">
          Secondary
        </button>
        <button className="bg-gray-800 px-4 py-2 text-pr-deepWhite rounded-lg mx-2">
          Dark
        </button>
        <button className="px-4 py-2 text-blue-500 rounded-lg mx-2 underline">
          Link
        </button>
      </div>




      {courses.map((course) => (
        <CoursePage course={course} />
      ))}



      <div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block text-pr-offRed">
                Start your free trial today.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pr-deepBlack hover:bg-pr-deepWhite hover:text-pr-deepBlack hover:shadow-lg transition-all"
                >
                  Get started
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pr-deepBlack2 bg-white hover:bg-indigo-50 hover:shadow-lg transition-all"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    
        

    </div>
  );
}

export default App;


/* 
1. Buttons
2. Course Page Cards (Sections of a course)
3. CTA
4. Courses Page (All courses)

*/

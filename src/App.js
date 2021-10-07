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

      {/*Call to action */}
      <div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Join The Community</span>
              <span className="block text-pr-offRed">
                Learn. Develop. Iterate.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pr-deepBlack hover:bg-pr-offRed hover:text-pr-deepWhite hover:shadow-lg transition-all"
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

      <section class="text-blueGray-700 bg-white mt-20">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
              {" "}
              Your tagline{" "}
            </h2>
            <h1 class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
              {" "}
              Medium length display headline.{" "}
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              {" "}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{" "}
            </p>
            <div class="flex flex-col justify-center lg:flex-row">
              <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {" "}
                Show me{" "}
              </button>
              <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                {" "}
                It will take you to candy shop. <br class="hidden lg:block" />
                <a
                  href="#"
                  class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                  title="read more"
                >
                  {" "}
                  Read more about it »{" "}
                </a>
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img
              class="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </section>

      <div class=" bg-gray-200 p-7  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
        <div class="container lg:w-3/12 xl:w-3/12 sm:w-full md:w-2/3 rounded-xl    bg-white  shadow-lg  transform   duration-200 easy-in-out">
          <div class=" h-32 overflow-hidden rounded-t-xl">
            <img
              class="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div class="flex justify-center px-5  -mt-12">
            <img
              class="h-32 w-32 bg-white p-2 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div class="rounced-xl">
            <div class="text-center px-14">
              <h2 class="text-gray-800 text-3xl font-bold">Siddhesh Kulthe</h2>
              <p class="mt-2 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </div>
            <hr class="mt-6" />
            <div class="flex rounded-xl bg-gray-50 ">
              <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer rounded-xl">
                <p>
                  <span class="font-semibold">
                    <a href="google.com">Website</a>
                  </span>
                </p>
              </div>
              <div class="border"></div>
              <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer rounded-xl">
                <p>
                  <a href="google.com">Twitter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-4 py-2 bg-pr-deepBlack text-pr-deepWhite text-">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <ul className="flex text-menu flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-5 h-5 rounded-full text-coolGray-50"
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <ul className=" text-menu flex flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

/* 
1. Buttons
2. Course Page Cards (Sections of a course)
3. CTA
4. Simple Component (If needed)
5. Instructor Card 
6. Footer Minimalistic
*/

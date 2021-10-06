/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


export default function CoursePage ({course}) {
    return (
        <div class="card m-10">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="card-img"
              src={course.imgURL}
              alt={course.imgAlt}
            />
          </div>
          <div class="p-6">
            <div class="card-heading">{course.level}</div>
            <a href="#" class="card-link">
              {course.title}
            </a>
            <p class="card-p">
              {course.description}
            </p>
            <p class="card-p font-bold">
              {course.length}
            </p>
            <div class="card-btn">
            <button>Learn</button>
          </div>
          </div>
          
        </div>
      </div>
    )
}
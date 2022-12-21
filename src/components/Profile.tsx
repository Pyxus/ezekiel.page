import React from 'react'

interface ProfileProps{
    name?: string
    imgSrc?: string
}

export default function Profile({name, imgSrc}: ProfileProps) {
  return (
    <div className="flex flex-col items-center justify-center pb-6">
    <a href="">
      <div
        className="avatar flex flex-col items-center justify-center pb-3"
      >
        <div
          className="w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2"
        >
          <div className="bg-primary">
            <img
              src={imgSrc}
              className="scale-[.80] translate-x-1 translate-y-[-.95rem]"
            />
          </div>
        </div>
      </div>
      <div className="text-2xl">
        <strong>{name}</strong>
      </div>
    </a>
  </div>
  )
}

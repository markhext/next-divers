
'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Proof from "../components/proof";
import Block1 from "./block-1"
import Block2 from "./block-2"
import Block3 from "./block-3"
import Price from "./price"

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <div className="bg-white z-0">


      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Date of the next IDC - 25 SEPT 2025{'    '}
                    <a href="#" className="font-semibold whitespace-nowrap text-indigo-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                  Turn your passion for
                  the Ocean into a
                  Profession
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Start your Instructor Adventure or Grow further
                  as Specialty - or Staff instructor with Style and Vision
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="/life-3.jpeg"
            className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
    <Proof />
    <Block1 />
    <Block2 />
    <Block3 />
    <Price />
    </>
  )
}

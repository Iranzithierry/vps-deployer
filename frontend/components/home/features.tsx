import Link from 'next/link'
import React from 'react'
import { CheckIcon } from '../icons'

export default function Features() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                                Key Features
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Powerful VPS Hosting for Your Apps
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Deploy your apps with ease, customize your servers, and manage your infrastructure with our robust
                                VPS platform.
                            </p>
                        </div>
                        <ul className="grid gap-2 py-4">
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Deploy apps by specifying SSH credentials
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Modify web servers, databases, firewalls, and more
                            </li>
                            <li>
                                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                                Scalable infrastructure to handle your growing needs
                            </li>
                        </ul>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Get Started
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <img
                        alt="VPS Platform"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                    />
                </div>
            </div>
        </section>
    )
}
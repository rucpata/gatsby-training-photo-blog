import React from 'react'

export default function Newsletter() {
    return (
        <form className="w-4/6 h-16 bg-white flex justify-between rounded-lg mt-16">
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="myemail@example.com"
              className="w-full rounded-lg pl-4 py-2"
            />
            <button className="my-3 mr-6 bg-black text-white rounded-lg px-5 py-2">
              Subscribe
            </button>
          </form>
    )
}

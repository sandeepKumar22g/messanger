'use client'
import React from 'react'
import clsx from 'clsx'

const Button = ({type, fullWidth, children, onClick, secondary, danger, disabled}) => {
  return (
    <button onClick={onClick} disabled={disabled} type={type} className={clsx("flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus:outline focus-visible:outline-2 focus-visible:outline-offset-2", disabled && "opacity-50 cursor-default", fullWidth && "w-full", secondary ? 'text-gray-800': "text-white", danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600', !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600")} >{children}</button>
  )
}

export default Button
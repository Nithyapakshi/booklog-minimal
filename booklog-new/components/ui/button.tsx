"use client"

import * as React from "react"

export function Button({ 
  className, 
  variant = "default", 
  size = "default", 
  ...props 
}) {
  const baseStyles = "rounded-md font-medium transition-colors"
  let variantStyles = "bg-blue-500 text-white hover:bg-blue-600"
  let sizeStyles = "py-2 px-4"
  
  const allClasses = [baseStyles, variantStyles, sizeStyles, className].filter(Boolean).join(" ")
  
  return (
    <button
      className={allClasses}
      {...props}
    />
  )
}

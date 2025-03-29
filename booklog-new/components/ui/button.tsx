"use client"

import React from "react"

// Define a type for the button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <button {...props} />
}

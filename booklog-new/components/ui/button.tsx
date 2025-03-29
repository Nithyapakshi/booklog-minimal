"use client"

import React from "react"

// Define a type for the button props with at least one additional property
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add at least one custom property to avoid the empty interface error
  variant?: 'default' | 'primary' | 'secondary' | 'outline'
}

export function Button(props: ButtonProps) {
  return <button {...props} />
}

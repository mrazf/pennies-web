import React from 'react'

export const START = 'START'
export const start = onClick => {
  return (
    <button type='button' onClick={onClick} className='start-button btn btn-primary mx-auto'>
      Start
    </button>
  )
}

export const AUTHENTICATING = 'AUTHENTICATING'
export const PICKING = 'PICKING'

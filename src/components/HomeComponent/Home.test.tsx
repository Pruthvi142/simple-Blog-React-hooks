import { render,screen } from '@testing-library/react'
import React from 'react'
import { Home } from './Home'
describe("home component",()=>{
     test("render",()=>{
         render(<Home/>)
     })
     test("render with text" ,()=>{
         const {getByText}=render(<Home/>)
         expect(getByText('HOME')).toBeInTheDocument()
     })
   
})

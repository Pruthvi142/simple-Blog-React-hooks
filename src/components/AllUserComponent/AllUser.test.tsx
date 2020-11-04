import { render } from '@testing-library/react'
import React from  'react'
import {AllUser} from './AllUser'
describe("all user component",()=>{
     test("render",()=>{
        render(<AllUser/>)
     })
     test('render with text ', () => {
         const {getByText}=render(<AllUser/>)
         expect(getByText("ALL USERS LIST")).toBeInTheDocument()
     })
     
     
})
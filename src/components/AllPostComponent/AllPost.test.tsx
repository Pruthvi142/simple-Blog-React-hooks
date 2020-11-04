import { render } from '@testing-library/react'
import React from 'react'
import{AllPost} from './AllPost'
describe("all posts component",()=>{
      test("render",()=>{
          render(<AllPost/>)
      })
})
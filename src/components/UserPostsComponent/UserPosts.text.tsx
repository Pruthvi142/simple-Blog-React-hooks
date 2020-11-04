import { render } from '@testing-library/react'
import React from 'react'
import {UserPosts} from './UserPosts'
describe('user posts', () => {
    test('render ',  () => {
        render(<UserPosts match={1}/>)
    })
    
    
    
})

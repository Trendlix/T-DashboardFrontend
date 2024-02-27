import React from 'react'
import ActiveUsers from '../ui/ActiveUsers'
import CustomerList from '../ui/CustomerList'

function ChartWithUsers () {
  return (
    <div className='flex flex-row justify-between py-10 gap-5 px-5 pr-10'>
        <ActiveUsers />
        <CustomerList />
    </div>
  )
}

export default ChartWithUsers
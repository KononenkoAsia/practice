import React from 'react'

const Hoc = WrappedComponent => {
  const users = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6']
  const randomUser = users[Math.floor(Math.random() * 6)]

  return props => (
    <div className='userBlock'>
      <WrappedComponent text={randomUser} />
    </div>
  )
}

export default Hoc

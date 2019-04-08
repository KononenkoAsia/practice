import React from 'react'
import _ from 'lodash';

const Hoc = WrappedComponent => {
  const users = ['User1', 'User2', 'User3', 'User4', 'User5', 'User6']

  const dropFirstUser = _.drop(users, 1)
  const dropLastUser = _.dropRight(dropFirstUser, 1)
  const allButTheLast = _.initial(dropLastUser)
  const lastElem = _.last(allButTheLast)
  const concatUsers = _.concat(users, lastElem)
  const pullUser = _.pull(concatUsers, 'User4')
  const reverseUsers = _.reverse(pullUser)
  const takeElementsUsers = _.take(reverseUsers, 5)

  const user = _.head(takeElementsUsers)

  return props => (
    <div className='userBlock'>
      <WrappedComponent  {...props} text={user}/>
    </div>
  )
}

export default Hoc

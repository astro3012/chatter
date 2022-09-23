import { faker } from '@faker-js/faker'
import { Snackbar, Alert } from '@mui/material'
import { createContext, useCallback } from 'react'
import { CustomErrorType } from './types/CustomError'
import { User } from './types/User'

export const getDummyData = () => {
  const dummyData: Array<{ name: string; avatar: string; message: string }> = []

  for (let i = 0; i < 20; i++) {
    dummyData.push({
      name: faker.name.fullName(),
      avatar: faker.image.avatar(),
      message: faker.lorem.sentence()
    })
  }

  return dummyData
}

export const ChatDataContext = createContext({
  currentUser: null,
  currentChat: null
})

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})

export const SocketMethodsContext = createContext({
  sendMessage: () => {}
})

export const addUser = async (userName: string) => {
  try {
    const response: User = await fetch('https://chat-sever-rust.herokuapp.com/chats/users/add', {
      method: 'POST',
      body: JSON.stringify({
        name: userName
      }),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json())
    return response
  } catch (error) {
    const err = error as CustomErrorType
    console.log(err)
    if (err.message) {
      return err.message
    }
    return 'Something went wrong.'
  }
}

export const getCurrentUser = () => {
  const currentUser = localStorage.getItem('user')
  return currentUser ? (JSON.parse(currentUser) as User) : null
}

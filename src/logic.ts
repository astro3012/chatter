import { faker } from '@faker-js/faker'
import { useState, useEffect, createContext, useCallback, Dispatch, SetStateAction } from 'react'
import { Snackbar, Alert, PaletteMode } from '@mui/material'
import { CustomErrorType } from './types/CustomError'
import { User } from './types/User'
import _ from 'lodash'

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
        const response: User = await fetch(
            'https://chat-sever-rust.herokuapp.com/chats/users/add',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: userName
                }),
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(async (response) => await response.json())
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

export const camelCaseConverter = <T extends {}>(object: T) => {
    return Object.entries(object).reduce((accumulator, currentValue) => {
        accumulator[_.camelCase(currentValue[0])] = currentValue[1]
        return accumulator
    }, {})
}

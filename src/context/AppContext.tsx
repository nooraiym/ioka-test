import React, { ReactNode, createContext, useContext, useState } from 'react'
import { usePagination } from '../hooks/usePagination'

interface AppContextProps {
  currentPage: number
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  nextMultiplePages: (steps: number) => void
  prevMultiplePages: (steps: number) => void
  setPage: (page: number) => void
  isLooped: boolean
  toggleLoop: () => void
  limit: number
}

interface AppProviderProps {
  children: ReactNode
  totalItems: number
  limit: number
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}

export const AppProvider = ({ children, totalItems, limit }: AppProviderProps) => {
  const [isLooped, setIsLooped] = useState<boolean>(false)
  const { currentPage, setPage, totalPages, nextPage, prevPage, nextMultiplePages, prevMultiplePages } = usePagination({
    totalItems,
    limit,
    isLooped,
  })

  const toggleLoop = () => {
    setIsLooped(prev => !prev)
  }

  return (
    <AppContext.Provider
      value={{
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        nextMultiplePages,
        prevMultiplePages,
        setPage,
        isLooped,
        toggleLoop,
        limit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

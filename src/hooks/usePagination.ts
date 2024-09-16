import { useEffect, useState } from 'react'

interface UsePaginationProps {
  limit: number
  totalItems: number
  isLooped: boolean
}

interface PaginationResult {
  currentPage: number
  setPage: (page: number) => void
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  nextMultiplePages: (steps: number) => void
  prevMultiplePages: (steps: number) => void
}

export const usePagination = <T>({ limit, totalItems, isLooped = false }: UsePaginationProps): PaginationResult => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(totalItems / limit))

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / limit))
  }, [currentPage, limit])

  const setPage = (page: number) => {
    setCurrentPage(page)
  }
  const nextPage = () => {
    setCurrentPage(prev => (isLooped && prev === totalPages ? 1 : Math.min(prev + 1, totalPages)))
  }
  const prevPage = () => {
    setCurrentPage(prev => (isLooped && prev === 1 ? totalPages : Math.max(prev - 1, 1)))
  }
  const nextMultiplePages = (steps: number) => {
    setCurrentPage(prev => {
      const nextPage = prev + steps
      if (isLooped) {
        return nextPage > totalPages ? nextPage % totalPages || totalPages : nextPage
      }
      return Math.min(nextPage, totalPages)
    })
  }
  const prevMultiplePages = (steps: number) => {
    setCurrentPage(prev => {
      const prevPage = prev - steps
      if (isLooped) {
        return prevPage < 1 ? totalPages - ((1 - prevPage) % totalPages) : prevPage
      }
      return Math.max(prevPage, 1)
    })
  }

  return { currentPage, setPage, totalPages, nextPage, prevPage, nextMultiplePages, prevMultiplePages }
}

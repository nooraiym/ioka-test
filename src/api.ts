export interface Post {
  id: number
  title: string
  body: string
}

/**
 * Функция для получения постов с API.
 * @param page - номер текущей страницы
 * @param limit - количество постов на странице
 * @returns массив постов
 */

export const fetchPosts = async (page: number, limit: number): Promise<Post[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)

  if (!response.ok) {
    throw new Error('Error fetching data from server')
  }

  const data: Post[] = await response.json()
  return data
}

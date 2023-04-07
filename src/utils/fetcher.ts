const API_KEY = process.env.API_KEY
const BASE_URL = process.env.BASE_URL

export const fetcher = async (queryParams?: string) => {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&${queryParams?.length ? queryParams : ''}`)
    const data = response.json()
    
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}
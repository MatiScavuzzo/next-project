import ImageOfDate from "@/components/ImageOfDate"
import { fetcher } from "@/utils/fetcher"
import { ImageProps } from "@/utils/types"

const ImageDay = ({image}: ImageProps) => {
  return(
    <ImageOfDate image={image} />
  )
}

export async function getStaticProps({ params }: any) {
  const { date } = params
  try {
    const image = await fetcher(`&date=${date}`)
    return {
      props: {
        image
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default ImageDay
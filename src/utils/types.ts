export type Image = {
  date: string,
  explanation: string,
  hdurl: string,
  title: string,
  url: string,
  copyright?: string
  media_type: string
}

export type HomeProps = {
  imageOfTheDay: Image,
  last10DaysImages: Image[],
}

export type ImageProps = {
  image: Image,
}

export type ClassNameProps = {
  className: string
}

export type DateProps = {
  dateSelected: string
}
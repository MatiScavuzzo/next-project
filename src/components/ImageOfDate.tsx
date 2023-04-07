import { ImageProps } from '@/utils/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoMdArrowRoundBack } from 'react-icons/io'

const ImageOfDate = ({ image }: ImageProps) => {
  const router = useRouter()

  const onBackHandler = () => {
    router.push('/')
  }
  return (
    <>
      <div className='relative flex flex-col items-center justify-center w-full gap-2 p-2 text-white'>
        <button onClick={onBackHandler} className='absolute flex items-center justify-center w-10 h-10 p-2 text-2xl text-black bg-white rounded-full top-4 left-2'><IoMdArrowRoundBack /></button>
        <h1>{image.title}</h1>
        <h2>{image.date}</h2>
        <div className='relative w-[800] h-[600] flex flex-col p-2'>
          {image.media_type === 'image' ? (
            <Image
              className='border border-slate-400 rounded-3xl'
              src={image.url}
              alt={image.title}
              fill
              priority
            />
          ) : (
            <div className='flex p-4 italic text-white border border-slate-400 rounded-3xl place-content-center'>
              <p>El archivo que intentas visualizar no se encuentra</p>
            </div>
          )}
          {image.copyright ? (
            <p className='py-2 text-right'>{image.copyright}</p>
          ) : (
            ''
          )}
        </div>
        <p>{image.explanation}</p>
      </div>
    </>
  );
};

export default ImageOfDate;

import { ImageProps } from '@/utils/types';
import Image from 'next/image';

const ImageOfDate = ({ image }: ImageProps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full gap-2 p-2 text-white'>
        <h1>{image.title}</h1>
        <h2>{image.date}</h2>
        <div className='relative flex flex-col p-2'>
          {image.media_type === 'image' ? (
            <Image
              className='w-auto h-auto border border-slate-400 rounded-3xl'
              src={image.url}
              alt={image.title}
              width={800}
              height={600}
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

import Image from 'next/image';
import { useRouter } from 'next/router';

const ImageOfTheDay = ({ title, url, date }: any) => {
  const router = useRouter();
  return (
    <>
      <h1 className='font-bold underline underline-offset-2'>Imágen del día</h1>
      <h2>{title}</h2>
      <div className='relative w-[800px] h-[600px]'>
        <Image
          onClick={() => router.push(`/image/${date}`)}
          className='w-auto h-auto border cursor-pointer border-slate-300 rounded-2xl'
          src={url}
          alt={title}
          fill
          priority
        />
      </div>
    </>
  );
};

export default ImageOfTheDay;

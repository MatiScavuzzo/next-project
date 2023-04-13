import Image from 'next/image';
import { useRouter } from 'next/router';

const ImageOfTheDay = ({ title, url, date }: any) => {
  const router = useRouter();
  return (
    <>
      <h1 className='font-bold underline underline-offset-2'>Imágen del día</h1>
      <h2>{title}</h2>
      <div className='p-2'>
        <Image
          onClick={() => router.push(`/image/${date}`)}
          className='object-contain border cursor-pointer border-slate-300 rounded-2xl'
          src={url}
          alt={title}
          width={960}
          height={640}
          priority
        />
      </div>
    </>
  );
};

export default ImageOfTheDay;

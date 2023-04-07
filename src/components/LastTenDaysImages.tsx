import Image from "next/image";
import { useRouter } from "next/router";

const LastTenDaysImages = ({ last10DaysImages }: any) => {
  const router = useRouter()
  return (
    <>
      <h2>Imágenes de los últimos 10 días</h2>
      <div className='flex flex-col items-center justify-center w-full gap-2 p-2 border border-slate-300 rounded-2xl'>
        {last10DaysImages.map((image:any) => (
          <div
            className='flex flex-col items-center justify-center gap-2 p-2 border border-slate-500 rounded-2xl'
            key={`${image.date}-${image.title}`}
          >
            <p>
              {image.title} - {image.date}
            </p>
            <Image
              onClick={() => router.push(`/image/${image.date}`)}
              className='w-auto h-auto cursor-pointer rounded-2xl'
              src={image.url}
              alt={image.title}
              width={500}
              height={500}
              priority
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LastTenDaysImages
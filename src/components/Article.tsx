const Article = ({children}:any) => {
  return (
    <article className='p-2 flex flex-col items-center justify-center w-10/12'>
      <div className='flex flex-col gap-2 justify-center items-center'>
        {children}
      </div>
    </article>
  )
}

export default Article
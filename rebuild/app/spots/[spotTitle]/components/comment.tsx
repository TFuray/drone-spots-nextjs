const Comment = ({ comment }) => {
  return (
    <div className='flex justify-between border w-full rounded-md bg-slate-300'>
      <div className='p-4'>
        <div className='flex gap-3 items-center'>
          {/* <img src="https://avatars.githubusercontent.com/u/22263436?v=4" className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" /> */}
          <h3 className='font-bold text-xs'>{comment.author}</h3>
        </div>
        <p className='title-font mt-2'>{comment.text}</p>
      </div>
    </div>
    // <div>
    //   <h2 className='sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4'>
    //     Pinterest DIY dreamcatcher gentrify single-origin coffee
    //   </h2>
    //   <p className='leading-relaxed mb-8'>
    //     {comment.text}
    //   </p>
    // </div>
  )
}
export default Comment

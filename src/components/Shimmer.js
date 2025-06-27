const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center items-start gap-4 py-8'>
      {[...Array(6)].map((_, i) => (
        <div
          className='w-64 bg-white rounded-lg shadow-lg p-4 min-h-80 animate-pulse flex flex-col'
          key={i}
        >
          <div className='h-40 w-full bg-gray-200 rounded-md mb-4' />
          <div className='h-5 w-3/4 bg-gray-200 rounded mb-2' />
          <div className='h-4 w-2/3 bg-gray-200 rounded mb-2' />
          <div className='h-4 w-1/2 bg-gray-200 rounded mb-4' />
          <div className='flex gap-2 mt-auto'>
            <div className='h-5 w-10 bg-gray-200 rounded' />
            <div className='h-5 w-12 bg-gray-200 rounded' />
            <div className='h-5 w-14 bg-gray-200 rounded' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

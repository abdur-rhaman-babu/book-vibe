import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className='flex items-center justify-between bg-[rgba(19,19,19,0.05)] px-32 py-14 rounded-2xl'>
      <div>
        <h1 className='font-play text-6xl font-bold my-12 leading-normal'>Books to freshen up your bookshelf</h1>
        <button className="text-xl text-white rounded-lg font-semibold px-4 py-3 bg-[#23BE0A]">
            View The List
        </button>
      </div>
      <div className='z-10'>
            <img className='h-[500px]' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;

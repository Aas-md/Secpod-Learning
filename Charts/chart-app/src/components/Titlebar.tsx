import arrowIcon from '../assets/right-arrow-svgrepo-com (1).svg'
interface Titlebarprops {
  icon: string;
  title: string;
}
export default function TitleBar({ icon, title }: Titlebarprops) {
  return (
    <div className="bg-white w-full h-11 rounded-lg flex justify-between p-2 px-4 items-center">
      <div className='flex justify-start w-1/4 gap-1.5 items-center'>
        <img src={icon} style={{ height: "18px", width: "18px" }} />
        <p className='text-[#0a58a0] font-semibold text-sm'>{title}</p>
      </div>
      
        <button className='flex justify-end w-1/8 items-center gap-1.5'>
          <span className='text-[#0a58a0] text-xs'>View All</span>
          <img src={arrowIcon} style={{ height: "18px", width: "18px" }} />
        </button>
    
    </div>
  );
}

import imgImage1 from "./6551d425a39478523c7b170ce0895d2d5db6f010.png";
import imgRectangle5 from "./76e455ee2ba0f2b0b1ff680dec18f0b7ef48ff66.png";
import imgRectangle7 from "./489c38bb59e7a20c96311f794d1e12d980e1298a.png";
import imgRectangle6 from "./97e5d5b397f8e20b8bfb82c55d794b36e6f9f374.png";
import imgRectangle4 from "./a6071ccf43fe4abc734a30c26a84cace749ae452.png";

export default function Scroll() {
  return (
    <div className="bg-white relative size-full" data-name="scroll">
      <div className="absolute h-[832px] left-0 top-0 w-[1280px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[268px] left-[719px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[486px] w-[487px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle5} />
      </div>
      <div className="absolute h-[268px] left-[111px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[486px] w-[589px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle7} />
      </div>
      <div className="absolute h-[360px] left-[793px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[90px] w-[406px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle6} />
      </div>
      <div className="absolute bg-white h-[84px] left-[493px] rounded-[80px] shadow-[0px_2px_14px_0px_rgba(0,0,0,0.25)] top-[702px] w-[294px]" />
      <div className="absolute bg-[#02f] h-[60px] left-[511px] rounded-[80px] top-[714px] w-[115px]" />
      <p className="absolute font-['Ubuntu:Regular',sans-serif] h-[21px] leading-[normal] left-[539px] not-italic text-[20px] text-white top-[733px] w-[59px]">Home</p>
      <p className="absolute font-['Ubuntu:Regular',sans-serif] h-[21px] leading-[normal] left-[676px] not-italic text-[#02f] text-[20px] top-[733px] w-[79px]">contact</p>
      <p className="absolute font-['Ubuntu:Regular',sans-serif] h-[21px] leading-[normal] left-[1147px] not-italic text-[#02f] text-[20px] top-[60px] w-[59px]">Menu</p>
      <div className="absolute h-[360px] left-[111px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[90px] w-[644px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle4} />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Ubuntu:Regular',sans-serif] h-[100px] justify-center leading-[0] left-[140px] not-italic text-[100px] text-white top-[366px] w-[399px]">
        <p className="leading-[normal]">scenario</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Ubuntu:Regular',sans-serif] h-[100px] justify-center leading-[0] left-[140px] not-italic text-[100px] text-white top-[670px] w-[399px]">
        <p className="leading-[normal]">blog</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Ubuntu:Regular',sans-serif] h-[100px] justify-center leading-[0] left-[807px] not-italic text-[100px] text-white top-[366px] w-[399px]">
        <p className="leading-[normal]">artwork</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Ubuntu:Regular',sans-serif] h-[100px] justify-center leading-[0] left-[741px] not-italic text-[100px] text-white top-[677px] w-[399px]">
        <p className="leading-[normal]">profile</p>
      </div>
    </div>
  );
}
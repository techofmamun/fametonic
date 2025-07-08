import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[211px] py-8">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left side - Content */}
        <div className="flex-1 flex flex-col gap-6 ">
          {/* Main heading */}
          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-[35px] leading-normal font-urbanist">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          
          {/* Subheading with cyan color and text shadow */}
          <h2 className="text-[#00e7f9] font-bold text-2xl sm:text-3xl lg:text-[35px] leading-normal font-urbanist" 
              style={{ textShadow: '0 4px 4px #fc004e' }}>
            Discover your way to success with Fametonic:
          </h2>
          
          {/* Feature list */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <Image src="/star.png" alt="Star" width={16} height={16} className="mt-1 flex-shrink-0" />
              <p className="text-white font-semibold text-sm sm:text-base font-figtree leading-[1.38]">
                Start growing your influence right away—no waiting required!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/star.png" alt="Star" width={16} height={16} className="mt-1 flex-shrink-0" />
              <p className="text-white font-semibold text-sm sm:text-base font-figtree leading-[1.38]">
                Create viral TikToks and Reels step by step with easy-to-follow lessons
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/star.png" alt="Star" width={16} height={16} className="mt-1 flex-shrink-0" />
              <p className="text-white font-semibold text-sm sm:text-base font-figtree leading-[1.38]">
                Use a Personal AI Worker to boost your content
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Image src="/star.png" alt="Star" width={16} height={16} className="mt-1 flex-shrink-0" />
              <p className="text-white font-semibold text-sm sm:text-base font-figtree leading-[1.38]">
                Learn from expert-led courses designed for aspiring influencers
              </p>
            </div>
          </div>
          
          {/* Get Started Button Section */}
          <div className="flex flex-col gap-2.5 mt-6 w-full max-w-[313px]">
            <button className="h-10 flex justify-center items-center gap-2.5 px-10 py-2 rounded-[10px] bg-[#fc004e] text-white font-semibold "
                    style={{ boxShadow: '2px 2px 10px 0 #00e7f9' }}>
              GET STARTED
            </button>
            
            <p className="text-white text-xs font-normal font-figtree leading-[1.33] text-center">
              1-minute quiz for personalized insights
            </p>
          </div>
          
          {/* Terms and Copyright */}
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-[#ababab] text-xs font-medium font-figtree leading-normal">
              By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
            </p>
            <p className="text-[#ababab] text-[10px] font-medium font-figtree leading-normal">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
        
        {/* Right side - Mobile image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <Image 
              src="/mobile_small.png" 
              alt="Mobile App Interface" 
              width={400} 
              height={600} 
              className="block sm:hidden object-contain"
            />
            <Image 
              src="/mobile4X.png" 
              alt="Mobile App Interface" 
              width={500} 
              height={700} 
              className="hidden sm:block object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

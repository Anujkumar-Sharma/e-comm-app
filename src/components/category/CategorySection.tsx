import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type CategoryHeadingProps = {
  title: string
  className?: string
}

const ShopNowLink = () => {
  return (
    <p className="cursor-pointer mt-1 md:mt-2 text-[10px] md:text-[16px] gap-1 md:gap-2 flex  border-b-[1px] md:border-b-2 border-gray-800 max-w-max items-center">
      Shop Now
      <Image
        className=" h-3 w-3 md:h-5 md:w-5"
        src={'/icons/arrow-c-right.svg'}
        height={16}
        width={24}
        alt="right-arrow"
      />
    </p>
  )
}

const CategoryHeading = ({ title, className }: CategoryHeadingProps) => {
  return (
    <div className={classNames('absolute', className)}>
      <p className="text-[16px] md:text-4xl md:leading-9"> {title}</p>
      <ShopNowLink />
    </div>
  )
}

const CategorySection = () => {
  return (
    <div className="mt-4 flex  gap-4 md:gap-7">
      <div className="w-1/2 object-contain h-auto relative">
        <CategoryHeading
          title="Living Room"
          className="top-2 left-4 md:top-8 md:left-8"
        />
        <Image
          className="h-full"
          src={'/images/sofa-full.png'}
          height={1000}
          width={1000}
          alt="sofa-full"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4 md:gap-7">
        <div className="h-auto relative">
          <CategoryHeading
            title="Bedroom"
            className="bottom-2 left-2 md:bottom-8 md:left-8"
          />
          <Image
            className="h-full"
            src={'/images/drawer-table.png'}
            height={1000}
            width={1000}
            alt="drawer-table"
          />
        </div>
        <div className="h-auto relative">
          <CategoryHeading
            title="Kitchen"
            className="bottom-2 left-2 md:bottom-8 md:left-8"
          />
          <Image
            className="h-full object-cover"
            src={'/images/toaster.png'}
            height={1000}
            width={1000}
            alt="toaster"
          />
        </div>
      </div>
    </div>
  )
}

export default CategorySection

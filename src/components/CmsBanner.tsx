import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CmsBanner = () => {
  return (
    <div className="bg-blue-50 text-center py-2 text-sm flex justify-center items-center gap-3">
      <Image src={'/icons/Ticket.svg'} height={20} width={20} alt="ticket" />
      <span>30% off storewide — Limited time!</span>
      <Link href="#" className="text-blue-600 all-center gap-1">
        Shop Now{' '}
        <Image
          src={'/icons/arrow-right.svg'}
          height={20}
          width={20}
          alt="ticket"
        />
      </Link>
    </div>
  )
}

export default CmsBanner

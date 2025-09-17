import React from 'react'

export default function ChatHeader({contact}) {
  return (
    <div className='flex items-center justify-between p-4 border-b bg-gray-100'>
      <div className='flex items-center space-x-3'>
        <div className=' w-10 h-10 bg-gray-300 rounded-full'></div>
        <div>
            <div className='font-bold'>{contact.name}</div>
<div className="text-xs text-green-500">
  {contact?.online ? "Online" : `Last seen at ${contact?.lastSeen || "N/A"}`}
</div>
        </div>

      </div>
      <button className='text-gray-500'>Back</button>
    </div>
  )
}

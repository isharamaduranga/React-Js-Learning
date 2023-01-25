import React from 'react'
import './topicbox.css'
export default function TopicBox() {


    const topic ="I'm Ishara Maduranga..."
    const item=" and I.m What ever IT takes.."

  return (
    <div>
        <div className="topicBox">
            <span className="text">{topic}{item}</span>
        </div>
    </div>
  )
}

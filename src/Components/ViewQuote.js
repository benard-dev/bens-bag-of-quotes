import React from 'react'

const ViewQuote = () => {
  return (
    <div className='secondary'>
        <h4 className='info'>Hopefully this quote picks you up, <span className='champ'>champ!</span></h4>
        <p className='field-name'>Quote:</p>
        <p className="quote"><q>Ball ni lazima!</q></p>
        <p className='field-name'>Said by:</p>
        <p className='supporting-info'>Ryan from TGIF</p>
        <p className='field-name'>Location:</p>
        <p className='supporting-info'>Jamhuri Primary School Turf</p>
        <p className='field-name'>Date:</p>
        <p className='supporting-info'>Some time in 2022</p>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M252.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-184 184c-15.6 15.6-15.6 40.9 0 56.6l184 184c15.6 15.6 40.9 15.6 56.6 0l184-184c15.6-15.6 15.6-40.9 0-56.6l-184-184zM248 224c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24zM96 248c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm128 80c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm128-80c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM224 72c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm96 392c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H472.5c13.4 26.9 8.8 60.5-13.6 82.9L320 413.8V464zm160-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
            Another one, maybe?
        </button>
    </div>
  )
}

export default ViewQuote
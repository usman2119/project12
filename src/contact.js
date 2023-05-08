import React from 'react'
import "./css/contact.css"
const Contact = () => {
  return (
    <div className='contact'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3809421133856!2d74.41151417598618!3d31.486211348828355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f53b21b71b1%3A0xe245f7a645a3fdc8!2sThe%20Stuff%20Garment%20Shop!5e0!3m2!1sen!2s!4v1683344982021!5m2!1sen!2s"
         width="1000"
          height="500"
           style={{
            border:0,
            margin:"50px"
        }}
            allowfullscreen=""
             loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
    </div>
  )
}

export default Contact
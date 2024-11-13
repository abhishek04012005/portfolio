import React from 'react'
import './TestimonialCards.css'


const TestimonialCards = (props) => {
    return (
        <>
            <div className="testimonials-elements">
                <p className='text-white font-black text-[48px]'>"</p>

                <div className='mt-1'>
                    <p className='text-white tracking-wider text-[18px]'>{props.testimonial}

                    </p>

                    <div className='testimonial-person-detail'>
                        <div className='testimonial-person-name'>
                            <p className='text-white font-medium text-[16px]'>
                                <span className='blue-text-gradient'>@</span>{props.name} 
                            </p>
                            <p className='mt-1 text-secondary text-[12px]'>
                            {props.designation} {props.company}
                            </p>
                        </div>

                        <img
                            src={props.image}
                             alt={`feedback_by-${props.name}`}
                            className='w-12 h-12 rounded-full object-cover'
                        />
                    </div>
                </div>
            </div>
            </>
    )
}

export default TestimonialCards
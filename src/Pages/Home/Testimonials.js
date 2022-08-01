import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!",
            location: 'Bangladesh',
            img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!",
            location: 'Bangladesh',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!",
            location: 'Bangladesh',
            img: people3
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div >
                    <h3 className='text-secondary font-bold text-2xl'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-[192px] w-[100px] ' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
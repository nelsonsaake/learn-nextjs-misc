import React from 'react';
import Image from 'next/image';
import img from '../../public/4.jpg';

export default function PetsPage() {

    return (
        <div className="p-8 flex justify-around flex-wrap">
            <Image src={img} alt={`pet image`} placeholder='blur' width={280} height={480} className='rounded-lg mx-4 my-5' />
            {
                numberArray({}).map(v => (
                    <div key={v}>
                        <Image src={`/${v}.jpg`} alt={`pet${v}`} width={280} height={480} className='rounded-lg mx-4 my-5' />
                    </div>
                ))
            }
        </div>
    )
}


// numberArray: generate an array of integers from min to max, [min, max]
function numberArray({ min = 1, max = 5 }: { min?: number, max?: number }): string[] {
    const res = [];
    for (let i = min; i <= max; i++) {
        res.push(i.toString())
    }
    return res
}
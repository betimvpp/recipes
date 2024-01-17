import SkeletonCard from '@/components/skeleton'
import { getRecipes } from '@/services/getRecipes';
import React from 'react'

export default async function Loading() {
    return (
        <main className='w-full'>
            <div className='grid grid-cols-3 gap-8 w-full'>
                {Array.from({ length: 9 }, (_, index) => index + 1).map((i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    )
}
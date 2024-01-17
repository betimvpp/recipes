import { Skeleton } from './ui/skeleton'
import { Card, CardHeader, CardFooter, CardContent } from './ui/card';

export default function SkeletonCard() {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex flex-row justify-between">
                <Skeleton className="w-16 h-16 rounded-full" />
                <Skeleton className="w-5 flex-grow ml-2" />
            </CardHeader>
            <CardContent>
                <Skeleton className='h-4 flex-grow' />
                <Skeleton className='h-4 flex-grow mt-4' />
            </CardContent>
            <CardFooter>
                <Skeleton className='h-10 w-28' />
            </CardFooter>
        </Card >
    )
}

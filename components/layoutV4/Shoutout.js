export default function Shoutout({header, subtext}) {
    return (
        <div className='flex flex-col justify-center py-4 px-8 md:px-28 text-center space-y-3 md:space-y-6'>
            <h1 className='text-xl md:text-3xl '>{header}</h1>
            <p className='opacity-60'>{subtext}</p>
        </div>
    )

}
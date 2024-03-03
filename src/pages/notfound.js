import CustomLink from '@/components/CustomLink'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function NotFound() {
    return (
        <Layout className='!py-0'>
            <div className='flex flex-col gap-10 w-2/3 mx-auto'>
                <h1 className='text-secondary lg:text-7xl text-5xl text-center font-semibold'>Ooops!</h1>
                <h2 className='text-gray-600 font-bold text-center'>Page Not Found (404)</h2>
                <p className='mx-auto text-center text-gray-600 md:w-80 w-auto'>The article you are looking for has been removed or is temporarily unavailable.</p>
                <div className='xl:w-70 md:w-60 max-w-60 w-auto mx-auto'>
                    <Image
                        src="/images/gf_not_found.png"
                        className=""
                        width={0}
                        height={0}
                        sizes="60vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                    />
                </div>
                <div>
                    <CustomLink
                        route="/"
                        className="!px-2 text-center mb-32 border-solid border-2 border-transparent bg-secondary text-light md:w-80 w-auto mx-auto"
                        title="Go back home"
                    />
                </div>

            </div>

        </Layout>
    )
}
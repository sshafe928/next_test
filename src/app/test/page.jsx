import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <h1>test page</h1>
        <Link href="/">Home</Link>
        <Image src="https://i.pinimg.com/736x/50/57/e2/5057e2df3ee180b441081453633dffef.jpg" alt="blobfish" width={450} height={450}/>

    </div>
  )
}

export default page
import Image from 'next/image';

const Hero = () => (
    <section className="hero">
        <section className="gallery">
            <figure className="gallery__item gallery__item--1">
                <Image 
                    layout="intrinsic"
                    width={600}
                    height={400}
                    src="/galapagos.jpg" 
                    className="hero-image"
                />
            </figure>
            <figure className="gallery__item gallery__item--2">
                <Image 
                    layout="intrinsic"
                    width={600}
                    height={400}
                    src="/galapagos.jpg" 
                    className="hero-image"
                />
            </figure>
            <figure className="gallery__item gallery__item--3">
                <Image 
                    layout="intrinsic"
                    width={600}
                    height={400}
                    src="/galapagos.jpg" 
                    className="hero-image"
                />
            </figure>
            <figure className="gallery__item gallery__item--4">
                <Image 
                    layout="intrinsic"
                    width={600}
                    height={400}
                    src="/galapagos.jpg" 
                    className="hero-image"
                />
            </figure>
            <figure className="gallery__item gallery__item--5">
                <Image 
                    layout="intrinsic"
                    width={600}
                    height={400}
                    src="/galapagos.jpg" 
                    className="hero-image"
                />
            </figure>
        </section>
    </section>
)
export default Hero

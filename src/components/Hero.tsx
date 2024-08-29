import CONFIG from '../../config';
const Hero = () => {
    return (
        <>
            <section className="bg-indigo-700 py-7 mb-4">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-2xl font-extrabold text-white sm:text-3xl md:text-6xl"
                        >
                            {CONFIG.HERO_TITLE}
                        </h1>
                        <p className="my-4 text-xl text-white">
                            {CONFIG.HERO_DESCRIPTION}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;
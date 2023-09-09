import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (

        <div className="hero min-h-min" style={{ backgroundImage: 'url(https://i.ibb.co/N3qVsxN/E3.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="my-5 text-4xl font-bold">Welcome to NSTUSC</h1>
                    {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>

    );
};

export default Banner;
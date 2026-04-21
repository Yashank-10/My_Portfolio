import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();

  return (
    <main className="container mx-auto px-4 mt-28 pb-16 max-w-4xl">
      <section ref={ref1} className="reveal mb-16 sm:mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">About Me</h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a final-year Computer Science Engineering student with a genuine passion
                for building things that solve real problems — not just complete
                assignments. My stack spans React.js, Flask, FastAPI, Firebase,
                and scikit-learn. I've built systems ranging from NLP-based spam
                detection and AI-powered resume screening to cloud-deployed
                image processing tools and Android healthcare apps.
                <p> Curiosity is
                my main driver — every project teaches me something new.
                </p>
              </p>
             
            </div>
          </div>
          <div className="polaroid polaroid-1 mx-auto max-w-xs w-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Yashank at work"
              className="w-full h-48 sm:h-64 object-cover mb-4"
            />
            <p className="text-center text-gray-500 text-sm">
              Powered by coffee
            </p>
          </div>
        </div>
      </section>

      <section ref={ref2} className="reveal mb-16 sm:mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              My Coding Journey
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                My journey into coding started when I discovered a passion for
                building things that people actually use. What began as
                curiosity quickly turned into obsession.
              </p>
              <p>
                From my first "Hello World" to shipping full-stack products,
                each project has taught me something new and pushed me further.
              </p>
            </div>
          </div>
          <div className="polaroid polaroid-2 mx-auto max-w-xs w-full">
            <img
              src="./src/assets/journey.jpeg"
              alt="Where it all began"
              className="w-full h-48 sm:h-64 object-cover mb-4"
            />
            <p className="text-center text-gray-500 text-sm">
              Where it all began
            </p>
          </div>
        </div>
      </section>

      <section ref={ref3} className="reveal mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Off-Screen Adventures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="polaroid polaroid-3 mx-auto max-w-xs w-full">
            <img
              src="https://plus.unsplash.com/premium_vector-1682298101057-5a52c70a669f?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cooking"
              className="w-full h-40 sm:h-48 object-cover mb-4"
            />
            <p className="text-center text-gray-500 text-sm">Cooking</p>
          </div>
          <div className="polaroid polaroid-1 mx-auto max-w-xs w-full">
            <img
              src="https://plus.unsplash.com/premium_vector-1719528738359-452bea117c4c?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Badminton"
              className="w-full h-40 sm:h-48 object-cover mb-4"
            />
            <p className="text-center text-gray-500 text-sm">Badminton</p>
          </div>
          <div className="polaroid polaroid-2 mx-auto max-w-xs w-full sm:col-span-2 md:col-span-1">
            <img
              src="https://images.unsplash.com/vector-1759549084841-c38debfdc406?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tea and reading"
              className="w-full h-40 sm:h-48 object-cover mb-4"
            />
            <p className="text-center text-gray-500 text-sm">Tech and Blogs</p>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-4 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              When I'm not immersed in code, I love experimenting in the
              kitchen. There's something satisfying about creating something
              delicious from scratch - much like building a good app.
            </p>
            <p>
              Badminton keeps me active and sharp. Whether a pick-up game or
              physically and mentally active, the court is where I recharge and
              compete.
            </p>
            <p>
              I'm also drawn to deep Technical Podcasts, conversations, blogs
              and Research paper driven Projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

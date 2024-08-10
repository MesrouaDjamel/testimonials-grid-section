import Image from 'next/image';
import React from 'react'

const AllTestimonial = () => {
  const CardStyle = "px-[30px] py-[24px] flex flex-col gap-6 rounded-lg";

  return (
    <div>
      {/* Testimonial 1 Daniel Clifford */}
      <section className={`${CardStyle} bg-violet`}>
        <article className="flex items-center gap-4">
          <Image
            src="/image-daniel.jpg"
            alt="Jeremy"
            width={32}
            height={32}
            className={"rounded-full"}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-lightGray">
              Daniel Clifford
            </span>
            <span className="text-[11px] font-medium text-lightGray opacity-50">
              Verified Graduate
            </span>
          </div>
        </article>

        <article className="grid grid-rows-1 gap-y-[22px]">
          <h1 className="text-xl text-white">
            I received I received a job offer mid- course, and the subjects I
            learned were current, if not more so, in the company I joined. I
            honestly feel I got every penny’s worth.
          </h1>

          <p className="text-[13px] font-medium text-lightGray opacity-70">
            “I was an EMT for many years before I joined the bootcamp. I’ve been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup.”
          </p>
        </article>
      </section>

      {/* Testimonial 2 Jeanette Harmon */}
      <section className={`${CardStyle} bg-white`}>
        <article className="flex items-center gap-4">
          <Image
            src="/image-jeanette.jpg"
            alt="Jeremy"
            width={32}
            height={32}
            className={"rounded-full"}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-veryDarkGrayishBlue">
              Jeanette Harmon
            </span>
            <span className="text-[11px] font-medium text-veryDarkGrayishBlue opacity-50">
              Verified Graduate
            </span>
          </div>
        </article>

        <article className="grid grid-rows-1 gap-y-[22px]">
          <h1 className="text-xl text-veryDarkGrayishBlue">
            An overall wonderful and rewarding experience
          </h1>

          <p className="text-[13px] font-medium text-veryDarkGrayishBlue opacity-70">
            “I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself.”
          </p>
        </article>
      </section>

      {/* Testimonial 3 Jonathan Walters */}
      <section className={`${CardStyle} bg-veryDarkGrayishBlue`}>
        <article className="flex items-center gap-4">
          <Image
            src="/image-jonathan.jpg"
            alt="Jeremy"
            width={32}
            height={32}
            className={"rounded-full"}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-lightGray">
              Jonathan Walters
            </span>
            <span className="text-[11px] font-medium text-lightGray opacity-50">
              Verified Graduate
            </span>
          </div>
        </article>

        <article className="grid grid-rows-1 gap-y-[22px]">
          <h1 className="text-xl text-white">
            The team was very supportive and kept me motivated
          </h1>

          <p className="text-[13px] font-medium text-lightGray opacity-70">
            “Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love.”
          </p>
        </article>
      </section>

      {/* Testimonial 4 Patrick Abrams */}
      <section className={`${CardStyle} bg-veryDarkBlackishBlue`}>
        <article className="flex items-center gap-4">
          <Image
            src="/image-patrick.jpg"
            alt="Jeremy"
            width={32}
            height={32}
            className={"rounded-full"}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-lightGray">
              Patrick Abrams
            </span>
            <span className="text-[11px] font-medium text-lightGray opacity-50">
              Verified Graduate
            </span>
          </div>
        </article>

        <article className="grid grid-rows-1 gap-y-[22px]">
          <h1 className="text-xl text-white">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>

          <p className="text-[13px] font-medium text-lightGray opacity-70">
            “The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people.”
          </p>
        </article>
      </section>
      
      {/* Testimonial 5 Kira Whittle */}
      <section className={`${CardStyle} bg-white`}>
        <article className="flex items-center gap-4">
          <Image
            src="/image-kira.jpg"
            alt="Jeremy"
            width={32}
            height={32}
            className={"rounded-full"}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-[13px] text-veryDarkGrayishBlue">
              Kira Whittle
            </span>
            <span className="text-[11px] font-medium text-veryDarkGrayishBlue opacity-50">
              Verified Graduate
            </span>
          </div>
        </article>

        <article className="grid grid-rows-1 gap-y-[22px]">
          <h1 className="text-xl text-veryDarkGrayishBlue">
            Such a life-changing experience. Highly recommended!.
          </h1>

          <p className="text-[13px] font-medium text-veryDarkGrayishBlue opacity-70">
            “Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program, The entire curriculum and staff did not disappoint. They
            were very hands-on and i never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my development experience. it certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!”
          </p>
        </article>
      </section>
    </div>
  );
}

export default AllTestimonial
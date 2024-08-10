import Image from "next/image";
import TestimonialCard from "./test/TestimonialCard";

const ListTestimonialCard = () => {
  const dataTestimonials = [
    {
      id: 1,
      image: "/image-daniel.jpg",
      fullName: "Daniel Clifford",
      position: "Verified Graduate",
      title:
        "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
      desc: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                    transition and have heard some people who had an amazing experience here. I signed up for
                    the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12
                    weeks was the best - and most grueling - time of my life. Since completing the course, I’ve
                    successfully switched careers, working as a Software Engineer at a VR startup.”`,
      style: "",
    },
    {
      id: 2,
      image: "/image-jeanette.jpg",
      fullName: "Jeanette Harmon",
      position: "Verified Graduate",
      title: "An overall wonderful and rewarding experience",
      desc: `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for  a  big company. This was one of the best investments I’ve made in myself.”`,
      style: "",
    },
    {
      id: 3,
      image: "/image-jonathan.jpg",
      fullName: "Jonathan Walters",
      position: "Verified Graduate",
      title: "The team was very supportive and kept me motivated",
      desc: `“Thank you for the wonderful experience! I now
              have a job I really enjoy, and make a  good living
              while doing something I love.”`,
    },
    {
      id: 4,
      image: "/image-patrick.jpg",
      fullName: "Patrick Abrams",
      position: "Verified Graduate",
      title:
        "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
      desc: ` “The staff seem genuinely concerned about my
               progress which I find really refreshing. The
               program gave me the confidence necessary to be 
               able to go out in the world and present myself as a capable junior developer. The standard is above the
               rest. You will get the personal attention you
               need from an incredible community of smart and 
               amazing people.” `,
    },
    {
      id: 5,
      image: "/image-kira.jpg",
      fullName: "Kira Whittle",
      position: "Verified Graduate",
      title: "Such a life-changing experience. Highly recommended!",
      desc: `“Before joining the bootcamp, I’ve never written a line of code. I needed  some structure from professionals who can help me learn programming
                step by step. I was encouraged to enroll by a 
                former student of theirs who can only say wonderful things about the program, The entire 
                curriculum and staff did not disappoint. They were very hands-on and i never had to wait long for 
                assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In 
                fact, I’ve often referred to it during interviews as an example of my development experience. it certainly
                helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”`,
    },
  ];
  const CardStyle = "px-[30px] py-[24px] flex flex-col gap-6 rounded-lg";
  return (
    <div className=" lg:max-w-[1110px] grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2  gap-6 xl:grid-cols-4  ">
      {dataTestimonials.map((Testimonial, index) => (
        <section
          key={index}
          className={`${CardStyle} 
                            
                            ${
                              index === 0
                                ? "bg-violet xl:col-span-2 xl:order-1"
                                : ""
                            }
                            ${index === 1 ? "bg-white xl:order-4" : ""}
                            ${
                              index === 2
                                ? "bg-veryDarkGrayishBlue xl:order-2"
                                : ""
                            }
                            ${
                              index === 3
                                ? "bg-veryDarkBlackishBlue xl:col-span-2 xl:order-5"
                                : ""
                            }
                            ${
                              index === 4
                                ? "bg-white xl:row-span-2 xl:order-3"
                                : ""
                            }
                            
                            `}
        >
          <article className="flex items-center gap-4">
            <Image
              src={Testimonial.image}
              alt={Testimonial.fullName}
              width={32}
              height={32}
              className={"rounded-full"}
            />
            <div className="flex flex-col">
              <span
                className={`font-semibold text-[13px] ${
                  index === 1 || index === 4
                    ? "text-veryDarkGrayishBlue"
                    : "text-lightGray"
                }`}
              >
                {Testimonial.fullName}
              </span>
              <span
                className={`text-[11px] font-medium ${
                  index === 1 || index === 4
                    ? "text-veryDarkGrayishBlue"
                    : "text-lightGray"
                }  opacity-50`}
              >
                {Testimonial.position}
              </span>
            </div>
          </article>

          <article className="grid grid-rows-1 gap-y-[22px]">
            <h1
              className={`text-xl ${
                index === 1 || index === 4
                  ? "text-veryDarkBlackishBlue"
                  : "text-white"
              } `}
            >
              {Testimonial.title}
            </h1>

            <p
              className={`text-[13px] font-medium ${
                index === 1 || index === 4
                  ? "text-veryDarkGrayishBlue"
                  : "text-lightGray"
              }  opacity-70`}
            >
              {Testimonial.desc}
            </p>
          </article>
        </section>
      ))}
    </div>
  );
};

export default ListTestimonialCard;

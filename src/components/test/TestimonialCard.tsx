import Image from "next/image";
import Description from "./Description";
import UserInfo from "./UserInfo";

const TestimonialCard = ({ dataTestimonials }: any) => {
  // console.log(dataTestimonials);

  return (
    <section>
      {dataTestimonials.map((dataTestimonial: any) => (
        <div
          key={dataTestimonial.id}
          className="w-[327px] px-[30px] py-[24px] flex flex-col gap-6 mb-6 bg-violet rounded-lg"
        >
          <div className="flex items-center gap-4">
            <Image
              src={dataTestimonial.image}
              alt="Jeremy"
              width={32}
              height={32}
              className={"rounded-full"}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[13px] text-lightGray">
                {dataTestimonial.fullName}
              </span>
              <span className="text-[11px] font-medium text-lightGray opacity-50">
                {dataTestimonial.position}
              </span>
            </div>
          </div>

          <section className="flex flex-col gap-6 ">
            <h1 className="text-xl text-white">{dataTestimonial.title}</h1>

            <p className="text-[13px] font-medium text-lightGray opacity-70">
              {dataTestimonial.desc}
            </p>
          </section>
        </div>
      ))}
    </section>
  );
};

export default TestimonialCard;

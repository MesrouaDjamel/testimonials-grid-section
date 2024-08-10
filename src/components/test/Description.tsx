
const Description = () => {
  type DescriptionProps = {
    title: string;
    desc: string;
  }
  return (
    <section className="grid grid-rows-2 gap-y-[22px]">
      <h1 className="text-xl text-white">
        I received I received a job offer mid- course, and the subjects I
        learned were current, if not more so, in the company I joined. I
        honestly feel I got every penny’s worth.
      </h1>

      <p className="text-[13px] font-medium text-lightGray opacity-70">
        “ I was an EMT for many years before I joined the bootcamp. I’ve been
        looking to make a transition and have heard some people who had an
        amazing experience here. I signed up for the free intro course and found
        it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was
        the best - and most grueling - time of my life. Since completing the
        course, I’ve successfully switched careers, working as a Software
        Engineer at a VR startup.”
      </p>
    </section>
  );
}

export default Description
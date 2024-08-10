import { title } from "process"

const CssGrid = () => {
    const data = [
      {
        index:1,
        title: "Suscriber",
        value: 14,
        height: 32,
      },
      {
        index:2,
        title: "Revenue",
        value: 140000,
        height: 42,
      },
      {
        index:3,
        title: "User Count",
        value: 5000,
        height: 52,
      },
      {
        index:4,
        title: "Product Sales",
        value: 1244314,
        height: 36,
      },
      {
        index:5,
        title: "Web Visits",
        value: 1234232,
        height: 22,
      },
    ];

    const boxStyle =
      "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col justify-center items-center";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 lg:auto-rows-[300px]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${boxStyle} ${
            index === 0 || index === 4 ? "lg:col-span-2" : ""
          } ${index === 2 ? "lg:row-span-2 lg:order-2" : ""} `}
        >
          <h2 className="text-xl text-gray-600">{item.title}</h2>
          <p className="text-2xl font-bold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default CssGrid
import { radioboxes } from "./radioboxes.cofnig";

// make checked radio button little more appearent without using react state

export const Radioboxes: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-sm/6 accent-white">
      <h1 className="mb-10 mt-4 text-3xl font-bold">Choose your visibility</h1>
      <div className="mx-auto max-w-xl space-y-1">
        {radioboxes.map((radiobox, index) => (
          <label
            key={radiobox.id}
            className="flex cursor-pointer items-start gap-x-4 rounded-lg px-5 py-4 text-zinc-950 transition hover:bg-zinc-100 "
            // esly check if the radio button is checked then add the "bg-indigo-500"
            //"has-[:checked]:bg-indigo-500/10"
            //add "group" to the parent element
          >
            <div className="fkex h-6 flex-none items-center ">
              <input
                type="radio"
                name="visibility"
                value={radiobox.value}
                className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-white"
                defaultChecked={index === 0}
              />
            </div>
            <div>
              <div className="text-lg font-bold">
                {/* group-has-[:checked]:text-white hook to the group and check if is checked, then text white */}
                {radiobox.label}
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

import { Disclosure } from "@headlessui/react";
import arrowUp from "../../assets/icons/modal/arrowUp.svg";
import arrowDown from "../../assets/icons/modal/arrowDown.svg";
import educationIcon from "../../assets/icons/input/educationIcon.svg";
//import { InputBox } from "../InputBox";

export const EducationSection = () => {
  return (
    <div className="my-2">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow">
              <span className="flex items-center">
                <img
                  src={educationIcon}
                  alt="Education"
                  className="mr-2 w-8 h-8"
                />
                Education
              </span>
              <span>
                {open ? (
                  <span>
                    <img
                      src={arrowUp}
                      alt="Education"
                      className="mr-2 w-6 h-6"
                    />
                  </span> 
                ) : (
                  <span>
                    <img
                      src={arrowDown}
                      alt="Education"
                      className="mr-2 w-6 h-6"
                    />
                  </span> 
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="my-2 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-center">
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">
                  + Education
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

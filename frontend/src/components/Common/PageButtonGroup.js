import React from "react";

function PageButtonGroup(props) {
  return (
    <div>
   
      <div className="text-right">
              <button
               type="button"
               className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 dark:bg-gray-700 text-base font-medium dark:text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
               onClick={() => props.setOpenDetail(false)}
                
              >
                  test
              </button>
              

      </div>
    </div>
  );
}

export default PageButtonGroup;

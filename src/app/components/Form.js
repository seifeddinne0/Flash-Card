import  GoToQuizButton from "./GoToQuizButton";
function Form(){
    return (
          <div className="pt-14">
            <div className="bg-white flex min-h-full flex-1  items-center flex-col justify-center px-6 py-12 lg:px-8 shadow-lg rounded-lg max-w-lg mx-auto">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Flash Card Web Application  
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label className="block text-sm/6 font-medium text-gray-900">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first_name"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="block text-sm/6 font-medium text-gray-900">
                        Last name
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div>


                    <div>
                    <label className="block text-sm/6 font-medium text-gray-900">
                        choose your level
                      </label>
                    </div>
                   
                    <div  className="mt-5 grid grid-cols-2  gap-4 place-items-center">
                      <div><label className="font-semibold">Level 0</label><input type="radio" name="level" value={"Level0"} className =" mr-5 ml-2"/></div>  
                      <div><label className="font-semibold">A1</label><input type="radio" name="level" value={"Level A1"} className ="mr-5  ml-2"/></div>
                      <div><label className="font-semibold">A2</label><input type="radio" name="level" value={"Level A2"} className ="mr-5  ml-2"/></div>
                      <div><label className="font-semibold">B1</label><input type="radio" name="level" value={"Level B1"} className ="mr-5  ml-2"/></div>
                      <div><label className="font-semibold">B2</label><input type="radio" name="level" value={"Level B2"} className ="mr-5  ml-2"/></div>
                      <div><label className="font-semibold">C1</label><input type="radio" name="level" value={"Level C1"} className ="mr-5  ml-2"/></div>
                      <div><label className="font-semibold">C2</label>< input type="radio" name="level" value={"Level C2"} className ="mr-5  ml-2"/></div>
                    </div>
                  </div>
      
                  <div>
                    <GoToQuizButton/>
                  </div>
                </form>
              </div>
            </div>
          </div> 
    )
}
export default Form;

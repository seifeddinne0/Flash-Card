import  GoToQuizButton from "./GoToQuizButton";
function Form(){
    return (
      <div className="bg-indigo-950 h-screen">
        <div className="pt-24 pr-3 pl-3 ">          
          <form action="" method="POST" className=" bg-white mx-auto  max-w-2xl rounded-lg shadow-xl ">
              <div className="p-6 rounded-lg sm:p-10 ">
                <div>
                    <h1 className="flex justify-center text-2xl montserrat">Flash Cards </h1>
                </div>
            <div className="mb-4">
              <label className="md:ml-12 ml-8 block text-sm/6 font-semibold">First name </label>
              <div className="mt-2.5">
                <input type="text" name="first-name" id="first-name" className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base border-2 border-indigo-700 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"/>
              </div>
            </div>
            <div >
              <label className="md:ml-12 ml-8  block text-sm/6 font-semibold">Last name</label>
              <div className="mt-2.5">
                <input type="text" name="last-name" id="last-name" className="mx-auto w-10/12 block rounded-md text-black px-3.5 py-2 text-base border-2 border-indigo-700 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"/>
              </div>
            </div>
            <h3 className="mt-4 mb-4 flex justify-center text-lg roboto">please enter your level </h3>
            <div  className="mt-5 grid grid-cols-2  gap-4 place-items-center">
            <div><label className="font-semibold">Level 0</label><input type="radio" name="level" value={"level0"} className =" mr-5 ml-2"/></div>  
              <div><label className="font-semibold">A1</label><input type="radio" name="level" value={"A1"} className ="mr-5  ml-2"/></div>
              <div><label className="font-semibold">A2</label><input type="radio" name="level" value={"A2"} className ="mr-5  ml-2"/></div>
              <div><label className="font-semibold">B1</label><input type="radio" name="level" value={"B1"} className ="mr-5  ml-2"/></div>
              <div><label className="font-semibold">B2</label><input type="radio" name="level" value={"B2"} className ="mr-5  ml-2"/></div>
              <div><label className="font-semibold">C1</label><input type="radio" name="level" value={"C1"} className ="mr-5  ml-2"/></div>
              <div><label className="font-semibold">C2</label>< input type="radio" name="level" value={"C2"} className ="mr-5  ml-2"/></div>
            </div>
            <div className="flex justify-center mt-4">
              <GoToQuizButton/>
            </div>
           </div>
           
        </form>
        </div>
   
        </div>
    )
}
export default Form;

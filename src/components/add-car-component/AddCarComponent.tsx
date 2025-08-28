import {saveAction} from "@/services/addCarServerAction";
import Form from "next/form";

const AddCarComponent = () => {
    return (
        <div className="flex flex-col justify-center items-center self-center my-10 mx-auto w-1/3">
            <Form
                action={saveAction}
                className="flex flex-col justify-center w-full min-w-[320px] p-5 gap-10 text-gray-900 box-border bg-gradient-to-l from-[#FFD700] to-inherit border-[1px] border-white shadow-xl rounded-2xl cursor-pointer hover:shadow-2xl"
            >
                <div className="h-[40px]">
                    <input
                        type="text"
                        name="brand"
                        required
                        className="w-full font-bold border border-[#404214] rounded-lg px-3 py-2 outline-none hover:bg-[#bab977]"
                        placeholder="Brand"
                    />
                </div>
                <div className="h-[40px]">
                    <input
                        type="number"
                        name="price"
                        required
                        className="w-full font-bold border border-[#404214] rounded-lg px-3 py-2 outline-none hover:bg-[#bab977]"
                        placeholder="Price"
                    />
                </div>
                <div className="h-[40px]">
                    <input
                        type="number"
                        name="year"
                        required
                        className="w-full font-bold border border-[#404214] rounded-lg px-3 py-2 outline-none hover:bg-[#bab977]"
                        placeholder="Year"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white font-bold flex justify-center items-center w-full h-16 bg-[#bab977] border-[1px] rounded-2xl border-white hover:bg-[#404214] transition"
                >
                    Add Car
                </button>
            </Form>
        </div>
    );
};

export default AddCarComponent;

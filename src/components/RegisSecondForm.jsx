import Button from "./Button";

const RegisSecondForm = () => {
  return (
    <>
      <form className="p-5 flex flex-col gap-2">
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label>Contact Name</label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="relation">Relation</label>
            <select
              id="relation"
              name="relation"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            >
              <option selected hidden disabled value=""></option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="husband">Husband</option>
              <option value="wife">Wife</option>
            </select>
          </div>
        </div>
        <div className="border-b-2 max-w-fit border-b-gray-200">
          <h2 className="text-lg font-semibold">Address</h2>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label>Street Name</label>
            <input
              type="text"
              id="streetName"
              name="streetName"
              placeholder="Jl. Terusan arjuna utara No.1"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>State</label>
            <input
              type="text"
              id="stateName"
              name="stateName"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label>District</label>
            <input
              type="text"
              id="districtName"
              name="districtName"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Country</label>
            <input
              type="text"
              id="countryName"
              name="countryName"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>City</label>
            <input
              type="text"
              id="cityName"
              name="cityName"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label>Mobile Phone</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="081378345100"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Other No.</label>
            <input
              type="text"
              id="secondPhoneNumber"
              name="secondPhoneNumber"
              placeholder="081378345100"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="arifianto.budi@jec.co.id"
              className="border border-gray-300 p-2 rounded-[5px] w-72"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-32">
          <Button
            name={"Save"}
            className={
              "bg-cyan-500 py-2 px-7 w-28 text-white rounded-md shadow-md shadow-gray-400"
            }
          />
          <Button
            name={"Cancel"}
            className={
              "bg-red-500 py-2 px-7 w-28 text-white rounded-md shadow-md shadow-gray-400"
            }
          />
        </div>
      </form>
    </>
  );
};

export default RegisSecondForm;

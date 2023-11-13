import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faTriangleExclamation,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import RegisSecondForm from "../components/RegisSecondForm";

const Registration = () => {
  return (
    <div>
      {/* PAGE HEADER */}
      <div className="flex justify-between py-3 px-5">
        <div>
          <h1 className="font-bold">Registration</h1>
        </div>
        <div className="flex items-center gap-2">
          <p>Registration</p>
          <FontAwesomeIcon
            size="xs"
            color="gray"
            className="cursor-pointer"
            icon={faAngleRight}
          />
          <p className="text-gray-400">New Registration</p>
        </div>
      </div>
      {/* WARNING TEXT */}
      <div>
        <div className="bg-blue-100 py-4 px-3">
          <div className="flex gap-2">
            <FontAwesomeIcon color="orange" icon={faTriangleExclamation} />
            <p className="text-xs italic text-cyan-600 font-semibold">
              1/6 : info : Dr. Waldensius Girsang, SpM (K), Tidak Praktek, 02-11
              OKTOBER 2023, krn Symposium @amsterdam, 2/6 : Dr. Florence Tidak
              Praktek 19-28 Oktober 2023 Cuti info Zr.Kristin
            </p>
          </div>
        </div>
        <hr className="border-cyan-600" />
      </div>
      {/* FIRST FORM */}
      <form className="p-5">
        <div className="flex gap-5 mb-10">
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
        <div>
          <div className="flex gap-14">
            <div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label>Registration No.</label>
                  <input
                    type="text"
                    id="registrationNo"
                    name="registrationNo"
                    value={"REG/OP/231005-0001"}
                    className="text-cyan-600 border bg-blue-200 font-semibold border-cyan-600 p-2 rounded-[5px] w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Time</label>
                  <div className="flex items-center border border-red-600 p-2 rounded-[5px] w-[134px]">
                    <input
                      type="text"
                      id="time1"
                      name="time1"
                      value={`18/08/1982`}
                      className="w-24"
                    />
                    <div className="border p-1 border-red-400 w-5 flex justify-center rounded-full">
                      <FontAwesomeIcon
                        size="xs"
                        color="red"
                        className="cursor-pointer"
                        icon={faExclamation}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">Time</label>
                  <div className="flex items-center border border-red-600 p-2 rounded-[5px] w-[134px]">
                    <input
                      type="text"
                      id="time2"
                      name="time2"
                      value={"10:50"}
                      className="w-24"
                    />
                    <div className="border p-1 border-red-400 w-5 flex justify-center rounded-full">
                      <FontAwesomeIcon
                        size="xs"
                        color="red"
                        className="cursor-pointer"
                        icon={faExclamation}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label>Shift.</label>
                  <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                    <option value="morning">Morning</option>
                    <option value="morning">Afternoon</option>
                    <option value="morning">Evening</option>
                    <option value="morning">Night</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Service Unit</label>
                  <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                    <option value="">Eye Clinic</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label>Visit Type</label>
                  <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-96">
                    <option value="">Consultation / Examination</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label>Que Lobby</label>
                  <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-48">
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label>Patient</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={"PARAMA ADWITIYA"}
                    className="text-cyan-600 border border-cyan-600 font-semibold p-2 rounded-[5px] w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>MR No.</label>
                  <input
                    type="text"
                    id="noMR"
                    name="noMR"
                    value={"002-014-56-89"}
                    className="text-cyan-600 border border-cyan-600 font-semibold p-2 rounded-[5px] w-36"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label>Appointment With.</label>
                  <input
                    type="text"
                    id="appointmentWith"
                    name="appointmentWith"
                    value={"DR.dr.johan A.Hutauruk, Sp. M(k)"}
                    className="text-cyan-600 border border-cyan-600 font-semibold p-2 rounded-[5px] w-72"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Room</label>
                  <input
                    type="text"
                    id="room"
                    name="room"
                    value={"Lt.2 Room 2B"}
                    className="text-cyan-600 border border-cyan-600 font-semibold p-2 rounded-[5px] w-36"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <div className="flex gap-14">
              <div>
                <h2 className="font-semibold text-lg mb-5">
                  Appointment Info :
                </h2>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Appointment No.</label>
                    <input
                      type="text"
                      id="registrationNo"
                      name="registrationNo"
                      value={"CP20230926-5824"}
                      className="text-cyan-600 border bg-blue-200 font-semibold border-cyan-600 p-2 rounded-[5px] w-72"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Time</label>
                    <div className="flex items-center border border-red-600 p-2 rounded-[5px] w-[134px]">
                      <input
                        type="text"
                        id="time1"
                        name="time1"
                        value={`18/08/1982`}
                        className="w-24"
                      />
                      <div className="border p-1 border-red-400 w-5 flex justify-center rounded-full">
                        <FontAwesomeIcon
                          size="xs"
                          color="red"
                          className="cursor-pointer"
                          icon={faExclamation}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white">Time</label>
                    <div className="flex items-center border border-red-600 p-2 rounded-[5px] w-[134px]">
                      <input
                        type="text"
                        id="time2"
                        name="time2"
                        value={"10:50"}
                        className="w-24"
                      />
                      <div className="border p-1 border-red-400 w-5 flex justify-center rounded-full">
                        <FontAwesomeIcon
                          size="xs"
                          color="red"
                          className="cursor-pointer"
                          icon={faExclamation}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-7 mt-5">
                  <div className="flex flex-col gap-2 text-center">
                    <label>Queue No</label>
                    <div className="border p-2 rounded-md border-gray-300">
                      <div className="bg-gray-100 text-center rounded-md p-2">
                        <p className="text-6xl text-emerald-500">03</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Notes</label>
                    <textarea
                      className="w-[29.5rem] h-[5.8rem] border border-red-400 rounded-md bg-yellow-100"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-5">Payment Info :</h2>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Patient Category</label>
                    <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                      <option value="">Pasien Umum / Self</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Guarantor</label>
                    <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                      <option value="">YAKES TELKOM</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>COB</label>
                    <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                      <option value="">BPJS</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Method.</label>
                    <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-72">
                      <option value="">Coverage</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white">COB</label>
                    <input
                      type="text"
                      id="time1"
                      name="time1"
                      className="flex items-center border border-gray-300 p-2 rounded-[5px] w-72"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2">
                    <label>Marketing Promotion</label>
                    <select className="border font-semibold border-gray-300 p-2 rounded-[5px] w-[37.5rem]">
                      <option value="">Konsul Tele Konsultan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* SECOND FORM */}
      <div className="flex px-3">
        <div className="border-b-2 border-b-cyan-600 cursor-pointer">
          <p className="py-2 px-5 text-cyan-600 font-semibold">
            Emergency Contact
          </p>
        </div>
        <div className="border-b-2 border-b-gray-100 cursor-pointer">
          <p className="py-2 px-5 text-gray-500">Patient Risk</p>
        </div>
      </div>
      <RegisSecondForm />
      <footer className="flex bg-gray-100 text-gray-400 p-4 justify-between">
        <p>2022 &copy; Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default Registration;

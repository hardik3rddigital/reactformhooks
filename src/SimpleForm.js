import React from "react";
import { useForm } from "react-hook-form";

function SimpleForm() {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      selectedstate: "",
      agree: "",
      sendme: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="SimpleForm">
      <div className="container py-5">
        <div className="card border-0 shadow bg-primary text-white p-4 w-75 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                {...register("fullname")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                {...register("phone")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password")}
                autoComplete="on"
              />
            </div>

            <div className="form-group mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  defaultValue="male"
                  {...register("gender")}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  defaultValue="female"
                  {...register("gender")}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  defaultValue="other"
                  {...register("gender")}
                />
                <label className="form-check-label" htmlFor="other">
                  other
                </label>
              </div>
            </div>
            <div className="form-group mb-3">
              <select
                className="custom-select form-select"
                defaultValue=""
                {...register("selectedstate")}
              >
                <option value="">Select your State</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <select
                className="custom-select form-select"
                defaultValue=""
                {...register("state.city")}
              >
                <option value="">Select your City</option>
                <option value="Surat">Surat</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Baroda">Baroda</option>
                <option value="Gandhinagar">Gandhinagar</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <select
                className="custom-select form-select"
                defaultValue=""
                {...register("state.area")}
              >
                <option value="">Select your Area</option>
                <option value="Bapunagar">Bapunagar</option>
                <option value="Viratnagar">Viratnagar</option>
                <option value="Nikol">Nikol</option>
                <option value="Naroda">Naroda</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  defaultValue="agree"
                  {...register("agree", {})}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree all terms and conditons
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="updates"
                  {...register("sendMe", {})}
                />
                <label className="form-check-label" htmlFor="updates">
                  Send me latest Bootstrap updates
                </label>
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="Hobbie">Hobbie</label>
              <input
                type="text"
                className="form-control"
                id="Hobbie"
                {...register("Hobbie[0]")}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="Hobbie">Hobbie</label>
              <input
                type="text"
                className="form-control"
                id="Hobbie"
                {...register("Hobbie[1]")}
              />
            </div>
            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;

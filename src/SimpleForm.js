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

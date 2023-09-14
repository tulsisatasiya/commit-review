import React, { useState } from "react";

const Revirw = () => {
    const Time = new Date().toLocaleTimeString();
    const crrdate = new Date().toLocaleDateString();
    const [data, setdata] = useState({
        name: "",
        text: "",
    });

    const change = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const [final, setfinal] = useState([]);
    const submitdata = () => {
        setfinal([...final, data]);
    };

    return (
        <div>
            <section>
                <div className="container  py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="card">
                                <div
                                    className="card-footer py-3 border-0"
                                    style={{ backgroundColor: "#f8f9fa" }}>
                                    <div className="d-flex flex-start w-100">
                                        <img
                                            className="rounded-circle shadow-1-strong me-3"
                                            src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                            alt="avatar"
                                            width="40"
                                            height="40"
                                        />
                                        <div className="form-outline w-100">
                                            <label
                                                htmlFor=""
                                                className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control mb-3"
                                                name="name"
                                                onChange={change}
                                            />
                                            <label
                                                className="form-label"
                                                htmlFor="textAreaExample">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="textAreaExample"
                                                rows="4"
                                                name="text"
                                                onChange={change}
                                                style={{
                                                    background: "#fff",
                                                }}></textarea>
                                        </div>
                                    </div>
                                    <div className="float-end mt-2 pt-1">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-sm mx-3"
                                            onClick={submitdata}>
                                            Post comment
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger btn-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            {final.map((val, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="card-body"
                                        style={{
                                            border: "2px solid #eee",
                                            margin: "5px 0px 5px 0 ",
                                        }}>
                                        <div className="d-flex flex-start align-items-center">
                                            <img
                                                className="rounded-circle shadow-1-strong me-3"
                                                src="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                                                alt="avatar"
                                                width="60"
                                                height="60"
                                            />
                                            <div>
                                                <h6 className="fw-bold text-primary mb-1">
                                                    {val.name}
                                                </h6>
                                                <p className="text-muted small mb-2">
                                                    Date:-{crrdate}
                                                </p>
                                                <p className="text-muted small mb-2">
                                                    Time:- {Time}
                                                </p>

                                                <p className="mt-3 mb-3 pb-2">
                                                    {val.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Revirw;

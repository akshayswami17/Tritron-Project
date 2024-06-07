import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS Files/UpdatePass.css";
export default function UpdatePass() {
  const [msg, setMsg] = useState(""); //updated
  const [user, setUser] = useState(""); //state for username
  const [oldpass, setOldPass] = useState(""); //old password
  const [newpass, setNewPass] = useState(""); //new password
  const nav = useNavigate();
  const udpateFun = (e) => {
    e.preventDefault();
    const reqOption = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        // username:user,
        username: localStorage.getItem("user"),
        oldpassword: oldpass,
        newpassword: newpass,
      }),
    };
    fetch("http://localhost:9000/update", reqOption)
      .then((resp) => resp.text())
      .then((data) => {
        setMsg(data);
      });
  };
  // if(msg=="updated")
  // nav("/login")

  const handleReset = () => {
    setUser("");
    setOldPass("");
    setNewPass("");
    setMsg("");
  };

  return (
    <div>
      <div className="update-password-form">
        <form onSubmit={UpdatePass}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              // value={user}
              value={localStorage.getItem("user")}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label">
              Old Password:
            </label>
            <input
              type="password"
              id="oldPassword"
              className="form-control"
              placeholder="Enter old password"
              value={oldpass}
              onChange={(e) => setOldPass(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              placeholder="Enter new password"
              value={newpass}
              onChange={(e) => setNewPass(e.target.value)}
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={udpateFun}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
          <p className="mt-3">{msg}</p>
        </form>
      </div>
    </div>
  );
}
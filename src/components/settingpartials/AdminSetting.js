import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function AdminSetting({ setErrorMessage }) {
    const [editpass, setEditpass] = useState(false)
    const [editemail, setEditemail] = useState(false)
    const [addAdmins, setAddAdmins] = useState(false)
    const [admin, setAdmins] = useState([])
    const { register, handleSubmit, errors, watch } = useForm()
    const generateAdminKey = async () => {

    }
    const addNewAdmins = async values => {
        try {
            const { data } = await axios.post('/api/admin/addadmin', values)
            if (data.success) {
                setAdmins(data.admins)
            } else {
                setErrorMessage(data.message)
            }

        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="settingform" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Admin Settings</h1>
            <form className="form">
                <div className="form__control">
                    <label>Change Password</label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input disabled={!editpass} type="password" style={{ minWidth: "300px" }} />
                        <button type="button" className="action__button" onClick={() => setEditpass(ep => !ep)}>{editpass ? "Cancel" : "Edit Password"}</button>
                        {editpass ? (<button className="action__button" type="submit">Change Password</button>) : null}
                    </div>
                </div>
            </form>
            <form className="form">
                <div className="form__control">
                    <label>Change Email</label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input id="password" disabled={!editemail} type="password" style={{ minWidth: "300px" }} />
                        <button type="button" className="action__button" onClick={() => setEditemail(ee => !ee)}>{editemail ? "Cancel" : "Edit Email"}</button>
                        {editemail ? (<button className="action__button" type="submit">Change Emailmail</button>) : null}
                    </div>
                </div>
            </form>
            <div>
                <button type="button" className="action__button" onClick={generateAdminKey}>Generate admin key</button>
            </div>
            <div style={{ marginTop: "25px" }}>
                <button type="button" className="action__button" onClick={() => setAddAdmins(aa => !aa)}>{addAdmins ? "Cancel" : "Add admins"}</button>
            </div>
            {addAdmins && (
                <form style={{ marginTop: "25px" }} className="form" onSubmit={handleSubmit(addNewAdmins)}>
                    <h1>Add an admin</h1>
                    <div className="form__control">
                        <label htmlFor="name">Admin name</label>
                        <input name="name" id="name" type="text" ref={register({ required: true })} />
                        {errors.name?.type === "required" && <small>Name is required to register</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="email">Admin email</label>
                        <input name="email" id="email" type="email" ref={register({ required: true })} />
                        {errors.email?.type === "required" && <small>Email is required to register</small>}
                    </div>
                    <div className="form__control">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" ref={register({ required: true, minLength: 8 })} />
                        {errors.password?.type === "required" && <small>Password is required to register</small>}
                        {errors.password?.type === "minLength" && <small>Password mush have at least 8 character</small>}                    </div>
                    <div className="form__control">
                        <label htmlFor="confirmpassword">Confirm password </label>
                        <input id="confirmpassword" name="confirmpassword" type="password" ref={register({
                            required: true,
                            minLength: 8,
                            validate: value => value === watch('password') || "password don't match"
                        })} />
                        {errors.confirmpassword?.type === "required" && <small>Type the password again to register</small>}
                        {errors.confirmpassword?.type === "minLength" && <small>Password mush have at least 8 character</small>}
                        {errors.confirmpassword?.type === "validate" && <small>{errors.confirmpassword?.message}</small>}
                    </div>
                    <div className="form__control">
                        <button className="action__button" type="submit">Create Admin</button>
                    </div>
                </form>
            )}
        </div>
    )
}

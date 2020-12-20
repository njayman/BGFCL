import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
//import { addDataToForm } from '../../../redux/actions/FormAction';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
export default function FormFive() {
    const { formobject } = useSelector(state => state.form)
    const { user } = useSelector(state => state.auth)
    const { handleSubmit, register } = useForm()
    //const dispatch = useDispatch()
    const history = useHistory()
    const nextStep = async values => {
        let datas = formobject;
        //dispatch(addDataToForm({ formfive: values }))
        //console.log(formobject)
        datas.push({ formdata: values })
        console.log(datas)
        try {
            const { data } = await axios.put(`/api/user/requesthomeloan/${user.id}`, {
                loanrequest: datas
            })
            console.log(data.message)
            if (data.success) {
                history.push('/')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        console.log(formobject)
        //console.log(user)
    }, [formobject])
    return (
        <div onSubmit={handleSubmit(nextStep)} className="requestloan">
            <h2>গ্যারান্টর হিসেবে গৃহনির্মান/জমি-ফ্ল্যাট ক্রয়ের জন্য</h2>
            <h3>জামিনদার কর্তৃক অঙ্গীকারনামা/মুচলেকা (বন্ড)</h3>
            <form className="formfive">
                <p className="inlinefields">অদ্য <input type="month" name="guarentordate" ref={register} /> মাস/সন (দুই হাজার এবং <input type="text" name="guarentordateinword" ref={register} /> খ্রিষ্টীয় সন) আমি নাম: <input type="text" name="guarentorname" ref={register} />, পদবি:<input type="text" name="guarentorrank" ref={register} />, কর্মস্থল:<input type="text" name="guarentordesignation" ref={register} />, বর্তমান ঠিকানা:<input type="text" name="guarentorpresentaddress" ref={register} />, স্থায়ী ঠিকানা:গ্রাম:<input type="text" name="guarentorvilage" ref={register} />, ডাকঘর:<input type="text" name="guarentorpo" ref={register} />,থানা:<input type="text" name="guarentorthana" ref={register} />, উপজেলা :<input type="text" name="guarentorupojela" ref={register} />, জেলা:<input type="text" name="guarentorjela" ref={register} />, এতদ্বারা রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল) - কে নিঃশর্তভাবে (Unconditional) মুচলেকা প্রদানপূর্বক এই মর্মে অঙ্গীকার করছি যে, কোম্পানির পত্র নং <input type="text" name="companypapernong" ref={register} />, তারিখ:<input type="date" />,অনুযায়ী আরপিজিসিএল-এ কর্মরত জনাব/বেগম <input type="text" name="guarentorname" ref={register} /> পিতা: <input type="text" name="guarentordate" ref={register} /> পদবি:<input type="text" name="guarentorrank" ref={register} /> কর্মস্থল:<input type="text" name="guarentorworkingplace" ref={register} /> এর অনুকূলে গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রোমের জন্য <input type="number" name="guarentormoney" ref={register} /> টাকা (<input type="text" name="guarentormoneyinword" ref={register} />) ঋণ/অগ্রিম মঞ্জুর করা হয়। </p>
                <label><input type="checkbox" />আমি সুস্থ শরীর ও স্বজ্ঞানে ঋণগ্রহীতা এবং সাক্ষীগণের উপস্থিতিতে এ অঙ্গীকারনামা প্রদান করলাম।</label>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <fieldset>
                        <legend>গ্যারান্টরের নাম ও স্বাক্ষর</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>গ্যারান্টরের নাম ও স্বাক্ষর</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" />
                        </div>
                    </fieldset>
                </div>
                <fieldset style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                    <legend>সাক্ষীগণ</legend>
                    <fieldset>
                        <legend>1</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="guarentorwitnessname" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="guarentorwitnessfathername" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" name="guarentorwitnessrank" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnesspresentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnessparmanentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="guarentorwitnessnid" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" name="guarentorwitnessphoneno" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="guarentorwitnessemail" ref={register} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>2</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="guarentorwitnessnametwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="guarentorwitnessfathernametwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" name="guarentorwitnessranktwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnesspresentaddresstwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnessparmanentaddresstwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="guarentorwitnessnidtwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" name="guarentorwitnessphonenotwo" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="guarentorwitnessemailtwo" ref={register} />
                        </div>
                    </fieldset>
                </fieldset>
                <div className="form__control">
                    <button type="submit" className="action__button">Next</button>
                </div>
            </form>
        </div>
    )
}

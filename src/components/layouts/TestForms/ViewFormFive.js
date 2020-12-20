import React from 'react'
export default function ViewFormFive({ loaninfo }) {
    const nextStep = async e => {
        e.preventDefault();
    }

    return (
        <div onSubmit={nextStep} className="requestloan">
            <h2>গ্যারান্টর হিসেবে গৃহনির্মান/জমি-ফ্ল্যাট ক্রয়ের জন্য</h2>
            <h3>জামিনদার কর্তৃক অঙ্গীকারনামা/মুচলেকা (বন্ড)</h3>
            <form className="formfive">
                <p className="inlinefields">অদ্য <input type="month" name="guarentordate" readOnly defaultValue={loaninfo?.formdata?.guarentordate} /> মাস/সন (দুই হাজার এবং <input type="text" defaultValue={loaninfo?.formdata?.guarentordateinword} name="guarentordateinword" readOnly /> খ্রিষ্টীয় সন) আমি নাম: <input type="text" name="guarentorname" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, পদবি:<input type="text" name="guarentorrank" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, কর্মস্থল:<input type="text" name="guarentordesignation" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, বর্তমান ঠিকানা:<input type="text" name="guarentorpresentaddress" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, স্থায়ী ঠিকানা:গ্রাম:<input type="text" name="guarentorvilage" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, ডাকঘর:<input type="text" name="guarentorpo" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />,থানা:<input type="text" name="guarentorthana" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, উপজেলা :<input type="text" name="guarentorupojela" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, জেলা:<input type="text" name="guarentorjela" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, এতদ্বারা রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল) - কে নিঃশর্তভাবে (Unconditional) মুচলেকা প্রদানপূর্বক এই মর্মে অঙ্গীকার করছি যে, কোম্পানির পত্র নং <input type="text" name="companypapernong" readOnly defaultValue={loaninfo?.formdata?.guarentorname} />, তারিখ:<input type="date" />,অনুযায়ী আরপিজিসিএল-এ কর্মরত জনাব/বেগম <input type="text" name="guarentorname" readOnly defaultValue={loaninfo?.formdata?.guarentorname} /> পিতা: <input type="text" name="guarentordate" readOnly /> পদবি:<input type="text" name="guarentorrank" readOnly /> কর্মস্থল:<input type="text" name="guarentorworkingplace" readOnly /> এর অনুকূলে গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রোমের জন্য <input type="number" name="guarentormoney" readOnly /> টাকা (<input type="text" name="guarentormoneyinword" readOnly />) ঋণ/অগ্রিম মঞ্জুর করা হয়। </p>
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
                            <input type="text" name="guarentorwitnessname" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessname} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="guarentorwitnessfathername" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessfathername} />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" name="guarentorwitnessrank" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessrank} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnesspresentaddress" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnesspresentaddress} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnessparmanentaddress" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessparmanentaddress} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="guarentorwitnessnid" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessnid} />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" name="guarentorwitnessphoneno" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessphoneno} />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="guarentorwitnessemail" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessemail} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>2</legend>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="guarentorwitnessnametwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessnametwo} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="guarentorwitnessfathernametwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessfathernametwo} />
                        </div>
                        <div className="form__control">
                            <label>পদবি</label>
                            <input type="text" name="guarentorwitnessranktwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessranktwo} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnesspresentaddresstwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnesspresentaddresstwo} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="guarentorwitnessparmanentaddresstwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessparmanentaddresstwo} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="guarentorwitnessnidtwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessnidtwo} />
                        </div>
                        <div className="form__control">
                            <label>ফোন নং</label>
                            <input type="tel" name="guarentorwitnessphonenotwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessphonenotwo} />
                        </div>
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="guarentorwitnessemailtwo" readOnly defaultValue={loaninfo?.formdata?.guarentorwitnessemailtwo} />
                        </div>
                    </fieldset>
                </fieldset>
                <div className="form__control">
                    <button type="button" style={{ background: "red" }} className="action__button">Reject</button>
                    <button type="submit" className="action__button">Approve</button>
                </div>
            </form>
        </div>
    )
}

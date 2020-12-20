import React from 'react'

export default function ViewFormTwo({ setStep, loaninfo }) {

    const nextStep = e => {
        e.preventDefault();
        setStep(3)
    }
    return (
        <div className="requestloan">
            <form className="formtwo" onSubmit={nextStep}>
                <h2>মনোনীত ব্যক্তি/ব্যক্তিবর্গের ঘোষণা</h2>
                <p className="inlinefields">অদ্য <input type="month" name="nomineesigndate" defaultValue={loaninfo?.formdata?.nomineesigndate} /> মাস সন <input type="number" name="nomineesignyear" />( দুই  হাজার এবং <input type="text" name="nomineesignyearinword" /> খ্রিষ্টীয়  সন) আমি/আমরা <input type="text" name="nomineesignname" /> রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর কর্মকর্তা/কর্মচারী <input type="text" name="lendernamepre" /> জনাব/বেগম <input type="text" name="lendername" /> -এর স্ত্রী/স্বামী-পুত্র-কন্যা/ভাই-বোন, এই মর্মে অঙ্গীকার করছি যে, আমার/আমাদের <input type="text" name="nomineedeath" /> মৃত্যু হলে কোম্পানি হতে গৃহীত গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রয়ের জন্য ঋণের অর্থ বা বকেয়া অর্থ <input type="number" name="nomineelending" /> টাকা <input type="text" name="nomineelendinginword" /> তার (ঋণ গ্রহীতা) প্রভিডেন্ট ফান্ড/গ্র্যাচুইটি/পেনশন/গ্রুপ বীমা বা অন্যবিধ খাতে কোমপানি হতে আমি/আমাদের পাওনা অংশ হতে পরিশোধের নিমিত সমদ্বয়ের  জন্য আমার/আমাদের কোন আপত্তি থাকবেনা এবং আমি/আমরা এতদ্বারা নিঃশর্তভাবে আরপিজিসিএল-কে এই উদ্দেশ্যে ক্ষমতা অর্পণ করিলাম:</p>

                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>আমি/আমরা উপর্যুক্ত তারিখ ও সোনে নিম্নোক্ত সাক্ষীদের উপস্থিতিতে স্বাক্ষর করলাম:</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input readOnly type="text" name="witnessonename" defaultValue={loaninfo?.formdata?.witnessonename} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input readOnly type="text" name="witnessonefathername" defaultValue={loaninfo?.formdata?.witnessonefathername} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input readOnly type="text" name="witnessonenid" defaultValue={loaninfo?.formdata?.witnessonenid} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessonepresentaddress" defaultValue={loaninfo?.formdata?.witnessonepresentaddress} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessoneparmanentaddress" defaultValue={loaninfo?.formdata?.witnessoneparmanentaddress} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input readOnly type="tel" name="witnessonephoneno" defaultValue={loaninfo?.formdata?.witnessonephoneno} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input readOnly type="email" name="witnessoneemail" defaultValue={loaninfo?.formdata?.witnessoneemail} />
                        </div >
                    </div>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input readOnly type="text" name="witnesstwoname" defaultValue={loaninfo?.formdata?.witnesstwoname} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input readOnly type="text" name="witnesstwofathername" defaultValue={loaninfo?.formdata?.witnesstwofathername} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input readOnly type="text" name="witnesstwonid" defaultValue={loaninfo?.formdata?.witnesstwonid} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea readOnly type="text" name="witnesstwopresentaddress" defaultValue={loaninfo?.formdata?.witnesstwopresentaddress} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea readOnly type="text" name="witnesstwoparmanentaddress" defaultValue={loaninfo?.formdata?.witnesstwoparmanentaddress} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input readOnly type="tel" name="witnesstwophoneno" defaultValue={loaninfo?.formdata?.witnesstwophoneno} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input readOnly type="email" name="witnesstwoemail" defaultValue={loaninfo?.formdata?.witnesstwoemail} />
                        </div >
                    </div >
                </fieldset>
                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>সাক্ষী</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input readOnly type="text" name="witnessthreename" defaultValue={loaninfo?.formdata?.witnessthreename} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input readOnly type="text" name="witnessthreefathername" defaultValue={loaninfo?.formdata?.witnessthreefathername} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input readOnly type="text" name="witnessthreenid" defaultValue={loaninfo?.formdata?.witnessthreenid} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessthreepresentaddress" defaultValue={loaninfo?.formdata?.witnessthreepresentaddress} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessthreeparmanentaddress" defaultValue={loaninfo?.formdata?.witnessthreeparmanentaddress} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input readOnly type="tel" name="witnessthreephoneno" defaultValue={loaninfo?.formdata?.witnessthreephoneno} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input readOnly type="email" name="witnessthreeemail" defaultValue={loaninfo?.formdata?.witnessthreeemail} />
                        </div >
                    </div >
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input readOnly type="text" name="witnessfourname" defaultValue={loaninfo?.formdata?.witnessfourname} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input readOnly type="text" name="witnessfourfathername" defaultValue={loaninfo?.formdata?.witnessfourfathername} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input readOnly type="text" name="witnessfournid" defaultValue={loaninfo?.formdata?.witnessfournid} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessfourpresentaddress" defaultValue={loaninfo?.formdata?.witnessfourpresentaddress} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea readOnly type="text" name="witnessfourparmanentaddress" defaultValue={loaninfo?.formdata?.witnessfourparmanentaddress} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input readOnly type="tel" name="witnessfourphoneno" defaultValue={loaninfo?.formdata?.witnessfourphoneno} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input readOnly type="email" name="witnessfouremail" defaultValue={loaninfo?.formdata?.witnessfouremail} />
                        </div >
                    </div >
                </fieldset>
                <div className="form__control">
                    <button type="submit" className="action__button">Next</button>
                </div>
            </form >
        </div>
    )
}

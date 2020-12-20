import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormTwo({ setStep }) {
    const { handleSubmit, register } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formdata: values }))
        setStep(3)
    }
    return (
        <div className="requestloan">
            <form className="formtwo" onSubmit={handleSubmit(nextStep)}>
                <h2>মনোনীত ব্যক্তি/ব্যক্তিবর্গের ঘোষণা</h2>
                <p className="inlinefields">অদ্য <input type="month" name="nomineesigndate" ref={register} /> মাস সন <input type="number" name="nomineesignyear" ref={register} />( দুই  হাজার এবং <input type="text" name="nomineesignyearinword" ref={register} /> খ্রিষ্টীয়  সন) আমি/আমরা <input type="text" name="nomineesignname" ref={register} /> রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর কর্মকর্তা/কর্মচারী <input type="text" name="lendernamepre" ref={register} /> জনাব/বেগম <input type="text" name="lendername" ref={register} /> -এর স্ত্রী/স্বামী-পুত্র-কন্যা/ভাই-বোন, এই মর্মে অঙ্গীকার করছি যে, আমার/আমাদের <input type="text" name="nomineedeath" ref={register} /> মৃত্যু হলে কোম্পানি হতে গৃহীত গৃহ নির্মাণ/ জমি-ফ্ল্যাট ক্রয়ের জন্য ঋণের অর্থ বা বকেয়া অর্থ <input type="number" name="nomineelending" ref={register} /> টাকা <input type="text" name="nomineelendinginword" ref={register} /> তার (ঋণ গ্রহীতা) প্রভিডেন্ট ফান্ড/গ্র্যাচুইটি/পেনশন/গ্রুপ বীমা বা অন্যবিধ খাতে কোমপানি হতে আমি/আমাদের পাওনা অংশ হতে পরিশোধের নিমিত সমদ্বয়ের  জন্য আমার/আমাদের কোন আপত্তি থাকবেনা এবং আমি/আমরা এতদ্বারা নিঃশর্তভাবে আরপিজিসিএল-কে এই উদ্দেশ্যে ক্ষমতা অর্পণ করিলাম:</p>

                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>আমি/আমরা উপর্যুক্ত তারিখ ও সোনে নিম্নোক্ত সাক্ষীদের উপস্থিতিতে স্বাক্ষর করলাম:</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="witnessonename" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="witnessonefathername" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="witnessonenid" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="witnessonepresentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="witnessoneparmanentaddress" ref={register} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" name="witnessonephoneno" ref={register} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="witnessoneemail" ref={register} />
                        </div >
                    </div>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="witnesstwoname" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="witnesstwofathername" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="witnesstwonid" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="witnesstwopresentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="witnesstwoparmanentaddress" ref={register} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" name="witnesstwophoneno" ref={register} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="witnesstwoemail" ref={register} />
                        </div >
                    </div >
                </fieldset>
                <fieldset style={{ display: "flex", flexDirection: "row" }}>
                    <legend>সাক্ষী</legend>
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="witnessthreename" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="witnessthreefathername" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="witnessthreenid" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="witnessthreepresentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="witnessthreeparmanentaddress" ref={register} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" name="witnessthreephoneno" ref={register} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="witnessthreeemail" ref={register} />
                        </div >
                    </div >
                    <div style={{ width: "100%", padding: "20px" }}>
                        <div className="form__control">
                            <label>নাম</label>
                            <input type="text" name="witnessfourname" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>পিতার নাম</label>
                            <input type="text" name="witnessfourfathername" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>জাতীয় পরিচয়পত্র নম্বর</label>
                            <input type="text" name="witnessfournid" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>বর্তমান ঠিকানা</label>
                            <textarea type="text" name="witnessfourpresentaddress" ref={register} />
                        </div>
                        <div className="form__control">
                            <label>স্থায়ী ঠিকানা</label>
                            <textarea type="text" name="witnessfourparmanentaddress" ref={register} />
                        </div >

                        <div className="form__control">
                            <label>মোবাইল ফোন</label>
                            <input type="tel" name="witnessfourphoneno" ref={register} />
                        </div >
                        <div className="form__control">
                            <label>ইমেইল</label>
                            <input type="email" name="witnessfouremail" ref={register} />
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

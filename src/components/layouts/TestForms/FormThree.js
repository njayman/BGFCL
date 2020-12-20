import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addDataToForm } from '../../../redux/actions/FormAction';

export default function FormThree({ setStep }) {
    const { handleSubmit, register } = useForm()
    const dispatch = useDispatch()
    const nextStep = values => {
        dispatch(addDataToForm({ formdata: values }))
        setStep(4)
    }
    return (
        <div className="requestloan">
            <form onSubmit={handleSubmit(nextStep)} className="formthree">
                <h2>পক্ষত্রয়ের মধ্যে (between)</h2>

                <h3>প্রথম পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" name="partonename" ref={register} /> পিতা/স্বামী: <input type="text" name="partonefathername" ref={register} /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" name="partonereligion" ref={register} /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" name="partonebashinda" ref={register} /> থানাধীন জেলা:<input type="text" name="partonejela" ref={register} />, উপজেলা:<input type="text" name="partoneupojela" ref={register} /> বর্তমান ঠিকানা / প্রতিষ্ঠান <input type="text" name="partoneaddress" ref={register} /> (অতঃপর বলা হবে বিক্রেতা, যার প্রকাশ (এক্সপ্রেশন) বোঝাবে এবং অন্তর্ভুক্তি হবে তার উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (One Part)।</p>
                <h3>দ্বিতীয় পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" name="parttwoname" ref={register} /> পিতা/স্বামী: <input type="text" name="parttwofathername" ref={register} /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" name="parttworeligion" ref={register} /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" name="parttwobashinda" ref={register} /> থানাধীন জেলা:<input type="text" name="parttwojela" ref={register} />, উপজেলা:<input type="text" name="parttwoupojela" ref={register} /> বর্তমান ঠিকানা <input type="text" name="parttwoaddress" ref={register} /> পদবি:<input type="text" name="parttworank" ref={register} />, আরপিজিসিএল (অতঃপর বলা হবে 'ক্রেতা', যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে তার মনোনীত ব্যক্তি (Nominee),উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (Second Part)।</p>
                <h3>তৃতীয় পক্ষ</h3>
                <p>রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর পক্ষ প্রতিনিধিত্ব করবেন কোম্পানি সচিব (অতঃপর বলা হবে 'আরপিজিসিএল' যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে বৈধ প্রতিনিধি) - তৃতীয় পক্ষ (Third Part)।</p>
                <p className="inlinefields">যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটের একক এবং সম্পূর্ণ মালিক এবং যা তার ভোগদখলে আছে, যার আয়তন <input type="text" name="landarea" ref={register} /> বর্গফুট, অথবা <input type="text" name="landkatha" ref={register} /> কাঠা/শতাংশ, দাগ নং <input type="text" name="landdagno" ref={register} />, মৌজা: <input type="text" name="landmouja" ref={register} /> থানাধীন <input type="text" name="landthana" ref={register} /> জেলা,<input type="text" name="landjela" ref={register} /> উপজেলার অন্তর্ভুক্ত এবং যার বর্ণনা নিম্নোক্ত তালিকায় (Schedule) উল্লিখিত। </p>
                <p>এবং যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটটি বিক্রয় করতে ইচ্ছুক এবং 'ক্রেতা' উল্লেখিত জমি/ফ্ল্যাটটি ক্রয় করতে ইচ্ছুক (অতঃপর 'হস্তান্তর জমি/ফ্ল্যাট' (Demised Plot) বলে উল্লেখ করা হবে) যা নিম্নোক্ত তালিকাতে বর্ণিত হয়েছে এবং যা সম্পূর্ণভাবে সকল দায়ভার অভিযোগমুক্ত।</p>
                <fieldset style={{ display: 'flex', flexDirection: "row" }}>
                    <legend>সম্পত্তির তালিকা (Schedule)</legend>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>জেলা/বিভাগ</label>
                                <input type="text" name="schedulejela" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>তৌজি নং</label>
                                <input type="text" name="scheduletoujino" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>জে. এল.</label>
                                <input type="text" name="schedulejl" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>প্লট নং</label>
                                <input type="text" name="scheduleplotno" ref={register} />
                            </div>
                        </li>
                    </ul>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>উপজেলা</label>
                                <input type="text" name="scheduleupojela" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>এস. এ খতিয়ান</label>
                                <input type="text" name="schedulesakhatian" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>মৌজা.</label>
                                <input type="text" name="schedulemouja" ref={register} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>পরিমাণ</label>
                                <input type="text" name="schedulequantity" ref={register} />
                            </div>
                        </li>
                    </ul>
                </fieldset>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
                    <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', width: '100%' }}>
                        <fieldset>
                            <legend>বিক্রেতার স্বাক্ষর/প্রথম পক্ষ</legend>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="sellername" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="sellerfathername" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="sellernid" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="sellerpresentaddress" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="sellerparmanentaddress" ref={register} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="sellerphoneno" ref={register} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="selleremail" ref={register} />
                            </div >
                        </fieldset>
                        <fieldset>
                            <legend>রেতার স্বাক্ষর/দ্বিতীয় পক্ষ</legend>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="buyername" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="buyerfathername" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="buyernid" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="buyerpresentaddress" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="buyerpernanentaddress" ref={register} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="buyerphoneno" ref={register} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="buyeremail" ref={register} />
                            </div >
                        </fieldset>
                        <fieldset>
                            <legend>আরপিজিসিএল-এর পক্ষে স্বাক্ষর/তৃতীয় পক্ষ</legend>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="rpgclname" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="rpgclfathername" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="rpgclnid" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="rpgclpresentaddress" ref={register} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="rpgclpermanentaddress" ref={register} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="rpgclphoneno" ref={register} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="rpgclemail" ref={register} />
                            </div >
                        </fieldset>
                    </div>
                    <fieldset style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', width: "100%" }}>
                        <legend>সাক্ষীগণ:</legend>
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
                            <div className="form__control">
                                <button type="submit" className="action__button">Next</button>
                            </div>
                        </div >
                    </fieldset>
                </div>
            </form>
        </div>
    )
}

import React from 'react'

export default function FormThree({ setStep, loaninfo }) {
    const nextStep = e => {
        e.preventDefault()
        setStep(4)
    }
    return (
        <div className="requestloan">
            <form onSubmit={nextStep} className="formthree">
                <h2>পক্ষত্রয়ের মধ্যে (between)</h2>

                <h3>প্রথম পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" name="partonename" readOnly defaultValue={loaninfo?.formdata?.partonename} /> পিতা/স্বামী: <input type="text" name="partonefathername" readOnly defaultValue={loaninfo?.formdata?.partonefathername} /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" name="partonereligion" readOnly defaultValue={loaninfo?.formdata?.partonereligion} /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" name="partonebashinda" readOnly defaultValue={loaninfo?.formdata?.partonebashinda} /> থানাধীন জেলা:<input type="text" name="partonejela" readOnly defaultValue={loaninfo?.formdata?.partonejela} />, উপজেলা:<input type="text" name="partoneupojela" readOnly defaultValue={loaninfo?.formdata?.partoneupojela} /> বর্তমান ঠিকানা / প্রতিষ্ঠান <input type="text" name="partoneaddress" readOnly defaultValue={loaninfo?.formdata?.partoneaddress} /> (অতঃপর বলা হবে বিক্রেতা, যার প্রকাশ (এক্সপ্রেশন) বোঝাবে এবং অন্তর্ভুক্তি হবে তার উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (One Part)।</p>
                <h3>দ্বিতীয় পক্ষ</h3>
                <p className="inlinefields">জনাব/বেগম <input type="text" name="parttwoname" readOnly defaultValue={loaninfo?.formdata?.parttwoname} /> পিতা/স্বামী: <input type="text" name="parttwofathername" readOnly defaultValue={loaninfo?.formdata?.parttwofathername} /> জাতীয়তা: বাংলাদেশী, ধর্ম: <input type="text" name="parttworeligion" readOnly defaultValue={loaninfo?.formdata?.parttworeligion} /> অধিবাসী/স্থায়ী বাসিন্দা <input type="text" name="parttwobashinda" readOnly defaultValue={loaninfo?.formdata?.parttwobashinda} /> থানাধীন জেলা:<input type="text" name="parttwojela" readOnly defaultValue={loaninfo?.formdata?.parttwojela} />, উপজেলা:<input type="text" name="parttwoupojela" readOnly defaultValue={loaninfo?.formdata?.parttwoupojela} /> বর্তমান ঠিকানা <input type="text" name="parttwoaddress" readOnly defaultValue={loaninfo?.formdata?.parttwoaddress} /> পদবি:<input type="text" name="parttworank" readOnly defaultValue={loaninfo?.formdata?.parttworank} />, আরপিজিসিএল (অতঃপর বলা হবে 'ক্রেতা', যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে তার মনোনীত ব্যক্তি (Nominee),উত্তরসূরীগণ, বৈধ প্রতিনিধিগণ এবং স্বত্বের অংশীদার) একপক্ষ (Second Part)।</p>
                <h3>তৃতীয় পক্ষ</h3>
                <p>রূপান্তরিত প্রাকৃতিক গ্যাস কোম্পানী লিমিটেড (আরপিজিসিএল)-এর পক্ষ প্রতিনিধিত্ব করবেন কোম্পানি সচিব (অতঃপর বলা হবে 'আরপিজিসিএল' যার প্রকাশ (Expression) বোঝাবে এবং অন্তর্ভুক্তি হবে বৈধ প্রতিনিধি) - তৃতীয় পক্ষ (Third Part)।</p>
                <p className="inlinefields">যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটের একক এবং সম্পূর্ণ মালিক এবং যা তার ভোগদখলে আছে, যার আয়তন <input type="text" name="landarea" readOnly defaultValue={loaninfo?.formdata?.landarea} /> বর্গফুট, অথবা <input type="text" name="landkatha" readOnly defaultValue={loaninfo?.formdata?.landkatha} /> কাঠা/শতাংশ, দাগ নং <input type="text" name="landdagno" readOnly defaultValue={loaninfo?.formdata?.landdagno} />, মৌজা: <input type="text" name="landmouja" readOnly defaultValue={loaninfo?.formdata?.landmouja} /> থানাধীন <input type="text" name="landthana" readOnly defaultValue={loaninfo?.formdata?.landthana} /> জেলা,<input type="text" name="landjela" readOnly defaultValue={loaninfo?.formdata?.landjela} /> উপজেলার অন্তর্ভুক্ত এবং যার বর্ণনা নিম্নোক্ত তালিকায় (Schedule) উল্লিখিত। </p>
                <p>এবং যেহেতু, উল্লেখিত ভেন্ডার (বিক্রেতা) জমি/ফ্ল্যাটটি বিক্রয় করতে ইচ্ছুক এবং 'ক্রেতা' উল্লেখিত জমি/ফ্ল্যাটটি ক্রয় করতে ইচ্ছুক (অতঃপর 'হস্তান্তর জমি/ফ্ল্যাট' (Demised Plot) বলে উল্লেখ করা হবে) যা নিম্নোক্ত তালিকাতে বর্ণিত হয়েছে এবং যা সম্পূর্ণভাবে সকল দায়ভার অভিযোগমুক্ত।</p>
                <fieldset style={{ display: 'flex', flexDirection: "row" }}>
                    <legend>সম্পত্তির তালিকা (Schedule)</legend>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>জেলা/বিভাগ</label>
                                <input type="text" name="schedulejela" readOnly defaultValue={loaninfo?.formdata?.scheduletoujino} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>তৌজি নং</label>
                                <input type="text" name="scheduletoujino" readOnly defaultValue={loaninfo?.formdata?.parttwoname} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>জে. এল.</label>
                                <input type="text" name="schedulejl" readOnly defaultValue={loaninfo?.formdata?.schedulejl} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>প্লট নং</label>
                                <input type="text" name="scheduleplotno" readOnly defaultValue={loaninfo?.formdata?.scheduleplotno} />
                            </div>
                        </li>
                    </ul>
                    <ul style={{ margin: '20px' }}>
                        <li>
                            <div className="form__control">
                                <label>উপজেলা</label>
                                <input type="text" name="scheduleupojela" readOnly defaultValue={loaninfo?.formdata?.scheduleupojela} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>এস. এ খতিয়ান</label>
                                <input type="text" name="schedulesakhatian" readOnly defaultValue={loaninfo?.formdata?.schedulesakhatian} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>মৌজা.</label>
                                <input type="text" name="schedulemouja" readOnly defaultValue={loaninfo?.formdata?.schedulemouja} />
                            </div>
                        </li>
                        <li>
                            <div className="form__control">
                                <label>পরিমাণ</label>
                                <input type="text" name="schedulequantity" readOnly defaultValue={loaninfo?.formdata?.schedulequantity} />
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
                                <input type="text" name="sellername" readOnly defaultValue={loaninfo?.formdata?.sellername} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="sellerfathername" readOnly defaultValue={loaninfo?.formdata?.sellerfathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="sellernid" readOnly defaultValue={loaninfo?.formdata?.sellernid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="sellerpresentaddress" readOnly defaultValue={loaninfo?.formdata?.sellerpresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="sellerparmanentaddress" readOnly defaultValue={loaninfo?.formdata?.sellerparmanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="sellerphoneno" readOnly defaultValue={loaninfo?.formdata?.sellerphoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="selleremail" readOnly defaultValue={loaninfo?.formdata?.selleremail} />
                            </div >
                        </fieldset>
                        <fieldset>
                            <legend>রেতার স্বাক্ষর/দ্বিতীয় পক্ষ</legend>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="buyername" readOnly defaultValue={loaninfo?.formdata?.buyername} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="buyerfathername" readOnly defaultValue={loaninfo?.formdata?.buyerfathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="buyernid" readOnly defaultValue={loaninfo?.formdata?.buyernid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="buyerpresentaddress" readOnly defaultValue={loaninfo?.formdata?.buyerpresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="buyerpernanentaddress" readOnly defaultValue={loaninfo?.formdata?.buyerpernanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="buyerphoneno" readOnly defaultValue={loaninfo?.formdata?.buyerphoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="buyeremail" readOnly defaultValue={loaninfo?.formdata?.buyeremail} />
                            </div >
                        </fieldset>
                        <fieldset>
                            <legend>আরপিজিসিএল-এর পক্ষে স্বাক্ষর/তৃতীয় পক্ষ</legend>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="rpgclname" readOnly defaultValue={loaninfo?.formdata?.rpgclname} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="rpgclfathername" readOnly defaultValue={loaninfo?.formdata?.rpgclfathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="rpgclnid" readOnly defaultValue={loaninfo?.formdata?.rpgclnid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="rpgclpresentaddress" readOnly defaultValue={loaninfo?.formdata?.rpgclpresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="rpgclpermanentaddress" readOnly defaultValue={loaninfo?.formdata?.rpgclpermanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="rpgclphoneno" readOnly defaultValue={loaninfo?.formdata?.rpgclphoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="rpgclemail" readOnly defaultValue={loaninfo?.formdata?.rpgclemail} />
                            </div >
                        </fieldset>
                    </div>
                    <fieldset style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-evenly', width: "100%" }}>
                        <legend>সাক্ষীগণ:</legend>
                        <div style={{ width: "100%", padding: "20px" }}>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="witnessonename" readOnly defaultValue={loaninfo?.formdata?.witnessonename} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="witnessonefathername" readOnly defaultValue={loaninfo?.formdata?.witnessonefathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="witnessonenid" readOnly defaultValue={loaninfo?.formdata?.witnessonenid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="witnessonepresentaddress" readOnly defaultValue={loaninfo?.formdata?.witnessonepresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="witnessoneparmanentaddress" readOnly defaultValue={loaninfo?.formdata?.witnessoneparmanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="witnessonephoneno" readOnly defaultValue={loaninfo?.formdata?.witnessonephoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="witnessoneemail" readOnly defaultValue={loaninfo?.formdata?.witnessoneemail} />
                            </div >
                        </div>
                        <div style={{ width: "100%", padding: "20px" }}>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="witnesstwoname" readOnly defaultValue={loaninfo?.formdata?.witnesstwoname} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="witnesstwofathername" readOnly defaultValue={loaninfo?.formdata?.witnesstwofathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="witnesstwonid" readOnly defaultValue={loaninfo?.formdata?.witnesstwonid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="witnesstwopresentaddress" readOnly defaultValue={loaninfo?.formdata?.witnesstwopresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="witnesstwoparmanentaddress" readOnly defaultValue={loaninfo?.formdata?.witnesstwoparmanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="witnesstwophoneno" readOnly defaultValue={loaninfo?.formdata?.witnesstwophoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="witnesstwoemail" readOnly defaultValue={loaninfo?.formdata?.witnesstwoemail} />
                            </div >
                        </div >
                        <div style={{ width: "100%", padding: "20px" }}>
                            <div className="form__control">
                                <label>নাম</label>
                                <input type="text" name="witnessthreename" readOnly defaultValue={loaninfo?.formdata?.witnessthreename} />
                            </div>
                            <div className="form__control">
                                <label>পিতার নাম</label>
                                <input type="text" name="witnessthreefathername" readOnly defaultValue={loaninfo?.formdata?.witnessthreefathername} />
                            </div>
                            <div className="form__control">
                                <label>জাতীয় পরিচয়পত্র নম্বর</label>
                                <input type="text" name="witnessthreenid" readOnly defaultValue={loaninfo?.formdata?.witnessthreenid} />
                            </div>
                            <div className="form__control">
                                <label>বর্তমান ঠিকানা</label>
                                <textarea type="text" name="witnessthreepresentaddress" readOnly defaultValue={loaninfo?.formdata?.witnessthreepresentaddress} />
                            </div>
                            <div className="form__control">
                                <label>স্থায়ী ঠিকানা</label>
                                <textarea type="text" name="witnessthreeparmanentaddress" readOnly defaultValue={loaninfo?.formdata?.witnessthreeparmanentaddress} />
                            </div >

                            <div className="form__control">
                                <label>মোবাইল ফোন</label>
                                <input type="tel" name="witnessthreephoneno" readOnly defaultValue={loaninfo?.formdata?.witnessthreephoneno} />
                            </div >
                            <div className="form__control">
                                <label>ইমেইল</label>
                                <input type="email" name="witnessthreeemail" readOnly defaultValue={loaninfo?.formdata?.witnessthreeemail} />
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

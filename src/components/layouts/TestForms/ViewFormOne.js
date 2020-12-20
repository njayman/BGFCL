import React from 'react'

export default function ViewFormOne({ setStep, loaninfo }) {
    const nextStep = e => {
        e.preventDefault();
        setStep(2)
    }

    // useEffect(() => {
    //     let l = [...loaninfo]
    //     let loanforminfo = { ...l[0] }
    //     setLoan(loanforminfo)
    // }, [loaninfo])

    return (
        <div className="requestloan">
            <h3>Request Loan</h3>
            <h1>গৃহ নির্মাণ/জমি-ফ্ল্যাট ক্রয় ঋণ/অগ্রিমের জন্য আবেদনপত্র</h1>
            <form onSubmit={nextStep}>
                <div className="form__control">
                    <label>আবেদনকারীর নাম (স্পষ্ট অক্ষরে)</label>
                    <input readOnly type="text" name="fullname" defaultValue={loaninfo?.formdata?.fullname} />
                </div>
                <div className="form__control">
                    <label>পদবি</label>
                    <input readOnly type="text" name="rank" defaultValue={loaninfo?.formdata?.rank} />
                </div>

                <div className="form__control">
                    <label htmlFor="guardianname">পিতা/স্বামীর নাম</label>
                    {/* <p>
                        <input readOnly style={{ width: "auto" }} type="radio" id="father" name="guardian" value="father" checked={e => {
                            return loaninfo?.formdata?.guardian === e.target.value
                        }} />
                        <label htmlFor="father">পিতা</label>
                    </p>
                    <p>
                        <input readOnly style={{ width: "auto" }} type="radio" id="husband" name="guardian" value="husband" checked={e => {
                            return loaninfo?.formdata?.guardian === e.target.value
                        }} />
                        <label htmlFor="husband">স্বামী</label>
                    </p> */}
                    <input readOnly type="text" name="guardianname" defaultValue={loaninfo?.formdata?.guardianname} />
                </div>
                <div className="form__control">
                    <label>জাতীয় পরিচয়পত্র</label>
                    <input readOnly type="text" name="nid" defaultValue={loaninfo?.formdata?.nid} />
                </div>
                <div className="form__control">
                    <label>ই - টিআইএন নম্বর(যদি থাকে)</label>
                    <input readOnly type="text" name="tinno" defaultValue={loaninfo?.formdata?.tinno} />
                </div>
                <div className="form__control">
                    <label>স্থায়ী ঠিকানা</label>
                    <input readOnly type="text" name="permanentaddress" defaultValue={loaninfo?.formdata?.permanentaddress} />
                </div>
                <div className="form__control">
                    <label>বর্তমান বাসস্থানের ঠিকানা</label>
                    <input readOnly type="text" name="presentaddress" defaultValue={loaninfo?.formdata?.presentaddress} />
                </div>
                <div className="form__control">
                    <label>মোবাইল</label>
                    <input readOnly type="text" name="phone" defaultValue={loaninfo?.formdata?.phone} />
                </div>
                <div className="form__control">
                    <label>ইমেইল</label>
                    <input readOnly name="email" type="email" defaultValue={loaninfo?.formdata?.email} />
                </div>
                <div className="form__control">
                    <label>কর্মরত শাখা, উপবিভাগ ও বিভাগ</label>
                    <input readOnly type="text" name="branch" defaultValue={loaninfo?.formdata?.branch} />
                </div>
                <div className="form__control">
                    <label>চাকরিতে যোগদানের তারিখ</label>
                    <input readOnly type="date" name="joindate" defaultValue={loaninfo?.formdata?.joindate} />
                </div>
                <div className="form__control">
                    <label>চাকরির মেয়াদ</label>
                    <input readOnly type="text" name="jobduration" defaultValue={loaninfo?.formdata?.jobduration} />
                </div>
                <div className="form__control">
                    <label>বর্তমান পদে যোগদান/পদন্নোতির তারিখ</label>
                    <input readOnly type="date" name="currentpositiondate" defaultValue={loaninfo?.formdata?.currentpositiondate} />
                </div>
                <div className="form__control">
                    <label>জন্ম তারিখ</label >
                    <input readOnly type="date" name="dateofbirth" defaultValue={loaninfo?.formdata?.dateofbirth} />
                </div>
                <div className="form__control">
                    <label>পিআরএল - এ গমনের তারিখ</label>
                    <input readOnly type="date" name="prldate" defaultValue={loaninfo?.formdata?.prldate} />
                </div>
                <div className="form__control">
                    <label>জাতীয়তা</label>
                    <input readOnly type="text" name="nationality" defaultValue={loaninfo?.formdata?.guardianname} />
                </div>
                <div className="form__control">
                    <label>বেতনস্কেল ও গ্রেড</label>
                    <input readOnly type="text" name="paygrade" defaultValue={loaninfo?.formdata?.paygrade} />
                </div>
                <div className="form__control">
                    <label>বর্তমান মূল বেতন</label>
                    <input readOnly type="text" name="presentmainfee" defaultValue={loaninfo?.formdata?.presentmainfee} />
                </div>
                <h3>যেখানে গৃহনির্মাণ করা হবে/জমি-ফ্ল্যাট ক্রয় করা হবে তার অবস্থান বর্ণনা:</h3>
                <div className="form__control">
                    <label>(ক) সিটি কর্পোরেশন/মহানগর</label>
                    <input readOnly type="text" name="citycorporation" defaultValue={loaninfo?.formdata?.citycorporation} />
                </div>
                <div className="form__control">
                    <label>(খ) বিভাগীয়/জেলা সদর</label>
                    <input readOnly type="text" name="town" defaultValue={loaninfo?.formdata?.town} />
                </div>
                <div className="form__control">
                    <label>(গ) উপজেলা সদর</label>
                    <input readOnly type="text" name="subtown" defaultValue={loaninfo?.formdata?.subtown} />
                </div>
                <div className="form__control">
                    <label>(ঘ) পৌরসভা</label>
                    <input readOnly type="text" name="municipality" defaultValue={loaninfo?.formdata?.municipality} />
                </div>
                <div className="form__control">
                    <label>(ঙ) থানা</label>
                    <input readOnly type="text" name="thana" defaultValue={loaninfo?.formdata?.thana} />
                </div>
                <div className="form__control">
                    <label>(চ) মৌজা</label>
                    <input readOnly type="text" name="mouja" defaultValue={loaninfo?.formdata?.mouja} />
                </div>
                <div className="form__control">
                    <label>(ছ) সিএস খতিয়ান নম্বর</label>
                    <input readOnly type="text" name="cskhatianno" defaultValue={loaninfo?.formdata?.cskhatianno} />
                </div>
                <div className="form__control">
                    <label>(জ) সিএস প্লট নম্বর</label>
                    <input readOnly type="text" name="plotno" defaultValue={loaninfo?.formdata?.plotno} />
                </div>
                <div className="form__control">
                    <label>(ঝ) এসএ খতিয়ান নম্বর</label>
                    <input readOnly type="text" name="sakhatianno" defaultValue={loaninfo?.formdata?.sakhatianno} />
                </div>
                <div className="form__control">
                    <label>(ঞ) আরএস</label>
                    <input readOnly type="text" name="rs" defaultValue={loaninfo?.formdata?.rs} />
                </div>
                <div className="form__control">
                    <label>(ট) সিটি জরিপ</label>
                    <textarea readOnly type="text" name="citysurvey" defaultValue={loaninfo?.formdata?.citysurvey} />
                </div>

                <div className="form__control">
                    <label>(ঠ) চৌহদ্দি</label>
                    <input readOnly type="text" name="boundaries" defaultValue={loaninfo?.formdata?.boundaries} />
                </div>

                <div className="form__control">
                    <label>পূর্ব</label>
                    <input readOnly type="text" name="east" defaultValue={loaninfo?.formdata?.east} />
                </div>
                <div className="form__control">
                    <label>পশ্চিম</label>
                    <input readOnly type="text" name="west" defaultValue={loaninfo?.formdata?.west} />
                </div>
                <div className="form__control">
                    <label>উত্তর</label>
                    <input readOnly type="text" name="north" defaultValue={loaninfo?.formdata?.north} />
                </div>
                <div className="form__control">
                    <label>দক্ষিণ</label>
                    <input type="text" name="south" defaultValue={loaninfo?.formdata?.south} />
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটের ক্রয়মূল্য</label>
                    <input type="number" name="landprice" defaultValue={loaninfo?.formdata?.landprice} />
                </div>
                <div className="form__control">
                    <label>তারিখ (Acquire)</label>
                    <input type="date" name="landacquireprice" defaultValue={loaninfo?.formdata?.landacquireprice} />
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটের আয়তন ও বাজার দর</label>
                    <textarea type="text" name="landareaandmarketprice" defaultValue={loaninfo?.formdata?.landareaandmarketprice} />
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাটটি কোন ব্যক্তিমালিকানাধীন বা প্রতিষ্ঠান থেকে ক্রয় করা হবে তার নাম ও ঠিকানা</label>
                    <textarea type="text" name="flatownerinfo" defaultValue={loaninfo?.formdata?.flatownerinfo} />
                </div>
                <div className="form__control">
                    <label>কোম্পানি বা অন্য কোনো প্রতিষ্ঠান থেকে ইতঃপূর্বে গৃহনির্মাণ ঋণ গ্রহণ করলে বিস্তারিত তথ্য (ঋণের পরিমান, তারিখ  ও জমির অবস্থান)</label>
                    <textarea type="text" name="previousloaninfo" defaultValue={loaninfo?.formdata?.previousloaninfo} />
                </div>
                <div className="form__control">
                    <label>জমি/ফ্ল্যাট অন্য কোন প্রতিষ্ঠানের নিকট বন্ধক (Mortage)/ দায়বদ্ধ কি-না</label>
                    <textarea type="text" name="mortgage" defaultValue={loaninfo?.formdata?.mortgage} />

                </div>
                <div className="form__control">
                    <label>গৃহের অনুমোদিত পরিকল্পনা (যদি থাকে) এবং গৃহটি যদি এক তলার অধিক হয় তবে গৃহটির সর্বমোট ভিত্তি এলাকা (Plinth area) এবং অন্তর্ভুক্ত আবৃত্ত এলাকার (Covered area) বিবরণ</label>
                    <textarea type="text" name="plinthandcoveredarea" defaultValue={loaninfo?.formdata?.plinthandcoveredarea} />
                </div>
                <div className="form__control">
                    <label>গৃহ নির্মাণ কাজ সম্পন্ন/ফ্ল্যাটে বসবাসের সম্ভাব্য তারিখ</label>
                    <textarea type="date" name="flatfinishdate" defaultValue={loaninfo?.formdata?.flatfinishdate} />
                </div>
                <div className="form__control">
                    <label>প্রয়োজনীয় অগ্রিম/ঋণের পরিমাণ</label>
                    <input type="number" name="loanamount" defaultValue={loaninfo?.formdata?.loanamount} />
                </div>
                <div className="form__control">
                    <h3>বিশেষ দ্রষ্টব্য:</h3>
                    <ol>
                        <li>তথ্যবলী পূরণ করে জমির মূল দলিল/সার্টিফাইড কপি, হালসন পর্যন্ত পরিশোধিত খাজনার রশিদ, মিউটেশন/খারিজ, নামজারী ইত্যাদি কাগজের সত্যায়িত ফটোকপি আবেদনপত্রের সাথে সংযুক্ত করতে হবে।</li>
                        <li>অসম্পূর্ণ অথবা ভুল/মিথ্যা তথ্যসংবলিত আবেদনপত্র গ্রহণযোগ্য হবে না।</li>
                        <li>আবেদনপত্রে উল্লিখিত খাত কোন অবস্থাতেই পরিবর্তনযোগ্য নয়।</li>
                    </ol>
                </div>
                {/* <label htmlFor="agreement1"><input id="agreement1" name="agreement1" type="checkbox" checked />আমি এতদ্বারা ঘোষণা করছি যে, এই আবেদনপত্রে আমি যে সমস্ত তথ্য সরবরাহ/দাখিল করেছি, তা আমার জানা ও বিশ্বাসমতে সত্য এবং আমি কোনো কিছু গোপন করিনি। আমি আরও ঘোষণা করছি যে, আমি অগ্রিম গ্রহণ করে গৃহ নির্মাণ/জমি-ফ্ল্যাট ক্রয়ের জন্য ব্যয় করবো এবং যদি এই চুক্তিভংগ হয়, তাহলে এ বাবদ গৃহীত টাকার ওপর হিসাবকৃত সুদসহ সমূদয় অর্থ অবিলম্বে এক কিস্তিতে কর্তৃপক্ষকে ফেরৎ দেবো।</label> */}
                <div className="form__control">
                    <button className="action__button" type="submit">Next</button>
                </div>
            </form >
        </div>
    )
}

var data = {
    testTitle:"Chapter 19. General Anesthesia",
    heading: "",
    content: "",
    innerContent: "<p>To start the test, please click on the <b>Begin </b>button. You will have two attempts to select the correct answer for each question.</p> <p><b>Good luck!</b></p>",
    buttonText: "Begin",
    nMaxPage: 5,
    aBottomNavCustomLabels:['1','2','3','4','5'],
     enableBottomNavCustomLabels: true,
    enableBottomNavCustomLabels: true,
    questionsList: [{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>1.</span> An otherwise healthy 50-year-old patient presents for elective surgery. Upon your evaluation you determine the patient had a cup of coffee with no milk or sugar approximately 3 hours ago. Considering the above information, determine the appropriateness to pursue surgery in this patient.</b></p>",
        input: false,
        isDraggable: false,
        queImage:"",
		queImageThumbnail:false,
        allowCaption:false,
        allowedAttempts:2,
        captiontext:"",
        queImageWidth:30,
        queImageHeight:20,
        allowAnsImages:false,
        answers:[{
            text : "A. Postpone surgery until a later date given that the patient has not followed the NPO instructions and it presents a risk to his health.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Proceed with surgery in 3&#x00A0;hours because the patient only had coffee, which is considered a light meal, and can safely undergo anesthesia.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Postpone surgery as the patient must have 8 hours of NPO time regardless of the type of food ingested.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Proceed with surgery as coffee with no milk or sugar is considered a clear liquid and should be stopped 2 hours prior to surgery.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>Intake of coffee with no milk or sugar constitutes a clear liquid. The ASA recommendations noted on <b>Table 19.4</b> point to appropriate NPO time for clear liquids to be 2 hours, which allows this patient to undergo surgery safely. Answer A is incorrect given that this approach is not following the ASA recommendations and is unnecessarily postponing a procedure that could be safely performed. Answer B is incorrect as it assumes that coffee with no sugar or milk constitutes a light meal. This answer would be correct if the patient had taken milk with their coffee. Answer C is incorrect because, as we mentioned before, the time for NPO is dependent on the type of food that was ingested, and in this particular case the patient may proceed with surgery safely.</p>"
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>Intake of coffee with no milk or sugar constitutes a clear liquid. The ASA recommendations noted on <b>Table 19.4</b> point to appropriate NPO time for clear liquids to be 2 hours, which allows this patient to undergo surgery safely. Answer A is incorrect given that this approach is not following the ASA recommendations and is unnecessarily postponing a procedure that could be safely performed. Answer B is incorrect as it assumes that coffee with no sugar or milk constitutes a light meal. This answer would be correct if the patient had taken milk with their coffee. Answer C is incorrect because, as we mentioned before, the time for NPO is dependent on the type of food that was ingested, and in this particular case the patient may proceed with surgery safely.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>2.</span> You induced your 20-year-old patient using rocuronium prior to intubation. The procedure is finished significantly faster than you anticipated and your patient has no twitches when using your twitch monitor on the ulnar nerve. After confirming appropriate placement of the electrodes and that the monitor is functioning appropriately, you proceed in the following way:</b></p>",
        input: false,
        isDraggable: false,
        queImage:"",
		queImageThumbnail:false,
        allowCaption:false,
        allowedAttempts:2,
        captiontext:"",
        queImageWidth:30,
        queImageHeight:20,
        allowAnsImages:false,
        answers:[{
            text : "A. You give maximum dose of neostigmine and glycopyrrolate and remove the tube as soon as the patient has clinical signs of recovered strength.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. You wait until the patient has sufficient twitches before you administer neostigmine and glycopyrrolate for reversal.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>This is a common situation that occurs with overdosing of nondepolarizing neuromuscular blockers. With the advent of sugammadex, this situation can be rapidly solved by the administration of this medication. Nonetheless, some surgical centers or hospitals with limited resources will not have access to this medication, which reinforces the need to understand the appropriate use of neostigmine and glycopyrrolate as reversal agents. Answer A is incorrect because if these medications are administered prior to the patient having sufficient twitches, the patient may be able to regain clinical signs of strength but lose that strength in the PACU, where they will be less monitored and prone to have complications undiagnosed. Answer C is incorrect because it does not state that the patient would receive reversal agents. The incidence of residual neuromuscular blockade is high even in young patients and it could lead to respiratory complications. Answer D is incorrect because there are other options that are quicker, less expensive, and likely to result in the same outcome without need of incurring on additional expenses. To summarize, reversal agents should be given once the patient has sufficient twitches and full reversal confirmed after the administration of the medications.</p>"
        },
		{
            text : "C. You transfer the patient to the postanesthesia care unit and await for the patient to regain clinical strength before you remove the tube.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. You call the intensive care unit and have the patient transferred there to be extubated the morning after.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>This is a common situation that occurs with overdosing of nondepolarizing neuromuscular blockers. With the advent of sugammadex, this situation can be rapidly solved by the administration of this medication. Nonetheless, some surgical centers or hospitals with limited resources will not have access to this medication, which reinforces the need to understand the appropriate use of neostigmine and glycopyrrolate as reversal agents. Answer A is incorrect because if these medications are administered prior to the patient having sufficient twitches, the patient may be able to regain clinical signs of strength but lose that strength in the PACU, where they will be less monitored and prone to have complications undiagnosed. Answer C is incorrect because it does not state that the patient would receive reversal agents. The incidence of residual neuromuscular blockade is high even in young patients and it could lead to respiratory complications. Answer D is incorrect because there are other options that are quicker, less expensive, and likely to result in the same outcome without need of incurring on additional expenses. To summarize, reversal agents should be given once the patient has sufficient twitches and full reversal confirmed after the administration of the medications.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>3.</span> The patient arrives at the operating room for a right total knee arthroplasty and the anesthesiology team start their anesthetic. The patient is unconscious, immobile, and intubated. The surgeon walks into the room, cleans the skin in the left knee, and proceeds with surgery. When the patient regains consciousness in the PACU, they alert the team that the surgery was performed in the wrong side. Which of the following would have decreased the risk of this event?</b></p>",
        input: false,
        isDraggable: false,
        queImage:"",
		queImageThumbnail:false,
        allowCaption:false,
        allowedAttempts:2,
        captiontext:"",
        queImageWidth:30,
        queImageHeight:20,
        allowAnsImages:false,
        answers:[{
            text : "A. Preprocedure verification of the patient&#x2019;s identity, type, site, and side of the procedure.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Surgeon marking of the surgical site.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Surgical timeout prior to the beginning of the procedure to verify that the team is in agreement for the type, site, and side of the procedure as well as the identity of the patient and the surgical marking.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. A, B, and C are correct.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>The World Health Organization Surgical Safety Checklist is applied by the characteristics mentioned in answers A, B, and C. None of those options would have been sufficient on their own. The surgical safety checklist should be applied as an institutional policy for the best results to be achieved. Applying it in a case-by-case basis will not have the same effect and errors may continue to be made. Answer E is incorrect because the stem does not show the surgical or anesthesia team performing the appropriate surgical checklist steps and this could have led to the mistake being prevented.</p>"
        },
		{
            text : "E. There is nothing the team or the institution could have done to prevent this event.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>The World Health Organization Surgical Safety Checklist is applied by the characteristics mentioned in answers A, B, and C. None of those options would have been sufficient on their own. The surgical safety checklist should be applied as an institutional policy for the best results to be achieved. Applying it in a case-by-case basis will not have the same effect and errors may continue to be made. Answer E is incorrect because the stem does not show the surgical or anesthesia team performing the appropriate surgical checklist steps and this could have led to the mistake being prevented.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>4.</span> After denitrogenation was performed, the anesthesiologist administers medications and the patient loses consciousness, becomes immobile and apneic. The anesthesiology resident proceeds with intubation, and once the endotracheal tube is inserted in the trachea, the patient&#x2019;s blood pressure and heart rate increase significantly. Of the medications listed below, which one has no role in blunting the sympathetic response to intubation?</b></p>",
        input: false,
        isDraggable: false,
        queImage:"",
		queImageThumbnail:false,
        allowCaption:false,
        allowedAttempts:2,
        captiontext:"",
        queImageWidth:30,
        queImageHeight:20,
        allowAnsImages:false,
        answers:[{
            text : "A. Fentanyl",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Lidocaine",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Propofol",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Propofol has no effect in blunting the sympathetic response but can cause a patient to be sedated with lower doses and lose consciousness with higher doses. Answers A, B, and D are incorrect because all of the medications listed can blunt the sympathetic response to intubation (<b>Table 19.2</b>). Fentanyl is routinely used prior to surgical stimulation with the intention of decreasing said response. Lidocaine has the same use when given at higher doses than normally used for prevention of pain on injection from propofol. Esmolol is a selective beta-1-blocker that can be used instead of narcotics or lidocaine and can be given in a bolus or through an infusion resulting in the decrease of narcotic requirements.</p>"
        },
		{
            text : "D. Esmolol",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Propofol has no effect in blunting the sympathetic response but can cause a patient to be sedated with lower doses and lose consciousness with higher doses. Answers A, B, and D are incorrect because all of the medications listed can blunt the sympathetic response to intubation (<b>Table 19.2</b>). Fentanyl is routinely used prior to surgical stimulation with the intention of decreasing said response. Lidocaine has the same use when given at higher doses than normally used for prevention of pain on injection from propofol. Esmolol is a selective beta-1-blocker that can be used instead of narcotics or lidocaine and can be given in a bolus or through an infusion resulting in the decrease of narcotic requirements.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>5.</span> A patient presents to the operating room for an open abdominal procedure that is expected to last 8 hours. The anesthesiology team does not provide active rewarming and by the end of the surgery the patient&#x2019;s temperature has dropped to 35&#x00A0;&#x00B0;C. What method would have been the most appropriate to prevent heat loss in this patient?</b></p>",
        input: false,
        isDraggable: false,
        queImage:"",
		queImageThumbnail:false,
        allowCaption:false,
        allowedAttempts:2,
        captiontext:"",
        queImageWidth:30,
        queImageHeight:20,
        allowAnsImages:false,
        answers:[{
            text : "A. Forced-air warming blanket",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>The most effective method to prevent heat-loss for patients undergoing surgery is through forced air warming. This method creates a bubble of warm air around the patient and prevents this air from moving away and loosing heat to the much cooler operating room environment. Although other methods exist, this is the least invasive and safer method of doing it. Answer B is incorrect because administering warmed fluids is not proven to be sufficient or necessary. This is not the case with blood products that should be warmed up prior to administration as they are kept refrigerated prior to use and would cause a decrease in the temperature if administered without warming. Answer C is incorrect because it is unnecessarily invasive when other methods like using a forced-air warming blanket would be sufficient. Answer D is incorrect because placing warmed bags of saline in contact with the patient may warm up the patient, but it will also place the patient at risk of possible burns as the patient is unable to react to the noxious temperature stimulus while they remain under anesthesia.</p>"
        },
		{
            text : "B. Warmed fluid administration",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Rewarming by going on cardiopulmonary bypass",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Warmed saline bags applied to the patient&#x2019;s skin",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>The most effective method to prevent heat-loss for patients undergoing surgery is through forced air warming. This method creates a bubble of warm air around the patient and prevents this air from moving away and loosing heat to the much cooler operating room environment. Although other methods exist, this is the least invasive and safer method of doing it. Answer B is incorrect because administering warmed fluids is not proven to be sufficient or necessary. This is not the case with blood products that should be warmed up prior to administration as they are kept refrigerated prior to use and would cause a decrease in the temperature if administered without warming. Answer C is incorrect because it is unnecessarily invasive when other methods like using a forced-air warming blanket would be sufficient. Answer D is incorrect because placing warmed bags of saline in contact with the patient may warm up the patient, but it will also place the patient at risk of possible burns as the patient is unable to react to the noxious temperature stimulus while they remain under anesthesia.</p>"
    }
   ],
    resultContent: "<p>You can choose to retake the quiz or Review it. Click <b>Retake</b> to take the quiz from the beginning.</p>",
    retultResetButtonText: "Retake",
    retultResetButtonText2: "Review"
};

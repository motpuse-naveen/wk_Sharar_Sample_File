var data = {
    testTitle:"Chapter 44. Electrical Safety and Fire",
    heading: "",
    content: "",
    innerContent: "<p>To start the test, please click on the <b>Begin </b>button. You will have two attempts to select the correct answer for each question.</p> <p><b>Good luck!</b></p>",
    buttonText: "Begin",
    nMaxPage: 7,
    aBottomNavCustomLabels:['1','2','3','4','5','6','7'],
     enableBottomNavCustomLabels: true,
    enableBottomNavCustomLabels: true,
    questionsList: [{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>1.</span> All of the following are characteristics of common &#x201C;household&#x201D; electricity EXCEPT:</b></p>",
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
            text : "A. The electrical potential is nominally 120 V.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. The current oscillates at 60 Hz.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Current always flows from the positive (black) wire to the neutral (white) wire.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Typical &#x201C;household&#x201D; electrical supply is AC. The potential difference of the live conductor oscillates in a sinusoidal manner at &#x00B1;170&#x00A0;V around the neutral conductor, but is nominally 120&#x00A0;V. The current therefore changes direction at a rate of 60&#x00A0;Hz (cycles per second).</p>"
        },
		{
            text : "D. The potential difference between the &#x201C;hot&#x201D; and neutral conductor oscillates sinusoidally between &#x00B1;170 V.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Typical &#x201C;household&#x201D; electrical supply is AC. The potential difference of the live conductor oscillates in a sinusoidal manner at &#x00B1;170&#x00A0;V around the neutral conductor, but is nominally 120&#x00A0;V. The current therefore changes direction at a rate of 60&#x00A0;Hz (cycles per second).</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>2.</span> In a hospital operating room, the MOST efficacious way to reduce the possibility of harmful shock to personnel is to:</b></p>",
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
            text : "A. Use a system that transmits power from one circuit to another without a direct electrical connection between them.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>No system is absolutely foolproof, but the best system is one that employs an isolation transformer that allows power to be supplied to the OR, without the need for a direct wire connection. The system is even more foolproof when combined with a line isolation monitor.</p>"
        },
		{
            text : "B. Install GFCI devices at all electrical outlets.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Use only equipment that has a three-pin (conductor) plug.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Only use items of equipment that have been serviced and checked for the absence of leakage current.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>No system is absolutely foolproof, but the best system is one that employs an isolation transformer that allows power to be supplied to the OR, without the need for a direct wire connection. The system is even more foolproof when combined with a line isolation monitor.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>3.</span> All of the following statements regarding a GFCI device are true, EXCEPT:</b></p>",
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
            text : "A. It senses current flow in the ground wire of any device plugged into it.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. If triggered, it will disconnect (&#x201C;unplug&#x201D;) all devices plugged into it.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. If triggered, a red light will come on, but it will not sound an alarm.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. It will remain operative if a two-pin adapter is inserted between a three-pin plug and the outlet.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>A GFCI senses current flow in the ground wire of equipment plugged into it. Eliminating the ground connection by use of a two-pin adapter renders the GFCI inoperative. If the equipment malfunctions (eg, metal casing becomes &#x201C;live&#x201D;), the GFCI will cut off power to the outlet and a red light will appear. All items of equipment plugged into outlets controlled by the GFCI will also be turned off. No alarm will sound.</p>"
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>A GFCI senses current flow in the ground wire of equipment plugged into it. Eliminating the ground connection by use of a two-pin adapter renders the GFCI inoperative. If the equipment malfunctions (eg, metal casing becomes &#x201C;live&#x201D;), the GFCI will cut off power to the outlet and a red light will appear. All items of equipment plugged into outlets controlled by the GFCI will also be turned off. No alarm will sound.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>4.</span> All of the following statements regarding electrical power supplied to an OR by an isolation transformer in conjunction with a line isolation monitor (LIM) are true EXCEPT:</b></p>",
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
            text : "A. Electrical power is delivered by induction of a magnetic field across two separated wire coils.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Under normal operation, the output of the isolation transformer is through two wire leads, one at 120&#x00A0;V and the other at 0&#x00A0;V (ground).",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>The isolation transformer &#x201C;isolates&#x201D; the electrical power in the OR by inducing a magnetic field across two physically separated wire coils. The output from the secondary coil has a potential difference of 120&#x00A0;V but neither lead is grounded (at 0&#x00A0;V). If a person touches a malfunctioning piece of equipment, one wire from the outlet becomes grounded, the LIM will alarm, power will continue to the equipment, and the person will not receive a shock.</p>"
        },
		{
            text : "C. Electrical power will continue to be provided at the outlet if a malfunctioning piece of equipment is plugged in.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. If a person touches a malfunctioning piece of equipment plugged into a properly functioning isolation circuit, some current will flow through the person but no shock will be perceived.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>The isolation transformer &#x201C;isolates&#x201D; the electrical power in the OR by inducing a magnetic field across two physically separated wire coils. The output from the secondary coil has a potential difference of 120&#x00A0;V but neither lead is grounded (at 0&#x00A0;V). If a person touches a malfunctioning piece of equipment, one wire from the outlet becomes grounded, the LIM will alarm, power will continue to the equipment, and the person will not receive a shock.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>5.</span> If the LIM alarms, the most appropriate next action for the anesthesiologist is to:</b></p>",
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
            text : "A. Convert to manual ventilation and prepare to administer intravenous anesthesia.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Have the LIM alarm reset, but be prepared to have all electrical equipment checked at the end of the case.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Recommend the surgical procedure be rapidly aborted and have someone unplug all nonessential pieces of equipment.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Have someone sequentially unplug single pieces of equipment until the LIM alarm stops and the offending device is discovered.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>If the LIM alarms, it is not an emergency. Electrical power will continue to be supplied, but the safety feature of the isolation circuit has been bypassed. Each electrical device should sequentially be unplugged until the alarm stops. The faulty piece of equipment must then be removed or replaced. If it is an essential piece of equipment, it is acceptable to continue and complete the surgical procedure.</p>"
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>If the LIM alarms, it is not an emergency. Electrical power will continue to be supplied, but the safety feature of the isolation circuit has been bypassed. Each electrical device should sequentially be unplugged until the alarm stops. The faulty piece of equipment must then be removed or replaced. If it is an essential piece of equipment, it is acceptable to continue and complete the surgical procedure.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>6.</span> Which of the following statements is TRUE?</b></p>",
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
            text : "A. A dispersive pad applied to the patient is required for both mono- and bipolar electrosurgical instruments.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Use of electrosurgical devices is contraindicated when patients have an implanted cardioverter defibrillator (AICD).",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. The current frequency of the electrosurgical unit is so high that if passed through the heart, ventricular fibrillation is unlikely.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>A dispersive electrode is only required for monopolar electrosurgical instruments. The current frequency of an ESU is very high and can safely pass through the heart without risk of fibrillation. The dispersive plate, although commonly referred to as a &#x201C;ground&#x201D; plate, is not connected to ground. It is safe to use an ESU when patients have an AICD, but a magnet must be placed over it or the AICD must be reprogrammed prior to surgery to prevent the AICD from misinterpreting the ESU as ventricular fibrillation.</p>"
        },
		{
            text : "D. The dispersive plate is grounded so that the patient does not receive a shock.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>A dispersive electrode is only required for monopolar electrosurgical instruments. The current frequency of an ESU is very high and can safely pass through the heart without risk of fibrillation. The dispersive plate, although commonly referred to as a &#x201C;ground&#x201D; plate, is not connected to ground. It is safe to use an ESU when patients have an AICD, but a magnet must be placed over it or the AICD must be reprogrammed prior to surgery to prevent the AICD from misinterpreting the ESU as ventricular fibrillation.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>7.</span> All of the following scenarios represent a significant risk for fire associated with use of an electrosurgical device EXCEPT:</b></p>",
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
            text : "A. Tracheostomy during anesthesia with isoflurane, 70% nitrous oxide, and 30% oxygen.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Laparoscopy during which the pneumoperitoneum is achieved with carbon dioxide.",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>Carbon dioxide does not support combustion so that use of an ESU intraperitoneally is safe. Nitrous oxide supports combustion so it should not be administered if the ESU is to be used at the time of tracheal incision. Oxygen should be diluted with air or nitrogen. Only &#x201C;laser-safe&#x201D; endotracheal tubes may be used during laser surgery in proximity to the airway. Oxygen administered via a plastic face mask can contribute to a devastating fire in the event that it is exposed to an ESU or ignited drapes. Administer only enough oxygen to keep the oxygen saturation as measured by pulse oximetry at a safe level.</p>"
        },
		{
            text : "C. Laser surgery for laryngeal papilloma with general anesthesia achieved via a standard endotracheal tube.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Facial plastic surgery performed during conscious sedation with 100% oxygen administered via plastic face mask under the drapes.",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>Carbon dioxide does not support combustion so that use of an ESU intraperitoneally is safe. Nitrous oxide supports combustion so it should not be administered if the ESU is to be used at the time of tracheal incision. Oxygen should be diluted with air or nitrogen. Only &#x201C;laser-safe&#x201D; endotracheal tubes may be used during laser surgery in proximity to the airway. Oxygen administered via a plastic face mask can contribute to a devastating fire in the event that it is exposed to an ESU or ignited drapes. Administer only enough oxygen to keep the oxygen saturation as measured by pulse oximetry at a safe level.</p>"
    }
   ],
    resultContent: "<p>You can choose to retake the quiz or Review it. Click <b>Retake</b> to take the quiz from the beginning.</p>",
    retultResetButtonText: "Retake",
    retultResetButtonText2: "Review"
};

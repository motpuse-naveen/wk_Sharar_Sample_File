var data = {
    testTitle:"Chapter 14. The Anesthesia Workstation",
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
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>1.</span> Your department has purchased brand new anesthesia machines and you are using one for the first time. As compared to older, conventional anesthesia machines, the main hazard to be mindful of with new machines is which of the following?</b></p>",
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
            text : "A. Volutraumatic lung injury when using high fresh gas flows during mechanical ventilation",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Patient awareness during mechanical ventilation if the breathing bag becomes disconnected",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>New machines use fresh gas flow decoupling in which the fresh gas flow is diverted into the breathing bag during mechanical inspiration. Thus, the breathing bag is directly involved even during mechanical ventilation. If the breathing bag becomes disconnected, volatile anesthetic will spill into the operating room contaminating it and the patient will not receive sufficient anesthesia as the leak entrains room air into the circuit.</p>"
        },
		{
            text : "C. Consumption of oxygen for use as a drive gas for the ventilator bellows",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Greater chance of malfunction of inspiratory and/or expiratory one-way valves",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>New machines use fresh gas flow decoupling in which the fresh gas flow is diverted into the breathing bag during mechanical inspiration. Thus, the breathing bag is directly involved even during mechanical ventilation. If the breathing bag becomes disconnected, volatile anesthetic will spill into the operating room contaminating it and the patient will not receive sufficient anesthesia as the leak entrains room air into the circuit.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>2.</span> Modern carbon dioxide absorbents are considered safer with respect to potential toxic by-products when exposed to volatile anesthetics. The main component in older absorbents that imposed this risk was which of the following?</b></p>",
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
            text : "A. Lithium salts",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Calcium carbonate",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Calcium hydroxide",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Sodium hydroxide",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>Sodium hydroxide is a very reactive base that leads to potentially toxic by-products when it encounters volatile agents in the absorbent.</p>"
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>D</span></b></p><p class='ANSbTXT'>Sodium hydroxide is a very reactive base that leads to potentially toxic by-products when it encounters volatile agents in the absorbent.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>3.</span> Variable bypass vaporizers are calibrated to exploit which property of volatile anesthetics to deliver these drugs into the fresh gas flow path of the anesthesia machine?</b></p>",
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
            text : "A. Boiling point",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Lipid solubility",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Vapor pressure",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Vaporizers are calibrated to the saturated vapor pressure of an inhalational anesthetic, which determines the vapor tension inside the vaporizer during use.</p>"
        },
		{
            text : "D. Thermal conductivity",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>C</span></b></p><p class='ANSbTXT'>Vaporizers are calibrated to the saturated vapor pressure of an inhalational anesthetic, which determines the vapor tension inside the vaporizer during use.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>4.</span> Which of the following mechanisms helps ensure that a medical gas supply line like nitrous oxide will not be inadvertently connected to the wrong coupling interface on the back of an anesthesia machine?</b></p>",
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
            text : "A. Fail-safe system",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "B. Diameter index system",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>The diameter index safety system ensures hospital supply gases are interfaced to the correct coupling on the anesthesia machine. A given gas hose has a unique diameter that will not fit on an incorrect gas coupling.</p>"
        },
		{
            text : "C. Proportioning system",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Pin index system",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>B</span></b></p><p class='ANSbTXT'>The diameter index safety system ensures hospital supply gases are interfaced to the correct coupling on the anesthesia machine. A given gas hose has a unique diameter that will not fit on an incorrect gas coupling.</p>"
    },
		{
        step:"",
        question: "<p class='RQMNLMFIRST'><b><span class='que0'>5.</span> A healthy 3-year-old boy requires general anesthesia. An inhalational induction with sevoflurane is performed using 100% oxygen at 10&#x00A0;L/min fresh gas flow. Gas flow at this rate is characterized by which of the following properties?</b></p>",
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
            text : "A. Dependence on gas density",
            correct : true,
            feedbackText : "<span>Good!</span> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>The question describes high gas flows that are turbulent. Turbulent gas flow is dependent on gas density.</p>"
        },
		{
            text : "B. Laminar flow dynamics",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "C. Lower risk of depletion of volatile anesthetic",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        },
		{
            text : "D. Flow through a smaller diameter Thorpe tube",
            correct : false,
            feedbackText : "<b>Try Again</b>. Please close (X) this box and <b>Try Again</b> button will appear."
        }],
        remFeedbackText: "<b>Here is the correct answer!</b> <p class='ANSbNL1'><b><span class='que0'>A</span></b></p><p class='ANSbTXT'>The question describes high gas flows that are turbulent. Turbulent gas flow is dependent on gas density.</p>"
    }
   ],
    resultContent: "<p>You can choose to retake the quiz or Review it. Click <b>Retake</b> to take the quiz from the beginning.</p>",
    retultResetButtonText: "Retake",
    retultResetButtonText2: "Review"
};

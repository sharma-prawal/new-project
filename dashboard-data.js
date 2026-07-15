window.PULSEBOARD_DATA = {
  updatedAt: "2026-07-15T08:31:30+05:30",
  meetings: [
    {
      title: "IMP: POSH Awareness || Training session || 15th July 2026",
      time: "11:30 - 12:30",
      source: "Company Calendar",
      bucket: "company",
      detail: "Mandatory online POSH training. Calendar response is still needsAction. This overlaps BIM KT Updates from 12:00 - 12:30, so confirm which meeting takes priority for the overlap.",
      url: "https://www.google.com/calendar/event?eid=MnJhMHZqNmc4cHRvM2FmOXFjaDNiMmFidDAgcHJhd2FsLnNoYXJtYUBzdWNjZXNzaXZlLnRlY2g&ctz=Asia/Kolkata",
      placeholder: false
    },
    {
      title: "BIM KT Updates",
      time: "12:00 - 12:30",
      source: "Company Calendar",
      bucket: "company",
      detail: "Knowledge-transfer update meeting. Response is still needsAction and it overlaps the mandatory POSH training session.",
      url: "https://www.google.com/calendar/event?eid=N2YwZGNwMTNtdGM0NmppMWs1MmV0c3NndnNfMjAyNjA3MTVUMDYzMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: false
    },
    {
      title: "Spire | Internal PHP Standup",
      time: "16:30 - 17:30",
      source: "Company Calendar",
      bucket: "company",
      detail: "Accepted internal PHP standup. Routine Office, lunch, tea, and the long-running continuing-education marker were omitted from the active meeting list.",
      url: "https://www.google.com/calendar/event?eid=MzY5cnFrbGQwYjk1djBta2E5YWVoYTlmNGZfMjAyNjA3MTVUMTEwMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: false
    },
    {
      title: "Scrum of Scrums (SOS) - Placeholder",
      time: "19:00 - 19:30",
      source: "Company Calendar",
      bucket: "company",
      detail: "Explicit placeholder event. Keep this separated from confirmed meetings until the SOS attendee list or active status is confirmed.",
      url: "https://www.google.com/calendar/event?eid=NDRmdXNzNXMxbjMzY2VjN2pzZWUyajhsZDZfMjAyNjA3MTVUMTMzMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: true
    },
    {
      title: "Data Refinery Sprint Planning - Placeholder",
      time: "19:30 - 21:00",
      source: "Project 2 Calendar",
      bucket: "project-2",
      detail: "Explicit Project 2 placeholder. It overlaps the 20:00 Kytes reminder and sits before the Zulu placeholder, so confirm whether this planning block is active today.",
      url: "https://www.google.com/calendar/event?eid=MzNvdG1oOG9nNW0wajhhbTZvNjJjdG9vZmdfMjAyNjA3MTVUMTQwMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: true
    },
    {
      title: "Add Kytes Entries",
      time: "20:00 - 20:15",
      source: "Company Calendar",
      bucket: "company",
      detail: "Accepted operational reminder. It falls inside the Data Refinery Sprint Planning placeholder window.",
      url: "https://www.google.com/calendar/event?eid=NWxmOWt0MXZtcjVvbmhlczBmdDlzbW9hMDRfMjAyNjA3MTVUMTQzMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: false
    },
    {
      title: "Whiskey - Stand Up",
      time: "20:15 - 20:30",
      source: "Project 1 Calendar",
      bucket: "project-1",
      detail: "Whiskey team meeting via Slack Huddle. Calendar response still shows needsAction.",
      url: "https://www.google.com/calendar/event?eid=dWlscmZrbHNuM25qbjJqaHFmdHE3NDFwMWJfMjAyNjA3MTVUMTQ0NTAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: false
    },
    {
      title: "Zulu Standup - Placeholder",
      time: "21:45 - 22:15",
      source: "Project 2 Calendar",
      bucket: "project-2",
      detail: "Explicit placeholder Zulu standup. Treat as tentative unless Project 2 confirms attendance.",
      url: "https://www.google.com/calendar/event?eid=NmViYnNuMmtuOWI1bXFzdHBzdXR0ZXNnam9fMjAyNjA3MTVUMTYxNTAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata",
      placeholder: true
    }
  ],
  messages: [
    {
      title: "Payliance delivery and processing alerts fired without matching resolution mail",
      source: "Company Gmail / Azure Monitor",
      received: "15 Jul 06:41 - 07:16",
      bucket: "project-1",
      detail: "Error delivery count and Error processing time fired again for spire-payliance-prod. Latest metric values are lower, but exact Gmail searches found no resolved notice for either alert family in the last three days.",
      url: "https://mail.google.com/mail/#all/19f63748f70dccfc"
    },
    {
      title: "Companion Payliance alerts resolved after the same incident window",
      source: "Company Gmail / Azure Monitor",
      received: "15 Jul 07:00 - 07:35",
      bucket: "project-1",
      detail: "API failure, retry, log failure, and dead-letter processing alerts have resolution mails. These do not close the separate delivery-count and processing-time alert families.",
      url: "https://mail.google.com/mail/#all/19f6385d8e426e72"
    },
    {
      title: "IOCC Whiskey PROD deployment invite was canceled",
      source: "Project 1 Gmail / Calendar Invite",
      received: "15 Jul 07:35",
      bucket: "project-1",
      detail: "Donald Nguyen's IOCC Spire 2.0 PROD Whiskey deployment invite for 07:30 - 09:30 IST was canceled and removed from the calendar. Original note said partial deployment: update Python version only.",
      url: "https://mail.google.com/mail/#all/19f63857e9adfc10"
    },
    {
      title: "Ashish Baliyan attendance regularization needs review",
      source: "Company Gmail / Keka",
      received: "09 Jul 17:05",
      bucket: "company",
      detail: "Ashish requested attendance regularization for Jul 08, 2026 with note: Please regularize. Last approved by Shivi Mishra; Approve and Decline controls are still present.",
      url: "http://successivesoftware.keka.com/#/inbox/action/attendanceadjustment/32088503/details"
    },
    {
      title: "Bhavya Goel attendance regularization remains open",
      source: "Company Gmail / Keka",
      received: "06 Jul 10:53",
      bucket: "company",
      detail: "Bhavya requested regularization for Jul 03, 2026 with note: left early for evening calls. Last approved by Madhumita Roy; Approve and Decline controls are still present.",
      url: "http://successivesoftware.keka.com/#/inbox/action/attendanceadjustment/32025018/details"
    },
    {
      title: "Weekly Pulse mails are still in the inbox",
      source: "Company Gmail / Keka",
      received: "22 Jun and 29 Jun",
      bucket: "company",
      detail: "Keka returned two Weekly Pulse mails still in the inbox. The latest one is Monday, 29 June with a direct Take Pulse link.",
      url: "https://successivesoftware.keka.com/#/home/dashboard/employee-pulse/243e75fb-5173-f111-ac9c-7ced8d9f7868"
    },
    {
      title: "Latest Keka daily digest found is from July 14",
      source: "Company Gmail / Keka",
      received: "14 Jul 09:07",
      bucket: "company",
      detail: "The latest digest found lists Anuj Kumar working from home from Jul 13 - Jul 14. No July 15 daily digest was returned by the search.",
      url: "https://mail.google.com/mail/#all/19f5eb35a4ec00d2"
    }
  ],
  actions: [
    {
      id: "2026-07-15-resolve-posh-bim-overlap",
      text: "Resolve the POSH training and BIM KT overlap",
      due: "Before 11:30",
      priority: "high",
      detail: "Mandatory POSH training runs 11:30 - 12:30 and overlaps BIM KT Updates from 12:00 - 12:30. Both calendar items still need a response or decision.",
      source: "Google Calendar",
      trigger: "POSH training and BIM KT Updates overlap",
      url: "https://www.google.com/calendar/event?eid=MnJhMHZqNmc4cHRvM2FmOXFjaDNiMmFidDAgcHJhd2FsLnNoYXJtYUBzdWNjZXNzaXZlLnRlY2g&ctz=Asia/Kolkata"
    },
    {
      id: "2026-07-15-investigate-payliance-delivery-processing-alerts",
      text: "Check recurring Payliance delivery and processing alerts",
      due: "Now",
      priority: "high",
      detail: "Error delivery count and Error processing time fired again today and no matching resolved notice was found for either alert family. Companion alerts resolved, but these two families remain unclear.",
      source: "Company Gmail / Azure Monitor",
      trigger: "Error delivery count and Error processing time fired notices",
      url: "https://mail.google.com/mail/#all/19f63748f70dccfc"
    },
    {
      id: "2026-07-15-review-ashish-attendance-regularization",
      text: "Review Ashish Baliyan's attendance regularization request",
      due: "Today",
      priority: "high",
      detail: "Keka still exposes Approve and Decline controls for Ashish's Jul 08 regularization request. Confirm context around the note 'Please regularize' before acting.",
      source: "Company Gmail / Keka",
      trigger: "Attendance Regularization Request by Ashish Baliyan",
      url: "http://successivesoftware.keka.com/#/inbox/action/attendanceadjustment/32088503/details"
    },
    {
      id: "2026-07-15-review-bhavya-attendance-regularization",
      text: "Review Bhavya Goel's attendance regularization request",
      due: "Today",
      priority: "high",
      detail: "Keka still exposes Approve and Decline controls for Bhavya's Jul 03 regularization request. Note says she left early for evening calls.",
      source: "Company Gmail / Keka",
      trigger: "Attendance Regularization Request by Bhavya Goel",
      url: "http://successivesoftware.keka.com/#/inbox/action/attendanceadjustment/32025018/details"
    },
    {
      id: "2026-07-15-clear-calendar-needsaction",
      text: "Clear pending calendar responses",
      due: "Before the meetings",
      priority: "medium",
      detail: "POSH Awareness, BIM KT Updates, and Whiskey - Stand Up show needsAction. Routine lunch, tea, Office, and continuing-education markers were omitted.",
      source: "Google Calendar",
      trigger: "Calendar response status needsAction",
      url: "https://www.google.com/calendar"
    },
    {
      id: "2026-07-15-confirm-project-2-placeholders",
      text: "Confirm today's Project 2 placeholder blocks",
      due: "Before 19:00",
      priority: "medium",
      detail: "SOS, Data Refinery Sprint Planning, and Zulu are explicitly marked Placeholder. Confirm whether they are active before treating them as committed meetings.",
      source: "Google Calendar",
      trigger: "SOS, Data Refinery Sprint Planning, and Zulu placeholders",
      url: "https://www.google.com/calendar/event?eid=MzNvdG1oOG9nNW0wajhhbTZvNjJjdG9vZmdfMjAyNjA3MTVUMTQwMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata"
    },
    {
      id: "2026-07-15-complete-weekly-pulse",
      text: "Complete open Weekly Pulse items if still outstanding",
      due: "Today",
      priority: "medium",
      detail: "Gmail returned Weekly Pulse mails from Jun 22 and Jun 29 still in the inbox. The latest one has a direct Take Pulse link.",
      source: "Company Gmail / Keka",
      trigger: "Your Weekly Pulse is Ready",
      url: "https://successivesoftware.keka.com/#/home/dashboard/employee-pulse/243e75fb-5173-f111-ac9c-7ced8d9f7868"
    },
    {
      id: "2026-07-15-add-kytes-entries",
      text: "Add Kytes entries",
      due: "20:00",
      priority: "medium",
      detail: "Complete the accepted calendar reminder. It falls inside the Data Refinery Sprint Planning placeholder window.",
      source: "Company Calendar",
      trigger: "Add Kytes Entries",
      url: "https://www.google.com/calendar/event?eid=NWxmOWt0MXZtcjVvbmhlczBmdDlzbW9hMDRfMjAyNjA3MTVUMTQzMDAwWiBwcmF3YWwuc2hhcm1hQHN1Y2Nlc3NpdmUudGVjaA&ctz=Asia/Kolkata"
    }
  ],
  brief: {
    note: "July 15 has a real midday conflict: mandatory POSH training overlaps BIM KT. Payliance delivery and processing alerts fired again without matching resolution mails, while companion alerts resolved. Evening Project 2 items are mostly placeholders, so keep them tentative until confirmed.",
    chips: [
      "1 mandatory conflict",
      "2 unresolved Payliance alert families",
      "3 placeholder events",
      "3 needsAction meetings",
      "Gmail and Calendar only"
    ]
  }
};

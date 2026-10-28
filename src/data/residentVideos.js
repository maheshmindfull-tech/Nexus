/** Resident videos from the shared "nexus 2" Drive folder. Played from Drive so the large files stay out of the repo. */
const clip = (driveId, name, project, flat, videoNo) => ({
  id: driveId,
  name,
  project,
  flat,
  videoNo,
  thumbnail: `https://lh3.googleusercontent.com/d/${driveId}=w640`,
  videoUrl: `https://drive.google.com/file/d/${driveId}/preview`,
});

export const residentVideos = [
  clip('1EEcKKzlQyYh3R6S4-n_1abChYPf9d4CE', 'Mr Manish Dayma', 'Nexus Atrium', 'B-603', 'C0931'),
  clip('1xWdxJxEfP_Dh5SggMPb-BM4Hu7Q-uvrv', 'Mr Shidu Patil', 'Nexus Emerald', 'B-408', 'C0940'),
  clip('1K8382HQRvNXKz_-3asRzGIxheMPykFHQ', 'Mr Sunil Alange', 'Nexus Emerald', 'B-607', 'C0942'),
  clip('1X9BDoiXqcgawO7d2B0Uv3qX4FzkBdcU0', 'Mr Prajakt Tandale & Mrs Rashmi Tandale', 'Nexus Emerald', 'A-204', 'C0955'),
  clip('1IV94sYIwGwOYxfyW7uFTEWWE0-C2RZaj', 'Mr Nishant Hingmare & Mrs Ambika Hingmare', 'Nexus Kinaara', 'D-1201', 'C0975'),
  clip('1hPJz61tdLfdi0wCfQXHUlqmtB1e4JHvY', 'Mr Sandip Avghade & Mr Pranjal Avghade', 'Nexus Kinaara', 'D-1001', 'C0983'),
  clip('1sN3wE_6xAgaGocmNP2atI_0GyfxP3REe', 'Mr Sunil Joshi', 'Nexus Kinaara', 'C 306', ''),
  clip('1TLH81hb5hZIPp-h0YsD3qMkOT7gND69S', 'Mr Wingston Rodrigues & Mrs Sharon Rodrigues', 'Nexus Kinaara', 'D-1305', 'C0991'),
  clip('1DDzx6Fs6gBgqe-IxYC_IHW1Ewargp9se', 'Mr Niranjan Patharwad & Mrs Reena Patharwad', 'Nexus Kinaara', 'C-1504', 'C1008'),
  clip('1jw9MP4zXCBHOvrm4KW_9VT0ZSk9jGBYC', 'Mr Amod Raje & Mrs Shrutika Raje', 'Nexus Kinaara', 'B-1401', 'C1018'),
  clip('1h-11Ygt0vYChLxm4pMiwNB7dakaJGewq', 'Mr Nikhil Chavan', 'Nexus Meridian', '1004', 'C1028'),
  clip('1RJx6Psd3zfuGL7sWAqY-I1AhrwG5ORo6', 'Mr Dheeraj Gunjal & Mrs Shweta Gunjal', 'Nexus Westpride', '912', 'C1034'),
  clip('1I3ViQxK3iWxR6poVwhivB1JMC4do6J23', 'Mr Bhooshan Toke & Mrs Pranjal Toke', 'Nexus Westpride', '412', 'C1039'),
  clip('17MvoU0Ju3YAuJzVdkFOjBNl4GM4YRs34', 'Mr Sharad Kale & Mrs Vaishali Kale', 'Nexus Westpride', '602', 'C1041'),
  clip('1bnynIcAPif5qJQJJZmVr1uftD4Lrsmaz', 'Mr Jagdish Kalloli & Mrs Sumitra Kalloli', 'Nexus Emerald', 'A-208', 'C1054'),
  clip('128ennLfaAuJjQmu_UhxCon7fCj77Cwrz', 'Mr Rahul Ghule & Mrs Sangita Ghule', 'Nexus Atrium', 'C-603', 'C1057'),
  clip('1yq7jKal9FWQIooqFRws5-dwEAhUKw6QM', 'Mr Shrihari Kale & Mrs Sangita Kale', 'Nexus Kinaara', 'C-407', 'C1065'),
];

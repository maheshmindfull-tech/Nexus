/** Resident videos from the shared "nexus 2" Drive folder. Played from Drive so the large files stay out of the repo. */
const clip = (driveId, name, detail = 'Resident video') => ({
  id: driveId,
  name,
  detail,
  thumbnail: `https://lh3.googleusercontent.com/d/${driveId}=w640`,
  videoUrl: `https://drive.google.com/file/d/${driveId}/preview`,
});

export const residentVideos = [
  clip('1jw9MP4zXCBHOvrm4KW_9VT0ZSk9jGBYC', 'Amod Raje'),
  clip('1RJx6Psd3zfuGL7sWAqY-I1AhrwG5ORo6', 'Gunjal'),
  clip('1I3ViQxK3iWxR6poVwhivB1JMC4do6J23', 'Mr Bhooshan Toke'),
  clip('1bnynIcAPif5qJQJJZmVr1uftD4Lrsmaz', 'Mr Jagdish Kalloli & Mrs Sumitra Kalloli'),
  clip('1EEcKKzlQyYh3R6S4-n_1abChYPf9d4CE', 'Mr Manish Dayma', 'B-603'),
  clip('1h-11Ygt0vYChLxm4pMiwNB7dakaJGewq', 'Mr Nikhil Chavan'),
  clip('1DDzx6Fs6gBgqe-IxYC_IHW1Ewargp9se', 'Mr Niranjan Patharwad'),
  clip('1IV94sYIwGwOYxfyW7uFTEWWE0-C2RZaj', 'Mr Nishant Hingmare & Mrs Ambika Hingmare'),
  clip('1X9BDoiXqcgawO7d2B0Uv3qX4FzkBdcU0', 'Mr Prajakt Tandale & Mrs Rashmi Tandale'),
  clip('128ennLfaAuJjQmu_UhxCon7fCj77Cwrz', 'Mr Rahul Ghule & Mrs Sangita Ghule'),
  clip('1hPJz61tdLfdi0wCfQXHUlqmtB1e4JHvY', 'Mr Sandip Avghade & Mr Pranjal Avghade'),
  clip('17MvoU0Ju3YAuJzVdkFOjBNl4GM4YRs34', 'Mr Sharad Kale & Mrs Vaishali Kale'),
  clip('1xWdxJxEfP_Dh5SggMPb-BM4Hu7Q-uvrv', 'Mr Shidu Patil'),
  clip('1yq7jKal9FWQIooqFRws5-dwEAhUKw6QM', 'Mr Shrihari Kale & Mrs Sangita Kale'),
  clip('1K8382HQRvNXKz_-3asRzGIxheMPykFHQ', 'Mr Sunil Alange'),
  clip('1TLH81hb5hZIPp-h0YsD3qMkOT7gND69S', 'Mr Wingston Rodriques & Mrs Sharon Rodriques'),
  clip('1KPbSnDVVe1GhjAWciMMxg8xrzJ-0Z4jG', 'Yogita Chvan'),
  clip('1IeQVhJixv2Hn-NE6nf3KzZFpJ2Qxy_hI', 'Resident story'),
  clip('1sWKl58ZjLfDixmrtQ0_d-tsulC8tBgb0', 'Resident story'),
  clip('1sN3wE_6xAgaGocmNP2atI_0GyfxP3REe', 'Resident story'),
];

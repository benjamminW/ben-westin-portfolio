/*
 * BEN WESTIN PORTFOLIO CONTENT
 *
 * Everything that changes often lives in this file: the featured video,
 * projects, and short-form clips. Edit text here, save, and push.
 *
 * YouTube IDs: for https://www.youtube.com/watch?v=ABC123 the ID is ABC123.
 * Keep videos public or unlisted, with embedding allowed in YouTube Studio.
 */

window.PORTFOLIO = {
  /*
   * FEATURED VIDEO (top of the page).
   * When your 60 to 90 second reel is on YouTube, replace this with it:
   *   { title: "Reel 2026", note: "60 seconds of recent work", youtubeId: "YOUR_REEL_ID" }
   */
  featured: {
    title: "Production Pathway",
    note: "Guilford High School · Pathways series",
    youtubeId: "USOK2pm6m_4",
  },

  /*
   * PROJECTS. Each one becomes a card. `role` is what employers read first,
   * so keep it specific: what you shot, edited, colored, or mixed.
   */
  projects: [
    {
      id: "guilford-pathways",
      title: "Guilford Pathways",
      client: "Guilford High School",
      year: "2023",
      type: "Education · Three-film series",
      role: "Developed, filmed, and edited",
      description:
        "Promotional films on hands-on career pathways, made with students and faculty in the Production Academy, graphic design lab, and the school's credit union partner.",
      videos: [
        { title: "Production Pathway", youtubeId: "USOK2pm6m_4" },
        { title: "Credit Union Pathway", youtubeId: "ZQ8DFilrdjc" },
        { title: "Graphic Lab Pathway", youtubeId: "VxkXWnfxgx0" },
      ],
    },
    {
      id: "community-politics",
      title: "Community and Civic Stories",
      client: "Rockford campaigns and community events",
      year: "",
      type: "Short documentary · Event",
      role: "Shot and edited",
      description:
        "Event coverage and a short documentary on voting in Rockford.",
      videos: [
        { title: "I Voted Today (short doc)", youtubeId: "373NiGmOjOI" },
        { title: "Stroll on State", youtubeId: "9dDQyViynmQ" },
      ],
    },

    /*
     * ADD A PROJECT: copy this, fill it in, and remove the comment marks.
     *
     * {
     *   id: "short-name",
     *   title: "Project title",
     *   client: "Client name",
     *   year: "2026",
     *   type: "Nonprofit · Interview-driven",
     *   role: "Produced, filmed, and edited",
     *   description: "One or two sentences on the project.",
     *   videos: [{ title: "Film title", youtubeId: "YOUTUBE_ID" }],
     * },
     */
  ],

  /*
   * SHORT-FORM. YouTube clips play on the page. Instagram clips open on
   * Instagram in a new tab, which keeps the page fast.
   */
  shorts: [
    { title: "FatherHood United: Back to School Recap", youtubeId: "iN1_97NIevM" },
    { title: "FatherHood United: Father's Day Recap", youtubeId: "KX5sRoaeWPo" },
    { title: "Home for Good: Maurice West", youtubeId: "J-ykt4cN5y4" },
    { title: "Corey Dixon", youtubeId: "HyHtmspZ6hA" },
    { title: "Alderperson Bell, reel 1", instagramUrl: "https://www.instagram.com/reel/DcSIz8eMH0s/" },
    { title: "Alderperson Bell, reel 2", instagramUrl: "https://www.instagram.com/reel/DcMP86zpLEE/" },
    { title: "Alderperson Bell, reel 3", instagramUrl: "https://www.instagram.com/reel/DZuoPUiv2h6/" },
  ],
};
